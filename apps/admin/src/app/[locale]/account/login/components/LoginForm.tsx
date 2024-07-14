"use client";

import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getLoginSchema,
  LOGIN_SCHEMA,
  TLoginSchema,
  zodResolver,
} from "@sportycoon/validation";
import { Button, Input } from "@sportycoon/ui";
import { useTranslations } from "@sportycoon/locales";

export function LoginForm() {
  const translateLogin = useTranslations("login");
  const translateGeneral = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(getLoginSchema(translateGeneral)),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<TLoginSchema> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <div className="container flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={"email"}
          color={"secondary"}
          {...register(LOGIN_SCHEMA.EMAIl)}
          placeholder={translateLogin("emailPlaceholder")}
        />
        <Input
          {...register(LOGIN_SCHEMA.PASSWORD)}
          type={"password"}
          placeholder={translateLogin("passwordPlaceholder")}
        />
        <Button onClick={handleSubmit(onSubmit)}>
          {translateLogin("loginButtonCaption")}
        </Button>
      </form>
    </div>
  );
}
