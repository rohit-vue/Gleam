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
  const radius =
    stack === "top"
      ? "rounded-t-lg rounded-b-none"
      : "rounded-b-lg rounded-t-none";
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
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 font-britanica-black">
        <div className="relative min-h-[280px] w-full bg-[#FFF159] md:min-h-[320px] lg:min-h-[360px]">
          <Image
            src="/assets/teethhurt.png"
            alt="Person holding jaw in discomfort"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
            aria-hidden
          />
          <p className="absolute bottom-3 left-3 right-3 text-center text-[clamp(1.5rem,7vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[0.12em] [word-spacing:0.15em] text-white sm:tracking-[0.2em] sm:[word-spacing:0.22em] md:bottom-5 md:left-5 md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.3rem] md:[word-spacing:0.28em] lg:bottom-6 lg:text-[52px] lg:tracking-[0.4rem] lg:[word-spacing:0.3em]">
            Catch it early
          </p>
        </div>

        <div className="relative min-h-[280px] w-full bg-[#CCCCCC] md:min-h-[320px] lg:min-h-[360px]">
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
            className="absolute bottom-3 left-3 right-3 text-center text-[clamp(1.5rem,7vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[0.1em] [word-spacing:0.15em] text-[#FFF159] sm:tracking-[0.18em] sm:[word-spacing:0.2em] md:bottom-5 md:left-5 md:text-[clamp(2rem,4.5vw,3.25rem)] md:tracking-[0.26rem] md:[word-spacing:0.26em] lg:bottom-6 lg:text-[52px] lg:tracking-[0.3rem] lg:[word-spacing:0.3em]"
            aria-label="Forget the drill"
          >
            F#ck the drill
          </p>
        </div>
      </div>

      <div className="h-12 w-full bg-white" aria-hidden />

      <section
        className="relative overflow-x-hidden bg-[#FFF159] px-4 py-8 sm:px-5 sm:py-10 md:px-10 md:py-16 lg:px-10 lg:py-12"
        aria-labelledby="results-heading"
      >
        <h2
          id="results-heading"
          className="relative z-10 mx-auto w-full max-w-[100vw] select-none px-1 text-center text-[clamp(3rem,16vw,12.5rem)] font-bold uppercase leading-[0.82] tracking-[0.03em] text-black sm:px-3 sm:leading-[0.84] sm:tracking-[0.05em] md:tracking-[0.065em] lg:leading-[0.85] lg:tracking-[0.08em]"
        >
          Results
        </h2>

        <div className="relative mx-auto mt-6 flex max-w-5xl justify-center sm:mt-8 md:mt-10 md:max-w-6xl lg:mt-8 lg:max-w-[64rem]">
          <div className="flex w-full max-w-full flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10 lg:gap-14 xl:gap-24 2xl:gap-32">
            {beforeAfterColumns.map((pair, i) => (
              <div
                key={pair.before}
                className="flex w-full max-w-[min(100%,18.5rem)] flex-col gap-0 overflow-hidden rounded-lg shadow-md ring-1 ring-black/15 sm:max-w-[13rem] md:max-w-[13.5rem] lg:max-w-[14.5rem]"
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
