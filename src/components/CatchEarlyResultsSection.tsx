import Image from "next/image";

const beforeAfterColumns = [
  { before: "/assets/beforea.png", after: "/assets/aftera.png" },
  { before: "/assets/beforeb.png", after: "/assets/afterb.png" },
  { before: "/assets/beforec.png", after: "/assets/afterc.png" },
] as const;

function BeforeAfterFigure({
  src,
  label,
  alt,
  stack,
}: {
  src: string;
  label: "Before" | "After";
  alt: string;
  stack: "top" | "bottom";
}) {
  const radius = stack === "top" ? "rounded-t-none rounded-b-none" : "rounded-b-none rounded-t-none";
  return (
    <figure
      className={`relative aspect-[4/3] max-md:aspect-[16/10] w-full overflow-hidden bg-black/5 ${radius}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 639px) 90vw, (max-width: 1023px) 40vw, 18rem"
      />
      <figcaption className="absolute bottom-2 left-2 bg-white px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide text-black">
        {label}
      </figcaption>
    </figure>
  );
}

export function CatchEarlyResultsSection() {
  return (
    <div className="w-full overflow-x-hidden font-helvetica-neue-regular">
      <div className="grid w-full max-w-full grid-cols-2   md:gap-0">
        <div className="relative min-h-[clamp(8.5rem,42vw,12rem)] w-full min-w-0 bg-[#FFF159] md:min-h-[320px] lg:min-h-[360px]">
          <Image
            src="/assets/teethhurt.png"
            alt="Person holding jaw in discomfort"
            fill
            className="object-contain object-bottom md:object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t via-black/10 to-transparent"

            aria-hidden
          />
          <p className="absolute font-britanica-black uppercase leading-[0.95] [word-spacing:0.15em] text-white max-md:inset-x-1 max-md:top-1/3 max-md:-translate-y-1/2 max-md:px-1 max-md:text-center max-md:text-[clamp(0.5rem,4.75vw,8.875rem)] max-md:tracking-[0.06em] md:top-[80px] 2xl:top-[80px] lg:top-[80px] xl:top-[80px] md:bottom-auto md:left-5 2xl:left-[10.25rem] lg:left-[2.25rem] xl:left-[3.25rem] md:right-auto md:translate-y-0 md:px-0 md:text-left md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.3rem] md:[word-spacing:0.28em] 2xl:text-[52px] xl:text-[52px] lg:text-[44px] lg:tracking-[0.4rem] lg:[word-spacing:0.3em]">
            Catch It early
          </p>
        </div>

        <div className="relative min-h-[clamp(8.5rem,42vw,12rem)] w-full min-w-0 bg-[#CCCCCC] md:min-h-[320px] lg:min-h-[360px]">
          <Image
            src="/assets/dentaldrill.png"
            alt="Dental handpiece close-up"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
            aria-hidden
          />
          <p
            className="absolute font-britanica-black uppercase leading-[0.95] [word-spacing:0.15em] text-[#FFF159] max-md:inset-x-1 max-md:top-1/3 max-md:-translate-y-1/2 max-md:px-1 max-md:text-center max-md:text-[clamp(0.5rem,4.75vw,8.875rem)] max-md:tracking-[0.06em] 2xl:top-[80px] lg:top-[80px] xl:top-[80px] 2xl:left-[3.25rem] lg:left-[2.25rem] xl:left-[10.25rem] md:top-[80px] md:bottom-auto md:left-5 md:right-auto md:translate-y-0 md:px-0 md:text-left md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.26rem] md:[word-spacing:0.26em] 2xl:text-[52px] xl:text-[52px] lg:text-[44px] lg:tracking-[0.3rem] lg:[word-spacing:0.3em]"
            aria-label="Forget the drill"
          >
            F#ck the drill
          </p>
        </div>
      </div>

      

      <section
        className="relative overflow-x-hidden bg-[#FFF159] px-4 pb-8 pt-10 sm:px-5 sm:pb-10 sm:pt-8 md:px-10 md:pb-12 md:pt-[4.5rem] lg:px-10 lg:pb-12 2xl:pt-[9rem] lg:pt-[8rem]"
        aria-labelledby="results-heading"
      >
        <div className="relative max-[425px]:min-h-[clamp(-10.5rem,0vw,17.5rem)]">
          <h2
            id="results-heading"
            className="pointer-events-none absolute left-1/2 z-0 w-full max-w-full -translate-x-1/2 select-none px-2 text-center text-[clamp(2.75rem,13.5vw,12.5rem)] font-bold uppercase leading-[0.82] tracking-[0.03em] text-black max-[425px]:top-1/2 max-[425px]:-translate-y-1/2 min-[425px]:px-0 min-[425px]:text-[clamp(3rem,16vw,12.5rem)] min-[426px]:top-4 sm:top-1 sm:leading-[0.84] sm:tracking-[0.05em] md:top-[-52px] lg:top-[-28px] md:translate-y-0 md:tracking-[0.065em] lg:leading-[0.85] lg:tracking-[0.2em]"
          >
            Results
          </h2>
          <h2
            aria-hidden
            className="pointer-events-none absolute left-1/2 z-20 w-full max-w-full -translate-x-1/2 select-none px-2 text-center text-[clamp(2.75rem,13.5vw,12.5rem)] font-bold uppercase leading-[0.82] tracking-[0.03em] text-black max-[425px]:top-1/2 max-[425px]:-translate-y-1/2 min-[425px]:px-0 min-[425px]:text-[clamp(3rem,16vw,12.5rem)] min-[426px]:top-4 sm:top-1 sm:leading-[0.84] sm:tracking-[0.05em] md:top-[-52px] lg:top-[-28px] md:translate-y-0 md:tracking-[0.065em] lg:leading-[0.85] lg:tracking-[0.2em]"
          >
            <span className="text-transparent">R</span>
            <span>E</span>
            <span className="text-transparent">SU</span>
            <span>L</span>
            <span>T</span>
            <span className="text-transparent">S</span>
          </h2>
        </div>

        <div className="relative z-10 mx-auto mt-9 flex max-w-5xl justify-center sm:mt-14 md:mt-16 md:max-w-6xl lg:mt-[5.5rem] lg:max-w-[64rem]">
        <div className="flex w-full max-w-full snap-x snap-mandatory gap-4 overflow-x-auto px-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-visible sm:px-0 md:gap-5 lg:gap-14 xl:gap-24 2xl:gap-32">
            {beforeAfterColumns.map((pair, i) => (
              <div
                key={pair.before}
                className="flex w-full min-w-[78vw] max-w-[18.5rem] shrink-0 snap-center flex-col gap-0 overflow-hidden rounded-none shadow-none ring-0 max-md:min-w-[65vw] max-md:max-w-[15rem] sm:min-w-0 sm:max-w-[13rem] sm:shrink md:max-w-[13.5rem] lg:max-w-[14.5rem]"
              >
                <BeforeAfterFigure
                  src={pair.before}
                  label="Before"
                  alt={`Patient ${i + 1} before treatment`}
                  stack="top"
                />
                <BeforeAfterFigure
                  src={pair.after}
                  label="After"
                  alt={`Patient ${i + 1} after treatment`}
                  stack="bottom"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
