export async function register() {
  if (process.env.NODE_ENV === "development") {
    await import("../sentry.client.config");
  }

  if (process.env.NODE_ENV === "production") {
    await import("../sentry.server.config");
  }
}
