import { expect } from "@playwright/test";
import { AdminPages } from "@sportycoon/ui";
import { test } from "@sportycoon/tests/test";
import { ADMIN_HOST } from "@sportycoon/tests/constants";

test.describe("Auth Page", () => {
  test("should display main elements on the Auth page", async ({ page, t }) => {
    await page.goto(`${ADMIN_HOST}/en${AdminPages.AUTH}`);

    const logo = page.locator(`[aria-label="sportycoon-logo"]`);
    await expect(logo).toBeVisible();

    const title = page.getByRole("heading", { name: t("AUTH.TITLE") });
    await expect(title).toBeVisible();

    const loginButton = page.getByRole("button", { name: t("AUTH.LOGIN") });
    await expect(loginButton).toBeVisible();

    const registerButton = page.getByRole("button", {
      name: t("AUTH.REGISTER"),
    });
    await expect(registerButton).toBeVisible();

    const thirdPartyText = page.getByText(t("AUTH.THIRD_PARTY"));
    await expect(thirdPartyText).toBeVisible();

    const spotifyIcon = page.locator(`[aria-label="spotify-icon"]`);
    await expect(spotifyIcon).toBeVisible();

    const googleIcon = page.locator(`[aria-label="google-icon"]`);
    await expect(googleIcon).toBeVisible();
  });

  test("should navigate to Login and Register pages", async ({ page, t }) => {
    await page.goto(`${ADMIN_HOST}/en${AdminPages.AUTH}`);

    const loginButton = page.getByRole("button", {
      name: t("AUTH.LOGIN"),
    });
    await loginButton.click();
    await page.waitForURL(`${ADMIN_HOST}/en${AdminPages.LOGIN}`);
    expect(page.url()).toBe(`${ADMIN_HOST}/en${AdminPages.LOGIN}`);

    await page.goto(`${ADMIN_HOST}/en${AdminPages.AUTH}`);

    const registerButton = page.getByRole("button", {
      name: t("AUTH.REGISTER"),
    });
    await registerButton.click();
    await page.waitForURL(`${ADMIN_HOST}/en${AdminPages.REGISTER}`);
    expect(page.url()).toBe(`${ADMIN_HOST}/en${AdminPages.REGISTER}`);
  });

  // test("should redirect to Spotify's login page", async ({ page }) => {
  //   await page.goto(`${ADMIN_HOST}/en${AdminPages.AUTH}`);
  //
  //   const spotifyIcon = page.locator(`[aria-label="spotify-icon"]`);
  //   await spotifyIcon.click();
  //   await page.waitForTimeout(5000);
  //
  //   expect(page.url()).toContain("https://accounts.spotify.com");
  // });
  //
  // test("should redirect to Google's login page", async ({ page }) => {
  //   await page.goto(`${ADMIN_HOST}/en/${AdminPages.AUTH}`);
  //
  //   const googleIcon = page.locator(`[aria-label="google-icon"]`);
  //   await googleIcon.click();
  //
  //   expect(page.url()).toContain("https://accounts.google.com");
  // });
});
