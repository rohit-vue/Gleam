import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    label: "Early Detection",
    title: "X-Rays",
    src: "/assets/eyedetection.png",
    alt: "Dental X-ray films held up to the light",
    spotlight: false,
  },
  {
    label: "Preventive Care",
    title: "Cleanings",
    src: "/assets/preventivecare.png",
    alt: "Dental cleaning procedure close-up",
    spotlight: true,
  },
  {
    label: "Stay Ahead",
    title: "Exams",
    src: "/assets/stayahead.png",
    alt: "Dentist reviewing scans with a patient",
    spotlight: false,
  },
] as const;

export function ServiceCardsSection() {
  return (
    <section
      id="our-services"
      className="relative scroll-mt-24 overflow-hidden bg-[#F9F9F7] px-6 pt-14 font-helvetica-neue-regular md:scroll-mt-28 md:px-10 md:pt-20 lg:pt-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex justify-center md:mb-14">
          <Link
            href="/#become-a-member"
            className="rounded-[44px] bg-[#FFF86B] px-12 py-3.5 text-[20px] font-bold tracking-[0.07em] text-black shadow-sm transition-opacity hover:opacity-90 md:py-4 md:text-lg"
          >
            Become a Member
          </Link>
        </div>

        <div className="mx-auto grid max-w-md justify-items-center gap-8 md:max-w-lg md:gap-6 lg:max-w-5xl lg:grid-cols-3 lg:items-end lg:gap-6 xl:max-w-6xl">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`group relative w-full max-w-[20rem] transition-all duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] ${
                card.spotlight
                  ? "z-20 lg:scale-[1.05] motion-safe:lg:hover:scale-[1.08] -top-[10px]"
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
                  sizes="(max-width: 1023px) min(100vw, 17rem), 16rem"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                  aria-hidden
                />
                <p className="absolute left-4 top-4 max-w-[85%] text-[20px] font-medium text-white md:left-5 md:top-5 ">
                  {card.label}
                </p>
                <p className="absolute bottom-4 left-4 text-[46px] font-bold uppercase tracking-[0.03em] text-white md:bottom-5 md:left-5">
                  {card.title}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div
          className="pointer-events-none relative z-20 mx-auto w-full max-w-5xl"
          aria-hidden
        >
          <Image
            src="/assets/Prevention.png"
            alt=""
            width={1280}
            height={420}
            className="w-full max-h-[600px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
