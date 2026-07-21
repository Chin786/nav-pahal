import { SectionHeading, Container, StatusBadge, Notice } from "../components/ui";
import { BRAND } from "../content/siteContent";

export default function About() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen">
      <Container>
        <SectionHeading
          title="About Navpahal"
          subtitle="Our mission, vision, and operating principles"
          level={1}
        />

        <div className="space-y-8 max-w-3xl">
          <StatusBadge status="awaiting-verification" />

          <div className="space-y-6 text-[var(--color-text-muted)] text-base leading-relaxed">
            <p>
              <strong>Mission:</strong> {BRAND.missionStatement}
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-3">
                Vision
              </h2>
              <p>
                To build a world where every community has the tools, network, and expertise to
                drive their own sustainable development — <StatusBadge status="draft" />{" "}
                <span className="text-sm text-slate-400 italic">
                  (awaiting organizational approval)
                </span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--color-primary)] font-headline mb-3">
                Operating Principles
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-secondary)] font-bold">01.</span>
                  <span>
                    <strong>Community-led:</strong> Initiatives are designed with and for the
                    communities they serve.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-secondary)] font-bold">02.</span>
                  <span>
                    <strong>Transparency:</strong> All programs, metrics, and partnerships are
                    documented and verifiable.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-secondary)] font-bold">03.</span>
                  <span>
                    <strong>Collaboration:</strong> We work across sectors to amplify impact through
                    strategic partnerships.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-secondary)] font-bold">04.</span>
                  <span>
                    <strong>Evidence-based:</strong> Decisions and claims are grounded in verifiable
                    data.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Notice variant="info">
            This page contains draft content awaiting organizational review and approval.
            Organizational details including governance, team, and history will be published once
            verified.
          </Notice>
        </div>
      </Container>
    </section>
  );
}
