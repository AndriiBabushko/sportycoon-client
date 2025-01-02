"use server";

import { cookies } from "next/headers";
import { COOKIE_NAMES } from "@sportycoon/ui";

export default async function getAuthTokens(): Promise<{
  access_token: string | undefined;
  refresh_token: string | undefined;
}> {
  return new Promise((resolve, reject) => {
    try {
      const cookieStore = cookies();
      const accessToken = cookieStore.get(
        COOKIE_NAMES.ACCESS_TOKEN as string
      )?.value;
      const refreshToken = cookieStore.get(
        COOKIE_NAMES.REFRESH_TOKEN as string
      )?.value;

      resolve({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      reject(new Error(`Unexpected error: ${error as string}`));
    }
  });
}
