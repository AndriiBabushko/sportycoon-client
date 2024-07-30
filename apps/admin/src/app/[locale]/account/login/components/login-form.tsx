"use client";

import type { JSX } from "react";
import { useCallback } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { TLoginSchema } from "@sportycoon/validation";
import {
  getLoginSchema,
  LOGIN_SCHEMA,
  zodResolver,
} from "@sportycoon/validation";
import { Button, Input } from "@sportycoon/ui";
import {
  LOGIN,
  TRANSLATES_NAMESPACES,
  useTranslations,
} from "@sportycoon/locales";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

export function LoginForm(): JSX.Element {
  const translate = useTranslations(TRANSLATES_NAMESPACES.LOGIN);

  const { register, handleSubmit } = useForm<TLoginSchema>({
    resolver: zodResolver(getLoginSchema(translate)),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<TLoginSchema> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <div className="container flex flex-col gap-5">
      <form
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      >
        <FormControl>
          <FormLabel />
          <Input
            color="secondary"
            type="email"
            {...register(LOGIN_SCHEMA.EMAIl)}
            placeholder={translate(LOGIN.EMAIL_PLACEHOLDER)}
          />
          <Input
            {...register(LOGIN_SCHEMA.PASSWORD)}
            placeholder={translate(LOGIN.PASSWORD_PLACEHOLDER)}
            type="password"
          />
          <Button
            onSubmit={() => {
              handleSubmit(onSubmit);
            }}
          >
            {translate(LOGIN.LOGIN_BUTTON_CAPTION)}
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
