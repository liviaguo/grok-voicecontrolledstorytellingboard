/// <reference types="vite/client" />
import type { ElementKind, StoryElement } from '../types';

/*
 * Diary icons: a small hand-drawn duotone set in src/assets/icons/ (24×24,
 * 1.8px strokes + a soft 20% fill), bundled as raw SVG strings so the review
 * page renders instantly and offline. They inherit `currentColor`, so each
 * section tints them in its own colour.
 *
 * Lucide (ISC) is kept only for UI chrome: chevrons and the remove "x".
 */

const diaryModules = import.meta.glob('/src/assets/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;
const DIARY: Record<string, string> = {};
for (const [path, svg] of Object.entries(diaryModules)) {
  DIARY[path.split('/').pop()!.replace(/\.svg$/, '')] = svg.trim();
}

const uiModules = import.meta.glob(
  ['/node_modules/lucide-static/icons/{chevron-left,chevron-right,x}.svg'],
  { eager: true, query: '?raw', import: 'default' },
) as Record<string, string>;
const UI: Record<string, string> = {};
for (const [path, svg] of Object.entries(uiModules)) {
  UI[path.split('/').pop()!.replace(/\.svg$/, '')] = svg.replace(/<!--.*?-->/s, '').trim();
}

/** Icon used for each section header (and as the fallback for that kind). */
export const KIND_ICON: Record<ElementKind, string> = {
  scene: 'moment', character: 'person', place: 'place', object: 'object', feeling: 'feeling',
};

const PLACE_ICONS: Record<string, string> = {
  city: 'city', downtown: 'downtown', rooftop: 'downtown', street: 'downtown', subway: 'downtown', office: 'downtown',
  beach: 'beach', island: 'beach', shore: 'beach',
  lake: 'water', river: 'water', ocean: 'water', pool: 'water', harbor: 'water', lighthouse: 'water', bridge: 'water',
  park: 'park', forest: 'park', garden: 'park', farm: 'park',
  home: 'home', village: 'home', bedroom: 'home', kitchen: 'home', cabin: 'home', attic: 'home',
  cafe: 'cafe', bakery: 'cafe',
  market: 'market', store: 'market', shop: 'market',
  restaurant: 'restaurant', pub: 'restaurant', bar: 'restaurant',
  mountain: 'mountain', cave: 'mountain', desert: 'mountain',
  museum: 'landmark', castle: 'landmark', church: 'landmark', library: 'landmark', hospital: 'landmark',
  school: 'school', campus: 'school',
  airport: 'travel', train: 'travel', concert: 'music', studio: 'music', gym: 'landmark',
};

const FEMALE = new Set(['mom', 'mum', 'mother', 'sister', 'grandma', 'grandmother', 'wife', 'girlfriend', 'aunt', 'daughter', 'girl', 'woman', 'old woman', 'princess', 'queen', 'witch']);
const MALE = new Set(['dad', 'father', 'brother', 'grandpa', 'grandfather', 'husband', 'boyfriend', 'uncle', 'son', 'boy', 'man', 'old man', 'prince', 'king', 'wizard', 'knight']);
const GROUP = new Set(['family', 'parents', 'grandparents', 'children', 'kids', 'kid', 'baby']);
const FRIENDS = new Set(['friends', 'friend', 'best friend', 'team', 'coworker', 'roommate', 'classmate', 'colleague', 'partner', 'neighbour', 'neighbor', 'cousin']);
const PETS = new Set(['dog', 'cat', 'puppy', 'kitten', 'fox', 'bear', 'owl']);

function personIcon(word: string): string {
  const w = word.toLowerCase().replace(/^(my|our)\s+/, '');
  if (FEMALE.has(w)) return 'person-f';
  if (MALE.has(w)) return 'person-m';
  if (GROUP.has(w)) return 'family';
  if (FRIENDS.has(w)) return 'friends';
  if (PETS.has(w)) return 'pet';
  return 'person';
}

const OBJECT_ICONS: Record<string, string> = {
  key: 'key', keys: 'key',
  book: 'book', notebook: 'book', scroll: 'book',
  letter: 'letter', card: 'letter', postcard: 'letter',
  camera: 'camera', painting: 'camera',
  coffee: 'cafe', tea: 'cafe', cup: 'cafe', mug: 'cafe',
  gift: 'gift', balloon: 'gift',
  phone: 'phone', laptop: 'phone',
  map: 'map', ticket: 'ticket',
  flowers: 'flowers', plant: 'flowers',
  song: 'music', music: 'music', guitar: 'music', piano: 'music',
  bag: 'bag', dress: 'bag', hat: 'bag', scarf: 'bag', shoes: 'bag',
  pizza: 'food', cake: 'food', bread: 'food', apple: 'food', 'ice-cream': 'food', wine: 'food', food: 'food', dinner: 'food', lunch: 'food', breakfast: 'food',
  boat: 'water', shell: 'beach', umbrella: 'beach', kite: 'excited', ring: 'proud', necklace: 'proud', dog: 'pet', cat: 'pet',
};

type Tone = 'positive' | 'negative' | 'calm' | 'neutral';
const FEELING_ICONS: Record<string, [string, Tone]> = {
  happy: ['happy', 'positive'], joyful: ['happy', 'positive'], joy: ['happy', 'positive'], delighted: ['happy', 'positive'], fun: ['excited', 'positive'],
  excited: ['excited', 'positive'], inspired: ['excited', 'positive'], amazed: ['surprised', 'positive'], surprised: ['surprised', 'positive'], energized: ['excited', 'positive'],
  hopeful: ['hopeful', 'positive'], optimistic: ['hopeful', 'positive'], motivated: ['hopeful', 'positive'],
  grateful: ['grateful', 'positive'], thankful: ['grateful', 'positive'], blessed: ['grateful', 'positive'],
  love: ['love', 'positive'], loved: ['love', 'positive'], proud: ['proud', 'positive'], brave: ['proud', 'positive'],
  calm: ['calm', 'calm'], peaceful: ['calm', 'calm'], content: ['calm', 'calm'], relieved: ['calm', 'calm'], safe: ['calm', 'calm'],
  cozy: ['cafe', 'calm'], free: ['calm', 'calm'], nostalgic: ['camera', 'calm'], curious: ['curious', 'calm'], focused: ['curious', 'calm'],
  sad: ['sad', 'negative'], lonely: ['sad', 'negative'], heartbroken: ['sad', 'negative'], homesick: ['sad', 'negative'], upset: ['sad', 'negative'],
  nervous: ['nervous', 'negative'], anxious: ['nervous', 'negative'], worried: ['nervous', 'negative'], stressed: ['nervous', 'negative'],
  overwhelmed: ['nervous', 'negative'], restless: ['nervous', 'negative'], scared: ['nervous', 'negative'], afraid: ['nervous', 'negative'], embarrassed: ['nervous', 'negative'],
  angry: ['angry', 'negative'], frustrated: ['angry', 'negative'], jealous: ['angry', 'negative'],
  confused: ['curious', 'neutral'], bored: ['tired', 'neutral'], tired: ['tired', 'neutral'], exhausted: ['tired', 'negative'],
};

export type Visual =
  | { type: 'icon'; svg: string; tone?: Tone }
  | { type: 'monogram'; initials: string; svg: string };

function timeOfDayIcon(text: string): string | undefined {
  const t = text.toLowerCase();
  if (/\b(night|tonight|evening|dark|midnight|stars)\b/.test(t)) return 'night';
  if (/\b(sunset|dusk)\b/.test(t)) return 'sunset';
  if (/\b(morning|dawn|sunrise|breakfast)\b/.test(t)) return 'morning';
  if (/\b(afternoon|noon|sunny|summer)\b/.test(t)) return 'sun';
  return undefined;
}

/** Raw SVG for a diary icon or UI icon by name. */
export function icon(name: string): string {
  return DIARY[name] ?? UI[name] ?? DIARY.object ?? '';
}

/** Icon name for an element — used by the review page and the history list. */
export function iconNameFor(el: Pick<StoryElement, 'kind' | 'text' | 'asset' | 'note'>): string {
  const a = (el.asset ?? '').toLowerCase();
  switch (el.kind) {
    case 'place':
      return PLACE_ICONS[a] ?? PLACE_ICONS[el.text.toLowerCase()] ?? KIND_ICON.place;
    case 'object':
      return OBJECT_ICONS[a] ?? OBJECT_ICONS[el.text.toLowerCase()] ?? KIND_ICON.object;
    case 'scene':
      return timeOfDayIcon(el.text) ?? PLACE_ICONS[a] ?? KIND_ICON.scene;
    case 'feeling':
      return (FEELING_ICONS[a || el.text.toLowerCase()] ?? [KIND_ICON.feeling])[0];
    case 'character':
      return personIcon(el.note ?? (a || el.text));
  }
}

/** Choose what an element shows: a diary icon, or initials (+ silhouette) for a named person. */
export function visualFor(el: Pick<StoryElement, 'kind' | 'text' | 'asset' | 'note'>): Visual {
  if (el.kind === 'feeling') {
    const [name, tone] = FEELING_ICONS[(el.asset || el.text).toLowerCase()] ?? [KIND_ICON.feeling, 'neutral' as Tone];
    return { type: 'icon', svg: icon(name), tone };
  }
  const name = iconNameFor(el);
  if (el.kind === 'character') {
    const generic = /^(my|our|the|a|an)\s/i.test(el.text) || !!el.asset || (!el.note && name !== 'person');
    if (!generic) {
      const words = el.text.split(/\s+/).filter(Boolean);
      const initials = words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join('');
      return { type: 'monogram', initials: initials || '?', svg: icon(name) };
    }
  }
  return { type: 'icon', svg: icon(name) };
}
