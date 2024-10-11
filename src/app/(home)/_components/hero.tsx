"use client";
import { SiGoogleplay } from "react-icons/si";
import Link from "next/link";

import { Meteors } from "@/components/meteors";

import { TextGenerateEffect } from "@/components/ui/text-generate";
import { TeamTooltip } from "./team-tooltip";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="animate-move-up flex min-h-[60vh] flex-col items-center justify-between gap-14 lg:flex-row lg:gap-0">
        <div className="space-y-10 lg:text-left">
          <h2 className="text-xl font-bold text-white lg:text-4xl">
            Lebih dari sekedar Aplikasi Waktu Sholat
          </h2>
          <TextGenerateEffect
            words={`Bersama Fatih mari kita tingkatkan level ketakwaan kepada Allah`}
          />
          <div className="relative">
            <div className="relative w-max max-w-xs">
              <div className="relative flex flex-col items-start justify-end overflow-hidden rounded-2xl border border-blue-950 bg-white px-4 py-4 shadow-xl">
                <div className="flex items-end justify-center gap-3">
                  <div className="relative text-xl font-bold text-black">
                    Segera hadir di
                  </div>

                  <Link href="">
                    <SiGoogleplay className="text-3xl text-black transition-colors hover:text-blue-800" />{" "}
                  </Link>
                </div>

                <Meteors number={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Link
              href="https://saweria.co/mdsetiawan11"
              className="text-3xl font-bold text-white hover:text-yellow-500"
            >
              Dukung kami
            </Link>
            <TeamTooltip />
          </div>
        </div>
      </div>
    </section>
  );
};
