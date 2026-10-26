import { KIND_META, type ElementKind, type StoryElement } from '../types';
import { visualFor } from '../visuals/visuals';

export interface BoardCallbacks {
  onMove: (id: string, x: number, y: number) => void;
  onDelete: (id: string) => void;
}

/** Grid cell used for auto-placement. Scenes span two cells. */
const CELL_W = 176;
const CELL_H = 196;
const GAP = 12;
const PAD = 16;
const spanFor = (kind: ElementKind) => (kind === 'scene' ? 2 : 1);

/** Renders diary elements as draggable image cards inside the board. */
export class Board {
  private cards = new Map<string, HTMLElement>();

  constructor(
    private readonly root: HTMLElement,
    private readonly emptyEl: HTMLElement,
    private readonly cb: BoardCallbacks,
  ) {}

  private get columns(): number {
    return Math.max(2, Math.floor((Math.max(this.root.clientWidth, 2 * CELL_W + PAD) - PAD * 2 + GAP) / CELL_W));
  }

  /** Remove every card (used when switching to another day). */
  reset(): void {
    for (const el of this.cards.values()) el.remove();
    this.cards.clear();
  }

  render(elements: StoryElement[]): void {
    const ids = new Set(elements.map((e) => e.id));
    for (const [id, el] of this.cards) {
      if (!ids.has(id)) {
        el.remove();
        this.cards.delete(id);
      }
    }
    // If saved positions don't fit this board (e.g. opened on a phone), re-flow for display only.
    const fits = elements.every((e) => e.x + spanFor(e.kind) * CELL_W - GAP <= this.root.clientWidth + 4);
    const shown = fits ? elements : this.tidy(elements);
    let bottom = 0;
    shown.forEach((element, i) => {
      let card = this.cards.get(element.id);
      if (!card) {
        card = this.createCard(element);
        this.cards.set(element.id, card);
        this.root.appendChild(card);
        card.style.setProperty('--delay', `${Math.min(i, 8) * 25}ms`);
        const c = card;
        requestAnimationFrame(() => c.classList.add('is-in'));
      }
      const width = spanFor(element.kind) * CELL_W - GAP;
      const maxX = Math.max(4, this.root.clientWidth - width - 4);
      card.style.transform = `translate(${clamp(element.x, 4, maxX)}px, ${Math.max(4, element.y)}px)`;
      bottom = Math.max(bottom, element.y + CELL_H);
    });
    this.root.style.minHeight = `${Math.max(bottom + PAD, 0)}px`;
    this.emptyEl.hidden = elements.length > 0;
  }

  /** First free grid slot (reading order) that fits an element of this kind. */
  placeFor(kind: ElementKind, existing: StoryElement[]): { x: number; y: number } {
    const cols = this.columns;
    const span = Math.min(spanFor(kind), cols);
    const taken = new Set<string>();
    for (const e of existing) {
      const c0 = Math.round((e.x - PAD) / CELL_W);
      const r0 = Math.round((e.y - PAD) / CELL_H);
      for (let k = 0; k < spanFor(e.kind); k++) taken.add(`${r0}:${c0 + k}`);
    }
    for (let r = 0; r < 500; r++) {
      for (let c = 0; c + span <= cols; c++) {
        let free = true;
        for (let k = 0; k < span; k++) if (taken.has(`${r}:${c + k}`)) free = false;
        if (free) return { x: PAD + c * CELL_W, y: PAD + r * CELL_H };
      }
    }
    return { x: PAD, y: PAD };
  }

  /** Re-flow everything into the grid in the current order. */
  tidy(elements: StoryElement[]): StoryElement[] {
    const placed: StoryElement[] = [];
    for (const el of elements) placed.push({ ...el, ...this.placeFor(el.kind, placed) });
    return placed;
  }

  private createCard(element: StoryElement): HTMLElement {
    const meta = KIND_META[element.kind];
    const card = document.createElement('article');
    card.className = `card card--${element.kind}`;
    card.style.width = `${spanFor(element.kind) * CELL_W - GAP}px`;
    card.dataset.id = element.id;
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${meta.label}: ${element.text}. Drag to move, Delete to remove.`);

    const media = document.createElement('div');
    media.className = 'card__media';
    const visual = visualFor(element);
    if (visual.type === 'photo') {
      const img = document.createElement('img');
      img.src = visual.src;
      img.alt = '';
      img.draggable = false;
      img.decoding = 'async';
      media.appendChild(img);
    } else if (visual.type === 'icon') {
      media.classList.add('card__media--icon');
      if (visual.tone) media.dataset.tone = visual.tone;
      media.innerHTML = visual.svg; // bundled, trusted Lucide SVG
    } else {
      media.classList.add('card__media--monogram');
      const m = document.createElement('span');
      m.className = 'monogram';
      m.textContent = visual.initials;
      media.appendChild(m);
    }

    const body = document.createElement('div');
    body.className = 'card__body';
    const kind = document.createElement('span');
    kind.className = 'card__kind';
    kind.textContent = meta.label;
    const text = document.createElement('span');
    text.className = 'card__text';
    text.textContent = element.text;
    body.append(kind, text);
    if (element.note) {
      const note = document.createElement('span');
      note.className = 'card__note';
      note.textContent = element.note;
      body.appendChild(note);
    }

    const del = document.createElement('button');
    del.className = 'card__delete';
    del.type = 'button';
    del.title = 'Remove';
    del.setAttribute('aria-label', `Remove ${element.text}`);
    del.textContent = '×';
    del.addEventListener('pointerdown', (e) => e.stopPropagation());
    del.addEventListener('click', () => this.remove(card, element.id));

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        this.remove(card, element.id);
      }
    });

    card.append(media, body, del);
    this.enableDrag(card, element.id);
    return card;
  }

  private remove(card: HTMLElement, id: string) {
    card.classList.add('is-out');
    setTimeout(() => this.cb.onDelete(id), 140);
  }

  private enableDrag(card: HTMLElement, id: string) {
    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;
    let dragging = false;

    const currentPos = () => {
      const m = card.style.transform.match(/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/);
      return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 };
    };

    card.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      dragging = true;
      card.setPointerCapture(e.pointerId);
      const pos = currentPos();
      originX = pos.x;
      originY = pos.y;
      startX = e.clientX;
      startY = e.clientY;
      card.classList.add('is-dragging');
      this.root.appendChild(card); // bring to front
    });

    card.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const maxX = this.root.clientWidth - card.offsetWidth - 4;
      const x = clamp(originX + e.clientX - startX, 4, Math.max(4, maxX));
      const y = Math.max(4, originY + e.clientY - startY);
      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    const end = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      card.classList.remove('is-dragging');
      if (card.hasPointerCapture(e.pointerId)) card.releasePointerCapture(e.pointerId);
      const { x, y } = currentPos();
      this.cb.onMove(id, Math.round(x), Math.round(y));
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
  }
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
