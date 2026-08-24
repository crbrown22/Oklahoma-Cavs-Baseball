import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Printer, 
  CheckCircle2, 
  ChevronRight, 
  Shield, 
  Award, 
  MapPin, 
  DollarSign, 
  HelpCircle, 
  Phone, 
  Calendar, 
  Dumbbell, 
  Target, 
  Warehouse, 
  Building2, 
  Home, 
  HeartHandshake, 
  Clock, 
  GraduationCap, 
  Flame, 
  Trophy, 
  Sparkles,
  ExternalLink,
  QrCode,
  Zap,
  Activity
} from 'lucide-react';
import { 
  PROGRAM_INFO, 
  BENEDICTINE_VALUES, 
  WEEKDAY_SCHEDULE, 
  DEPOSIT_PLANS, 
  REMAINING_BALANCE_PLANS,
  RECRUITING_STEPS,
  CAVALIER_PILLARS
} from '../data/mockData';
import { CavaliersLogo } from './CavaliersLogo';

interface HandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruitModal: () => void;
}

export const HandbookModal: React.FC<HandbookModalProps> = ({ isOpen, onClose, onOpenRecruitModal }) => {
  const [activeSection, setActiveSection] = useState<string>('sec-welcome');

  if (!isOpen) return null;

  const sections = [
    { id: 'sec-welcome', title: 'Welcome from Coach Brown' },
    { id: 'sec-philosophy', title: "Coach's Philosophy" },
    { id: 'sec-why-postgrad', title: 'Why a Post-Graduate Year?' },
    { id: 'sec-mission', title: 'Mission & Benedictine Values' },
    { id: 'sec-model', title: 'Cavalier Development Model' },
    { id: 'sec-schedule', title: 'A Day in the Life (Schedule)' },
    { id: 'sec-krome', title: 'KROME Sports Performance' },
    { id: 'sec-dev-system', title: 'Player Development System' },
    { id: 'sec-season', title: 'Spring Collegiate Season' },
    { id: 'sec-facilities', title: 'Our Facilities & Housing' },
    { id: 'sec-placement', title: 'College Placement (7 Steps)' },
    { id: 'sec-transfer-advising', title: 'Transfer & Academic Advising' },
    { id: 'sec-cost', title: 'Program Cost ($10,000)' },
    { id: 'sec-payments', title: 'Deposit & Balance Payment Options' },
    { id: 'sec-faq-players', title: 'FAQ: For Players' },
    { id: 'sec-faq-parents', title: 'FAQ: For Parents' },
    { id: 'sec-faq-transfer', title: 'FAQ: Transfer & Eligibility' },
    { id: 'sec-why-cavs', title: 'Why the Cavaliers?' },
    { id: 'sec-contact', title: 'Contact & Recruitment' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[94vh] flex flex-col rounded-3xl bg-[#0e0e0e] border border-[#262626] shadow-2xl text-zinc-100 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#262626] shrink-0">
          <div className="flex items-center gap-3">
            <CavaliersLogo variant="crest" size="sm" />
            <div>
              <h2 className="font-athletic text-xl sm:text-2xl font-bold tracking-wide text-white flex items-center gap-2">
                OKLAHOMA CAVALIERS OFFICIAL TEAM HANDBOOK
              </h2>
              <p className="text-xs text-[#facc15] uppercase tracking-wider font-semibold">
                Player & Parent Guide • Post-Graduate Baseball Program
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 bg-[#1c1c1c] border border-[#2c2c2c] hover:text-white hover:bg-[#242424]"
              title="Print Handbook"
            >
              <Printer className="w-3.5 h-3.5" /> Print
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-[#1c1c1c] border border-[#2c2c2c]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Layout: Sidebar + Document Content */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Quick Index Sidebar */}
          <div className="w-72 hidden md:flex flex-col border-r border-[#262626] bg-[#0a0a0a] p-4 shrink-0 overflow-y-auto">
            <div className="pb-3 mb-3 border-b border-[#262626]">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#eab308]" /> Table of Contents
              </span>
            </div>
            <div className="space-y-1">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    activeSection === sec.id
                      ? 'bg-[#1c1c1c] text-[#facc15] font-bold border border-[#ca8a04]/40 shadow-sm'
                      : 'text-zinc-300 hover:bg-[#141414] hover:text-white'
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {sec.title}
                  </span>
                  <ChevronRight className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-[#262626]">
              <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] text-[11px] text-zinc-300 space-y-2">
                <p className="font-bold text-white">St. Gregory's Campus</p>
                <p>1900 W. MacArthur St<br />Shawnee, OK 74804</p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenRecruitModal();
                  }}
                  className="w-full py-1.5 rounded text-[11px] font-bold uppercase bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 hover:from-[#fef08a] hover:to-[#eab308] border border-amber-300/40"
                >
                  Official Recruit Form
                </button>
              </div>
            </div>
          </div>

          {/* Handbook Main Document Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-14 bg-[#0e0e0e] leading-relaxed text-zinc-200">
            
            {/* Title Header Cover */}
            <div className="text-center py-8 border-b border-[#262626] space-y-4">
              <CavaliersLogo variant="crest" size="lg" className="mx-auto" />
              <div className="space-y-1">
                <h1 className="font-athletic text-3xl sm:text-5xl font-extrabold tracking-wide text-white uppercase">
                  OKLAHOMA CAVALIERS BASEBALL CLUB
                </h1>
                <p className="text-sm font-bold uppercase tracking-widest text-[#facc15]">
                  OFFICIAL TEAM HANDBOOK • POST-GRADUATE BASEBALL
                </p>
                <p className="text-xs text-zinc-400">
                  Oklahoma Independent Baseball Association (OIBA) • St. Gregory's Campus, Shawnee, OK
                </p>
              </div>
              <div className="inline-block py-1.5 px-6 rounded-full bg-[#181818] border border-[#ca8a04]/40 text-xs font-black tracking-wider text-[#facc15]">
                DEVELOP THE PLAYER. BUILD THE PERSON. ADVANCE THE FUTURE.
              </div>
            </div>

            {/* 1. Welcome from Coach Brown */}
            <div id="sec-welcome" className="scroll-mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>WELCOME FROM COACH BROWN</span>
              </div>
              <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#262626] space-y-4">
                <h3 className="font-athletic text-xl sm:text-2xl font-bold text-white uppercase">
                  Welcome to the Oklahoma Cavaliers
                </h3>
                <p className="text-sm text-zinc-300 font-semibold italic">
                  Dear Future Cavalier,
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Thank you for considering the Oklahoma Cavaliers Post-Graduate Baseball Program.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Every baseball player has a unique journey. Some athletes receive multiple scholarship offers before graduation, while others need additional time to mature physically, refine their skills, or gain the exposure they deserve. Our program was created for those athletes.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The Oklahoma Cavaliers provide a collegiate environment where players continue to develop both on and off the field. Through high-level coaching, structured strength and conditioning, academic support, and a competitive collegiate schedule, we prepare players for the next step in their baseball careers.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Our goal extends beyond wins and losses. We are committed to helping each athlete become stronger, more disciplined, academically prepared, and positioned to continue playing at the collegiate level.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Whether your next destination is a Junior College, NAIA institution, NCAA Division II, or NCAA Division I program, our staff is dedicated to helping you reach that opportunity.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  If you are willing to work, embrace accountability, and pursue continuous improvement, we invite you to become part of the Cavalier family.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We look forward to helping you write the next chapter of your baseball career.
                </p>
                <div className="pt-2 border-t border-[#262626]">
                  <p className="font-athletic text-lg font-bold text-white uppercase">Coach Christopher Brown</p>
                  <p className="text-xs text-[#facc15] font-bold uppercase tracking-wider">General Manager / Head Coach • Oklahoma Cavaliers Baseball</p>
                  <p className="text-xs font-mono text-zinc-400 mt-1">📧 {PROGRAM_INFO.gmEmail}</p>
                </div>
              </div>
            </div>

            {/* 2. Coach's Philosophy */}
            <div id="sec-philosophy" className="scroll-mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>COACH'S PHILOSOPHY</span>
              </div>
              <div className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] p-8 rounded-2xl border-l-4 border-amber-400 border-y border-r border-[#262626] space-y-3">
                <blockquote className="font-athletic text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  "The best players aren't made during games. They're built in the weight room, during extra reps after practice, in the classroom, and through the discipline to do the little things every day."
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-wider text-[#facc15]">— Coach Christopher Brown</p>
              </div>
            </div>

            {/* 3. Why Post Grad? */}
            <div id="sec-why-postgrad" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>WHY A POST-GRADUATE YEAR?</span>
              </div>
              <div className="space-y-3">
                <h4 className="font-athletic text-xl font-bold text-white uppercase">
                  One More Year Can Change Everything
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Many athletes leave high school before reaching their full potential. A post-graduate year bridges the gap between high school and college athletics, providing additional time to develop physically, academically, and mentally while competing against collegiate competition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefits */}
                <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] space-y-3">
                  <h5 className="font-athletic text-lg font-bold text-white uppercase flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#facc15]" /> Benefits of a Post-Graduate Year
                  </h5>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Continue playing competitive baseball after high school.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Gain exposure to college coaches.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Increase strength, speed, and athletic performance.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Improve hitting, pitching, and defensive skills.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Continue academic development and college planning.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Build confidence through daily competition.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Find the right collegiate fit for your athletic and academic goals.</li>
                  </ul>
                </div>

                {/* Is This Program Right For You? */}
                <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] space-y-3">
                  <h5 className="font-athletic text-lg font-bold text-white uppercase flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#facc15]" /> Is This Program Right for You?
                  </h5>
                  <p className="text-xs text-zinc-400">The Oklahoma Cavaliers are an ideal fit for:</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Late-developing athletes.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Players seeking additional recruiting exposure.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Athletes recovering from injuries.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Players looking to improve academic readiness.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Individuals pursuing scholarship opportunities.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" /> Competitors committed to long-term development.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Mission & Benedictine Values */}
            <div id="sec-mission" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>OUR MISSION, VISION & BENEDICTINE VALUES</span>
              </div>

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#ca8a04]/40 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#facc15]">Our Mission</span>
                <h4 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">
                  Develop the Player. Build the Person. Advance the Future.
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Located on the historic campus of St. Gregory's in Shawnee, Oklahoma, our program embraces the enduring values of the Benedictine tradition—community, hospitality, humility, stewardship, respect, and service to others. These principles complement our athletic mission by encouraging each player to grow not only as a competitor but also as a responsible student, teammate, and leader. We believe that excellence is achieved through purposeful work, mutual respect, and a commitment to developing the whole person.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#101010] p-6 rounded-2xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-xl font-bold text-white uppercase">Mission Statement</h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    The Oklahoma Cavaliers Baseball Program is committed to developing student-athletes through elite baseball instruction, comprehensive strength and conditioning, academic support, and character development. Our purpose is to prepare every player for success at the collegiate level while fostering integrity, discipline, accountability, leadership, and a relentless commitment to personal growth.
                  </p>
                </div>

                <div className="bg-[#101010] p-6 rounded-2xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-xl font-bold text-white uppercase">Vision Statement</h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    To become one of the premier post-graduate baseball programs in the Midwest by consistently developing student-athletes who earn opportunities to compete at colleges across the country while becoming leaders of character in their teams, classrooms, and communities. We strive to provide an environment where athletic excellence, academic achievement, and the Benedictine ideals of community, service, and lifelong learning prepare our players for success far beyond the game of baseball.
                  </p>
                </div>
              </div>

              {/* Benedictine Values Grid */}
              <div className="space-y-4">
                <h5 className="font-athletic text-xl font-bold text-white uppercase flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#facc15]" /> Benedictine Values & Traditions
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BENEDICTINE_VALUES.map((val, i) => (
                    <div key={i} className="bg-[#121212] rounded-xl border border-[#262626] overflow-hidden flex flex-col justify-between group hover:border-[#ca8a04]/50 transition-colors shadow-lg">
                      <div className="relative h-28 w-full bg-black">
                        <img
                          src={val.imageUrl}
                          alt={val.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                        <div className="absolute top-2 right-2">
                          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#1c1917]/90 text-[#facc15] border border-[#ca8a04]/40">
                            {val.badge}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-athletic text-sm font-bold text-white uppercase text-[#facc15] block">
                            {val.name}
                          </span>
                          <p className="text-xs text-zinc-300 leading-relaxed mt-1">{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Development Model */}
            <div id="sec-model" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>THE 5 PILLARS OF CAVALIER DEVELOPMENT</span>
              </div>
              <p className="text-sm text-zinc-300">
                We believe complete player development extends beyond baseball. Every aspect of the Oklahoma Cavaliers curriculum is built on five core pillars:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {CAVALIER_PILLARS.map((pillar) => (
                  <div 
                    key={pillar.id}
                    className="bg-[#121212] rounded-xl border border-[#262626] overflow-hidden flex flex-col hover:border-[#ca8a04]/50 transition-colors shadow-lg"
                  >
                    <div className="relative h-28 w-full bg-black">
                      <img 
                        src={pillar.imageUrl} 
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                      <div className="absolute top-2 left-2">
                        <span className="text-[10px] font-black font-athletic px-2 py-0.5 rounded bg-black/80 text-white border border-white/20">
                          {pillar.number}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#1c1917]/90 text-[#facc15] border border-[#ca8a04]/40">
                          {pillar.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h6 className="font-athletic text-sm font-bold text-white uppercase text-[#facc15]">
                          {pillar.shortTitle}
                        </h6>
                        <p className="text-[10px] text-zinc-400 font-semibold mb-2 line-clamp-1">
                          {pillar.tagline}
                        </p>
                        <ul className="text-[11px] text-zinc-300 space-y-1">
                          {pillar.focusAreas.slice(0, 4).map((area, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-[#facc15] font-bold">•</span>
                              <span className="line-clamp-1">{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. A Day in the Life & Weekday Schedule */}
            <div id="sec-schedule" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>A DAY IN THE LIFE OF A CAVALIER</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-athletic text-xl font-bold text-white uppercase">Purpose-Driven Development</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  At Oklahoma Cavaliers Baseball, every day is intentionally designed to help you improve as an athlete, student, and person. Our structured schedule mirrors the expectations of collegiate baseball programs, preparing players for success at the next level. Whether you're in the weight room, on the field, in the classroom, or recovering after practice, every part of the day contributes to your long-term development.
                </p>
              </div>

              {/* Schedule Table */}
              <div className="bg-[#121212] rounded-2xl border border-[#262626] overflow-hidden">
                <div className="px-5 py-3 bg-[#181818] border-b border-[#262626] font-athletic text-lg font-bold text-white uppercase">
                  Typical Weekday Schedule
                </div>
                <div className="divide-y divide-[#222222]">
                  {WEEKDAY_SCHEDULE.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center px-5 py-3 text-xs justify-between gap-1 hover:bg-[#161616]">
                      <span className="font-mono font-bold text-[#facc15] sm:w-36">{item.time}</span>
                      <span className="text-zinc-200 sm:flex-1">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cavalier Standard 4 Priorities */}
              <div className="bg-gradient-to-r from-[#171717] to-[#101010] p-6 rounded-2xl border border-[#ca8a04]/40 space-y-3">
                <h5 className="font-athletic text-lg font-bold text-white uppercase text-[#facc15]">The Cavalier Standard</h5>
                <p className="text-xs text-zinc-300">Every day is built around four priorities:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold text-white">
                  <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#262626]">🏋️ Train</div>
                  <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#262626]">⚾ Develop</div>
                  <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#262626]">📚 Learn</div>
                  <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#262626]">💪 Recover</div>
                </div>
                <p className="text-xs text-zinc-400 italic text-center pt-1">
                  Success is built through consistency—not occasional greatness.
                </p>
              </div>
            </div>

            {/* 7. KROME Sports Performance */}
            <div id="sec-krome" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>KROME SPORTS PERFORMANCE — ELITE STRENGTH & PERFORMANCE</span>
              </div>

              <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#262626] space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-2 border-b border-[#262626]">
                  <div className="bg-white p-3.5 rounded-xl shadow-lg border border-zinc-200 flex-shrink-0 max-w-[220px] w-full flex items-center justify-center">
                    <img
                      src="/krome_logo.jpg"
                      alt="KROME Sports Performance Logo"
                      className="w-full h-auto object-contain max-h-20"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] text-xs font-bold text-[#facc15] border border-[#ca8a04]/40 uppercase">
                      <Flame className="w-3.5 h-3.5" /> Bigger. Faster. Stronger. More Explosive.
                    </div>
                    <p className="text-xs text-[#facc15] font-semibold">Official Performance Training Partner of Oklahoma Cavaliers Baseball</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  The Oklahoma Cavaliers have the opportunity to work with one of the best baseball sports performance companies in the region, <strong>KROME Sports Performance (KSP)</strong>. KSP has worked with thousands of athletes from youth up to the professional ranks, including helping the <strong>2025-2026 Seminole State Trojans Baseball to a NJCAA World Series appearance</strong> this spring.
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Our performance program is built using evidence-based training methods from <strong>USA Weightlifting, USA Track & Field, EXOS Sport Performance, National Strength and Conditioning Association (NSCA)</strong>, and collegiate strength programs. Every athlete receives progressive programming designed to maximize performance while reducing injury risk.
                </p>
              </div>

              {/* Program Focus Grid */}
              <div className="space-y-3">
                <h5 className="font-athletic text-xl font-bold text-white uppercase">Program Focus</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                    <strong className="text-[#facc15] block uppercase">Strength Development</strong>
                    <ul className="text-zinc-300 space-y-0.5">
                      <li>• Total-body strength</li>
                      <li>• Relative strength</li>
                      <li>• Functional movement</li>
                      <li>• Injury prevention</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                    <strong className="text-[#facc15] block uppercase">Speed & Acceleration</strong>
                    <ul className="text-zinc-300 space-y-0.5">
                      <li>• First-step quickness</li>
                      <li>• Linear speed</li>
                      <li>• Sprint mechanics</li>
                      <li>• Change of direction</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                    <strong className="text-[#facc15] block uppercase">Power Development</strong>
                    <ul className="text-zinc-300 space-y-0.5">
                      <li>• Olympic lifting progressions</li>
                      <li>• Medicine ball throws</li>
                      <li>• Plyometrics</li>
                      <li>• Rotational power</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                    <strong className="text-[#facc15] block uppercase">Arm Care</strong>
                    <ul className="text-zinc-300 space-y-0.5">
                      <li>• Shoulder stability</li>
                      <li>• Scapular strength</li>
                      <li>• Forearm development</li>
                      <li>• Recovery protocols</li>
                      <li>• Throwing progression</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1 sm:col-span-2">
                    <strong className="text-[#facc15] block uppercase">Mobility & Recovery</strong>
                    <ul className="text-zinc-300 space-y-0.5">
                      <li>• Daily mobility • Soft tissue work • Foam rolling • Stretching • Recovery sessions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance Testing */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#262626] space-y-3">
                <h5 className="font-athletic text-xl font-bold text-white uppercase flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#facc15]" /> Performance Testing
                </h5>
                <p className="text-xs text-zinc-300">
                  Athletes are evaluated throughout the year using measurable performance indicators:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-zinc-200">
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">60-Yard Dash</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">30-Yard Sprint</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Vertical Jump</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Broad Jump</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Grip Strength</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Exit Velocity</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Throwing Velocity</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Pitching Velocity</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Body Composition</span>
                  <span className="p-2 bg-[#0a0a0a] rounded border border-[#262626] text-center">Strength Benchmarks</span>
                </div>
                <p className="text-xs text-[#facc15] font-black uppercase text-center pt-1">
                  What gets measured gets improved.
                </p>
              </div>
            </div>

            {/* 8. Player Development System */}
            <div id="sec-dev-system" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>PLAYER DEVELOPMENT SYSTEM</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-athletic text-xl font-bold text-white uppercase">Developing Complete Baseball Players</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Talent may open the door, but development determines how far a player goes. Our coaching staff emphasizes daily repetition, individualized instruction, and competitive training to maximize every athlete's potential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Offensive */}
                <div className="p-5 bg-[#121212] rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-base font-bold text-[#facc15] uppercase">Offensive Development (Hitting)</h5>
                  <p className="text-zinc-300">Swing mechanics • Bat speed • Exit velocity • Approach • Plate discipline • Situational hitting • Two-strike approach • Mental routine</p>
                </div>

                {/* Infield & Outfield */}
                <div className="p-5 bg-[#121212] rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-base font-bold text-[#facc15] uppercase">Defensive: Infield & Outfield</h5>
                  <p className="text-zinc-300"><strong>Infield:</strong> Footwork, glove presentation, double-play turns, arm strength, internal clock.<br /><strong>Outfield:</strong> Route efficiency, first-step reads, throwing accuracy, communication, positioning.</p>
                </div>

                {/* Catchers & Baserunning */}
                <div className="p-5 bg-[#121212] rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-base font-bold text-[#facc15] uppercase">Catchers & Base Running</h5>
                  <p className="text-zinc-300"><strong>Catching:</strong> Receiving, blocking, throwing mechanics, pop time, pitch framing, leadership.<br /><strong>Base Running:</strong> Leads, reads, stealing, first-to-third, sliding techniques, situational awareness.</p>
                </div>

                {/* Mental Performance */}
                <div className="p-5 bg-[#121212] rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-athletic text-base font-bold text-[#facc15] uppercase">Mental Performance</h5>
                  <p className="text-zinc-300">Confidence • Focus • Competitive mindset • Emotional control • Leadership • Accountability</p>
                </div>
              </div>

              {/* IDP */}
              <div className="p-5 bg-[#141414] rounded-xl border border-[#ca8a04]/40 space-y-2">
                <h5 className="font-athletic text-base font-bold text-white uppercase text-[#facc15]">
                  Individual Development Plans (IDPs)
                </h5>
                <p className="text-xs text-zinc-300">
                  Every athlete receives a customized development plan with measurable goals in: <strong>Strength, Speed, Baseball skills, Academics, Recruiting, and Character development.</strong>
                </p>
              </div>
            </div>

            {/* 9. Spring Collegiate Season */}
            <div id="sec-season" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>SPRING COLLEGIATE SEASON</span>
              </div>
              <div className="space-y-3">
                <h4 className="font-athletic text-xl font-bold text-white uppercase">Compete Against College Programs</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  The Oklahoma Cavaliers compete in a challenging <strong>30–40 game schedule</strong> against collegiate opponents throughout Oklahoma and surrounding states. Our schedule is designed to maximize player development and recruiting exposure by facing quality competition at every level.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2 text-xs">
                  <h5 className="font-bold text-[#facc15] uppercase">Opponents May Include:</h5>
                  <ul className="text-zinc-300 space-y-1">
                    <li>• NJCAA Programs</li>
                    <li>• NCAA Division II Programs</li>
                    <li>• NCAA Division III Programs</li>
                    <li>• NAIA Programs</li>
                    <li>• Collegiate Junior Varsity Teams</li>
                    <li>• Select NCAA Division I Development Opportunities</li>
                  </ul>
                </div>

                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2 text-xs">
                  <h5 className="font-bold text-[#facc15] uppercase">Game Day Experience:</h5>
                  <p className="text-zinc-300">Each game is approached with a collegiate mindset through:</p>
                  <ul className="text-zinc-300 space-y-1">
                    <li>• Scouting reports & Pre-game meetings</li>
                    <li>• Team stretching and activation</li>
                    <li>• Structured batting practice</li>
                    <li>• Defensive preparation & Mental readiness</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#101010] p-4 rounded-xl border border-[#262626] text-center space-y-1">
                <p className="text-xs text-zinc-300">
                  <strong>Recruiting Exposure:</strong> Throughout the spring season, athletes benefit from opportunities to be evaluated by college coaches. We actively promote our players through direct communication, recruiting materials, game schedules, and highlight videos.
                </p>
                <p className="text-xs font-black uppercase text-[#facc15] tracking-wider pt-1">
                  More Games. More Exposure. More Opportunities.
                </p>
              </div>
            </div>

            {/* 10. Facilities & Housing */}
            <div id="sec-facilities" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>OUR FACILITIES & HOUSING</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                The Oklahoma Cavaliers are based at the historic St. Gregory's campus in Shawnee, Oklahoma. Our program utilizes the campus environment to create a collegiate-style experience where players can train, compete, study, and live as student-athletes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-bold text-[#facc15] uppercase">KROME Sports Performance Weight Room</h5>
                  <p className="text-zinc-300">Total-body explosive power, rotational strength, sprint mechanics, and individualized arm-care protocols designed specifically for baseball athletes.</p>
                </div>

                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2">
                  <h5 className="font-bold text-[#facc15] uppercase">Baseball Field</h5>
                  <p className="text-zinc-300">Compete where you train. Dedicated collegiate field for team practices, defensive work, live BP, bullpens, scrimmages, and collegiate competition.</p>
                </div>

                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-[#facc15] uppercase">Indoor Development Facility</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#dc2626] text-white">Coming Soon</span>
                  </div>
                  <p className="text-zinc-300">Climate-controlled indoor training environment and batting cages with turf lanes, tee work, machine velocity, exit velocity tracking, and pitch design labs.</p>
                </div>

                <div className="bg-[#121212] p-5 rounded-xl border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-[#facc15] uppercase">Locker Room</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#dc2626] text-white">Coming Soon</span>
                  </div>
                  <p className="text-zinc-300">Your home away from home. Where teammates prepare together, communicate, build culture, and uphold the Cavalier Standard: Leave it better than you found it.</p>
                </div>
              </div>

              {/* Housing */}
              <div className="bg-[#141414] p-6 rounded-2xl border border-[#ca8a04]/40 space-y-3">
                <h5 className="font-athletic text-xl font-bold text-white uppercase">Housing & Campus Life — Live Like a College Athlete</h5>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Players live in campus housing and experience the responsibilities and independence associated with collegiate life. <strong>Housing is included in the program cost.</strong> Players are expected to maintain clean living spaces, respectful relationships with roommates, responsible behavior, compliance with campus policies, appropriate study habits, and respect for campus property.
                </p>
              </div>
            </div>

            {/* 11. College Placement & 7-Step Recruiting Process */}
            <div id="sec-placement" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>COLLEGE PLACEMENT & THE 7-STEP RECRUITING PROCESS</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-athletic text-xl font-bold text-white uppercase">Your Next School Is The Goal</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  The Oklahoma Cavaliers are not designed to be the final destination of a player's baseball career. We are the bridge to the next opportunity. Our goal is to help each athlete identify the college that best fits his athletic goals, academic goals, career goals, financial situation, and geographic preferences.
                </p>
              </div>

              <div className="space-y-3">
                {RECRUITING_STEPS.map((s) => (
                  <div key={s.step} className="p-4 bg-[#121212] rounded-xl border border-[#262626] hover:border-[#ca8a04]/50 transition space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#800020] to-[#400010] text-[#facc15] border border-[#facc15]/60 flex items-center justify-center font-athletic text-sm font-black shrink-0">
                          0{s.step}
                        </span>
                        <div>
                          <span className="text-[10px] font-black uppercase text-[#facc15] bg-[#800020]/30 px-2 py-0.5 rounded border border-[#800020]/50 block w-max">
                            {s.phase}
                          </span>
                          <span className="font-athletic text-base font-bold text-white uppercase block mt-0.5">
                            Step {s.step} — {s.title}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-400 shrink-0 hidden sm:inline-block">
                        {s.timeframe}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed pl-10">
                      {s.description}
                    </p>

                    {/* Deliverables pill tags */}
                    <div className="pl-10 pt-1 flex flex-wrap gap-1.5">
                      {s.deliverables.map((deliv, di) => (
                        <span key={di} className="text-[10px] font-medium text-zinc-300 bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]"></span>
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 12. Transfer Assistance & Academic Advising */}
            <div id="sec-transfer-advising" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>TRANSFER ASSISTANCE & ACADEMIC ADVISING</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] space-y-3">
                  <h5 className="font-athletic text-xl font-bold text-white uppercase">Transfer Assistance</h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    The Cavaliers coaching staff assists players in navigating the process of moving from our post-graduate program into their next collegiate opportunity. Support includes identifying programs, communicating with coaches, preparing recruiting materials, organizing player statistics, highlight videos, academic planning, and admissions communication.
                  </p>
                  <p className="text-[11px] text-zinc-400 italic">
                    Important: NCAA, NAIA, NJCAA, and individual institutional eligibility rules can vary. Players are responsible for working with the appropriate college compliance and admissions personnel to determine individual eligibility.
                  </p>
                </div>

                <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] space-y-3">
                  <h5 className="font-athletic text-xl font-bold text-white uppercase">Academic Advising</h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Baseball is part of the education. Our goal is to prepare players for college baseball and college life. Players are expected to take academics seriously and develop habits that allow them to succeed in the classroom.
                  </p>
                  <p className="text-xs text-zinc-300">
                    Academic support includes: Study Hall, academic planning, time management, college selection, admissions guidance, transcript review, and campus tutoring.
                  </p>
                </div>
              </div>
            </div>

            {/* 13. Program Cost */}
            <div id="sec-cost" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>PROGRAM COST ($10,000)</span>
              </div>

              <div className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] p-8 rounded-3xl border border-[#ca8a04]/50 text-center space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#facc15]">
                  Complete Post-Graduate Experience
                </span>
                <div className="font-athletic text-5xl sm:text-6xl font-black text-white">
                  $10,000
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
                  The Oklahoma Cavaliers program fee is designed to provide an affordable alternative to many post-graduate baseball opportunities while giving players access to a structured collegiate baseball experience.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs pt-4 text-left">
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">🏠 HOUSING</strong>
                    <span className="text-zinc-400 text-[11px]">Campus dormitory accommodations.</span>
                  </div>
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">🍽️ MEALS</strong>
                    <span className="text-zinc-400 text-[11px]">12 meals per week (Sun Dinner – Sat Lunch).</span>
                  </div>
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">🚌 TRAVEL</strong>
                    <span className="text-zinc-400 text-[11px]">Team travel for scheduled games.</span>
                  </div>
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">👕 UNIFORMS</strong>
                    <span className="text-zinc-400 text-[11px]">Game uniforms & required apparel.</span>
                  </div>
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">🏋️ DEVELOPMENT</strong>
                    <span className="text-zinc-400 text-[11px]">S&C, instruction, clinics, & cages.</span>
                  </div>
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#262626]">
                    <strong className="text-white block font-bold">📹 RECRUITING</strong>
                    <span className="text-zinc-400 text-[11px]">Player videos, contacts, & placement.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 14. Deposit & Remaining Balance Payment Options */}
            <div id="sec-payments" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>PAYMENT OPTIONS & FINANCIAL COMMITMENT</span>
              </div>

              {/* Deposit Section */}
              <div className="space-y-3">
                <h5 className="font-athletic text-xl font-bold text-white uppercase flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#facc15]" /> Deposit Payment Options ($2,000 Total Deposit)
                </h5>
                <p className="text-xs text-zinc-300">
                  The enrollment deposit secures the player's position in the program and is applied toward the $10,000 total cost.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEPOSIT_PLANS.map((d) => (
                    <div key={d.id} className="p-5 bg-[#121212] rounded-2xl border border-[#262626] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{d.title}</span>
                        <span className="px-2 py-0.5 rounded bg-[#1c1c1c] text-[#facc15] border border-[#ca8a04]/40 font-bold">{d.depositTotal}</span>
                      </div>
                      <div className="space-y-1 pt-1">
                        {d.schedule.map((s, idx) => (
                          <div key={idx} className="flex items-center justify-between text-zinc-300">
                            <span>{s.date}</span>
                            <span className="font-bold text-white">{s.amount}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-zinc-400 pt-1">{d.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remaining Balance Options */}
              <div className="space-y-3 pt-4 border-t border-[#262626]">
                <h5 className="font-athletic text-xl font-bold text-white uppercase flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#facc15]" /> Remaining Program Balance ($8,000)
                </h5>
                <p className="text-xs text-zinc-300">
                  After the $2,000 deposit is applied, families select one of the following payment plans for the remaining balance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {REMAINING_BALANCE_PLANS.map((b) => (
                    <div key={b.id} className="p-5 bg-[#121212] rounded-2xl border border-[#262626] space-y-2 text-xs flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-[#1c1c1c] text-[#facc15] text-[10px] font-bold uppercase">{b.badge}</span>
                          <span className="font-bold text-white text-sm">Total: {b.totalCost}</span>
                        </div>
                        <h6 className="font-athletic text-base font-bold text-white">{b.title}</h6>
                        <p className="text-zinc-300 font-semibold">{b.structure}</p>
                        <p className="text-[11px] text-zinc-400">{b.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Summary Table */}
              <div className="space-y-3 pt-4 border-t border-[#262626]">
                <h5 className="font-athletic text-xl font-bold text-white uppercase">Payment Summary Table</h5>
                <div className="bg-[#121212] rounded-2xl border border-[#262626] overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#181818] border-b border-[#262626] text-[#facc15] font-athletic text-sm uppercase">
                      <tr>
                        <th className="p-3">Payment Plan</th>
                        <th className="p-3">Deposit</th>
                        <th className="p-3">Remaining Balance</th>
                        <th className="p-3">Payment Schedule</th>
                        <th className="p-3">Total Program Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222222] text-zinc-300">
                      <tr>
                        <td className="p-3 font-bold text-white">Pay in Full</td>
                        <td className="p-3">$2,000</td>
                        <td className="p-3">$8,000</td>
                        <td className="p-3">$8,000</td>
                        <td className="p-3 font-bold text-emerald-400">$10,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Two Payments</td>
                        <td className="p-3">$2,000</td>
                        <td className="p-3">$8,000</td>
                        <td className="p-3">2 × $4,000</td>
                        <td className="p-3 font-bold text-emerald-400">$10,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Eight Payments</td>
                        <td className="p-3">$2,000</td>
                        <td className="p-3">$8,800*</td>
                        <td className="p-3">8 × $1,100</td>
                        <td className="p-3 font-bold text-white">$10,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-zinc-400 italic">
                  *Includes the $800 payment-plan financing charge. All payment arrangements must be agreed upon with program administration prior to enrollment.
                </p>
              </div>
            </div>

            {/* 15. FAQs For Players */}
            <div id="sec-faq-players" className="scroll-mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>FREQUENTLY ASKED QUESTIONS — FOR PLAYERS</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Who is the program for?</h6>
                  <p className="text-zinc-300">The program is designed for high school graduates who want another opportunity to develop and compete at the collegiate level.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">How many games do we play?</h6>
                  <p className="text-zinc-300">The spring season is designed around approximately 30–40 collegiate games, including competition against JV and select varsity programs.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">When do players report?</h6>
                  <p className="text-zinc-300">Players report October 1 for fall development.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">What happens during the fall?</h6>
                  <p className="text-zinc-300">Players participate in strength training, baseball practices, hitting and pitching clinics, individual development, academic work, and five scheduled scrimmages.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Can I choose my next college?</h6>
                  <p className="text-zinc-300">Yes. Players have the opportunity to pursue the college that they believe best fits their academic, athletic, and career goals.</p>
                </div>
              </div>
            </div>

            {/* 16. FAQ For Parents */}
            <div id="sec-faq-parents" className="scroll-mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>QUESTIONS FOR PARENTS</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">What does the $10,000 program cost cover?</h6>
                  <p className="text-zinc-300">The program includes housing, meals, travel, uniforms/apparel, player development, competition, and recruiting assistance as outlined by the program.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Where do players live?</h6>
                  <p className="text-zinc-300">Players reside in campus housing at St. Gregory's.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Do players receive meals?</h6>
                  <p className="text-zinc-300">12 meals per week included with tuition, Sunday Dinner - Saturday Lunch. Provisions are included as part of the program.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">How are players supervised?</h6>
                  <p className="text-zinc-300">Yes. Players are expected to follow program standards, campus policies, housing requirements, and team expectations.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">What happens if my son needs academic assistance?</h6>
                  <p className="text-zinc-300">Players can receive academic support through study hall, advising, time-management assistance, and available campus resources.</p>
                </div>
              </div>
            </div>

            {/* 17. FAQ Transfer & Eligibility */}
            <div id="sec-faq-transfer" className="scroll-mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>TRANSFER & ELIGIBILITY QUESTIONS</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Does playing post-grad automatically make me eligible for NCAA or NAIA competition?</h6>
                  <p className="text-zinc-300">No. Eligibility is determined by the individual governing organization and the receiving institution.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Can I play at another college after the Cavaliers?</h6>
                  <p className="text-zinc-300">That is the goal of the program. We help players pursue opportunities at colleges that fit their goals.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Can I transfer to a Division I program?</h6>
                  <p className="text-zinc-300">Potentially. Individual eligibility and recruiting requirements vary by organization and institution.</p>
                </div>
                <div className="p-4 bg-[#121212] rounded-xl border border-[#262626] space-y-1">
                  <h6 className="font-bold text-white text-sm">Will the Cavaliers guarantee me a scholarship?</h6>
                  <p className="text-zinc-300">No. The Cavaliers cannot guarantee a scholarship or roster position at another institution. Our responsibility is to develop the player, create opportunities, and help position the athlete for the best possible next step.</p>
                </div>
              </div>
            </div>

            {/* 18. Why The Cavaliers? */}
            <div id="sec-why-cavs" className="scroll-mt-6 space-y-6">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold border-b border-[#262626] pb-2">
                <span>WHY THE CAVALIERS?</span>
              </div>
              <div className="bg-gradient-to-br from-[#1c1917] via-[#141414] to-[#0a0a0a] p-8 rounded-3xl border border-[#ca8a04]/50 space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#facc15]">
                  A Fraction of the Cost. A Year of Development. A Lifetime of Opportunity.
                </span>
                <h4 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">
                  For athletes who aren't ready to stop playing baseball after high school, the Cavaliers provide another path.
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">Collegiate Competition</strong>
                    <span className="text-zinc-400">30–40 game spring schedule.</span>
                  </div>
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">Daily Development</strong>
                    <span className="text-zinc-400">Strength, hitting, pitching, defense, & athletic performance.</span>
                  </div>
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">College Exposure</strong>
                    <span className="text-zinc-400">Opportunities to connect with college programs.</span>
                  </div>
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">Academic Support</strong>
                    <span className="text-zinc-400">Preparation for the next level of education.</span>
                  </div>
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">Housing & Meals</strong>
                    <span className="text-zinc-400">A structured campus living experience.</span>
                  </div>
                  <div className="p-4 bg-[#0e0e0e] rounded-xl border border-[#262626]">
                    <strong className="text-white block uppercase">Recruiting Support</strong>
                    <span className="text-zinc-400">Guidance throughout the college placement process.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 19. Contact & Recruitment */}
            <div id="sec-contact" className="scroll-mt-6 space-y-6 pt-4 border-t border-[#262626]">
              <div className="flex items-center gap-2 text-[#facc15] font-athletic text-2xl font-bold">
                <span>CONTACT & RECRUITMENT</span>
              </div>
              <div className="bg-[#141414] p-6 sm:p-8 rounded-3xl border border-[#ca8a04]/40 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-left">
                  <span className="text-xs font-black uppercase tracking-wider text-[#facc15]">Ready to Become a Cavalier?</span>
                  <h4 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">Start Your Recruiting Process Today</h4>
                  <p className="text-xs text-zinc-300">
                    Coach Christopher Brown • General Manager / Head Coach — Oklahoma Cavaliers Baseball
                  </p>
                  <p className="text-sm font-mono text-white font-bold">
                    📧 <a href={`mailto:${PROGRAM_INFO.gmEmail}`} className="underline hover:text-[#facc15]">{PROGRAM_INFO.gmEmail}</a>
                  </p>
                  <p className="text-xs text-zinc-400">
                    St. Gregory's Campus • 1900 W. MacArthur Street • Shawnee, Oklahoma 74804
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenRecruitModal();
                    }}
                    className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] transition text-center border border-amber-300/40 shadow-lg"
                  >
                    Open Official Recruit Form
                  </button>
                  <a
                    href={PROGRAM_INFO.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl text-xs font-bold text-zinc-200 bg-[#0a0a0a] border border-[#262626] hover:text-white hover:bg-[#1a1a1a] text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Google Forms Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
