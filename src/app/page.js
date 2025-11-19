import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="text-white font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/solarpanels.jpg"
          alt="Solar panels"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="z-20 px-6">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
          >
            University of Michigan Solar Initiative
          </h1>
          <p
            className="text-xl md:text-2xl mt-4 font-medium text-white"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
          >
      
          </p>
        </div>
      </section>
      

      
      
      
      
      
      
      {/* Mission Section */}
      <section className="-mt-8 bg-white text-[#00274C] pt-32 px-6 md:px-16 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          We are committed to transforming the University of Michigan with clean solar energy.
          With over 70 solar panel systems across campus, we aim to make solar energy
          education accessible and engaging through learning modules.
        </p>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-32 pt-16 md:px-16 bg-white text-[#00274C]">
        <h2 className="text-2xl font-semibold mb-6">By the Numbers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">70+</h3>
              <p>Solar installations on campus</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">43.6%</h3>
              <p>Students trust solar reliability</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">117</h3>
              <p>Survey responses on energy habits</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Graph Section */}
      <section className="bg-[#00274C] py-12 px-6 md:px-16">
        <h2 className={styles.graphHeader}>Greenhouse Gas Reductions</h2>
        <p>The Ann Arbor campus achieved its 25% emissions reduction goal in 2022—three years ahead of schedule. Since then, we have made further strides towards our 2040 goal of a carbon-neutral campus, with the help of solar energy infrastructure.</p>
        <div className={styles.graphs}>
          <figure>
            <a href="https://ocs.umich.edu/goals-priorities/2025-goals/greenhouse-gas-reduction/">
              <Image
                className={styles.graph1}
                src="/greenGas.png"
                alt="Greenhouse Gas Reduction Graph"
                width={600}
                height={600}
                />
            </a>
            <figcaption class="text-sm text-gray-300 mt-2">
              Source: Office of Campus Sustainability - 2025 Goals
            </figcaption>
          </figure>
          <a href="https://ocs.umich.edu/goals-priorities/2025-goals/greenhouse-gas-reduction/">
            <Image
              className={styles.graph2}
              src="/emissions.png"
              alt="Emissions Per Square Foot Graph"
              width={600}
              height={600}
            />
          </a>
        </div>
      </section>

      {/* Featured News Section */}
<section className="bg-[#00274C] py-12 px-6 md:px-16">
  <h2 className="text-2xl font-semibold text-[#FFCB05] mb-6">
    Featured News
  </h2>

  <div className="grid md:grid-cols-4 gap-4">
    {[
      {
        id: 1,
        title: "Campus Solar Project",
        text: "The University of Michigan has launched the Maize Rays solar expansion, adding 25 megawatts of renewable energy—enough to power 3,000 homes.",
        image: "/images/solarpanels.jpg",
        link: "https://record.umich.edu/articles/university-to-begin-installing-solar-power-sites-on-campus/",
      },
      {
        id: 2,
        title: "Annual Climate Summit",
        text: "U-M’s FY 2024 Sustainability and Climate Action report highlights an 8% drop in emissions and new sustainability leadership initiatives.",
        image: "/images/climatesummit.jpg",
        link: "https://seas.umich.edu/events/2024-michigan-climate-summit",
      },
      {
        id: 3,
        title: "Maize Rays",
        text: "As part of our commitment to renewable energy, U-M has launched a $71 million long-term plan to install solar panels across campus.",
        image: "/images/solarenergy.jpg",
        link: "https://news.umich.edu/first-two-maize-rays-solar-arrays-now-operating-on-north-campus/",
      },
      {
        id: 4,
        title: "Solar Power Sites",
        text: "Flint and Dearborn campuses will have a 25-megawatt capacity of renewable electricity after installations conclude.",
        image: "/images/umich.jpg",
        link: "https://record.umich.edu/articles/university-to-begin-installing-solar-power-sites-on-campus/",
      },
    ].map((card) => (
      <Link
        key={card.id}
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
          <div className="relative w-full h-40">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
          </div>

          <CardContent className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold mb-2">{card.title}</h3>

            <p className="text-sm text-[#00274C]/80 flex-grow">
              {card.text}
            </p>

            {/* Push link area to bottom */}
            <div className="mt-4 text-[#00274C] font-medium underline">
              Read More →
            </div>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
</section>

      {/* Action Section */}
      <section className="bg-white text-[#00274C]">
        <div className="grid md:grid-cols-2 h-[600px]">
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/sfce.jpg"
              alt="Students for clean energy solar table"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-center px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-lg mb-6 max-w-md">
              Learn how you can get involved in our future plans and help accelerate solar energy adoption at UMich.
            </p>
            <Button className="bg-[#00274C] text-white hover:bg-[#001f3f]">
              Get Involved <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="h-1 w-full bg-[#FFCB05]" />
    </div>
  );
}