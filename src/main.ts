import './style.css';
import { Board } from './board/board';
import { parseStory } from './parser/parser';
import { clearStory, emptyStory, loadStory, saveStory } from './storage/storage';
import { KIND_META, KINDS, uid, type StoryElement, type StoryState } from './types';
import { VoiceRecorder, isVoiceSupported } from './voice/voice';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = /* html */ `
  <header class="topbar">
    <div class="brand">
      <span class="brand__mark" aria-hidden="true">📖</span>
      <div>
        <h1 class="brand__name">Storyboard</h1>
        <p class="brand__tag">Say it out loud. Watch your story take shape.</p>
      </div>
    </div>
    <div class="topbar__actions">
      <button class="btn btn--ghost" id="tidy" type="button">Tidy board</button>
      <button class="btn btn--outline" id="new-story" type="button">New story</button>
    </div>
  </header>

  <main class="layout">
    <section class="panel tell" aria-labelledby="tell-title">
      <label class="title-field">
        <span class="sr-only">Story title</span>
        <input id="story-title" maxlength="80" placeholder="Untitled story" />
      </label>
      <h2 id="tell-title" class="panel__title">Tell me what happened</h2>

      <div class="mic-wrap">
        <button id="mic" class="mic" type="button" aria-pressed="false">
          <span class="mic__rings" aria-hidden="true"></span>
          <svg class="mic__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"/>
          </svg>
          <span class="sr-only" id="mic-label">Start listening</span>
        </button>
        <p id="mic-status" class="mic-status" role="status">Tap the mic and start talking</p>
      </div>

      <div id="transcript" class="transcript" aria-live="polite" data-empty="true">
        Your words will appear here as you speak…
      </div>

      <p id="fallback" class="fallback" hidden></p>

      <form id="type-form" class="type-form">
        <label for="type-input" class="type-form__label">Or write it down</label>
        <textarea id="type-input" rows="3" placeholder="This morning my sister Maya and I walked to the beach. I felt nervous but hopeful, and we found an old key."></textarea>
        <button class="btn btn--primary" type="submit">Add to board</button>
      </form>

      <details class="entries">
        <summary>Diary entries <span id="entry-count" class="pill">0</span></summary>
        <ol id="entry-list"></ol>
      </details>
    </section>

    <section class="panel board-panel" aria-labelledby="board-title">
      <div class="board-head">
        <h2 id="board-title" class="panel__title">Your story board</h2>
        <ul id="legend" class="legend"></ul>
      </div>
      <div id="board" class="board">
        <div id="board-empty" class="board__empty">
          <p class="board__empty-title">A blank page, waiting for you.</p>
          <p>Mention people, places, feelings, objects and moments — they'll land here as cards you can drag around.</p>
          <p class="hint">Tip: say <em>“character: the old lighthouse keeper”</em> to add something directly.</p>
        </div>
      </div>
    </section>
  </main>
`;

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)!;

const micBtn = $<HTMLButtonElement>('#mic');
const micLabel = $('#mic-label');
const micStatus = $('#mic-status');
const transcriptEl = $('#transcript');
const fallbackEl = $('#fallback');
const typeForm = $<HTMLFormElement>('#type-form');
const typeInput = $<HTMLTextAreaElement>('#type-input');
const titleInput = $<HTMLInputElement>('#story-title');
const legendEl = $('#legend');
const entryList = $('#entry-list');
const entryCount = $('#entry-count');

let state: StoryState = loadStory();

const board = new Board($('#board'), $('#board-empty'), {
  onMove(id, x, y) {
    update((s) => ({ ...s, elements: s.elements.map((e) => (e.id === id ? { ...e, x, y } : e)) }));
  },
  onDelete(id) {
    update((s) => ({ ...s, elements: s.elements.filter((e) => e.id !== id) }));
  },
});

function update(fn: (s: StoryState) => StoryState) {
  state = fn(state);
  saveStory(state);
  render();
}

