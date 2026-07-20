import { SectionHeading, Container, StatusBadge, Notice, PlaceholderPanel } from "../components/ui";
import { IMPACT_FRAMEWORK } from "../content/siteContent";

export default function Impact() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <SectionHeading
          title="Impact"
          subtitle="Our approach to measuring and reporting social impact"
          level={1}
        />

        <div className="space-y-8 max-w-3xl">
          <StatusBadge status="awaiting-verification" />

          <Notice variant="info">
            No verified metrics published yet. Navpahal is committed to evidence-based impact
            reporting. All published data will be independently verified.
          </Notice>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-3">
              Measurement Framework
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              The following areas will guide our impact measurement once programs are operational:
            </p>
            <ul className="space-y-2">
              {IMPACT_FRAMEWORK.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                >
                  <span className="text-[var(--color-secondary)] mt-1">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <PlaceholderPanel
            title="No Impact Data Available"
            description="Verified impact metrics, program outcomes, and community feedback will be published once data collection processes are established and approved."
          />
        </div>
      </Container>
    </section>
  );
}
