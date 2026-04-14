"use client";

import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

type HeroGleamTextProps = {
  className?: string;
};

export function HeroGleamText({ className = "" }: HeroGleamTextProps) {
  return (
    <HeroSlideInOnView
      as="p"
      wrapperClassName={`mt-auto w-full shrink-0 pt-6 sm:pt-8 lg:pt-10 ${className}`.trim()}
      className="pointer-events-none select-none font-bold leading-[0.82] tracking-[0.1em] text-[#E8E8E8] text-[270px] "
      innerProps={{ "aria-hidden": true }}
    >
      Gleam
    </HeroSlideInOnView>
  );
}
