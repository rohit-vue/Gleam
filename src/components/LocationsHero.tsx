const HERO_YELLOW = "#fff86b";

export function LocationsHero() {
  return (
    <section className="px-6 pb-14 pt-16 sm:px-10 sm:pb-16 sm:pt-20 md:px-14 md:pb-20 md:pt-24" style={{ backgroundColor: HERO_YELLOW }}>
      <p className="mb-4 font-mono text-[18px] font-bold uppercase tracking-[3px] text-[#00000094]">
        Greater Los Angeles
      </p>
      <h1 className="font-alliance mb-4 text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-none tracking-tight text-black">
        FIND YOUR
        <br />
        GLEAM.
      </h1>
      <p className="max-w-[30rem] text-[1.05rem] leading-relaxed text-black/60 sm:text-lg">
        6 locations across LA. Pick the one closest to you and get started with your membership.
      </p>
    </section>
  );
}
