import { test, expect } from "./myTest.extend";

test("should fail the test when an HTTP call times out and provide a helpful error message", async ({
  app,
}) => {
  await app.goto("http://localhost:3000");

  await expect(
    app.getByRole("heading", { name: "Playwright Timeout Demo" })
  ).toBeVisible();

  // Shouldn't get here because the GET posts HTTP call will time out
  await expect(app.getByText("json-server")).toBeVisible();
});
