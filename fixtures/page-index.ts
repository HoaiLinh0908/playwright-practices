import * as autoExePages from "@pages/auto-exe/index.js";
import { Page } from "@playwright/test";
import { createLazyObjects } from "./lazy-init.js";

export function createPages(page: Page) {
  return {
    autoExe: createLazyObjects(autoExePages, page),
  };
}

export type UIType = ReturnType<typeof createPages>;
