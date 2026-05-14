import Image from "next/image";
const PricingBanner = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden border-b-[6px] border-black bg-[#FFF04D] px-4 pt-12 md:border-b-[10px] md:px-8 md:pt-16 lg:px-16">
      <div className="relative flex w-full max-w-[1400px] items-end justify-between gap-2  md:gap-4">
        {/* Left hand: original desktop column; absolute corners only below md */}
        <div className="pointer-events-none relative left-[14%] z-10 w-[21%] max-w-[350px] shrink-0 select-none max-md:absolute max-md:bottom-0 max-md:left-[-1.688rem] max-md:w-[min(34vw,9.5rem)] max-md:max-w-none md:left-[15%] md:w-[20%]">
          <Image
            src="/assets/dental-mirror1.svg"
            alt="Hand holding dental mirror"
            width={400}
            height={500}
            priority
            className="block h-auto w-full object-contain object-bottom mix-blend-multiply"
          />
        </div>

        <div className="z-20 flex min-w-0 max-w-[min(100%,22rem)] shrink-1 flex-1 flex-col px-2 pb-[clamp(1.5rem,4vw,4rem)] text-center max-md:mx-auto sm:max-w-none sm:px-6 md:max-w-none md:px-0">
          <h1 className="font-semibold leading-[1.1] tracking-tight text-[#050505] text-[clamp(1.25rem,6.5vw,10.5rem)]">
            <span className="max-md:block">Every service.</span>{" "}
            <span className="max-md:block">One Plan.</span>
          </h1>

          <div className="mb-5 mt-2 flex items-baseline justify-center md:mb-8 md:mt-4">
            <span className="font-semibold leading-none tracking-tighter text-[#050505] text-[clamp(2.5rem,6.5vw,8.5rem)]">
              $297
            </span>
            <span className="ml-1 font-semibold leading-none text-[#050505] text-[clamp(1.2rem,5vw,6.5rem)] md:ml-2">
              /year
            </span>
          </div>

          <button
            type="button"
            className="mx-auto inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-black bg-white font-semibold text-black shadow-[0_1px_0_0_#000] transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_2px_0_0_#000] text-[clamp(0.75rem,1.5vw,1.25rem)] px-3 py-1.5 sm:px-4 sm:py-2 md:border-2 md:px-5 md:py-2 md:shadow-[0_2px_0_0_#000] md:hover:shadow-[0_3px_0_0_#000] lg:px-6"
          >
            Become a Member
          </button>
        </div>

        <div className="pointer-events-none relative right-[13%] z-10 w-[22%] max-w-[350px] shrink-0 select-none max-md:absolute max-md:bottom-0 max-md:right-[-1.125rem] max-md:w-[min(33vw,9.5rem)] max-md:max-w-none md:w-[18%]">
          <Image
            src="/assets/dental-mirror2.svg"
            alt="Hand holding dental tool"
            width={400}
            height={500}
            priority
            className="block h-auto w-full object-contain object-bottom mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
