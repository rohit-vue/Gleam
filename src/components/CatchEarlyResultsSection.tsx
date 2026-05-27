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
      className={`relative aspect-[4/3] w-full overflow-hidden bg-black/5 ${radius}`}
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
      <div className="flex w-full max-w-full snap-x snap-mandatory gap-3 overflow-x-auto min-[425px]:gap-4 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible">
        <div className="relative min-h-[250px] w-[calc(100%-1.25rem)] shrink-0 snap-center bg-[#FFF159] min-[425px]:min-h-[280px] min-[425px]:w-[85%] md:w-full md:min-w-0 md:shrink md:min-h-[320px] lg:min-h-[360px]">
          <Image
            src="/assets/teethhurt.png"
            alt="Person holding jaw in discomfort"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t  via-black/10 to-transparent"

            aria-hidden
          />
          <p className="absolute font-britanica-black uppercase leading-[0.95] [word-spacing:0.15em] text-white max-md:top-[66px] max-md:bottom-auto max-md:left-0 max-md:right-0 max-md:px-3 max-md:text-center max-md:text-[clamp(-4.875rem,8vw,7.5rem)] max-md:tracking-[0.1em] md:top-[80px] 2xl:top-[80px] lg:top-[80px] xl:top-[80px] md:bottom-auto md:left-5 2xl:left-[10.25rem] lg:left-[2.25rem]  xl:left-[10.25rem]  md:right-auto md:px-0 md:text-left md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.3rem] md:[word-spacing:0.28em] 2xl:text-[52px] xl:text-[52px] lg:text-[44px] lg:tracking-[0.4rem] lg:[word-spacing:0.3em]">
            Catch It early
          </p>
        </div>

        <div className="relative min-h-[250px] w-[calc(100%-1.25rem)] shrink-0 snap-center bg-[#CCCCCC] min-[425px]:min-h-[280px] min-[425px]:w-[85%] md:w-full md:min-w-0 md:shrink md:min-h-[320px] lg:min-h-[360px]">
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
            className="absolute font-britanica-black uppercase leading-[0.95] [word-spacing:0.15em] text-[#FFF159] max-md:top-[66px] max-md:bottom-auto max-md:left-0 max-md:right-0 max-md:px-3 max-md:text-center max-md:text-[clamp(-4.875rem,8vw,7.5rem)] max-md:tracking-[0.1em] 2xl:top-[80px] lg:top-[80px] xl:top-[80px] 2xl:left-[10.25rem] lg:left-[2.25rem]  xl:left-[10.25rem] md:top-[80px] md:bottom-auto md:left-5 md:right-auto md:px-0 md:text-left md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.26rem] md:[word-spacing:0.26em] 2xl:text-[52px] xl:text-[52px] lg:text-[44px] lg:tracking-[0.3rem] lg:[word-spacing:0.3em]"
            aria-label="Forget the drill"
          >
            F#ck the drill
          </p>
        </div>
      </div>

      

      <section
        className="relative overflow-x-hidden bg-[#FFF159] px-4 pb-8 pt-6 sm:px-5 sm:pb-10 sm:pt-8 md:px-10 md:pb-12 md:pt-10 lg:px-10 lg:pb-12 lg:pt-8"
        aria-labelledby="results-heading"
      >
        <h2
          id="results-heading"
          className="pointer-events-none absolute left-1/2 top-2 z-0 w-full max-w-full -translate-x-1/2 select-none px-2 text-center text-[clamp(2.75rem,13.5vw,12.5rem)] font-bold uppercase leading-[0.82] tracking-[0.03em] text-black min-[425px]:px-0 min-[425px]:text-[clamp(3rem,16vw,12.5rem)] sm:top-1 sm:leading-[0.84] sm:tracking-[0.05em] md:top-0 md:tracking-[0.065em] lg:leading-[0.85] lg:tracking-[0.2em]"
        >
          Results
        </h2>
        <h2
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-2 z-20 w-full max-w-full -translate-x-1/2 select-none px-2 text-center text-[clamp(2.75rem,13.5vw,12.5rem)] font-bold uppercase leading-[0.82] tracking-[0.03em] text-black min-[425px]:px-0 min-[425px]:text-[clamp(3rem,16vw,12.5rem)] sm:top-1 sm:leading-[0.84] sm:tracking-[0.05em] md:top-0 md:tracking-[0.065em] lg:leading-[0.85] lg:tracking-[0.2em]"
        >
          <span className="text-transparent">R</span>
          <span>E</span>
          <span className="text-transparent">SU</span>
          <span>L</span>
          <span>T</span>
          <span className="text-transparent">S</span>
        </h2>

        <div className="relative z-10 mx-auto mt-12 flex max-w-5xl justify-center sm:mt-14 md:mt-16 md:max-w-6xl lg:mt-[5.5rem] lg:max-w-[64rem]">
        <div className="flex w-full max-w-full snap-x snap-mandatory gap-4 overflow-x-auto px-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-visible sm:px-0 md:gap-5 lg:gap-14 xl:gap-24 2xl:gap-32">
            {beforeAfterColumns.map((pair, i) => (
              <div
                key={pair.before}
                className="flex w-full min-w-[78vw] max-w-[18.5rem] shrink-0 snap-center flex-col gap-0 overflow-hidden rounded-none shadow-none ring-0 sm:min-w-0 sm:max-w-[13rem] sm:shrink md:max-w-[13.5rem] lg:max-w-[14.5rem]"
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
