import { test, expect } from "@playwright/test";

test("should fail the test when an HTTP call times out and provide a helpful error message", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  console.log("test");

  page.on("console", (msg) => {
    throw new Error("Should not have any console logs");
  });

  // Should never get here because the GET posts HTTP call will time out
  await expect(page.getByText("json-server")).toBeVisible();

  await expect(page).toHaveTitle("Vite + React + TS");
});
