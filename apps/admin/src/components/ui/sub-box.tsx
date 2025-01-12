import type { JSX, PropsWithChildren } from "react";
import { useColorModeValue, VStack } from "@chakra-ui/react";

export default function SubBox({ children }: PropsWithChildren): JSX.Element {
  const subBoxBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <VStack
      align="stretch"
      bg={subBoxBgColor}
      borderRadius="lg"
      boxShadow="lg"
      p="16px"
      spacing="12px"
    >
      {children}
    </VStack>
  );
}
