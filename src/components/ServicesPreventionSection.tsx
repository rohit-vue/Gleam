const SECTION_BG = "#FAF9F6";


export function ServicesPreventionSection() {
  return (
    <section
      className="relative overflow-hidden "
      style={{ backgroundColor: SECTION_BG }}
    >
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[45%] w-full max-w-[100vw] -translate-x-1/2 -translate-y-1/2 select-none px-2 text-center font-alliance font-bold uppercase leading-[0.9] text-neutral-500/[0.26] text-[clamp(2.2rem,13vw,4.8rem)] tracking-[0.09em] sm:top-[48%] sm:px-3 sm:text-[clamp(2.8rem,10.5vw,5.8rem)] sm:tracking-[0.14em] md:top-1/2 md:text-[clamp(3.5rem,8.5vw,6.6rem)] md:tracking-[0.2em] lg:text-[130px] lg:tracking-[1.5rem]"
      >
        ALL COVERED
      </p>

      <div className="relative z-10 mx-auto flex min-h-[min(20vh,14rem)] flex-col items-center justify-end px-4 pb-3 pt-[4.25rem] text-center sm:min-h-[min(22vh,16rem)] sm:px-6 sm:pb-4 sm:pt-[5.5rem] md:min-h-[min(24vh,20rem)] md:px-8 md:pb-5 md:pt-[7rem] lg:min-h-[min(24vh,32rem)] lg:px-10 lg:pb-6 lg:pt-[10rem]">
        <h2 className="font-alliance text-[clamp(0.95rem,4.6vw,1.35rem)] font-bold uppercase leading-[1.12] tracking-[0.06em] text-neutral-900 sm:text-[clamp(1.05rem,3.6vw,1.5rem)] sm:tracking-[0.09em] md:text-[clamp(1.25rem,2.6vw,1.75rem)] md:tracking-[0.12em] lg:text-[30px] lg:leading-[1.08] lg:tracking-[0.2rem]">
          Prevention is where we start.
          <br />
          Not where we stop.
        </h2>

       
      </div>
    </section>
  );
}
