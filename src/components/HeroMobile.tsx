import Image from "next/image";
import Link from "next/link";

const heroMobileBackground =
  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #FFF86B 100%)";

export function HeroMobile() {
  return (
    <div
      id="hero"
      className="relative overflow-hidden px-4 pb-10 pt-6 font-britanica-black md:hidden"
      style={{ background: heroMobileBackground }}
    >
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <p className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:160ms] text-[20px] font-bold tracking-wide text-black">
          One Annual Membership
        </p>
        <h1 className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:160ms] mt-3 text-[1.75rem] font-semibold leading-tight tracking-wide text-black">
          Unlimited dental care
          <br />
          across Los Angeles
        </h1>
        <Link
          href="/locations"
          className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:320ms] mt-6 inline-flex rounded-full bg-white px-4 py-2 text-[14px] font-bold text-black tracking-wide shadow-md transition-opacity hover:opacity-90"
        >
          Get Started – $297/year
        </Link>
        <div className="motion-safe:animate-slide-in-ltr motion-safe:[animation-delay:480ms] mt-6 flex justify-center">
          <div className="flex flex-col items-start gap-y-1.5 text-sm font-bold leading-snug text-black">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/assets/tick1.svg"
                alt=""
                width={10}
                height={8}
                className="h-2 w-2.5 shrink-0 object-contain"
                aria-hidden
              />
              Unlimited Cleanings
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/assets/tick1.svg"
                alt=""
                width={10}
                height={8}
                className="h-2 w-2.5 shrink-0 object-contain"
                aria-hidden
              />
              Unlimited X-Rays
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/assets/tick1.svg"
                alt=""
                width={10}
                height={8}
                className="h-2 w-2.5 shrink-0 object-contain"
                aria-hidden
              />
              Unlimited Exams
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
