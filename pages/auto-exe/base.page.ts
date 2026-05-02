import { Page } from "@playwright/test";

export abstract class AutoExeBasePage {
  constructor(protected page: Page) {}

  get elements() {
    return {
      logo: () => this.page.locator('img[alt="Website for automation practice"]'),
      signUpLoginButton: () => this.page.getByRole("link", { name: " Signup / Login" }),
      deleteAccountButton: () => this.page.getByRole("link", { name: "Delete Account" }),
      loggedInAsUsernameText: () => this.page.locator("a").filter({ hasText: "Logged in as" }),
      continueButton: () => this.page.getByRole("link", { name: "Continue" }),
    };
  }

  getPage() {
    return this.page;
  }

  async clickSignUpLoginButton(force = false) {
    await this.elements.signUpLoginButton().click({ force });
  }

  async clickDeleteAccountButton() {
    await this.elements.deleteAccountButton().click();
  }

  async clickContinueButton() {
    await this.elements.continueButton().click();
  }
}
