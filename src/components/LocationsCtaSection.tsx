import Link from "next/link";

const CTA_YELLOW = "#fff86b";

export function LocationsCtaSection() {
  return (
    <div className="px-4 pb-12 sm:px-6 sm:pb-14 md:px-10 lg:px-14 lg:pb-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-black px-6 py-8 sm:gap-7 sm:px-8 sm:py-10 md:gap-8 md:px-10 md:py-11 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-14">
        <div>
          <h3
            className="font-alliance text-[clamp(1.15rem,4.5vw,1.35rem)] font-black uppercase leading-[1.15] sm:text-[clamp(1.25rem,3.8vw,1.5rem)] md:text-[clamp(1.3rem,3.6vw,1.65rem)] lg:text-[clamp(1.4rem,3.5vw,1.75rem)]"
            style={{ color: CTA_YELLOW }}
          >
            NOT SURE WHICH
            <br />
            LOCATION?
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-[13.5px] lg:text-[14px]">
            All locations offer the same services, same pricing, same membership.
            Pick whichever is closest — you can visit any Gleam office with your plan.
          </p>
        </div>
        <Link
          href="tel:+13105550199"
          className="w-full flex-shrink-0 rounded-full px-7 py-3.5 text-center text-[13px] font-bold tracking-[0.3px] text-black transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-3.5 sm:text-[13.5px] lg:px-9 lg:py-4 lg:text-[14px]"
          style={{ backgroundColor: CTA_YELLOW }}
        >
          Call (310) 555-0199
        </Link>
      </div>
    </div>
  );
}
