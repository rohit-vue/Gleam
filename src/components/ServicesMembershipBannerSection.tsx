import Image from "next/image";

const BANNER_BG = "#FFF86B";

export function ServicesMembershipBannerSection() {
  return (
    <section style={{ backgroundColor: BANNER_BG }}>
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-[3.5rem] text-center sm:px-[5rem] md:px-[7rem] lg:px-0">
          <h2 className=" font-britanica-black text-[clamp(1.25rem,4.5vw,4.4rem)] font-normal leading-[0.96] tracking-[-0.02em] lg:text-[56.23px]">
            Every service. One Plan.
          </h2>
          <p className="mt-2 font-britanica-black text-[clamp(1.5rem,4.5vw,4.4rem)] font-normal leading-[0.95] text-black sm:mt-3 md:mt-4 lg:text-[56.23px]">
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
          className="pointer-events-none absolute -bottom-2 left-0 h-auto w-[8rem] select-none sm:-bottom-3 sm:left-2 sm:w-[10rem] md:-bottom-2 md:left-[9rem] md:h-[183px] md:w-[clamp(5rem,13vw,9rem)] md:[transform:scale(1.75)] lg:left-[16rem] lg:-bottom-[3px] lg:h-[198px] lg:w-[clamp(6.5rem,19vw,13rem)] lg:[transform:none]"
        />
        <Image
          src="/assets/dental-mirror2.svg"
          alt=""
          aria-hidden
          width={220}
          height={260}
          className="pointer-events-none absolute -bottom-2 right-0 h-auto w-[8rem] select-none sm:-bottom-3 sm:right-2 sm:w-[10rem] md:-bottom-1 md:right-[9rem] md:h-[196px] md:w-[clamp(5rem,13vw,9rem)] md:[transform:scale(1.75)] lg:right-[15rem] lg:bottom-[0rem] lg:h-[214px] lg:w-[clamp(6.5rem,19vw,13rem)] lg:[transform:none]"
        />
      </div>
    </section>
  );
}