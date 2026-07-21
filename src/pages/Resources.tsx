import { SectionHeading, Container, StatusBadge, Notice, PlaceholderPanel } from "../components/ui";

export default function Resources() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <SectionHeading
          title="Resources"
          subtitle="Curated materials for community development — under development"
          level={1}
        />

        <div className="space-y-8 max-w-3xl">
          <StatusBadge status="under-development" />

          <Notice variant="info">
            The resource center is under development. Planned categories include research papers,
            policy guides, training materials, and case studies. All resources will be reviewed
            before publication.
          </Notice>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Research & Reports", "Policy Guides", "Training Manuals", "Case Studies"].map(
              (category) => (
                <PlaceholderPanel
                  key={category}
                  title={category}
                  description="Resources under curation — coming when approved."
                />
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
