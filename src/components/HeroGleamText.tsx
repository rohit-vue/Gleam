"use client";

import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

type HeroGleamTextProps = {
  className?: string;
};

export function HeroGleamText({ className = "" }: HeroGleamTextProps) {
  return (
    <HeroSlideInOnView
      as="p"
      wrapperClassName={`mt-auto w-full shrink-0 pt-3 sm:pt-5 md:pt-7 lg:pt-10 ${className}`.trim()}
      className="pointer-events-none select-none font-bold leading-[0.82] tracking-[0.06em] text-[#E8E8E8] text-[clamp(4.5rem,19vw,7.5rem)] sm:tracking-[0.08em] sm:text-[clamp(5.5rem,16vw,9rem)] md:text-[clamp(7rem,14vw,11rem)] md:tracking-[0.09em] lg:text-[200px] lg:tracking-[0.1em] xl:text-[240px]"
      innerProps={{ "aria-hidden": true }}
    >
      Gleam
    </HeroSlideInOnView>
  );
}
