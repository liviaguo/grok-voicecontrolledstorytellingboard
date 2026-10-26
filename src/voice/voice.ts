export interface VoiceCallbacks {
  /** Live (interim + final so far) transcript for the current session. */
  onTranscript: (text: string, isFinal: boolean) => void;
  /** Called once per finalized phrase. */
  onFinalPhrase: (text: string) => void;
  onStateChange: (listening: boolean) => void;
  onError: (message: string) => void;
}

const ERROR_MESSAGES: Record<string, string> = {
  'not-allowed': 'Microphone access was blocked. Allow it in your browser settings, or type below.',
  'service-not-allowed': 'Speech recognition is not allowed here. Try Chrome or Edge, or type below.',
  'no-speech': "I didn't catch anything — try again a little closer to the mic.",
  'audio-capture': 'No microphone was found. You can type your story below instead.',
  network: 'Speech recognition needs a network connection in this browser.',
};

export function isVoiceSupported(): boolean {
  return typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/** Thin wrapper around the browser Web Speech API. */
export class VoiceRecorder {
  private recognition: SpeechRecognitionLike | null = null;
  private listening = false;
  private finalText = '';

  constructor(private readonly cb: VoiceCallbacks, lang = navigator.language || 'en-US') {
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return;
    const rec = new Ctor();
    rec.lang = lang;
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => this.setListening(true);
    rec.onend = () => this.setListening(false);
    rec.onerror = (ev) => {
      if (ev.error === 'aborted') return;
      this.cb.onError(ERROR_MESSAGES[ev.error] ?? `Speech error: ${ev.error}`);
    };
    rec.onresult = (ev) => {
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

  start(): void {
    if (!this.recognition || this.listening) return;
    this.finalText = '';
    this.cb.onTranscript('', false);
    try {
      this.recognition.start();
    } catch (err) {
      // start() throws if called while already started.
      console.warn(err);
    }
  }

  stop(): void {
    this.recognition?.stop();
  }

  toggle(): void {
    if (this.listening) this.stop();
    else this.start();
  }

  private setListening(v: boolean) {
    this.listening = v;
    this.cb.onStateChange(v);
  }
}
