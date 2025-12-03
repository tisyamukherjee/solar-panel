import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="text-white font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/solar-panels.jpg"
          alt="Solar panels on Michigan campus"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#6A5FA2]/25 z-[1]" />

        {/* Content */}
        <div className="z-20 px-6">
          <a className={styles.title}>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{
                fontSize: "65px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" 
              }}
            >
              University of Michigan Solar Initiative
            </h1>
          </a>
          <p
            className="text-xl md:text-2xl mt-4 font-medium text-white mt-16"
            style={{ 
              fontSize: "25px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" 
            }}
          >
            <span className="bg-[#FFCB05] px-6 py-2 rounded-md text-white-900 inline-block drop-shadow-md">
              Transforming UM with Solar Power
            </span>
          </p>
        </div>
      </section>
      

      
      
      
      
      
      
  <section className="-mt-8 bg-white text-[#00274C] pt-32 px-6 md:px-16 shadow-xl">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
    
    {/* LEFT: text */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="text-xl leading-relaxed max-w-3xl">
        We are committed to transforming the University of Michigan with clean solar energy.
        With over 70 solar panel systems across campus, we aim to make solar energy
        education accessible and engaging through learning modules.
      </p>
    </div>

    {/* RIGHT: image */}
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <Image
        className={styles.missionGraph}
        src="/locations/dude.jpg"
        alt="Aerial View of Panels"
        width={375}
        height={100}
      />
    </div>

  </div>
</section>
  

      {/* Stats Section */}
      <section className="px-6 pb-32 pt-16 md:px-16 bg-white text-[#00274C]">
        <h2 className="text-2xl font-semibold mb-6">By the Numbers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className={styles.card}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">70+</h3>
              <p>Solar installations on campus</p>
            </CardContent>
          </Card>
          <Card className={styles.card}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">43.6%</h3>
              <p>Students trust solar reliability</p>
            </CardContent>
          </Card>
          <Card className={styles.card}>
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
            <figcaption className="text-sm text-gray-300 mt-2">
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

      {/* Updates Section */}
      <section className="bg-[#FFCB05] py-12 px-6 md:px-16">
        <h2 className="text-2xl font-semibold text-[#00274C] mb-6">Latest Updates</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <Image
                src={`/update-${item}.jpg`}
                alt="Update image"
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold">Update Title</h3>
                <p className="text-sm text-[#00274C]/80">Short update summary goes here.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#00274C] py-12 px-6 md:px-16">

        <h1 className={styles.partnerTitle}>PARTNERS</h1>
        <div className={styles.partnerRow}>
          <Image
          className={styles.PRB}
          src="/studForClean.png"
          alt="Students for Clean Energy Logo"
          width={115}
          height={115}
          />
          <Image
          className={styles.PRB}
          src="/EcodataLogo.png"
          alt="EcoData Logo"
          width={120}
          height={120}
          />
          <Image
          className={styles.PRB}
          src="/PlanetBlue.png"
          alt="Planet Blue Logo"
          width={150}
          height={150}
          />
          <Image
          className={styles.PRB}
          src="/RadialPower.png"
          alt="Radial Power Logo"
          width={120}
          height={140}
          />
          <Image
          className={styles.PRB}
          src="/SSC.png"
          alt="Student for Sustainability Coalition Logo"
          width={120}
          height={120}
          />
        </div>
      </section>

      {/* Action Section with Image */}
      <section className="bg-white text-[#00274C]">
        <div className="grid md:grid-cols-2 h-[600px]">
          {/* Left Side Full Image */}
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/sfce.jpg"
              alt="Students for clean energy solar table"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side CTA Centered */}
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

      {/* Slim Maize Divider */}
      <div className="h-1 w-full bg-[#FFCB05]" />
    </div>
  );
}
