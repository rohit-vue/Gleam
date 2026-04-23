import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const nextParam = searchParams.get("next");
  const safeNext =
    nextParam && nextParam.startsWith("/") && !nextParam.startsWith("//")
      ? nextParam
      : "/login";

  if (code) {
    try {
      const supabase = createSupabaseServerClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        return NextResponse.redirect(new URL("/forgot-password?status=invalid-link#recovery-error", origin));
      }
    } catch {
      return NextResponse.redirect(new URL("/forgot-password?status=invalid-link#recovery-error", origin));
    }
  } else {
    return NextResponse.redirect(new URL("/forgot-password?status=missing-code#recovery-error", origin));
  }

  return NextResponse.redirect(new URL(safeNext, origin));
}
