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

  const routes = [
    { label: "About", url: "/about", heading: "About Navpahal" },
    { label: "Programs", url: "/programs", heading: "Programs" },
    { label: "Training", url: "/training", heading: "Training" },
    { label: "Get Involved", url: "/get-involved", heading: "Get Involved" },
    { label: "Impact", url: "/impact", heading: "Impact" },
    { label: "Resources", url: "/resources", heading: "Resources" },
    { label: "Contact", url: "/contact", heading: "Contact" },
  ];

  for (const route of routes) {
    await nav.getByRole("link", { name: route.label }).click();
    await expect(page).toHaveURL(route.url);
  }

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
  const sendBtn = page.getByRole("button", { name: "Send Message" });
  await expect(sendBtn).toBeDisabled();

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
  const imgs = await page.locator("img[src*='googleusercontent']").count();
  expect(imgs).toBe(0);
});

test("skip link keyboard flow: Tab to focus, Enter to jump to main", async ({ page }) => {
  await page.goto("/");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content/);
  const activeId = await page.evaluate(() => document.activeElement?.id);
  expect(activeId).toBe("main-content");
});

test("desktop navigation has aria-current on active link", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chromium", "desktop nav hidden on mobile");
  await page.goto("/about");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  const aboutLink = nav.getByRole("link", { name: "About" });
  await expect(aboutLink).toHaveAttribute("aria-current", "page");
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

test("escape closes the mobile menu and returns focus to open button", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const openButton = page.getByRole("button", { name: "Open menu" });
  await openButton.click();
  const closeButton = page.getByRole("button", { name: "Close menu" });
  await expect(closeButton).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(closeButton).not.toBeVisible();
  await expect(openButton).toBeFocused();
});

test("close button receives focus when mobile menu opens", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();

  const closeButton = page.getByRole("button", { name: "Close menu" });
  await expect(closeButton).toBeVisible();
  await expect(closeButton).toBeFocused();
});

test("pillar modal opens and closes with keyboard, focus returns to trigger", async ({ page }) => {
  await page.goto("/");
  const learnMoreButtons = page.getByRole("button", { name: "Learn More" });
  const firstLearnMore = learnMoreButtons.first();
  await firstLearnMore.focus();

  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();

  const closeButton = page.getByRole("button", { name: "Close" });
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(firstLearnMore).toBeFocused();
});

test("404 page has link to programs", async ({ page }) => {
  await page.goto("/unknown-page");
  await expect(page.getByRole("link", { name: "View Programs" })).toBeVisible();
});

test("no horizontal overflow at 320px width on all routes", async ({ page }) => {
  const routes = [
    "/",
    "/about",
    "/programs",
    "/training",
    "/get-involved",
    "/impact",
    "/resources",
    "/contact",
    "/unknown-page",
  ];
  for (const route of routes) {
    await page.setViewportSize({ width: 320, height: 600 });
    await page.goto(route);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  }
});

test("direct loading of all eight routes", async ({ page }) => {
  const pages = [
    { url: "/", heading: /Empowering Communities/i },
    { url: "/about", heading: "About Navpahal" },
    { url: "/programs", heading: "Programs" },
    { url: "/training", heading: "Training" },
    { url: "/get-involved", heading: "Get Involved" },
    { url: "/impact", heading: "Impact" },
    { url: "/resources", heading: "Resources" },
    { url: "/contact", heading: "Contact" },
  ];

  for (const { url, heading } of pages) {
    await page.goto(url);
    await expect(page.getByRole("heading", { name: heading }).first()).toBeVisible();
  }
});
