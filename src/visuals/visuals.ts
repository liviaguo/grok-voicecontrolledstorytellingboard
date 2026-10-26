/// <reference types="vite/client" />
import type { ElementKind, StoryElement } from '../types';

/*
 * Icons first: every element is shown as a simple Lucide icon (ISC licence),
 * bundled as raw SVG strings so the review page renders instantly, offline.
 * (CC0 photos remain in src/assets/photos for a possible future cover image,
 * but are not shown — photos made the page feel noisy and repetitive.)
 */

const iconModules = import.meta.glob(
  [
    '/node_modules/lucide-static/icons/{user,users,user-round,baby,heart,smile,laugh,frown,meh,angry,annoyed,zap,cloud-rain,sparkles,sun,sunrise,sunset,moon,map-pin,box,key,key-round,book-open,camera,mail,coffee,music,gift,bike,car,ticket,phone,map,umbrella,clock,flame,shopping-bag,image,flower-2,plane,dog,cat,shield,leaf,feather,laptop,star,battery-low,battery-full,eye,clapperboard,target,party-popper,hand-heart,chevron-left,chevron-right,x,building-2,landmark,waves,tree-palm,trees,tree-pine,mountain,mountain-snow,house,school,store,utensils,train-front,bed,hospital,church,tent,dumbbell,castle,sailboat,anchor,ship,wheat,palette,library,croissant,pizza,wine,apple,cake,ice-cream-cone,gem,shirt,footprints,route,ferris-wheel,tram-front,sofa,briefcase,graduation-cap,flower,sprout,snowflake,shopping-cart,beer,lamp,scroll,compass,heart-handshake,mic,guitar,piano,pen-line,sparkle}.svg',
  ],
  { eager: true, query: '?raw', import: 'default' },
) as Record<string, string>;
const ICONS: Record<string, string> = {};
for (const [path, svg] of Object.entries(iconModules)) {
  ICONS[path.split('/').pop()!.replace(/\.svg$/, '')] = svg.replace(/<!--.*?-->/s, '').trim();
}

const PLACE_ICONS: Record<string, string> = {
  city: 'building-2', downtown: 'building-2', street: 'route', park: 'trees', beach: 'tree-palm', home: 'house',
  school: 'school', kitchen: 'utensils', forest: 'tree-pine', cafe: 'coffee', office: 'briefcase', library: 'library',
  garden: 'flower', mountain: 'mountain', lake: 'waves', river: 'waves', ocean: 'waves', village: 'house',
  castle: 'castle', market: 'store', restaurant: 'utensils', airport: 'plane', train: 'train-front', bedroom: 'bed',
  museum: 'landmark', hospital: 'hospital', church: 'church', island: 'tree-palm', desert: 'sun', cabin: 'tent',
  gym: 'dumbbell', studio: 'palette', lighthouse: 'anchor', harbor: 'anchor', bakery: 'croissant', bridge: 'route',
  rooftop: 'building-2', subway: 'tram-front', farm: 'wheat', cave: 'mountain-snow', pool: 'waves', concert: 'music',
  campus: 'graduation-cap', attic: 'house', pub: 'beer', bar: 'wine',
};

const PEOPLE_ICONS: Record<string, string> = {
  family: 'users', parents: 'users', friends: 'users', grandparents: 'users', children: 'users', kids: 'users',
  team: 'users', baby: 'baby', dog: 'dog', puppy: 'dog', cat: 'cat', kitten: 'cat',
};

const OBJECT_ICONS: Record<string, string> = {
  key: 'key', keys: 'key', book: 'book-open', notebook: 'book-open', letter: 'mail', card: 'mail', camera: 'camera',
  coffee: 'coffee', tea: 'coffee', song: 'music', guitar: 'music', piano: 'music', gift: 'gift', bike: 'bike',
  music: 'music', car: 'car', ticket: 'ticket', phone: 'phone', map: 'map', umbrella: 'umbrella', clock: 'clock', candle: 'flame',
  bag: 'shopping-bag', painting: 'image', flowers: 'flower-2', laptop: 'laptop', plant: 'leaf', dog: 'dog', cat: 'cat',
  pizza: 'pizza', wine: 'wine', apple: 'apple', cake: 'cake', bread: 'croissant', 'ice-cream': 'ice-cream-cone',
  ring: 'gem', necklace: 'gem', dress: 'shirt', shoes: 'footprints', boat: 'sailboat', lantern: 'lamp', lamp: 'lamp',
  balloon: 'party-popper', kite: 'sparkle', hat: 'shirt', scarf: 'shirt', blanket: 'sofa', shell: 'sparkle',
};

