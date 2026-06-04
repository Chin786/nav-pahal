/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Trash2, CheckCircle2, RefreshCw, X, Users, Mail, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { VolunteerRegistration, ExpertInquiry, ContactMessage } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onDataChanged: () => void;
}

export default function AdminPanel({ isOpen, onClose, onDataChanged }: AdminPanelProps) {
  const [activeSubTab, setActiveSubTab] = React.useState<'volunteers' | 'consultations' | 'messages'>('volunteers');
  const [vols, setVols] = React.useState<VolunteerRegistration[]>([]);
  const [inQS, setInQS] = React.useState<ExpertInquiry[]>([]);
  const [messages, setMessages] = React.useState<ContactMessage[]>([]);

  // Response text for expert
  const [expertReplyText, setExpertReplyText] = React.useState('');
  const [replyingToId, setReplyingToId] = React.useState<string | null>(null);

  const loadData = () => {
    const loadedVols = localStorage.getItem('navpahal_volunteers');
    if (loadedVols) setVols(JSON.parse(loadedVols));

    const loadedInQS = localStorage.getItem('navpahal_expert_inquiries');
    if (loadedInQS) setInQS(JSON.parse(loadedInQS));

    const loadedMessages = localStorage.getItem('navpahal_contact_messages');
    if (loadedMessages) setMessages(JSON.parse(loadedMessages));
  };

  React.useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const handleClearSection = (section: 'vols' | 'inqs' | 'msgs') => {
    if (section === 'vols') {
      localStorage.removeItem('navpahal_volunteers');
      setVols([]);
    } else if (section === 'inqs') {
      localStorage.removeItem('navpahal_expert_inquiries');
      setInQS([]);
    } else {
      localStorage.removeItem('navpahal_contact_messages');
      setMessages([]);
    }
    onDataChanged();
  };

  const handleRespondExpert = (id: string) => {
    const updated = inQS.map(inq => {
      if (inq.id === id) {
        return { ...inq, status: 'Answered' };
      }
      return inq;
    });
    setInQS(updated);
    localStorage.setItem('navpahal_expert_inquiries', JSON.stringify(updated));
    setReplyingToId(null);
    setExpertReplyText('');
    onDataChanged();
  };

  const handleAddDemoData = () => {
    // Generate simulated data so the user has active elements instantly to inspect
    const dummyVols: VolunteerRegistration[] = [
      { id: `vol-${Date.now()}-1`, name: 'Arjun Adiga', email: 'arjun@gmail.com', interestArea: 'Healthcare', status: 'Approved', date: 'Just now' },
      { id: `vol-${Date.now()}-2`, name: 'Samantha Cole', email: 'samantha@g.harvard.edu', interestArea: 'Education', status: 'Approved', date: '2 mins ago' },
    ];
    const dummyInqs: ExpertInquiry[] = [
      { id: `inq-${Date.now()}-1`, expertId: 'amit-sharma', expertName: 'Amit Sharma', userName: 'Kabir Dev', userEmail: 'kabir@outlook.com', query: 'Can you consult us mock-ups for setting up a mobile pediatric hub in rural UP districts?', date: '1 hour ago', status: 'Pending Response' }
    ];
    const dummyMsgs: ContactMessage[] = [
      { id: `msg-${Date.now()}-1`, firstName: 'Liam', lastName: 'O\'Connor', subject: 'Corporate CSR partnership', message: 'We represent a green tech framework and want to tie in with your environmental reforestation volunteer pipeline.', date: '3 hours ago' }
    ];

    localStorage.setItem('navpahal_volunteers', JSON.stringify([...dummyVols, ...vols]));
    localStorage.setItem('navpahal_expert_inquiries', JSON.stringify([...dummyInqs, ...inQS]));
    localStorage.setItem('navpahal_contact_messages', JSON.stringify([...dummyMsgs, ...messages]));
    loadData();
    onDataChanged();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-slate-900/60 backdrop-blur-sm">
          {/* Main Console Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-2xl bg-slate-950 border-l border-white/10 text-slate-100 flex flex-col h-full shadow-2xl relative"
          >
            {/* Header banner */}
            <div className="p-6 bg-slate-900 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#0072CE]/20 text-[#0072CE] rounded-lg border border-[#0072CE]/30">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base font-headline">Submissions Developer Console</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Navpahal local storage database simulator</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddDemoData}
                  className="px-3 py-1.5 bg-slate-800 text-xs text-white/90 hover:text-white rounded-lg hover:bg-slate-700 transition-all font-bold flex items-center gap-1.5"
                  title="Generate Dummy entries instantly"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Seed Demo</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid selector buttons for sections */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-slate-950 text-xs">
              <button
                onClick={() => setActiveSubTab('volunteers')}
                className={`py-4 font-bold border-b-2 text-center transition-all ${
                  activeSubTab === 'volunteers' ? 'border-[#72BF44] text-[#72BF44] bg-white/5' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Volunteers ({vols.length})
              </button>
              <button
                onClick={() => setActiveSubTab('consultations')}
                className={`py-4 font-bold border-b-2 text-center transition-all ${
                  activeSubTab === 'consultations' ? 'border-[#F7941D] text-[#F7941D] bg-white/5' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Inquiries ({inQS.length})
              </button>
              <button
                onClick={() => setActiveSubTab('messages')}
                className={`py-4 font-bold border-b-2 text-center transition-all ${
                  activeSubTab === 'messages' ? 'border-[#0072CE] text-[#0072CE] bg-white/5' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Inbox Messages ({messages.length})
              </button>
            </div>

            {/* Main content viewport */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* CLEAR BUTTON */}
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-450 font-medium">Clear sections list completely to reload form test runs.</span>
                <button
                  onClick={() => handleClearSection(activeSubTab === 'volunteers' ? 'vols' : activeSubTab === 'consultations' ? 'inqs' : 'msgs')}
                  className="text-[11px] font-bold text-red-400 hover:text-red-301 hover:underline flex items-center gap-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Wipe list</span>
                </button>
              </div>

              {/* LIST ITEMS VIEW */}
              <div className="space-y-4">
                
                {/* VOLUNTEERS */}
                {activeSubTab === 'volunteers' && (
                  vols.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 space-y-2">
                      <Users className="w-12 h-12 stroke-[1.5] mx-auto text-slate-600" />
                      <p className="text-xs">No local volunteers found in localStorage database.</p>
                      <button onClick={handleAddDemoData} className="text-[#72BF44] font-bold text-xs hover:underline">Seed simulated registries now</button>
                    </div>
                  ) : (
                    vols.map((v) => (
                      <div key={v.id} className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#72BF44] text-sm">{v.name}</span>
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">
                            ACTIVE REGISTRY
                          </span>
                        </div>
                        <div className="text-slate-400 font-semibold grid grid-cols-2 gap-2 text-[11px]">
                          <p>🎯 Area: <span className="text-white font-bold">{v.interestArea}</span></p>
                          <p>✉ Email: <span className="text-white font-bold">{v.email}</span></p>
                        </div>
                        <div className="pt-2 border-t border-white/5 text-[10px] text-slate-500 uppercase flex justify-between font-bold">
                          <span>REG DATE: {v.date}</span>
                          <span>ID: {v.id}</span>
                        </div>
                      </div>
                    ))
                  )
                )}

                {/* CONSULTATIONS */}
                {activeSubTab === 'consultations' && (
                  inQS.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 space-y-2">
                      <ShieldCheck className="w-12 h-12 stroke-[1.5] mx-auto text-slate-600" />
                      <p className="text-xs">No pending or answered briefings found.</p>
                      <button onClick={handleAddDemoData} className="text-[#F7941D] font-bold text-xs hover:underline">Seed simulated registries now</button>
                    </div>
                  ) : (
                    inQS.map((inq) => (
                      <div key={inq.id} className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3 text-xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-bold text-white text-sm">{inq.userName}</span>
                            <p className="text-[10px] text-slate-400 font-bold mt-0.5">TARGET ADVISOR: {inq.expertName}</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider leading-relaxed ${
                            inq.status === 'Answered' 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                          }`}>
                            {inq.status}
                          </span>
                        </div>

                        <div className="bg-slate-900 border border-white/5 p-3 rounded-lg text-slate-300">
                          <p className="italic">"{inq.query}"</p>
                        </div>

                        {/* Respond Actions block */}
                        {inq.status === 'Pending Response' && (
                          <div className="space-y-2 pt-1">
                            {replyingToId === inq.id ? (
                              <div className="space-y-2">
                                <textarea
                                  placeholder="Write response advice here..."
                                  value={expertReplyText}
                                  onChange={(e) => setExpertReplyText(e.target.value)}
                                  className="w-full bg-[#1e293b] text-white border border-white/10 rounded-lg p-2.5 resize-none text-[11px]"
                                />
                                <div className="flex gap-2 justify-end">
                                  <button
                                    onClick={() => setReplyingToId(null)}
                                    className="bg-slate-800 text-xs px-3 py-1.5 rounded text-white"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => handleRespondExpert(inq.id)}
                                    disabled={!expertReplyText.trim()}
                                    className="bg-[#F7941D] text-xs px-3 py-1.5 rounded font-bold text-white disabled:opacity-50"
                                  >
                                    Submit Reply
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setReplyingToId(inq.id);
                                  setExpertReplyText(`Hello ${inq.userName}, regarding your query: We are matching resources for you right away. Amit.`);
                                }}
                                className="bg-gradient-to-r from-amber-500 to-[#F7941D] text-white font-bold text-[11px] px-3.5 py-2 rounded-lg flex items-center gap-1"
                              >
                                <span>Answer as {inq.expertName}</span>
                              </button>
                            )}
                          </div>
                        )}

                        <div className="pt-2 border-t border-white/5 text-[10px] text-slate-500 uppercase flex justify-between font-bold">
                          <span>CLIENT Email: {inq.userEmail}</span>
                          <span>Reg Date: {inq.date}</span>
                        </div>
                      </div>
                    ))
                  )
                )}

                {/* MESSAGES */}
                {activeSubTab === 'messages' && (
                  messages.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 space-y-2">
                      <Mail className="w-12 h-12 stroke-[1.5] mx-auto text-slate-600" />
                      <p className="text-xs">No inbox messages received yet.</p>
                      <button onClick={handleAddDemoData} className="text-[#0072CE] font-bold text-xs hover:underline">Seed simulated registries now</button>
                    </div>
                  ) : (
                    messages.map((m) => (
                      <div key={m.id} className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white text-sm">{m.firstName} {m.lastName}</span>
                          <span className="text-[10px] text-indigo-400 font-bold tracking-tight">GENERAL INQUIRY</span>
                        </div>

                        <div>
                          <p className="text-slate-450 font-bold uppercase text-[9px] text-slate-400 tracking-wider">Subject: <span className="text-[#00B5E2]">{m.subject}</span></p>
                          <p className="text-slate-300 italic mt-1.5 bg-slate-900 border border-white/5 p-3 rounded-lg leading-relaxed">
                            "{m.message}"
                          </p>
                        </div>

                        <div className="pt-2 border-t border-white/5 text-[10px] text-slate-500 uppercase flex justify-between font-bold">
                          <span>Reg Date: {m.date}</span>
                          <span>Inq ID: {m.id}</span>
                        </div>
                      </div>
                    ))
                  )
                )}

              </div>
            </div>

            {/* Footer warning */}
            <div className="p-5 bg-slate-900 border-t border-white/10 text-center text-[10px] text-slate-400 leading-normal font-bold uppercase tracking-wider">
              Simulation sandboxed securely inside this applet context.
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
