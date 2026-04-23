"use client";

import { useEffect } from "react";
import { loginWithUsername, type AuthFormState } from "@/app/auth/actions";
import { useToast } from "@/components/toast/ToastProvider";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState: AuthFormState = null;

export function LoginForm() {
  const [state, formAction] = useFormState(loginWithUsername, initialState);
  const toast = useToast();

  useEffect(() => {
    if (!state?.error) return;
    toast.error(state.error);
  }, [state?.error, toast]);

  return (
    <form action={formAction} className="mt-5 space-y-6 sm:mt-6 sm:space-y-7 md:space-y-8">
      <label className="block">
        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#494949] sm:text-[0.85rem]">
          Username / Email
        </span>
        <input
          name="identifier"
          type="text"
          required
          autoComplete="username email"
          placeholder=""
          className="mt-2 w-full border-b border-[#B5B5B5] bg-[#E8F0FA] pb-2.5 pl-2 text-base tracking-[0.12em] text-[#242424] placeholder:text-[#BFBFBF] focus:border-[#1f1f1f] focus:outline-none sm:mt-[0.85rem]"
        />
      </label>

      <label className="block">
        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#494949] sm:text-[0.85rem]">
          Password
        </span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder=""
          className="mt-2 w-full border-b border-[#B5B5B5] bg-[#E8F0FA] pb-2.5 pl-2 text-base tracking-[0.12em] text-[#242424] placeholder:text-[#BFBFBF] focus:border-[#1f1f1f] focus:outline-none sm:mt-[0.85rem]"
        />
        <div className="mt-2 text-right">
          <Link
            href="/forgot-password"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#5A5A5A] underline decoration-1 underline-offset-2 hover:text-[#222]"
          >
            Forgot Password?
          </Link>
        </div>
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-[#151A20] py-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#E5CD31] transition-opacity hover:opacity-95 sm:mt-6 md:mt-7"
      >
        Sign In
      </button>
    </form>
  );
}
