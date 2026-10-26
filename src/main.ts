import './style.css';
import { Board } from './board/board';
import { parseStory } from './parser/parser';
import { emptyDay, hasContent, loadStore, saveStore } from './storage/storage';
import {
  KIND_META, KINDS, isoDate, isValidIsoDate, parseIsoDate, shiftDate, uid,
  type DiaryDay, type StoryElement,
} from './types';
import { icon, photoFor, preloadPhotos } from './visuals/visuals';
import { VoiceRecorder, isVoiceSupported } from './voice/voice';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = /* html */ `
  <header class="topbar">
    <div class="brand">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__name">Visual Diary</span>
    </div>
    <nav class="datebar" aria-label="Choose a day">
      <button class="icon-btn" id="prev-day" type="button" aria-label="Previous day">${icon('chevron-left')}</button>
      <label class="datebar__picker">
        <span class="sr-only">Diary date</span>
        <input type="date" id="date-input" />
      </label>
      <button class="icon-btn" id="next-day" type="button" aria-label="Next day">${icon('chevron-right')}</button>
      <button class="btn btn--ghost" id="today" type="button">Today</button>
    </nav>
    <div class="topbar__actions">
      <button class="btn btn--ghost" id="tidy" type="button">Re-layout</button>
      <button class="btn btn--ghost btn--danger" id="clear-day" type="button">Clear day</button>
    </div>
  </header>

  <div class="layout">
    <aside class="sidebar" aria-labelledby="history-title">
      <h2 id="history-title" class="eyebrow">Past diaries</h2>
      <ol id="history" class="history"></ol>
      <p id="history-empty" class="muted small">Your diaries will be listed here by date.</p>
    </aside>

    <section class="compose" aria-labelledby="day-heading">
      <p id="day-weekday" class="eyebrow"></p>
      <h1 id="day-heading" class="day-heading"></h1>
      <label class="title-field">
        <span class="sr-only">Title for this day</span>
        <input id="day-title" maxlength="80" placeholder="Give this day a title" />
      </label>

      <div class="voice">
        <button id="mic" class="mic" type="button" aria-pressed="false">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"/></svg>
          <span id="mic-label">Start speaking</span>
        </button>
        <p id="mic-status" class="mic-status" role="status"><span class="dot"></span><span id="mic-status-text">Mic: not started</span></p>
      </div>

      <div id="transcript" class="transcript" aria-live="polite" data-empty="true">Live transcript appears here.</div>
      <p id="fallback" class="fallback" hidden></p>

      <form id="type-form" class="type-form">
        <label for="type-input" class="eyebrow">Write</label>
        <textarea id="type-input" rows="4" placeholder="This morning my sister Maya and I walked to the beach. I felt nervous but hopeful, and we found an old key."></textarea>
        <div class="type-form__row">
          <span class="muted small">⌘/Ctrl + Enter</span>
          <button class="btn btn--primary" type="submit">Add to board</button>
        </div>
      </form>

      <section class="entries" aria-labelledby="entries-title">
        <h2 id="entries-title" class="eyebrow">Entries <span id="entry-count" class="count">0</span></h2>
        <ol id="entry-list"></ol>
      </section>
    </section>

    <section class="board-panel" aria-labelledby="board-title">
      <div class="board-head">
        <h2 id="board-title" class="eyebrow">Board</h2>
        <ul id="legend" class="legend"></ul>
      </div>
      <div id="board" class="board">
        <div id="board-empty" class="board__empty">
          <p class="board__empty-title">Nothing on this day yet.</p>
          <p class="muted">Speak or write a few sentences. People, places, feelings, objects and scenes are plotted here as image cards.</p>
        </div>
      </div>
    </section>
  </div>
`;

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel)!;

const micBtn = $<HTMLButtonElement>('#mic');
const micLabel = $('#mic-label');
const micStatus = $('#mic-status');
const micStatusText = $('#mic-status-text');
const transcriptEl = $('#transcript');
const fallbackEl = $('#fallback');
const typeForm = $<HTMLFormElement>('#type-form');
const typeInput = $<HTMLTextAreaElement>('#type-input');
const titleInput = $<HTMLInputElement>('#day-title');
const dateInput = $<HTMLInputElement>('#date-input');
const legendEl = $('#legend');
const entryList = $('#entry-list');
const entryCount = $('#entry-count');
const historyEl = $('#history');
const historyEmpty = $('#history-empty');

