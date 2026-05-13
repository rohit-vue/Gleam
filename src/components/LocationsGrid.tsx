import Link from "next/link";

const CARD_BG = "#F5F5F0";
type Location = {
  number: string;
  name: string;
  address: string[];
  hours: string;
  href: string;
};

const LOCATIONS: Location[] = [   
  {
    number: "01",
    name: "West Hollywood",
    address: ["8861 Santa Monica Blvd", "West Hollywood, CA 90069"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=VN7R",
  },
  {
    number: "02",
    name: "Calabasas",
    address: ["23501 Park Sorrento", "Calabasas, CA 91302"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=QN5D",
  },
  {
    number: "03",
    name: "Encino",
    address: ["16101 Ventura Blvd", "Encino, CA 91436"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=TE3V",
  },
  {
    number: "04",
    name: "Valencia",
    address: ["24201 Valencia Blvd", "Valencia, CA 91355"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=QX3X",
  },
  {
    number: "05",
    name: "Northridge",
    address: ["9420 Reseda Blvd", "Northridge, CA 91324"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=DU9M",
  },
  {
    number: "06",
    name: "La Puente",
    address: ["1431 N Hacienda Blvd", "La Puente, CA 91744"],
    hours: "Mon – Sat, 8am – 6pm",
    href: "https://member.clerri.com/enrollment/accounts/create/?slug=PX5G",
  },
];

function LocationCard({ loc }: { loc: Location }) {
  return (
    <Link
      href={loc.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[220px] flex-col justify-between rounded-[14px] border-2 border-transparent p-8 transition-colors duration-150 hover:border-black hover:bg-white sm:p-9"
      style={{ backgroundColor: CARD_BG }}
    >
      <div>
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[2px] text-neutral-400">
          {loc.number}
        </p>
        <h2 className="mb-2 font-alliance text-[clamp(1.5rem,3.5vw,2rem)] font-black uppercase  leading-tight text-black">
          {loc.name}
        </h2>
        <p className="mb-1 text-[14px] leading-relaxed text-neutral-500">
          {loc.address[0]}
          <br />
          {loc.address[1]}
        </p>
        <p className="mb-6 font-mono text-[11px] tracking-[0.5px] text-neutral-400">
          {loc.hours}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span
          className="rounded-full bg-black px-7 py-3 text-[13px] font-bold tracking-[0.3px] text-[#FFF86B] transition-colors duration-150 group-hover:bg-[#FFF86B] group-hover:text-black"
        >
          Become a Member
        </span>
        <span className="text-[28px] text-neutral-200 transition-all duration-150 group-hover:translate-x-1 group-hover:text-black">
          →
        </span>
      </div>
    </Link>
  );
}

export function LocationsGrid() {
  return (
    <section className="px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-16">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {LOCATIONS.map((loc) => (
          <LocationCard key={loc.number} loc={loc} />
        ))}
      </div>
    </section>
  );
}
