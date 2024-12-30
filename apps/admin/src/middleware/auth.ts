import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { apolloClient, ME } from "@sportycoon/api";
import { AdminPages, COOKIE_NAMES } from "@sportycoon/ui";
import { cookies } from "next/headers";

const ignoredUnAuthPaths = [
  "",
  AdminPages.ROOT,
  AdminPages.REGISTER,
  AdminPages.AUTH,
  AdminPages.LOGIN,
];

const ignoredAuthPaths = [
  AdminPages.REGISTER,
  AdminPages.AUTH,
  AdminPages.LOGIN,
];

export function withAuthMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const { nextUrl } = req;
    const cookieStore = cookies();
    const accessToken =
      cookieStore.get(COOKIE_NAMES.ACCESS_TOKEN)?.value || undefined;
    const locale = nextUrl.locale || "en";
    const path = nextUrl.pathname;

    if (
      !accessToken &&
      ignoredUnAuthPaths.some((ignoredPath) =>
        path.startsWith(`/${locale}${ignoredPath}`)
      )
    ) {
      return middleware(req, event);
    }

    if (!accessToken) {
      return NextResponse.redirect(
        new URL(`/${locale}${AdminPages.AUTH}`, req.url)
      );
    }

    if (
      ignoredAuthPaths.some(
        (ignoredPath) => path === `/${locale}${ignoredPath}`
      ) &&
      accessToken
    ) {
      return NextResponse.redirect(
        new URL(`/${locale}${AdminPages.DASHBOARD}`, req.url)
      );
    }

    try {
      const { data: meData } = await apolloClient.query({
        query: ME,
        context: { accessToken },
      });

      if (!meData.me.email) {
        return NextResponse.redirect(
          new URL(`/${locale}${AdminPages.AUTH}`, req.url)
        );
      }

      // if (refreshToken) {
      //   const { data: refreshTokenData } = await apolloClient.mutate({
      //     mutation: REFRESH_TOKEN,
      //     variables: {
      //       input: {
      //         refresh_token: refreshToken,
      //       },
      //     },
      //   });
      //
      //   if (refreshTokenData?.refreshToken.access_token) {
      //     cookieStore.set(
      //       COOKIE_NAMES.ACCESS_TOKEN,
      //       refreshTokenData.refreshToken.access_token
      //     );
      //     cookieStore.set(
      //       COOKIE_NAMES.REFRESH_TOKEN,
      //       refreshTokenData.refreshToken.refresh_token
      //     );
      //   }
      //
      //   return middleware(req, event);
      // }
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(
        new URL(`/${locale}${AdminPages.AUTH}`, req.url)
      );
    }

    return middleware(req, event);
  };
}
