"use client";

import type { JSX } from "react";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { Flex } from "@chakra-ui/react";
import { Button, Heading } from "@sportycoon/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      minH="100vh"
      gap="16px"
    >
      <Heading className="text-[32px]" variant="montserratBold">
        Something went wrong!
      </Heading>
      <Button
        variant={"primary"}
        size={"lg"}
        onClick={() => {
          reset();
        }}
      >
        Try again
      </Button>
    </Flex>
  );
}
