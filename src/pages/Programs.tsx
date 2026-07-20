import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Programs
          </h1>
          <div className="w-16 h-1 bg-[#72BF44]" />
        </div>

        <div className="space-y-6 text-[#44474e] text-base leading-relaxed">
          <p>
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; This page is a
            placeholder. Our programs focus on building community capacity through structured
            training, awareness campaigns, and collaborative partnerships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0072CE] font-headline mb-2">
                Community Training
              </h3>
              <p className="text-sm text-slate-600">
                Structured workshops building skills for community leaders and field volunteers.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold text-[#F7941D] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0072CE] font-headline mb-2">
                Knowledge Center
              </h3>
              <p className="text-sm text-slate-600">
                Curated social impact research, policies, and development resources.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold text-[#F7941D] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0072CE] font-headline mb-2">
                CSR Collaboration
              </h3>
              <p className="text-sm text-slate-600">
                Connecting initiatives with corporate sustainability and social responsibility
                programs.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold text-[#F7941D] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0072CE] font-headline mb-2">
                Awareness Campaigns
              </h3>
              <p className="text-sm text-slate-600">
                Community-focused awareness drives for health, safety, and environmental
                initiatives.
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold text-[#F7941D] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          </div>
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
