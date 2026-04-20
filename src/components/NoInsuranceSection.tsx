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
    <div className="w-full font-helvetica-neue-regular">
      <LocationMarqueeBar locations={locations} />

      <section
        className="relative w-full overflow-hidden"
        aria-labelledby="no-insurance-heading"
      >
        <div className="relative min-h-[200px] w-full sm:min-h-[240px] md:min-h-[320px] lg:min-h-[400px] xl:min-h-[420px]">
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
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:py-16 lg:py-20">
            <HeroSlideInOnView
              as="h2"
              wrapperClassName="w-full max-w-4xl"
              className="text-center text-[clamp(1.65rem,6.5vw,4.625rem)] font-semibold uppercase leading-[1.08] tracking-tight text-white sm:leading-[1.1] md:leading-[1.1]"
              innerProps={{ id: "no-insurance-heading" }}
            >
              <span className="block">No ɪnsurance.</span>
              <span className="block">No problem.</span>
            </HeroSlideInOnView>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-x-hidden bg-[#F9F9F7]"
        aria-labelledby="unlimited-approach-heading"
      >
        <div className="relative mx-auto flex min-h-[188px] max-w-6xl flex-col justify-end sm:min-h-[208px] md:min-h-[252px] lg:min-h-[280px] lg:flex-row lg:items-center lg:justify-center">
          <p
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full max-w-[100vw] -translate-x-1/2 -translate-y-1/2 select-none px-2 text-center text-[clamp(2.15rem,13vw,4.85rem)] font-bold uppercase leading-none tracking-[0.09em] text-[#C8C8C8] sm:text-[clamp(2.65rem,13.5vw,5.35rem)] sm:tracking-[0.12em] md:text-[clamp(3.25rem,16vw,8.75rem)] md:tracking-[0.24em] lg:text-[140px] lg:tracking-[0.55em] xl:text-[170px] xl:tracking-[1rem]"
            aria-hidden
          >
            UNLIMITED
          </p>
          <div className="relative z-10 flex w-full justify-start px-4 pb-9 pt-2 sm:px-6 sm:pb-10 sm:pt-3 md:px-10 md:pb-11 md:pt-4 lg:px-14 lg:pb-12 lg:pt-10 xl:px-16">
            <div className="inline-block max-w-full text-left">
              <h2
                id="unlimited-approach-heading"
                className="mt-0 text-[1.0625rem] font-bold uppercase leading-[1.22] tracking-[0.08rem] text-black [word-spacing:0.1em] sm:text-[1.1875rem] sm:leading-[1.2] sm:tracking-[0.1rem] sm:[word-spacing:0.12em] md:text-[1.4375rem] md:leading-snug md:tracking-[0.14rem] md:[word-spacing:0.16em] lg:mt-24 lg:text-[2.1rem] lg:leading-tight lg:tracking-[0.2rem] lg:[word-spacing:0.22em] xl:mt-28 xl:text-[46px] xl:leading-tight xl:tracking-[0.25rem] xl:[word-spacing:0.25em] 2xl:mt-36"
              >
                <span className="block">This is how we keep</span>
                <span className="block">you away from the drill</span>
              </h2>
              <div
                className="mt-1 h-1.5 w-full bg-[#FFF86B] sm:h-2"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
