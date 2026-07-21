import { SectionHeading, Container, Notice } from "../components/ui";
import Volunteers from "../components/Volunteers";

export default function GetInvolved() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--color-bg)]">
        <Container>
          <SectionHeading
            title="Get Involved"
            subtitle="Future pathways for volunteering, mentoring, and partnership"
            level={1}
          />

          <div className="space-y-8 max-w-3xl">
            <Notice variant="info">
              Volunteer registration, partnership inquiries, and other participation pathways are
              not yet active. No information entered here is transmitted to Navpahal.
            </Notice>
          </div>
        </Container>
      </section>
      <Volunteers />
    </>
  );
}
