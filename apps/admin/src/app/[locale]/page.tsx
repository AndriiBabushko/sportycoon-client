"use client";
import { useQuery, SAY_HELLO } from "@sportycoon/api";
import { Button } from "@sportycoon/ui";

export default function Page() {
  const {
    data: sayHello,
    loading: sayHelloLoading,
    error: sayHelloError,
  } = useQuery(SAY_HELLO);
  console.log("process.env.SPORTYCOON_API_URL", process.env.SPORTYCOON_API_URL);
  console.log("process.env.CI", process.env.CI);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  if (sayHelloLoading) return <p>Loading...</p>;
  if (sayHelloError) return <p>Error: {sayHelloError.message}</p>;

  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700"></h1>
      <div>
        <Button rounded={"full"}>{sayHello.sayHello}</Button>
      </div>
    </div>
  );
}
