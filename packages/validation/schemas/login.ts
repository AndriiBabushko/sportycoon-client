import { z } from "zod";
import type { TranslationFunction } from "../types";

export const LOGIN_SCHEMA = {
  EMAIl: "email",
  PASSWORD: "password",
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getLoginSchema = (t: TranslationFunction) => {
  return z.object({
    [LOGIN_SCHEMA.EMAIl]: z.string().email(t("errors.invalidEmail")),
    [LOGIN_SCHEMA.PASSWORD]: z.string().min(6, t("errors.passwordTooShort")),
  });
};

export type TLoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;
