/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, GraduationCap, BookOpen, Coins, Search, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceType } from '../types';

export default function Services() {
  const [activeServiceSim, setActiveServiceSim] = React.useState<string | null>(null);
  const [showAllServices, setShowAllServices] = React.useState(false);
  
  // Simulated service interactive states
  const [sosStatus, setSosStatus] = React.useState<'idle' | 'routing' | 'matched'>('idle');
  const [sosTimer, setSosTimer] = React.useState(0);
  const [academyQuizScore, setAcademyQuizScore] = React.useState<number | null>(null);
  const [knowledgeSearch, setKnowledgeSearch] = React.useState('');
  const [csrBudget, setCsrBudget] = React.useState(100000);
  const [csrTarget, setCsrTarget] = React.useState('health');

  // SOS Simulation trigger
  const triggerSosSim = () => {
    setSosStatus('routing');
    setSosTimer(3);
    const interval = setInterval(() => {
      setSosTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setSosStatus('matched');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Extra hidden services shown on "View All Services"
  const EXTRA_SERVICES: ServiceType[] = [
    {
      id: 'agritech',
      title: 'Agritech Support',
      iconName: 'sprout',
      description: 'AI soil insights and automated micro-irrigation guidelines for smallholders.',
      statValue: 95,
      statLabel: '95% Yield Optimization',
      colorClass: 'secondary'
    },
    {
      id: 'water',
      title: 'Water Auditing',
      iconName: 'droplet',
      description: 'Distributed sensor grid checking underground water purity index.',
      statValue: 88,
      statLabel: '88% Purity Standard',
      colorClass: 'primary'
    }
  ];

  const getServiceIcon = (id: string, iconName: string) => {
    switch (id) {
      case 'sos':
        return <AlertTriangle className="w-8 h-8 text-[#F7941D]" />;
      case 'academy':
        return <GraduationCap className="w-8 h-8 text-[#72BF44]" />;
      case 'knowledge':
        return <BookOpen className="w-8 h-8 text-white" />;
      case 'csr':
        return <Coins className="w-8 h-8 text-[#72BF44]" />;
      case 'agritech':
        return <ChevronRight className="w-8 h-8 text-[#72BF44]" />;
      default:
        return <ScrollIcon id={id} />;
    }
  };

  const ScrollIcon = ({ id }: { id: string }) => {
    return <ShieldCheck className="w-8 h-8 text-[#0072CE]" />;
  };

  const getProgressBarColor = (colorClass: string) => {
    switch (colorClass) {
      case 'tertiary': return 'bg-gradient-to-r from-amber-400 to-[#F7941D]';
      case 'secondary': return 'bg-gradient-to-r from-lime-400 to-[#72BF44]';
      case 'primary': return 'bg-[#00B5E2]';
      default: return 'bg-white';
    }
  };

  const getStatTextColor = (colorClass: string) => {
    switch (colorClass) {
      case 'tertiary': return 'text-[#F7941D]';
      case 'secondary': return 'text-[#72BF44]';
      case 'primary': return 'text-[#00B5E2]';
      default: return 'text-white/80';
    }
  };

  const allServicesList = showAllServices ? [...SERVICES_DATA, ...EXTRA_SERVICES] : SERVICES_DATA;

  return (
    <section id="services-section" className="py-24 bg-[#0072CE] text-white scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header content */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-4xl font-extrabold font-headline mb-4">
              Core Services
            </h2>
            <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed">
              Advanced digital solutions designed to tackle complex social challenges with high precision, audit tracking, and absolute transparency.
            </p>
          </div>
          <button 
            onClick={() => {
              setShowAllServices(!showAllServices);
              setActiveServiceSim(null);
            }}
            className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 active:scale-98 transition-all font-bold text-sm tracking-wide shrink-0"
          >
            {showAllServices ? 'Show Core Services' : 'View All Services'}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServicesList.map((service) => (
            <motion.div
              layoutId={`service-card-${service.id}`}
              key={service.id}
              onClick={() => setActiveServiceSim(activeServiceSim === service.id ? null : service.id)}
              className={`bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between aspect-square lg:aspect-auto min-h-[290px] ${
                activeServiceSim === service.id ? 'ring-2 ring-white bg-white/10' : ''
              }`}
            >
              <div>
                <span className="inline-block mb-6 group-hover:scale-110 transition-all">
                  {getServiceIcon(service.id, service.iconName)}
                </span>
                <h4 className="text-xl font-bold font-headline mb-3 text-white">
                  {service.title}
                </h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Custom bar indicator */}
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full ${getProgressBarColor(service.colorClass)}`}
                    style={{ width: `${service.statValue}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className={`font-bold ${getStatTextColor(service.colorClass)}`}>
                    {service.statLabel}
                  </span>
                  <span className="text-white/40 font-bold group-hover:text-white transition-all">
                    {activeServiceSim === service.id ? 'Close Sim ✕' : 'Test Run →'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-Simulation Playground Overlay */}
        <AnimatePresence>
          {activeServiceSim && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-10 overflow-hidden"
            >
              <div className="bg-slate-900/90 rounded-[2.5rem] p-8 md:p-10 border border-white/15 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <h5 className="text-base font-extrabold uppercase tracking-widest text-[#00B5E2] font-headline">
                      Simulating Service Module: {activeServiceSim === 'sos' ? 'SOS Active Grid' : activeServiceSim === 'academy' ? 'Training Academy Portal' : activeServiceSim === 'knowledge' ? 'Knowledge Policy Repository' : 'CSR Matching System'}
                    </h5>
                  </div>
                  <button 
                    onClick={() => setActiveServiceSim(null)}
                    className="text-xs font-bold text-white/50 hover:text-white hover:underline uppercase tracking-wider"
                  >
                    Close Simulator
                  </button>
                </div>

                {/* Simulated Interfaces for each */}
                <div>
                  {activeServiceSim === 'sos' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <p className="text-sm text-slate-350">
                          Deploying real-time geo-coordinates logic. Our live dispatch coordinates with volunteer medical practitioners in under 3 minutes.
                        </p>
                        <div className="flex gap-3">
                          <button
                            onClick={triggerSosSim}
                            disabled={sosStatus === 'routing'}
                            className="bg-[#F7941D] hover:bg-orange-600 disabled:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-lg flex items-center gap-2 transition-all"
                          >
                            <AlertTriangle className="w-4 h-4" />
                            {sosStatus === 'idle' ? 'Trigger Test SOS Route' : sosStatus === 'routing' ? 'Finding Nearest Unit...' : 'Dispatch Loop Sent!'}
                          </button>
                          <button
                            onClick={() => { setSosStatus('idle'); setSosTimer(0); }}
                            className="bg-slate-800 text-xs px-4 py-3 rounded-lg text-white"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                      <div className="bg-slate-950/70 p-6 rounded-2xl border border-white/5 font-mono text-xs text-green-400 space-y-2">
                        <p>&gt; Connection Established: Initializing Grid Monitor</p>
                        <p>&gt; Current Node Status: ACTIVE (Port 3000 Ingress Response)</p>
                        {sosStatus === 'routing' && (
                          <p className="text-yellow-400 animate-pulse">&gt; ALERT RECEIVED. Locating doctors within 3km limit... ({sosTimer}s)</p>
                        )}
                        {sosStatus === 'matched' && (
                          <div className="text-green-400 space-y-1">
                            <p>&gt; MATCH FOUND! Dr. Sharma notified.</p>
                            <p>&gt; Response Rate: 1.4 Minutes • Accuracy: 98.7%</p>
                            <p className="font-sans font-bold py-1 px-3 bg-green-500/10 text-emerald-400 rounded-md inline-block">Matched Success</p>
                          </div>
                        )}
                        {sosStatus === 'idle' && (
                          <p className="text-slate-500">&gt; Waiting for emergency beacon pulse...</p>
                        )}
                      </div>
                    </div>
                  )}

                  {activeServiceSim === 'academy' && (
                    <div className="space-y-4 max-w-xl">
                      <p className="text-sm text-slate-300">
                        Earn your mini-accreditation by answering this sample volunteer ethics check:
                      </p>
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
                        <p className="text-xs font-bold text-slate-200">
                          Which model maximizes long-term community resilience?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button 
                            onClick={() => setAcademyQuizScore(1)}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-left text-xs text-white border border-white/10"
                          >
                            A) Distributing packages without establishing skills training.
                          </button>
                          <button 
                            onClick={() => setAcademyQuizScore(2)}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-left text-xs text-white border border-white/10"
                          >
                            B) Co-designing projects and mentoring regional micro-leaders.
                          </button>
                        </div>
                        {academyQuizScore !== null && (
                          <div className="pt-2 border-t border-white/5 text-xs">
                            {academyQuizScore === 2 ? (
                              <p className="text-emerald-400 font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 shrink-0" /> Correct! Navpahal focuses completely on sustainable community co-design. Graduate certificate active!
                              </p>
                            ) : (
                              <p className="text-red-400 font-semibold">
                                Error: Direct dependency causes decline in long-term capacity. Try Option B!
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeServiceSim === 'knowledge' && (
                    <div className="space-y-4">
                      <p className="text-sm text-slate-300">
                        Search indexed public directives, social audits, and development policy indices instantly:
                      </p>
                      <div className="flex gap-3 max-w-md">
                        <div className="relative flex-grow">
                          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Type keyword, e.g. health, child, funding"
                            value={knowledgeSearch}
                            onChange={(e) => setKnowledgeSearch(e.target.value)}
                            className="bg-slate-950 border border-white/15 text-white text-xs pl-10 pr-4 py-3 rounded-xl w-full focus:ring-1 focus:ring-[#00B5E2]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                          <h6 className="font-bold text-white">NGO-Audit-2024.pdf</h6>
                          <p className="text-slate-400">Policy transparency and fund flows.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                          <h6 className="font-bold text-white">Rural-Pediatric-Model.pdf</h6>
                          <p className="text-slate-400">Dr. Amit Sharma health research.</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                          <h6 className="font-bold text-white">Grassroots-Empowerment-Index.xls</h6>
                          <p className="text-slate-400">Regional development metrics.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeServiceSim === 'csr' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-950 p-6 rounded-2xl border border-white/5">
                      <div className="space-y-4">
                        <h6 className="font-bold text-xs text-slate-200">Configure CSR Funding Simulator</h6>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-slate-400">
                            <span>CSR Budget Capital Allocation:</span>
                            <span className="text-[#72BF44] font-bold">${csrBudget.toLocaleString()}</span>
                          </div>
                          <input
                            type="range"
                            min="20000"
                            max="500000"
                            step="10000"
                            value={csrBudget}
                            onChange={(e) => setCsrBudget(Number(e.target.value))}
                            className="w-full accent-[#72BF44]"
                          />
                        </div>

                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-400">Target Social Directive Sector:</span>
                          <div className="flex gap-2">
                            {['health', 'education', 'environment'].map((sect) => (
                              <button
                                key={sect}
                                onClick={() => setCsrTarget(sect)}
                                className={`text-xs px-3 py-1.5 rounded-lg font-bold capitalize transition-all ${
                                  csrTarget === sect ? 'bg-[#72BF44] text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                              >
                                {sect}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs space-y-2 border-l border-white/10 pl-6">
                        <h6 className="font-bold text-slate-200">Matching Calculation Output:</h6>
                        <div className="space-y-1.5 font-mono text-slate-400">
                          <p>• NGO Match Pool: <span className="text-white font-bold">14 Verified Directives</span></p>
                          <p>• Estimated Lives Reached: <span className="text-[#00B5E2] font-bold">{(csrBudget / 15).toFixed(0)} people</span></p>
                          <p>• Efficiency Audit score: <span className="text-emerald-400 font-bold">94.3% Transparent</span></p>
                          <p>• Platform Matching Fee: <span className="text-white font-bold">0.00% (Pure Volunteer Admin)</span></p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
