import { Separator } from "@/components/ui/separator";
import { CarouselFeatures } from "./_components/carousel-features";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

import { BackgroundBeamsWithCollision } from "@/shared/ui/background-beams-with-collision";
import { TeamTooltip } from "./_components/team-tooltip";
import { FeaturesTimeline } from "./_components/features-timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <BackgroundBeamsWithCollision>
          <div className="mx-auto w-[1280px] p-5">
            <Navbar />
            <Hero />
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <CarouselFeatures />
        <Separator className="bg-blue-900" />
        <div className="h-auto overflow-hidden">
          <FeaturesTimeline />
        </div>
        <Separator className="mt-10 bg-blue-900" />

        <div className="mt-10 flex max-w-7xl flex-col items-center gap-5">
          <div className="text-lg font-bold md:text-4xl">Tim Kami</div>
          <TeamTooltip />
        </div>
      </div>
    </main>
  );
}
