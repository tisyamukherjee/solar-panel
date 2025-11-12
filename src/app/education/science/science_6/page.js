"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Science_6() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Infrared and Ultraviolet";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.6 - Cool Future Prospects of Solar</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Futuristic ideas</strong>: A <strong>Dyson sphere</strong> is a hypothetical megastructure around a star to harness its power directly. Another concept is <strong>orbital space mirrors</strong>, placing reflectors in space to redirect sunlight—potentially providing light even after dusk for regions on Earth.
              </p>
              <p className="mb-10">
                  <strong>Solar windows</strong>: Transparent PV glass panels trap <strong>infrared</strong> and <strong>ultraviolet</strong> light, which the human eye can’t see. Buildings could cut energy use by ~<strong>30%</strong> with widespread adoption, since windows are everywhere.
              </p>
              <p className="mb-10">
                  <strong>Optimizing solar with AI</strong>: Gen‑AI and advanced controls can optimize panel positioning throughout the day and tune grid distribution in real time to improve efficiency and reliability. (ScienceDirect)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-6.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                What kind of light do photovoltaic glass panels trap?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Visible light"
                    checked={selected === "Visible light"}
                    onChange={() => handleSelect("Visible light")}
                    className="accent-blue-500"
                  />
                  Visible light
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Infrared"
                    checked={selected === "Infrared"}
                    onChange={() => handleSelect("Infrared")}
                    className="accent-blue-500"
                  />
                  Infrared
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Ultraviolet"
                    checked={selected === "Ultraviolet"}
                    onChange={() => handleSelect("Ultraviolet")}
                    className="accent-blue-500"
                  />
                  Ultraviolet
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Infrared and Ultraviolet"
                    checked={selected === "Infrared and Ultraviolet"}
                    onChange={() => handleSelect("Infrared and Ultraviolet")}
                    className="accent-blue-500"
                  />
                  Infrared and Ultraviolet
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

