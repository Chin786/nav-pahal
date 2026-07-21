import { SectionHeading, Container, StatusBadge } from "@/components/ui";
import type { Metadata } from "next";
import { PROGRAM_CATEGORIES } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Navpahal's proposed programs in awareness, preparedness, community education, and institutional collaboration.",
};

export default function ProgramsPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status="draft" />
        <SectionHeading
          title="Programs"
          subtitle="Proposed community programs currently under development"
          level={1}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {PROGRAM_CATEGORIES.value.map((program) => (
            <div
              key={program.id}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <StatusBadge status={program.status} />
              </div>
              <h2 className="text-xl font-bold text-[var(--color-primary)] font-headline mb-2">
                {program.title}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
