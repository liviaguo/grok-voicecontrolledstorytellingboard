export type ElementKind = 'character' | 'place' | 'feeling' | 'object' | 'scene';

export interface StoryElement {
  id: string;
  kind: ElementKind;
  text: string;
  /** Optional secondary line, e.g. "my sister" for a character named Maya. */
  note?: string;
  /** Canonical keyword used to pick a visual (photo or icon), e.g. "beach". */
  asset?: string;
  /** Position on the board, in px relative to the board's top-left corner. */
  x: number;
  y: number;
  createdAt: number;
}

export interface DiaryEntry {
  id: string;
  text: string;
  createdAt: number;
}

/** One visual diary page. Each calendar day has at most one. */
export interface DiaryDay {
  /** ISO calendar date, YYYY-MM-DD (local time). */
  date: string;
  title: string;
  elements: StoryElement[];
  entries: DiaryEntry[];
  updatedAt: number;
}

/** Everything persisted in localStorage. */
export interface DiaryStore {
  version: 2;
  diaries: Record<string, DiaryDay>;
}

export const KIND_META: Record<ElementKind, { label: string; plural: string }> = {
  character: { label: 'Person', plural: 'People' },
  place: { label: 'Place', plural: 'Places' },
  feeling: { label: 'Feeling', plural: 'Feelings' },
  object: { label: 'Object', plural: 'Objects' },
  scene: { label: 'Scene', plural: 'Scenes' },
};

export const KINDS: ElementKind[] = ['scene', 'character', 'place', 'object', 'feeling'];

export function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Local-time ISO date (YYYY-MM-DD). */
export function isoDate(d = new Date()): string {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export function parseIsoDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function shiftDate(s: string, days: number): string {
  const d = parseIsoDate(s);
  d.setDate(d.getDate() + days);
  return isoDate(d);
}

export const isValidIsoDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(parseIsoDate(s).getTime());
