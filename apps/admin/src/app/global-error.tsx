"use client";

import * as Sentry from "@sentry/nextjs";
import type { JSX } from "react";
import { useEffect } from "react";
import { Button, Heading } from "@sportycoon/ui/components/common";
import { Flex } from "@chakra-ui/react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps): JSX.Element {
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
