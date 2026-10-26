import { KIND_META, type ElementKind, type StoryElement } from '../types';
import { icon, KIND_ICON, visualFor } from '../visuals/visuals';
import { imageStatus, loadSceneImage, retrySceneImage } from '../visuals/sceneImage';

export interface ReviewCallbacks {
  onDelete: (id: string) => void;
}

/** Sections of the one-page review, in reading order. Moments (scenes) lead as the timeline. */
const SECTIONS: { kind: ElementKind; title: string; hint: string }[] = [
  { kind: 'character', title: 'People', hint: 'Who was there' },
  { kind: 'place', title: 'Places', hint: 'Where it happened' },
  { kind: 'object', title: 'Objects', hint: 'Things worth keeping' },
  { kind: 'feeling', title: 'Feelings', hint: 'How it felt' },
];

/**
 * Renders a day as a calm, one-page review: a summary line, a numbered list of
 * moments, then tidy icon grids for people, places, objects and feelings.
 * No free positioning — everything flows, so there are never gaps or overlaps.
 */
export class Review {
  private seen = new Set<string>();
  private date = '';

  constructor(
    private readonly root: HTMLElement,
    private readonly cb: ReviewCallbacks,
  ) {}

  render(date: string, elements: StoryElement[], summary: string): void {
    if (date !== this.date) {
      // New day: show its contents at once instead of animating everything in.
      this.date = date;
      this.seen = new Set(elements.map((e) => e.id));
    }
    const focusedId = (document.activeElement as HTMLElement | null)?.closest<HTMLElement>('[data-id]')?.dataset.id;
    this.root.innerHTML = '';

    if (!elements.length) {
      this.root.appendChild(this.empty());
      return;
    }

    const head = el('header', 'review__head');
    head.append(el('p', 'eyebrow', 'The day in one page'));
    if (summary) head.append(el('p', 'review__summary', summary));
    this.root.appendChild(head);

    const scenes = elements.filter((e) => e.kind === 'scene');
    if (scenes.length) {
      const sec = this.section('Moments', 'Each moment, drawn as a picture', scenes.length, 'scene');
      sec.classList.add('review__section--scene');
      const ol = el('ol', 'moments');
      scenes.forEach((s, i) => ol.appendChild(this.moment(s, i)));
      sec.appendChild(ol);
      this.root.appendChild(sec);
    }

    const grid = el('div', 'review__grid');
    for (const { kind, title, hint } of SECTIONS) {
      const items = elements.filter((e) => e.kind === kind);
      const sec = this.section(title, hint, items.length, kind);
      sec.classList.add(`review__section--${kind}`);
      if (items.length) {
        const ul = el('ul', 'tiles');
        for (const it of items) ul.appendChild(this.item(it, 'tile'));
        sec.appendChild(ul);
      } else {
        sec.appendChild(el('p', 'review__none', `No ${title.toLowerCase()} yet`));
      }
      grid.appendChild(sec);
    }
    this.root.appendChild(grid);

    for (const e of elements) this.seen.add(e.id);
    if (focusedId) this.root.querySelector<HTMLElement>(`[data-id="${CSS.escape(focusedId)}"]`)?.focus();
  }