const store = loadStore();
const today = isoDate();
let currentDate = isValidIsoDate(location.hash.slice(1)) ? location.hash.slice(1) : today;

const day = (): DiaryDay => (store.diaries[currentDate] ??= emptyDay(currentDate));

const board = new Board($('#board'), $('#board-empty'), {
  onMove(id, x, y) {
    update((d) => ({ ...d, elements: d.elements.map((e) => (e.id === id ? { ...e, x, y } : e)) }));
  },
  onDelete(id) {
    update((d) => ({ ...d, elements: d.elements.filter((e) => e.id !== id) }));
  },
});

function update(fn: (d: DiaryDay) => DiaryDay) {
  store.diaries[currentDate] = { ...fn(day()), updatedAt: Date.now() };
  saveStore(store);
  render();
}

function goTo(date: string) {
  if (!isValidIsoDate(date) || date === currentDate) return;
  currentDate = date;
  history.replaceState(null, '', `#${date}`);
  board.reset();
  transcriptEl.textContent = 'Live transcript appears here.';
  transcriptEl.dataset.empty = 'true';
  render();
}

const fmt = (date: string, opts: Intl.DateTimeFormatOptions) => parseIsoDate(date).toLocaleDateString(undefined, opts);

function renderHistory() {
  const dates = new Set(Object.keys(store.diaries).filter((d) => hasContent(store.diaries[d])));
  dates.add(today);
  const sorted = [...dates].sort().reverse();
  historyEl.innerHTML = '';
  for (const date of sorted) {
    const d = store.diaries[date];
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'history__item';
    if (date === currentDate) btn.setAttribute('aria-current', 'date');
    btn.addEventListener('click', () => goTo(date));

    const when = document.createElement('span');
    when.className = 'history__date';
    when.textContent = date === today ? `Today · ${fmt(date, { month: 'short', day: 'numeric' })}` : fmt(date, { weekday: 'short', month: 'short', day: 'numeric', year: date.slice(0, 4) === today.slice(0, 4) ? undefined : 'numeric' });
    const title = document.createElement('span');
    title.className = 'history__title';
    const count = d?.elements.length ?? 0;
    title.textContent = d?.title.trim() || (count ? `${count} element${count === 1 ? '' : 's'}` : 'Empty');

    const thumbs = document.createElement('span');
    thumbs.className = 'history__thumbs';
    for (const src of [...new Set((d?.elements ?? []).map((e) => photoFor(e.asset)).filter(Boolean))].slice(0, 4)) {
      const img = document.createElement('img');
      img.src = src!;
      img.alt = '';
      thumbs.appendChild(img);
    }
    btn.append(when, title);
    if (thumbs.childElementCount) btn.appendChild(thumbs);
    li.appendChild(btn);
    historyEl.appendChild(li);
  }
  historyEmpty.hidden = sorted.length > 1 || hasContent(store.diaries[today]);
}

function render() {
  const d = day();
  dateInput.value = currentDate;
  dateInput.max = today;
  $<HTMLButtonElement>('#next-day').disabled = currentDate >= today;
  $<HTMLButtonElement>('#today').disabled = currentDate === today;
  $('#day-weekday').textContent = currentDate === today ? `Today · ${fmt(currentDate, { weekday: 'long' })}` : fmt(currentDate, { weekday: 'long' });
  $('#day-heading').textContent = fmt(currentDate, { month: 'long', day: 'numeric', year: 'numeric' });
  if (document.activeElement !== titleInput) titleInput.value = d.title;

  board.render(d.elements);

  legendEl.innerHTML = '';
  for (const kind of KINDS) {
    const count = d.elements.filter((e) => e.kind === kind).length;
    const li = document.createElement('li');
    li.className = `legend__item legend__item--${kind}`;
    li.textContent = KIND_META[kind].plural;
    const n = document.createElement('span');
    n.className = 'count';
    n.textContent = String(count);
    li.appendChild(n);
    legendEl.appendChild(li);
  }

  entryCount.textContent = String(d.entries.length);
  entryList.innerHTML = '';
  for (const entry of [...d.entries].reverse()) {
    const li = document.createElement('li');
    const time = document.createElement('time');
    time.dateTime = new Date(entry.createdAt).toISOString();
    time.textContent = new Date(entry.createdAt).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    const p = document.createElement('p');
    p.textContent = entry.text;
    li.append(time, p);
    entryList.appendChild(li);
  }

  renderHistory();
}

