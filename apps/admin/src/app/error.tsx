"use client";

import * as Sentry from "@sentry/nextjs";
import type { JSX } from "react";
import { useEffect } from "react";
import { Button, Heading } from "@sportycoon/ui";
import { Flex } from "@chakra-ui/react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Flex alignItems="center" flexDirection="row" justifyContent="center">
      <Heading className="text-[32px]" variant="montserratBold">
        Something went wrong!
      </Heading>
      <Button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </Button>
    </Flex>
  );
}
