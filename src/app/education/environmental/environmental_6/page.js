"use client";

import Image from 'next/image'; 
import { useState } from "react";

export default function Environmental_1() {
  const [selected, setSelected] = useState(null);

  const correctAnswer = "True";

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Environmental Sustainability of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">1.6 - Supply Chain Continued</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Shipping</strong>: Due to China being the lead producer in solar panels, they export the majority of solar panels. In 2024 China was responsible for the export of <strong>235.9 GW</strong> of solar panels, a <strong>13%</strong> increase from 2023. (pv-magazine.com)
              </p>
              <p className="mb-10">
                  <strong>Human rights</strong>: A massive section of the solar supply chain is in the hands of only one country, China. This is due to most nations not having direct access to polysilicon. Ethical concerns also arise from the mining of polysilicon due to potential poor working conditions of the workers. A majority of polysilicon comes from <strong>Xinjiang</strong>, a region known for its human rights violations. (Earth.org)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/enviornmental/1-6.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />

            {/* quiz */}
            <div className="flex mt-5 flex-col items-start w-full max-w-xl mx-auto">
              <div className="mt-4 text-lg font-medium">
                The concentration of solar panel production in China raises ethical concerns about human rights due to the reliance on polysilicon from regions like Xinjiang.
              </div>

              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="True"
                    checked={selected === "True"}
                    onChange={() => handleSelect("True")}
                    className="accent-blue-500"
                  />
                  True
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="answer"
                    value="False"
                    checked={selected === "False"}
                    onChange={() => handleSelect("False")}
                    className="accent-blue-500"
                  />
                  False
                </label>
              </div>

              {selected && (
                <div className="mt-3 text-sm font-semibold">
                  {selected === correctAnswer
                    ? "✅ Correct — A is the correct answer"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

