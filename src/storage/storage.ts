import type { StoryState } from '../types';

const STORAGE_KEY = 'storyboard:v1';

export function emptyStory(): StoryState {
  return { version: 1, title: 'Untitled story', elements: [], entries: [] };
}

export function loadStory(): StoryState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStory();
    const parsed = JSON.parse(raw) as Partial<StoryState>;
    if (parsed.version !== 1 || !Array.isArray(parsed.elements)) return emptyStory();
    return {
      version: 1,
      title: typeof parsed.title === 'string' ? parsed.title : 'Untitled story',
      elements: parsed.elements,
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
    };
  } catch {
    return emptyStory();
  }
}

export function saveStory(state: StoryState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Could not save story to localStorage', err);
  }
}

export function clearStory(): void {
  localStorage.removeItem(STORAGE_KEY);
}
