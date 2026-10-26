#!/usr/bin/env python3
"""Download a small, fixed set of CC0 photos (StockSnap via the Openverse API)
into src/assets/photos so the board can show image cards instantly, with no
network calls at runtime. Re-run to refresh: python3 scripts/fetch_assets.py
Requires Pillow."""
import io, json, os, sys, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'src', 'assets', 'photos')
# slug -> search query
TOPICS = {
    # places
    'park': 'park', 'beach': 'beach', 'home': 'living room', 'school': 'classroom',
    'kitchen': 'kitchen', 'forest': 'forest', 'city': 'city skyline', 'cafe': 'cafe',
    'office': 'office desk', 'library': 'library books', 'garden': 'garden', 'mountain': 'mountain',
    'lake': 'lake', 'river': 'river', 'ocean': 'ocean', 'village': 'village', 'castle': 'castle',
    'street': 'street', 'market': 'market', 'restaurant': 'restaurant', 'airport': 'airport',
    'train': 'train', 'bedroom': 'bedroom', 'museum': 'museum', 'hospital': 'hospital',
    'island': 'island', 'desert': 'desert', 'cabin': 'cabin', 'gym': 'gym', 'studio': 'studio',
    'lighthouse': 'lighthouse', 'harbor': 'harbor boats', 'bakery': 'bakery', 'bridge': 'bridge',
    'rooftop': 'rooftop', 'subway': 'subway', 'farm': 'farm', 'snow': 'snow', 'night': 'night sky',
    'sunset': 'sunset', 'rain': 'rain window', 'concert': 'concert',
    # objects
    'key': 'old key', 'letter': 'letter envelope', 'book': 'book', 'map': 'map', 'phone': 'smartphone',
    'camera': 'camera', 'umbrella': 'umbrella', 'coffee': 'coffee cup', 'tea': 'tea cup', 'cake': 'cake',
    'guitar': 'guitar', 'piano': 'piano', 'ring': 'ring jewelry', 'flowers': 'flowers', 'gift': 'gift box',
    'bike': 'bicycle', 'car': 'car', 'ticket': 'ticket', 'candle': 'candle', 'notebook': 'notebook',
    'shell': 'seashell', 'kite': 'kite', 'balloon': 'balloons', 'hat': 'hat', 'bag': 'bag',
    'clock': 'clock', 'painting': 'painting art', 'bread': 'bread', 'apple': 'apple fruit',
    'boat': 'boat', 'lantern': 'lantern', 'laptop': 'laptop', 'wine': 'wine glass', 'pizza': 'pizza',
    'dog': 'dog', 'cat': 'cat', 'ice-cream': 'ice cream', 'plant': 'house plant',
}

def get(url, timeout=40):
    req = urllib.request.Request(url, headers={'User-Agent': 'visual-diary-asset-fetch/1.0'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()

def fetch(slug, query):
    dest = os.path.join(OUT, f'{slug}.jpg')
    for attempt in range(3):
        try:
            q = urllib.parse.quote(query)
            data = json.loads(get(f'https://api.openverse.org/v1/images/?q={q}&source=stocksnap&page_size=5'))
            results = [r for r in data['results'] if r.get('license') == 'cc0']
            if not results:
                return slug, None
            words = query.split()[0].lower()
            pick = next((r for r in results if words in (r.get('title') or '').lower()), results[0])
            from PIL import Image
            img = Image.open(io.BytesIO(get(pick['url']))).convert('RGB')
            # center-crop to 4:3 and shrink
            w, h = img.size
            tw, th = (w, int(w * 3 / 4)) if w * 3 / 4 <= h else (int(h * 4 / 3), h)
            l, t = (w - tw) // 2, (h - th) // 2
            img = img.crop((l, t, l + tw, t + th)).resize((360, 270), Image.LANCZOS)
            img.save(dest, 'JPEG', quality=72, optimize=True, progressive=True)
            return slug, {'title': pick.get('title'), 'source': pick.get('foreign_landing_url'),
                          'license': 'CC0 1.0', 'provider': 'StockSnap via Openverse'}
        except Exception as e:  # noqa
            print(f'{slug}: attempt {attempt + 1} failed: {e}', file=sys.stderr)
            time.sleep(2)
    return slug, None

def main():
    os.makedirs(OUT, exist_ok=True)
    credits = {}
    with ThreadPoolExecutor(8) as ex:
        for slug, meta in ex.map(lambda kv: fetch(*kv), TOPICS.items()):
            print(('ok   ' if meta else 'MISS ') + slug, flush=True)
            if meta:
                credits[slug] = meta
    with open(os.path.join(OUT, 'credits.json'), 'w') as f:
        json.dump(dict(sorted(credits.items())), f, indent=2)
    print(f'{len(credits)}/{len(TOPICS)} photos saved to {OUT}')

if __name__ == '__main__':
    main()
