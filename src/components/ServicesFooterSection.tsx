import Image from "next/image";
import Link from "next/link";

const FOOTER_BG = "#050505";
const FOOTER_TEXT = "#A3A3A3";
const FOOTER_MUTED = "#6B7280";
const BRAND_YELLOW = "#FFF86B";

/** Google Maps place link — used by Company › Locations and Contact address. */
const FOOTER_LOCATIONS_MAPS_URL =
  "https://maps.google.com/?cid=4977324011827272902&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed";

const servicesLinks = [
  { href: "https://calabases.vercel.app/invisalign", label: "Invisalign" },
  { href: "/services", label: "Veneers" },
  { href: "/services", label: "Fillings & Crowns" },
  { href: "https://calabases.vercel.app/implants", label: "Implants" },
  { href: "/services", label: "Root Canal" },
  { href: "/services", label: "Sedation Dentistry" },
];

const companyLinks = [
  { href: "https://member.clerri.com/enrollment/accounts/create/?slug=TE3V", label: "Membership" },
  { href: "https://member.clerri.com/enrollment/accounts/create/?slug=TE3V", label: "Pricing" },
  { href: FOOTER_LOCATIONS_MAPS_URL, label: "Locations" },
];

export function ServicesFooterSection() {
  return (
    <section style={{ backgroundColor: FOOTER_BG }}>
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-7 sm:pt-12 md:px-10 lg:px-12 lg:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 md:grid-cols-4 md:gap-10 lg:gap-12">
          {/* Brand — full width on mobile, 1 col on tablet/desktop */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-dm-sans text-[2rem] font-semibold leading-none" style={{ color: BRAND_YELLOW }}>
              gleam
            </p>
            <p className="mt-4 max-w-[15rem] text-sm leading-relaxed" style={{ color: FOOTER_TEXT }}>
              Modern dental care that
              <br />
              doesn&apos;t feel like a chore.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { src: "/assets/Vector.png", label: "Instagram" },
                { src: "/assets/Vector (1).png", label: "TikTok" },
                { src: "/assets/Vector@2x.png", label: "X" },
              ].map(({ src, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900 transition-colors hover:border-neutral-400"
                >
                  <Image src={src} alt="" aria-hidden width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Services — col 1 on mobile/tablet */}
          <div className="col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: FOOTER_MUTED }}>
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: FOOTER_TEXT }}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — col 2 on mobile/tablet */}
          <div className="col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: FOOTER_MUTED }}>
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: FOOTER_TEXT }}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile, 1 col on tablet/desktop */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: FOOTER_MUTED }}>
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: FOOTER_TEXT }}>
              <li className="flex items-start gap-2.5">
                <Image src="/assets/map.png" alt="" aria-hidden width={14} height={14} className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <a
                  href={FOOTER_LOCATIONS_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  1019 N Fairfax Ave, West Hollywood, CA 90046
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Image src="/assets/call.png" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5 shrink-0" />
                <a href="tel:+13105550199" className="transition-colors hover:text-white">
                  (310) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Image src="/assets/mail.png" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5 shrink-0" />
                <a href="mailto:hello@gleam.co" className="transition-colors hover:text-white">
                  hello@gleam.co
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Image src="/assets/time.png" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5 shrink-0" />
                <span>Mon - Sat, 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-row items-center justify-between gap-3 text-xs">
            <p style={{ color: FOOTER_MUTED }}>© 2026 Gleam Dental. All rights reserved</p>
            <Link href="/privacy" className="transition-colors hover:text-white" style={{ color: FOOTER_MUTED }}>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
