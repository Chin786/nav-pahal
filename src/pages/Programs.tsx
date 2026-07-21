import { SectionHeading, Container, StatusBadge, Notice, PlaceholderPanel } from "../components/ui";
import { PROGRAM_CATEGORIES } from "../content/siteContent";

export default function Programs() {
  const programs = PROGRAM_CATEGORIES.value;

  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <SectionHeading
          title="Programs"
          subtitle="Proposed program areas for community development"
          level={1}
        />

        <div className="space-y-8 max-w-3xl">
          <StatusBadge status="draft" />

          <Notice variant="info">
            Program details below are proposed and await organizational approval. No programs are
            currently active.
          </Notice>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline">
                    {program.title}
                  </h2>
                  <StatusBadge status={program.status} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <PlaceholderPanel
            title="Program Implementation Timeline"
            description="Details about program schedules, locations, and participation criteria will be added once programs are approved."
          />
        </div>
      </Container>
    </section>
  );
}
