import Image from "next/image";

import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

const locations = [
  {
    city: "West Hollywood",
    address: "7222 N Fairfax Ave, West Hollywood, CA 90046",
  },
  {
    city: "Calabasas",
    address: "23501 Agoura Rd, Calabasas, CA 91302",
  },
  {
    city: "Encɪno",
    address: "16055 Ventura Blvd #405, Encino, CA 91436",
  },
  {
    city: "Valencɪa",
    address: "24517 Copper Hill Dr, Santa Clarita, CA 91354",
  },
  {
    city: "Northrɪdge",
    address: "8954 Reseda Blvd #200, Northridge, CA 91324",
  },
  {
    city: "La Puente",
    address: "514 N Hacienda Blvd, La Puente, CA 91744",
  },
] as const;

export function LocationsSection() {
  return (
    <section
      id="locations"
      className="scroll-mt-24 bg-[#FFF86B] px-4 py-10 font-helvetica-neue-regular sm:px-5 sm:py-12 md:scroll-mt-28 md:px-8 md:py-16 lg:py-24"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-7xl">
        <HeroSlideInOnView
          as="p"
          wrapperClassName="w-full"
          className="text-xl font-normal uppercase tracking-[0.12em] text-black sm:text-2xl sm:tracking-[0.15em] md:text-[26px] md:tracking-[0.17em] lg:text-[28px] lg:tracking-[0.18em] xl:text-[32px] xl:tracking-[0.2em]"
        >
          Locatɪon
        </HeroSlideInOnView>
        <HeroSlideInOnView
          as="h2"
          wrapperClassName="w-full"
          innerProps={{ id: "locations-heading" }}
          className="mt-2 max-w-[min(100%,56rem)] text-[1.75rem] font-normal uppercase leading-[1.08] tracking-[0.05em] text-black sm:text-[2rem] sm:leading-[1.06] sm:tracking-[0.06em] md:text-[2.5rem] md:leading-[1.05] md:tracking-[0.065em] lg:text-[3rem] lg:tracking-[0.07em] xl:max-w-4xl xl:text-[64px] xl:leading-[1.05] xl:tracking-[0.08em]"
        >
          Greater Los Angeles
        </HeroSlideInOnView>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-7 lg:mt-14 lg:grid-cols-[minmax(14rem,30%)_1fr] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(16rem,28%)_1fr] xl:gap-10">
          <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-xl ring-1 ring-black/5">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`px-5 pb-3 md:px-7 md:pb-4 ${
                  i === 0 ? "pt-5 md:pt-6" : ""
                }`}
              >
                <p className="text-lg font-semibold uppercase tracking-[0.03em] text-black sm:text-xl md:text-[22px] xl:text-[24px]">
                  {loc.city}
                </p>
                <p className="mt-1.5 w-full max-w-[min(100%,22rem)] text-[11px] font-normal leading-relaxed text-black sm:text-xs xl:w-[180px] xl:max-w-none xl:text-[12px]">
                  {loc.address}
                </p>
                {i < locations.length - 1 ? (
                  <div
                    className="mt-5 flex justify-center md:mt-6"
                    aria-hidden
                  >
                    <div className="h-px w-[100%] bg-black sm:w-[100%]" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-[20px] shadow-xl ring-1 ring-black/10 sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px]">
            <Image
              src="/assets/maps.png"
              alt="Map of Greater Los Angeles showing Gleam office locations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 72vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