type Tone = 'positive' | 'negative' | 'calm' | 'neutral';
const FEELING_ICONS: Record<string, [string, Tone]> = {
  happy: ['smile', 'positive'], joyful: ['laugh', 'positive'], joy: ['laugh', 'positive'], excited: ['party-popper', 'positive'],
  delighted: ['laugh', 'positive'], fun: ['party-popper', 'positive'], hopeful: ['sunrise', 'positive'], optimistic: ['sunrise', 'positive'],
  grateful: ['hand-heart', 'positive'], thankful: ['hand-heart', 'positive'], blessed: ['hand-heart', 'positive'],
  love: ['heart', 'positive'], loved: ['heart', 'positive'], proud: ['star', 'positive'], brave: ['shield', 'positive'],
  inspired: ['sparkles', 'positive'], amazed: ['sparkles', 'positive'], surprised: ['sparkles', 'positive'],
  motivated: ['target', 'positive'], focused: ['target', 'calm'], energized: ['battery-full', 'positive'], curious: ['eye', 'calm'],
  calm: ['leaf', 'calm'], peaceful: ['leaf', 'calm'], content: ['leaf', 'calm'], relieved: ['feather', 'calm'],
  safe: ['shield', 'calm'], cozy: ['coffee', 'calm'], free: ['feather', 'calm'], nostalgic: ['image', 'calm'],
  sad: ['frown', 'negative'], lonely: ['cloud-rain', 'negative'], heartbroken: ['cloud-rain', 'negative'], homesick: ['cloud-rain', 'negative'],
  nervous: ['zap', 'negative'], anxious: ['zap', 'negative'], worried: ['zap', 'negative'], stressed: ['zap', 'negative'],
  overwhelmed: ['zap', 'negative'], restless: ['zap', 'negative'], scared: ['frown', 'negative'], afraid: ['frown', 'negative'],
  angry: ['angry', 'negative'], frustrated: ['annoyed', 'negative'], upset: ['frown', 'negative'], jealous: ['annoyed', 'negative'],
  embarrassed: ['meh', 'negative'], confused: ['meh', 'neutral'], bored: ['meh', 'neutral'],
  tired: ['battery-low', 'neutral'], exhausted: ['battery-low', 'negative'],
};

export type Visual =
  | { type: 'icon'; svg: string; tone?: Tone }
  | { type: 'monogram'; initials: string };

const KIND_FALLBACK_ICON: Record<ElementKind, string> = {
  character: 'user', place: 'map-pin', feeling: 'heart', object: 'box', scene: 'clapperboard',
};

function timeOfDayIcon(text: string): string {
  const t = text.toLowerCase();
  if (/(night|tonight|evening|dark)/.test(t)) return 'moon';
  if (/(sunset|dusk)/.test(t)) return 'sunset';
  if (/(morning|dawn|sunrise)/.test(t)) return 'sunrise';
  return 'sun';
}

export function icon(name: string): string {
  return ICONS[name] ?? ICONS.box ?? '';
}

/** Icon name for an element — used by the review page and the history list. */
export function iconNameFor(el: Pick<StoryElement, 'kind' | 'text' | 'asset'>): string {
  const a = el.asset ?? '';
  switch (el.kind) {
    case 'place':
      return PLACE_ICONS[a] ?? KIND_FALLBACK_ICON.place;
    case 'object':
      return OBJECT_ICONS[a] ?? KIND_FALLBACK_ICON.object;
    case 'scene':
      return timeOfDayIcon(el.text);
    case 'feeling':
      return (FEELING_ICONS[a || el.text.toLowerCase()] ?? ['heart'])[0];
    case 'character':
      return PEOPLE_ICONS[a] ?? KIND_FALLBACK_ICON.character;
  }
}

/** Choose what an element shows: a simple icon, or initials for a named person. */
export function visualFor(el: Pick<StoryElement, 'kind' | 'text' | 'asset'>): Visual {
  if (el.kind === 'feeling') {
    const [name, tone] = FEELING_ICONS[el.asset ?? el.text.toLowerCase()] ?? ['heart', 'neutral'];
    return { type: 'icon', svg: icon(name), tone };
  }
  if (el.kind === 'character') {
    if (/^my\s/i.test(el.text) || (el.asset && PEOPLE_ICONS[el.asset])) return { type: 'icon', svg: icon(iconNameFor(el)) };
    const words = el.text.split(/\s+/).filter(Boolean);
    const initials = words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join('');
    return { type: 'monogram', initials: initials || '?' };
  }
  return { type: 'icon', svg: icon(iconNameFor(el)) };
}
