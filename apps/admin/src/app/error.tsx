"use client";

import * as Sentry from "@sentry/nextjs";
import type { JSX } from "react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  useEffect(() => {
    Sentry.captureException(error);
  }, []);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}
