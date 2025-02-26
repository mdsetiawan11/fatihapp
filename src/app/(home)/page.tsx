import { Separator } from "@/components/ui/separator";
import { CarouselFeatures } from "./_components/carousel-features";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

import { BackgroundBeamsWithCollision } from "@/shared/ui/background-beams-with-collision";
import { TeamTooltip } from "./_components/team-tooltip";
import { FeaturesTimeline } from "./_components/features-timeline";
import { Reveal } from "@/components/custom/reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <BackgroundBeamsWithCollision>
          <div className="mx-auto w-[1280px]">
            <Navbar />
            <Hero />
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="h-auto overflow-hidden">
          <FeaturesTimeline />
        </div>
        <Separator className="mt-10 bg-blue-900" />

        <Reveal
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <div className="mt-10 flex max-w-7xl flex-col items-center gap-5">
            <div className="text-lg font-bold md:text-4xl">Tim Kami</div>
            <TeamTooltip />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
