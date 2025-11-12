"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Science_1() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Nevada";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.1 - Energy the Earth Receives from the Sun</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>The sun gives the Earth a lot of energy</strong>: The Earth receives <strong>14.9 zetawatts</strong> (5,455,728,000,000,000,000,000,000 watts) of energy a day from the sun. A lot of this energy is reflected back into space, but a large portion stays.
              </p>
              <p className="mb-10">
                  <strong>Universal potential</strong>: If harnessed efficiently, it would only take an area roughly the size of <strong>New Mexico (often estimated similarly to Nevada)</strong> covered in solar panels to produce enough energy to power the world. While this estimate is unrealistic in terms of efficiency and energy transport, it illustrates the power of solar energy if utilized at scale. (Penn State)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-1.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                Roughly what size of land would be needed to power the entire world using only solar energy?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="China"
                    checked={selected === "China"}
                    onChange={() => handleSelect("China")}
                    className="accent-blue-500"
                  />
                  China
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Rhode Island"
                    checked={selected === "Rhode Island"}
                    onChange={() => handleSelect("Rhode Island")}
                    className="accent-blue-500"
                  />
                  Rhode Island
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Nevada"
                    checked={selected === "Nevada"}
                    onChange={() => handleSelect("Nevada")}
                    className="accent-blue-500"
                  />
                  Nevada
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="City of New York"
                    checked={selected === "City of New York"}
                    onChange={() => handleSelect("City of New York")}
                    className="accent-blue-500"
                  />
                  City of New York
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

