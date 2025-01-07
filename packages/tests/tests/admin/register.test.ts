// import { test, expect } from "@playwright/test";
// import { AdminPages } from "@sportycoon/ui";
//
// test.describe("Admin -> Register", () => {
//   test("should have email and password inputs and a Sign up button on it", async ({
//     page,
//   }) => {
//     await page.goto(`http://localhost:3000/en${AdminPages.REGISTER}`);
//   });
//
//   test("should successfully register using credentials via GraphQL API", async ({
//     page,
//   }) => {
//     await page.goto(`http://localhost:3000/en${AdminPages.REGISTER}`);
//
//     await page.waitForURL(`http://localhost:3000/en${AdminPages.DASHBOARD}`);
//
//     expect(page.url()).toBe(AdminPages.DASHBOARD);
//   });
// });
