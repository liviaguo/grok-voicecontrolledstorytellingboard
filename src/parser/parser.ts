import type { ElementKind } from '../types';

export interface ParsedElement {
  kind: ElementKind;
  text: string;
  note?: string;
  /** Canonical keyword for picking a visual (see visuals.ts). */
  asset?: string;
}

/**
 * A deliberately simple, rule-based parser that turns a spoken diary line into
 * story elements. It is meant to be replaced/augmented by an LLM later, so it
 * favours predictability over cleverness.
 */

const RELATIONS = [
  'mom', 'mum', 'mother', 'dad', 'father', 'sister', 'brother', 'grandma', 'grandmother',
  'grandpa', 'grandfather', 'friend', 'best friend', 'partner', 'husband', 'wife', 'boyfriend',
  'girlfriend', 'boss', 'teacher', 'neighbour', 'neighbor', 'aunt', 'uncle', 'cousin', 'son',
  'daughter', 'baby', 'dog', 'cat', 'puppy', 'kitten', 'coworker', 'roommate', 'kid', 'kids',
  'family', 'parents', 'friends', 'grandparents', 'children', 'team', 'classmate', 'colleague',
];

const CHARACTER_NOUNS = [
  'dragon', 'princess', 'prince', 'king', 'queen', 'wizard', 'witch', 'knight', 'stranger',
  'girl', 'boy', 'man', 'woman', 'old man', 'old woman', 'fox', 'bear', 'owl', 'robot', 'ghost',
];

const PLACES = [
  'park', 'beach', 'home', 'house', 'school', 'kitchen', 'forest', 'woods', 'city', 'cafe',
  'café', 'coffee shop', 'office', 'library', 'garden', 'mountain', 'mountains', 'lake', 'river',
  'ocean', 'sea', 'village', 'castle', 'street', 'market', 'restaurant', 'airport', 'train',
  'station', 'bedroom', 'backyard', 'museum', 'hospital', 'church', 'island', 'desert', 'cabin',
  'gym', 'studio', 'lighthouse', 'harbor', 'harbour', 'attic', 'meadow', 'bakery', 'bridge', 'rooftop', 'subway', 'farm', 'shore', 'cave',
  'downtown', 'neighbourhood', 'neighborhood', 'trail', 'pool', 'concert', 'bar', 'pub', 'supermarket', 'mall', 'campus', 'waterfront', 'living room',
];

/** Well-known cities are places, not people. */
const CITIES = [
  'Toronto', 'Montreal', 'Vancouver', 'Ottawa', 'Calgary', 'New York', 'Boston', 'Chicago', 'San Francisco',
  'Los Angeles', 'Seattle', 'London', 'Paris', 'Berlin', 'Rome', 'Madrid', 'Lisbon', 'Amsterdam', 'Tokyo',
  'Kyoto', 'Seoul', 'Beijing', 'Shanghai', 'Hong Kong', 'Singapore', 'Sydney', 'Melbourne', 'Mexico City',
];

/** Synonyms → canonical asset keyword. Anything not listed maps to itself. */
const ASSET_ALIASES: Record<string, string> = {
  house: 'home', 'living room': 'home', attic: 'home', woods: 'forest', 'café': 'cafe', 'coffee shop': 'cafe',
  mountains: 'mountain', sea: 'ocean', harbour: 'harbor', station: 'train', shore: 'beach', waterfront: 'harbor',
  backyard: 'garden', meadow: 'park', trail: 'forest', neighbourhood: 'street', neighborhood: 'street',
  campus: 'school', bar: 'restaurant', pub: 'restaurant', supermarket: 'market', mall: 'market',
  bicycle: 'bike', photo: 'camera', photograph: 'camera', present: 'gift', flower: 'flowers', journal: 'notebook',
  puppy: 'dog', kitten: 'cat', books: 'book', photos: 'camera', backpack: 'bag', computer: 'laptop', 'ice cream': 'ice-cream', plants: 'plant',
};
export const assetKey = (word: string) => {
  const w = word.toLowerCase();
  return ASSET_ALIASES[w] ?? w;
};

