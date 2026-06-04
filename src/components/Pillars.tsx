/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Heart, Stethoscope, Building2, ExternalLink, X, CheckCircle } from 'lucide-react';
import { PILLARS_DATA } from '../data';
import { Pillar } from '../types';

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = React.useState<Pillar | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-8 h-8" />;
      case 'volunteer_activism':
        return <Heart className="w-8 h-8 animate-pulse" />;
      case 'medical_services':
        return <Stethoscope className="w-8 h-8" />;
      case 'corporate_fare':
        return <Building2 className="w-8 h-8" />;
      default:
        return <Users className="w-8 h-8" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'primary': return 'hover:border-[#0072CE] border-b-4 border-[#0072CE]/30';
      case 'secondary': return 'hover:border-[#72BF44] border-b-4 border-[#72BF44]/30';
      case 'tertiary': return 'hover:border-[#F7941D] border-b-4 border-[#F7941D]/30';
      default: return 'hover:border-slate-300';
    }
  };

  const getPillarColorTheme = (color: string) => {
    switch (color) {
      case 'primary': return { bg: 'bg-[#0072CE]/10', text: 'text-[#0072CE]', btn: 'bg-[#0072CE]' };
      case 'secondary': return { bg: 'bg-[#72BF44]/10', text: 'text-[#72BF44]', btn: 'bg-[#72BF44]' };
      case 'tertiary': return { bg: 'bg-[#F7941D]/10', text: 'text-[#F7941D]', btn: 'bg-[#F7941D]' };
      default: return { bg: 'bg-slate-100', text: 'text-slate-700', btn: 'bg-slate-700' };
    }
  };

  const handleLearnMore = (pillar: Pillar, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedPillar(pillar);
  };

  const handleActionClick = (targetId: string) => {
    setSelectedPillar(null);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pillars-section" className="py-24 bg-white scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
          The Four Pillars
        </h2>
        <p className="text-sm sm:text-base text-[#44474e] max-w-2xl mx-auto mt-4 mb-20 leading-relaxed">
          Our social innovation ecosystem operates on the specialized contributions and synergy of our key stakeholders.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS_DATA.map((pillar, idx) => {
            const colors = getPillarColorTheme(pillar.color);
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-[#f7f9fb] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-slate-100 ${getBorderColor(pillar.color)}`}
              >
                {/* Icon Container */}
                <div className={`w-18 h-18 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6`}>
                  {getIcon(pillar.iconName)}
                </div>

                <h4 className="text-xl font-bold font-headline text-[#031635] mb-3">
                  {pillar.title}
                </h4>

                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {pillar.description}
                </p>

                <button
                  onClick={(e) => handleLearnMore(pillar, e)}
                  className={`text-sm font-bold flex items-center gap-1 hover:underline transition-all ${colors.text}`}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Showcase Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative border border-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Title */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getPillarColorTheme(selectedPillar.color).bg} ${getPillarColorTheme(selectedPillar.color).text}`}>
                    {getIcon(selectedPillar.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#031635] font-headline">{selectedPillar.title}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Navpahal Strategic Pillar</p>
                  </div>
                </div>

                {/* Long Description */}
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed bg-[#f7f9fb] p-5 rounded-2xl border border-slate-100">
                    "{selectedPillar.details}"
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Key Roles & Benefits</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedPillar.id === 'citizens' && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                          <span>Submit critical healthcare or educational aid needs securely.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                          <span>Obtain verified, transparent funding directly with zero commissions.</span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === 'volunteers' && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#72BF44] shrink-0 mt-0.5" />
                          <span>Receive certificates, build leadership skills, and attend workshops.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#72BF44] shrink-0 mt-0.5" />
                          <span>Deploy on localized health campaigns and digital teaching projects.</span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === 'doctors' && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                          <span>Flexible scheduling for rapid virtual medical assessments.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                          <span>Audit or formulate essential public health advisory guides.</span>
                        </li>
                      </>
                    )}
                    {selectedPillar.id === 'partners' && (
                      <>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                          <span>Track exactly where capital is spent with 100% auditable metrics.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#0072CE] shrink-0 mt-0.5" />
                          <span>Form strategic alliances with recognized research institutions and universities.</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Targeted Call to Action */}
                <div className="pt-2">
                  {selectedPillar.id === 'volunteers' ? (
                    <button
                      onClick={() => handleActionClick('volunteer-section')}
                      className="w-full py-3.5 bg-[#72BF44] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Join Volunteer Registry Now</span>
                    </button>
                  ) : selectedPillar.id === 'doctors' ? (
                    <button
                      onClick={() => handleActionClick('experts-section')}
                      className="w-full py-3.5 bg-[#F7941D] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Interact with Live Experts Network</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActionClick('connect-section')}
                      className="w-full py-3.5 bg-[#0072CE] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Send Partnership / Support Inquiry</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
