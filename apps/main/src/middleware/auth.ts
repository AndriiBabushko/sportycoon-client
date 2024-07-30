import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { client, setContext, ME } from "@sportycoon/api";

const ignoredPaths = ["/", "/account/login", "/account/register"];

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
      return NextResponse.redirect(
        new URL(`/${locale}/account/login`, req.url),
      );
    }

    try {
      // Set the authorization header for the GraphQL client
      client.setLink(
        setContext(() => ({
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        })),
      );

      // Make the request to the GraphQL API to check authentication
      const { data } = await client.query({
        query: ME,
      });

      // If the request is successful and user data is returned, allow the request to proceed
      if (!data.me.email) {
        // If the user data is not returned, redirect to the auth page
        return NextResponse.redirect(
          new URL(`/${locale}/account/login`, req.url),
        );
      }
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/${locale}/account/login`, req.url),
      );
    }

    return middleware(req, event);
  };
}
