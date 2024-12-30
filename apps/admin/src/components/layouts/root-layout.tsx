"use client";

import type { JSX, ReactNode } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Icons } from "@sportycoon/ui";
import { useColorModeValue, ColorModeButton } from "@admin/components/ui";

interface RootLayoutProps {
  children: JSX.Element | ReactNode;
}

export function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={4}>
        <Flex alignItems="center" h={16} justifyContent="space-between">
          <Icons.SportycoonRaccoonLogo
            className={useColorModeValue("fill-gray-100", "fill-gray-300")}
            height="auto"
            width={120}
          />

          <Flex alignItems="center">
            <Stack align="center" direction="row">
              <ColorModeButton />
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
}
