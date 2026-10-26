import './style.css';
import { Review } from './review/review';
import { asSentence, parseStory, storyLine, takeCompleteSentences } from './parser/parser';
import { emptyDay, hasContent, loadStore, saveStore } from './storage/storage';
import {
  KIND_META, KINDS, isoDate, isValidIsoDate, parseIsoDate, shiftDate, uid,
  type DiaryDay, type StoryElement,
} from './types';
import { icon, visualFor } from './visuals/visuals';
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
          <button class="btn btn--primary" type="submit">Add to diary</button>
        </div>
      </form>

      <section class="entries" aria-labelledby="entries-title">
        <h2 id="entries-title" class="eyebrow">Entries <span id="entry-count" class="count">0</span></h2>
        <ol id="entry-list"></ol>
      </section>
    </section>

    <section class="board-panel" aria-labelledby="board-title">
      <div class="board-head">
        <h2 id="board-title" class="eyebrow">Review</h2>
        <ul id="legend" class="legend"></ul>
      </div>
      <div id="review" class="review" aria-live="polite"></div>
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

const review = new Review($('#review'), {
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
  flushSpeech(); // finish the sentence on the day it was spoken
  currentDate = date;
  history.replaceState(null, '', `#${date}`);
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
    for (const e of (d?.elements ?? []).filter((x) => x.kind !== 'scene').slice(0, 5)) {
      const v = visualFor(e);
      const t = document.createElement('span');
      t.className = 'history__thumb';
      if (v.type === 'icon') t.innerHTML = v.svg;
      else t.textContent = v.initials;
      thumbs.appendChild(t);
    }
    thumbs.setAttribute('aria-hidden', 'true');
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

  review.render(currentDate, d.elements, storyLine(d.elements));

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

/** Parse finished sentences and add what they mention to the day's review page. */
function addStoryText(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const knownNames = day().elements.filter((e) => e.kind === 'character').map((e) => e.text);
  const parsed = parseStory(trimmed, knownNames);
  update((d) => {
    const elements = [...d.elements];
    for (const p of parsed) {
      const dup = elements.some((e) => e.kind === p.kind && e.text.toLowerCase() === p.text.toLowerCase());
      if (dup) continue;
      const el: StoryElement = { id: uid(), kind: p.kind, text: p.text, note: p.note, asset: p.asset, x: 0, y: 0, createdAt: Date.now() };
      elements.push(el);
    }
    return { ...d, elements, entries: [...d.entries, { id: uid(), text: trimmed, createdAt: Date.now() }] };
  });
}

// ---- Sentence gate for speech ----
// Speech arrives in fragments. Nothing is added to the page until a sentence is
// finished: either it ends with . ! ? or the speaker pauses (end of utterance).
const SENTENCE_PAUSE_MS = 1600;
let pendingSpeech = '';
let pauseTimer: number | undefined;

function flushSpeech() {
  window.clearTimeout(pauseTimer);
  const rest = pendingSpeech.trim();
  pendingSpeech = '';
  if (rest) addStoryText(asSentence(rest));
}

function onSpeechPhrase(phrase: string) {
  pendingSpeech = `${pendingSpeech} ${phrase}`.trim();
  const { complete, rest } = takeCompleteSentences(pendingSpeech);
  pendingSpeech = rest;
  if (complete.length) addStoryText(complete.join(' '));
  window.clearTimeout(pauseTimer);
  if (pendingSpeech) pauseTimer = window.setTimeout(flushSpeech, SENTENCE_PAUSE_MS);
}

// ---- Voice (engine lives in src/voice/voice.ts) ----
function setMicStatus(text: string, tone?: 'live' | 'error' | 'busy') {
  micStatusText.textContent = text;
  if (tone) micStatus.dataset.tone = tone;
  else delete micStatus.dataset.tone;
}

const voice = new VoiceRecorder({
  onTranscript(text, isFinal) {
    transcriptEl.dataset.empty = String(!text);
    transcriptEl.textContent = text || 'Listening…';
    // Still talking: hold the unfinished sentence a little longer.
    if (!isFinal && pendingSpeech) {
      window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(flushSpeech, SENTENCE_PAUSE_MS);
    }
  },
  onFinalPhrase(phrase) {
    onSpeechPhrase(phrase);
  },
  onStateChange(listening) {
    micBtn.classList.toggle('is-listening', listening);
    micBtn.setAttribute('aria-pressed', String(listening));
    micLabel.textContent = listening ? 'Stop' : 'Start speaking';
    setMicStatus(listening ? 'Mic on — listening. Each sentence is added when you finish it.' : 'Mic off', listening ? 'live' : undefined);
    if (!listening && !voice.isActive) flushSpeech();
    if (listening) fallbackEl.hidden = true;
  },
  onError(message, kind) {
    setMicStatus(message, 'error');
    if (kind === 'fatal') showTypedFirst('Voice isn’t available right now — write below and the page builds the same way. Tap the mic again after fixing access.');
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


$('#clear-day').addEventListener('click', () => {
  if (!hasContent(day())) return;
  if (!confirm(`Clear everything on ${fmt(currentDate, { month: 'long', day: 'numeric' })}?`)) return;
  if (voice.isActive) voice.stop();
  pendingSpeech = '';
  window.clearTimeout(pauseTimer);
  update(() => emptyDay(currentDate));
});

history.replaceState(null, '', `#${currentDate}`);
render();

