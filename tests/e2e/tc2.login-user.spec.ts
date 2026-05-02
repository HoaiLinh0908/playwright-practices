import { test, expect } from "@fixtures/auto-exe.page.fixture.js";
import { newValidUserData } from "@test-data/users.js";

test("TC2: Login User with correct email and password", async ({ ui, api }) => {
  const user = newValidUserData();

  await test.step("Create user account via API", async () => {
    await api.createAccount(user);
  });

  await test.step("Navigate to Automation Exercise home page", async () => {
    await ui.autoExe.HomePage.goto();
  });

  await test.step("Verify that home page is visible successfully", async () => {
    await expect(ui.autoExe.HomePage.elements.logo()).toBeVisible();
  });

  await test.step("Click on 'Signup / Login' button", async () => {
    await ui.autoExe.HomePage.clickSignUpLoginButton();
  });

  await test.step("Verify 'Login to your account' is visible", async () => {
    await expect(ui.autoExe.LoginPage.elements.loginToYourAccountTitle()).toBeVisible();
  });

  await test.step("Enter correct email address and password", async () => {
    await ui.autoExe.LoginPage.fillLoginEmailTextbox(user.email);
    await ui.autoExe.LoginPage.fillLoginPasswordTextbox(user.password);
  });

  await test.step("Click 'login' button", async () => {
    await ui.autoExe.LoginPage.clickLoginButton();
  });

  await test.step("Verify that 'Logged in as username' is visible", async () => {
    await expect(ui.autoExe.HomePage.elements.loggedInAsUsernameText()).toBeVisible();
  });

  await test.step("Click 'Delete Account' button", async () => {
    await ui.autoExe.HomePage.clickDeleteAccountButton();
  });

  await test.step("Verify that 'ACCOUNT DELETED!' is visible", async () => {
    await expect(ui.autoExe.AccountDeletedPage.elements.title()).toBeVisible();
  });
});

