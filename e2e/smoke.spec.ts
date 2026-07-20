import { test, expect } from "@playwright/test";

test("loads the home page and displays the brand", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("NAVPAHAL").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /Empowering Communities/i })).toBeVisible();
});

test("navigates to all eight routes via header links", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chromium", "desktop nav hidden on mobile");
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Main navigation" });

  await nav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL("/about");
  await expect(page.getByRole("heading", { name: "About Navpahal" })).toBeVisible();

  await nav.getByRole("link", { name: "Programs" }).click();
  await expect(page).toHaveURL("/programs");

  await nav.getByRole("link", { name: "Training" }).click();
  await expect(page).toHaveURL("/training");

  await nav.getByRole("link", { name: "Get Involved" }).click();
  await expect(page).toHaveURL("/get-involved");

  await nav.getByRole("link", { name: "Impact" }).click();
  await expect(page).toHaveURL("/impact");

  await nav.getByRole("link", { name: "Resources" }).click();
  await expect(page).toHaveURL("/resources");

  await nav.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL("/contact");

  await nav.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("/");
});

test("displays the service boundary in the footer", async ({ page }) => {
  await page.goto("/");
  const boundary = page.getByTestId("service-boundary");
  await expect(boundary).toBeVisible();
  await expect(boundary).toContainText("In an active emergency");
  await expect(boundary).toContainText("does not replace");
});

test("shows submission-not-active disclosure on contact page", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByText(/Online submissions are not yet active/).first()).toBeVisible();
});

test("shows submission-not-active disclosure on get-involved page", async ({ page }) => {
  await page.goto("/get-involved");
  await expect(page.getByText(/Online submissions are not yet active/).first()).toBeVisible();
});

test("shows disabled submit buttons", async ({ page }) => {
  await page.goto("/contact");
  const submitBtn = page.getByRole("button", { name: "Send Message" });
  await expect(submitBtn).toBeDisabled();

  await page.goto("/get-involved");
  const applyBtn = page.getByRole("button", { name: "Submit Application" });
  await expect(applyBtn).toBeDisabled();
});

test("does not contain unverified contact details", async ({ page }) => {
  await page.goto("/contact");
  const body = await page.textContent("body");
  expect(body).not.toContain("42 Impact Square");
  expect(body).not.toContain("connect@navpahal.org");
  expect(body).not.toContain("+91 1800 200 4000");
  expect(body).not.toContain("navpahal.org");
});

test("does not contain false success messages", async ({ page }) => {
  await page.goto("/");
  const body = await page.textContent("body");
  expect(body).not.toContain("Message Sent Successfully");
  expect(body).not.toContain("Registration Submitted");
  expect(body).not.toContain("application has been received");
  expect(body).not.toContain("Subscribed successfully");
});

test("shows 404 page for unknown routes", async ({ page }) => {
  await page.goto("/unknown-page");
  await expect(page.getByText("404")).toBeVisible();
  await expect(page.getByText("Page Not Found")).toBeVisible();
});

test("does not contain fabricated claims", async ({ page }) => {
  await page.goto("/");
  const body = await page.textContent("body");
  expect(body).not.toContain("1M+");
  expect(body).not.toContain("10K+");
  expect(body).not.toContain("500+");
  expect(body).not.toContain("SOS System");
  expect(body).not.toContain("Amit Sharma");
  expect(body).not.toContain("live databases");
  expect(body).not.toContain("Developer Console");
});

test("does not display hero image from external source", async ({ page }) => {
  await page.goto("/");
  const imgs = await page.locator("img[src*='googleuserconten']").count();
  expect(imgs).toBe(0);
});

test("opens and closes the mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open menu" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();

  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL("/about");
});

test("navigates through mobile menu to routes", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const routes = [
    { label: "Training", path: "/training" },
    { label: "Contact", path: "/contact" },
  ];

  for (const route of routes) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("banner").getByRole("link", { name: route.label }).click();
    await expect(page).toHaveURL(route.path);
  }
});
