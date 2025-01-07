import type { JSX } from "react";
import { notFound } from "next/navigation";
import { Content } from "./components";

export const metadata = {
  title: "SportyCoon Dashboard | Spotify",
};

interface GoogleCallbackProps {
  searchParams: Record<string, string | undefined>;
  params: {
    locale: string;
  };
}

export default function GoogleCallback({
  searchParams,
  params,
}: GoogleCallbackProps): JSX.Element {
  const code = searchParams.code;

  if (!code) {
    notFound();
  }

  return <Content code={code} locale={params.locale} />;
}
