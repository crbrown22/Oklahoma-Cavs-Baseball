import React from 'react';
import { PageTab } from '../types';
import { CavaliersLogo } from './CavaliersLogo';
import { PROGRAM_INFO } from '../data/mockData';
import { MapPin, Mail, Send, FileText, ChevronRight, Trophy, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
  onOpenHandbookModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenRecruitModal,
  onOpenHandbookModal,
}) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] bg-[#070707] text-zinc-300 relative overflow-hidden">
      {/* Top Gold Accent Border */}
      <div className="h-1 bg-gradient-to-r from-[#991b1b] via-[#eab308] to-[#991b1b]" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CavaliersLogo variant="crest" size="md" />
              <div>
                <h3 className="font-athletic text-2xl font-black tracking-wide text-white">
                  OKLAHOMA CAVALIERS
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#eab308] font-bold">
                  Post-Graduate Baseball
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Based at the historic St. Gregory's campus in Shawnee, Oklahoma. Dedicated to developing collegiate-ready baseball athletes through year-round physical training, competitive game schedules, and structured college placement.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#facc15] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#eab308]" />
              <span>DEVELOP THE PLAYER. BUILD THE PERSON.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-athletic text-lg font-bold uppercase tracking-wider text-white border-b border-[#222222] pb-2">
              Program Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> Facilities & Placement Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('roster')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> Active Player Roster
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('coaches')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> Coaching Staff & Operations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('schedule')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> 2025-2026 Game Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="flex items-center gap-2 hover:text-[#facc15] transition text-zinc-300 hover:translate-x-0.5 duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#eab308]" /> Facilities & Game Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus & Contact */}
          <div className="space-y-4">
            <h4 className="font-athletic text-lg font-bold uppercase tracking-wider text-white border-b border-[#222222] pb-2">
              Campus & Operations
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#eab308] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">{PROGRAM_INFO.campusName}</p>
                  <p className="text-zinc-400">{PROGRAM_INFO.address}</p>
                  <p className="text-zinc-400">{PROGRAM_INFO.cityStateZip}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#eab308] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">{PROGRAM_INFO.gmName}</p>
                  <p className="text-xs text-zinc-400">{PROGRAM_INFO.gmTitle}</p>
                  <a
                    href={`mailto:${PROGRAM_INFO.gmEmail}`}
                    className="text-[#facc15] hover:underline font-mono text-xs"
                  >
                    {PROGRAM_INFO.gmEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Recruitment & Handbook */}
          <div className="space-y-4">
            <h4 className="font-athletic text-lg font-bold uppercase tracking-wider text-white border-b border-[#222222] pb-2">
              Recruiting Portal
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Are you a high school graduate looking to develop your game and secure a college roster spot? Start your recruiting journey today.
            </p>
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onOpenRecruitModal}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] flex items-center justify-center gap-2 shadow-md transition"
              >
                <Send className="w-3.5 h-3.5" />
                Player Recruitment Form
              </button>
              <button
                onClick={onOpenHandbookModal}
                className="w-full py-2 px-4 rounded-lg text-xs font-semibold text-zinc-300 bg-[#161616] border border-[#262626] hover:text-white hover:border-[#ca8a04]/50 flex items-center justify-center gap-2 transition"
              >
                <FileText className="w-3.5 h-3.5 text-[#eab308]" />
                Digital Player Handbook
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Oklahoma Cavaliers Post-Graduate Baseball. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenHandbookModal} className="hover:text-zinc-400">
              Player & Parent Handbook
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-400">
              Recruiting Contact
            </button>
            <span>•</span>
            <span className="text-[#eab308]">St. Gregory's Campus • Shawnee, OK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
