import { HeroSlideInOnView } from "@/components/HeroSlideInOnView";

const ENCINO_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.226764913547!2d-118.36430352414511!3d34.0893308157709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2becf64873b91%3A0x451301d158fc9cc6!2s1019%20N%20Fairfax%20Ave%2C%20West%20Hollywood%2C%20CA%2090046%2C%20USA!5e0!3m2!1sen!2sin!4v1778741398057!5m2!1sen!2sin";

const locations = [
  {
    city: "West Hollywood",
    address: "1019 N Fairfax Ave, West Hollywood, CA 90046",
    href: "https://maps.app.goo.gl/hh6n8hLbP3rQuZsy6",
  },
  {
    city: "Calabasas",
    address: "26787 Agoura Rd, Calabasas, CA 91302",
    href: "https://maps.app.goo.gl/2rLSbYoPqviSrvfC6",
  },
  {
    city: "Encino",
    address: "16055 Ventura Blvd #400, Encino, CA 91436",
    href: "https://maps.app.goo.gl/biLbSiaG9yNpyE2X6",
  },
  {
    city: "Valencia",
    address: "24587 Copperhill Dr Santa Clarita, CA 91354",
    href: "https://maps.app.goo.gl/V3qFfx2DpYiLionQ9",
  },
  {
    city: "Northridge",
    address: "8954 Reseda Blvd #100, Northridge, CA 91324",
    href: "https://maps.app.goo.gl/pN1bHqUPp4oYK9WQ8",
  },
  {
    city: "La Puente",
    address: "864 N Hacienda Blvd La Puente, CA 91744",
    href: "https://maps.app.goo.gl/MgfLCDtZqEizpf8a6",
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-[4.65625rem]">
          <HeroSlideInOnView
            as="p"
            wrapperClassName="lg:w-auto"
            className="text-xl font-britanica-black uppercase tracking-[0.12em]  sm:text-2xl sm:tracking-[0.15em] md:text-[26px] md:tracking-[0.17em] lg:text-[28px] lg:tracking-[0.18em] xl:text-[32px] xl:tracking-[0.2em]"
          >
            Location
          </HeroSlideInOnView>
          <HeroSlideInOnView
            as="h2"
            wrapperClassName="w-full lg:flex-1"
            innerProps={{ id: "locations-heading" }}
            className="mt-2 max-w-[min(100%,56rem)] text-[1.75rem] font-semibold uppercase leading-[1.08] tracking-[0.05em] text-black sm:text-[2rem] sm:leading-[1.06] sm:tracking-[0.06em] md:text-[2.5rem] md:leading-[1.05] md:tracking-[0.065em] lg:mt-0 lg:text-[3rem] lg:tracking-[0.07em] xl:max-w-4xl xl:text-[66px] xl:leading-[1.05] xl:tracking-[2.08px]"
          >
            Greater Los Angeles
          </HeroSlideInOnView>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-7 lg:mt-14 lg:grid-cols-[minmax(14rem,30%)_1fr] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(16rem,28%)_1fr] xl:gap-[1.5px]">
          <div className="flex flex-col overflow-hidden rounded-l-[20px] bg-white shadow-xl ring-1 ring-black/5">
            {locations.map((loc, i) => (
              <a
                key={loc.city}
                href={loc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block px-5 pb-3 transition-opacity hover:opacity-80 md:px-7 md:pb-4 ${
                  i === 0 ? "pt-5 md:pt-6" : ""
                }`}
              >
                <p className="text-lg font-britanica-black uppercase tracking-[0.03em]  sm:text-xl md:text-[22px] xl:text-[24px]">
                  {loc.city}
                </p>
                <p className="mt-1.5 w-full max-w-[min(100%,22rem)] text-[11px] font-semibold leading-relaxed text-black group-hover:text-blue-600 sm:text-xs xl:w-[180px] xl:max-w-none xl:text-[12px]">
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
              </a>
            ))}
          </div>

          <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-r-[20px] shadow-xl ring-1 ring-black/10 sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px]">
            <iframe
              src={ENCINO_MAP_EMBED_SRC}
              title="Google Map — Lasting Impressions Dental Spa, Encino"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
