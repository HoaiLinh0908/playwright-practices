import { Locator, Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  get elements() {
    return {
        logo: () => this.page.locator('img[alt="Website for automation practice"]'),
        signUpLoginButton: () => this.page.getByRole('link', { name: ' Signup / Login' }),
    }
  }

  async clickSignUpLoginButton(force=false) {
    await this.elements.signUpLoginButton().click({force});
  }
}