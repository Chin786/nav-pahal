import { SectionHeading, Container, StatusBadge, Notice } from "@/components/ui";
import type { Metadata } from "next";
import { FORM_DISCLOSURE, CONTACT_VERIFICATION, SERVICE_BOUNDARY } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Navpahal. Official contact details pending verification.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status="awaiting-verification" />
        <SectionHeading
          title="Contact"
          subtitle="Official contact details pending verification."
          level={1}
        />
        <div className="max-w-3xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-2">
                Headquarters
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">{CONTACT_VERIFICATION}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-2">
                Email Us
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">{CONTACT_VERIFICATION}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-2">
                Phone
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">{CONTACT_VERIFICATION}</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[var(--color-primary)] font-headline mb-4">
              Send us a Message
            </h2>
            <Notice variant="info">{FORM_DISCLOSURE}</Notice>
            <form className="mt-6 space-y-4" aria-label="Contact form (not yet active)">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-first-name"
                    className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="contact-first-name"
                    disabled
                    type="text"
                    placeholder="John"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-[var(--color-bg)] text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-last-name"
                    className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    disabled
                    type="text"
                    placeholder="Doe"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-[var(--color-bg)] text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  disabled
                  type="text"
                  placeholder="Partnership Inquiry"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-[var(--color-bg)] text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-[var(--color-text-muted)] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  disabled
                  rows={4}
                  placeholder="Tell us how we can collaborate..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-[var(--color-bg)] text-sm resize-none"
                />
              </div>
              <button
                disabled
                className="w-full bg-slate-300 text-white py-4 rounded-xl font-bold text-sm cursor-not-allowed"
              >
                Send Message
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