const FEELINGS = [
  'happy', 'sad', 'excited', 'nervous', 'anxious', 'calm', 'angry', 'scared', 'afraid',
  'proud', 'lonely', 'grateful', 'tired', 'hopeful', 'curious', 'joyful', 'joy', 'love', 'loved',
  'overwhelmed', 'peaceful', 'frustrated', 'relieved', 'nostalgic', 'confused', 'brave',
  'bored', 'surprised', 'content', 'jealous', 'embarrassed', 'thankful', 'cozy', 'free',
  'heartbroken', 'inspired', 'safe', 'worried', 'delighted', 'homesick', 'stressed', 'focused',
  'motivated', 'energized', 'exhausted', 'restless', 'optimistic', 'amazed', 'blessed', 'upset', 'fun',
];

const OBJECTS = [
  'key', 'letter', 'book', 'map', 'phone', 'camera', 'umbrella', 'coffee', 'tea', 'cake',
  'guitar', 'piano', 'ring', 'necklace', 'photo', 'photograph', 'gift', 'present', 'box',
  'bike', 'bicycle', 'car', 'ticket', 'lamp', 'candle', 'flower', 'flowers', 'notebook',
  'journal', 'sword', 'shell', 'stone', 'kite', 'balloon', 'hat', 'scarf', 'bag', 'backpack',
  'blanket', 'mirror', 'clock', 'painting', 'song', 'pie', 'bread', 'apple', 'boat', 'lantern',
  'laptop', 'computer', 'wine', 'pizza', 'ice cream', 'plant', 'plants', 'keys', 'card', 'dress', 'shoes',
];

const SCENE_CUES = [
  'once upon a time', 'this morning', 'the day', 'all day', 'after work', 'after school', 'for lunch', 'for dinner', 'on the weekend', 'weekend', 'this afternoon', 'this evening', 'tonight', 'last night',
  'yesterday', 'today', 'tomorrow', 'at night', 'at dawn', 'at sunset', 'in the morning',
  'later', 'suddenly', 'then', 'one day', 'that night', 'in the end', 'finally', 'meanwhile',
];

const NAME_STOPWORDS = new Set([
  'I', 'The', 'A', 'An', 'And', 'But', 'So', 'Then', 'We', 'He', 'She', 'They', 'It', 'My',
  'Our', 'This', 'That', 'Today', 'Yesterday', 'Tomorrow', 'Once', 'When', 'After', 'Before',
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Suddenly',
  'Finally', 'Later', 'Meanwhile', 'One', 'There', 'Here', 'In', 'At', 'On', 'To', 'Oh', 'OK',
  'Okay', 'Yes', 'No', 'Hi', 'Hello', 'Me', 'You', 'Your', 'His', 'Her', 'Their', 'Its',
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
  'November', 'December', 'Also', 'Just', 'Maybe', 'Some', 'With', 'For', 'From', 'Of', 'Is', 'Was',
]);

/** Common sentence openers that are capitalised only because they start a sentence. */
const OPENER_WORDS = new Set([
  'went', 'walked', 'had', 'got', 'spent', 'felt', 'feeling', 'woke', 'saw', 'met', 'found', 'made', 'took', 'came',
  'left', 'ate', 'drank', 'bought', 'tried', 'started', 'finished', 'played', 'watched', 'visited', 'called', 'talked',
  'lots', 'lot', 'everyone', 'everything', 'nothing', 'someone', 'somehow', 'what', 'why', 'how', 'who', 'where',
  'if', 'because', 'since', 'while', 'until', 'though', 'although', 'as', 'by', 'not', 'all', 'most', 'many', 'few',
  'every', 'each', 'both', 'such', 'these', 'those', 'us', 'him', 'them', 'let', 'lets', 'let’s', 'let\'s', 'thanks',
  'thank', 'good', 'great', 'nice', 'really', 'very', 'still', 'even', 'now', 'back', 'up', 'down', 'out', 'over',
  'walking', 'drinking', 'eating', 'sitting', 'reading', 'writing', 'working', 'having', 'going', 'getting', 'looking',
]);

