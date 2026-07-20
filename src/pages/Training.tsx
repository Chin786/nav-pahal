import { Link } from "react-router-dom";

export default function Training() {
  return (
    <section className="pt-32 pb-24 bg-[#f7f9fb] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Training
          </h1>
          <div className="w-16 h-1 bg-[#F7941D]" />
        </div>

        <div className="space-y-6 text-[#44474e] text-base leading-relaxed">
          <p>
            <span className="font-bold text-[#0072CE]">DRAFT</span> &mdash; This page is a
            placeholder. Our training programs are designed to build community capacity through
            structured workshops, mentorship programs, and skills development initiatives.
          </p>
          <p>
            Trainers and mentors provide guidance, share knowledge, and help build the skills needed
            for effective community development. Training covers topics such as community
            organizing, project management, digital literacy, and social impact measurement.
          </p>
          <p className="text-sm text-slate-500 italic">
            Detailed training curricula, schedules, and enrollment information will be added in
            future iterations.
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
