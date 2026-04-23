"use client";

import { useEffect } from "react";
import { signupWithProfile, type AuthFormState } from "@/app/auth/actions";
import { useToast } from "@/components/toast/ToastProvider";
import { useFormState } from "react-dom";

const initialState: AuthFormState = null;

export function SignupForm() {
  const [state, formAction] = useFormState(signupWithProfile, initialState);
  const toast = useToast();

  useEffect(() => {
    if (!state?.error) return;
    toast.error(state.error);
  }, [state?.error, toast]);

  return (
    <form action={formAction} className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4 md:space-y-6">
      <label className="block">
        <span className="block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#494949] sm:text-[0.78rem] md:text-[0.85rem]">
          Username
        </span>
        <input
          type="text"
          name="username"
          required
          autoComplete="username"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder=""
          className="mt-1.5 w-full border-b border-[#887A2A] bg-[#E8F0FA] pb-2 pl-2 text-sm tracking-[0.12em] text-[#242424] placeholder:normal-case placeholder:text-[0.65rem] placeholder:tracking-[0.14em] placeholder:text-[#BFBFBF] focus:border-[#161616] focus:outline-none sm:mt-2 sm:placeholder:text-[0.7rem]"
        />
      </label>

      <label className="block">
        <span className="block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#494949] sm:text-[0.78rem] md:text-[0.85rem]">
          Email address
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder=""
          className="mt-1.5 w-full border-b border-[#887A2A] bg-[#E8F0FA] pb-2 pl-2 text-sm tracking-[0.12em] text-[#242424] placeholder:text-[0.65rem] placeholder:tracking-[0.14em] placeholder:text-[#BFBFBF] focus:border-[#161616] focus:outline-none sm:mt-2 sm:placeholder:text-[0.7rem]"
        />
      </label>

      <label className="block">
        <span className="block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#494949] sm:text-[0.78rem] md:text-[0.85rem]">
          Password
        </span>
        <input
          type="password"
          name="password"
          required
          autoComplete="new-password"
          placeholder=""
          minLength={12}
          className="mt-1.5 w-full border-b border-[#887A2A] bg-[#E8F0FA] pb-2 pl-2 text-sm tracking-[0.12em] text-[#242424] placeholder:text-[0.65rem] placeholder:tracking-[0.14em] placeholder:text-[#BFBFBF] focus:border-[#161616] focus:outline-none sm:mt-2 sm:placeholder:text-[0.7rem]"
        />
      </label>

      <button
        type="submit"
        className="mt-3 w-full rounded-full bg-[#151A20] py-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#E5CD31] shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition-opacity hover:opacity-95 sm:mt-4 sm:py-3.5 sm:text-[0.66rem] md:mt-5"
      >
        Create account
      </button>
    </form>
  );
}
