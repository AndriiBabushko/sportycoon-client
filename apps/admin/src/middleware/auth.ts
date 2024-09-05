import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { apolloClient, setContext, ME } from "@sportycoon/api";
import { AdminPages } from "@sportycoon/ui";

const ignoredPaths = [
  "",
  AdminPages.ROOT,
  AdminPages.REGISTER,
  AdminPages.AUTH,
  AdminPages.LOGIN,
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

    if (!token) {
      return NextResponse.redirect(
        new URL(`/${locale}${AdminPages.AUTH}`, req.url)
      );
    }

    try {
      apolloClient.setLink(
        setContext(() => ({
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        }))
      );

      const { data } = await apolloClient.query({
        query: ME,
      });

      if (!data.me.email) {
        return NextResponse.redirect(
          new URL(`/${locale}${AdminPages.AUTH}`, req.url)
        );
      }
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/${locale}${AdminPages.AUTH}`, req.url)
      );
    }

    return middleware(req, event);
  };
}
