import Link from "next/link";

import { HeroGleamText } from "@/components/HeroGleamText";
import { HeroScrollRotateImage } from "@/components/HeroScrollRotateImage";
import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] pt-3 md:pt-4 lg:pt-6">
      <div className="relative mx-auto max-w-7xl px-6 ">
        <div className="relative z-10 grid items-stretch gap-12 md:gap-14 lg:grid-cols-2 lg:gap-10 font-britanica-black">
          <div className="relative z-10 flex min-h-0 w-full max-w-xl flex-col self-stretch lg:pt-1">
            <div className="shrink-0">
              <HeroSlideInOnView
                as="h1"
                wrapperClassName="w-full"
                className="text-[44px] font-medium leading-[1.1] tracking-[0.09em] text-black  lg:leading-[1.08]"
              >
                Unlimited Dental Care
                <br />
                Across LA
              </HeroSlideInOnView>
              <p className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:160ms] mt-5 text-[20px] font-medium text-black tracking-[0.06em]">
                One Annual Membership
              </p>
              <Link
                href="/#become-a-member"
                className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:320ms] mt-8 inline-flex rounded-[14px] bg-[#FFF86B] px-8 py-3 text-[16px] font-semibold text-black tracking-[0.07em] shadow-sm transition-opacity hover:opacity-90"
              >
                Get Started – $297/year
              </Link>
              <p className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:480ms] mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[16px] font-bold text-black">
                <span className="whitespace-nowrap">✓ Unlimited Cleanings</span>
                <span className="whitespace-nowrap">✓ Unlimited X-Rays</span>
                <span className="whitespace-nowrap">✓ Unlimited Exams</span>
              </p>
            </div>
            <HeroGleamText />
          </div>

          <div className="relative z-10 flex min-h-[300px] justify-center sm:min-h-[340px] lg:min-h-[380px] lg:justify-end">
            <div
              className="relative aspect-square w-full max-w-[min(100%,440px)] sm:max-w-[500px] lg:max-w-[min(100%,580px)] lg:translate-y-6 xl:max-w-[640px] xl:translate-y-10"
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
