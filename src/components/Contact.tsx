/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactProps {
  onMessageSent: () => void;
}

export default function Contact({ onMessageSent }: ContactProps) {
  // Form states
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const [success, setSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const [messages, setMessages] = React.useState<ContactMessage[]>([]);

  React.useEffect(() => {
    const loaded = localStorage.getItem('navpahal_contact_messages');
    if (loaded) {
      setMessages(JSON.parse(loaded));
    }
  }, []);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('All fields are required. Please input them.');
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      subject: subject.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('navpahal_contact_messages', JSON.stringify(updated));

    // Refreshes Form
    setFirstName('');
    setLastName('');
    setSubject('');
    setMessage('');
    setErrorMsg('');
    setSuccess(true);

    onMessageSent();

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section id="connect-section" className="py-24 bg-[#f2f4f6]/60 border-t border-slate-100 scroll-mt-20 leading-tight">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        
        {/* Left Information Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-[#0072CE] font-headline">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
              Whether you're looking to donate, partner, or just want to learn more, our team is here to help you make a difference.
            </p>
          </div>

          <div className="space-y-8">
            {/* Headquarters */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0072CE]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0072CE] group-hover:text-white transition-all text-[#0072CE]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Headquarters</h5>
                <p className="text-[#44474e] text-sm leading-relaxed">
                  42 Impact Square, Innovation District, New Delhi, 110001
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#72BF44]/15 flex items-center justify-center shrink-0 group-hover:bg-[#72BF44] group-hover:text-white transition-all text-[#72BF44]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Email Us</h5>
                <p className="text-[#44474e] text-sm">
                  connect@navpahal.org
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F7941D]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F7941D] group-hover:text-white transition-all text-[#F7941D]">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-bold text-[#0072CE] font-headline">Phone</h5>
                <p className="text-[#44474e] text-sm">
                  +91 1800 200 4000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100">
          <form onSubmit={handleMessageSubmit} className="space-y-6">
            
            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center space-y-3 text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-100"
              >
                <CheckCircle2 className="w-12 h-12 text-[#72BF44] mx-auto animate-bounce" />
                <h5 className="font-bold text-sm">Message Sent Successfully!</h5>
                <p className="text-xs text-slate-505 leading-relaxed">
                  Thank you for reaching out. We will address your partnership or general inquiry shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block">Subject</label>
                  <input
                    type="text"
                    placeholder="Partnership Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-extrabold text-[#0072CE] text-[10px] uppercase tracking-wider block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can collaborate..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-slate-200 focus:outline-[#0072CE] focus:ring-1 focus:ring-[#0072CE] rounded-xl px-4 py-3.5 bg-[#f7f9fb] text-slate-800 text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Send action Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0072CE] to-[#00B5E2] text-white py-4 rounded-xl font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 mt-4"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
