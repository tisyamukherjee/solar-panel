"use client";

import Image from 'next/image'; 

export default function Science_4() {
  return (
    <div className="font-montserrat">
      <h1 className="text-5xl mt-10"> Science of Solar Energy</h1>
      <h2 className="text-3xl mt-10 pb-10 font-semibold">2.4 - Types of Solar Power Systems</h2>

      {/* content */}
      <div className="flex flex-row gap-8">
          {/* text */}
          <div className="w-150">
              <p className="mb-10">
                  <strong>Solar energy is everywhere</strong>: Sunlight is the most democratically distributed energy resource on Earth, reaching every continent, desert, and coastline with enough annual intensity to power civilization <strong>8,000×</strong> over. This ubiquity allows for diverse harvesting methods tailored to geography and need—from rooftop panels in Tokyo to vast solar farms in the Sahara. Unlike fossil fuels, which are bound to extraction sites, <strong>solar adapts to human settlements</strong> rather than the reverse.
              </p>
              <p className="mb-10">
                  <strong>Concentrated Solar Power (CSP)</strong>: While CSP accounts for just <strong>6.8 GW</strong> globally, its ability to store heat in <strong>molten salt</strong> makes it uniquely valuable for all-night power generation. Projects like Morocco’s <strong>Noor Complex</strong> use mirrored heliostats to focus sunlight onto towers, heating fluid to <strong>565°C</strong>—hot enough to supply dispatchable electricity even after sunset. Though land‑intensive, CSP thrives in sun‑drenched regions where its <strong>thermal storage</strong> offsets renewables’ intermittency. (Source: SolarPACES)
              </p>
          </div>

          {/* graphic */}
          <div className="flex flex-col">
            <Image
              src="/science/2-4.jpeg"
              width={1240}
              height={840}
              className="w-[450px] h-auto" // controls size, keeps proportions
            />
          </div>
      </div>
    </div>
  );
}

