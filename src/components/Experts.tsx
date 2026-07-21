import { EXPERTS_DATA } from "../data";
import { Users } from "lucide-react";
import { StatusBadge, Notice } from "./ui";
import { EXPERTS_STATUS } from "../content/siteContent";

export default function Experts() {
  return (
    <section id="experts-section" className="py-24 bg-[var(--color-bg)] scroll-mt-20 leading-tight">
      <div className="mx-auto w-full max-w-[var(--content-max-width)] px-6 md:px-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)] font-headline">
            Trainers &amp; Mentors
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-2xl mt-4 leading-relaxed">
            Connect with subject-matter experts who provide training, guidance, and
            capacity-building support for community development programs.
          </p>
        </div>

        {EXPERTS_DATA.length === 0 ? (
          <div className="bg-white border border-slate-100 p-16 rounded-3xl text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
              <Users className="w-8 h-8" aria-hidden="true" />
            </div>
            <StatusBadge status={EXPERTS_STATUS} />
            <h3 className="font-bold text-slate-700 text-lg">Trainer Profiles Coming Soon</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We are building our trainer and mentor network. Verified expert profiles will be
              displayed here once they have provided publication consent and completed our
              onboarding process.
            </p>
            <Notice variant="info">
              No trainer or mentor network currently exists. Expert profiles will be published once
              individuals have provided consent and completed onboarding.
            </Notice>
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
                    <h3 className="text-xl font-bold font-headline text-[var(--color-primary)] mb-1">
                      {expert.name}
                    </h3>
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
