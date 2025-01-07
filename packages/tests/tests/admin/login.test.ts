// import { test, expect } from "@playwright/test";
// import { AdminPages } from "@sportycoon/ui";
// import { apolloClient, LOGIN } from "@sportycoon/api";
//
// test.describe("Admin -> Login", () => {
//   test("should have email and password inputs and a Login button on it", async ({
//     page,
//   }) => {
//     await page.goto(`http://localhost:3000/en${AdminPages.LOGIN}`);
//
//     const emailInput = page.getByLabel(/Email/i);
//     await expect(emailInput).toBeVisible();
//
//     const passwordInput = page.getByLabel(/Password/i);
//     await expect(passwordInput).toBeVisible();
//
//     // Check for the presence of the Login button
//     const button = page.getByRole("button", {
//       name: /Login/i,
//     });
//     await expect(button).toBeVisible();
//   });
//
//   test("should successfully log in using credentials via GraphQL API", async ({
//     page,
//   }) => {
//     await page.goto(`http://localhost:3000/en${AdminPages.LOGIN}`);
//
//     await page.fill('input[name="email"]', "testuser@example.com");
//     await page.fill('input[name="password"]', "password123");
//
//     const result = await apolloClient.mutate({
//       mutation: LOGIN,
//       variables: {
//         input: {
//           email: "testuser@example.com",
//           password: "password123",
//         },
//       },
//     });
//
//     expect(result.data?.login.access_token).toBeTruthy();
//     expect(result.data?.login.refresh_token).toBeTruthy();
//
//     await page.click('button[type="submit"]');
//
//     await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
//
//     expect(page.url()).toBe(AdminPages.DASHBOARD);
//   });
//
//   test("should handle Google authentication flow", async ({ page }) => {
//     await page.goto(`http://localhost:3000/en${AdminPages.LOGIN}`);
//
//     await page.click('button[role="button"][aria-label="google"]');
//
//     await page.route("**/auth/google/callback", async (route) => {
//       await route.fulfill({
//         status: 200,
//         contentType: "application/json",
//         body: JSON.stringify({
//           // Mock your Google Auth response here
//           token: "mocked-google-auth-token",
//         }),
//       });
//     });
//
//     await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
//
//     expect(page.url()).toBe(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
//   });
//
//   test.describe("should handle Spotify authentication flow", () => {
//     test("should handle Spotify authentication flow", async ({ page }) => {
//       await page.goto(`http://localhost:3000/en${AdminPages.LOGIN}`);
//
//       await page.click('button[role="button"][aria-label="spotify"]');
//
//       await page.route("**/auth/spotify/callback", async (route) => {
//         await route.fulfill({
//           status: 200,
//           contentType: "application/json",
//           body: JSON.stringify({
//             access_token: "mocked-spotify-access-token",
//             refresh_token: "mocked-spotify-refresh-token",
//           }),
//         });
//       });
//
//       await page.goto(
//         "http://localhost:3000/en/auth/spotify/callback?code=mocked-auth-code"
//       );
//
//       await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
//
//       expect(page.url()).toBe(
//         `http://localhost:3000/en${AdminPages.DASHBOARD}`
//       );
//     });
//   });
// });
