"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Economics_5() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Inflation Reduction Act";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Economics of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">3.5 - Government Incentivisation</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Solar Renewable Energy Certificates (SRECs)</strong>: Performance-based incentives that let owners earn income for production. For every <strong>1,000 kWh</strong> generated, one SREC is created. SRECs can be sold or traded, with values typically ranging from <strong>$3–$400</strong> depending on the state market. While Michigan lacks its own SREC program, residents can participate in the <strong>Ohio</strong> SREC market. (EnergySage)
              </p>
              <p className="mb-10">
                  <strong>Business and household incentives</strong>: The <strong>Investment Tax Credit (ITC)</strong> covers <strong>30%</strong> of solar installation costs for homeowners and businesses (through 2032 under the IRA). Applies to rooftop and utility-scale, with bonus adders for domestic content and energy‑community siting. (U.S. DOE)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/economics/3-5.jpeg"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                What landmark policy in 2022 was the single largest investment in renewable energy in history.
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Paris Climate Accord"
                    checked={selected === "Paris Climate Accord"}
                    onChange={() => handleSelect("Paris Climate Accord")}
                    className="accent-blue-500"
                  />
                  a. Paris Climate Accord
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Tokyo Protocol"
                    checked={selected === "Tokyo Protocol"}
                    onChange={() => handleSelect("Tokyo Protocol")}
                    className="accent-blue-500"
                  />
                  b. Tokyo Protocol
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Inflation Reduction Act"
                    checked={selected === "Inflation Reduction Act"}
                    onChange={() => handleSelect("Inflation Reduction Act")}
                    className="accent-blue-500"
                  />
                  c. Inflation Reduction Act
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Liberation Day"
                    checked={selected === "Liberation Day"}
                    onChange={() => handleSelect("Liberation Day")}
                    className="accent-blue-500"
                  />
                  d. Liberation Day
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct — c is the correct answer"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

