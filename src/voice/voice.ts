export interface VoiceCallbacks {
  /** Live (interim + final so far) transcript for the current session. */
  onTranscript: (text: string, isFinal: boolean) => void;
  /** Called once per finalized phrase. */
  onFinalPhrase: (text: string) => void;
  onStateChange: (listening: boolean) => void;
  /**
   * A user-facing problem. `retryable` means tapping the mic again may work;
   * `fatal` means voice won't work here (blocked / no mic) — steer to typing.
   */
  onError: (message: string, kind: VoiceErrorKind) => void;
  /** Optional short status hints (e.g. "Asking for microphone…"). */
  onStatus?: (message: string) => void;
}

export type VoiceErrorKind = 'retryable' | 'fatal';

const ERROR_MESSAGES: Record<string, string> = {
  'not-allowed':
    'Microphone access is blocked. Click the 🔒/camera icon in the address bar, allow the microphone, then tap the mic to retry — or type below.',
  'service-not-allowed': 'Speech recognition is not allowed here. Try Chrome or Edge, or type below.',
  'audio-capture': 'No microphone was found. Plug one in and tap the mic to retry, or type your story below.',
  network: 'Speech recognition lost its network connection. Tap the mic to retry, or type below.',
  'insecure-context': 'Voice needs a secure page (https:// or localhost). Type your story below instead.',
  'start-failed': 'Couldn’t start listening. Tap the mic to try again.',
};

const FATAL_ERRORS = new Set(['not-allowed', 'service-not-allowed', 'audio-capture', 'insecure-context']);

/** Max consecutive auto-restarts with no speech/result before we give up and ask the user to retry. */
const MAX_SILENT_RESTARTS = 5;
const RESTART_DELAY_MS = 250;

export function isVoiceSupported(): boolean {
  return typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/**
 * Wrapper around the browser Web Speech API with:
 * - mic permission priming via getUserMedia before recognition.start()
 * - auto-restart on unexpected `onend` while the user still wants to listen
 * - soft handling of `no-speech`, and guards against double-start races.
 *
 * Future fallback (not implemented): for browsers without SpeechRecognition, record
 * with MediaRecorder and send audio to a transcription endpoint. Typed input is the
 * fallback for now.
 */
export class VoiceRecorder {
  private recognition: SpeechRecognitionLike | null = null;
  private listening = false;
  /** True while the user wants the mic on (between their start tap and stop tap / fatal error). */
  private wantListening = false;
  /** True between calling recognition.start() and its onend — prevents double start. */
  private active = false;
  private starting = false;
  private finalText = '';
  private silentRestarts = 0;
  private restartTimer: number | undefined;

  constructor(private readonly cb: VoiceCallbacks, lang = navigator.language || 'en-US') {
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return;
    const rec = new Ctor();
    rec.lang = lang;
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => this.setListening(true);
    rec.onend = () => this.handleEnd();
    rec.onerror = (ev) => this.handleError(ev.error);
    rec.onresult = (ev) => {
      this.silentRestarts = 0;
      let interim = '';
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const result = ev.results[i];
        const text = result[0].transcript;
        if (result.isFinal) {
          const phrase = text.trim();
          if (phrase) {
            this.finalText = `${this.finalText} ${phrase}`.trim();
            this.cb.onFinalPhrase(phrase);
          }
        } else {
          interim += text;
        }
      }
      const live = `${this.finalText} ${interim}`.trim();
      this.cb.onTranscript(live, interim.length === 0);
    };
    this.recognition = rec;
  }

  get supported(): boolean {
    return this.recognition !== null;
  }

  get isListening(): boolean {
    return this.listening;
  }

  /** Whether the user currently wants the mic on (includes priming / restarting). */
  get isActive(): boolean {
    return this.wantListening;
  }

  async start(): Promise<void> {
    if (!this.recognition || this.wantListening || this.starting) return;
    this.starting = true;
    try {
      const ok = await this.primeMicrophone();
      if (!ok) return;
      this.wantListening = true;
      this.silentRestarts = 0;
      this.finalText = '';
      this.cb.onTranscript('', false);
      this.startRecognition();
    } finally {
      this.starting = false;
    }
  }

  stop(): void {
    this.wantListening = false;
    window.clearTimeout(this.restartTimer);
    if (this.active) this.recognition?.stop();
    else this.setListening(false);
  }

  toggle(): void {
    if (this.wantListening) this.stop();
    else void this.start();
  }

  /**
   * Ask for the mic up front so Chrome shows its permission prompt from the user's tap,
   * and so we can tell "blocked" apart from other failures. Tracks are stopped right away;
   * SpeechRecognition opens its own capture.
   */
  private async primeMicrophone(): Promise<boolean> {
    if (!window.isSecureContext) {
      this.fail('insecure-context');
      return false;
    }
    const md = navigator.mediaDevices;
    if (!md?.getUserMedia) return true; // can't prime; let SpeechRecognition prompt itself
    this.cb.onStatus?.('Asking for microphone access…');
    try {
      const stream = await md.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      return true;
    } catch (err) {
      const name = (err as DOMException)?.name;
      if (name === 'NotAllowedError' || name === 'SecurityError') this.fail('not-allowed');
      else if (name === 'NotFoundError' || name === 'OverconstrainedError') this.fail('audio-capture');
      else if (name === 'NotReadableError' || name === 'AbortError')
        this.cb.onError('Your microphone is busy in another app or tab. Close it and tap the mic to retry.', 'retryable');
      else this.fail('start-failed');
      return false;
    }
  }

  private startRecognition(): void {
    if (!this.recognition || this.active || !this.wantListening) return;
    try {
      this.active = true;
      this.recognition.start();
    } catch (err) {
      // start() throws InvalidStateError if already started — treat as running.
      if ((err as DOMException)?.name !== 'InvalidStateError') {
        this.active = false;
        console.warn(err);
        this.fail('start-failed');
      }
    }
  }

  private handleError(code: string): void {
    if (code === 'aborted') return;
    if (code === 'no-speech') {
      // Silence is normal while thinking; onend will auto-restart if still wanted.
      this.silentRestarts++;
      return;
    }
    this.fail(code);
  }

  private handleEnd(): void {
    this.active = false;
    if (!this.wantListening) {
      this.setListening(false);
      return;
    }
    if (this.silentRestarts >= MAX_SILENT_RESTARTS) {
      this.wantListening = false;
      this.setListening(false);
      this.cb.onError("I haven't heard anything for a while — tap the mic when you're ready.", 'retryable');
      return;
    }
    // Unexpected end (Chrome stops after silence / ~60s / network blips): keep the session going.
    window.clearTimeout(this.restartTimer);
    this.restartTimer = window.setTimeout(() => this.startRecognition(), RESTART_DELAY_MS);
  }

  private fail(code: string): void {
    const kind: VoiceErrorKind = FATAL_ERRORS.has(code) ? 'fatal' : 'retryable';
    this.wantListening = false;
    window.clearTimeout(this.restartTimer);
    if (this.active) this.recognition?.abort();
    this.setListening(false);
    this.cb.onError(ERROR_MESSAGES[code] ?? `Speech error: ${code}. Tap the mic to retry.`, kind);
  }

  private setListening(v: boolean) {
    if (this.listening === v) return;
    this.listening = v;
    this.cb.onStateChange(v);
  }
}
