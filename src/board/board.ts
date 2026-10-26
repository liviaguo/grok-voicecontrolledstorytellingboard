import { KIND_META, KINDS, type ElementKind, type StoryElement } from '../types';

export interface BoardCallbacks {
  onMove: (id: string, x: number, y: number) => void;
  onDelete: (id: string) => void;
}

const MIN_CARD_W = 140;
const MAX_CARD_W = 200;
const CARD_H = 64;
const SCENE_W = 250;
const SCENE_H = 120;
/** Characters, places, feelings and objects get columns; scenes run along the bottom like a timeline. */
const COLUMN_KINDS = KINDS.filter((k) => k !== 'scene');
const PAD = 16;

/** Renders story elements as draggable cards inside a board container. */
export class Board {
  private cards = new Map<string, HTMLElement>();

  constructor(
    private readonly root: HTMLElement,
    private readonly emptyEl: HTMLElement,
    private readonly cb: BoardCallbacks,
  ) {}

  /** Card width adapts so the five kind-columns fit the board. */
  private get cardWidth(): number {
    const colWidth = (this.root.clientWidth - PAD) / COLUMN_KINDS.length;
    return Math.round(Math.min(MAX_CARD_W, Math.max(MIN_CARD_W, colWidth - 14)));
  }

  render(elements: StoryElement[]): void {
    this.root.style.setProperty('--card-w', `${this.cardWidth}px`);
    const ids = new Set(elements.map((e) => e.id));
    for (const [id, el] of this.cards) {
      if (!ids.has(id)) {
        el.remove();
        this.cards.delete(id);
      }
    }
    for (const element of elements) {
      let card = this.cards.get(element.id);
      if (!card) {
        card = this.createCard(element);
        this.cards.set(element.id, card);
        this.root.appendChild(card);
        requestAnimationFrame(() => card!.classList.add('is-in'));
      }
      // Keep cards visible if the board is narrower than when they were placed.
      const maxX = Math.max(4, this.root.clientWidth - card.offsetWidth - 4);
      const maxY = Math.max(4, this.root.clientHeight - card.offsetHeight - 4);
      card.style.transform = `translate(${clamp(element.x, 4, maxX)}px, ${clamp(element.y, 4, maxY)}px)`;
    }
    this.emptyEl.hidden = elements.length > 0;
  }

  /** Suggest a free-ish spot for a new element, grouping by kind into columns. */
  placeFor(kind: ElementKind, existing: StoryElement[]): { x: number; y: number } {
    const sameKind = existing.filter((e) => e.kind === kind).length;
    const width = Math.max(this.root.clientWidth, SCENE_W + PAD * 2);
    const height = Math.max(this.root.clientHeight, 400);

    if (kind === 'scene') {
      const perRow = Math.max(1, Math.floor((width - PAD) / (SCENE_W + 14)));
      const col = sameKind % perRow;
      const row = Math.floor(sameKind / perRow);
      const x = PAD + col * (SCENE_W + 14);
      const y = height - PAD - SCENE_H - row * (SCENE_H + 14);
      return { x, y: Math.max(PAD, y) };
    }

    const cardW = this.cardWidth;
    const colWidth = Math.max(cardW + 8, (width - PAD) / COLUMN_KINDS.length);
    const col = COLUMN_KINDS.indexOf(kind);
    const x = Math.min(PAD + col * colWidth, width - cardW - PAD) + jitter(4);
    const y = PAD + sameKind * (CARD_H + 22) + jitter(4);
    return { x: Math.max(PAD, x), y: Math.max(PAD, y) };
  }

  /** Re-lay out everything into tidy columns by kind. */
  tidy(elements: StoryElement[]): StoryElement[] {
    const placed: StoryElement[] = [];
    for (const el of elements) {
      const { x, y } = this.placeFor(el.kind, placed);
      placed.push({ ...el, x: Math.round(x), y: Math.round(y) });
    }
    return placed;
  }

  private createCard(element: StoryElement): HTMLElement {
    const meta = KIND_META[element.kind];
    const card = document.createElement('article');
    card.className = `card card--${element.kind}`;
    card.dataset.id = element.id;
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${meta.label}: ${element.text}. Drag to move, Delete to remove.`);

    const icon = document.createElement('span');
    icon.className = 'card__icon';
    icon.textContent = meta.icon;
    icon.setAttribute('aria-hidden', 'true');

    const body = document.createElement('div');
    body.className = 'card__body';
    const kind = document.createElement('span');
    kind.className = 'card__kind';
    kind.textContent = meta.label;
    const text = document.createElement('span');
    text.className = 'card__text';
    text.textContent = element.text;
    body.append(kind, text);

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

    card.append(icon, body, del);
    this.enableDrag(card, element.id);
    return card;
  }

  private remove(card: HTMLElement, id: string) {
    card.classList.add('is-out');
    setTimeout(() => this.cb.onDelete(id), 160);
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
      const maxY = this.root.clientHeight - card.offsetHeight - 4;
      const x = clamp(originX + e.clientX - startX, 4, Math.max(4, maxX));
      const y = clamp(originY + e.clientY - startY, 4, Math.max(4, maxY));
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

function jitter(n: number) {
  return Math.round((Math.random() - 0.5) * n * 2);
}
