import type { ElementKind } from '../types';

export interface ParsedElement {
  kind: ElementKind;
  text: string;
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
];

const FEELINGS = [
  'happy', 'sad', 'excited', 'nervous', 'anxious', 'calm', 'angry', 'scared', 'afraid',
  'proud', 'lonely', 'grateful', 'tired', 'hopeful', 'curious', 'joyful', 'joy', 'love', 'loved',
  'overwhelmed', 'peaceful', 'frustrated', 'relieved', 'nostalgic', 'confused', 'brave',
  'bored', 'surprised', 'content', 'jealous', 'embarrassed', 'thankful', 'cozy', 'free',
  'heartbroken', 'inspired', 'safe', 'worried', 'delighted', 'homesick',
];

const OBJECTS = [
  'key', 'letter', 'book', 'map', 'phone', 'camera', 'umbrella', 'coffee', 'tea', 'cake',
  'guitar', 'piano', 'ring', 'necklace', 'photo', 'photograph', 'gift', 'present', 'box',
  'bike', 'bicycle', 'car', 'ticket', 'lamp', 'candle', 'flower', 'flowers', 'notebook',
  'journal', 'sword', 'shell', 'stone', 'kite', 'balloon', 'hat', 'scarf', 'bag', 'backpack',
  'blanket', 'mirror', 'clock', 'painting', 'song', 'pie', 'bread', 'apple', 'boat', 'lantern',
];

const SCENE_CUES = [
  'once upon a time', 'this morning', 'this afternoon', 'this evening', 'tonight', 'last night',
  'yesterday', 'today', 'tomorrow', 'at night', 'at dawn', 'at sunset', 'in the morning',
  'later', 'suddenly', 'then', 'one day', 'that night', 'in the end', 'finally', 'meanwhile',
];

const NAME_STOPWORDS = new Set([
  'I', 'The', 'A', 'An', 'And', 'But', 'So', 'Then', 'We', 'He', 'She', 'They', 'It', 'My',
  'Our', 'This', 'That', 'Today', 'Yesterday', 'Tomorrow', 'Once', 'When', 'After', 'Before',
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Suddenly',
  'Finally', 'Later', 'Meanwhile', 'One', 'There', 'Here', 'In', 'At', 'On', 'To', 'Oh', 'OK',
  'Okay', 'Yes', 'No', 'Hi', 'Hello', 'Me', 'You', 'Your', 'His', 'Her', 'Their', 'Its',
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
  `\\b(?:my|our)\\s+(${[...RELATIONS].sort((a, b) => b.length - a.length).map(escape).join('|')})\\b`,
  'gi',
);
const CHARACTER_NOUN_RE = new RegExp(
  `\\b(?:a|an|the)\\s+((?:\\w+\\s)?(?:${CHARACTER_NOUNS.map(escape).join('|')}))\\b`,
  'gi',
);
const NAMED_RE = /\b(?:named|called)\s+([A-Z][a-z]+)/g;
const PLACE_RE = wordRegex(PLACES);
const FEELING_RE = wordRegex(FEELINGS);
const OBJECT_RE = new RegExp(
  `\\b(?:a|an|the|my|our|his|her|their|some)\\s+((?:\\w+\\s)?(?:${OBJECTS.map(escape).join('|')}))\\b`,
  'gi',
);
const SCENE_RE = wordRegex(SCENE_CUES);

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

export function parseStory(text: string): ParsedElement[] {
  const out: ParsedElement[] = [];
  const seen = new Set<string>();
  const push = (kind: ElementKind, raw: string) => {
    const t = raw.trim();
    if (!t) return;
    const key = `${kind}:${t.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ kind, text: t });
  };

  for (const sentence of splitSentences(text)) {
    // Explicit "character: Maya" style cues win.
    const explicit = sentence.match(/^\s*(\w+)\s*[:\-–]\s*(.+)$/);
    if (explicit && EXPLICIT_PREFIX[explicit[1].toLowerCase()]) {
      push(EXPLICIT_PREFIX[explicit[1].toLowerCase()], sentenceCase(explicit[2].replace(/[.!?]+$/, '')));
      continue;
    }

    for (const m of sentence.matchAll(RELATION_RE)) push('character', titleCase(`my ${m[1]}`));
    for (const m of sentence.matchAll(NAMED_RE)) push('character', m[1]);
    for (const m of sentence.matchAll(CHARACTER_NOUN_RE)) push('character', titleCase(cleanPhrase(m[1])));

    // Proper names: capitalised words that are not the first word of the sentence.
    const words = sentence.split(/\s+/);
    words.forEach((w, i) => {
      const clean = w.replace(/[^A-Za-z'’-]/g, '');
      if (i === 0 || !/^[A-Z][a-z]+$/.test(clean) || NAME_STOPWORDS.has(clean)) return;
      if (PLACES.includes(clean.toLowerCase())) return;
      push('character', clean);
    });

    for (const m of sentence.matchAll(PLACE_RE)) push('place', titleCase(m[1].toLowerCase()));
    for (const m of sentence.matchAll(FEELING_RE)) push('feeling', titleCase(m[1].toLowerCase()));
    for (const m of sentence.matchAll(OBJECT_RE)) push('object', titleCase(cleanPhrase(m[1].toLowerCase())));

    if (SCENE_RE.test(sentence)) {
      SCENE_RE.lastIndex = 0;
      push('scene', truncate(sentenceCase(sentence.replace(/[.!?]+$/, '')), 70));
    }
  }

  // Every entry should leave at least something on the board.
  if (out.length === 0 && text.trim()) {
    push('scene', truncate(sentenceCase(text.trim().replace(/[.!?]+$/, '')), 70));
  }

  return out;
}
