export enum AdminPages {
  ROOT = "/",
  AUTH = "/auth",
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  DASHBOARD = "/dashboard",
  ACCOUNT = "/dashboard/account",
  ACCOUNT_SETTINGS = "/dashboard/account/settings",
}

export const COOKIE_NAMES = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  LOCALE: "NEXT_LOCALE",
} as const;

export const LOCAL_STORAGE_ITEM_NAMES = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
} as const;
