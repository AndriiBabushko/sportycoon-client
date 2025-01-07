"use client";

import type { JSX } from "react";
import { useTransition } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { TLoginSchema } from "@sportycoon/validation";
import {
  getLoginSchema,
  LOGIN_SCHEMA,
  zodResolver,
} from "@sportycoon/validation";
import {
  AdminPages,
  Button,
  Input,
  TextInfo,
  FormErrorBox,
} from "@sportycoon/ui";
import {
  apolloClient,
  LOGIN as LOGIN_GQL,
  setContext,
  useMutation,
} from "@sportycoon/api";
import { TRANSLATES_NAMESPACES, useTranslations } from "@sportycoon/locales";
import { useRouter } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { setAuthTokens } from "@admin/actions";

export function LoginForm(): JSX.Element {
  const [login] = useMutation(LOGIN_GQL);
  const router = useRouter();
  const translate = useTranslations(TRANSLATES_NAMESPACES.LOGIN);
  const [_isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState } = useForm<TLoginSchema>({
    resolver: zodResolver(getLoginSchema(translate)),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async ({ email, password }) => {
    const response = await login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    if (
      response.data?.login.access_token &&
      response.data.login.refresh_token
    ) {
      startTransition(async () => {
        if (response.data) {
          await setAuthTokens({
            access_token: response.data.login.access_token,
            refresh_token: response.data.login.refresh_token,
          });

          apolloClient.setLink(
            setContext(() => ({
              headers: {
                authorization: response.data
                  ? `Bearer ${response.data.login.access_token}`
                  : undefined,
              },
            }))
          );
        }
      });
      router.push(AdminPages.DASHBOARD);
    }
  };

  return (
    <Box
      as="form"
      bg="rgba(0,0,0,0.1)"
      borderRadius="md"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      gap={5}
      maxW="400px"
      mx="auto"
      onSubmit={handleSubmit(onSubmit)}
      p={5}
    >
      <Input
        id={LOGIN_SCHEMA.EMAIl}
        type="email"
        {...register(LOGIN_SCHEMA.EMAIl)}
        color="#333333"
        placeholder={translate("LOGIN.EMAIL_PLACEHOLDER")}
      />
      {formState.errors[LOGIN_SCHEMA.EMAIl]?.message ? (
        <FormErrorBox>
          <TextInfo type="error">
            {formState.errors[LOGIN_SCHEMA.EMAIl].message}
          </TextInfo>
        </FormErrorBox>
      ) : null}

      <Input
        id={LOGIN_SCHEMA.PASSWORD}
        type="password"
        {...register(LOGIN_SCHEMA.PASSWORD)}
        color="#333333"
        placeholder={translate("LOGIN.PASSWORD_PLACEHOLDER")}
      />
      {formState.errors[LOGIN_SCHEMA.PASSWORD]?.message ? (
        <FormErrorBox>
          <TextInfo type="error">
            {formState.errors[LOGIN_SCHEMA.PASSWORD].message}
          </TextInfo>
        </FormErrorBox>
      ) : null}

      <Button color="white" type="submit">
        {translate("LOGIN.LOGIN_BUTTON_CAPTION")}
      </Button>
    </Box>
  );
}
