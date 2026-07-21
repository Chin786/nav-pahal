import { SectionHeading, Container, StatusBadge, Notice } from "@/components/ui";
import type { Metadata } from "next";
import { TRAINING_AREAS } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Training",
  description: "Discover Navpahal's planned training areas for community capacity building.",
};

export default function TrainingPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status="draft" />
        <SectionHeading
          title="Training"
          subtitle="Proposed training areas for community capacity building"
          level={1}
        />
        <Notice variant="info">
          All training areas listed are proposed and under development. No active training programs
          currently exist.
        </Notice>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {TRAINING_AREAS.value.map((area) => (
            <div
              key={area.id}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <StatusBadge status={area.status} />
              </div>
              <h2 className="text-xl font-bold text-[var(--color-primary)] font-headline mb-2">
                {area.title}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
