import Image from "next/image";

const HERO_YELLOW = "#FFF86B";

export function ServicesHero() {
  const headline = "ALL OF IT";
  const headlineClass =
    "block whitespace-nowrap pb-4 font-alliance text-[58px] font-bold leading-[0.92] tracking-[0.08em] [word-spacing:0.1em] sm:pb-5 sm:text-[78px] sm:tracking-[0.12em] sm:[word-spacing:0.14em] lg:pb-5 lg:pl-10 lg:text-[130px] lg:tracking-[0.3em] lg:[word-spacing:0.3em]";

  return (
    <section className="flex flex-col">
      <div className="relative grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
        <div
          className="col-span-1 flex min-h-[28vh] flex-col justify-start px-6 pb-10 pt-10 md:min-h-0 md:px-10 md:pb-12 md:pt-12"
          style={{ backgroundColor: HERO_YELLOW }}
        >
          <p className="motion-safe:animate-slide-in-ltr text-[50px] font-semibold uppercase tracking-[0.22em] text-white lg:flex lg:flex-col lg:items-start lg:gap-3 lg:leading-[0.92] lg:text-[56px] lg:tracking-[0.22em]">
            <span className="lg:hidden">OUR SERVICES</span>
            <span className="hidden lg:block">OUR</span>
            <span className="hidden lg:block">SERVICES</span>
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
            className="relative min-h-[5.25rem] overflow-hidden sm:min-h-[6.25rem] md:min-h-[7rem] lg:min-h-[clamp(4.75rem,12vw,8rem)]"
            style={{ backgroundColor: HERO_YELLOW }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[50vw] lg:left-[calc(50vw-2rem)]">
              <span
                className={`${headlineClass} text-white motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:450ms]`}
              >
                {headline}
              </span>
            </div>
          </div>
          <div className="relative hidden min-h-[7rem] overflow-hidden md:block lg:min-h-[clamp(4.75rem,12vw,8rem)]">
            <div className="absolute bottom-0 left-0 -translate-x-1/2 lg:left-[-2rem]">
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

      <div className="relative aspect-[1728/527] w-full overflow-hidden bg-white">
        <Image
          src="/assets/Price Match.png"
          alt="We price match any practice within 15 miles"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
