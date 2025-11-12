"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Environmental_1() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Lead";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Environmental Sustainability of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">1.5 - The Supply Chain</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Common Materials in Solar Panels</strong>: Aluminum, copper, silicon, silver, and zinc are some of the most common minerals used in solar panels—each one abundant on Earth. 
                  <strong>Polysilicon</strong> is another common material used in the production of solar panels. Large amounts of polysilicon can be found in China, making China the leading producer of solar panels. (Earth.org)
              </p>
              <p className="mb-10">
                  <strong>Manufacturing</strong>: The manufacturing of solar panels requires many energy-intensive processes that emit greenhouse gases. However, when comparing the carbon footprint of solar panels to other energy sources like coal mining, oil drilling, and fracking, solar panels are much better long-term alternatives.
              </p>
              <div className="mb-10 text-sm">
                <div>• Solar panels: 0.110231 lbs of CO₂ during manufacturing</div>
                <div>• Natural gas: 117 lbs of CO₂ per MMBtu (extraction and production)</div>
                <div>• Oil (petroleum): 160 lbs of CO₂ per MMBtu</div>
                <div>• Coal mining: 200 lbs of CO₂ per MMBtu (solaris)</div>
              </div>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/enviornmental/1-5.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Which of the following is NOT a common element in solar panels?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Aluminum"
                    checked={selected === "Aluminum"}
                    onChange={() => handleSelect("Aluminum")}
                    className="accent-blue-500"
                  />
                  A. Aluminum
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Copper"
                    checked={selected === "Copper"}
                    onChange={() => handleSelect("Copper")}
                    className="accent-blue-500"
                  />
                  B. Copper
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Lead"
                    checked={selected === "Lead"}
                    onChange={() => handleSelect("Lead")}
                    className="accent-blue-500"
                  />
                  C. Lead
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Silicon"
                    checked={selected === "Silicon"}
                    onChange={() => handleSelect("Silicon")}
                    className="accent-blue-500"
                  />
                  D. Silicon
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

