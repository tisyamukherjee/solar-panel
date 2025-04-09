import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

        {/* Content */}
        <div className="z-20 px-6">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
          >
            University of Michigan Sustainability Initiative
          </h1>
          <p
            className="text-xl md:text-2xl mt-4 font-medium text-white"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
          >
            Insert slogan
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
