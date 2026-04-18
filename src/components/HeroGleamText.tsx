"use client";

import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

const GLEAM_TEXT_CLASS =
  "pointer-events-none select-none font-britanica-black font-bold leading-[0.82] tracking-[0.06em] text-[#E8E8E8] text-[clamp(4.5rem,19vw,7.5rem)] sm:tracking-[0.08em] sm:text-[clamp(5.5rem,16vw,9rem)] md:text-[clamp(7rem,14vw,11rem)] md:tracking-[0.09em] lg:text-[200px] lg:tracking-[0.1em] xl:text-[240px]";


const GLEAM_BACKDROP_TEXT_CLASS =
  "pointer-events-none select-none font-britanica-black font-bold leading-[0.82] tracking-[0.06em] text-[#E8E8E8] text-[clamp(3.25rem,17vw,6.75rem)] sm:tracking-[0.08em] sm:text-[clamp(4rem,14vw,8.5rem)] md:text-[clamp(5rem,12vw,10rem)] md:tracking-[0.09em]";

type HeroGleamTextProps = {
  className?: string;

  variant?: "column" | "imageBackdrop";
};

export function HeroGleamText({
  className = "",
  variant = "column",
}: HeroGleamTextProps) {
  if (variant === "imageBackdrop") {
    return (
      <div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 z-0 overflow-visible lg:hidden ${className}`.trim()}
      >
        <HeroSlideInOnView
          as="p"
          wrapperClassName="w-full"
          className={`max-w-full text-left ${GLEAM_BACKDROP_TEXT_CLASS}`.trim()}
          innerProps={{ "aria-hidden": true }}
        >
          Gleam
        </HeroSlideInOnView>
      </div>
    );
  }

  return (
    <HeroSlideInOnView
      as="p"
      wrapperClassName={`w-full shrink-0 pt-3 sm:pt-5 md:pt-7 lg:pt-10 ${className}`.trim()}
      className={GLEAM_TEXT_CLASS}
      innerProps={{ "aria-hidden": true }}
    >
      Gleam
    </HeroSlideInOnView>
  );
}
