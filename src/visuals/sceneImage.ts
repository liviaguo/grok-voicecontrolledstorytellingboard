/**
 * Visual telling: every Moment gets a quick, simple illustration.
 *
 * Images come from Pollinations (https://pollinations.ai), a free text-to-image
 * endpoint that needs no API key — the picture is just a GET on a URL built from
 * the prompt, so it works from a static GitHub Pages site. The URL is
 * deterministic (prompt + seed), so we store it on the scene element in
 * localStorage and the browser's HTTP cache serves it again on revisit.
 */

const ENDPOINT = 'https://image.pollinations.ai/prompt/';
/** Requested size. Shown at 16:10 with the bottom cropped (hides the free-tier badge). */
const WIDTH = 640;
const HEIGHT = 448;
const STYLE = 'simple flat storybook illustration, soft pastel colors, clean minimal composition, gentle light, no text, no words, no letters';

export interface SceneContext {
  places?: string[];
  feelings?: string[];
  people?: number;
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return (h >>> 0) % 1_000_000;
}

export function scenePrompt(scene: string, ctx: SceneContext = {}): string {
  const bits = [scene.replace(/[.!?]+$/, '').trim()];
  if (ctx.places?.length) bits.push(`setting: ${ctx.places.slice(0, 3).join(', ')}`);
  if (ctx.feelings?.length) bits.push(`mood: ${ctx.feelings.slice(0, 3).join(', ').toLowerCase()}`);
  return `${STYLE}. ${bits.join('; ')}`.slice(0, 400);
}

/** Build the image URL for a scene. Same scene + seed → same URL → cached image. */
export function sceneImageUrl(scene: string, ctx: SceneContext = {}, seedKey = scene): string {
  const prompt = encodeURIComponent(scenePrompt(scene, ctx));
  const q = new URLSearchParams({ width: String(WIDTH), height: String(HEIGHT), seed: String(hash(seedKey)), nologo: 'true' });
  return `${ENDPOINT}${prompt}?${q}`;
}

// ---- Loading with gentle retries and a small concurrency cap ----
// The free endpoint queues requests per IP, so we load at most two at a time
// and retry a failed image a couple of times before falling back to an icon.

type Status = 'loading' | 'loaded' | 'failed';
const status = new Map<string, Status>();
const waiters = new Map<string, ((ok: boolean) => void)[]>();
const queue: string[] = [];
let active = 0;
const MAX_ACTIVE = 2;
const RETRY_DELAYS = [2500, 6000];
const TIMEOUT_MS = 45_000;

export function imageStatus(url: string): Status | undefined {
  return status.get(url);
}

/** Resolve true once the image is in the browser cache, false if it gave up. */
export function loadSceneImage(url: string): Promise<boolean> {
  const s = status.get(url);
  if (s === 'loaded') return Promise.resolve(true);
  if (s === 'failed') return Promise.resolve(false);
  return new Promise((resolve) => {
    const list = waiters.get(url) ?? [];
    list.push(resolve);
    waiters.set(url, list);
    if (!s) {
      status.set(url, 'loading');
      queue.push(url);
      pump();
    }
  });
}

/** Forget a failure so the user can retry. */
export function retrySceneImage(url: string): Promise<boolean> {
  if (status.get(url) === 'failed') status.delete(url);
  return loadSceneImage(url);
}

function pump() {
  while (active < MAX_ACTIVE && queue.length) {
    const url = queue.shift()!;
    active++;
    attempt(url, 0);
  }
}

function attempt(url: string, n: number) {
  const img = new Image();
  img.decoding = 'async';
  let done = false;
  const timer = window.setTimeout(() => finish(false), TIMEOUT_MS);
  const finish = (ok: boolean) => {
    if (done) return;
    done = true;
    window.clearTimeout(timer);
    img.onload = img.onerror = null;
    if (!ok && n < RETRY_DELAYS.length) {
      window.setTimeout(() => attempt(url, n + 1), RETRY_DELAYS[n]);
      return;
    }
    status.set(url, ok ? 'loaded' : 'failed');
    active--;
    for (const w of waiters.get(url) ?? []) w(ok);
    waiters.delete(url);
    pump();
  };
  img.onload = () => finish(img.naturalWidth > 0);
  img.onerror = () => finish(false);
  img.src = url;
}
