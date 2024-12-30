import type { JSX, ReactNode } from "react";
import { DashboardLayout } from "@admin/components/layouts";

interface RootLayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: Readonly<RootLayoutProps>): JSX.Element {
  return <DashboardLayout>{children}</DashboardLayout>;
}
