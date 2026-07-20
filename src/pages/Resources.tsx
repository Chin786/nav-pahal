import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Resources
          </h1>
          <div className="w-16 h-1 bg-[#F7941D]" />
        </div>

        <div className="space-y-6 text-[#44474e] text-base leading-relaxed">
          <p>
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; This page is a
            placeholder. Our resource center will provide curated materials for community
            development practitioners, volunteers, and partners.
          </p>
          <p>
            Planned resources include research papers, policy guides, training materials, and case
            studies from community development initiatives. All resources will be reviewed and
            approved before publication.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500 italic">
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; Curated resources,
            research materials, and downloadable guides will be added in future iterations.
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
