import { Page } from "@playwright/test";
import { AutoExeBasePage } from "./base.page.js";

export class AccountCreatedPage extends AutoExeBasePage {
  constructor(page: Page) {
    super(page);
  }

  get elements() {
    return {
      ...super.elements,
      title: () => this.page.getByRole("heading", { name: "Account Created!" }),
    };
  }
}
