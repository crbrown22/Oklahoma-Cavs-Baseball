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

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-[#eab308] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
      />

      {/* Main Dynamic Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
            onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
            onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
            onOpenHandbookModal={() => setIsHandbookModalOpen(true)}
          />
        )}

        {activeTab === 'roster' && (
          <RosterPage
            setActiveTab={setActiveTab}
            onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
          />
        )}

        {activeTab === 'coaches' && (
          <CoachesPage
            setActiveTab={setActiveTab}
            onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
          />
        )}

        {activeTab === 'schedule' && (
          <SchedulePage
            setActiveTab={setActiveTab}
            onOpenRecruitModal={() => setIsRecruitModalOpen(true)}
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
      />

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

