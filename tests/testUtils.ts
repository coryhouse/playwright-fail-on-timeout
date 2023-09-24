import { Page } from "@playwright/test";

// To keep the console clean, throw an error to fail the test immediately if a console message occurs.
export function throwOnConsole(page: Page) {
  page.on("console", (message) => {
    // Optionally, can check for only errors like this: if (message.type() === "error") {
    throw new Error(message.text());
  });
}
