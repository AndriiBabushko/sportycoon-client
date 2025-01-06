"use client";

import type { JSX, ReactNode } from "react";
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AdminPages, Icons, Paragraph } from "@sportycoon/ui";
import { ME_DASHBOARD_LAYOUT, useQuery } from "@sportycoon/api";
import {
  useTranslations,
  TRANSLATES_NAMESPACES,
  Link,
} from "@sportycoon/locales";
import { ThemeToggle } from "@admin/components/ui";

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

  const onLogout = (): void => {
    // eslint-disable-next-line no-alert -- This is a temporary solution
    alert("Logout");
  };

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
          <Icons.SportycoonRaccoonLogo
            className={logoFill}
            height={64}
            width={120}
          />

          <Flex alignItems="center">
            <Stack align="center" direction="row" gap={4}>
              <ThemeToggle />

              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem value="account">
                    <Link
                      className="flex flex-row gap-[8px] items-center"
                      href={AdminPages.ACCOUNT}
                    >
                      <Avatar
                        size="md"
                        src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                      />
                      <Paragraph
                        className="text-[16px]"
                        variant="montserratBold"
                      >
                        {meData?.me.username || translate("NO_USERNAME")}
                      </Paragraph>
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem value="account">
                    <Link
                      className="flex flex-row gap-[8px] items-center"
                      href={AdminPages.ACCOUNT_SETTINGS}
                    >
                      <Paragraph className="text-[14px]" variant="montserrat">
                        {translate("SETTINGS")}
                      </Paragraph>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={onLogout} value="logout">
                    <Paragraph className="text-[14px]" variant="montserrat">
                      {translate("LOGOUT")}
                    </Paragraph>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
}
