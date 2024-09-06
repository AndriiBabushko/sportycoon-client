"use client";

import type { JSX, ReactNode } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Center,
  MenuItem,
  MenuDivider,
  ThemeToggle,
  useColorModeValue,
  useColorMode,
} from "@sportycoon/ui";

interface RootLayoutProps {
  children: JSX.Element | ReactNode;
}

export function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const { colorMode } = useColorMode();
  console.log(`colorMode -> ${colorMode}`);
  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={4}>
        <Flex alignItems="center" h={16} justifyContent="space-between">
          <Box>Logo</Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <ThemeToggle />

              <Menu>
                <MenuButton as={Button} cursor="pointer" rounded="full">
                  <Avatar
                    size="sm"
                    src="https://avatars.dicebear.com/9.x/username.svg"
                  />
                </MenuButton>
                <MenuList alignItems="center">
                  <br />
                  <Center>
                    <Avatar
                      size="sm"
                      src="https://avatars.dicebear.com/9.x/username.svg"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
}
