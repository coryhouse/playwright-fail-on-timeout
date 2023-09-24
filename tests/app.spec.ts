import { test, expect } from "@playwright/test";
import { goTo } from "./testUtils";

test("should fail the test when an HTTP call times out and provide a helpful error message", async ({
  page,
}) => {
  await goTo(page, "http://localhost:3000");

  await expect(
    page.getByRole("heading", { name: "Playwright Timeout Demo" })
  ).toBeVisible();

  // Shouldn't get here because the GET posts HTTP call will time out
  await expect(page.getByText("json-server")).toBeVisible();
});
