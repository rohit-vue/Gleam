import Image from "next/image";

const BANNER_BG = "#FFF86B";

export function ServicesMembershipBannerSection() {
  return (
    <section style={{ backgroundColor: BANNER_BG }}>
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-[3.5rem] text-center sm:px-[5rem] md:px-[7rem] lg:px-0">
          <h2 className=" font-britanica-black text-[clamp(1.25rem,5.5vw,3.4rem)] font-normal leading-[0.96] tracking-[-0.02em] ">
            Every service. One Plan.
          </h2>
          <p className="mt-2 font-britanica-black text-[clamp(1.5rem,6vw,4rem)] font-normal leading-[0.95] text-black sm:mt-3 md:mt-4">
            $297/year
          </p>
          <button
            type="button"
            className="mt-4 inline-flex whitespace-nowrap rounded-full border-[2px] border-black bg-white px-5 py-2 font-britanica-black text-xs  font-normal  shadow-sm transition-opacity hover:opacity-90 sm:mt-6 sm:border-[3px] sm:px-8 sm:py-2.5 sm:text-base md:mt-7 md:px-10 md:py-3 lg:text-[clamp(1rem,1.4vw,3.4rem)]"
          >
            Become a Member
          </button>
        </div>

        <Image
          src="/assets/dental-mirror1.svg"
          alt=""
          aria-hidden
          width={220}
          height={260}
          className="pointer-events-none absolute -bottom-2 left-0 h-auto w-[8rem] select-none sm:-bottom-3 sm:left-2 sm:w-[10rem] md:-bottom-4 md:left-4 md:w-[12rem] lg:left-[7rem] lg:-bottom-[3px] lg:h-[142px] lg:w-[clamp(6.5rem,19vw,13rem)] lg:scale-[1.5]"
        />
        <Image
          src="/assets/dental-mirror2.svg"
          alt=""
          aria-hidden
          width={220}
          height={260}
          className="pointer-events-none absolute -bottom-2 right-0 h-auto w-[8rem] select-none sm:-bottom-3 sm:right-2 sm:w-[10rem] md:-bottom-4 md:right-4 md:w-[12rem] lg:right-[13rem] lg:bottom-[0rem] lg:h-[156px] lg:w-[clamp(6.5rem,19vw,13rem)] lg:scale-[1.35]"
        />
      </div>
    </section>
  );
}