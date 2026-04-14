"use client";

import { useState } from "react";

export default function TrueFalseQuiz({ question, correctAnswer }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
      <div className="mt-4 text-lg font-medium">{question}</div>

      <div className="mt-3 space-y-2">
        {["True", "False"].map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              className="accent-blue-500"
            />
            {option}
          </label>
        ))}
      </div>

      {selected && (
        <div className="mt-3 text-sm font-semibold">
          {selected === correctAnswer ? "✅ Correct" : "❌ Incorrect"}
        </div>
      )}
    </div>
  );
}
