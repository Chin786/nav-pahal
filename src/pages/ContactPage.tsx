import { SectionHeading, Container, StatusBadge, Notice } from "../components/ui";
import Contact from "../components/Contact";
import { CONTACT_VERIFICATION } from "../content/siteContent";

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[var(--color-bg)]">
        <Container>
          <SectionHeading title="Contact" subtitle="Get in touch with Navpahal" level={1} />

          <div className="space-y-6 max-w-3xl">
            <StatusBadge status="awaiting-verification" />

            <Notice variant="info">
              {CONTACT_VERIFICATION} Online submissions are disabled. No information entered here is
              transmitted to Navpahal.
            </Notice>
          </div>
        </Container>
      </section>
      <Contact />
    </>
  );
}
