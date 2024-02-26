import { FC } from "react";
import { Badge } from "@sportycoon/ui";

const Home: FC = () => {
  return (
    <div className={"bg-black"}>
      <h1>ADMIN</h1>
      <Badge variant={"secondary"} className={"text-white"}>
        White
      </Badge>
    </div>
  );
};

export default Home;
