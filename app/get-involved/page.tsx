import { SectionHeading, Container, StatusBadge, Notice } from "@/components/ui";
import type { Metadata } from "next";
import { FORM_DISCLOSURE, SERVICE_BOUNDARY } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Find out how to get involved with Navpahal through proposed volunteering, mentoring, or partnerships.",
};

export default function GetInvolvedPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status="draft" />
        <SectionHeading
          title="Get Involved"
          subtitle="Explore ways to contribute to community development through volunteering, mentoring, or partnership."
          level={1}
        />
        <div className="max-w-3xl space-y-12">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] font-headline mb-4">
              Ways to Get Involved
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-secondary)] font-bold text-lg">1.</span>
                <span className="text-[var(--color-text-muted)]">
                  Explore community volunteering opportunities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-secondary)] font-bold text-lg">2.</span>
                <span className="text-[var(--color-text-muted)]">Learn about future workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-secondary)] font-bold text-lg">3.</span>
                <span className="text-[var(--color-text-muted)]">
                  Express interest in community initiatives
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[var(--color-primary)] font-headline mb-4">
              Volunteer Registration
            </h2>
            <Notice variant="info">{FORM_DISCLOSURE}</Notice>
            <form
              className="mt-6 space-y-4"
              aria-label="Volunteer registration form (not yet active)"
            >
              <div>
                <label
                  htmlFor="involvement-full-name"
                  className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                >
                  Full Name
                </label>
                <input
                  id="involvement-full-name"
                  disabled
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[var(--color-bg)]/70 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                />
              </div>
              <div>
                <label
                  htmlFor="involvement-email"
                  className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                >
                  Email Address
                </label>
                <input
                  id="involvement-email"
                  disabled
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[var(--color-bg)]/70 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                />
              </div>
              <button
                disabled
                className="w-full bg-slate-300 text-white py-4 rounded-xl font-bold text-sm cursor-not-allowed"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16" data-testid="service-boundary">
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            <strong>Important:</strong> {SERVICE_BOUNDARY}
          </p>
        </div>
      </Container>
    </section>
  );
}
