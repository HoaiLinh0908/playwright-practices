import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SignupLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get elements() {
    return {
      ...super.elements,
      emailAddressInput: () => this.page.locator("#email"),
      signUpButton: () => this.page.getByRole("button", { name: "Signup" }),
    };
  }
}
