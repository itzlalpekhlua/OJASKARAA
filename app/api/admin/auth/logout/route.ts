import { NextResponse } from "next/server";
import { sessionCookie, sessionCookieOptions } from "@/lib/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie.name, "", {
    ...sessionCookieOptions,
    maxAge: 0,
  });
  return response;
}
