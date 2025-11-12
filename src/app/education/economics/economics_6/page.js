"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Economics_6() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "11";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Economics of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">3.6 - Solar Implementation</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>High upfront costs</strong>: On average, U.S. solar shoppers require an <strong>11 kW</strong> home solar system to meet electricity needs (EnergySage). In 2025, that equates to an upfront cost of about <strong>$20,552</strong> after federal tax credits—often discouraging low- and middle‑income households.
              </p>
              <p className="mb-10">
                  <strong>Solar as an economic engine</strong>: As of 2023, nearly <strong>280,000</strong> Americans work in solar across 10,000+ companies in every state. In 2024, the industry generated over <strong>$70B</strong> of private investment (IREC).
              </p>
              <p className="mb-10">
                  <strong>Solar payback period</strong>: Panels typically last <strong>20–30 years</strong>. Home systems generally pay back in about <strong>5–12 years</strong>, influenced by incentives—more credits mean a shorter payback (Solar.com).
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/economics/3-6.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                On average, how many kilowatts does the typical U.S. homeowner need to fulfill their energy needs?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="6"
                    checked={selected === "6"}
                    onChange={() => handleSelect("6")}
                    className="accent-blue-500"
                  />
                  a. 6
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="11"
                    checked={selected === "11"}
                    onChange={() => handleSelect("11")}
                    className="accent-blue-500"
                  />
                  b. 11
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="12"
                    checked={selected === "12"}
                    onChange={() => handleSelect("12")}
                    className="accent-blue-500"
                  />
                  c. 12
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="21"
                    checked={selected === "21"}
                    onChange={() => handleSelect("21")}
                    className="accent-blue-500"
                  />
                  d. 21
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct — b is the correct answer"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

