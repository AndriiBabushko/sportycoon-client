"use client";

import { Card, CardBody, Image } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  title: string;
  imageUri?: string;
}

export const ShopCard: FC<Props> = ({ title, imageUri }) => {
  return (
    <Card className={"max-w-sm shadow-lg"}>
      <CardBody className={"p-0"}>
        <div className={"relative w-full h-64"}>
          <Image
            src={imageUri || "https://source.unsplash.com/random"}
            alt={title}
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <h4 className="h-4 font-bold text-xl mb-2">Gymnastics Rings</h4>
          <p className="text-gray-700 text-base">$49.99</p>
        </div>
      </CardBody>
    </Card>
  );
};
