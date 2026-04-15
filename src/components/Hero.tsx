import Link from "next/link";

import { HeroGleamText } from "@/components/HeroGleamText";
import { HeroScrollRotateImage } from "@/components/HeroScrollRotateImage";
import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] pt-2 pb-1 sm:pt-3 sm:pb-0 md:pt-4 lg:pt-6">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative z-10 grid items-stretch gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12 font-britanica-black">
          <div className="relative z-10 flex min-h-0 w-full max-w-xl flex-col self-stretch lg:max-w-none lg:pt-1">
            <div className="shrink-0">
              <HeroSlideInOnView
                as="h1"
                wrapperClassName="w-full"
                className="text-[1.625rem] font-medium leading-[1.12] tracking-[0.045em] text-black sm:text-[2rem] sm:tracking-[0.06em] md:text-[2.35rem] md:leading-[1.1] md:tracking-[0.075em] lg:text-[2.75rem] lg:leading-[1.08] lg:tracking-[0.09em]"
              >
                Unlimited Dental Care
                <br />
                Across LA
              </HeroSlideInOnView>
              <p className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:160ms] mt-3 text-[0.9375rem] font-medium text-black tracking-[0.045em] sm:mt-4 sm:text-base sm:tracking-[0.05em] md:mt-5 md:text-lg md:tracking-[0.06em]">
                One Annual Membership
              </p>
              <Link
                href="/#become-a-member"
                className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:320ms] mt-5 inline-flex rounded-xl bg-[#FFF86B] px-5 py-2.5 text-sm font-semibold text-black tracking-[0.05em] shadow-sm transition-opacity hover:opacity-90 sm:mt-6 sm:rounded-[14px] sm:px-7 sm:py-3 sm:text-[0.9375rem] sm:tracking-[0.06em] md:mt-7 md:px-8 md:text-base md:tracking-[0.07em] lg:mt-8"
              >
                Get Started – $297/year
              </Link>
              <p className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:480ms] mt-5 grid gap-x-4 gap-y-1 text-[0.8125rem] font-bold leading-snug text-black sm:mt-6 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-1.5 sm:text-sm md:mt-7 md:text-[0.9375rem] lg:mt-8 lg:text-base">
                <span className="whitespace-nowrap">✓ Unlimited Cleanings</span>
                <span className="whitespace-nowrap">✓ Unlimited X-Rays</span>
                <span className="whitespace-nowrap">✓ Unlimited Exams</span>
              </p>
            </div>
            <HeroGleamText />
          </div>

          <div className="relative z-10 flex min-h-[200px] justify-center sm:min-h-[260px] md:min-h-[300px] lg:min-h-[380px] lg:justify-end">
            <div
              className="relative aspect-square w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,360px)] md:max-w-[min(100%,420px)] lg:max-w-[min(100%,580px)] lg:translate-y-4 xl:max-w-[640px] xl:translate-y-10"
              role="img"
              aria-label="Dental mirror and explorer tools"
            >
              <HeroScrollRotateImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
