import Image from "next/image";
import Link from "next/link";

const testimonial =
  "Saved over $800 on my veneers — and got a free whitening. — James T. (WeHo)";

const essentialFeatures = [
  "Unlimited cleanings, exams & X-rays",
  "Priority booking at all 6 locations",
  "Free consultation on any service",
  "Full preventive coverage while you're a member",
  "Cancel anytime",
] as const;

const annualFeatures = [
  "Everything in Essential — plus year-round peace of mind",
  "Free professional whitening — use anytime",
  "Priority booking at all 6 locations",
  "Free consultation on any service",
  "Best per-month value vs. renewing every 6 months",
] as const;

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-sm leading-snug text-white md:text-base">
      <span className="mt-0.5 shrink-0 text-[#FFF86B] text-[12px] font-bold" aria-hidden>
        ✓
      </span>
      <span className="text-[13px] font-bold tracking-[0.02em] text-white">{children}</span>
    </li>
  );
}

type CompareCell = string | "check";

function GreenCheck() {
  return (
    <div
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22C55E] shadow-sm ring-2 ring-white/20"
      aria-label="Included"
      role="img"
    >
      <Image
        src="/assets/tick.svg"
        alt=""
        width={16}
        height={16}
        className="h-4 w-4 object-contain"
        aria-hidden
      />
    </div>
  );
}

function CompareCellContent({ value }: { value: CompareCell }) {
  if (value === "check") return <GreenCheck />;
  return <div className="leading-snug">{value}</div>;
}

const comparisonRows: {
  label: string;
  traditional: CompareCell;
  wally: CompareCell;
  gleam: CompareCell;
}[] = [
  {
    label: "Annual cost",
    traditional: "$480–$960 + copays",
    wally: "$249/yr",
    gleam: "$297/yr",
  },
  {
    label: "Unlimited cleanings",
    traditional: "2× a year, with copays",
    wally: "check",
    gleam: "check",
  },
  {
    label: "Whitening",
    traditional: "Never",
    wally: "Extra cost",
    gleam: "Part of the deal",
  },
  {
    label: "You get a cavity",
    traditional: "Deductible first, then they pay some",
    wally: "Book somewhere else",
    gleam: "Handled. Same visit.",
  },
  {
    label: "You need an implant",
    traditional: '$1,500+ after insurance "helps"',
    wally: "We only do cleanings",
    gleam: "One price. No surprises.",
  },
  {
    label: "You need a crown",
    traditional: "Partial coverage, surprise bill later",
    wally: "That's not us",
    gleam: "Handled.",
  },
  {
    label: "You hit your limit",
    traditional: "Cut off at $1,500. Bill arrives anyway",
    wally: "This isn't even a conversation we can have",
    gleam: "There is no limit.",
  },
  {
    label: "Cancel anytime",
    traditional: "Locked in for the year",
    wally: "check",
    gleam: "check",
  },
];

