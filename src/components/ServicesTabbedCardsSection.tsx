"use client";

import { useEffect, useState } from "react";

import { SERVICE_TABS, SERVICE_TABS_PREVENT, type ServiceTabEntry } from "@/data/serviceTabs";

const ACCENT = "#FFF168";
/** CTA pill — matches hero / screenshot yellow */
const CTA_PILL_YELLOW = "#FFF86B";
const TOGGLE_ACTIVE_BG = "#FFF86B";
/** Figma: light beige section background */
const SECTION_BG = "#F7F5F0";

type ServiceTrack = "restore" | "prevent";
const TAB_BORDER = "border-neutral-200";

/** Blurred price rows stacked behind the CTA (reference: dense bokeh behind pill). */
const PRICE_BLUR_STACK_COUNT = 2;

function SpecsTable({ specs }: { specs: ServiceTabEntry["specs"] }) {
  return (
    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-20">
      <p className="text-[16px] font-bold uppercase tracking-[0.1em] text-neutral-900 sm:text-[18px] sm:tracking-[0.11em] md:text-[20px] md:tracking-[0.12em]">
        Specs table
      </p>
      <div className="mt-3 border-t border-neutral-300">
        {specs.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 border-b border-neutral-300 py-3 text-[11px] uppercase leading-snug tracking-wide  sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-xs"
          >
            <span className="font-bold " >
              {row.label}
            </span>
            <span className=" text-black sm:text-center font-bold">{row.mid}</span>
            <span className=" text-black sm:text-right font-bold">{row.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCardPanel({ entry }: { entry: ServiceTabEntry }) {
  const showPricingStrip = !entry.hideUnlockPricing;

  return (
    <div className="relative flex flex-col gap-7 sm:gap-8 md:gap-9 lg:flex-row lg:items-start lg:gap-12">
      {entry.watermark ? (
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full max-w-full select-none overflow-hidden whitespace-nowrap text-center text-[clamp(2.75rem,15.5vw,6.5rem)] font-bold uppercase leading-[0.82] tracking-[0.08em] text-neutral-400/[0.22] sm:text-[clamp(3.25rem,13vw,7rem)] sm:tracking-[0.14em] md:text-[clamp(3.5rem,11vw,7.5rem)] md:tracking-[0.22em]"
        >
          {entry.watermark}
        </p>
      ) : null}
      <div className="relative z-10 min-h-0 min-w-0 w-full lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)*0.6)]">
        <div className="relative">
          <h3 style={{ fontWeight: '600' }} className="text-[clamp(1.2rem,5.4vw,1.8rem)] uppercase leading-tight tracking-[0.1em] text-neutral-900 sm:text-[clamp(1.3rem,4.3vw,1.95rem)] md:text-[clamp(1.5rem,3.4vw,2.1rem)]">
            {entry.title}
          </h3>
          <p className="mt-3 max-w-xl text-[0.95rem] font-semibold leading-relaxed tracking-[0.09em] text-neutral-800 sm:mt-4 sm:text-base md:text-[1.05rem]">
            {entry.description}
          </p>
          <SpecsTable specs={entry.specs} />
        </div>
      </div>

      <div className="relative z-10 flex w-full min-w-0 flex-col items-stretch gap-8 sm:gap-10 md:gap-12 lg:gap-20 lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)*0.4)]">
        <div
          className="relative mx-auto w-full max-w-[17rem] overflow-hidden rounded-2xl sm:max-w-[18.5rem] md:max-w-[20rem]"
          style={{ backgroundColor: ACCENT }}
        >
          <img
            src={entry.imageSrc}
            alt={entry.imageAlt}
            className="relative z-10 block h-auto w-full rounded-2xl align-middle"
            loading="lazy"
            decoding="async"
          />
        </div>

        {showPricingStrip ? (
          <div className="relative w-full">
            <div
              className={[
                "relative flex w-full items-center justify-center bg-white px-3 py-4 sm:px-5 sm:py-6 md:px-6 md:py-8",
                entry.priceBlur
                  ? "min-h-[4rem] py-3 sm:min-h-[4rem] sm:py-5"
                  : "mt-2 py-3 sm:py-5",
              ].join(" ")}
            >
              {entry.priceBlur ? (
                <div
                  className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center"
                  aria-hidden
                >
                  {Array.from({ length: PRICE_BLUR_STACK_COUNT }, (_, i) => (
                    <p
                      key={i}
                      className="shrink-0 select-none text-[clamp(0.85rem,4.5vw,1.4rem)] font-bold tabular-nums leading-[0.72] text-neutral-600 blur-[8px] sm:text-[clamp(2.1rem,8vw,3.85rem)] sm:leading-[0.68] sm:blur-[8px]"
                      style={{
                        transform: `translateX(${((i % 3) - 1) * 18}px)`,
                        opacity: 0.2 + (i % 5) * 0.035,
                      }}
                    >
                      {entry.priceBlur}
                    </p>
                  ))}
                </div>
              ) : null}
              <div className="relative z-10 flex justify-center px-2 py-1">
                <button
                  type="button"
                  className="rounded-full px-6 py-3 text-[14px] font-bold leading-none text-neutral-900 shadow-[0_28px_90px_-8px_rgba(0,0,0,0.38),0_12px_36px_-12px_rgba(0,0,0,0.22)] transition-[transform,opacity] hover:opacity-95 active:scale-[0.99] sm:px-8 sm:py-3.5  md:px-10 md:py-4 tracking-[0.09em]"
                  style={{ backgroundColor: CTA_PILL_YELLOW }}
                >
                  Unlock Member Pricing
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ServicesTabbedCardsSection() {
  const [track, setTrack] = useState<ServiceTrack>("restore");
  /** Figma: front-most expanded card; default = last item in the active list. */
  const [expandedIndex, setExpandedIndex] = useState(() => SERVICE_TABS.length - 1);

  const tabs = track === "restore" ? SERVICE_TABS : SERVICE_TABS_PREVENT;

  useEffect(() => {
    setExpandedIndex(tabs.length > 0 ? tabs.length - 1 : 0);
  }, [track, tabs.length]);

  return (
    <section
      className="border-b border-neutral-200/80 py-10 font-helvetica-neue-regular sm:py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <div
          className="mb-6 flex flex-wrap gap-2.5 sm:mb-8 sm:gap-3 md:mb-10 md:gap-4"
          role="group"
          aria-label="Service category"
        >
          <button
            type="button"
            aria-pressed={track === "restore"}
            onClick={() => setTrack("restore")}
            className="rounded-[77px] border-[2px] border-black px-7 py-2 text-[13px] font-bold text-neutral-900 transition-colors sm:px-8 sm:py-2.5 sm:text-[14px] md:px-6 md:py-1.5"
            style={{
              backgroundColor: track === "restore" ? TOGGLE_ACTIVE_BG : SECTION_BG,
            }}
          >
            Restore
          </button>
          <button
            type="button"
            aria-pressed={track === "prevent"}
            onClick={() => setTrack("prevent")}
            className="rounded-[77px] border-[2px] border-black px-7 py-2 text-[13px] font-bold text-neutral-900 transition-colors sm:px-8 sm:py-2.5 sm:text-[14px] md:px-6 md:py-1.5 "
            style={{
              backgroundColor: track === "prevent" ? TOGGLE_ACTIVE_BG : SECTION_BG,
            }}
          >
            Prevent
          </button>
        </div>

        <div
          className="relative mr-auto flex w-full max-w-[62rem] flex-col items-stretch pb-6 pt-2 sm:pb-10 sm:pt-4 md:pb-12 md:pt-6"
          role="region"
          aria-label="Dental services"
        >
          {tabs.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isNextAfterExpanded = index === expandedIndex + 1;
           
            const stackOffset =
              index === 0
                ? ""
                : isNextAfterExpanded
                  ? "-mt-[calc(-3rem+25px)] sm:-mt-[calc(-3rem+25px)] md:-mt-[calc(-68px+25px)]"
                  : "-mt-12 sm:-mt-12 md:-mt-[68px]";

            return (
              <div
                key={item.id}
                className={`relative w-full max-w-full transition-transform duration-500 ${stackOffset}`}
                // The expanded card needs highest z-index to cast its shadow over everything below it
                style={{ zIndex: isExpanded ? tabs.length + 10 : index + 1 }}
              >
                <div className="flex w-full flex-col items-start">
                  
                  {/* --- THE TAB --- */}
                  <button
                    type="button"
                    id={`service-tab-${item.id}`}
                    aria-expanded={isExpanded}
                    aria-controls={`service-panel-${item.id}`}
                    onClick={() => setExpandedIndex(index)}
                    className={[
                      "relative z-20 flex w-max min-w-[11.75rem] shrink-0 items-center gap-2 bg-white pl-3 pr-4 text-left  text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-200 sm:min-w-[14rem] sm:gap-3 sm:pl-5 sm:pr-6 sm:text-[12px] md:min-w-[18rem] md:gap-4 md:pl-7 md:pr-8 md:text-sm left-[10px] sm:left-[20px] md:left-[40px]",
                      TAB_BORDER,
                      "border border-b-0", // No bottom border so it merges with the body
                      "rounded-t-[12px] py-2.5 sm:rounded-t-[14px] sm:py-3 md:rounded-t-[18px] md:py-3.5",
                      "-mb-[1px]", // Pulls the tab down 1px to physically cover the body's top border
                      !isExpanded && "hover:bg-neutral-50"
                    ].join(" ")}
                  >
                    <span className="shrink-0 text-[12px] font-bold tabular-nums text-black sm:text-[13px] md:text-sm">
                      {item.number}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug text-black  font-bold tracking-[0.08em]">{item.tabLabel}</span>
                  </button>

                  {/* --- THE FULL WIDTH FOLDER BODY --- */}
                  <div
                    id={`service-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`service-tab-${item.id}`}
                    className={[
                      "relative z-10 w-full bg-white",
                      TAB_BORDER,
                      "border", 
                      "rounded-t-[20px] sm:rounded-tr-[26px]",
                      isExpanded 
                        ? "shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)]" 
                        : "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.1)]",
                      "transition-shadow duration-300 motion-reduce:shadow-lg"
                    ].join(" ")}
                  >
                    {/* Fixed Top Spacer: Ensures the folder's top edge is visible even when content is collapsed to 0 height. */}
                    <div className="h-12 w-full rounded-t-[16px] sm:h-14 sm:rounded-t-[20px] md:h-16 md:rounded-t-[26px]"></div>

                    {/* --- THE COLLAPSIBLE CONTENT --- */}
                    <div
                      className={[
                        "w-full min-w-0 max-w-full overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none motion-reduce:duration-0",
                        isExpanded ? "grid grid-rows-[1fr] mb-[20px]" : "grid grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        {/* Notice: padding top is reduced here since we added the Spacer above */}
                        <div className="px-4 pb-8 sm:px-6 sm:pb-9 md:px-10 md:pb-10">
                          <ServiceCardPanel entry={item} />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
