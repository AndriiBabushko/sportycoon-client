import type { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SportyCoon Dashboard | Register",
  description:
    "Register for a SportyCoon Dashboard account using a step-by-step form to enter your information.",
};

// TODO: Implement the register page
export default function Register(): JSX.Element {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700">Register</h1>
    </div>
  );
}
