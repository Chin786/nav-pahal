import { test, expect } from "@playwright/test";

test.describe("Route titles", () => {
  test("home page has default title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Navpahal | Aware. Engage. Empower.");
  });

  test("route /about has title About | Navpahal", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle("About | Navpahal");
  });

  test("route /programs has title Programs | Navpahal", async ({ page }) => {
    await page.goto("/programs");
    await expect(page).toHaveTitle("Programs | Navpahal");
  });

  test("route /training has title Training | Navpahal", async ({ page }) => {
    await page.goto("/training");
    await expect(page).toHaveTitle("Training | Navpahal");
  });

  test("route /get-involved has title Get Involved | Navpahal", async ({ page }) => {
    await page.goto("/get-involved");
    await expect(page).toHaveTitle("Get Involved | Navpahal");
  });

  test("route /impact has title Impact | Navpahal", async ({ page }) => {
    await page.goto("/impact");
    await expect(page).toHaveTitle("Impact | Navpahal");
  });

  test("route /resources has title Resources | Navpahal", async ({ page }) => {
    await page.goto("/resources");
    await expect(page).toHaveTitle("Resources | Navpahal");
  });

  test("route /contact has title Contact | Navpahal", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle("Contact | Navpahal");
  });
});

test.describe("Unique page-level h1", () => {
  const routes = [
    { path: "/", heading: /Empowering Communities/i },
    { path: "/about", heading: "About Navpahal" },
    { path: "/programs", heading: "Programs" },
    { path: "/training", heading: "Training" },
    { path: "/get-involved", heading: "Get Involved" },
    { path: "/impact", heading: "Impact" },
    { path: "/resources", heading: "Resources" },
    { path: "/contact", heading: "Contact" },
  ];

  for (const { path, heading } of routes) {
    test(`route ${path} has exactly one h1`, async ({ page }) => {
      await page.goto(path);
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBe(1);
    });

    test(`route ${path} h1 matches expected content`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole("heading", { name: heading, level: 1 }).first()).toBeVisible();
    });
  }
});

test.describe("Disabled and labelled Contact fields", () => {
  test("contact-first-name is disabled and labelled", async ({ page }) => {
    await page.goto("/contact");
    const input = page.getByLabel("First Name");
    await expect(input).toBeDisabled();
    await expect(input).toHaveAttribute("id", "contact-first-name");
  });

  test("contact-last-name is disabled and labelled", async ({ page }) => {
    await page.goto("/contact");
    const input = page.getByLabel("Last Name");
    await expect(input).toBeDisabled();
    await expect(input).toHaveAttribute("id", "contact-last-name");
  });

  test("contact-subject is disabled and labelled", async ({ page }) => {
    await page.goto("/contact");
    const input = page.getByLabel("Subject");
    await expect(input).toBeDisabled();
    await expect(input).toHaveAttribute("id", "contact-subject");
  });

  test("contact-message textarea is disabled and labelled", async ({ page }) => {
    await page.goto("/contact");
    const textarea = page.getByLabel("Message");
    await expect(textarea).toBeDisabled();
    await expect(textarea).toHaveAttribute("id", "contact-message");
  });
});

test.describe("Disabled and labelled Get Involved fields", () => {
  test("involvement-full-name is disabled and labelled", async ({ page }) => {
    await page.goto("/get-involved");
    const input = page.getByLabel("Full Name");
    await expect(input).toBeDisabled();
    await expect(input).toHaveAttribute("id", "involvement-full-name");
  });

  test("involvement-email is disabled and labelled", async ({ page }) => {
    await page.goto("/get-involved");
    const input = page.getByLabel("Email Address");
    await expect(input).toBeDisabled();
    await expect(input).toHaveAttribute("id", "involvement-email");
  });
});

test.describe("Security response headers", () => {
  test("X-Content-Type-Options is set to nosniff", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
  });

  test("Referrer-Policy is set to strict-origin-when-cross-origin", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  });

  test("X-Frame-Options is set to DENY", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["x-frame-options"]).toBe("DENY");
  });

  test("Permissions-Policy restricts camera, microphone, geolocation", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["permissions-policy"]).toContain("camera=()");
    expect(headers["permissions-policy"]).toContain("microphone=()");
    expect(headers["permissions-policy"]).toContain("geolocation=()");
  });
});

test.describe("404 page", () => {
  test("shows 404 for unknown routes", async ({ page }) => {
    await page.goto("/unknown-page");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("Page Not Found")).toBeVisible();
  });

  test("404 page has link to programs", async ({ page }) => {
    await page.goto("/unknown-page");
    await expect(page.getByRole("link", { name: "View Programs" })).toBeVisible();
  });
});

test.describe("Skip link keyboard flow", () => {
  test("Tab to focus, Enter to jump to main", async ({ page }) => {
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
});

test.describe("No horizontal overflow at 320px", () => {
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
    test(`route ${route} has no horizontal overflow at 320px`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 600 });
      await page.goto(route);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }
});