function render() {
  board.render(state.elements);
  if (document.activeElement !== titleInput) titleInput.value = state.title === 'Untitled story' ? '' : state.title;

  legendEl.innerHTML = '';
  for (const kind of KINDS) {
    const count = state.elements.filter((e) => e.kind === kind).length;
    const li = document.createElement('li');
    li.className = `legend__item legend__item--${kind}`;
    li.textContent = `${KIND_META[kind].icon} ${KIND_META[kind].plural}`;
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = String(count);
    li.appendChild(pill);
    legendEl.appendChild(li);
  }

  entryCount.textContent = String(state.entries.length);
  entryList.innerHTML = '';
  for (const entry of [...state.entries].reverse()) {
    const li = document.createElement('li');
    const time = document.createElement('time');
    time.dateTime = new Date(entry.createdAt).toISOString();
    time.textContent = new Date(entry.createdAt).toLocaleString(undefined, {
      month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
    });
    const p = document.createElement('p');
    p.textContent = entry.text;
    li.append(time, p);
    entryList.appendChild(li);
  }
}

/** Parse a chunk of story text and drop the resulting elements on the board. */
function addStoryText(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const parsed = parseStory(trimmed);
  update((s) => {
    const elements = [...s.elements];
    for (const p of parsed) {
      const dup = elements.some((e) => e.kind === p.kind && e.text.toLowerCase() === p.text.toLowerCase());
      if (dup) continue;
      const { x, y } = board.placeFor(p.kind, elements);
      const el: StoryElement = { id: uid(), kind: p.kind, text: p.text, x, y, createdAt: Date.now() };
      elements.push(el);
    }
    return {
      ...s,
      elements,
      entries: [...s.entries, { id: uid(), text: trimmed, createdAt: Date.now() }],
    };
  });
}

// ---- Voice ----
const voice = new VoiceRecorder({
  onTranscript(text) {
    transcriptEl.dataset.empty = String(!text);
    transcriptEl.textContent = text || 'Listening…';
  },
  onFinalPhrase(phrase) {
    addStoryText(phrase);
  },
  onStateChange(listening) {
    micBtn.classList.toggle('is-listening', listening);
    micBtn.setAttribute('aria-pressed', String(listening));
    micLabel.textContent = listening ? 'Stop listening' : 'Start listening';
    micStatus.textContent = listening ? 'Listening — tap again to stop' : 'Tap the mic and start talking';
    delete micStatus.dataset.tone;
    if (listening) fallbackEl.hidden = true;
  },
  onError(message, kind) {
    micStatus.textContent = message;
    micStatus.dataset.tone = 'error';
    if (kind === 'fatal') showTypedFirst('Voice isn’t available right now — type your story below and it will build the board the same way. You can tap the mic again after fixing access.');
  },
  onStatus(message) {
    micStatus.textContent = message;
    delete micStatus.dataset.tone;
  },
});

function showTypedFirst(message: string) {
  fallbackEl.hidden = false;
  fallbackEl.textContent = message;
  typeInput.focus();
}

if (!isVoiceSupported() || !voice.supported) {
  micBtn.disabled = true;
  micBtn.classList.add('is-disabled');
  micStatus.textContent = 'Voice input is unavailable in this browser';
  fallbackEl.hidden = false;
  fallbackEl.textContent =
    'Your browser doesn’t support speech recognition (try Chrome, Edge or Safari). No problem — type your story below and it will build the board the same way.';
  transcriptEl.hidden = true;
} else {
  micBtn.addEventListener('click', () => voice.toggle());
}

// ---- Typed fallback ----
typeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addStoryText(typeInput.value);
  typeInput.value = '';
  typeInput.focus();
});
typeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) typeForm.requestSubmit();
});

// ---- Header actions ----
titleInput.addEventListener('change', () => {
  update((s) => ({ ...s, title: titleInput.value.trim() || 'Untitled story' }));
});

$('#tidy').addEventListener('click', () => {
  update((s) => ({ ...s, elements: board.tidy(s.elements) }));
});

$('#new-story').addEventListener('click', () => {
  if (state.elements.length && !confirm('Start a new story? This clears the current board.')) return;
  if (voice.isActive) voice.stop();
  clearStory();
  state = emptyStory();
  saveStory(state);
  transcriptEl.textContent = 'Your words will appear here as you speak…';
  transcriptEl.dataset.empty = 'true';
  render();
});

render();

// Re-clamp card positions when the window size changes.
let resizeTimer: number | undefined;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(render, 120);
});
