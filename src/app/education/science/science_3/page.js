"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Science_3() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Hydro";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.3 - Efficiency Compared to other Fuels</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Three types of silicon solar</strong>: Monocrystalline panels lead with <strong>20%+</strong> efficiency due to their pure silicon structure—ideal for space-constrained rooftops. Polycrystalline panels offer a balance at around <strong>15%</strong>, while thin-film amorphous silicon (~<strong>10%</strong>) enables flexible, lightweight designs for unconventional surfaces.
              </p>
              <p className="mb-10">
                  <strong>Fossil fuel electricity efficiency is low</strong>: Coal plants squander roughly <strong>70%</strong> of their input as heat, operating near <strong>30%</strong> efficiency. Natural gas performs better (~<strong>40%</strong>), and even combined heat-and-power systems top out near <strong>60%</strong>—still well below top renewables.
              </p>
              <p className="mb-10">
                  <strong>Other renewables</strong>: Hydropower leads near <strong>90%</strong> conversion efficiency, with wind close behind at ~<strong>45%</strong>. Unlike fossil fuels, these sources lose minimal energy in conversion, demonstrating that sustainability and performance can align.
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-3.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                What renewable energy source has the highest efficiency?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Solar"
                    checked={selected === "Solar"}
                    onChange={() => handleSelect("Solar")}
                    className="accent-blue-500"
                  />
                  Solar
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Wind"
                    checked={selected === "Wind"}
                    onChange={() => handleSelect("Wind")}
                    className="accent-blue-500"
                  />
                  Wind
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Hydro"
                    checked={selected === "Hydro"}
                    onChange={() => handleSelect("Hydro")}
                    className="accent-blue-500"
                  />
                  Hydro
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