export function PricingSection() {
  return (
    <section
      id="become-a-member"
      className="relative scroll-mt-24 overflow-x-hidden bg-[#1A1A1A] px-4 md:scroll-mt-28 md:px-8 lg:py-8 py-10"
      aria-labelledby="pricing-tagline"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative isolate mx-auto w-full max-w-6xl px-2 md:px-4">
          <div className="relative grid w-full  place-items-center   ">
            <p
              className="pointer-events-none col-start-1 row-start-1 -translate-y-2 select-none whitespace-nowrap font-black uppercase leading-[0.78] tracking-[2.5rem] text-[#454545]  sm:-translate-y-2.5 md:-translate-y-3 md:leading-[0.75] text-[200px] font-britanica-black"
              aria-hidden
            >
              PRICING
            </p>
            <h2
              id="pricing-tagline"
              className="col-start-1 text-[2.2rem] row-start-1 z-10 min-w-full translate-y-[2.25rem] px-3 text-center  font-bold uppercase leading-snug tracking-[0.09em] text-white [word-spacing:1.5em] sm:translate-y-[2.75rem]  sm:[word-spacing:0.26em] md:translate-y-12  md:[word-spacing:0.3em] lg:translate-y-14  lg:leading-snug lg:[word-spacing:0.34em]"
            >
              The last dental plan you&apos;ll ever need.
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 lg:mt-10 lg:grid-cols-2 lg:gap-8 font-britanica-black">
          {/* Essential */}
          <article className="flex flex-col rounded-[38px] bg-[#3D3D3A] p-6 shadow-xl ring-1 ring-white/5 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[20px] font-bold uppercase tracking-[0.09em] text-[#999999]">
                Essential
              </span>
              <span className="w-[150px] flex items-center justify-center rounded-[10px] bg-[#F5F5C9] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[#7C7C14] font-britanica-black">
                Most Popular
              </span>
            </div>

            <h3 className="mt-6 text-[28px] tracking-[0.02em] font-bold text-white">
              Unlimited preventive care.
            </h3>
            <p className="text-[15px] font-semibold tracking-[0.02em] text-[#C2C0B6]">
              Never think about your teeth again.
            </p>

            <div className="mt-8">
              <p className="text-[28px] font-bold tracking-[0.02em] text-white">
                $160{" "}
                <span className="text-[18px] font-semibold text-[#C2C0B6]">
                  /6 months
                </span>
              </p>
              <p className="mt-1 text-[15px] text-[#C2C0B6]">$30/mo</p>
            </div>

            <Link
              href="/#become-a-member"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFF86B] py-3.5 text-center text-[18px] font-bold text-black] transition-opacity hover:opacity-90 "
            >
              Get Started <span aria-hidden>→</span>
            </Link>

            <div className="mt-6 mb-1 h-px w-full bg-white/10" />

            <p className="font-alliance text-[14px] font-bold italic leading-relaxed text-[#C2C0B6]">
              &ldquo;{testimonial}&rdquo;
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {essentialFeatures.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </article>

          {/* Annual */}
          <article className="flex flex-col rounded-[38px] border-2 border-[#FDFD66] bg-[#1A1A1A] p-6 shadow-xl md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center  justify-between gap-3">
              <span className="text-[20px] font-bold uppercase tracking-[0.09em] text-[#999999]">
                Annual
              </span>
              <span className="w-[150px] flex items-center justify-center rounded-[10px] bg-[#FFF86B] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[#3A3A00] font-britanica-black">
                Best Value
              </span>
            </div>

            <h3 className="mt-6 text-[28px] tracking-[0.02em] font-bold text-white">
              Everything, all year. Plus a free whitening
            </h3>
            <p className="text-[15px] font-semibold tracking-[0.02em] text-[#C2C0B6]">
              Full access from day one — brighter smile included.
            </p>

            <div className="mt-8">
              <p className="text-3xl font-bold tracking-[0.02em] text-white md:text-4xl">
                $297{" "}
                <span className="text-[18px] font-semibold text-[#C2C0B6]">
                  /year
                </span>
              </p>
              <p className="mt-1 text-[15px] text-[#C2C0B6]">
                $24.75/mo — 2 months free vs. 6-month plan
              </p>
            </div>

            <Link
              href="/#become-a-member"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFF86B] py-3.5 text-center text-[18px] font-bold tracking-[0.02em] text-[#000000] transition-opacity hover:opacity-90 font-britanica-black"
            >
              Get Started <span aria-hidden>→</span>
            </Link>

            <div className="mt-6 mb-1 h-px w-full bg-white/10" />

            <p className="text-[14px] font-alliance font-bold italic leading-relaxed text-[#C2C0B6]">
              &ldquo;{testimonial}&rdquo;
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {annualFeatures.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-20 lg:mt-28">
          <p className="sr-only">Compare traditional insurance, other subscriptions, and Gleam</p>
          <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-visible md:px-0 font-britanica-black">
            <div
              className="grid min-w-[44rem] grid-cols-[minmax(8.5rem,1fr)_repeat(3,minmax(0,1fr))] items-stretch gap-x-0 md:min-w-0"
              role="table"
              aria-label="Plan comparison"
            >
              <div className="flex h-full min-h-0 flex-col">
                <div
                  className="flex min-h-[4.75rem] items-end border-b border-white/20 py-3 pr-3 text-left text-xs font-bold uppercase tracking-wide text-[#A0A0A0] md:min-h-[5.25rem] md:py-4 md:text-sm"
                  role="columnheader"
                />
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center border-b border-white/20 py-3 pr-3 text-left text-[15px] font-bold tracking-[0.08em] text-white md:py-4"
                    role="rowheader"
                  >
                    {row.label}
                  </div>
                ))}
              </div>

              <div className="flex h-full min-h-0 flex-col">
                <div
                  className="overflow-hidden rounded-t-[30px] bg-black px-4 py-4 text-left text-[15px] font-bold uppercase leading-tight tracking-[0.03em] text-white md:px-5 md:py-5"
                  role="columnheader"
                >
                  Traditional 
                  <div className="mt-0.5  text-[#CFCFCF] text-[15px]">
                    Insurance
                  </div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center bg-black px-4 py-[14px] text-left text-[15px] font-semibold tracking-[0.03em] text-white md:px-5 md:py-5.5"
                    role="cell"
                  >
                    <CompareCellContent value={row.traditional} />
                  </div>
                ))}
                <div
                  className="min-h-6 flex-1 bg-black md:min-h-8"
                  aria-hidden
                />
              </div>

              <div className="flex h-full min-h-0 flex-col">
                <div
                  className="overflow-hidden rounded-t-[30px] bg-[#2A2A2A] px-4 py-4 text-left text-[15px] font-bold uppercase leading-tight tracking-[0.03em]  text-white md:px-5 md:py-5"
                  role="columnheader"
                >
                  Other Subscriptions{" "}
                  <div className="mt-0.5 normal-case tracking-normal text-[#CFCFCF] text-[15px] ">
                    i.e. Wally
                  </div>
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center bg-[#2A2A2A] px-4 py-3 text-left text-[15px] tracking-[0.03em]  font-semibold text-white md:px-5 md:py-3.5"
                    role="cell"
                  >
                    <CompareCellContent value={row.wally} />
                  </div>
                ))}
                <div
                  className="min-h-6 flex-1 bg-[#2A2A2A] md:min-h-8"
                  aria-hidden
                />
              </div>

              <div className="flex h-full min-h-0 flex-col">
                <div
                  className="overflow-hidden rounded-t-[30px] bg-[#FFF86B] px-4 py-4 text-left text-[15px] font-bold uppercase leading-tight tracking-[0.03em] text-[#1A1A1A] md:px-5 md:py-5"
                  role="columnheader"
                >
                  Gleam
                </div>
                {comparisonRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center bg-[#FFF86B] px-4 py-3 text-left text-[15px] tracking-[0.03em] font-semibold text-black md:px-5 md:py-3.5 md:text-sm"
                    role="cell"
                  >
                    <CompareCellContent value={row.gleam} />
                  </div>
                ))}
                <div
                  className="min-h-6 flex-1 bg-[#FFF86B] md:min-h-8"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
