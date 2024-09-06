import type { JSX } from "react";
import type { Metadata } from "next";
import { RootLayout } from "@admin/components/layouts";

export const metadata: Metadata = {
  title: "SportyCoon Dashboard | Home",
  description:
    "Welcome to the SportyCoon Dashboard, your hub for managing the content of the SportyCoon main site.",
};

// TODO: Implement the root page
export default function Root(): JSX.Element {
  return (
    <RootLayout>
      <div className="container flex flex-col gap-5">
        <h1 className="font-montserrat text-red-700">Root</h1>
      </div>
    </RootLayout>
  );
}
