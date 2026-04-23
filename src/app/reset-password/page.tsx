"use client";

import { useEffect } from "react";
import Link from "next/link";
import { updatePassword, type AuthFormState } from "@/app/auth/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/toast/ToastProvider";
import { useFormState } from "react-dom";

const initialState: AuthFormState = null;

export default function ResetPasswordPage() {
  const [state, formAction] = useFormState(updatePassword, initialState);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error, toast]);

  useEffect(() => {
    if (!state?.success) return;
    toast.success(state.success);
    const timer = window.setTimeout(() => {
      router.push("/login");
      router.refresh();
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [router, state?.success, toast]);

  return (
    <section className="-mt-16 md:-mt-[4.5rem] relative min-h-[100dvh] overflow-x-hidden bg-white">
      <div className="relative min-h-[100dvh]">
        <div className="pointer-events-none absolute inset-0 grid min-h-[100dvh] grid-cols-1 grid-rows-2 md:grid-cols-[50%_50%] md:grid-rows-1">
          <div className="min-h-0 bg-[#ECECEC]" />
          <div className="min-h-0 bg-[#E9D22F]" />
        </div>

        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col">
          <header className="absolute inset-x-0 top-0 z-20 flex items-center px-4 py-4 sm:px-6 md:px-10">
            <Link
              href="/"
              className="shrink-0 text-[1.125rem] font-bold tracking-[0.08em] text-neutral-900 sm:text-[1.25rem] md:text-[24px]"
            >
              Gleam
            </Link>
          </header>

          <div className="flex flex-1 items-center justify-center px-4 pb-8 pt-2 sm:px-6 md:px-8 md:pb-12 md:pt-4">
            <div className="w-full max-w-[460px] rounded-[20px] bg-[#F7F7F7] px-5 py-8 shadow-[0_20px_35px_rgba(0,0,0,0.11)] sm:px-8 sm:py-10 md:rounded-[24px] md:px-10 md:py-12">
              <div className="mx-auto w-full max-w-[320px]">
                <h1 className="font-helvetica-neue-regular text-center text-[2rem] font-black uppercase leading-tight tracking-tight text-[#161616] sm:text-[2.6rem] md:text-[3.1rem]">
                  New
                </h1>
                <p className="mt-1.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#887A2A] sm:text-[0.75rem]">
                  Password
                </p>

                <form action={formAction} className="mt-8 space-y-6">
                  
                  <label className="block">
                    <span className="block text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#494949] sm:text-[0.85rem]">
                      New Password
                    </span>
                    <input
                      name="password"
                      type="password"
                      required
                      autoComplete="new-password"
                      minLength={12}
                      placeholder=""
                      className="mt-2 w-full border-b border-[#B5B5B5] bg-[#E8F0FA] pb-2.5 pl-2 text-base tracking-[0.08em] text-[#242424] placeholder:text-[#BFBFBF] focus:border-[#1f1f1f] focus:outline-none sm:mt-[0.85rem]"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#494949] sm:text-[0.85rem]">
                      Confirm Password
                    </span>
                    <input
                      name="confirmPassword"
                      type="password"
                      required
                      autoComplete="new-password"
                      minLength={12}
                      placeholder=""
                      className="mt-2 w-full border-b border-[#B5B5B5] bg-[#E8F0FA] pb-2.5 pl-2 text-base tracking-[0.08em] text-[#242424] placeholder:text-[#BFBFBF] focus:border-[#1f1f1f] focus:outline-none sm:mt-[0.85rem]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#151A20] py-3.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#E5CD31] transition-opacity hover:opacity-95"
                  >
                    Update Password
                  </button>
                </form>

                <p className="mt-4 text-center text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#3E3E3E]">
                  Back to{" "}
                  <Link href="/login" className="underline decoration-1 underline-offset-2">
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
