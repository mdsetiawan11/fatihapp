import { Reveal } from "@/components/custom/reveal";
import { Timeline } from "@/shared/ui/timeline";
import Image from "next/image";
import React from "react";

export function FeaturesTimeline() {
  const data = [
    {
      title: "v1.0.0",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-black dark:text-neutral-300 md:text-lg">
              ✅ Waktu dan Notifikasi Sholat
            </div>
            <div className="flex items-center gap-2 text-xs text-black dark:text-neutral-300 md:text-lg">
              ✅ Al-Quran dan Qori
            </div>
            <div className="flex items-center gap-2 text-xs text-black dark:text-neutral-300 md:text-lg">
              ✅ Kiblat
            </div>
            <div className="flex items-center gap-2 text-xs text-black dark:text-neutral-300 md:text-lg">
              ✅ Statistik Sholat
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <Image
                src="/images/mobile/1.png"
                alt="hero template"
                width={300}
                height={800}
                className="h-30 w-full rounded-md"
              />
            </Reveal>
            <Reveal
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <Image
                src="/images/mobile/2.png"
                alt="hero template"
                width={300}
                height={800}
                className="h-30 w-full rounded-md"
              />
            </Reveal>
            <Reveal
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <Image
                src="/images/mobile/3.png"
                alt="hero template"
                width={300}
                height={800}
                className="h-30 w-full rounded-md"
              />
            </Reveal>
            <Reveal
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              {" "}
              <Image
                src="/images/mobile/4.png"
                alt="hero template"
                width={300}
                height={800}
                className="h-30 w-full rounded-md"
              />
            </Reveal>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
