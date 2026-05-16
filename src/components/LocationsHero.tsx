const HERO_YELLOW = "#fff86b";



export function LocationsHero() {

  return (

    <section

      className="px-6 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 md:px-14 md:pb-14 md:pt-16 lg:px-14 lg:pb-[3rem] lg:pt-[1rem]"

      style={{ backgroundColor: HERO_YELLOW }}

    >

      <p className="mb-2 font-space-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#00000094] sm:mb-3 sm:text-[13px] sm:tracking-[2px] md:mb-4 md:text-[16px] md:tracking-[2.5px] lg:mb-[2rem] lg:text-[18px] lg:tracking-[3px]">

        Greater Los Angeles

      </p>

      <h1 className="font-alliance mb-3 text-[clamp(2rem,9vw,2.75rem)] font-black uppercase leading-none tracking-tight text-black sm:mb-4 sm:text-[clamp(2.5rem,7vw,3.5rem)] md:text-[clamp(2.75rem,6.5vw,4rem)] lg:mb-4 lg:text-[clamp(3rem,8vw,5rem)]">

        SELECT YOUR

        LOCATION.

      </h1>

      <p className="max-w-[22rem] font-dm-sans text-[1rem] leading-relaxed text-black/60 sm:max-w-[26rem] sm:text-[1.125rem] md:max-w-[28rem] md:text-[1.25rem] lg:max-w-none lg:text-[26px]">

        Your membership works at any of our offices, but{" "}

        <br className="hidden lg:inline" />

        let&apos;s start with the one closest to you.

      </p>

    </section>

  );

}

