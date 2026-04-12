import { test, expect } from "@fixtures/auto-exe.fixture";

test("Test Case 1: Register User", async ({ page, homePage }) => {
  await test.step("Navigate to Automation Exercise home page", async () => {
    await homePage.goto();
  });

  await test.step("Verify that home page is visible successfully", async () => {
    await expect(homePage.elements.logo()).toBeVisible();
  });

  await test.step("Click on the signup/login button", async () => {
    await homePage.clickSignUpLoginButton();
  });
});
