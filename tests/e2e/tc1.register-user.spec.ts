import { test, expect } from "@fixtures/auto-exe.page.fixture.js";
import { newValidUserData } from "@test-data/users.js";

test("TC1: Register user", async ({ ui }) => {
  const user = newValidUserData();

  await test.step("Navigate to Automation Exercise home page", async () => {
    await ui.autoExe.HomePage.goto();
  });

  await test.step("Verify that home page is visible successfully", async () => {
    await expect(ui.autoExe.HomePage.elements.logo()).toBeVisible();
  });

  await test.step("Click on 'Signup / Login' button", async () => {
    await ui.autoExe.HomePage.clickSignUpLoginButton();
  });

  await test.step("Verify 'New User Signup!' is visible", async () => {
    await expect(ui.autoExe.LoginPage.elements.newUserSignUpTitle()).toBeVisible();
  });

  await test.step("Enter name and email address", async () => {
    await ui.autoExe.LoginPage.fillSignUpNameTextbox(user.name);
    await ui.autoExe.LoginPage.fillSignUpEmailTextbox(user.email);
  });

  await test.step("Click 'Signup' button", async () => {
    await ui.autoExe.LoginPage.clickSignUpButton();
  });

  await test.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
    await expect(ui.autoExe.SignupPage.elements.enterAccountInformationTitle()).toBeVisible();
  });

  await test.step("Fill details: Title, Name, Email, Password, Date of birth", async () => {
    await ui.autoExe.SignupPage.clickTitleMrRadio(user.title);
    await ui.autoExe.SignupPage.fillAccountInformationPasswordTextbox(user.password);
    await ui.autoExe.SignupPage.selectDayOfBirth(user.dob.getDate().toString());
    await ui.autoExe.SignupPage.selectMonthOfBirth((user.dob.getMonth() + 1).toString());
    await ui.autoExe.SignupPage.selectYearOfBirth(user.dob.getFullYear().toString());
  });

  await test.step("Select checkbox 'Sign up for our newsletter!'", async () => {
    await ui.autoExe.SignupPage.setNewsletterCheckbox(user.signUpForNewsletter);
  });

  await test.step("Select checkbox 'Receive special offers from our partners!'", async () => {
    await ui.autoExe.SignupPage.setSpecialOfferCheckbox(user.receiveSpecialOffers);
  });

  await test.step("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
    await ui.autoExe.SignupPage.fillFirstNameTextbox(user.firstName);
    await ui.autoExe.SignupPage.fillLastNameTextbox(user.lastName);
    await ui.autoExe.SignupPage.fillCompanyTextbox(user.company);
    await ui.autoExe.SignupPage.fillAddress1Textbox(user.address);
    await ui.autoExe.SignupPage.fillAddress2Textbox(user.address2);
    await ui.autoExe.SignupPage.selectCountry(user.country);
    await ui.autoExe.SignupPage.fillStateTextbox(user.state);
    await ui.autoExe.SignupPage.fillCityTextbox(user.city);
    await ui.autoExe.SignupPage.fillZipcodeTextbox(user.zipcode);
    await ui.autoExe.SignupPage.fillMobileNumberTextbox(user.mobileNumber);
  });

  await test.step("Click 'Create Account button'", async () => {
    await ui.autoExe.SignupPage.clickCreateAccountButton();
  });

  await test.step("Verify that 'ACCOUNT CREATED!' is visible", async () => {
    await expect(ui.autoExe.AccountCreatedPage.elements.title()).toBeVisible();
  });

  await test.step("Click 'Continue' button", async () => {
    await ui.autoExe.AccountCreatedPage.clickContinueButton();
  });

  await test.step("Verify that 'Logged in as username' is visible", async () => {
    await expect(ui.autoExe.HomePage.elements.loggedInAsUsernameText()).toBeVisible();
  });

  await test.step("Click 'Delete Account' button", async () => {
    await ui.autoExe.HomePage.clickDeleteAccountButton();
  });

  await test.step("Verify that 'ACCOUNT DELETED!'", async () => {
    await expect(ui.autoExe.AccountDeletedPage.elements.title()).toBeVisible();
  });
});
