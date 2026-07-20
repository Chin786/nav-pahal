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
});

describe("Primary calls to action", () => {
  it("renders Join the Movement button on home page", () => {
    renderApp();
    expect(screen.getByRole("link", { name: "Join the Movement" })).toBeInTheDocument();
  });

  it("renders View Our Impact link on home page", () => {
    renderApp();
    expect(screen.getByRole("link", { name: "View Our Impact" })).toBeInTheDocument();
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
    expect(body).not.toMatch(/status.*Approved/i);
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

  it("displays submission-not-active disclosure", () => {
    renderApp();
    expect(
      screen.getAllByText(/Online submissions are not yet active/).length,
    ).toBeGreaterThanOrEqual(1);
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
    expect(screen.getByRole("heading", { name: "Programs" })).toBeInTheDocument();
  });

  it("renders Training page at /training", () => {
    renderApp("/training");
    expect(screen.getByRole("heading", { name: "Training" })).toBeInTheDocument();
  });

  it("renders Get Involved page at /get-involved", () => {
    renderApp("/get-involved");
    expect(screen.getByRole("heading", { name: "Get Involved", level: 1 })).toBeInTheDocument();
  });

  it("renders Impact page at /impact", () => {
    renderApp("/impact");
    expect(screen.getByRole("heading", { name: "Impact" })).toBeInTheDocument();
  });

  it("renders Resources page at /resources", () => {
    renderApp("/resources");
    expect(screen.getByRole("heading", { name: "Resources" })).toBeInTheDocument();
  });

  it("renders Contact page at /contact", () => {
    renderApp("/contact");
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders NotFound page for unknown routes", () => {
    renderApp("/unknown-route");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return Home" })).toBeInTheDocument();
  });
});
