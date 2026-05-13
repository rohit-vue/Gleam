const SECTION_BG = "#FAF9F6";


export function ServicesPreventionSection() {
  return (
    <section
      className="relative overflow-hidden "
      style={{ backgroundColor: SECTION_BG }}
    >
      

      <div className="relative z-10 mx-auto flex min-h-[min(20vh,14rem)] flex-col  justify-end px-4 pb-3 pt-[4.25rem]  sm:min-h-[min(22vh,16rem)] sm:px-6 sm:pb-4 sm:pt-[5.5rem] md:min-h-[min(24vh,20rem)] md:px-8 md:pb-5 md:pt-[7rem] lg:min-h-[min(24vh,32rem)] lg:pl-[5.5rem] lg:pr-[10.5rem] lg:pb-6 lg:pt-[1rem]">
        <h2 className="font-alliance text-[clamp(0.95rem,4.6vw,1.35rem)] font-bold uppercase leading-[1.12] tracking-[0.06em] text-neutral-900 sm:text-[clamp(1.05rem,3.6vw,1.5rem)] sm:tracking-[0.09em] md:text-[clamp(1.25rem,2.6vw,1.75rem)] md:tracking-[0.12em] lg:text-[30px] lg:leading-[1.08] lg:pl-[16.5rem] lg:tracking-[0.2rem]">
          Prevention Is where we start.
          <br />
          Not where we stop.
        </h2>

       
      </div>
    </section>
  );
}
