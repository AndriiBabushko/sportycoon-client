import { test, expect } from "@playwright/test";
import { AdminPages } from "@sportycoon/ui";

test("Login page has a Login button on it", async ({ page }) => {
  await page.goto(`http://localhost:3000/en${AdminPages.LOGIN}`);

  const button = page.getByRole("button", {
    name: /Login/i,
  });

  await expect(button).toBeVisible();
});
