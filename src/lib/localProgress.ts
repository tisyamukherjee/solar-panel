const STORAGE_KEY = "maize_rays_progress";

export type LocalProgress = Record<string, boolean>;

export function getLocalProgress(): LocalProgress {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function setLocalCompleted(lessonId: string) {
  const progress = getLocalProgress();
  progress[lessonId] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getCompletedLessonIds(): string[] {
  return Object.entries(getLocalProgress())
    .filter(([, v]) => v)
    .map(([k]) => k);
}
