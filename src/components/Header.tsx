"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/#who-is-gleam", label: "Who is Gleam?" },
  { href: "/#locations", label: "Locations" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isServicesPage = pathname?.startsWith("/services");
  const visibleNavLinks = isServicesPage
    ? navLinks.filter(({ label }) => label !== "Locations")
    : navLinks;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-[4.5rem] md:px-10 font-britanica-black">
        <div className="flex min-w-0 flex-1 items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="shrink-0 text-[24px] font-bold tracking-[0.08em] text-neutral-900"
          >
            Gleam
          </Link>
          <nav
            className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            {visibleNavLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap text-[18px] font-bold text-neutral-800 transition-colors hover:text-neutral-950 md:text-base"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {!isServicesPage ? (
          <Link
            href="/#become-a-member"
            className="shrink-0 rounded-[12px] bg-[#FFF86B] px-4 py-2.5 text-[16px] font-bold text-neutral-900 shadow-sm transition-opacity hover:opacity-90 md:px-5"
          >
            Become a Member
          </Link>
        ) : null}
      </div>
    </header>
  );
}
