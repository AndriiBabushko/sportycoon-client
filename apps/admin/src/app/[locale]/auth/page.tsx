import type { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SportyCoon Dashboard | Auth",
  description:
    "Choose your preferred authentication method: Login, Register, Spotify, or Google.",
};

// TODO: Implement the account auth page
export default function Account(): JSX.Element {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="font-montserrat text-red-700">Account Auth</h1>
    </div>
  );
}
