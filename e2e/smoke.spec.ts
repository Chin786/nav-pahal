import { describe, it, expect } from "@playwright/test";

describe("Desktop navigation", () => {
  it("loads the home page and displays the brand", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("NAVPAHAL").first()).toBeVisible();
    await expect(page.getByText("Empowering Communities")).toBeVisible();
  });

  it("navigates to all eight routes via header links", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByText("About Navpahal")).toBeVisible();

    await page.getByRole("link", { name: "Programs" }).click();
    await expect(page).toHaveURL("/programs");

    await page.getByRole("link", { name: "Training" }).click();
    await expect(page).toHaveURL("/training");

    await page.getByRole("link", { name: "Get Involved" }).click();
    await expect(page).toHaveURL("/get-involved");

    await page.getByRole("link", { name: "Impact" }).click();
    await expect(page).toHaveURL("/impact");

    await page.getByRole("link", { name: "Resources" }).click();
    await expect(page).toHaveURL("/resources");

    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");

    await page.getByRole("link", { name: "Home" }).first().click();
    await expect(page).toHaveURL("/");
  });

  it("displays the service boundary in the footer", async ({ page }) => {
    await page.goto("/");
    const boundary = page.getByTestId("service-boundary");
    await expect(boundary).toBeVisible();
    await expect(boundary).toContainText("In an active emergency");
    await expect(boundary).toContainText("does not replace");
  });

  it("shows 404 page for unknown routes", async ({ page }) => {
    await page.goto("/unknown-page");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("Page Not Found")).toBeVisible();
  });

  it("does not contain fabricated claims", async ({ page }) => {
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
});

describe("Mobile navigation", () => {
  it("opens and closes the mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();

    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
  });

  it("navigates through mobile menu to all routes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const routes = [
      { label: "About", path: "/about" },
      { label: "Programs", path: "/programs" },
      { label: "Training", path: "/training" },
      { label: "Contact", path: "/contact" },
    ];

    for (const route of routes) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("link", { name: route.label }).click();
      await expect(page).toHaveURL(route.path);
    }
  });
});
