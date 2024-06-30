import createMiddleware from "@sportycoon/locales/middleware";
export default createMiddleware;
export const config = {
  matcher: ["/", "/(en|ua)/:path*"],
};
