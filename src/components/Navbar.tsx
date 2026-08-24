import React, { useState } from 'react';
import { PageTab } from '../types';
import { CavaliersLogo } from './CavaliersLogo';
import { Menu, X, FileText, Send, Calendar, Users, Home, Info, Image, ShieldAlert, Phone } from 'lucide-react';
import { PROGRAM_INFO } from '../data/mockData';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
  onOpenHandbookModal: () => void;
  onDeadLinkClick: (sectionName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenRecruitModal,
  onOpenHandbookModal,
  onDeadLinkClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { tab: PageTab; label: string; icon: React.ReactNode; isDead?: boolean }[] = [
    { tab: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { tab: 'about', label: 'About & Facilities', icon: <Info className="w-4 h-4" /> },
    { tab: 'roster', label: 'Roster', icon: <Users className="w-4 h-4" />, isDead: true },
    { tab: 'coaches', label: 'Coaching Staff', icon: <ShieldAlert className="w-4 h-4" />, isDead: true },
    { tab: 'schedule', label: 'Schedule', icon: <Calendar className="w-4 h-4" />, isDead: true },
    { tab: 'gallery', label: 'Gallery', icon: <Image className="w-4 h-4" /> },
    { tab: 'contact', label: 'Contact & Recruit', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: PageTab, isDead?: boolean, label?: string) => {
    if (isDead) {
      onDeadLinkClick(label || 'This section');
      setMobileMenuOpen(false);
      return;
    }
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#222222] bg-[#0a0a0a]/95 backdrop-blur-md transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] py-1.5 px-4 text-xs font-semibold tracking-wider text-center text-white flex items-center justify-center gap-3">
        <span className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded text-[11px] uppercase tracking-widest">
          Fall & Spring Recruiting Open
        </span>
        <span>
          Now Accepting Post-Grad Applications for <strong>Oklahoma Cavaliers Baseball</strong> • St. Gregory's Campus
        </span>
        <button
          onClick={onOpenRecruitModal}
          className="hidden md:inline-flex items-center gap-1 text-[#facc15] hover:text-white underline font-bold transition ml-2"
        >
          Apply Online →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Header */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <CavaliersLogo variant="crest" size="md" className="transition-transform group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-athletic text-2xl sm:text-3xl font-extrabold tracking-wide text-white group-hover:text-[#facc15] transition">
                  OKLAHOMA CAVALIERS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#eab308]">
                Post-Graduate Baseball Program
              </p>
            </div>
          </button>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenHandbookModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-[#161616] border border-[#262626] hover:text-white hover:border-[#ca8a04]/50 hover:bg-[#1f1f1f] transition"
              title="View Player & Parent Handbook"
            >
              <FileText className="w-3.5 h-3.5 text-[#eab308]" />
              <span className="hidden xl:inline">Player & Parent</span> Handbook
            </button>

            <button
              onClick={onOpenRecruitModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition transform active:scale-95 border border-amber-300/40"
            >
              <Send className="w-3.5 h-3.5" />
              Recruit Form
            </button>
          </div>

          {/* Menu Button (All Screen Sizes) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenRecruitModal}
              className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-zinc-950 bg-[#eab308] sm:hidden"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-[#181818] border border-[#262626] flex items-center gap-2"
              aria-label="Toggle menu"
            >
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline px-1 text-zinc-300">Menu</span>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Navigation Menu (All Screen Sizes) */}
      {mobileMenuOpen && (
        <div className="border-t border-[#222222] bg-[#0d0d0d] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              if (item.isDead) {
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab, true, item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-left transition opacity-60 text-zinc-400 hover:bg-[#141414] cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-500">{item.icon}</span>
                      {item.label}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Updating Soon
                    </span>
                  </button>
                );
              }
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold text-left transition ${
                    isActive
                      ? 'bg-[#181818] text-[#facc15] border border-[#ca8a04]/40'
                      : 'text-zinc-300 hover:bg-[#141414] hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-[#facc15]' : 'text-zinc-400'}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#222222] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHandbookModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-zinc-200 bg-[#161616] border border-[#262626] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#eab308]" />
              Read Player & Parent Handbook
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruitModal();
              }}
              className="w-full py-3 px-4 rounded-lg text-sm font-extrabold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              Complete Recruitment Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
