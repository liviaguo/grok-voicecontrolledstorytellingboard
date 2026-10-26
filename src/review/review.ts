import { KIND_META, type ElementKind, type StoryElement } from '../types';
import { icon, KIND_ICON, visualFor } from '../visuals/visuals';

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
      const sec = this.section('Moments', 'In the order you told it', scenes.length, 'scene');
      sec.classList.add('review__section--scene');
      const ol = el('ol', 'moments');
      scenes.forEach((s, i) => {
        const li = this.item(s, 'moment');
        const n = el('span', 'moment__n', String(i + 1).padStart(2, '0'));
        li.prepend(n);
        ol.appendChild(li);
      });
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

  private item(e: StoryElement, cls: 'tile' | 'moment'): HTMLElement {
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
