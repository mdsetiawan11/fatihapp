import { CarouselFeatures } from "./_components/carousel-features";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

import { BackgroundBeamsWithCollision } from "@/shared/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-blue-900">
        <BackgroundBeamsWithCollision>
          <div className="mx-auto min-h-screen w-[1280px] p-5">
            <Navbar />
            <Hero />
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="mx-auto mt-20 max-w-7xl">
        <CarouselFeatures />
      </div>
    </main>
  );
}
