const SECTION_BG = "#FAF9F6";


export function ServicesPreventionSection() {
  return (
    <section
      className="relative overflow-hidden "
      style={{ backgroundColor: SECTION_BG }}
    >
      <p
        aria-hidden
        className="pointer-events-none text-[130px] absolute left-1/2 top-[42%] w-full max-w-[100vw] -translate-x-1/2 -translate-y-1/2 select-none px-4 text-center font-alliance  font-bold uppercase leading-[0.92] tracking-[1.5rem] text-neutral-500/[0.26] sm:top-1/2"
      >
        ALL COVERED
      </p>

      <div className="relative z-10 mx-auto flex min-h-[min(24vh,28rem)] text-center items-center flex-col justify-end px-6 pb-4 pt-[6rem] md:min-h-[min(24vh,30rem)] md:px-10 md:pb-6 md:pt-[10rem] lg:min-h-[min(24vh,32rem)]">
        <h2 className="font-alliance text-[30px]  font-bold uppercase leading-[1.08] tracking-[0.2rem] text-neutral-900">
          Prevention is where we start.
          <br />
          Not where we stop.
        </h2>

       
      </div>
    </section>
  );
}
