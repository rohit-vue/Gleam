import Image from "next/image";

const HERO_YELLOW = "#FFF86B";

export function ServicesHero() {
  const headline = "ALL OF IT";
  const headlineClass =
    "block whitespace-nowrap pb-5 pl-4 font-alliance text-[130px] font-bold leading-[0.92] tracking-[0.3em] md:pl-8 lg:pl-10 [word-spacing:0.3em]";

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

        <div className="absolute inset-x-0 bottom-0 z-10 grid w-full grid-cols-2">
          <div
            className="relative min-h-[clamp(3.5rem,12vw,8rem)] overflow-hidden"
            style={{ backgroundColor: HERO_YELLOW }}
          >
            <div className="absolute bottom-0 left-[calc(50vw-2rem)] -translate-x-1/2">
              <span
                className={`${headlineClass} text-white motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:450ms]`}
              >
                {headline}
              </span>
            </div>
          </div>
          <div className="relative min-h-[clamp(3.5rem,12vw,8rem)] overflow-hidden">
            <div className="absolute bottom-0 left-[-2rem] -translate-x-1/2">
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="relative mx-auto flex min-h-[min(42vw,13.5rem)] max-w-6xl items-center justify-center sm:min-h-[min(36vw,15rem)] md:min-h-[min(28vw,18rem)] lg:min-h-[20rem]">
            <div className="relative z-0 flex w-full justify-center px-4 sm:px-10 md:px-14">
              <Image
                src="/assets/phone.png"
                alt="Hand holding smartphone showing a map"
                width={520}
                height={640}
                className="h-auto w-[min(78%,11.5rem)] max-w-none object-contain drop-shadow-sm sm:w-[min(66%,15rem)] md:w-[min(50%,17rem)] lg:w-[min(42%,19rem)]"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 px-3 text-center sm:gap-1.5 sm:px-4 md:px-6 lg:gap-0 lg:px-1">
              <p className="max-w-[min(100%,20rem)] text-[clamp(0.9375rem,3.8vw,1.5rem)] font-alliance font-semibold uppercase leading-[1.15] tracking-[0.06em] text-neutral-900 [text-shadow:0_0_1px_rgba(255,255,255,0.95),0_0_12px_rgba(255,255,255,0.55)] sm:max-w-[90vw] sm:text-[clamp(1.0625rem,3.2vw,1.75rem)] sm:tracking-[0.1em] md:max-w-[min(100%,34rem)] md:text-[clamp(1.25rem,2.4vw,2.25rem)] md:tracking-[0.16em] lg:max-w-[95vw] lg:text-[40px] lg:leading-[1.02] lg:tracking-[0.3em]">
                We price match any
              </p>
              <p className="mt-1 max-w-[min(100%,20rem)] font-alliance text-[clamp(0.9375rem,3.8vw,1.5rem)] font-semibold uppercase leading-[1.15] tracking-[0.06em] text-neutral-900 [text-shadow:0_0_1px_rgba(255,255,255,0.95),0_0_12px_rgba(255,255,255,0.55)] sm:mt-1.5 sm:max-w-[90vw] sm:text-[clamp(1.0625rem,3.2vw,1.75rem)] sm:tracking-[0.1em] md:max-w-[min(100%,34rem)] md:text-[clamp(1.25rem,2.4vw,2.25rem)] md:tracking-[0.16em] lg:mt-1 lg:max-w-[95vw] lg:text-[40px] lg:leading-[1.02] lg:tracking-[0.3em]">
                practice within 15 miles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
