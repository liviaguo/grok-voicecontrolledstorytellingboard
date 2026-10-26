/// <reference types="vite/client" />
import type { ElementKind, StoryElement } from '../types';

/*
 * Visuals are local so cards appear instantly — no network at runtime.
 * - Photos: small CC0 images (StockSnap via Openverse) in src/assets/photos,
 *   fetched once with scripts/fetch_assets.py. Credits in credits.json there.
 * - Icons: Lucide (ISC licence), bundled as raw SVG strings.
 */

const photoModules = import.meta.glob('../assets/photos/*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const PHOTOS: Record<string, string> = {};
for (const [path, url] of Object.entries(photoModules)) {
  PHOTOS[path.split('/').pop()!.replace(/\.jpg$/, '')] = url;
}

const iconModules = import.meta.glob(
  [
    '/node_modules/lucide-static/icons/{user,users,heart,smile,laugh,frown,meh,angry,annoyed,zap,cloud-rain,sparkles,sun,sunrise,sunset,moon,map-pin,box,key,book-open,camera,mail,coffee,music,gift,bike,car,ticket,phone,map,umbrella,clock,flame,shopping-bag,image,flower-2,plane,dog,cat,shield,leaf,feather,laptop,star,battery-low,battery-full,eye,clapperboard,target,party-popper,hand-heart,chevron-left,chevron-right}.svg',
  ],
  { eager: true, query: '?raw', import: 'default' },
) as Record<string, string>;
const ICONS: Record<string, string> = {};
for (const [path, svg] of Object.entries(iconModules)) {
  ICONS[path.split('/').pop()!.replace(/\.svg$/, '')] = svg.replace(/<!--.*?-->/s, '').trim();
}

const OBJECT_ICONS: Record<string, string> = {
  key: 'key', keys: 'key', book: 'book-open', notebook: 'book-open', letter: 'mail', card: 'mail', camera: 'camera',
  coffee: 'coffee', tea: 'coffee', song: 'music', guitar: 'music', piano: 'music', gift: 'gift', bike: 'bike',
  music: 'music', car: 'car', ticket: 'ticket', phone: 'phone', map: 'map', umbrella: 'umbrella', clock: 'clock', candle: 'flame',
  bag: 'shopping-bag', painting: 'image', flowers: 'flower-2', laptop: 'laptop', plant: 'leaf', dog: 'dog', cat: 'cat',
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
  | { type: 'photo'; src: string }
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

export function photoFor(asset: string | undefined): string | undefined {
  return asset ? PHOTOS[asset] : undefined;
}

/** Choose what a card shows: a local photo, an icon, or a monogram. */
export function visualFor(el: Pick<StoryElement, 'kind' | 'text' | 'asset'>): Visual {
  const photo = photoFor(el.asset);
  switch (el.kind) {
    case 'place':
    case 'object':
      if (photo) return { type: 'photo', src: photo };
      return { type: 'icon', svg: icon((el.asset && OBJECT_ICONS[el.asset]) || KIND_FALLBACK_ICON[el.kind]) };
    case 'scene':
      if (photo) return { type: 'photo', src: photo };
      return { type: 'icon', svg: icon(timeOfDayIcon(el.text)) };
    case 'feeling': {
      const [name, tone] = FEELING_ICONS[el.asset ?? el.text.toLowerCase()] ?? ['heart', 'neutral'];
      return { type: 'icon', svg: icon(name), tone };
    }
    case 'character': {
      if (photo) return { type: 'photo', src: photo }; // pets
      const words = el.text.replace(/^my\s+/i, '').split(/\s+/).filter(Boolean);
      const initials = words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join('');
      return { type: 'monogram', initials: initials || '?' };
    }
  }
}

/** Warm the browser cache so newly plotted cards paint immediately. */
export function preloadPhotos(): void {
  const run = () => Object.values(PHOTOS).forEach((src) => { const i = new Image(); i.decoding = 'async'; i.src = src; });
  if ('requestIdleCallback' in window) (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(run);
  else setTimeout(run, 500);
}
