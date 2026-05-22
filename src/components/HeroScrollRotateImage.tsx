"use client";

import Image from "next/image";

export function HeroScrollRotateImage() {
  return (
    <div className="relative w-full leading-none">
      <Image
        src="/assets/girl1.png"
        alt="Woman holding a card"
        width={900}
        height={900}
        className="block w-full h-[190px] object-contain object-bottom max-lg:object-fill max-lg:object-right-bottom md:h-[399px] lg:h-[632px] lg:w-full lg:object-fill xl:h-[520px] xl:object-contain 2xl:h-[498px] 2xl:object-contain lg:object-right-bottom"
        priority
      />
      {/* Left-edge fade: fixed band width so the gradient looks consistent across breakpoints */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(-21.5rem,65%,36.5rem)] bg-[linear-gradient(90deg,#FFFFFF_8%,rgba(255,255,255,0)_18%)] md:w-[clamp(-22.5rem,55%,42rem)] lg:w-[clamp(-29rem,53%,48rem)] xl:w-[clamp(-32rem,58%,51rem)] 2xl:w-[clamp(-62rem,100%,93rem)]"
      />
    </div>
  );
}
