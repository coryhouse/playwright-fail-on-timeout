import { Page } from "@playwright/test";

// To keep the console clean, throw an error to fail the test immediately if a console message occurs.
export function throwOnConsole(page: Page) {
  page.on("console", (message) => {
    // Optionally, can check for only errors like this: if (message.type() === "error") {
    throw new Error(message.text());
  });
}

// Simple abstraction that loads a page and configures the console to throw an error if a console message occurs.
export async function goTo(page: Page, path: string) {
  await page.goto(path);
  throwOnConsole(page);
}
