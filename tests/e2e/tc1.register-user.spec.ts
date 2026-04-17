import { test, expect } from "@fixtures/auto-exe.page.fixture";

test("Test Case 1: Register User", async ({ autoExercise }) => {
  await test.step("Navigate to Automation Exercise home page", async () => {
    await autoExercise.HomePage.goto();
  });

  await test.step("Verify that home page is visible successfully", async () => {
    await expect(autoExercise.HomePage.elements.logo()).toBeVisible();
  });

  await test.step("Click on the signup/login button", async () => {
    await autoExercise.HomePage.clickSignUpLoginButton();
  });
});
