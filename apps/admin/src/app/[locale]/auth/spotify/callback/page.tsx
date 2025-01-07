import type { JSX } from "react";
import { notFound } from "next/navigation";
import { Content } from "./components";

export const metadata = {
  title: "SportyCoon Dashboard | Spotify",
};

interface SpotifyCallbackProps {
  searchParams: Record<string, string | undefined>;
  params: {
    locale: string;
  };
}

export default function SpotifyCallback({
  searchParams,
  params,
}: SpotifyCallbackProps): JSX.Element {
  const code = searchParams.code;

  if (!code) {
    notFound();
  }

  return <Content code={code} locale={params.locale} />;
}
