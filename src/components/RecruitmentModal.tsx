import React from 'react';
import { X, QrCode, ExternalLink, Mail, ShieldCheck, CheckCircle2, Award, Calendar, FileText, ArrowRight } from 'lucide-react';
import { PROGRAM_INFO } from '../data/mockData';
import { CavaliersLogo } from './CavaliersLogo';
import { TARGET_RECRUITMENT_EMAIL } from '../utils/recruitmentEmail';

interface RecruitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#111111] border border-[#2a2a2a] shadow-2xl text-zinc-100">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#262626]">
          <div className="flex items-center gap-3.5">
            <CavaliersLogo variant="crest" size="sm" />
            <div>
              <h2 className="font-athletic text-xl font-black tracking-wide text-white uppercase">
                Official Player Recruitment Portal
              </h2>
              <p className="text-xs text-[#facc15] uppercase tracking-wider font-semibold">
                Oklahoma Cavaliers Post-Graduate Baseball
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-xl bg-[#1c1c1c] border border-[#2c2c2c] transition hover:bg-[#252525]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Hero Card with QR & Direct Link */}
          <div className="bg-gradient-to-br from-[#161616] via-[#121212] to-[#0a0a0a] rounded-3xl border border-[#ca8a04]/40 p-6 sm:p-8 text-center space-y-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#991b1b]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-xs font-bold text-[#facc15] uppercase tracking-wider">
              <QrCode className="w-3.5 h-3.5" /> Scan or Click to Apply
            </div>

            <div>
              <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                OFFICIAL RECRUITMENT APPLICATION
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mt-1.5 leading-relaxed">
                Scan the QR code with your smartphone camera or click the direct button below to complete the official Oklahoma Cavaliers baseball recruit questionnaire.
              </p>
            </div>

            {/* High-Resolution Clean QR Code SVG */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl border-4 border-amber-400/30 mx-auto transition-transform hover:scale-105">
              <svg viewBox="0 0 200 200" width="180" height="180" className="mx-auto block" aria-label="Recruitment Form QR Code">
                <rect width="200" height="200" fill="white" />
                {/* Top-Left Finder */}
                <rect x="15" y="15" width="45" height="45" fill="#091322" />
                <rect x="23" y="23" width="29" height="29" fill="white" />
                <rect x="30" y="30" width="15" height="15" fill="#091322" />
                {/* Top-Right Finder */}
                <rect x="140" y="15" width="45" height="45" fill="#091322" />
                <rect x="148" y="23" width="29" height="29" fill="white" />
                <rect x="155" y="30" width="15" height="15" fill="#091322" />
                {/* Bottom-Left Finder */}
                <rect x="15" y="140" width="45" height="45" fill="#091322" />
                <rect x="23" y="148" width="29" height="29" fill="white" />
                <rect x="30" y="155" width="15" height="15" fill="#091322" />
                {/* Data modules */}
                <rect x="75" y="20" width="10" height="10" fill="#091322" />
                <rect x="95" y="20" width="15" height="10" fill="#091322" />
                <rect x="120" y="20" width="10" height="10" fill="#091322" />
                <rect x="75" y="40" width="20" height="10" fill="#091322" />
                <rect x="110" y="40" width="15" height="10" fill="#091322" />
                <rect x="20" y="75" width="10" height="20" fill="#091322" />
                <rect x="40" y="75" width="15" height="10" fill="#091322" />
                <rect x="65" y="75" width="70" height="10" fill="#091322" />
                <rect x="145" y="75" width="15" height="20" fill="#091322" />
                <rect x="170" y="75" width="10" height="10" fill="#091322" />
                {/* Center Badge Accent */}
                <rect x="75" y="95" width="15" height="15" fill="#991b1b" />
                <rect x="100" y="95" width="20" height="10" fill="#091322" />
                <rect x="130" y="95" width="10" height="20" fill="#091322" />
                <rect x="20" y="110" width="25" height="10" fill="#091322" />
                <rect x="55" y="110" width="10" height="15" fill="#091322" />
                <rect x="75" y="120" width="20" height="10" fill="#091322" />
                <rect x="105" y="120" width="15" height="25" fill="#091322" />
                <rect x="130" y="125" width="20" height="10" fill="#091322" />
                <rect x="160" y="115" width="20" height="15" fill="#091322" />
                <rect x="75" y="150" width="15" height="20" fill="#091322" />
                <rect x="100" y="160" width="30" height="10" fill="#091322" />
                <rect x="140" y="145" width="10" height="20" fill="#091322" />
                <rect x="160" y="150" width="25" height="15" fill="#091322" />
                <rect x="140" y="175" width="45" height="10" fill="#091322" />
              </svg>
            </div>

            {/* Direct 1-Click Button */}
            <div className="space-y-2 pt-1">
              <a
                href={PROGRAM_INFO.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] flex items-center justify-center gap-2.5 shadow-xl transition transform active:scale-98 border border-amber-300/50"
              >
                <span>Open Official Google Recruitment Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-zinc-400 font-mono">
                Direct Link: <span className="text-zinc-300 font-semibold">{PROGRAM_INFO.googleFormUrl}</span>
              </p>
            </div>
          </div>

          {/* 3 Step Evaluation Process */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#facc15]">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">1</span>
                <span>Submit Profile</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Provide your contact info, academic credentials (GPA), measurables, and highlight video links.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#facc15]">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">2</span>
                <span>Staff Review</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                General Manager Coach Christopher Brown and the staff analyze your video and athletic profile.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#facc15]">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">3</span>
                <span>Direct Contact</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Our coaching staff reaches out for evaluation discussions, roster invitations, and campus visits.
              </p>
            </div>
          </div>

          {/* Direct Coach Contact & Report Date */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#141414] border border-[#262626] text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-[#facc15] flex items-center justify-center border border-amber-500/20">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Direct Recruiting Email:</span>
                <a
                  href={`mailto:${TARGET_RECRUITMENT_EMAIL}?subject=Oklahoma%20Cavaliers%20Recruitment%20Inquiry`}
                  className="font-mono font-bold text-white hover:text-[#facc15] underline"
                >
                  {TARGET_RECRUITMENT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <Calendar className="w-4 h-4 text-[#facc15]" />
              <span>Fall Player Report Date: <strong className="text-white">{PROGRAM_INFO.reportDate}</strong></span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#141414] border-t border-[#262626] flex items-center justify-between">
          <span className="text-[11px] text-zinc-500">
            St. Gregory's Campus • Shawnee, OK
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-300 bg-[#1c1c1c] border border-[#2c2c2c] hover:text-white hover:bg-[#252525] transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
