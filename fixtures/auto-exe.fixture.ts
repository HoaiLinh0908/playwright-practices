import { test as base } from "@playwright/test";
import { HomePage, SignupLoginPage } from "@pages";

type AutoExeFixtures = {
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
};

export const test = base.extend<AutoExeFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  },
});

export { expect } from "@playwright/test";
