import type { DiaryDay, DiaryStore, StoryElement, DiaryEntry } from '../types';
import { isoDate } from '../types';

const STORAGE_KEY = 'visual-diary:v2';
const LEGACY_KEY = 'storyboard:v1';

export function emptyDay(date: string): DiaryDay {
  return { date, title: '', elements: [], entries: [], updatedAt: Date.now() };
}

export function hasContent(day: DiaryDay | undefined): boolean {
  return !!day && (day.elements.length > 0 || day.entries.length > 0 || !!day.title.trim());
}

function sanitizeDay(date: string, raw: Partial<DiaryDay>): DiaryDay {
  return {
    date,
    title: typeof raw.title === 'string' ? raw.title : '',
    elements: Array.isArray(raw.elements) ? (raw.elements as StoryElement[]) : [],
    entries: Array.isArray(raw.entries) ? (raw.entries as DiaryEntry[]) : [],
    updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
  };
}

/** Load all diaries. Migrates the single-board v1 format into today's page. */
export function loadStore(): DiaryStore {
  const store: DiaryStore = { version: 2, diaries: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<DiaryStore>;
      for (const [date, day] of Object.entries(parsed.diaries ?? {})) {
        store.diaries[date] = sanitizeDay(date, day ?? {});
      }
    }
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const old = JSON.parse(legacy) as { title?: string; elements?: StoryElement[]; entries?: DiaryEntry[] };
      const firstTs = old.entries?.[0]?.createdAt ?? old.elements?.[0]?.createdAt ?? Date.now();
      const date = isoDate(new Date(firstTs));
      if (!store.diaries[date] && (old.elements?.length || old.entries?.length)) {
        store.diaries[date] = sanitizeDay(date, {
          title: old.title && old.title !== 'Untitled story' ? old.title : '',
          elements: old.elements,
          entries: old.entries,
        });
      }
      localStorage.removeItem(LEGACY_KEY);
      saveStore(store);
    }
  } catch (err) {
    console.warn('Could not read diaries from localStorage', err);
  }
  return store;
}

export function saveStore(store: DiaryStore): void {
  try {
    // Don't persist empty pages.
    const diaries: Record<string, DiaryDay> = {};
    for (const [date, day] of Object.entries(store.diaries)) if (hasContent(day)) diaries[date] = day;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, diaries }));
  } catch (err) {
    console.warn('Could not save diaries to localStorage', err);
  }
}
