"use client";

export default function EducationError({ reset }) {
  return (
    <div className="font-montserrat mt-16 flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold text-[#00274C]">This lesson isn&apos;t available yet.</h2>
      <p className="text-gray-500">Check back soon, or go back and continue from where you left off.</p>
      <button
        onClick={reset}
        className="bg-[#FFCB05] text-[#00274C] font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
