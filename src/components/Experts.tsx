import { EXPERTS_DATA } from "../data";
import { Users } from "lucide-react";

export default function Experts() {
  return (
    <section id="experts-section" className="py-24 bg-[#f7f9fb] scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
            Trainers &amp; Mentors
          </h2>
          <p className="text-sm sm:text-base text-[#44474e] max-w-2xl mt-4 leading-relaxed">
            Connect with subject-matter experts who provide training, guidance, and
            capacity-building support for community development programs.
          </p>
        </div>

        {EXPERTS_DATA.length === 0 ? (
          <div className="bg-white border border-slate-100 p-16 rounded-3xl text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-slate-700 text-lg">Trainer Profiles Coming Soon</h4>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We are building our trainer and mentor network. Verified expert profiles will be
              displayed here once they have provided publication consent and completed our
              onboarding process.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {EXPERTS_DATA.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 md:p-8 space-y-4"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold font-headline text-[#0072CE] mb-1">
                      {expert.name}
                    </h4>
                    <p className="text-slate-600 text-sm font-bold tracking-tight">
                      {expert.title}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">{expert.specialty}</p>
                  <p className="text-xs text-slate-500 italic">&ldquo;{expert.bio}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
