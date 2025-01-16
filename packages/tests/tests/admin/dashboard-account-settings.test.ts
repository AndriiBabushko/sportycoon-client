import { expect } from "@playwright/test";
import { AdminPages } from "@sportycoon/ui";
import { ACCOUNT_SCHEMA } from "@sportycoon/validation";
import { ADMIN_HOST, test } from "@sportycoon/tests";

test.describe("Account Page", () => {
  test.beforeEach(async ({ page, t }) => {
    await page.goto(`${ADMIN_HOST}/en${AdminPages.LOGIN}`);

    const emailInput = page.locator(`input[type="email"]`);
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill("testuser8@example.com");
    await passwordInput.fill("qwerty12345");

    const loginButton = page.getByRole("button", {
      name: t("LOGIN.LOGIN_BUTTON_CAPTION"),
    });
    await loginButton.click();
    await page.waitForURL(`${ADMIN_HOST}/en${AdminPages.DASHBOARD}`);
    expect(page.url()).toBe(`${ADMIN_HOST}/en${AdminPages.DASHBOARD}`);
    await page.goto(`${ADMIN_HOST}/en${AdminPages.ACCOUNT_SETTINGS}`);
  });

  test("should display account details and allow editing", async ({
    page,
    t,
  }) => {
    const heading = page.getByRole("heading", {
      name: t("ACCOUNT.HEADINGS.VIEW_PROFILE"),
    });
    await expect(heading).toBeVisible();

    const editButton = page.getByRole("button", {
      name: t("ACCOUNT.BUTTONS.EDIT_PROFILE"),
    });
    await expect(editButton).toBeVisible();
    await editButton.click();

    const fullNameInput = page.locator(
      `input[name="${ACCOUNT_SCHEMA.FULL_NAME}"]`
    );
    await expect(fullNameInput).toBeEditable();
    await fullNameInput.fill("Updated Name");

    const saveButton = page.getByRole("button", {
      name: t("ACCOUNT.BUTTONS.SAVE_CHANGES"),
    });
    await expect(saveButton).toBeVisible();
    await saveButton.click();

    await expect(fullNameInput).toHaveValue("Updated Name");
  });

  test("should open delete confirmation modal", async ({ page, t }) => {
    const deleteButton = page.getByRole("button", {
      name: t("ACCOUNT.BUTTONS.DELETE_ACCOUNT"),
    });
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();

    const modalTitle = page.locator("header").filter({
      hasText: t("MODALS.DELETE_USER_ACCOUNT.TITLE"),
    });
    await expect(modalTitle).toBeVisible();

    const cancelButton = page.getByRole("button", {
      name: t("MODALS.DELETE_USER_ACCOUNT.CANCEL"),
    });
    await expect(cancelButton).toBeVisible();

    const confirmButton = page.getByRole("button", {
      name: t("MODALS.DELETE_USER_ACCOUNT.CONFIRM"),
    });
    await expect(confirmButton).toBeVisible();

    await cancelButton.click();
    await expect(modalTitle).not.toBeVisible();
  });

  test("should indicate connected services", async ({ page, t }) => {
    const googleButton = page.getByRole("button", {
      name: t("ACCOUNT.BUTTONS.CONNECT_GOOGLE"),
    });
    await expect(googleButton).toBeVisible();

    const spotifyButton = page.getByRole("button", {
      name: t("ACCOUNT.BUTTONS.CONNECT_SPOTIFY"),
    });
    await expect(spotifyButton).toBeVisible();
  });
});
