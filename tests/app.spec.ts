import { test, expect } from "@playwright/test";
import { throwIfConsole } from "./testUtils";

test("should fail the test when an HTTP call times out and provide a helpful error message", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  throwIfConsole(page);

  await expect(
    page.getByRole("heading", { name: "Playwright Timeout Demo" })
  ).toBeVisible();

  // Shouldn't get here because the GET posts HTTP call will time out
  await expect(page.getByText("json-server")).toBeVisible();
});
