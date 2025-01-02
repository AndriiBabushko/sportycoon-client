"use client";

import type { JSX, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Icons } from "@sportycoon/ui";
import { useColorModeValue, ColorModeButton } from "@admin/components/ui";

interface RootLayoutProps {
  children: JSX.Element | ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const logoFillColor = useColorModeValue("fill-gray-800", "fill-gray-100");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" className="flex flex-col">
      <Box bg={bgColor} className="px-4 shadow-md sticky top-0 z-50 py-2">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          className="h-16 max-w-7xl mx-auto"
        >
          <Icons.SportycoonRaccoonLogo
            className={`h-auto w-32 ${logoFillColor}`}
          />

          <Flex alignItems="center" className="gap-4">
            <ColorModeButton />
          </Flex>
        </Flex>
      </Box>

      <Box className="flex-grow max-w-7xl mx-auto px-4 py-8">{children}</Box>
    </Box>
  );
}
