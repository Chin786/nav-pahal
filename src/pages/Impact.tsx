import { Link } from "react-router-dom";

export default function Impact() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Impact
          </h1>
          <div className="w-16 h-1 bg-[#0072CE]" />
        </div>

        <div className="space-y-6 text-[#44474e] text-base leading-relaxed">
          <p>
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; This page is a
            placeholder. We are committed to transparency and evidence-based impact measurement.
          </p>
          <p>
            As our programs mature, we will share verified impact metrics, program outcomes, and
            community feedback here. All published statistics will be independently verified and
            sourced from approved data collection processes.
          </p>
          <p>
            No quantitative claims will be published until they have been validated through our
            impact governance framework.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500 italic">
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; Verified impact metrics,
            program outcomes, and community testimonials will be added in future iterations once
            data collection processes are established.
          </p>
        </div>

        <div>
          <Link to="/" className="text-sm font-bold text-[#0072CE] hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
