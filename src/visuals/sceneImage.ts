/**
 * Visual telling: every Moment gets a quick, simple illustration.
 *
 * Pictures are drawn by OpenAI (gpt-image-2.5) through a tiny proxy in `proxy/`
 * that holds the API key server-side — the key is never in this frontend.
 * The proxy base URL comes from VITE_IMAGE_API_BASE at build time, and can be
 * overridden at runtime with `?api=https://…` (remembered in localStorage) so a
 * restarted tunnel doesn't need a redeploy.
 *
 * A new scene first stores a pending ref (`vd-gen:{…}`) on its element. Once the
 * proxy returns the picture, the data URL replaces the ref on the scene in
 * localStorage, so revisiting a day shows it instantly without regenerating.
 */

const REF_PREFIX = 'vd-gen:';
const API_OVERRIDE_KEY = 'visual-diary:image-api';
const STYLE = 'simple flat storybook illustration, soft pastel colors, clean minimal composition, gentle light, no text, no words, no letters';

export interface SceneContext {
  places?: string[];
  feelings?: string[];
  people?: number;
}

interface SceneRequest {
  scene: string;
  places?: string[];
  feelings?: string[];
}

function apiBase(): string {
  try {
    const q = new URLSearchParams(location.search).get('api');
    if (q) localStorage.setItem(API_OVERRIDE_KEY, q);
    const saved = localStorage.getItem(API_OVERRIDE_KEY);
    if (saved) return saved.replace(/\/+$/, '');
  } catch {
    /* ignore */
  }
  return String(import.meta.env.VITE_IMAGE_API_BASE ?? 'http://localhost:8787').replace(/\/+$/, '');
}

/** The prompt the proxy uses (kept here for reference/tests; proxy builds its own). */
export function scenePrompt(scene: string, ctx: SceneContext = {}): string {
  const bits = [scene.replace(/[.!?]+$/, '').trim()];
  if (ctx.places?.length) bits.push(`setting: ${ctx.places.slice(0, 3).join(', ')}`);
  if (ctx.feelings?.length) bits.push(`mood: ${ctx.feelings.slice(0, 3).join(', ').toLowerCase()}`);
  return `${STYLE}. ${bits.join('; ')}`.slice(0, 400);
}

/**
 * The value to store on a new scene element: a pending ref describing what to
 * draw. `seedKey` is kept for API compatibility (refs are unique per date+scene).
 */
export function sceneImageUrl(scene: string, ctx: SceneContext = {}, seedKey = scene): string {
  const req: SceneRequest & { k: string } = {
    scene,
    places: ctx.places?.slice(0, 3),
    feelings: ctx.feelings?.slice(0, 3),
    k: seedKey,
  };
  return REF_PREFIX + JSON.stringify(req);
}

/** True if a stored image value still needs (re)generating — missing or from the old Pollinations days. */
export function needsSceneImage(image: string | undefined): boolean {
  return !image || !(image.startsWith('data:') || image.startsWith(REF_PREFIX));
}

// ---- Resolution: pending ref → data URL ----
const resolved = new Map<string, string>();
let onResolved: ((ref: string, dataUrl: string) => void) | undefined;

/** Called once per freshly drawn picture so the app can persist it on the scene. */
export function onSceneImageResolved(cb: (ref: string, dataUrl: string) => void) {
  onResolved = cb;
}

/** The `src` to put on an <img> for a stored image value. */
export function sceneImageSrc(image: string): string {
  if (image.startsWith(REF_PREFIX)) return resolved.get(image) ?? '';
  return image;
}

// ---- Loading with gentle retries and a small concurrency cap ----
type Status = 'loading' | 'loaded' | 'failed';
const status = new Map<string, Status>();
const waiters = new Map<string, ((ok: boolean) => void)[]>();
const queue: string[] = [];
let active = 0;
const MAX_ACTIVE = 2;
const RETRY_DELAYS = [2500, 6000];
const TIMEOUT_MS = 60_000;

export function imageStatus(image: string): Status | undefined {
  if (image.startsWith('data:')) return 'loaded';
  return status.get(image);
}

/** Resolve true once the picture is ready to show, false if it gave up. */
export function loadSceneImage(image: string): Promise<boolean> {
  const s = imageStatus(image);
  if (s === 'loaded') return Promise.resolve(true);
  if (s === 'failed') return Promise.resolve(false);
  return new Promise((resolve) => {
    const list = waiters.get(image) ?? [];
    list.push(resolve);
    waiters.set(image, list);
    if (!s) {
      status.set(image, 'loading');
      queue.push(image);
      pump();
    }
  });
}

/** Forget a failure so the user can retry. */
export function retrySceneImage(image: string): Promise<boolean> {
  if (status.get(image) === 'failed') status.delete(image);
  return loadSceneImage(image);
}

function pump() {
  while (active < MAX_ACTIVE && queue.length) {
    const ref = queue.shift()!;
    active++;
    attempt(ref, 0);
  }
}

async function generate(ref: string): Promise<string | null> {
  if (!ref.startsWith(REF_PREFIX)) return null;
  let req: SceneRequest;
  try {
    const { scene, places, feelings } = JSON.parse(ref.slice(REF_PREFIX.length));
    req = { scene, places, feelings };
  } catch {
    return null;
  }
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${apiBase()}/api/scene-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Bypass-Tunnel-Reminder': '1' },
      body: JSON.stringify(req),
      signal: ctrl.signal,
    });
    if (!res.ok) return null;
    const j = (await res.json()) as { image?: string; url?: string };
    const img = j.image ?? j.url;
    return typeof img === 'string' && img.startsWith('data:image/') ? img : null;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

async function attempt(ref: string, n: number) {
  const dataUrl = await generate(ref);
  if (!dataUrl && n < RETRY_DELAYS.length) {
    window.setTimeout(() => attempt(ref, n + 1), RETRY_DELAYS[n]);
    return;
  }
  const ok = !!dataUrl;
  if (dataUrl) {
    resolved.set(ref, dataUrl);
    onResolved?.(ref, dataUrl);
  }
  status.set(ref, ok ? 'loaded' : 'failed');
  active--;
  for (const w of waiters.get(ref) ?? []) w(ok);
  waiters.delete(ref);
  pump();
}
