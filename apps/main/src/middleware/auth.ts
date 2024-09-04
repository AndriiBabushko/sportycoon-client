import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ignoredPaths = [
  "",
  "/account/auth",
  "/account/login",
  "/account/register",
];

export function withAuthMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const { nextUrl, headers } = req;
    const token = headers.get("authorization");
    const locale = nextUrl.locale || "en";
    const path = nextUrl.pathname;

    if (
      ignoredPaths.some((ignoredPath) => path === `/${locale}${ignoredPath}`)
    ) {
      return middleware(req, event);
    }

    // If there's no token, redirect to the auth page
    if (!token) {
      return NextResponse.redirect(new URL(`/${locale}/`, req.url));
    }

    return middleware(req, event);
  };
}
