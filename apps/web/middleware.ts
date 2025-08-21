import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const protectedPaths = ["/dashboard", "/profile", "/chat"];
  const isProtected = protectedPaths.some((p) => url.pathname.startsWith(p));

  // Not logged in trying to access protected routes
  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", url.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If logged in but profile not completed, force to /profile/setup
  if (token) {
    const profileCompleted = req.cookies.get("profileCompleted")?.value === "true";
    const isSetup = url.pathname.startsWith("/profile/setup");

    // If not completed and not already on setup, redirect to setup
    if (!profileCompleted && !isSetup) {
      const setupUrl = new URL("/profile/setup", req.url);
      return NextResponse.redirect(setupUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