/** Parse text and plot the resulting elements on the board right away. */
function addStoryText(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const parsed = parseStory(trimmed);
  update((d) => {
    const elements = [...d.elements];
    for (const p of parsed) {
      const dup = elements.some((e) => e.kind === p.kind && e.text.toLowerCase() === p.text.toLowerCase());
      if (dup) continue;
      const { x, y } = board.placeFor(p.kind, elements);
      const el: StoryElement = { id: uid(), kind: p.kind, text: p.text, note: p.note, asset: p.asset, x, y, createdAt: Date.now() };
      elements.push(el);
    }
    return { ...d, elements, entries: [...d.entries, { id: uid(), text: trimmed, createdAt: Date.now() }] };
  });
}

// ---- Voice (engine lives in src/voice/voice.ts) ----
function setMicStatus(text: string, tone?: 'live' | 'error' | 'busy') {
  micStatusText.textContent = text;
  if (tone) micStatus.dataset.tone = tone;
  else delete micStatus.dataset.tone;
}

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
    micLabel.textContent = listening ? 'Stop' : 'Start speaking';
    setMicStatus(listening ? 'Mic on — listening. Each sentence is plotted as you finish it.' : 'Mic off', listening ? 'live' : undefined);
    if (listening) fallbackEl.hidden = true;
  },
  onError(message, kind) {
    setMicStatus(message, 'error');
    if (kind === 'fatal') showTypedFirst('Voice isn’t available right now — write below and the board builds the same way. Tap the mic again after fixing access.');
  },
  onStatus(message) {
    setMicStatus(message, 'busy');
  },
});

function showTypedFirst(message: string) {
  fallbackEl.hidden = false;
  fallbackEl.textContent = message;
  typeInput.focus();
}

if (!isVoiceSupported() || !voice.supported) {
  micBtn.disabled = true;
  setMicStatus('Voice input isn’t supported in this browser — use Chrome or Edge, or write below.', 'error');
  transcriptEl.hidden = true;
} else {
  micBtn.addEventListener('click', () => voice.toggle());
  // Show the current permission state up front where the browser exposes it.
  navigator.permissions
    ?.query({ name: 'microphone' as PermissionName })
    .then((p) => {
      const show = () => {
        if (voice.isActive) return;
        if (p.state === 'granted') setMicStatus('Mic allowed — tap Start speaking');
        else if (p.state === 'denied') setMicStatus('Mic blocked — allow it in the address bar’s site settings, or write below.', 'error');
        else setMicStatus('Tap Start speaking — your browser will ask for the microphone');
      };
      show();
      p.onchange = show;
    })
    .catch(() => setMicStatus('Tap Start speaking — your browser will ask for the microphone'));
}

// ---- Typed input ----
typeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addStoryText(typeInput.value);
  typeInput.value = '';
  typeInput.focus();
});
typeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) typeForm.requestSubmit();
});

// ---- Date navigation ----
dateInput.addEventListener('change', () => goTo(dateInput.value));
$('#prev-day').addEventListener('click', () => goTo(shiftDate(currentDate, -1)));
$('#next-day').addEventListener('click', () => goTo(shiftDate(currentDate, 1)));
$('#today').addEventListener('click', () => goTo(today));
window.addEventListener('hashchange', () => goTo(location.hash.slice(1)));

// ---- Header actions ----
titleInput.addEventListener('change', () => update((d) => ({ ...d, title: titleInput.value.trim() })));

$('#tidy').addEventListener('click', () => update((d) => ({ ...d, elements: board.tidy(d.elements) })));

$('#clear-day').addEventListener('click', () => {
  if (!hasContent(day())) return;
  if (!confirm(`Clear everything on ${fmt(currentDate, { month: 'long', day: 'numeric' })}?`)) return;
  if (voice.isActive) voice.stop();
  board.reset();
  update(() => emptyDay(currentDate));
});

history.replaceState(null, '', `#${currentDate}`);
render();
preloadPhotos();

let resizeTimer: number | undefined;
window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(render, 120);
});
