// Visual Diary image proxy: POST /api/scene-image { scene, places?, feelings? }
// → { image: 'data:image/webp;base64,...' }
// Holds the OpenAI key server-side (env OPENAI_API_KEY only); the static
// GitHub Pages frontend never sees it. No dependencies — plain node:http.
import http from 'node:http';

const PORT = Number(process.env.PORT || 8787);
const KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.IMAGE_MODEL || 'gpt-image-2.5-sunburst';
const SIZE = process.env.IMAGE_SIZE || '1536x1024'; // closest to the 16:10 Moment card
const ALLOWED = [/^https:\/\/liviaguo\.github\.io$/, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/];
const STYLE = 'simple flat storybook illustration, soft pastel colors, clean minimal composition, gentle light, no text, no words, no letters';

if (!KEY) {
  console.error('OPENAI_API_KEY is not set — export it in the environment before starting the proxy.');
  process.exit(1);
}

const clean = (v, n) => (Array.isArray(v) ? v : []).filter((s) => typeof s === 'string').map((s) => s.slice(0, 60)).slice(0, n);

export function scenePrompt(scene, places = [], feelings = []) {
  const bits = [String(scene).replace(/[.!?]+$/, '').trim()];
  if (places.length) bits.push(`setting: ${places.join(', ')}`);
  if (feelings.length) bits.push(`mood: ${feelings.join(', ').toLowerCase()}`);
  return `${STYLE}. ${bits.join('; ')}`.slice(0, 600);
}

// Light abuse guard: per-IP rate limit + global concurrency cap.
const hits = new Map();
const PER_MIN = Number(process.env.RATE_PER_MIN || 12);
let active = 0;
const MAX_ACTIVE = 4;
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  list.push(now);
  hits.set(ip, list);
  return list.length > PER_MIN;
}

function cors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED.some((r) => r.test(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Bypass-Tunnel-Reminder');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  return !origin || ALLOWED.some((r) => r.test(origin));
}

const send = (res, code, body) => {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const server = http.createServer(async (req, res) => {
  const ok = cors(req, res);
  if (req.method === 'OPTIONS') return res.writeHead(ok ? 204 : 403).end();
  if (req.method === 'GET' && (req.url === '/health' || req.url === '/')) return send(res, 200, { ok: true, model: MODEL });
  if (req.method !== 'POST' || req.url !== '/api/scene-image') return send(res, 404, { error: 'not found' });
  if (!ok) return send(res, 403, { error: 'origin not allowed' });

  const ip = String(req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0].trim();
  if (limited(ip)) return send(res, 429, { error: 'slow down' });
  if (active >= MAX_ACTIVE) return send(res, 503, { error: 'busy, retry shortly' });

  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 8_000) return send(res, 413, { error: 'too large' });
  }
  let body;
  try { body = JSON.parse(raw || '{}'); } catch { return send(res, 400, { error: 'bad json' }); }
  const scene = typeof body.scene === 'string' ? body.scene.trim().slice(0, 300) : '';
  if (!scene) return send(res, 400, { error: 'scene required' });

  active++;
  const t0 = Date.now();
  try {
    const r = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({
        model: MODEL,
        prompt: scenePrompt(scene, clean(body.places, 3), clean(body.feelings, 3)),
        size: SIZE,
        quality: 'low',
        output_format: 'webp',
        output_compression: 60,
        n: 1,
      }),
    });
    const j = await r.json().catch(() => ({}));
    const b64 = j?.data?.[0]?.b64_json;
    if (!r.ok || !b64) {
      console.warn(`[scene-image] upstream ${r.status}: ${j?.error?.code || j?.error?.type || 'no image'}`);
      return send(res, 502, { error: 'image generation failed', status: r.status });
    }
    console.log(`[scene-image] ok ${Date.now() - t0}ms ${Math.round(b64.length / 1024)}KB "${scene.slice(0, 40)}"`);
    const image = `data:image/${j.output_format || 'webp'};base64,${b64}`;
    send(res, 200, { image });
  } catch (err) {
    console.warn('[scene-image] error', err?.message);
    send(res, 502, { error: 'image generation failed' });
  } finally {
    active--;
  }
});

server.listen(PORT, () => console.log(`Visual Diary image proxy on :${PORT} (model ${MODEL}, ${SIZE})`));
