/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RecruitmentModal } from './components/RecruitmentModal';
import { HandbookModal } from './components/HandbookModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { RosterPage } from './components/pages/RosterPage';
import { CoachesPage } from './components/pages/CoachesPage';
import { SchedulePage } from './components/pages/SchedulePage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isRecruitModalOpen, setIsRecruitModalOpen] = useState(false);
  const [isHandbookModalOpen, setIsHandbookModalOpen] = useState(false);
  const [updatingNotice, setUpdatingNotice] = useState<string | null>(null);

  const handleDeadLinkClick = (sectionName: string) => {
    setUpdatingNotice(`The ${sectionName} section is currently offline while being updated for the upcoming season.`);
  };

  // Guard dead links if activeTab ever becomes roster/coaches/schedule
  useEffect(() => {
    if (activeTab === 'roster' || activeTab === 'coaches' || activeTab === 'schedule') {
      const name = activeTab === 'coaches' ? 'Coaching Staff' : activeTab === 'schedule' ? 'Schedule' : 'Roster';
      setActiveTab('home');
      setUpdatingNotice(`The ${name} section is currently offline while being updated for the upcoming season.`);
    }
  }, [activeTab]);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 flex flex-col selection:bg-[#eab308] selection:text-black relative overflow-x-hidden">
      {/* Dynamic Background Atmosphere (Midnight Blue, Scarlet Red & Gold Gradients) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Left Scarlet Red Ambient Glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[140px] opacity-75" />
        {/* Top-Right Midnight Blue Deep Glow */}
        <div className="absolute top-10 -right-40 w-[700px] h-[700px] bg-[#0c1a40]/90 rounded-full blur-[160px] opacity-90" />
        {/* Mid-Screen Athletic Gold Radiance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[150px] opacity-70" />
        {/* Lower-Right Scarlet Red Accent */}
        <div className="absolute top-2/3 -right-20 w-[550px] h-[550px] bg-rose-900/25 rounded-full blur-[130px] opacity-75" />
        {/* Bottom-Left Midnight Blue Glow */}
        <div className="absolute -bottom-40 -left-20 w-[650px] h-[650px] bg-[#091638]/85 rounded-full blur-[160px] opacity-85" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
          onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
          onDeadLinkClick={handleDeadLinkClick}
        />

        {/* Main Dynamic Content Area */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage
              setActiveTab={setActiveTab}
              onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
              onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
              onDeadLinkClick={handleDeadLinkClick}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage
              setActiveTab={setActiveTab}
              onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
              onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
            />
          )}

          {activeTab === 'gallery' && (
            <GalleryPage
              setActiveTab={setActiveTab}
              onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
            />
          )}

          {activeTab === 'contact' && (
            <ContactPage
              onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
            />
          )}
        </main>

        {/* Collegiate Footer */}
        <Footer
          setActiveTab={setActiveTab}
          onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
          onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
          onDeadLinkClick={handleDeadLinkClick}
        />
      </div>

      {/* Toast Notice for Dead Links */}
      {updatingNotice && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0c142b]/95 border border-[#ca8a04]/80 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3.5 backdrop-blur-md border-amber-500/40 max-w-lg w-[92vw] sm:w-auto">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <p className="flex-1 text-xs sm:text-sm font-medium text-amber-100">
            {updatingNotice}
          </p>
          <button
            onClick={() => setUpdatingNotice(null)}
            className="text-zinc-400 hover:text-white text-xs font-bold px-1.5 py-0.5 rounded bg-white/10"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating Fast-Apply Floating Action Button on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <button
          onClick={() => setIsRecruitModalOpen(true)}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 font-black text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 border border-amber-300/40 active:scale-95 transition"
        >
          <span>Apply Now</span>
        </button>
      </div>

      {/* Modals */}
      <RecruitmentModal
        isOpen={isRecruitModalOpen}
        onClose={() => setIsRecruitModalOpen(false)}
        onOpenHandbook={() => {
          setIsRecruitModalOpen(false);
          setIsHandbookModalOpen(true);
        }}
      />

      <HandbookModal
        isOpen={isHandbookModalOpen}
        onClose={() => setIsHandbookModalOpen(false)}
        onOpenRecruit={() => {
          setIsHandbookModalOpen(false);
          setIsRecruitModalOpen(true);
        }}
      />
    </div>
  );
}