const EXPLICIT_PREFIX: Record<string, ElementKind> = {
  character: 'character', who: 'character', person: 'character',
  place: 'place', where: 'place', location: 'place',
  feeling: 'feeling', mood: 'feeling', emotion: 'feeling',
  object: 'object', thing: 'object', item: 'object',
  scene: 'scene', moment: 'scene', chapter: 'scene',
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** Whole-word matcher that also works for accented words like "café" (\b is ASCII-only). */
const wordRegex = (words: string[]) =>
  new RegExp(`(?<![\\p{L}\\p{N}])(${[...words].sort((a, b) => b.length - a.length).map(escape).join('|')})(?![\\p{L}\\p{N}])`, 'giu');

const RELATION_RE = new RegExp(
  `\\b(?:[Mm]y|[Oo]ur)\\s+(${[...RELATIONS].sort((a, b) => b.length - a.length).map(escape).join('|')})\\b`,
  'gi',
);
const CHARACTER_NOUN_RE = new RegExp(
  `\\b(?:a|an|the)\\s+((?:\\w+\\s)?(?:${CHARACTER_NOUNS.map(escape).join('|')}))\\b`,
  'gi',
);
const NAMED_RE = /\b(?:named|called)\s+([A-Z][a-z]+)/g;
/** "my sister Maya" → Maya (my sister) */
const RELATION_NAME_RE = new RegExp(
  `\\b(?:[Mm]y|[Oo]ur)\\s+(${[...RELATIONS].sort((a, b) => b.length - a.length).map(escape).join('|')})\\s+([A-Z][a-z]+)\\b`,
  'g',
);
const CITY_RE = new RegExp(`\\b(${CITIES.map(escape).join('|')})\\b`, 'g');
const CITY_WORDS = new Set(CITIES.flatMap((c) => c.split(' ')));
const PLACE_RE = wordRegex(PLACES);
const FEELING_RE = wordRegex(FEELINGS);
const OBJECT_RE = new RegExp(
  `\\b(?:a|an|the|my|our|his|her|their|some)\\s+((?:\\w+\\s)?(?:${OBJECTS.map(escape).join('|')}))\\b`,
  'gi',
);
const SCENE_RE = wordRegex(SCENE_CUES);
const BARE_OBJECT_RE = wordRegex(['coffee', 'tea', 'pizza', 'wine', 'cake', 'bread', 'flowers', 'ice cream', 'music', 'books', 'photos']);

const ADJECTIVE_BLOCKLIST = new Set(['a', 'an', 'the', 'my', 'and', 'of', 'to', 'very', 'was', 'is']);

function cleanPhrase(phrase: string): string {
  const words = phrase.trim().split(/\s+/);
  if (words.length > 1 && ADJECTIVE_BLOCKLIST.has(words[0].toLowerCase())) words.shift();
  return words.join(' ');
}

function titleCase(s: string): string {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

function sentenceCase(s: string): string {
  const t = s.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function truncate(s: string, n: number): string {
  return s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;
}

export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Pick a place keyword mentioned in a sentence (for scene thumbnails). */
function placeIn(sentence: string): string | undefined {
  PLACE_RE.lastIndex = 0;
  const m = PLACE_RE.exec(sentence);
  PLACE_RE.lastIndex = 0;
  if (m) return assetKey(m[1]);
  CITY_RE.lastIndex = 0;
  const c = CITY_RE.test(sentence);
  CITY_RE.lastIndex = 0;
  return c ? 'city' : undefined;
}

/**
 * Turn a chunk of diary text into story elements: people, places, feelings,
 * objects, and at least one scene per chunk (so every entry shows up on the
 * board's timeline). Order: scene first, then the things in it.
 */
export function parseStory(text: string, extraNames: Iterable<string> = []): ParsedElement[] {
  const out: ParsedElement[] = [];
  const seen = new Set<string>();
  const push = (kind: ElementKind, raw: string, extra: Partial<ParsedElement> = {}) => {
    const t = raw.trim();
    if (!t) return;
    const key = `${kind}:${t.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ kind, text: t, ...extra });
  };

  const sentences = splitSentences(text);
  let sceneAdded = false;
  // Names seen mid-sentence anywhere in the text are names at sentence start too.
  const knownNames = new Set<string>(extraNames);
  for (const s of sentences) {
    s.split(/\s+/).slice(1).forEach((w) => {
      const c = w.replace(/[^A-Za-z]/g, '');
      if (/^[A-Z][a-z]+$/.test(c) && !NAME_STOPWORDS.has(c) && !CITY_WORDS.has(c) && !isKnownWord(c)) knownNames.add(c);
    });
  }
  const firstPlace = placeIn(text);

  for (const sentence of sentences) {
    // Explicit "character: Maya" style cues win.
    const explicit = sentence.match(/^\s*(\w+)\s*[:\-–]\s*(.+)$/);
    if (explicit && EXPLICIT_PREFIX[explicit[1].toLowerCase()]) {
      const kind = EXPLICIT_PREFIX[explicit[1].toLowerCase()];
      const value = sentenceCase(explicit[2].replace(/[.!?]+$/, ''));
      push(kind, value, { asset: kind === 'scene' ? placeIn(value) : assetKey(value) });
      if (kind === 'scene') sceneAdded = true;
      continue;
    }

    if (SCENE_RE.test(sentence)) {
      SCENE_RE.lastIndex = 0;
      push('scene', truncate(sentenceCase(sentence.replace(/[.!?]+$/, '')), 90), { asset: placeIn(sentence) ?? firstPlace });
      sceneAdded = true;
    }
    SCENE_RE.lastIndex = 0;

    const named = new Set<string>();
    const coveredRelations = new Set<string>();
    for (const m of sentence.matchAll(RELATION_NAME_RE)) {
      knownNames.add(m[2]);
      push('character', m[2], { note: `my ${m[1].toLowerCase()}` });
      named.add(m[2]);
      coveredRelations.add(m[1].toLowerCase());
    }
    for (const m of sentence.matchAll(RELATION_RE)) {
      const rel = m[1].toLowerCase();
      if (coveredRelations.has(rel)) continue;
      push('character', titleCase(`my ${rel}`), { asset: assetKey(rel) });
    }
    for (const m of sentence.matchAll(NAMED_RE)) {
      knownNames.add(m[1]);
      named.add(m[1]);
      push('character', m[1]);
    }
    for (const m of sentence.matchAll(CHARACTER_NOUN_RE)) push('character', titleCase(cleanPhrase(m[1])));

    // Cities are places.
    for (const m of sentence.matchAll(CITY_RE)) push('place', m[1], { asset: 'city', note: 'city' });

    // Proper names: capitalised words that are not the first word of the sentence.
    const words = sentence.split(/\s+/);
    words.forEach((w, i) => {
      const clean = w.replace(/[^A-Za-z'’-]/g, '').replace(/['’]s$/, '');
      if (!/^[A-Z][a-z]+$/.test(clean) || NAME_STOPWORDS.has(clean)) return;
      if (named.has(clean) || CITY_WORDS.has(clean)) return;
      if (isKnownWord(clean)) return;
      // The first word is capitalised anyway: only treat it as a name when it is
      // already known as one, or reads like a subject ("Maya and I…", "Maya walking…", "Maya's…").
      if (i === 0 && !knownNames.has(clean)) {
        const next = (words[1] ?? '').toLowerCase().replace(/[^a-z'’]/g, '');
        const possessive = /['’]s$/.test(w.replace(/[^A-Za-z'’]/g, ''));
        const subjectLike = possessive || /^(and|&|was|is|were|said|says|told|asked|smiled|laughed|cried|came|went|walked|ran|left|met|took|gave|showed|found|made|loved|likes|liked|wanted|had|has)$/.test(next) || /(ing|ed)$/.test(next);
        if (!subjectLike) return;
      }
      knownNames.add(clean);
      push('character', clean);
    });

    for (const m of sentence.matchAll(PLACE_RE)) push('place', titleCase(m[1].toLowerCase()), { asset: assetKey(m[1]) });
    for (const m of sentence.matchAll(FEELING_RE)) push('feeling', titleCase(m[1].toLowerCase()), { asset: m[1].toLowerCase() });
    for (const m of sentence.matchAll(OBJECT_RE)) {
      const phrase = cleanPhrase(m[1].toLowerCase());
      const noun = phrase.split(' ').pop()!;
      push('object', titleCase(phrase), { asset: assetKey(OBJECTS.includes(phrase) ? phrase : noun) });
    }
    // Mass nouns that rarely take an article ("had coffee", "bought flowers").
    for (const m of sentence.matchAll(BARE_OBJECT_RE)) {
      const w = m[1].toLowerCase();
      if (!out.some((e) => e.kind === 'object' && e.asset === assetKey(w))) push('object', titleCase(w), { asset: assetKey(w) });
    }
  }

  // Every entry gets a scene so the day reads as a timeline.
  if (!sceneAdded && sentences.length) {
    const first = sentences[0].replace(/[.!?]+$/, '');
    out.unshift({ kind: 'scene', text: truncate(sentenceCase(first), 90), asset: placeIn(sentences[0]) ?? firstPlace });
  } else {
    // Put scenes first so they lead the plot.
    out.sort((a, b) => Number(b.kind === 'scene') - Number(a.kind === 'scene'));
  }

  return out;
}

const LEXICON = new Set(
  [...RELATIONS, ...CHARACTER_NOUNS, ...PLACES, ...FEELINGS, ...OBJECTS, ...OPENER_WORDS]
    .filter((w) => !w.includes(' '))
    .map((w) => w.toLowerCase()),
);
function isKnownWord(word: string): boolean {
  return LEXICON.has(word.toLowerCase());
}

/**
 * Sentence gate for live speech: split a running buffer into finished sentences
 * (ending in . ! ? or …) and the unfinished remainder, which is held back until
 * the speaker completes it. Nothing is plotted from a half-said phrase.
 */
export function takeCompleteSentences(buffer: string): { complete: string[]; rest: string } {
  const complete: string[] = [];
  const re = /[^.!?…]*[.!?…]+["'”’)]*(?=\s|$)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(buffer))) {
    const s = m[0].trim();
    if (s) complete.push(s);
    last = re.lastIndex;
    if (m[0].length === 0) re.lastIndex++;
  }
  return { complete, rest: buffer.slice(last).trim() };
}

/** Make sure a spoken utterance reads as a sentence ("we found a key" → "We found a key."). */
export function asSentence(text: string): string {
  const t = sentenceCase(text.replace(/\s+/g, ' ').trim());
  return !t || /[.!?…]["'”’)]*$/.test(t) ? t : `${t}.`;
}

/**
 * One calm line that sums up the day so far — the "where is this story going"
 * read for the review page. Built only from finished sentences.
 */
export function storyLine(els: { kind: ElementKind; text: string }[]): string {
  const of = (k: ElementKind) => els.filter((e) => e.kind === k).map((e) => e.text);
  const list = (xs: string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);
  const people = of('character').slice(0, 3).map((p) => p.replace(/^My\s/, 'my ').replace(/^(my \w+)$/i, (m) => m.toLowerCase()));
  const allPlaces = of('place');
  const cities = allPlaces.filter((p) => !PLACES.includes(p.toLowerCase())).slice(0, 2);
  const spots = allPlaces.filter((p) => PLACES.includes(p.toLowerCase())).slice(0, cities.length ? 0 : 2).map((p) => `the ${p.toLowerCase()}`);
  const feelings = of('feeling').slice(0, 2).map((f) => f.toLowerCase());
  const object = of('object')[0]?.toLowerCase();
  if (!people.length && !allPlaces.length && !feelings.length && !object) return '';
  let line = 'A day';
  if (spots.length) line += ` at ${list(spots)}`;
  if (cities.length) line += ` in ${list(cities)}`;
  if (people.length) line += ` with ${list(people)}`;
  if (feelings.length) line += `, feeling ${list(feelings)}`;
  if (object) line += ` — and ${/^[aeiou]/.test(object) ? 'an' : 'a'} ${object} to remember`;
  return `${line}.`;
}
