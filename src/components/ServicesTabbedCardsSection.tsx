"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { SERVICE_TABS, SERVICE_TABS_PREVENT, type ServiceTabEntry } from "@/data/serviceTabs";

const ACCENT = "#FFF168";
/** CTA pill — matches hero / screenshot yellow */
const CTA_PILL_YELLOW = "#FFF574";
const TOGGLE_ACTIVE_BG = "#FFF86B";
/** Figma: light beige section background */
const SECTION_BG = "#F7F5F0";

type ServiceTrack = "restore" | "prevent";
const TAB_BORDER = "border-neutral-200";

/** Blurred price rows stacked behind the CTA (reference: dense bokeh behind pill). */
const PRICE_BLUR_STACK_COUNT = 8;

function SpecsTable({ specs }: { specs: ServiceTabEntry["specs"] }) {
  return (
    <div className="mt-8">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-neutral-900">
        Specs table
      </p>
      <div className="mt-3 border-t border-neutral-300">
        {specs.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 border-b border-neutral-300 py-3 text-[11px] uppercase leading-snug tracking-wide sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-xs"
          >
            <span className="font-bold text-neutral-900">{row.label}</span>
            <span className="font-semibold text-neutral-900 sm:text-center">{row.mid}</span>
            <span className="font-semibold text-neutral-900 sm:text-right">{row.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCardPanel({ entry }: { entry: ServiceTabEntry }) {
  const showPricingStrip = !entry.hideUnlockPricing;

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      <div className="relative min-h-0 min-w-0 w-full lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)*0.6)]">
        {entry.watermark ? (
          <p
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-2/3 z-0 w-[200%] max-w-none -translate-x-1/2 select-none text-center font-alliance text-[100px] font-bold uppercase leading-none tracking-tight text-neutral-400/[0.22] sm:w-[180%]"
          >
            {entry.watermark}
          </p>
        ) : null}
        <div className="relative z-10">
          <h3 className="font-alliance text-[clamp(1.75rem,4vw,2.35rem)] font-bold uppercase leading-tight tracking-tight text-neutral-900">
            {entry.title}
          </h3>
          <p className="mt-4 max-w-xl font-alliance text-base font-semibold leading-relaxed text-neutral-800 md:text-[1.05rem]">
            {entry.description}
          </p>
          <SpecsTable specs={entry.specs} />
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col items-stretch lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)*0.4)]">
        <div
          className="relative mx-auto w-full max-w-[18rem] overflow-hidden rounded-2xl sm:max-w-[20rem]"
          style={{ backgroundColor: ACCENT }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={entry.imageSrc}
              alt={entry.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 20rem, 80vw"
            />
          </div>
        </div>

        {showPricingStrip ? (
          <div className="relative -mt-2 w-full">
            <div
              className={[
                "relative flex w-full items-center justify-center overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8",
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
                      className="shrink-0 select-none font-alliance text-[clamp(1.85rem,9.5vw,3.4rem)] font-bold tabular-nums leading-[0.72] text-neutral-600 blur-[8px] sm:text-[clamp(2.1rem,8vw,3.85rem)] sm:leading-[0.68] sm:blur-[8px]"
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
                  className="rounded-full px-8 py-3.5 font-alliance text-base font-bold leading-none text-neutral-900 shadow-[0_28px_90px_-8px_rgba(0,0,0,0.38),0_12px_36px_-12px_rgba(0,0,0,0.22)] transition-[transform,opacity] hover:opacity-95 active:scale-[0.99] sm:px-10 sm:py-4 sm:text-lg"
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
      className="border-b border-neutral-200/80 py-14 md:py-20 lg:py-24"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <div
          className="mb-8 flex flex-wrap gap-3 sm:mb-10 sm:gap-4"
          role="group"
          aria-label="Service category"
        >
          <button
            type="button"
            aria-pressed={track === "restore"}
            onClick={() => setTrack("restore")}
            className="rounded-[77px] border-[2px] border-black px-9 py-2.5 font-britanica-black text-[14px] font-bold text-neutral-900 transition-colors sm:px-6 sm:py-1.5"
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
            className="rounded-[77px] border-[2px] border-black px-9 py-2.5 font-britanica-black text-[14px] font-bold text-neutral-900 transition-colors sm:px-6 sm:py-1.5 "
            style={{
              backgroundColor: track === "prevent" ? TOGGLE_ACTIVE_BG : SECTION_BG,
            }}
          >
            Prevent
          </button>
        </div>

        <div
          className="relative mr-auto flex w-full max-w-[62rem] flex-col items-stretch pb-8 pt-4 sm:pb-12 sm:pt-6"
          role="region"
          aria-label="Dental services"
        >
          {tabs.map((item, index) => {
            const isExpanded = expandedIndex === index;
            // Slightly adjusted overlap so the white folder tops show nicely
            const stackOffset = index > 0 ? "-mt-13 sm:-mt-14 md:-mt-[68px]" : "";

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
                      "relative z-20 flex w-max min-w-[15rem] shrink-0 items-center gap-3 bg-white pl-5 pr-6 text-left font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-neutral-900 transition-colors duration-200 sm:min-w-[18rem] sm:gap-4 sm:pl-7 sm:pr-8 sm:text-[13px] md:text-sm left-[40px]",
                      TAB_BORDER,
                      "border border-b-0", // No bottom border so it merges with the body
                      "rounded-t-[14px] py-3 sm:rounded-t-[18px] sm:py-3.5",
                      "-mb-[1px]", // Pulls the tab down 1px to physically cover the body's top border
                      !isExpanded && "hover:bg-neutral-50"
                    ].join(" ")}
                  >
                    <span className="shrink-0 text-[12px] font-bold tabular-nums text-neutral-900 sm:text-[13px] md:text-sm">
                      {item.number}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">{item.tabLabel}</span>
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
                    <div className="h-15 w-full sm:h-16 md:h-17 rounded-t-[20px] sm:rounded-t-[26px]"></div>

                    {/* --- THE COLLAPSIBLE CONTENT --- */}
                    <div
                      className={[
                        "w-full min-w-0 max-w-full overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none motion-reduce:duration-0",
                        isExpanded ? "grid grid-rows-[1fr] mb-[20px]" : "grid grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        {/* Notice: padding top is reduced here since we added the Spacer above */}
                        <div className="px-5 pb-10 sm:px-8 sm:pb-9 md:px-10 md:pb-10">
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
