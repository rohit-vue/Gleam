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
        sizes="(max-width: 639px) min(100vw, 21rem), (max-width: 1023px) 21rem, 21rem"
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
          <p className="absolute text-center bottom-3 left-3 right-3 text-[52px] font-bold uppercase leading-[0.95] tracking-[0.4rem] [word-spacing:0.3em] text-white md:bottom-5 md:left-5  lg:bottom-6 ">
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
            className="absolute bottom-3 left-3 right-3 text-center text-[52px] font-bold uppercase leading-[0.95] tracking-[0.3rem] [word-spacing:0.3em] text-[#FFF159] md:bottom-5 md:left-5 lg:bottom-6"
            aria-label="Forget the drill"
          >
            F#ck the drill
          </p>
        </div>
      </div>

      <div className="h-12 w-full bg-white" aria-hidden />

      <section
        className="relative overflow-hidden bg-[#FFF159] px-5 py-10 md:px-10 md:py-20 lg:px-10 lg:py-12"
        aria-labelledby="results-heading"
      >
        <h2
          id="results-heading"
          className="relative z-10 text-[200px] mx-auto w-full select-none px-2 text-center font-bold uppercase leading-[0.85] tracking-[0.08em] text-black sm:px-4"
        >
          Results
        </h2>

        <div className="relative mx-auto flex max-w-5xl justify-center md:max-w-6xl lg:max-w-[64rem]">
          <div className="flex w-full flex-col items-center gap-40 sm:max-w-none sm:flex-row sm:justify-center">
            {beforeAfterColumns.map((pair, i) => (
              <div
                key={pair.before}
                className="flex w-full max-w-[12.5rem] flex-col gap-0 overflow-hidden rounded-lg shadow-md ring-1 ring-black/15 sm:max-w-[13rem] md:max-w-[13.5rem] lg:max-w-[14.5rem]"
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
