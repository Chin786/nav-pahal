import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkipLink from "../components/SkipLink";
import Hero from "../components/Hero";
import Foundation from "../components/Foundation";
import Pillars from "../components/Pillars";
import Services from "../components/Services";
import Volunteers from "../components/Volunteers";

beforeEach(() => {
  localStorage.clear();
  document.title = "";
});

describe("Skip link", () => {
  it("renders a skip-to-main-content link", () => {
    render(<SkipLink />);
    const skipLink = screen.getByRole("link", { name: "Skip to main content" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});

describe("Header navigation", () => {
  it("renders the NAVPAHAL brand", () => {
    render(<Header />);
    expect(screen.getAllByText("NAVPAHAL").length).toBeGreaterThanOrEqual(1);
  });

  it("internal links use the expected href values", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    expect(nav.querySelector('a[href="/"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/about"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/programs"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/training"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/get-involved"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/impact"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/resources"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="/contact"]')).toBeInTheDocument();
  });
});

describe("Contact inputs are disabled and correctly labelled", () => {
  it("renders disabled first name input with label", () => {
    render(<Volunteers />);
    const input = screen.getByLabelText("Full Name");
    expect(input).toBeDisabled();
  });

  it("renders disabled email input with label", () => {
    render(<Volunteers />);
    const input = screen.getByLabelText("Email Address");
    expect(input).toBeDisabled();
  });
});

describe("Newsletter input remains disabled", () => {
  it("renders disabled newsletter email input", () => {
    render(<Footer />);
    const input = screen.getByLabelText("Your Email");
    expect(input).toBeDisabled();
  });
});

describe("No localStorage writes", () => {
  it("does not write data to localStorage on render", () => {
    render(<Header />);
    render(<Footer />);
    expect(localStorage.getItem("navpahal_contact_messages")).toBeNull();
    expect(localStorage.getItem("navpahal_volunteers")).toBeNull();
  });
});

describe("No false success messages", () => {
  it("does not contain false success text in Hero", () => {
    render(<Hero />);
    const body = document.body.textContent || "";
    expect(body).not.toContain("Message Sent Successfully");
    expect(body).not.toContain("Registration Submitted");
  });

  it("does not contain false success text in Footer", () => {
    render(<Footer />);
    const body = document.body.textContent || "";
    expect(body).not.toContain("Message Sent Successfully");
    expect(body).not.toContain("Registration Submitted");
    expect(body).not.toContain("Subscribed successfully");
  });
});

describe("No fabricated metrics", () => {
  it("does not display fabricated quantitative claims", () => {
    render(<Hero />);
    render(<Footer />);
    const body = document.body.textContent || "";
    expect(body).not.toContain("1M+");
    expect(body).not.toContain("10K+");
    expect(body).not.toContain("500+");
    expect(body).not.toContain("SOS System");
    expect(body).not.toContain("Amit Sharma");
    expect(body).not.toContain("live databases");
    expect(body).not.toContain("Developer Console");
  });
});

describe("Service boundary", () => {
  it("displays the service boundary warning in the footer", () => {
    render(<Footer />);
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

describe("Content-status labels", () => {
  it("displays draft badge on services section", () => {
    render(<Services />);
    expect(screen.getByText("Draft")).toBeInTheDocument();
  });

  it("displays draft badge on foundation section", () => {
    render(<Foundation />);
    expect(screen.getAllByText("Draft").length).toBeGreaterThanOrEqual(1);
  });
});

describe("Foundation accordion semantics", () => {
  it("renders accordion buttons with aria-expanded, aria-controls, type=button, and focus-ring", () => {
    render(<Foundation />);
    const buttons = screen.getAllByRole("button", { name: "Read Deeply" });
    expect(buttons.length).toBe(2);
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded", "false");
      expect(btn).toHaveAttribute("type", "button");
      expect(btn.className).toContain("focus-ring");
    });
    expect(buttons[0]).toHaveAttribute("aria-controls", "vision-panel");
    expect(buttons[1]).toHaveAttribute("aria-controls", "mission-panel");
  });

  it("renders vision panel with region role after expanding", async () => {
    render(<Foundation />);
    const buttons = screen.getAllByRole("button", { name: "Read Deeply" });
    buttons[0].click();
    await waitFor(() => {
      const visionPanel = document.getElementById("vision-panel");
      expect(visionPanel).toBeInTheDocument();
      expect(visionPanel).toHaveAttribute("role", "region");
      expect(visionPanel).toHaveAttribute("aria-labelledby", "vision-heading");
    });
  });
});

describe("Pillar modal semantics", () => {
  it("renders pillar section with future-oriented heading", () => {
    render(<Pillars />);
    expect(
      screen.getByText(
        /The proposed Navpahal ecosystem would bring together four stakeholder groups/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders Learn More buttons for each pillar", () => {
    render(<Pillars />);
    const buttons = screen.getAllByRole("button", { name: /Learn More/ });
    expect(buttons.length).toBe(4);
  });

  it("opens modal with dialog role and close button on click", async () => {
    render(<Pillars />);
    const buttons = screen.getAllByRole("button", { name: /Learn More/ });
    buttons[0].click();
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });
  });

  it("displays Proposed Roles heading inside modal", async () => {
    render(<Pillars />);
    const buttons = screen.getAllByRole("button", { name: /Learn More/ });
    buttons[0].click();
    await waitFor(() => {
      expect(screen.getByText("Proposed Roles and Opportunities")).toBeInTheDocument();
    });
  });
});

describe("No active form or submit handler exists", () => {
  it("does not render enabled submit buttons", () => {
    render(<Volunteers />);
    const submitButtons = document.querySelectorAll('button[type="submit"]:not([disabled])');
    expect(submitButtons.length).toBe(0);
  });
});
