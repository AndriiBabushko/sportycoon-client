import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { LOCAL_STORAGE_ITEM_NAMES } from "./constants";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

interface AuthTokens {
  access_token: string | undefined;
  refresh_token: string | undefined;
}

export function setAuthTokensToLS(tokens: AuthTokens): void {
  if (tokens.access_token) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAMES.ACCESS_TOKEN as string,
      tokens.access_token
    );
  }

  if (tokens.refresh_token) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAMES.REFRESH_TOKEN as string,
      tokens.refresh_token
    );
  }
}

export function getAuthTokensFromLS(): AuthTokens {
  const accessToken =
    localStorage.getItem(LOCAL_STORAGE_ITEM_NAMES.ACCESS_TOKEN as string) ||
    undefined;
  const refreshToken =
    localStorage.getItem(LOCAL_STORAGE_ITEM_NAMES.REFRESH_TOKEN as string) ||
    undefined;

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
  };
}
