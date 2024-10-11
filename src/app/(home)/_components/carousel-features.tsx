"use client";
import { Card, Carousel } from "@/shared/ui/apple-cards-carousel";
import Image from "next/image";
import React from "react";

export function CarouselFeatures() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="h-full w-full py-4">
      <h2 className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        Fitur
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14"
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto h-full w-full object-contain md:h-1/2 md:w-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "",
    src: "/images/mobile/1.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/images/mobile/2.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/images/mobile/3.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/images/mobile/4.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/images/mobile/5.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/images/mobile/6.png",
    content: "",
  },
];
