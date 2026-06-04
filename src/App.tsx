/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Foundation from './components/Foundation';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Experts from './components/Experts';
import Volunteers from './components/Volunteers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);
  const [adminCount, setAdminCount] = React.useState(0);

  // Recalculate totals across localStorage repositories to update header badge
  const updateAdminCount = React.useCallback(() => {
    let totals = 0;
    
    const loadedVols = localStorage.getItem('navpahal_volunteers');
    if (loadedVols) {
      totals += JSON.parse(loadedVols).length;
    } else {
      totals += 3; // Initial default dummy count
    }

    const loadedInqs = localStorage.getItem('navpahal_expert_inquiries');
    if (loadedInqs) {
      totals += JSON.parse(loadedInqs).length;
    }

    const loadedMsg = localStorage.getItem('navpahal_contact_messages');
    if (loadedMsg) {
      totals += JSON.parse(loadedMsg).length;
    }

    setAdminCount(totals);
  }, []);

  React.useEffect(() => {
    updateAdminCount();
  }, [updateAdminCount]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-800 selection:bg-[#0072CE]/20 selection:text-[#0072CE] font-sans antialiased">
      {/* Header element */}
      <Header 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        adminCount={adminCount} 
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onJoinAction={() => handleScrollToSection('volunteer-section')}
          onViewImpactAction={() => handleScrollToSection('stats-block')}
        />

        {/* Foundation Section */}
        <Foundation />

        {/* Interactive Stakeholder Pillars */}
        <Pillars />

        {/* Dynamic Service Playgrounds */}
        <Services />

        {/* Custom Advisory Board & Slot Booker */}
        <Experts onInquirySubmitted={updateAdminCount} />

        {/* Interactive Volunteer Registry Form */}
        <Volunteers onVolunteerRegistered={updateAdminCount} />

        {/* Custom HQ and Email/Inquiry Dispatch Form */}
        <Contact onMessageSent={updateAdminCount} />
      </main>

      {/* Footer element containing newsletter action */}
      <Footer />

      {/* Developer database drawer */}
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        onDataChanged={updateAdminCount} 
      />
    </div>
  );
}
