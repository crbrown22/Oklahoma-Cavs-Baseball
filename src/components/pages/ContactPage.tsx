import React from 'react';
import { PROGRAM_INFO } from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  QrCode, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  Award,
  Video,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { TARGET_RECRUITMENT_EMAIL } from '../../utils/recruitmentEmail';

interface ContactPageProps {
  onOpenHandbookModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenHandbookModal }) => {
  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <Phone className="w-3.5 h-3.5 text-[#eab308]" /> Recruitment & Admissions
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          RECRUITMENT & CONTACT PORTAL
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Start your post-graduate collegiate baseball journey. Connect directly with General Manager Coach Christopher Brown and complete the official Oklahoma Cavaliers recruit application.
        </p>
      </div>

      {/* Main 2-Column Hub: Official Google Form & QR Card + GM Info & Campus Directions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left / Primary Column: Official Form & QR Gateway */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0a0a0a] rounded-3xl border-2 border-[#ca8a04]/50 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#991b1b]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 border-b border-[#262626] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-xs font-bold text-[#facc15] uppercase tracking-wider">
              <QrCode className="w-4 h-4" /> Official Prospective Athlete Application
            </div>
            <h2 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              PLAYER RECRUITMENT APPLICATION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              All prospective student-athletes must complete our official questionnaire. Scan the high-resolution QR code with your smartphone or click the button below to launch the form.
            </p>
          </div>

          {/* QR Code and Quick Instructions Box */}
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#0e0e0e] p-6 rounded-3xl border border-[#262626] shadow-inner">
            {/* QR Code SVG */}
            <div className="bg-white p-3.5 rounded-2xl shrink-0 shadow-2xl border-4 border-amber-400/40 transition-transform hover:scale-105">
              <svg viewBox="0 0 200 200" width="160" height="160" className="mx-auto block" aria-label="Official Form QR Code">
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
                {/* Center Core */}
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

            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#facc15] block">
                Quick 2-Minute Submission
              </span>
              <h4 className="font-athletic text-xl font-bold text-white uppercase">
                Scan with Camera or Tap Below
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Opens directly in Google Forms with secure field validation for player measurables, high school stats, transcript verification, and video links.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-[#facc15]" /> Average response time: 24–48 hours
              </div>
            </div>
          </div>

          {/* Primary 1-Click CTA */}
          <div className="space-y-3">
            <a
              href={PROGRAM_INFO.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] flex items-center justify-center gap-3 shadow-xl transition transform active:scale-98 border border-amber-300/50"
            >
              <span>Open Official Google Recruitment Form</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2 px-1">
              <span className="font-mono text-[11px] text-zinc-400 truncate">
                URL: {PROGRAM_INFO.googleFormUrl}
              </span>
              <span className="text-[#facc15] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Application
              </span>
            </div>
          </div>

          {/* What to Have Ready Checklist */}
          <div className="bg-[#101010] p-6 rounded-2xl border border-[#262626] space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#facc15] flex items-center gap-2">
              <FileText className="w-4 h-4" /> Recommended Information to Submit
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Primary & secondary baseball positions</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Recent athletic measurables (60-yd, velo, height/weight)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Cumulative High School GPA & graduation class</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Highlight reel URL (YouTube, Twitter/X, Hudl)</span>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Parent/guardian contact information & collegiate goals</span>
              </div>
            </div>
          </div>

          {/* Player Handbook CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#141414] border border-[#262626]">
            <div>
              <h5 className="font-athletic text-base font-bold text-white uppercase">
                Want complete program details?
              </h5>
              <p className="text-xs text-zinc-400">
                View tuition breakdowns, housing, weekly schedules, and NCAA clock rules.
              </p>
            </div>
            <button
              onClick={onOpenHandbookModal}
              className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#facc15] bg-[#1a1a1a] border border-[#ca8a04]/40 hover:bg-[#222222] hover:text-white transition"
            >
              Read Handbook →
            </button>
          </div>

        </div>

        {/* Right Column: Coach Brown Info, Campus Facility, & Admissions Help */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* General Manager Card */}
          <div className="bg-[#121212] rounded-3xl border border-[#262626] p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center gap-4">
              <CavaliersLogo variant="crest" size="md" />
              <div>
                <h3 className="font-athletic text-2xl font-black text-white uppercase">
                  {PROGRAM_INFO.gmName}
                </h3>
                <p className="text-xs text-[#facc15] font-bold uppercase tracking-wider">
                  {PROGRAM_INFO.gmTitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed border-t border-[#262626] pt-4">
              Coach Brown handles all recruit evaluations, roster additions, and placement discussions with college coaches across NCAA, NAIA, and NJCAA levels.
            </p>

            <div className="space-y-3 pt-1 text-xs">
              <div className="flex items-start gap-3 p-3.5 bg-[#0a0a0a] rounded-xl border border-[#262626]">
                <Mail className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-[11px]">Direct Recruiting Email:</span>
                  <a
                    href={`mailto:${TARGET_RECRUITMENT_EMAIL}?subject=Oklahoma%20Cavaliers%20Recruitment%20Inquiry`}
                    className="text-white font-mono font-bold hover:text-[#facc15] underline"
                  >
                    {TARGET_RECRUITMENT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#0a0a0a] rounded-xl border border-[#262626]">
                <Calendar className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-[11px]">Fall Season Report Date:</span>
                  <p className="text-white font-semibold">
                    {PROGRAM_INFO.reportDate} (St. Gregory's Campus)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#0a0a0a] rounded-xl border border-[#262626]">
                <MapPin className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-[11px]">Campus Facility Address:</span>
                  <p className="text-white font-semibold">
                    {PROGRAM_INFO.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${TARGET_RECRUITMENT_EMAIL}?subject=Cavaliers%20Recruiting%20Question`}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1a1a1a] hover:bg-[#222222] border border-[#333333] flex items-center justify-center gap-2 transition"
            >
              <Mail className="w-4 h-4 text-[#facc15]" /> Send Direct Email to Staff
            </a>
          </div>

          {/* Campus Facility & Travel Directions */}
          <div className="bg-[#121212] rounded-3xl border border-[#262626] p-6 sm:p-8 space-y-4 shadow-xl">
            <h4 className="font-athletic text-xl font-bold text-white uppercase flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#eab308]" /> St. Gregory's Campus Facility
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Located conveniently in Shawnee, Oklahoma, approximately 35 minutes east of Oklahoma City along I-40. Our athletes train on dedicated collegiate fields, covered batting cages, weight rooms, and residence dorms.
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=1900+W+MacArthur+St+Shawnee+OK+74804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#facc15] hover:text-white transition"
              >
                <span>Open in Google Maps & Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* NCAA Eligibility & Clock Notice */}
          <div className="bg-[#101010] rounded-3xl border border-[#262626] p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#facc15]">
              <ShieldCheck className="w-4 h-4" /> Eligibility Protection
            </div>
            <h5 className="font-athletic text-lg font-bold text-white uppercase">
              Save All 4 Years of Collegiate Eligibility
            </h5>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Post-graduate baseball does not trigger your NCAA, NAIA, or NJCAA 5-year eligibility clock when attending as a non-degree collegiate preparatory athlete.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
