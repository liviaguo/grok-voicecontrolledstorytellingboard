# Storyboard — a voice-controlled storytelling board

A visual diary that listens to you. Tap the mic, talk about your day (or make up a tale), and Storyboard picks out the **characters, places, feelings, objects and scenes** in what you said and pins them to a board as cards. Drag them around to arrange your story, remove what you don't need, and pick up where you left off next time.

No account, no backend, no API keys. Everything runs and stays in your browser.

## Run it

Requires Node.js 18+.

```bash
npm install && npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check with `tsc` and build to `dist/` |
| `npm run preview` | Serve the production build locally |

### Browser support

Voice input uses the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) (`SpeechRecognition` / `webkitSpeechRecognition`). It works in Chrome, Edge and Safari; it needs microphone permission and, in Chrome, a network connection. Firefox doesn't support it yet. When voice isn't available, the app says so and you can type your story instead; typed text builds the board the same way.

### Testing voice

Voice needs a secure page: `http://localhost` or `https://` (a plain `http://` LAN IP won't get mic access). Tapping the mic first asks for microphone permission, then starts listening; it keeps listening through short silences and Chrome's periodic cut-offs until you tap it again.

- **On your own machine (Chrome, recommended):** `npm run dev`, open http://localhost:5173, tap the mic.
  - *Allow* → speak a sentence; cards appear. Stay silent ~10s → it should keep listening (auto-restart). Tap the mic → it stops and stays stopped.
  - *Deny* (or block via the 🔒 icon → Site settings → Microphone) → a red message explains how to re-allow, and the typed box gets focus. Re-allow, tap the mic to retry.
- **On the Grok Bot box desktop:** there's usually no real microphone, so expect the "No microphone was found" / blocked path. Use it to check the error + typed-fallback flow, not recognition quality.
- **Typed fallback:** always available — type in "Or write it down" and press *Add to board* (or Ctrl/⌘+Enter).

Browsers without `SpeechRecognition` (e.g. Firefox) get typed-first guidance. A MediaRecorder + server transcription fallback is a possible later addition; it isn't built.

## How it works

1. **Speak or type.** Each finished phrase is saved as a diary entry.
2. **Parse.** A small rule-based parser (`src/parser/parser.ts`) looks for cues:
   - *Characters*: "my sister", "a dragon", "named Maya", capitalised names
   - *Places*: park, beach, kitchen, forest…
   - *Feelings*: happy, nervous, hopeful…
   - *Objects*: "a key", "my guitar", "the letter"…
   - *Scenes*: sentences with time cues like "this morning", "suddenly", "once upon a time"
   - *Explicit*: start a sentence with `character:`, `place:`, `feeling:`, `object:` or `scene:` to add something directly.
3. **Arrange.** Cards land in columns by type. Drag to rearrange, press × (or Delete when a card is focused) to remove, and use **Tidy board** to snap them back into columns.
4. **Persist.** The board, title and diary entries are saved to `localStorage`, so they survive a refresh. **New story** clears everything.

## Project structure

```
index.html
src/
  main.ts            # App shell: wires voice, parser, board and storage together
  style.css          # Warm paper-and-terracotta theme
  types.ts           # Shared types (StoryElement, StoryState) and element metadata
  voice/voice.ts     # Web Speech API wrapper (mic priming, auto-restart, errors/retry)
  voice/speech.d.ts  # Minimal Web Speech API typings
  parser/parser.ts   # Rule-based text → story elements
  board/board.ts     # Card rendering, drag, delete, auto-placement
  storage/storage.ts # localStorage load/save/clear
```

## What's next

- Smarter parsing with an LLM (better entity extraction, sentiment, summaries)
- Connect cards with lines to show how the story flows
- Edit card text inline, recolour cards, add photos or doodles
- Several stories, each with its own board, plus export to image or PDF
- "Read my story back": generate a narrated version from the board
- Optional sync across devices
