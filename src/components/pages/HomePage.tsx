import React from 'react';
import { PageTab } from '../../types';
import { PROGRAM_INFO, FACILITIES_DATA, RECRUITING_STEPS, SCHEDULE_DATA, ROSTER_DATA } from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { RecruitingStepsSection } from '../RecruitingStepsSection';
import { 
  Trophy, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Users, 
  Dumbbell, 
  GraduationCap, 
  Home, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  ExternalLink,
  Flame,
  Target
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
  onOpenHandbookModal: () => void;
  onDeadLinkClick?: (sectionName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenRecruitModal,
  onOpenHandbookModal,
  onDeadLinkClick,
}) => {
  const upcomingGames = SCHEDULE_DATA.filter((g) => g.status === 'Upcoming').slice(0, 3);
  const featuredPlayers = ROSTER_DATA.slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#222222] bg-[#080808]">
        {/* Background Image Layer with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/collegiate_baseball_field.jpg')`
          }}
        />
        {/* Deep Athletic Charcoal/Crimson Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#991b1b]/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8 z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141414]/90 border border-[#ca8a04]/40 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              St. Gregory's Campus • Shawnee, Oklahoma
            </span>
          </div>

          {/* Crest Logo Display */}
          <div className="flex justify-center">
            <CavaliersLogo variant="crest" size="2xl" className="transform hover:scale-105 transition duration-300" />
          </div>

          {/* Hero Headlines */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-athletic text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-lg">
              OKLAHOMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04]">CAVALIERS</span>
            </h1>
            <p className="font-athletic text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-zinc-200 uppercase">
              {PROGRAM_INFO.tagline}
            </p>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Collegiate-style post-graduate baseball development at historic St. Gregory's campus. 
              Bridging the gap between high school and your next collegiate roster opportunity.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenRecruitModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-xl shadow-amber-500/10 flex items-center justify-center gap-3 transition transform active:scale-95 border border-amber-300/40"
            >
              <Send className="w-4 h-4" /> Start Recruiting Process
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#161616] border border-[#2c2c2c] hover:bg-[#202020] hover:border-[#ca8a04]/50 flex items-center justify-center gap-2 transition"
            >
              Explore Program & Facilities <ArrowRight className="w-4 h-4 text-[#eab308]" />
            </button>
          </div>

          {/* Quick Notice Tag */}
          <p className="text-xs text-zinc-400 font-medium">
            Fall Report Date: <strong className="text-white">October 1</strong> • 30–40 Game Spring Collegiate Schedule
          </p>
        </div>
      </section>

      {/* Program Highlights Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] shadow-xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#ca8a04]/30 text-[#facc15]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="font-athletic text-2xl font-black text-white">30–40 GAMES</div>
              <p className="text-xs font-semibold text-[#eab308] uppercase tracking-wider">Collegiate Competition</p>
              <p className="text-xs text-zinc-400 mt-1">Spring schedule vs regional NJCAA, NAIA, and NCAA JV squads.</p>
            </div>
          </div>

          <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] shadow-xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#ca8a04]/30 text-[#facc15]">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <div className="font-athletic text-2xl font-black text-white">CAMPUS HOUSING</div>
              <p className="text-xs font-semibold text-[#eab308] uppercase tracking-wider">Meals Included</p>
              <p className="text-xs text-zinc-400 mt-1">Live and eat as a collegiate student-athlete at St. Gregory's.</p>
            </div>
          </div>

          <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] shadow-xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#ca8a04]/30 text-[#facc15]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-athletic text-2xl font-black text-white">7-STEP PLACEMENT</div>
              <p className="text-xs font-semibold text-[#eab308] uppercase tracking-wider">College Placement</p>
              <p className="text-xs text-zinc-400 mt-1">Pro video, coach outreach, and transfer compliance support.</p>
            </div>
          </div>

          <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] shadow-xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#ca8a04]/30 text-[#facc15]">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <div className="font-athletic text-2xl font-black text-white">$10,000 ALL-IN</div>
              <p className="text-xs font-semibold text-[#eab308] uppercase tracking-wider">Complete Experience</p>
              <p className="text-xs text-zinc-400 mt-1">Housing, meals, travel, uniforms, clinics, and recruiting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            The Cavalier Philosophy
          </span>
          <h2 className="font-athletic text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DEVELOP. BUILD. ADVANCE.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our post-graduate program is built on three core pillars designed to prepare athletes physically, mentally, and academically for the collegiate level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0e0e0e] rounded-2xl border border-[#262626] hover:border-[#ca8a04]/50 transition duration-300 overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative h-44 w-full bg-black">
              <img 
                src="/pillar_baseball.jpg" 
                alt="Develop the Player" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/80 border border-[#ca8a04]/50 flex items-center justify-center text-[#facc15] shadow-lg backdrop-blur-sm">
                <Flame className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                  1. Develop the Player
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We don't just train baseball players—we build better athletes. Daily structured strength & conditioning, explosive rotational power, arm-care protocols, hitting labs, and live collegiate bullpens.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 pt-3 border-t border-[#262626]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Progressive S&C & Arm-Care</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Pitch Design & Mechanics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Exit Velocity & Launch Angles</li>
              </ul>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0e0e0e] rounded-2xl border border-[#262626] hover:border-[#ca8a04]/50 transition duration-300 overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative h-44 w-full bg-black">
              <img 
                src="/pillar_leadership.jpg" 
                alt="Build the Person" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/80 border border-[#ca8a04]/50 flex items-center justify-center text-[#facc15] shadow-lg backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                  2. Build the Person
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The Cavalier Standard: Leave the locker room better than you found it. Respect the facility, your teammates, and the opportunity. Fostering collegiate accountability, study habits, and character.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 pt-3 border-t border-[#262626]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Campus Living & Independence</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Academic Advising & Study Hall</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Clubhouse Culture & Leadership</li>
              </ul>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-gradient-to-b from-[#141414] to-[#0e0e0e] rounded-2xl border border-[#262626] hover:border-[#ca8a04]/50 transition duration-300 overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative h-44 w-full bg-black">
              <img 
                src="/pillar_placement.jpg" 
                alt="Advance the Future" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/80 border border-[#ca8a04]/50 flex items-center justify-center text-[#facc15] shadow-lg backdrop-blur-sm">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                  3. Advance the Future
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We are the bridge to your next collegiate roster. We guide you through college identification, coach communication, recruiting video production, campus visits, and eligibility transfer rules.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 pt-3 border-t border-[#262626]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Verified Highlight Video Production</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Direct College Coach Networking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> NCAA, NAIA & NJCAA Placement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Link to Full 5 Pillars Curriculum */}
        <div className="text-center pt-2">
          <button
            onClick={() => setActiveTab('about')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a1a1a] hover:bg-[#ca8a04] hover:text-black text-[#facc15] font-bold text-xs uppercase tracking-wider border border-[#ca8a04]/40 transition-colors shadow-lg"
          >
            <span>Explore The Full 5 Pillars of Cavalier Development</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Facilities Preview Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262626] pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              Collegiate Training Environment
            </span>
            <h2 className="font-athletic text-4xl sm:text-5xl font-black text-white uppercase mt-1">
              OUR FACILITIES AT ST. GREGORY'S
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('about')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#facc15] hover:text-white transition"
          >
            View All Facilities & Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.slice(0, 3).map((facility) => (
            <div
              key={facility.id}
              className="group relative rounded-2xl overflow-hidden bg-[#121212] border border-[#262626] hover:border-[#ca8a04]/50 transition duration-300 flex flex-col"
            >
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#0a0a0a]/85 border border-[#ca8a04]/40 text-[#facc15] backdrop-blur-md">
                  {facility.subtitle}
                </span>
                {facility.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#dc2626] text-white shadow-lg border border-red-400/40">
                    {facility.badge}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262626]">
                  <button
                    onClick={() => setActiveTab('about')}
                    className="text-xs font-bold text-[#facc15] hover:text-white flex items-center gap-1"
                  >
                    Learn more about this facility →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why The Cavaliers Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] border border-[#ca8a04]/40 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#991b1b] text-white">
                Why The Cavaliers?
              </span>
              <h2 className="font-athletic text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                A FRACTION OF THE COST.<br />
                <span className="text-[#facc15]">A YEAR OF DEVELOPMENT.</span><br />
                A LIFETIME OF OPPORTUNITY.
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                For athletes who aren't ready to stop playing baseball after high school, the Oklahoma Cavaliers provide the collegiate platform, daily instruction, and exposure needed to advance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-zinc-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15]" /> 30–40 Spring Games
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15]" /> On-Campus Housing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15]" /> Daily S&C & Arm-Care
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15]" /> College Placement
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenRecruitModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] transition shadow-lg flex items-center gap-2 border border-amber-300/40"
                >
                  <Send className="w-4 h-4" /> Apply Now
                </button>
                <button
                  onClick={onOpenHandbookModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#141414] border border-[#2c2c2c] hover:text-[#facc15] hover:bg-[#1a1a1a] transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Read Handbook
                </button>
              </div>
            </div>

            <div className="bg-[#0e0e0e]/90 p-6 sm:p-8 rounded-2xl border border-[#262626] text-center space-y-4">
              <CavaliersLogo variant="crest" size="lg" className="mx-auto" />
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Total Program Investment</span>
                <div className="font-athletic text-5xl sm:text-6xl font-black text-white">$10,000</div>
                <p className="text-xs text-[#facc15] font-semibold">ALL-INCLUSIVE POST-GRADUATE EXPERIENCE</p>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Housing, meals, uniforms, travel, year-round instruction, collegiate games, and full recruiting video placement support.
              </p>
              <div className="pt-3 border-t border-[#262626] flex items-center justify-center gap-2 text-xs text-zinc-300">
                <span>$2,000 Deposit with Flexible 1, 2, or 4-Payment Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 7-Step Recruiting & Placement System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecruitingStepsSection onOpenRecruitModal={onOpenRecruitModal} />
      </section>

      {/* Call To Action Recruitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#7f1d1d] via-[#141414] to-[#121212] p-8 sm:p-12 rounded-3xl border border-[#262626] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              Ready to Advance Your Baseball Career?
            </span>
            <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
              START YOUR RECRUITING PROCESS TODAY
            </h2>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              Complete the online recruitment form and General Manager Coach Christopher Brown will review your profile and connect with you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenRecruitModal}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-xl transition transform active:scale-95 text-center flex items-center justify-center gap-2 border border-amber-300/40"
            >
              <Send className="w-4 h-4" /> Open Prospect Form
            </button>
            <a
              href={`mailto:${PROGRAM_INFO.gmEmail}`}
              className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#181818] border border-[#2c2c2c] hover:text-[#facc15] hover:bg-[#202020] transition text-center"
            >
              Email Coach Brown
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
