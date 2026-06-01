import Image from "next/image";
import Link from "next/link";



const PricingBanner = () => {

  return (

    <section className="relative w-full overflow-hidden border-b-[6px] border-black bg-[#FFF566] md:border-b-[10px]">

      <div className="relative mx-auto flex w-full max-w-[1400px] items-start justify-center px-[clamp(0.875rem,5vw,2rem)] pb-[clamp(1rem,4vw,2.25rem)] pt-[clamp(-5.375rem,8.5vw,11.75rem)]  md:pb-[clamp(1.5rem,5.5vw,3rem)] lg:min-h-[clamp(16rem,38vw,30rem)] lg:px-[clamp(1rem,5vw,3.5rem)] lg:pb-[clamp(2rem,5vw,4.5rem)] lg:pt-[clamp(0.25rem,3.75vw,10.5rem)]">

        {/* Left — corners on small screens; desktop inset at lg */}

        <div className="pointer-events-none absolute bottom-0 left-[34px] z-10 w-[clamp(3.5rem,26vw,8.5rem)] max-w-[200px] shrink-0 select-none md:left-[9rem] md:w-[clamp(4rem,21vw,30rem)] md:max-w-[260px] lg:left-[clamp(5rem,17.35%,17rem)] lg:w-[clamp(11rem,21%,24rem)] lg:max-w-[28%]">

          <Image

            src="/assets/dental-mirror1.svg"

            alt="Hand holding dental mirror"

            width={400}

            height={500}

            priority

            className="block h-auto w-full object-contain object-bottom lg:h-[clamp(19rem,22vw,26rem)] lg:w-auto lg:max-w-full"

          />

        </div>



        {/* Right — corners on small screens; desktop inset at lg */}

        <div className="pointer-events-none absolute bottom-0 right-[40px] z-10 w-[clamp(3.5rem,24vw,8.5rem)] max-w-[200px] shrink-0 select-none md:right-[8.25rem] md:w-[clamp(4rem,21vw,26rem)] md:max-w-[260px] lg:right-[clamp(5rem,16%,17rem)] lg:w-[clamp(11rem,21%,24rem)] lg:max-w-[28%]">

          <Image

            src="/assets/dental-mirror2.svg"

            alt="Hand holding dental tool"

            width={400}

            height={500}

            priority

            className="block h-auto w-full object-contain object-bottom lg:h-[clamp(19rem,22vw,26rem)] lg:w-auto lg:max-w-full"

          />

        </div>



        {/* Center column — extra side inset below lg so copy clears the gloves */}

        <div className="relative z-20 flex w-full max-w-[min(100%,34rem)] flex-col items-center px-[clamp(1rem,11vw,4rem)] text-center md:max-w-[min(100%,40rem)] lg:max-w-none lg:px-[clamp(0.5rem,8vw,5rem)]">

          <h1 className="max-w-[22ch] font-britanica-black  leading-[1.05] tracking-tight text-[#050505] text-[clamp(1.125rem,6.8vw,2.25rem)] text-balance sm:max-w-none md:text-[clamp(1.25rem,4.2vw,3rem)] lg:text-[clamp(1.125rem,5.05vw,14.25rem)]">

            Every service. One Plan.

          </h1>



          <p className="mt-[clamp(0.75rem,3vw,2rem)] font-britanica-black leading-none tracking-tight text-[#050505] text-[clamp(1.28rem,7.2vw,2.65rem)] md:text-[clamp(1.35rem,5vw,3.75rem)] lg:mt-[clamp(1.25rem,2.5vw,2.75rem)] lg:text-[clamp(1.35rem,5.05vw,11rem)]">

            <span>$297</span>

            <span className="font-bold"> /year</span>

          </p>



          <Link

            href="/locations"

            className="mt-[clamp(1rem,5.5vw,14.75rem)] md:mt-[clamp(1rem,4.5vw,14.75rem)] inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-2 border-black bg-white px-[clamp(0.625rem,3.25vw,1.125rem)] py-[clamp(0.38rem,1.2vw,0.55rem)] text-center text-[clamp(-6.1875rem,3.6vw,1.125rem)] font-britanica-black text-black transition-colors hover:bg-neutral-100 md:border-[3px] md:px-[clamp(1rem,5vw,2rem)] md:text-[clamp(-13.0625rem,1.8vw,18.25rem)] lg:mt-[clamp(1.5rem,4vw,15rem)] lg:px-[clamp(1.25rem,4.5vw,2.25rem)] lg:py-[clamp(0.4rem,1.1vw,0.55rem)] lg:text-[1.8rem]"

          >

            Become a Member

          </Link>

        </div>

      </div>

    </section>

  );

};



export default PricingBanner;


