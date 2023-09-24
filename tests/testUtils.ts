import { Page } from "@playwright/test";

// To keep the console clean, fail test immediately if a console message occurs.
export function throwIfConsole(page: Page) {
  page.on("console", (message) => {
    // Optionally, can check for only errors like this: if (message.type() === "error") {
    throw new Error(message.text());
  });
}
