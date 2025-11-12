"use client";

import Image from 'next/image'; 

export default function Science_5() {
  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.5 - Types of Solar Power Systems Continued</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Photovoltaic (PV) dominates</strong>: Despite the cool applications of CSP, PV systems are by far the most common way to harvest solar energy. In 2023, global <strong>PV capacity reached ~1.624 TW</strong>, while <strong>CSP</strong> totaled only about <strong>6.8 GW</strong>. PV wins because panels are <strong>versatile</strong>, <strong>easy to install</strong>, and suitable for many locations. Within PV there are two main panel types, with <strong>monocrystalline</strong> accounting for roughly <strong>90%</strong> of the market.
              </p>

              {/* mono vs poly summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-100 rounded">
                  <h3 className="text-2xl font-semibold underline">Monocrystalline</h3>
                  <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li><em>Individual</em> silica crystals</li>
                    <li>More energy efficient</li>
                    <li>More expensive</li>
                    <li><span className="font-bold">Black</span> in color</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-100 rounded">
                  <h3 className="text-2xl font-semibold underline">Polycrystalline</h3>
                  <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li><em>Melded</em> silica crystals</li>
                    <li>Less energy efficient</li>
                    <li>Cheaper price</li>
                    <li><span className="text-blue-600 font-semibold">Blue</span> in color</li>
                  </ul>
                </div>
              </div>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-5.png"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />
          </div>
      </div>
    </div>
  );
}

