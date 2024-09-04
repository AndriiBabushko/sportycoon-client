import { test, expect } from "@playwright/test";
import { AdminPages } from "@sportycoon/ui";

test.describe("Admin -> Auth", () => {
  test("should handle Google authentication flow", async ({ page }) => {
    await page.goto(`http://localhost:3000/en${AdminPages.AUTH}`);

    await page.click('button[role="button"][aria-label="google"]');

    await page.route("**/auth/google/callback", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          // Mock your Google Auth response here
          token: "mocked-google-auth-token",
        }),
      });
    });

    await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);

    expect(page.url()).toBe(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
  });

  test("should handle Spotify authentication flow", async ({ page }) => {
    await page.goto(`http://localhost:3000/en${AdminPages.AUTH}`);

    await page.click('button[role="button"][aria-label="spotify"]');

    await page.route("**/auth/spotify/callback", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          access_token: "mocked-spotify-access-token",
          refresh_token: "mocked-spotify-refresh-token",
        }),
      });
    });

    await page.goto(
      "http://localhost:3000/en/auth/spotify/callback?code=mocked-auth-code"
    );

    await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);

    expect(page.url()).toBe(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
  });
});
