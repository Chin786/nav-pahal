import { SectionHeading, Container, StatusBadge } from "@/components/ui";
import type { Metadata } from "next";
import { IMPACT_FRAMEWORK } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Navpahal's proposed impact measurement framework — no verified metrics published yet.",
};

export default function ImpactPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status={IMPACT_FRAMEWORK.status} />
        <SectionHeading
          title="Impact"
          subtitle="Proposed impact measurement framework — no verified metrics published yet."
          level={1}
        />
        <div className="max-w-3xl space-y-6">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Navpahal is developing a framework for measuring and reporting social impact. No
            verified metrics have been published at this time.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[var(--color-primary)] font-headline mb-4">
              Proposed Measurement Areas
            </h2>
            <ul className="space-y-3">
              {IMPACT_FRAMEWORK.areas.map((area, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                >
                  <span className="text-[var(--color-secondary)] font-bold">&#8226;</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
