"use client";

import type { JSX, ReactNode } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { AdminPages, Icons } from "@sportycoon/ui";
import { ME_DASHBOARD_LAYOUT, useQuery } from "@sportycoon/api";
import { useTranslations, TRANSLATES_NAMESPACES } from "@sportycoon/locales";
import Link from "next/link";
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
  const translate = useTranslations(TRANSLATES_NAMESPACES.DASHBOARD);
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const logoFill = useColorModeValue("fill-gray-800", "fill-white");

  return (
    <>
      <Box
        bg={bg}
        color={textColor}
        position="sticky"
        px={6}
        py={4}
        shadow="md"
        suppressHydrationWarning
        top={0}
        zIndex={10}
      >
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Icons.SportycoonRaccoonLogo
            className={logoFill}
            height={64}
            width={120}
          />

          {/* Navigation */}
          <Flex alignItems="center">
            <Stack align="center" direction="row" gap={4}>
              {/* Toggle Theme Button */}
              <ColorModeButton />

              {/* User Menu */}
              <MenuRoot>
                <MenuTrigger>
                  <Avatar
                    size="sm"
                    src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                  />
                </MenuTrigger>
                <MenuContent>
                  <MenuItem value="account">
                    <Link href={AdminPages.ACCOUNT}>
                      <Avatar
                        size="md"
                        src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                      />
                      <Box ml={3}>
                        {meData?.me.username || translate("NO_USERNAME")}
                      </Box>
                    </Link>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value="logout">{translate("LOGOUT")}</MenuItem>
                </MenuContent>
              </MenuRoot>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
}
