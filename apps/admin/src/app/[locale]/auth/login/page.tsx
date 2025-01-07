import type { JSX } from "react";
import type { Metadata } from "next";
import { LoginForm } from "./components";

export const metadata: Metadata = {
  title: "SportyCoon Dashboard | Login",
  description:
    "Login to your SportyCoon Dashboard account with your email and password.",
};

export default function Login(): JSX.Element {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700">Login</h1>
      <LoginForm />
    </div>
  );
}
