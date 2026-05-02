import { Page } from "@playwright/test";
import { AutoExeBasePage } from "./base.page.js";

export class LoginPage extends AutoExeBasePage {
  constructor(page: Page) {
    super(page);
  }

  get elements() {
    return {
      ...super.elements,
      newUserSignUpTitle: () => this.page.getByRole("heading", { name: "New User Signup!" }),
      signUpNameTextbox: () => this.page.locator("div.signup-form input[name='name']"),
      signUpEmailTextbox: () => this.page.locator("div.signup-form input[name='email']"),
      signUpButton: () => this.page.getByRole("button", { name: "Signup" }),
      loginToYourAccountTitle: () => this.page.getByRole("heading", { name: "Login to your account" }),
      loginEmailTextbox: () => this.page.locator("div.login-form input[name='email']"),
      loginPasswordTextbox: () => this.page.locator("div.login-form input[name='password']"),
      loginButton: () => this.page.locator("div.login-form").getByRole("button", { name: "Login" }),
    };
  }

  async fillSignUpNameTextbox(name: string) {
    await this.elements.signUpNameTextbox().fill(name);
  }

  async fillSignUpEmailTextbox(email: string) {
    await this.elements.signUpEmailTextbox().fill(email);
  }

  async clickSignUpButton() {
    await this.elements.signUpButton().click();
  }

  async fillLoginEmailTextbox(email: string) {
    await this.elements.loginEmailTextbox().fill(email);
  }

  async fillLoginPasswordTextbox(password: string) {
    await this.elements.loginPasswordTextbox().fill(password);
  }

  async clickLoginButton() {
    await this.elements.loginButton().click();
  }
}
