"use client";

import { useState } from "react";
import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";

export default function LessonCompleteButton({ lessonId, nextHref }: { lessonId: string; nextHref?: string }) {
  const { completedLessons, markComplete } = useProgress();
  const [loading, setLoading] = useState(false);

  const completed = completedLessons.has(lessonId);

  const handleComplete = async () => {
    setLoading(true);
    await markComplete(lessonId);
    setLoading(false);
  };

  if (completed) {
    return (
      <div className="flex items-center gap-4 mt-10 pb-16">
        <span className="text-green-600 font-semibold text-lg">✓ Lesson Complete</span>
        {nextHref && (
          <Link
            href={nextHref}
            className="bg-[#00274C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
          >
            Next Lesson →
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mt-10 pb-16">
      <button
        onClick={handleComplete}
        disabled={loading}
        className="bg-[#FFCB05] text-[#00274C] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Saving..." : "Mark as Complete"}
      </button>
      {nextHref && (
        <Link
          href={nextHref}
          className="text-[#00274C] font-semibold px-6 py-3 rounded-lg border border-[#00274C] hover:bg-gray-100 transition-colors"
        >
          Next Lesson →
        </Link>
      )}
    </div>
  );
}
