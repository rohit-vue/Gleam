import Image from "next/image";

import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";
import { LocationMarqueeBar } from "@/components/LocationMarqueeBar";

const locations = [
  "weho",
  "encino",
  "calabasas",
  "northridge",
  "la puente",
] as const;

export function NoInsuranceSection() {
  return (
    <div className="w-full">
      <LocationMarqueeBar locations={locations} />

      <section
        className="relative w-full overflow-hidden"
        aria-labelledby="no-insurance-heading"
      >
        <div className="relative min-h-[280px] w-full md:min-h-[360px] lg:min-h-[420px]">
          <Image
            src="/assets/noinsurance.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-black/40 md:bg-black/35"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-14 md:py-20">
            <HeroSlideInOnView
              as="h2"
              wrapperClassName="w-full max-w-4xl"
              id="no-insurance-heading"
              className="text-center text-[74px] font-semibold uppercase leading-[1.1] tracking-tight text-white"
            >
              <span className="block">No insurance.</span>
              <span className="block">No problem.</span>
            </HeroSlideInOnView>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-x-hidden bg-[#F9F9F7]"
        aria-labelledby="unlimited-approach-heading"
      >
        <div className="relative mx-auto flex min-h-[220px] max-w-6xl items-center justify-center md:min-h-[260px] lg:min-h-[280px] font-britanica-black">
          <p
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full max-w-[100vw] -translate-x-1/2 -translate-y-1/2 select-none text-center font-bold uppercase leading-none tracking-[1rem] text-[#C8C8C8] text-[170px]"
            aria-hidden
          >
            UNLIMITED
          </p>
          <div className="relative z-10 flex w-full justify-start px-16">
            <div className="inline-block max-w-full text-left">
              <h2
                id="unlimited-approach-heading"
                className="mt-36 text-[46px] font-bold uppercase leading-[1.15] [word-spacing:0.25em]  tracking-[0.25rem] text-black md:leading-snug  lg:leading-tight"
              >
                <span className="block">This is how we keep</span>
                <span className="block">you away from the drill</span>
              </h2>
              <div
                className="mt-1 h-2 w-full bg-[#FFF86B]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
