import { test as base } from "@playwright/test";
import {createLazyObjects} from "./lazy-init";
import * as Pages from "@pages";

type PageConstructors = {
  HomePage: typeof Pages.HomePage;
  SignupLoginPage: typeof Pages.SignupLoginPage;
};

type LazyPages = {
  [K in keyof PageConstructors]: InstanceType<PageConstructors[K]>;
};

export const test = base.extend<{ autoExercise: LazyPages }>({
  autoExercise: async ({ page }, use) => {
    const { ...allPages } = Pages;
    const lazyPages = createLazyObjects(allPages, page);
    await use(lazyPages);
  },
});

export { expect } from "@playwright/test";
