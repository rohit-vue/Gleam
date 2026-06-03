import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    label: ["Early", "Detection"] as const,
    title: "X-Rays",
    src: "/assets/eyedetection.png",
    alt: "Dental X-ray films held up to the light",
    spotlight: false,
  },
  {
    label: ["Preventive", "Care"] as const,
    title: "Cleanings",
    src: "/assets/preventivecare.png",
    alt: "Dental cleaning procedure close-up",
    spotlight: true,
  },
  {
    label: ["Stay", "Ahead"] as const,
    title: "Exams",
    src: "/assets/stayahead.png",
    alt: "Dentist reviewing scans with a patient",
    spotlight: false,
  },
] as const;

const mobileSlideOrderClass: Record<(typeof cards)[number]["title"], string> = {
  Cleanings: "max-lg:order-1",
  "X-Rays": "max-lg:order-2",
  Exams: "max-lg:order-3",
};

export function ServiceCardsSection() {
  return (
    <section
      id="our-services"
      className="relative scroll-mt-24 overflow-hidden bg-[#F9F9F7] px-6 pt-14 font-helvetica-neue-regular md:scroll-mt-28 md:px-10 md:pt-20 lg:pt-[2rem]"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex justify-center md:mb-14">
          <Link
            href="/locations"
            className="rounded-[44px] bg-[#FFF86B] px-6 py-2.5 text-[16px] font-bold tracking-[0.05em] text-black shadow-sm transition-opacity hover:opacity-90 sm:px-8 sm:py-3 sm:text-[15px] sm:tracking-[0.06em] md:px-10 md:py-3.5 md:text-lg md:tracking-[0.07em] lg:px-12 lg:py-4"
          >
            Become a Member
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide max-lg:pl-0 lg:grid lg:mx-auto lg:max-w-5xl lg:grid-cols-3 lg:items-end lg:gap-6 lg:overflow-visible xl:max-w-6xl">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`group relative w-[68vw] max-w-[14.5rem] shrink-0 snap-center md:max-w-[15.5rem] md:w-[30vw] lg:order-none lg:w-full lg:max-w-none lg:shrink transition-all duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] ${mobileSlideOrderClass[card.title]} ${
                card.spotlight
                  ? "z-50  motion-safe:lg:hover:scale-[1.08] "
                  : "z-10"
              }`}
            >
              <div
                className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-shadow duration-500 ease-out motion-safe:group-hover:shadow-2xl ${
                  card.spotlight ? "shadow-xl lg:shadow-2xl" : ""
                }`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                  sizes="(max-width: 1023px) min(68vw, 14.5rem), 16rem"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                  aria-hidden
                />
                <p className="absolute inset-x-3 top-3 max-w-[calc(100%-1.5rem)] text-left text-[15px] font-medium leading-tight text-white md:inset-x-4 md:top-4 md:text-base lg:inset-x-auto lg:left-5 lg:top-5 lg:max-w-[85%] lg:text-[20px]">
                  <span className="mb-0.5 lg:mb-2">{card.label[0]}</span>
                  <span className="block">{card.label[1]}</span>
                </p>
                <p className="absolute inset-x-3 bottom-3 max-w-[calc(100%-1.5rem)] text-[1.75rem] font-medium uppercase leading-[0.95] tracking-[0.02em] text-[#F9F36B] md:inset-x-4 md:bottom-4 md:text-[1.875rem] lg:inset-x-auto lg:bottom-5 lg:left-5 lg:max-w-none lg:text-[46px] lg:leading-normal lg:tracking-[0.03em]">
                  <span className="block text-[11px] normal-case lowercase text-white lg:text-[19px]">unlimited</span>
                  {card.title}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div
          className="pointer-events-none relative z-20 mx-auto h-[clamp(14dvh,19dvh,22dvh)] w-full max-w-5xl md:h-[240px] lg:h-[361px]"
          aria-hidden
        >
          <Image
            src="/assets/Prevention.png"
            alt=""
            width={1280}
            height={420}
            className="max-lg:h-full w-full max-h-[600px] object-contain object-center drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
