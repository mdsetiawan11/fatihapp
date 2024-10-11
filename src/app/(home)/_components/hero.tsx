"use client";
import {
  SiDart,
  SiDotnet,
  SiFlutter,
  SiGoogleplay,
  SiJquery,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import Link from "next/link";

import { Meteors } from "@/components/meteors";

import { Title } from "./title";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { ImagesSlider } from "@/shared/ui/images-slider";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/shared/ui/background-beams-with-collision";
import { Icon } from "lucide-react";

const CURRENT_STACK = [
  { icon: SiDotnet },
  { icon: SiMicrosoftsqlserver },
  { icon: SiJquery },
  { icon: SiDart },
  { icon: SiFlutter },
] as const;

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

          <div className="flex flex-row place-items-center">
            <Link
              href="https://saweria.co/mdsetiawan11"
              className="group inline-block"
            >
              <Title text="Dukung kami" tag="p" className="text-white" />
            </Link>
            <div className="relative ml-10">
              <div className="relative w-full max-w-xs">
                <div className="relative flex h-max flex-col items-start justify-end overflow-hidden rounded-2xl border border-blue-950 bg-white px-4 py-2 shadow-xl">
                  <div className="flex items-end justify-center gap-3">
                    <p className="relative text-xl font-bold text-black">
                      Segera hadir di
                    </p>

                    <Link href="">
                      <SiGoogleplay className="text-3xl text-black transition-colors hover:text-blue-800" />{" "}
                    </Link>
                  </div>

                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const images = [
  "/images/mobile/1.png",
  "/images/mobile/2.png",
  "/images/mobile/3.png",
  "/images/mobile/4.png",
  "/images/mobile/5.png",
  "/images/mobile/6.png",
];
