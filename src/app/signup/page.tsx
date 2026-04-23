import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <section className="-mt-16 md:-mt-[4.5rem] relative h-[100dvh] overflow-hidden bg-white">
      <div className="relative h-[100dvh]">
        <div className="pointer-events-none absolute inset-0 grid h-full grid-cols-1 grid-rows-2 md:grid-cols-[50%_50%] md:grid-rows-1">
          <div className="min-h-0 bg-[#ECECEC]" />
          <div className="min-h-0 bg-[#E9D22F]" />
        </div>

        <div className="relative z-10 h-full w-full">
          <header className="absolute inset-x-0 top-0 z-20 flex items-center px-4 py-4 sm:px-6 md:px-10">
            <Link
              href="/"
              className="shrink-0 text-[1.125rem] font-bold tracking-[0.08em] text-neutral-900 sm:text-[1.25rem] md:text-[24px]"
            >
              Gleam
            </Link>
          </header>

          <div className="flex h-full items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-[460px] rounded-[18px] bg-white px-4 py-5 shadow-[0_16px_28px_rgba(0,0,0,0.1)] sm:rounded-[20px] sm:px-7 sm:py-7 md:rounded-[24px] md:px-10 md:py-9">
              <div className="mx-auto w-full max-w-[320px]">
                <h1 className="font-helvetica-neue-regular text-center text-[1.875rem] font-black uppercase leading-[1.05] tracking-tight text-[#161616] sm:text-[2.25rem] md:text-[52px]">
                  Join
                </h1>
                <p className="mt-1 text-center text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#887A2A] sm:mt-1.5 sm:text-[0.72rem] md:text-[0.75rem]">
                </p>

                <SignupForm />

                <p className="mt-3 text-center text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#3E3E3E] sm:mt-4 sm:text-[0.62rem]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold uppercase text-[#887A2A] underline decoration-[#887A2A] decoration-2 underline-offset-[3px]"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
