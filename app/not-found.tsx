import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen flex items-center">
      <Container>
        <div className="text-center space-y-6">
          <div className="text-8xl font-extrabold text-[var(--color-primary)] font-headline">
            404
          </div>
          <SectionHeading
            title="Page Not Found"
            subtitle="The page you are looking for does not exist."
            align="center"
            level={1}
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[var(--color-primary)] text-white hover:opacity-90 shadow-md focus-ring"
            >
              Return Home
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus-ring"
            >
              View Programs
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
