import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

beforeEach(() => {
  localStorage.clear();
  document.title = "";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.remove();
});

describe("Skip link", () => {
  it("renders a skip-to-main-content link", () => {
    renderApp();
    const skipLink = screen.getByRole("link", { name: "Skip to main content" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});

describe("Main landmark", () => {
  const routes = [
    "/",
    "/about",
    "/programs",
    "/training",
    "/get-involved",
    "/impact",
    "/resources",
    "/contact",
    "/unknown-route",
  ];

  routes.forEach((route) => {
    it(`has a main landmark on ${route}`, () => {
      renderApp(route);
      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute("id", "main-content");
    });
  });
});

describe("Page-level h1", () => {
  it("renders exactly one h1 on the home page", () => {
    renderApp("/");
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBe(1);
  });

  it("renders exactly one h1 on the about page", () => {
    renderApp("/about");
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBe(1);
  });

  it("renders exactly one h1 on the get-involved page", () => {
    renderApp("/get-involved");
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBe(1);
  });
});

describe("Header navigation", () => {
  it("renders the NAVPAHAL brand", () => {
    renderApp();
    expect(screen.getAllByText("NAVPAHAL").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all eight navigation links in header", () => {
    renderApp();
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    expect(nav).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Programs" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Training" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Get Involved" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Impact" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Resources" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders the Join Initiative CTA", () => {
    renderApp();
    expect(screen.getByRole("link", { name: "Join Initiative" })).toBeInTheDocument();
  });

  it("marks active nav link with aria-current=page on home", () => {
    renderApp("/");
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    const homeLink = within(nav).getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("aria-current", "page");
  });

  it("marks active nav link with aria-current=page on about", () => {
    renderApp("/about");
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    const aboutLink = within(nav).getByRole("link", { name: "About" });
    expect(aboutLink).toHaveAttribute("aria-current", "page");
  });
});

describe("Primary calls to action", () => {
  it("renders Join the Movement button on home page", () => {
    renderApp();
    expect(screen.getByRole("link", { name: "Join the Movement" })).toBeInTheDocument();
  });

  it("renders Our Programs link on home page", () => {
    renderApp();
    expect(screen.getByRole("link", { name: "Our Programs" })).toBeInTheDocument();
  });
});

describe("Service boundary", () => {
  it("displays the service boundary warning in the footer", () => {
    renderApp();
    const boundary = screen.getByTestId("service-boundary");
    expect(boundary).toBeInTheDocument();
    expect(boundary).toHaveTextContent("In an active emergency");
    expect(boundary).toHaveTextContent("does not replace doctors");
    expect(boundary).toHaveTextContent("hospitals");
    expect(boundary).toHaveTextContent("police");
    expect(boundary).toHaveTextContent("fire services");
    expect(boundary).toHaveTextContent("ambulances");
    expect(boundary).toHaveTextContent("professional emergency responders");
  });
});

describe("Submission-not-active disclosure", () => {
  it("shows disclosure on contact page", () => {
    renderApp("/contact");
    expect(
      screen.getAllByText(/Online submissions are not yet active/).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows disclosure on get-involved page", () => {
    renderApp("/get-involved");
    expect(
      screen.getAllByText(/Online submissions are not yet active/).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows disabled submit button on contact form", () => {
    renderApp("/contact");
    const btn = screen.getByRole("button", { name: "Send Message" });
    expect(btn).toBeDisabled();
  });

  it("shows disabled submit button on volunteer form", () => {
    renderApp("/get-involved");
    const btn = screen.getByRole("button", { name: "Submit Application" });
    expect(btn).toBeDisabled();
  });
});

describe("No localStorage persistence", () => {
  it("does not store contact messages in localStorage", () => {
    renderApp("/contact");
    expect(localStorage.getItem("navpahal_contact_messages")).toBeNull();
  });

  it("does not store volunteer registrations in localStorage", () => {
    renderApp("/get-involved");
    expect(localStorage.getItem("navpahal_volunteers")).toBeNull();
  });
});

describe("Removal of unsafe claims", () => {
  it("does not display fabricated quantitative claims", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("1M+");
    expect(body).not.toContain("10K+");
    expect(body).not.toContain("500+");
    expect(body).not.toContain("85%");
    expect(body).not.toContain("12K+");
    expect(body).not.toContain("10,000+");
  });

  it("does not display SOS simulator or dispatch functionality", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("SOS System");
    expect(body).not.toContain("Trigger Test SOS");
    expect(body).not.toContain("Dispatch Loop");
    expect(body).not.toContain("Locating doctors");
  });

  it("does not display invented expert names", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("Amit Sharma");
    expect(body).not.toContain("Priya Iyer");
    expect(body).not.toContain("Zaid Khan");
  });

  it("does not display live database language", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("live databases");
    expect(body).not.toContain("Live Database");
  });

  it("does not display automatic volunteer approval", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toMatch(/status.*approved/i);
  });

  it("does not display certificate activation from quiz", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("certificate active");
    expect(body).not.toContain("Graduate certificate");
  });

  it("does not display fabricated performance metrics", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("under 3 minutes");
    expect(body).not.toContain("1.4 Minutes");
    expect(body).not.toContain("98.7%");
    expect(body).not.toContain("90% Response");
    expect(body).not.toContain("75% Graduates");
    expect(body).not.toContain("60% Data");
    expect(body).not.toContain("85% Transparency");
  });

  it("does not contain developer/admin console", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("Developer Console");
    expect(body).not.toContain("Admin Panel");
    expect(body).not.toContain("Seed Demo");
    expect(body).not.toContain("developer console");
  });

  it("does not display false success messages", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("Message Sent Successfully");
    expect(body).not.toContain("Registration Submitted");
    expect(body).not.toContain("application has been received");
    expect(body).not.toContain("Subscribed successfully");
  });

  it("does not display unverified contact details", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("42 Impact Square");
    expect(body).not.toContain("connect@navpahal.org");
    expect(body).not.toContain("+91 1800 200 4000");
  });

  it("displays unverified contact placeholder instead", () => {
    renderApp("/contact");
    expect(
      screen.getAllByText(/Official contact details will be published after verification/).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("does not display Recent Registrations", () => {
    renderApp();
    const body = document.body.textContent || "";
    expect(body).not.toContain("Recent Registrations");
  });

  it("does not display hero image from external source", () => {
    renderApp();
    const imgs = document.querySelectorAll("img[src*='googleusercontent']");
    expect(imgs.length).toBe(0);
  });
});

describe("Draft and verification labels", () => {
  it("displays awaiting-verification badges on about page", () => {
    renderApp("/about");
    expect(screen.getByText("Awaiting Verification")).toBeInTheDocument();
  });

  it("displays draft badge on programs page", () => {
    renderApp("/programs");
    expect(screen.getByText("Draft")).toBeInTheDocument();
  });

  it("displays awaiting-verification badge on impact page", () => {
    renderApp("/impact");
    expect(screen.getByText("Awaiting Verification")).toBeInTheDocument();
  });

  it("displays under-development badge on resources page", () => {
    renderApp("/resources");
    expect(screen.getByText("Under Development")).toBeInTheDocument();
  });
});

describe("Route rendering", () => {
  it("renders Home page at root path", () => {
    renderApp("/");
    expect(screen.getByRole("heading", { name: /Empowering Communities/i })).toBeInTheDocument();
  });

  it("renders About page at /about", () => {
    renderApp("/about");
    expect(screen.getByRole("heading", { name: "About Navpahal" })).toBeInTheDocument();
  });

  it("renders Programs page at /programs", () => {
    renderApp("/programs");
    expect(screen.getByRole("heading", { name: "Programs", level: 1 })).toBeInTheDocument();
  });

  it("renders Training page at /training", () => {
    renderApp("/training");
    expect(screen.getByRole("heading", { name: "Training", level: 1 })).toBeInTheDocument();
  });

  it("renders Get Involved page at /get-involved", () => {
    renderApp("/get-involved");
    const headings = screen.getAllByRole("heading", { name: "Get Involved" });
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Impact page at /impact", () => {
    renderApp("/impact");
    expect(screen.getByRole("heading", { name: "Impact", level: 1 })).toBeInTheDocument();
  });

  it("renders Resources page at /resources", () => {
    renderApp("/resources");
    expect(screen.getByRole("heading", { name: "Resources", level: 1 })).toBeInTheDocument();
  });

  it("renders Contact page at /contact", () => {
    renderApp("/contact");
    expect(screen.getByRole("heading", { name: "Contact", level: 1 })).toBeInTheDocument();
  });

  it("renders NotFound page for unknown routes", () => {
    renderApp("/unknown-route");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return Home" })).toBeInTheDocument();
  });
});

describe("Route metadata", () => {
  it("sets document title for home page", () => {
    renderApp("/");
    expect(document.title).toBe("Navpahal | Aware. Engage. Empower.");
  });

  it("sets document title for about page", () => {
    renderApp("/about");
    expect(document.title).toBe("About | Navpahal");
  });

  it("sets meta description for contact page", () => {
    renderApp("/contact");
    const meta = document.querySelector('meta[name="description"]');
    expect(meta).toBeTruthy();
    expect(meta!.getAttribute("content")).toBeTruthy();
  });
});
