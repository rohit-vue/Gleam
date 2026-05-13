import Link from "next/link";

const CTA_YELLOW = "#FFE500";

export function LocationsCtaSection() {
  return (
    <div className="px-6 pb-16 sm:px-10 md:px-14">
      <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-black px-10 py-12 sm:flex-row sm:items-center sm:gap-10 sm:px-12 sm:py-14">
        <div>
          <h3
            className="font-alliance text-[clamp(1.4rem,3.5vw,1.75rem)] font-black uppercase leading-[1.15] text-black"
            style={{ color: CTA_YELLOW }}
          >
            NOT SURE WHICH
            <br />
            LOCATION?
          </h3>
          <p className="mt-2  text-[14px] leading-relaxed text-neutral-500">
            All locations offer the same services, same pricing, same membership.
            Pick whichever is closest — you can visit any Gleam office with your plan.
          </p>
        </div>
        <Link
          href="tel:+13105550199"
          className="flex-shrink-0 rounded-full px-9 py-4 text-[14px] font-bold tracking-[0.3px] text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: CTA_YELLOW }}
        >
          Call (310) 555-0199
        </Link>
      </div>
    </div>
  );
}
