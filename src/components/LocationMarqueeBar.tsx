"use client";

import { useEffect, useState } from "react";

type LocationMarqueeBarProps = {
  locations: readonly string[];
};

/** Enough repeats that the track is wider than the viewport (no empty yellow strip). */
const MARQUEE_SEGMENTS = 10;

function LocationRow({
  locations,
  dupIndex,
}: {
  locations: readonly string[];
  dupIndex: number;
}) {
  return (
    <span className="inline-flex shrink-0 items-center">
      {locations.map((name, i) => (
        <span
          key={`${dupIndex}-${name}-${i}`}
          className="inline-flex shrink-0 items-center"
        >
          {i > 0 || dupIndex > 0 ? (
            <span
              className="select-none px-5 text-[0.9em] text-black/85 sm:px-4 md:px-8 lg:px-9"
              aria-hidden
            >
              •
            </span>
          ) : null}
          <span className="text-[20px]  font-bold lowercase leading-none text-black tracking-[0.04em]">{name}</span>
        </span>
      ))}
    </span>
  );
}

export function LocationMarqueeBar({ locations }: LocationMarqueeBarProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const listLabel = locations.join(", ");

  if (reducedMotion) {
    return (
      <div className="flex min-h-[2.75rem] items-center justify-center bg-[#FFF86B] py-2 text-black font-helvetica-neue-regular md:min-h-12 md:py-2.5 lg:py-3">
        <p className="flex flex-wrap items-center justify-center gap-y-1 px-3 text-center text-[25px] font-black lowercase leading-none text-black sm:px-5 md:px-6">
          {locations.map((name, i) => (
            <span key={name} className="inline-flex shrink-0 items-center">
              {i > 0 ? (
                <span
                  className="select-none px-3 text-[0.7em] text-black/85 sm:px-4 md:px-5 lg:px-6"
                  aria-hidden
                >
                  •
                </span>
              ) : null}
              <span>{name}</span>
            </span>
          ))}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[2.75rem] items-center bg-[#FFF86B] py-2 text-black font-helvetica-neue-regular md:min-h-12 md:py-2.5 lg:py-3">
      <span className="sr-only">{listLabel}</span>
      <div className="relative w-full overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee items-center whitespace-nowrap text-[25px] font-black lowercase leading-none text-black hover:[animation-play-state:paused]">
          {Array.from({ length: MARQUEE_SEGMENTS }, (_, dupIndex) => (
            <LocationRow
              key={dupIndex}
              locations={locations}
              dupIndex={dupIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
