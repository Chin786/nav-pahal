import { SectionHeading, Container, StatusBadge, Notice, PlaceholderPanel } from "../components/ui";
import { TRAINING_AREAS } from "../content/siteContent";

export default function Training() {
  const areas = TRAINING_AREAS.value;

  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <SectionHeading
          title="Training"
          subtitle="Planned learning areas for community capacity building"
          level={1}
        />

        <div className="space-y-8 max-w-3xl">
          <StatusBadge status="draft" />

          <Notice variant="info">
            Training curricula, schedules, and enrollment information are under development. No
            certification or accreditation is currently offered.
          </Notice>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {areas.map((area) => (
              <div
                key={area.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline">
                    {area.title}
                  </h2>
                  <StatusBadge status={area.status} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <PlaceholderPanel
            title="Training Schedule Coming Soon"
            description="Dates, registration process, and detailed curricula will be published as training programs are developed."
          />
        </div>
      </Container>
    </section>
  );
}
