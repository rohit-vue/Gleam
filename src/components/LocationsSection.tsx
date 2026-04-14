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
    city: "Encino",
    address: "16055 Ventura Blvd #405, Encino, CA 91436",
  },
  {
    city: "Valencia",
    address: "24517 Copper Hill Dr, Santa Clarita, CA 91354",
  },
  {
    city: "Northridge",
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
      className="scroll-mt-24 bg-[#FFF86B] px-4 py-14 md:scroll-mt-28 md:px-8 md:py-20 lg:py-24"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-7xl">
        <HeroSlideInOnView
          as="p"
          wrapperClassName="w-full"
          className="text-[32px] font-normal uppercase tracking-[0.2em] text-black font-britanica-black"
        >
          Location
        </HeroSlideInOnView>
        <HeroSlideInOnView
          as="h2"
          wrapperClassName="w-full"
          innerProps={{ id: "locations-heading" }}
          className="mt-2 max-w-4xl text-[64px] font-normal uppercase leading-[1.05] tracking-[0.08em] text-black font-britanica-black"
        >
          Greater Los Angeles
        </HeroSlideInOnView>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(14rem,30%)_1fr] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(16rem,28%)_1fr] xl:gap-10">
          <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-xl ring-1 ring-black/5">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`px-5 pb-3 md:px-7 md:pb-4 ${
                  i === 0 ? "pt-5 md:pt-6" : ""
                }`}
              >
                <p className="text-[24px] font-semibold uppercase tracking-[0.03em] text-black font-britanica-black">
                  {loc.city}
                </p>
                <p className="mt-1.5 w-[180px] text-[12px] text-black font-normal font-britanica-black leading-relaxed">
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

          <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-[20px] shadow-xl ring-1 ring-black/10">
            <Image
              src="/assets/maps.png"
              alt="Map of Greater Los Angeles showing Gleam office locations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
