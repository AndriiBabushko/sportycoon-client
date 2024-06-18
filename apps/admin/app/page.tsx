import { Button } from "ui";

export default function Page() {
  console.log("process.env.SPORTYCOON_API_URL", process.env.SPORTYCOON_API_URL);
  console.log("process.env.CI", process.env.CI);

  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700">Docs</h1>
      <div>
        <Button rounded={"full"}>dfdfdfdf</Button>
      </div>
    </div>
  );
}
