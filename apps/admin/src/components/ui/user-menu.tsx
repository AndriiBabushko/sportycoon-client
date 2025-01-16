import type { JSX } from "react";
import { useTransition } from "react";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { AdminPages, Button, Paragraph, useLoader } from "@sportycoon/ui";
import {
  ME_ACCOUNT_PROFILE,
  ME_DASHBOARD_LAYOUT,
  useApolloClient,
  useQuery,
} from "@sportycoon/api";
import {
  TRANSLATES_NAMESPACES,
  useRouter,
  useTranslations,
} from "@sportycoon/locales";
import { setAuthTokens } from "@admin/actions";
import Link from "next/link";

export default function UserMenu(): JSX.Element {
  const { data: meData } = useQuery(ME_DASHBOARD_LAYOUT, {
    errorPolicy: "ignore",
  });
  const apolloClient = useApolloClient();
  const router = useRouter();
  const { setTransitionLoading } = useLoader();
  const [_isPending, startTransition] = useTransition();
  const translateUI = useTranslations(TRANSLATES_NAMESPACES.UI);
  const translateDashboard = useTranslations(TRANSLATES_NAMESPACES.DASHBOARD);

  const buttonVariant = useColorModeValue(
    "outline-primary",
    "outline-secondary"
  );

  const onLogout = (): void => {
    startTransition(async () => {
      setTransitionLoading(true);
      try {
        await setAuthTokens({
          access_token: "",
          refresh_token: "",
        });
        await apolloClient.clearStore();
        await apolloClient.refetchQueries({
          include: [ME_DASHBOARD_LAYOUT, ME_ACCOUNT_PROFILE],
        });
        router.push(AdminPages.ROOT);
      } catch (e) {
        console.error("Error on logout", e);
      } finally {
        setTransitionLoading(false);
      }
    });
  };

  return (
    <>
      {!meData ? (
        <Link href={AdminPages.AUTH}>
          <Button variant={buttonVariant}>{translateUI("SIGNUP_LOGIN")}</Button>
        </Link>
      ) : (
        <Menu>
          <MenuButton>
            <Avatar
              size="sm"
              src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
            />
          </MenuButton>
          <MenuList>
            <MenuItem
              value="account"
              onClick={() => {
                router.push(AdminPages.ACCOUNT_SETTINGS);
              }}
            >
              <Box className="flex flex-row gap-[8px] items-center">
                <Avatar
                  size="md"
                  src="https://i.pinimg.com/736x/43/3e/7e/433e7e7ed9a4cd23b563663e8fe65c5e.jpg"
                />
                <Paragraph className="text-[16px]" variant="montserratBold">
                  {meData.me.username || translateDashboard("NO_USERNAME")}
                </Paragraph>
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem value="fullName">
              <Paragraph className="text-[18px]" variant="montserratBold">
                {meData.me.full_name || translateDashboard("NO_FULL_NAME")}
              </Paragraph>
            </MenuItem>
            <MenuItem
              value="dashboard"
              onClick={() => {
                router.push(AdminPages.DASHBOARD);
              }}
            >
              <Paragraph className="text-[14px]" variant="montserrat">
                {translateDashboard("TITLE")}
              </Paragraph>
            </MenuItem>
            <MenuItem
              value="account"
              onClick={() => {
                router.push(AdminPages.ACCOUNT_SETTINGS);
              }}
            >
              <Paragraph className="text-[14px]" variant="montserrat">
                {translateDashboard("SETTINGS")}
              </Paragraph>
            </MenuItem>
            <MenuItem onClick={onLogout} value="logout">
              <Paragraph className="text-[14px]" variant="montserrat">
                {translateDashboard("LOGOUT")}
              </Paragraph>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
}
