"use client";
import { AnimatedTooltip } from "@/shared/ui/animated-tooltip";
import React from "react";

const people = [
  {
    id: 1,
    name: "Muhammad Dadang Setiawan",
    designation: "Software Developer",
    image:
      "https://avatars.githubusercontent.com/u/55868907?s=400&u=0f10352d400718118217407c4839824dc06ad25a&v=4",
  },
];

export function TeamTooltip() {
  return (
    <div className="mb-10 flex w-max flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
