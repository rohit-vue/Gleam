import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
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
            <div className="w-full max-w-[430px] rounded-[20px] bg-[#F7F7F7] px-5 py-6 shadow-[0_20px_35px_rgba(0,0,0,0.11)] sm:px-8 sm:py-7 md:rounded-[24px] md:px-9 md:py-8">
              <div className="mx-auto w-full max-w-[300px]">
                <h1 className="font-helvetica-neue-regular text-center text-[2.1rem] font-black uppercase leading-tight tracking-tight text-[#161616] sm:text-[3rem] md:text-[52px]">
                  Sign In
                </h1>
                <p className="mt-1.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#887A2A] sm:text-[0.75rem]">
                  Clinical Disruption
                </p>

                <LoginForm />

                <p className="mt-3 text-center text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#3E3E3E]">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="underline decoration-1 underline-offset-2">
                    Sign up
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
