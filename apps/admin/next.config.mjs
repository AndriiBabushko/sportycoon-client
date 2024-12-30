import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from 'next-intl/plugin';
import process from "process";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@sportycoon/ui"],
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  env: {
    _next_intl_trailing_slash: 'false',
  },
};

export default withSentryConfig(withNextIntl(nextConfig), {
  org: "sportycoon",
  project: "sportycoon-admin",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
