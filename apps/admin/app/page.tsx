import { FC } from "react";
import { Button } from "@sportycoon/ui/components/ui/button";
import { Badge } from "@sportycoon/ui/components/ui/badge";

const Home: FC = () => {
  return (
    <div className={"a"}>
      <h1>ADMIN</h1>
      <Button variant={"secondary"}>White</Button>
      <Badge variant={"secondary"}>White</Badge>
    </div>
  );
};

export default Home;
