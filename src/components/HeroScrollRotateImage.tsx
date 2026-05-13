"use client";

import Image from "next/image";

export function HeroScrollRotateImage() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/assets/girl.svg"
        alt="Woman holding a card"
        width={900}
        height={900}
        className="block h-auto w-full object-contain object-center lg:h-[632px] lg:w-full lg:object-right"
        priority
      />
    </div>
  );
}
