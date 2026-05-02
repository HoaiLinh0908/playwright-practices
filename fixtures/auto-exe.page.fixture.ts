import { test as base } from "@playwright/test";
import { createPages, UIType } from "./page-index.js";
import { AutoExeAPI } from "../utils/auto-exe.api.js";

export const test = base.extend<{ ui: UIType; api: AutoExeAPI }>({
  ui: async ({ page }, use) => {
    await use(createPages(page));
  },
  api: async ({ request }, use) => {
    const baseURL = "https://automationexercise.com";
    const api = new AutoExeAPI(request, baseURL);
    await use(api);
  },
});

export { expect } from "@playwright/test";
