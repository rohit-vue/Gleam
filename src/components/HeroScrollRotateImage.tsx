"use client";

import Image from "next/image";

export function HeroScrollRotateImage() {
  return (
    <div className="relative w-full leading-none">
      <Image
        src="/assets/girl.svg"
        alt="Woman holding a card"
        width={900}
        height={900}
        className="block h-auto w-full object-contain object-bottom lg:h-[632px] lg:w-full lg:object-right-bottom"
        priority
      />
    </div>
  );
}
