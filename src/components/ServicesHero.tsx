import Image from "next/image";

const HERO_YELLOW = "#FFF86B";

export function ServicesHero() {
  const headline = "ALL OF IT";
  const headlineClass =
    "block whitespace-nowrap pb-4 font-alliance text-[58px] font-bold leading-[0.92] tracking-[0.08em] [word-spacing:0.1em] sm:pb-5 sm:text-[78px] sm:tracking-[0.12em] sm:[word-spacing:0.14em] md:pb-6 md:pl-8 md:text-[118px] md:tracking-[0.24em] md:[word-spacing:0.24em] lg:pb-5 lg:pl-10 lg:text-[130px] lg:tracking-[0.3em] lg:[word-spacing:0.3em]";

  return (
    <section className="flex flex-col">
      <div className="relative grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
        <div
          className="col-span-1 flex min-h-[28vh] flex-col justify-start px-6 pb-10 pt-10 md:min-h-0 md:px-10 md:pb-12 md:pt-12"
          style={{ backgroundColor: HERO_YELLOW }}
        >
          <p className="motion-safe:animate-slide-in-ltr text-[50px] font-semibold uppercase tracking-[0.22em] text-white">
            OUR SERVICES
          </p>
        </div>

        <div className="col-span-1 flex min-h-[18rem] items-center justify-center bg-white px-6  md:min-h-0 md:px-10 ">
          <Image
            src="/assets/jaw.png"
            alt="Dental model held in hand"
            width={640}
            height={800}
            className="h-auto max-h-[min(60vh,34rem)] w-full max-w-md object-contain"
            priority
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 grid w-full grid-cols-1 md:grid-cols-2">
          <div
            className="relative min-h-[5.25rem] overflow-hidden sm:min-h-[6.25rem] md:min-h-[clamp(4.75rem,12vw,8rem)]"
            style={{ backgroundColor: HERO_YELLOW }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[calc(50vw-1.6rem)] lg:left-[calc(50vw-2rem)]">
              <span
                className={`${headlineClass} text-white motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:450ms]`}
              >
                {headline}
              </span>
            </div>
          </div>
          <div className="relative hidden min-h-[clamp(4.75rem,12vw,8rem)] overflow-hidden md:block">
            <div className="absolute bottom-0 left-[-1.2rem] -translate-x-1/2 sm:left-[-1.6rem] lg:left-[-2rem]">
              <span
                className={`${headlineClass} motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:450ms]`}
                style={{ color: HERO_YELLOW }}
              >
                {headline}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-[5/4] w-[min(118vw,52rem)] max-w-[min(118vw,52rem)] -translate-x-1/2 -translate-y-1/2 sm:aspect-[6/5] sm:w-[min(100vw,48rem)] md:w-[min(92vw,44rem)]"
          style={{
            background: `radial-gradient(ellipse 58% 52% at 50% 50%, ${HERO_YELLOW} 0%, rgba(255, 248, 107, 0.42) 36%, rgba(255, 248, 107, 0.15) 54%, rgba(255, 248, 107, 0.05) 68%, transparent 76%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Main Container — close-packed flex on mobile/tablet, block w/ absolute children on desktop */}
          <div className="relative mx-auto flex min-h-[8rem] max-w-6xl items-center justify-center gap-1 py-6 sm:min-h-[10rem] sm:gap-2 sm:py-8 md:min-h-[14rem] md:gap-3 md:py-10 lg:block lg:min-h-[20rem] lg:gap-0 lg:py-0">

            {/* Left text — sits just LEFT of phone, slightly overlapping under it */}
            <div className="font-britanica-black flex-shrink-0 -mr-6 text-[10px] leading-[1.3] tracking-[0.04em] sm:-mr-8 sm:text-[14px] sm:tracking-[0.06em] md:-mr-12 md:text-[20px] md:tracking-[0.08em] lg:absolute lg:bottom-[123px] lg:left-[198px] lg:z-[100] lg:mr-0 lg:text-[clamp(1.3rem,5.5vw,2.5rem)] lg:leading-normal lg:tracking-[0.3em]">
              We price<br /> practice
            </div>

            {/* Phone */}
            <div className="z-10 flex-shrink-0 lg:absolute lg:left-[333px]">
              <Image
                src="/assets/phone.png"
                alt="Hand holding smartphone showing a map"
                width={520}
                height={640}
                className="h-auto w-[5.5rem] sm:w-[8rem] md:w-[11rem] lg:w-[19rem] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right text — sits just RIGHT of phone, slightly overlapping under it */}
            <div className="font-britanica-black z-[100] flex-shrink-0 -ml-[0.5rem] text-[10px] leading-[1.3] tracking-[0.04em] sm:-ml-8 sm:text-[14px] sm:tracking-[0.06em] md:-ml-[2rem] md:text-[20px] md:tracking-[0.08em] lg:absolute lg:right-[38px] lg:bottom-[127px] lg:ml-0 lg:text-[clamp(1.3rem,5.5vw,2.5rem)] lg:leading-normal lg:tracking-[0.3em]">
              match any <br /> within 15 miles
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
