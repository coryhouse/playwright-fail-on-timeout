import { test, expect } from "@playwright/test";

test("should fail the test when an HTTP call times out and provide a helpful error message", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  page.on("console", (message) => {
    // Optionally, can filter for just errors like this:
    // if (message.type() === "error") {
    // To keep the console clean, fail tests immediately when a console message occurs.
    throw new Error(message.text());
  });

  await expect(
    page.getByRole("heading", { name: "Playwright Timeout Demo" })
  ).toBeVisible();

  // Shouldn't get here because the GET posts HTTP call will time out
  await expect(page.getByText("json-server")).toBeVisible();
});
