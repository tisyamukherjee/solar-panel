"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Science_2() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Electrons";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.2 - Capturing Solar Energy</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Photovoltaic (PV) cells</strong>: The characteristic blue-black parts of a solar panel are made of <strong>semiconductors</strong>. These materials conduct electricity better than insulators (e.g., styrofoam or building wall materials) but not as well as metals.
              </p>
              <p className="mb-10">
                  <strong>How PV works</strong>: When a PV cell is exposed to light, <strong>photons</strong> strike the semiconductor and dislodge <strong>electrons</strong> from atoms, creating charge carriers that can move through the material.
              </p>
              <p className="mb-10">
                  <strong>Electricity</strong>: Electricity is the <strong>flow of electrons</strong>. (energy.com)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-2.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Electricity is the flow of…
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Neutrons"
                    checked={selected === "Neutrons"}
                    onChange={() => handleSelect("Neutrons")}
                    className="accent-blue-500"
                  />
                  Neutrons
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Protons"
                    checked={selected === "Protons"}
                    onChange={() => handleSelect("Protons")}
                    className="accent-blue-500"
                  />
                  Protons
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Electrons"
                    checked={selected === "Electrons"}
                    onChange={() => handleSelect("Electrons")}
                    className="accent-blue-500"
                  />
                  Electrons
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

