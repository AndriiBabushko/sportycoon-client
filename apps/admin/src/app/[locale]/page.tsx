import type { JSX } from "react";

export default function Root(): JSX.Element {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="font-montserrat text-red-700">Root</h1>
    </div>
  );
}
