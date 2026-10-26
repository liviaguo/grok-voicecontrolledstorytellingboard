export type ElementKind = 'character' | 'place' | 'feeling' | 'object' | 'scene';

export interface StoryElement {
  id: string;
  kind: ElementKind;
  text: string;
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

export interface StoryState {
  version: 1;
  title: string;
  elements: StoryElement[];
  entries: DiaryEntry[];
}

export const KIND_META: Record<ElementKind, { label: string; plural: string; icon: string }> = {
  character: { label: 'Character', plural: 'Characters', icon: '🧑' },
  place: { label: 'Place', plural: 'Places', icon: '🏡' },
  feeling: { label: 'Feeling', plural: 'Feelings', icon: '💛' },
  object: { label: 'Object', plural: 'Objects', icon: '🗝️' },
  scene: { label: 'Scene', plural: 'Scenes', icon: '🎬' },
};

export const KINDS: ElementKind[] = ['character', 'place', 'feeling', 'object', 'scene'];

export function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
