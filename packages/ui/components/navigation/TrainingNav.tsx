"use client";

import { Container, Flex, Link } from "@radix-ui/themes";
import { Icons } from "@/components/ui";
import { FC } from "react";
import { Button } from "@/components/common";
import { COLORS } from "@/lib/colors";
import { TRAINING_NAV_HEIGHT, TRAINING_NAV_ITEMS } from "@/lib/constants";

interface Props {
  currentRoute: string;
}

export const TrainingNav: FC<Props> = ({ currentRoute }) => {
  return (
    <Container
      className={`h-[${TRAINING_NAV_HEIGHT}px] justify-center border-b border-gray-300 bg-[${COLORS.GRAY}] fixed top-0 left-0 w-full z-10`}
    >
      <Flex justify={"between"} align={"center"}>
        <Link href="/" className="flex items-center">
          <Icons.RaccoonLogo height={80} width={150} />
        </Link>
        <Flex className="space-x-4 items-center">
          {TRAINING_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                currentRoute === item.href ? "text-black" : "text-gray-600"
              }
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Flex>
          <Button variant={"secondary"} aria-label="Toggle menu">
            <Icons.Burger height={32} />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
