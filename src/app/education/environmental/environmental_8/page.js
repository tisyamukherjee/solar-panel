"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Environmental_1() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Decentralize";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Environmental Sustainability of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">1.8 - Climate Resilience</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Definition</strong>: The Union of Concerned Scientists defines climate resilience as “successfully coping with and managing the impacts of climate change while preventing those impacts from growing worse. A climate-resilient society would be low-carbon and equipped to deal with the realities of a warmer world.” (UCS)
              </p>
              <p className="mb-10">
                  <strong>Current system faults</strong>: The US grid is vulnerable to natural disasters like the Texas Winter Storm in 2021 and the California wildfires of 2019, which both left millions without power for weeks. These disasters are expected to worsen due to climate change.
              </p>
              <p className="mb-10">
                  <strong>Solar decentralization</strong>: Because solar can be deployed from utility-scale farms to commercial buildings to homes, it decentralizes electricity generation and can lessen the impact of disasters. With solar and battery storage, communities or buildings can maintain electricity access during utility outages, potentially saving lives.
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/enviornmental/1-8.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Solar and other renewable sources improve climate resilience because they essentially ________ the grid.
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Consolidate"
                    checked={selected === "Consolidate"}
                    onChange={() => handleSelect("Consolidate")}
                    className="accent-blue-500"
                  />
                  a. Consolidate
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Overload"
                    checked={selected === "Overload"}
                    onChange={() => handleSelect("Overload")}
                    className="accent-blue-500"
                  />
                  b. Overload
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Supply"
                    checked={selected === "Supply"}
                    onChange={() => handleSelect("Supply")}
                    className="accent-blue-500"
                  />
                  c. Supply
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Decentralize"
                    checked={selected === "Decentralize"}
                    onChange={() => handleSelect("Decentralize")}
                    className="accent-blue-500"
                  />
                  d. Decentralize
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct — d is the correct answer"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

