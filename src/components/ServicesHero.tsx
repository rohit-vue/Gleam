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

      <div
        className="relative w-full overflow-hidden max-md:overflow-x-visible bg-white [--block-shift:1rem] [--line-size:0.8rem] [--line2-mt:0.1rem] [--phone-w:10rem] max-md:[--text-gap:0.15rem] [--text-gap:0.25rem] min-h-[clamp(-6rem,34vw,57rem)] sm:[--block-shift:1.75rem] sm:[--line-size:1rem] sm:[--phone-w:11rem] sm:[--text-gap:0.35rem] md:[--block-shift:3.25rem] md:[--line-size:1.35rem] md:[--line2-mt:0.15rem] md:[--phone-w:14rem] md:[--text-gap:0.45rem] md:min-h-[clamp(1rem,22vw,57rem)] lg:min-h-[clamp(-17rem,28vw,57rem)] xl:min-h-[clamp(1rem,21vw,57rem)] 2xl:min-h-[clamp(1rem,21vw,57rem)] lg:[--block-shift:clamp(-13rem,3.5vw,34.5rem)] lg:[--line-size:clamp(1.75rem,3.6vw,3.25rem)] lg:[--phone-w:25.5rem] lg:[--text-gap:0.35rem]"
        aria-labelledby="price-match-heading"
      >
        <h2 id="price-match-heading" className="sr-only">
          We price match any practice within 15 miles
        </h2>

        <div className="relative mx-auto min-h-[inherit] w-full max-w-6xl px-6 lg:px-10 xl:max-w-7xl xl:px-12">
        <div className="absolute inset-0 -translate-x-[var(--block-shift)]">
          {/* Layer 1: background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(var(--phone-w)*2.4)] w-[calc(var(--phone-w)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,248,107,0.6)_0%,rgba(255,248,107,0.2)_42%,transparent_70%)]"
          />

        {/* Layer 2: left text (lower z) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 2xl:right-[calc(47%+var(--phone-w)/2+var(--text-gap))] right-[calc(43%+var(--phone-w)/2+var(--text-gap))] top-0 z-[1] flex flex-col justify-center items-end gap-[var(--line2-mt)] px-2 sm:px-4 md:px-6 lg:px-8"
        >
          <div className="2xl:translate-x-[145px] lg:translate-x-[123px]  md:translate-x-[91px] translate-x-[64px] text-right">
            <p className="whitespace-nowrap font-britanica-black text-[18px] lg:text-[55px] md:text-[28px]  uppercase leading-[0.92] tracking-[0.05em]  sm:tracking-[0.07em] md:tracking-[0.09em] lg:tracking-[0.11em]">
              WE PRICE
            </p>
          </div>
          <div className="translate-x-[2.25em] text-right sm:translate-x-[2.75em] md:translate-x-[2.75em] lg:translate-x-[4.25em] 2xl:translate-x-[5.75em]">
            <p className="whitespace-nowrap font-britanica-black text-[18px] lg:text-[55px] md:text-[28px]  uppercase leading-[0.92] tracking-[0.05em]  sm:tracking-[0.07em] md:tracking-[0.09em] lg:tracking-[0.11em]">
              PRACTICE
            </p>
          </div>
        </div>

        {/* Layer 3: right text (higher z than left, still behind phone) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[calc(40%+var(--phone-w)/2+var(--text-gap))] max-md:pr-3 right-0 top-0 z-[20] flex flex-col justify-center items-start px-2 text-left sm:left-[calc(42%+var(--phone-w)/2+var(--text-gap))] sm:px-4 md:px-6 2xl:left-[calc(36%+var(--phone-w)/2+var(--text-gap))] lg:left-[calc(43%+var(--phone-w)/2+var(--text-gap))] lg:px-8"
        >
          <p className="whitespace-nowrap font-britanica-black text-[18px] lg:text-[55px] md:text-[28px]  uppercase leading-[0.92] tracking-[0.05em] text-black sm:tracking-[0.07em] md:tracking-[0.09em] lg:tracking-[0.11em]">
            MATCH ANY
          </p>
          <p className="mt-[var(--line2-mt)] whitespace-nowrap font-britanica-black text-[15px] max-md:tracking-[0.03em] sm:text-[18px] lg:text-[55px] md:text-[28px] uppercase leading-[0.92] tracking-[0.05em] text-black sm:tracking-[0.07em] md:tracking-[0.09em] lg:tracking-[0.11em]">
            WITHIN 15 MILES
          </p>
        </div>

        {/* Layer 4: phone image */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center">
          <div className="2xl:translate-x-[-65px]">
            <Image
              src="/assets/phone1.png"
              alt=""
              width={600}
              height={900}
              className="h-auto w-[var(--phone-w)] max-h-full object-contain object-bottom"
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 320px"
              priority
            />
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
