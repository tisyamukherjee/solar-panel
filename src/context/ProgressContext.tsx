"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getUserProgress, markLessonComplete } from "@/lib/actions/tracking";
import { getLocalProgress, setLocalCompleted } from "@/lib/localProgress";

type ProgressContextValue = {
  completedLessons: Set<string>;
  markComplete: (lessonId: string) => Promise<void>;
};

const ProgressContext = createContext<ProgressContextValue>({
  completedLessons: new Set(),
  markComplete: async () => {},
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Read localStorage immediately for instant render
    const local = getLocalProgress();
    const localCompleted = new Set(
      Object.entries(local)
        .filter(([, v]) => v)
        .map(([k]) => k)
    );
    setCompletedLessons(localCompleted);

    // Merge with DB (returns [] for guests)
    getUserProgress().then((dbProgress) => {
      const dbCompleted = new Set(
        dbProgress.filter((p) => p.completed).map((p) => p.lessonId)
      );
      setCompletedLessons((prev) => new Set([...prev, ...dbCompleted]));
    });
  }, []);

  const markComplete = useCallback(async (lessonId: string) => {
    // Update context state immediately — sidebar and progress bar re-render at once
    setCompletedLessons((prev) => new Set([...prev, lessonId]));
    setLocalCompleted(lessonId);
    await markLessonComplete(lessonId); // no-op if not logged in
  }, []);

  return (
    <ProgressContext.Provider value={{ completedLessons, markComplete }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
