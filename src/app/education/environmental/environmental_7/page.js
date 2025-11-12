"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Environmental_1() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "75%";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Environmental Sustainability of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">1.7 - Disposal, Recycling, and Reuse of Solar Panels</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Disposal</strong>: Solar panels can be safely recycled at end-of-life (typically after 25–30 years), with processes recovering up to <strong>95%</strong> of materials like glass, aluminum, and silicon. The EPA regulates disposal to prevent toxic leaching, though recycling rates must improve globally.
              </p>
              <p className="mb-10">
                  <strong>Recycling</strong>: Many components of solar panels can be recycled, such as glass (which is <strong>75%</strong> of the panel), inverters, racking, battery backup systems, and more. Some critical materials and toxic metals can be more difficult to recycle. Panels are disassembled and undergo thermal, mechanical, or chemical processes to separate materials (EPA).
              </p>
              <div className="mb-10 text-sm">
                <div><strong>Reuse</strong>: Second-life applications extend usefulness:</div>
                <div className="ml-4">• Repurposed panels power off-grid projects (e.g., rural schools, LED lighting).</div>
                <div className="ml-4">• Refurbished systems are sold at lower cost for developing communities.</div>
                <div className="ml-4">• Silicon recycling reduces demand for new mining, cutting upstream emissions.</div>
                <div className="ml-4">• The U.S. solar recycling industry is projected to grow 30% annually as retirements rise (SEIA).</div>
              </div>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/enviornmental/1-7.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                What percentage of a solar panel’s weight is recyclable glass?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="25%"
                    checked={selected === "25%"}
                    onChange={() => handleSelect("25%")}
                    className="accent-blue-500"
                  />
                  A. 25%
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
                  B. 50%
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="75%"
                    checked={selected === "75%"}
                    onChange={() => handleSelect("75%")}
                    className="accent-blue-500"
                  />
                  C. 75%
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
                  D. 90%
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct — C is the correct answer"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

