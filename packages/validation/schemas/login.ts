import { z } from "zod";
import { TranslationFunction } from "@/types";

export const LOGIN_SCHEMA = {
  EMAIl: "email",
  PASSWORD: "password",
};

export const getLoginSchema = (t: TranslationFunction) => {
  return z.object({
    [LOGIN_SCHEMA.EMAIl]: z.string().email(t("errors.invalidEmail")),
    [LOGIN_SCHEMA.PASSWORD]: z.string().min(6, t("errors.passwordTooShort")),
  });
};

export type TLoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;
