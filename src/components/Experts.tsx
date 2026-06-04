/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, MessageSquare, Briefcase, FileClock, UserCheck, CalendarDays, CheckCircle2, AlertCircle } from 'lucide-react';
import { EXPERTS_DATA } from '../data';
import { Expert, ExpertInquiry } from '../types';

interface ExpertsProps {
  onInquirySubmitted: () => void;
}

export default function Experts({ onInquirySubmitted }: ExpertsProps) {
  const [activeTab, setActiveTab] = React.useState<'experts' | 'my-consultations'>('experts');
  const [selectedExpert, setSelectedExpert] = React.useState<Expert | null>(null);
  
  // Form states
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [successMsg, setSuccessMsg] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  // Local storage lists
  const [inquiries, setInquiries] = React.useState<ExpertInquiry[]>([]);

  React.useEffect(() => {
    const loaded = localStorage.getItem('navpahal_expert_inquiries');
    if (loaded) {
      setInquiries(JSON.parse(loaded));
    }
  }, []);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !query.trim() || !selectedExpert) {
      setErrorMsg('Please populate all fields prior to sending.');
      return;
    }

    const newInquiry: ExpertInquiry = {
      id: `inq-${Date.now()}`,
      expertId: selectedExpert.id,
      expertName: selectedExpert.name,
      userName: name.trim(),
      userEmail: email.trim(),
      query: query.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Pending Response'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('navpahal_expert_inquiries', JSON.stringify(updated));

    // Clear and close
    setName('');
    setEmail('');
    setQuery('');
    setErrorMsg('');
    setSuccessMsg(true);
    
    // Alert parent component to update pending counts in header
    onInquirySubmitted();

    setTimeout(() => {
      setSuccessMsg(false);
      setSelectedExpert(null);
    }, 2500);
  };

  const getStatusBadgeClass = (status: string) => {
    if (status === 'Answered') {
      return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
    }
    return 'bg-amber-50 text-amber-600 border border-amber-100';
  };

  return (
    <section id="experts-section" className="py-24 bg-[#f7f9fb] scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header section with tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
              Consult Our Experts
            </h2>
            <p className="text-sm sm:text-base text-[#44474e] max-w-2xl mt-4 leading-relaxed">
              Accelerate localized change. Obtain direct operational, regulatory, and public health strategy briefings from our accredited advisory board.
            </p>
          </div>

          {/* Quick tab filters */}
          <div className="flex bg-slate-200/60 p-1.5 rounded-xl self-start md:self-end">
            <button
              onClick={() => setActiveTab('experts')}
              className={`text-xs px-4 py-2.5 rounded-lg font-bold transition-all ${
                activeTab === 'experts' ? 'bg-white text-[#0072CE] shadow-sm' : 'text-[#44474e] hover:text-[#0072CE]'
              }`}
            >
              Advisory Board
            </button>
            <button
              onClick={() => setActiveTab('my-consultations')}
              className={`text-xs px-4 py-2.5 rounded-lg font-bold transition-all relative ${
                activeTab === 'my-consultations' ? 'bg-white text-[#0072CE] shadow-sm' : 'text-[#44474e] hover:text-[#0072CE]'
              }`}
            >
              <span>Submitted Briefings</span>
              {inquiries.length > 0 && (
                <span className="ml-1.5 bg-[#0072CE] text-white text-[10px] px-1.5 py-0.5 rounded-full font-extrabold">
                  {inquiries.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tab view logic */}
        <AnimatePresence mode="wait">
          {activeTab === 'experts' ? (
            <motion.div 
              key="experts-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {EXPERTS_DATA.map((expert) => (
                <div 
                  key={expert.id} 
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area with banner tags */}
                    <div className="h-72 overflow-hidden relative bg-slate-100">
                      <img 
                        alt={expert.name} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" 
                        src={expert.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                      {expert.topVerified && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#A2D149] to-[#72BF44] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <ShieldCheck className="w-4.5 h-4.5" />
                          <span>Top Verified</span>
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="p-6 md:p-8 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold font-headline text-[#0072CE] mb-1">
                          {expert.name}
                        </h4>
                        <p className="text-slate-600 text-sm font-bold tracking-tight">
                          {expert.title}
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex gap-2 items-start text-xs text-slate-500">
                          <Briefcase className="w-4 h-4 text-[#72BF44] shrink-0" />
                          <span><strong className="text-slate-600">Specialty:</strong> {expert.specialty}</span>
                        </div>
                        <p className="text-xs text-slate-500 italic bg-[#f7f9fb] p-3 rounded-xl">
                          "{expert.bio}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:px-8 md:pb-8 pt-0">
                    <button 
                      onClick={() => setSelectedExpert(expert)}
                      className="w-full py-3.5 rounded-xl border-2 border-[#0072CE] text-[#0072CE] font-bold text-sm hover:bg-[#0072CE] hover:text-white hover:border-[#0072CE] active:scale-98 transition-all shadow-sm"
                    >
                      Consult Expert
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="my-consultations-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6 max-w-3xl mx-auto"
            >
              {inquiries.length === 0 ? (
                <div className="bg-white border border-slate-100 p-12 rounded-3xl text-center space-y-4 shadow-sm">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
                    <FileClock className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-700 text-lg">No Inquiries Found</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    You haven't requested any expert consultations yet. Go to the "Advisory Board" tab to submit a briefing request.
                  </p>
                  <button
                    onClick={() => setActiveTab('experts')}
                    className="text-xs font-bold text-[#0072CE] hover:underline"
                  >
                    Browse Experts →
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inq) => (
                    <div 
                      key={inq.id}
                      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-slate-800 text-sm">Briefing with {inq.expertName}</span>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${getStatusBadgeClass(inq.status)}`}>
                            {inq.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          Query: "{inq.query}"
                        </p>
                        <div className="flex gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          <span>Date: {inq.date}</span>
                          <span>Reg ID: {inq.id}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-[10px] text-slate-400 font-bold">CONTACT TARGET</p>
                        <p className="text-xs text-slate-650 font-bold">{inq.userEmail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Deep Consultation Modal Drawer */}
        <AnimatePresence>
          {selectedExpert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl border border-slate-100 relative"
              >
                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSelectedExpert(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                >
                  ✕
                </button>

                <div className="space-y-6">
                  {/* Brief Header */}
                  <div className="flex gap-4 items-center">
                    <img 
                      className="w-14 h-14 rounded-full object-cover border border-slate-100 shrink-0" 
                      src={selectedExpert.imageUrl} 
                      alt={selectedExpert.name}
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-[#031635] text-lg font-headline">Consult {selectedExpert.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{selectedExpert.title}</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleConsultSubmit} className="space-y-4 text-xs">
                    {errorMsg && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {successMsg ? (
                      <div className="p-6 text-center space-y-2 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                        <CheckCircle2 className="w-10 h-10 text-[#72BF44] mx-auto animate-bounce" />
                        <h5 className="font-bold text-[#2c694e] text-sm">Briefing Request Queued!</h5>
                        <p className="text-[11px] text-[#316e52]">
                          Dr. {selectedExpert.name}'s office will match on your inbox in 24 business hours.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-600 uppercase tracking-wide text-[10px]">Your Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#f7f9fb] border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3 text-slate-800"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-600 uppercase tracking-wide text-[10px]">Email Address</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#f7f9fb] border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3 text-slate-800"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-bold text-slate-600 uppercase tracking-wide text-[10px]">Your Detailed Inquiry</label>
                          <textarea
                            rows={3}
                            placeholder={`Dear ${selectedExpert.name}, we need advice regarding...`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full bg-[#f7f9fb] border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3 text-slate-800 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white font-bold py-3.5 rounded-xl hover:opacity-95 shadow-md flex items-center justify-center gap-2 mt-2"
                        >
                          <UserCheck className="w-4 h-4" />
                          <span>Dispatch Consultation Request</span>
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
