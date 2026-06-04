/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Send, Sparkles, User, Mail, Compass, HelpCircle, UsersRound } from 'lucide-react';
import { VolunteerRegistration } from '../types';

interface VolunteersProps {
  onVolunteerRegistered: () => void;
}

export default function Volunteers({ onVolunteerRegistered }: VolunteersProps) {
  // Form states
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [interestArea, setInterestArea] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const [volunteers, setVolunteers] = React.useState<VolunteerRegistration[]>([]);

  // Load recent volunteers
  React.useEffect(() => {
    const loaded = localStorage.getItem('navpahal_volunteers');
    if (loaded) {
      setVolunteers(JSON.parse(loaded));
    } else {
      // Setup initial cool dummy list for presentation
      const initialDummy: VolunteerRegistration[] = [
        { id: '1', name: 'Aarav Mehta', email: 'aarav@example.com', interestArea: 'Healthcare', status: 'Approved', date: 'Just now' },
        { id: '2', name: 'Sofia Rodriguez', email: 'sofia@example.com', interestArea: 'Education', status: 'Approved', date: '2 hours ago' },
        { id: '3', name: 'Vikram Singh', email: 'vikram@example.com', interestArea: 'Environment', status: 'Approved', date: 'Yesterday' }
      ];
      setVolunteers(initialDummy);
      localStorage.setItem('navpahal_volunteers', JSON.stringify(initialDummy));
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!interestArea) {
      setErrorMsg('Please select an interest area.');
      return;
    }

    const newVolunteer: VolunteerRegistration = {
      id: `vol-${Date.now()}`,
      name: fullName.trim(),
      email: email.trim(),
      interestArea: interestArea,
      status: 'Approved',
      date: 'Just now'
    };

    const updated = [newVolunteer, ...volunteers];
    setVolunteers(updated);
    localStorage.setItem('navpahal_volunteers', JSON.stringify(updated));

    // Reset States
    setFullName('');
    setEmail('');
    setInterestArea('');
    setErrorMsg('');
    setSuccess(true);

    // Update parent count
    onVolunteerRegistered();

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  const getInterestBadgeColor = (area: string) => {
    switch (area.toLowerCase()) {
      case 'healthcare': return 'bg-[#F7941D]/10 text-[#F7941D]';
      case 'education': return 'bg-[#0072CE]/10 text-[#0072CE]';
      case 'environment': return 'bg-[#72BF44]/10 text-[#72BF44]';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  return (
    <section id="volunteer-section" className="py-24 bg-white scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Large Rounded Content Box */}
        <div className="bg-gradient-to-br from-[#0072CE] via-[#00B5E2] to-[#0072CE] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative p-8 md:p-16 lg:p-20 text-white shadow-2xl">
          {/* Decorative glowing backdrops */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#72BF44]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Left informational column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline leading-tight">
                  Become a Community Hero
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Join our growing network of 10,000+ volunteers making real impact on the ground every single day. Your time can change lives.
                </p>
              </div>

              {/* Checks */}
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span>Get Certified in Social Work Directive</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span>Access Exclusive Impact Workshops</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span>Network with Top-Tier CSR Professionals</span>
                </li>
              </ul>

              {/* Feed of active registries */}
              <div className="pt-6 border-t border-white/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white/95 uppercase tracking-wider">
                  <UsersRound className="w-4.5 h-4.5" />
                  <span>Verified Registrations Feed</span>
                </div>

                <div className="h-16 overflow-hidden relative">
                  <AnimatePresence mode="popLayout">
                    {volunteers.slice(0, 1).map((vol) => (
                      <motion.div
                        key={vol.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs font-semibold"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-300 font-bold">●</span>
                          <span>{vol.name}</span>
                          <span className="text-white/60">registered for</span>
                          <span className="bg-white/15 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase">{vol.interestArea}</span>
                        </div>
                        <span className="text-white/50 text-[10px] uppercase font-bold">{vol.date}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div id="join-card-box" className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-slate-100 text-slate-800">
              <h4 className="text-[#0072CE] font-bold font-headline text-2xl mb-6">
                Join the Registry
              </h4>

              <form onSubmit={handleRegister} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3.5 bg-red-50 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-4 text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-100"
                  >
                    <div className="w-12 h-12 bg-[#72BF44] rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm">Successfully Enrolled!</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Welcome to the Navpahal movement. Your volunteer profile ID has been added to our live databases.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Full Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-4.5 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#f2f4f6]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 focus:ring-1 focus:ring-[#0072CE] focus:outline-none text-xs sm:text-sm font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-4.5 w-4 h-4 text-slate-400" />
                      <input 
                        type="email" 
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#f2f4f6]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 focus:ring-1 focus:ring-[#0072CE] focus:outline-none text-xs sm:text-sm font-medium"
                      />
                    </div>

                    {/* Dropdown */}
                    <div className="relative">
                      <Compass className="absolute left-4 top-4.5 w-4 h-4 text-slate-400" />
                      <select 
                        value={interestArea}
                        onChange={(e) => setInterestArea(e.target.value)}
                        className="w-full bg-[#f2f4f6]/70 border border-slate-200 rounded-xl pl-11 pr-5 py-4 focus:ring-1 focus:ring-[#0072CE] text-slate-500 focus:outline-none text-xs sm:text-sm font-medium appearance-none"
                      >
                        <option value="">Select Interest Area</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Environment">Environment</option>
                      </select>
                    </div>

                    {/* Action Button */}
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white py-4 rounded-xl font-bold text-sm hover:opacity-95 transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Start Volunteering</span>
                    </button>
                  </>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
