import { expect, test as playwrightTest } from "@playwright/test";

// Inspiration: https://www.youtube.com/watch?v=2O7dyz6XO2s
const test = playwrightTest.extend({
  app: async ({ page }, use) => {
    // To keep the console clean, fail test immediately if a console message occurs.
    page.on("console", (message) => {
      // Optionally, can check for only errors like this: if (message.type() === "error") {
      throw new Error(message.text());
    });
    await use(page);
  },
});

export { expect, test };
