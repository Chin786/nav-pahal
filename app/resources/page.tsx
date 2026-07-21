import { SectionHeading, Container, StatusBadge, Notice } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Navpahal's planned resource center — curated materials for community development under development.",
};

export default function ResourcesPage() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <StatusBadge status="under-development" />
        <SectionHeading
          title="Resources"
          subtitle="Curated materials for community development — under development."
          level={1}
        />
        <Notice variant="info">
          The resource center is being developed. Curated materials, guides, and toolkits for
          community development will be published once approved.
        </Notice>
        <div className="mt-12 max-w-3xl">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Planned resources include community development guides, training materials, and case
            studies. No resources are currently available for download.
          </p>
        </div>
      </Container>
    </section>
  );
}
