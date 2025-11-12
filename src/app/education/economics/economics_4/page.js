"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Economics_4() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "75%";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Economics of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">3.4 - Rising Costs of Traditional Energy</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Extreme weather and natural disasters</strong>: Traditional energy infrastructure faces growing risk from hurricanes, flooding, and drought. High winds can damage <strong>oil rigs</strong> and disrupt transport from offshore to land; <strong>flooding</strong> damages storage and processing facilities; and <strong>droughts</strong> constrain drilling, mining, and transportation. (EPA)
              </p>
              <p className="mb-10">
                  <strong>Energy market specifics</strong>: Electricity prices depend on fuel costs, weather, plant operating expenses, location, and demand patterns. Prices spike in summer and during peak hours, and while industrial users may pay less, residential customers often pay more for reliability and comfort. (US EIA)
              </p>
              <p className="mb-10">
                  <strong>Declining fossil investment</strong>: Investment in fossil fuels fell by over <strong>$258 billion</strong> from 2015 to 2024. Today, <strong>over 75%</strong> of new energy projects are renewable, and by 2028, renewables are projected to supply <strong>42%</strong> of total energy production. (Vista Capital)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/economics/3-4.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                What percent of new projects are renewables?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="15%"
                    checked={selected === "15%"}
                    onChange={() => handleSelect("15%")}
                    className="accent-blue-500"
                  />
                  15%
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="25%"
                    checked={selected === "25%"}
                    onChange={() => handleSelect("25%")}
                    className="accent-blue-500"
                  />
                  25%
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
                    value="75%"
                    checked={selected === "75%"}
                    onChange={() => handleSelect("75%")}
                    className="accent-blue-500"
                  />
                  75%
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

