"use client";

import { useProgress } from "@/context/ProgressContext";

const TRACKED_LESSONS = [
  "environmental_1",
  "environmental_2",
  "environmental_3",
  "environmental_4",
];

export default function EducationHome() {
  const { completedLessons } = useProgress();

  const completedCount = TRACKED_LESSONS.filter((id) => completedLessons.has(id)).length;
  const total = TRACKED_LESSONS.length;
  const pct = Math.round((completedCount / total) * 100);

  return (
    <div className="font-montserrat">
      <h1 className="text-3xl">Solar Energy Education Modules</h1>
      <h2 className="text-xl py-6">Click the sidebar to begin!</h2>

      <div className="mt-2 bg-gray-100 rounded-xl p-6 max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-[#00274C]">Your Progress</span>
          <span className="text-sm text-gray-600">
            {completedCount} / {total} lessons complete
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className="bg-[#FFCB05] h-4 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        {completedCount === total && completedCount > 0 && (
          <p className="mt-3 text-green-600 font-semibold text-sm">All lessons complete!</p>
        )}
      </div>
    </div>
  );
}
