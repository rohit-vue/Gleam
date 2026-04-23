"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type AuthFormState = { error?: string; success?: string } | null;

export async function loginWithUsername(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const identifier = String(formData.get("identifier") ?? formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!identifier || !password) {
    return { error: "Enter your username/email and password." };
  }

  let supabase;
  try {
    supabase = createSupabaseServerClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Server configuration error." };
  }

  const isEmailLogin = identifier.includes("@");
  let loginEmail = identifier.toLowerCase();

  if (!isEmailLogin) {
    const { data: email, error: rpcError } = await supabase.rpc("get_login_email", {
      p_username: identifier,
    });

    if (rpcError || email == null || email === "") {
      return { error: "Invalid username/email or password." };
    }

    loginEmail = typeof email === "string" ? email : String(email);
  }

  const { error: signError } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password,
  });

  if (signError) {
    return { error: "Invalid username/email or password." };
  }

  redirect("/");
}

export async function signupWithProfile(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const usernameRaw = String(formData.get("username") ?? "").trim();
  const username = usernameRaw.toLowerCase();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!username || !email || !password) {
    return { error: "Username, email, and password are required." };
  }

  if (password.length < 12) {
    return { error: "Password must be at least 12 characters." };
  }

  let supabase;
  try {
    supabase = createSupabaseServerClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Server configuration error." };
  }

  const { data: available, error: availError } = await supabase.rpc(
    "is_username_available",
    { p_username: username }
  );

  if (availError) {
    return { error: availError.message };
  }

  if (available === false) {
    return { error: "That username is already taken." };
  }

  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (signUpError) {
    return { error: signUpError.message };
  }

  await supabase.auth.signOut();

  redirect("/login");
}

export async function requestPasswordReset(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email) {
    return { error: "Enter your email address." };
  }

  let supabase;
  try {
    supabase = createSupabaseServerClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Server configuration error." };
  }

  const hdrs = headers();
  const origin =
    hdrs.get("origin") ??
    `${hdrs.get("x-forwarded-proto") ?? "http"}://${hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "localhost:3000"}`;
  const recoveryNext = encodeURIComponent("/reset-password?mode=recovery");
  const redirectTo = `${origin}/auth/callback?next=${recoveryNext}`;

  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
  if (error) {
    return { error: error.message };
  }

  return { success: "Reset link sent. Check your email inbox." };
}

export async function updatePassword(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!password || !confirmPassword) {
    return { error: "Enter and confirm your new password." };
  }
  if (password.length < 12) {
    return { error: "Password must be at least 12 characters." };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  let supabase;
  try {
    supabase = createSupabaseServerClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Server configuration error." };
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    if (error.message.toLowerCase().includes("auth session missing")) {
      return { error: "Reset session expired. Please request a new reset link." };
    }
    return { error: error.message };
  }

  // Recovery flow keeps a temporary authenticated session; sign out so pushing
  // to /login is not intercepted by guest-only middleware.
  await supabase.auth.signOut();

  return { success: "Password updated successfully." };
}
