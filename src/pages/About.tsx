import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            About Navpahal
          </h1>
          <div className="w-16 h-1 bg-[#F7941D]" />
        </div>

        <div className="space-y-6 text-[#44474e] text-base leading-relaxed">
          <p>
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; This page is a
            placeholder. Navpahal is a community empowerment platform dedicated to bridging the gap
            between institutional resources and grassroots needs.
          </p>
          <p>
            Our mission is to create a resilient ecosystem for sustainable community development
            through awareness, preparedness, and training. We believe that every community deserves
            access to the tools, knowledge, and partnerships needed to drive their own evolution.
          </p>
          <p>
            Navpahal provides awareness, preparedness and community training. It does not replace
            doctors, hospitals, police, fire services, ambulances or professional emergency
            responders.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500 italic">
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; Additional content
            including team bios, organizational history, and governance details will be added here
            in a future iteration.
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
