"use client";

import type { JSX, ReactNode } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Button, Icons } from "@sportycoon/ui";
import { ME_DASHBOARD_LAYOUT, useQuery } from "@sportycoon/api";
import {
  useColorModeValue,
  ColorModeButton,
  Avatar,
} from "@admin/components/ui";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from "@admin/components/ui/menu";

interface RootLayoutProps {
  children: JSX.Element | ReactNode;
}

export default function DashboardLayout({
  children,
}: RootLayoutProps): JSX.Element {
  const { data: meData } = useQuery(ME_DASHBOARD_LAYOUT);

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px="16px" py="12px">
        <Flex alignItems="center" justifyContent="space-between">
          <Icons.SportycoonRaccoonLogo
            className={useColorModeValue("fill-gray-100", "fill-gray-300")}
            height="auto"
            width={120}
          />

          <Flex alignItems="center">
            <Stack align="center" direction="row">
              <ColorModeButton />

              <MenuRoot>
                <MenuTrigger>
                  <Button variant="ghost-primary">
                    <Avatar
                      size="sm"
                      src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                    />
                  </Button>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem value="account">
                    <Avatar
                      size="md"
                      src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                    />
                    <Box ml={2}>{meData?.me.username || "No Username"}</Box>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value="settings">Logout</MenuItem>
                </MenuContent>
              </MenuRoot>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box>{children}</Box>
    </>
  );
}
