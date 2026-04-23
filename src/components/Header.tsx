"use client";

import type { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const navLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/#who-is-gleam", label: "Who is Gleam?" },
  { href: "/#locations", label: "Locations" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 text-neutral-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthShellPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password";
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const isServicesPage = pathname?.startsWith("/services");
  const visibleNavLinks = isServicesPage
    ? navLinks.filter(({ label }) => label !== "Locations")
    : navLinks;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Re-read session when the route changes so we pick up cookies after a server-action
  // login redirect (Header stays mounted across /login → /, so []-only sync stays stale).
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    void supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthReady(true);
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const handleSignOut = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setMenuOpen(false);
      router.push("/");
      router.refresh();
    }
  };

  if (isAuthShellPage) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white">
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-30 bg-neutral-900/35 md:top-[4.5rem] lg:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="relative z-40 flex h-16 w-full items-center justify-between gap-3 px-4 font-bold font-helvetica-neue-regular sm:gap-4 sm:px-6 md:h-[4.5rem] md:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-10">
          <Link
            href="/"
            className="shrink-0 text-[1.125rem] font-bold tracking-[0.08em] text-neutral-900 sm:text-[1.25rem] md:text-[24px]"
            onClick={() => setMenuOpen(false)}
          >
            Gleam
          </Link>
          <nav
            className="hidden min-w-0 flex-1 items-center gap-6 lg:flex lg:gap-8"
            aria-label="Primary"
          >
            {visibleNavLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap text-base font-bold text-neutral-800 transition-colors hover:text-neutral-950"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {authReady ? (
            user ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="hidden rounded-[12px] bg-[#FFF86B] px-5 py-2.5 text-base font-bold text-neutral-900 shadow-sm transition-opacity hover:opacity-90 lg:inline-flex"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden rounded-[12px] bg-[#FFF86B] px-5 py-2.5 text-base font-bold text-neutral-900 shadow-sm transition-opacity hover:opacity-90 lg:inline-flex"
              >
                Sign In
              </Link>
            )
          ) : null}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile / tablet menu */}
        <div
          id={menuId}
          className={`absolute left-0 right-0 top-full border-b border-neutral-200 bg-white shadow-lg transition-[visibility,opacity,transform] duration-200 ease-out lg:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <nav className="flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6" aria-label="Primary mobile">
            {visibleNavLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-3.5 text-lg font-bold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-neutral-950 active:bg-neutral-100 sm:py-3 sm:text-base"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {authReady ? (
              user ? (
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="mt-2 rounded-[12px] bg-[#FFF86B] px-4 py-3.5 text-center text-base font-bold text-neutral-900 shadow-sm transition-opacity hover:opacity-90 sm:mt-3"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="mt-2 rounded-[12px] bg-[#FFF86B] px-4 py-3.5 text-center text-base font-bold text-neutral-900 shadow-sm transition-opacity hover:opacity-90 sm:mt-3"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
              )
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}
