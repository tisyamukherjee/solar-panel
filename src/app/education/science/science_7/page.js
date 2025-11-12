"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Science_7() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "Washing away dust and dirt";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.7 - Myth Debunking</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <div className="mb-10">
                <p className="font-semibold">Myth: Solar panels only work with sunny weather.</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Panels take in both <strong>direct and indirect</strong> sunlight (including reflected light and through clouds). (SEIA)</li>
                  <li><strong>Batteries</strong> store excess energy from sunny periods to use at night or during low sunlight. (DoE)</li>
                  <li><strong>Rain</strong> can help by washing away dust and dirt that reduce performance. (SEIA)</li>
                </ul>
              </div>

              <div className="mb-10">
                <p className="font-semibold">Myth: Solar panels leach toxic chemicals.</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Panels in use are <strong>safe</strong>; trace toxic metals are <strong>sealed</strong> within modules. (EPA)</li>
                  <li>Before disposal, panels are <strong>tested</strong>; units exceeding regulatory limits are disposed of appropriately. (EPA)</li>
                </ul>
              </div>

              <div className="mb-10">
                <p className="font-semibold">Myth: Solar panels are not very efficient.</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Efficiency is the share of light converted to electricity under standard test conditions. (SUNSAVE)</li>
                  <li>Average panel efficiency is ~<strong>18%–24%</strong>; given the sun’s immense energy, this is plenty to deliver significant power. (DoE)</li>
                </ul>
              </div>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-7.jpeg"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                How can rain help solar panels?
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Reducing toxic chemicals"
                    checked={selected === "Reducing toxic chemicals"}
                    onChange={() => handleSelect("Reducing toxic chemicals")}
                    className="accent-blue-500"
                  />
                  a. Reducing toxic chemicals
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Increasing energy efficiency"
                    checked={selected === "Increasing energy efficiency"}
                    onChange={() => handleSelect("Increasing energy efficiency")}
                    className="accent-blue-500"
                  />
                  b. Increasing energy efficiency 
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Washing away dust and dirt"
                    checked={selected === "Washing away dust and dirt"}
                    onChange={() => handleSelect("Washing away dust and dirt")}
                    className="accent-blue-500"
                  />
                  c. Washing away dust and dirt
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="Reflecting light towards the panels"
                    checked={selected === "Reflecting light towards the panels"}
                    onChange={() => handleSelect("Reflecting light towards the panels")}
                    className="accent-blue-500"
                  />
                  d. Reflecting light towards the panels
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

