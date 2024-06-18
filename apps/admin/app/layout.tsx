import "ui/styles/globals.css";
import { TailwindIndicator, cn, UIProvider } from "ui";
import APIProvider from "@sportycoon/api";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <APIProvider>
          <UIProvider>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </UIProvider>
        </APIProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
