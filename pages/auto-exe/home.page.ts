import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get elements() {
    return {
      ...super.elements,
    };
  }

  async goto() {
    await this.page.goto("/");
  }
}
