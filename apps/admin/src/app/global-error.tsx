"use client";

import type { JSX } from "react";
import {Error} from "@admin/components/ui";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps): JSX.Element {
  return <Error error={error} reset={reset}/>
}
