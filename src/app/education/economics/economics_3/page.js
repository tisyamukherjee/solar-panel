"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Economics_3() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "7-10";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Economics of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">3.3 - Falling Costs of Renewables</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Renewables beat fossil fuels</strong>: Most renewables beat coal, and many also beat natural gas on cost. (Freeing Energy)
              </p>
              <p className="mb-10">
                  <strong>Solar and wind lead</strong>: They are the only two sources that often average under <strong>$0.04/kWh</strong>, well below the US average retail rate of about <strong>$0.16/kWh</strong>. (EnergyBot)
              </p>
              <p className="mb-10">
                  <strong>Regional variation</strong>: Prices vary by state, region, and country—largely because of <strong>installation costs</strong> (labor, permitting, soft costs), not just weather. Solar can be viable across the mainland US, even in lower‑insolation states. (SEIA)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/economics/3-3.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Solar panels usually take ______ years to pay the upfront costs:
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="2-4"
                    checked={selected === "2-4"}
                    onChange={() => handleSelect("2-4")}
                    className="accent-blue-500"
                  />
                  2-4
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="4-7"
                    checked={selected === "4-7"}
                    onChange={() => handleSelect("4-7")}
                    className="accent-blue-500"
                  />
                  4-7
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="7-10"
                    checked={selected === "7-10"}
                    onChange={() => handleSelect("7-10")}
                    className="accent-blue-500"
                  />
                  7-10
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="25"
                    checked={selected === "25"}
                    onChange={() => handleSelect("25")}
                    className="accent-blue-500"
                  />
                  25
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

