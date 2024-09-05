import type { JSX } from "react";

// TODO: make not found page more UI friendly
export default function NotFound(): JSX.Element {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="font-montserrat text-red-700">Not Found</h1>
    </div>
  );
}
