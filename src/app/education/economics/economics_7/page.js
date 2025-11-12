"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Economics_7() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "80%";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Economics of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">3.7 - Current Barriers</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Land use & NIMBY opposition</strong>: "Not In My Backyard" (NIMBY) refers to people supporting projects in theory but opposing them locally. A Rural Sociology study of Western and Northern New York found <strong>42%</strong> opposition to utility‑scale solar—illustrating how local sentiment can block projects. (Nilson & Stedman, 2023)
              </p>
              <p className="mb-10">
                  <strong>Interconnection grid delays</strong>: Inefficient interconnection processes are a major bottleneck. Berkeley Lab reports interconnection queue requests have surged ~<strong>70%</strong> over the last decade, with a <strong>~80% withdrawal</strong> rate as projects stall or are cancelled.
              </p>
              <p className="mb-10">
                  <strong>Political challenges</strong>: Solar has become politicized due to lobbying by the fossil fuel industry. Some states lag in adoption because of policies unfavorable to renewables. Recent actions—tariffs, funding cuts, and other constraints—may slow expansion.
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/economics/3-7.jpeg"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Many solar projects face delays/cancellations due to grid inefficiency. What percentage of projects have cancellations?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="30%"
                    checked={selected === "30%"}
                    onChange={() => handleSelect("30%")}
                    className="accent-blue-500"
                  />
                  30%
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="50%"
                    checked={selected === "50%"}
                    onChange={() => handleSelect("50%")}
                    className="accent-blue-500"
                  />
                  50%
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="80%"
                    checked={selected === "80%"}
                    onChange={() => handleSelect("80%")}
                    className="accent-blue-500"
                  />
                  80%
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="90%"
                    checked={selected === "90%"}
                    onChange={() => handleSelect("90%")}
                    className="accent-blue-500"
                  />
                  90%
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

