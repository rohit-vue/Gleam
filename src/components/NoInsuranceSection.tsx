import Image from "next/image";


import { LocationMarqueeBar } from "@/components/LocationMarqueeBar";

const locations = ["weho", "encino", "calabasas", "northridge", "la puente"] as const;

export function NoInsuranceSection() {
  return (
    <div className="w-full font-helvetica-neue-regular">
      <LocationMarqueeBar locations={locations} />

      <section className="relative w-full overflow-hidden" aria-labelledby="no-insurance-heading">
        <div className="relative min-h-[200px] w-full sm:min-h-[240px] md:min-h-[320px] lg:min-h-[400px] xl:min-h-[420px]">
          <Image src="/assets/noinsurance.png" alt="" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-black/40 md:bg-black/35" aria-hidden />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:py-16 lg:py-20">
            <p className="mb-2 text-center text-[clamp(0.7rem,1.4vw,1.1rem)] font-bold  tracking-[0.2em] text-[#FFF86B] sm:mb-3">
              access unlimited dental care
            </p>
            <h2
              id="no-insurance-heading"
              className="w-full max-w-4xl text-center text-[clamp(1.65rem,6.5vw,4.625rem)] font-britanica-black uppercase leading-[1.08]  text-white sm:leading-[1.1] md:leading-[1.1]"
            >
              <span className="block">No Insurance.</span>
              <span className="block">No problem.</span>
            </h2>
          </div>
        </div>
      </section>

      
    </div>
  );
}