  /** A Moment as a picture card: generated illustration + short caption. */
  private moment(e: StoryElement, i: number): HTMLElement {
    const li = el('li', 'moment');
    li.dataset.id = e.id;
    li.dataset.kind = e.kind;
    li.tabIndex = 0;
    if (!this.seen.has(e.id)) li.classList.add('is-new');
    li.setAttribute('aria-label', `Moment ${i + 1}: ${e.text}`);

    const pic = el('div', 'moment__pic');
    const fallback = el('span', 'moment__fallback');
    fallback.setAttribute('aria-hidden', 'true');
    const v = visualFor(e);
    fallback.innerHTML = v.svg; // bundled, trusted diary SVG
    pic.appendChild(fallback);

    const url = e.image;
    const showImage = () => {
      const img = document.createElement('img');
      img.className = 'moment__img';
      img.alt = `Illustration: ${e.text}`;
      img.decoding = 'async';
      img.src = url!;
      pic.appendChild(img);
      pic.dataset.state = 'loaded';
    };
    const showFailed = () => {
      pic.dataset.state = 'failed';
      const retry = el('button', 'moment__retry', 'Retry picture') as HTMLButtonElement;
      retry.type = 'button';
      retry.addEventListener('click', (ev) => {
        ev.stopPropagation();
        retry.remove();
        pic.dataset.state = 'loading';
        retrySceneImage(url!).then((ok) => li.isConnected && (ok ? showImage() : showFailed()));
      });
      pic.appendChild(retry);
    };
    if (!url) {
      pic.dataset.state = 'failed';
    } else if (imageStatus(url) === 'loaded') {
      showImage();
    } else {
      pic.dataset.state = 'loading';
      const label = el('span', 'moment__loading', 'Drawing…');
      pic.appendChild(label);
      loadSceneImage(url).then((ok) => {
        if (!li.isConnected) return;
        label.remove();
        ok ? showImage() : showFailed();
      });
    }

    const cap = el('div', 'moment__cap');
    cap.append(el('span', 'moment__n', String(i + 1).padStart(2, '0')), el('span', 'moment__label', e.text));

    const del = el('button', 'moment__delete') as HTMLButtonElement;
    del.type = 'button';
    del.title = 'Remove';
    del.setAttribute('aria-label', `Remove moment “${e.text}”`);
    del.innerHTML = icon('x');
    del.addEventListener('click', () => this.cb.onDelete(e.id));
    li.addEventListener('keydown', (ev) => {
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && ev.target === li) {
        ev.preventDefault();
        this.cb.onDelete(e.id);
      }
    });

    li.append(pic, cap, del);
    return li;
  }

  private empty(): HTMLElement {
    const box = el('div', 'review__empty');
    box.append(
      el('p', 'review__empty-title', 'Nothing on this day yet.'),
      el('p', 'muted', 'Speak or write a few sentences. When each sentence ends, its people, places, feelings, objects and moments are added to this page.'),
    );
    return box;
  }

  private section(title: string, hint: string, count: number, kind: ElementKind): HTMLElement {
    const sec = el('section', 'review__section');
    const h = el('h3', 'review__title');
    const ic = el('span', 'review__title-icon');
    ic.setAttribute('aria-hidden', 'true');
    ic.innerHTML = icon(KIND_ICON[kind]); // bundled, trusted SVG
    h.append(ic, el('span', '', title), el('span', 'count', String(count)));
    sec.append(h, el('p', 'review__hint', hint));
    return sec;
  }

  private item(e: StoryElement, cls: 'tile'): HTMLElement {
    const li = el('li', cls);
    li.dataset.id = e.id;
    li.dataset.kind = e.kind;
    li.tabIndex = 0;
    if (!this.seen.has(e.id)) li.classList.add('is-new');
    const label = KIND_META[e.kind].label;
    li.setAttribute('aria-label', `${label}: ${e.text}${e.note ? ` (${e.note})` : ''}`);

    const v = visualFor(e);
    const badge = el('span', `${cls}__icon`);
    badge.setAttribute('aria-hidden', 'true');
    if (v.type === 'icon') {
      badge.innerHTML = v.svg; // bundled, trusted diary SVG
      if (v.tone) badge.dataset.tone = v.tone;
    } else {
      badge.classList.add('is-monogram');
      badge.append(el('span', 'monogram__letters', v.initials));
      const mini = el('span', 'monogram__badge');
      mini.innerHTML = v.svg; // bundled, trusted SVG silhouette
      badge.append(mini);
    }

    const text = el('span', `${cls}__text`);
    text.append(el('span', `${cls}__label`, e.text));
    if (e.note) text.append(el('span', `${cls}__note`, e.note));

    const del = el('button', `${cls}__delete`) as HTMLButtonElement;
    del.type = 'button';
    del.title = 'Remove';
    // Label is built from the same element this button removes, so it always matches.
    del.setAttribute('aria-label', `Remove ${label.toLowerCase()} “${e.text}”`);
    del.innerHTML = icon('x');
    del.addEventListener('click', () => this.cb.onDelete(e.id));
    li.addEventListener('keydown', (ev) => {
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && ev.target === li) {
        ev.preventDefault();
        const next = (li.nextElementSibling ?? li.previousElementSibling) as HTMLElement | null;
        this.cb.onDelete(e.id);
        if (next?.dataset.id) this.root.querySelector<HTMLElement>(`[data-id="${CSS.escape(next.dataset.id)}"]`)?.focus();
      }
    });

    li.append(badge, text, del);
    return li;
  }
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  n.className = className;
  if (text !== undefined) n.textContent = text;
  return n;
}
