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
  backyard: 'garden', meadow: 'park', trail: 'forest', downtown: 'city', neighbourhood: 'street', neighborhood: 'street',
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

const EXPLICIT_PREFIX: Record<string, ElementKind> = {
  character: 'character', who: 'character', person: 'character',
  place: 'place', where: 'place', location: 'place',
  feeling: 'feeling', mood: 'feeling', emotion: 'feeling',
  object: 'object', thing: 'object', item: 'object',
  scene: 'scene', moment: 'scene', chapter: 'scene',
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordRegex = (words: string[]) =>
  new RegExp(`\\b(${[...words].sort((a, b) => b.length - a.length).map(escape).join('|')})\\b`, 'gi');

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
export function parseStory(text: string): ParsedElement[] {
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
      push('character', m[2], { note: `my ${m[1].toLowerCase()}` });
      named.add(m[2]);
      coveredRelations.add(m[1].toLowerCase());
    }
    for (const m of sentence.matchAll(RELATION_RE)) {
      const rel = m[1].toLowerCase();
      if (coveredRelations.has(rel)) continue;
      push('character', titleCase(`my ${rel}`), { asset: assetKey(rel) });
    }
    for (const m of sentence.matchAll(NAMED_RE)) push('character', m[1]);
    for (const m of sentence.matchAll(CHARACTER_NOUN_RE)) push('character', titleCase(cleanPhrase(m[1])));

    // Cities are places.
    for (const m of sentence.matchAll(CITY_RE)) push('place', m[1], { asset: 'city' });

    // Proper names: capitalised words that are not the first word of the sentence.
    const words = sentence.split(/\s+/);
    words.forEach((w, i) => {
      const clean = w.replace(/[^A-Za-z'’-]/g, '');
      if (i === 0 || !/^[A-Z][a-z]+$/.test(clean) || NAME_STOPWORDS.has(clean)) return;
      if (named.has(clean) || CITY_WORDS.has(clean)) return;
      if (PLACES.includes(clean.toLowerCase())) return;
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
