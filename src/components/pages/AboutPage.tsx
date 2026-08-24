import React, { useState } from 'react';
import { PageTab, FAQItem } from '../../types';
import { PillarsSection } from '../PillarsSection';
import { RecruitingStepsSection } from '../RecruitingStepsSection';
import { 
  PROGRAM_INFO, 
  FACILITIES_DATA, 
  RECRUITING_STEPS, 
  FAQ_DATA, 
  DEPOSIT_PLANS,
  REMAINING_BALANCE_PLANS,
  BENEDICTINE_VALUES,
  WEEKDAY_SCHEDULE
} from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { 
  Building2, 
  Dumbbell, 
  Trophy, 
  Warehouse, 
  Target, 
  Shield, 
  Home, 
  GraduationCap, 
  DollarSign, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  FileText, 
  HeartHandshake, 
  Sparkles, 
  BookOpen, 
  Scale, 
  Calculator,
  Flame,
  Activity,
  Clock,
  ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
  onOpenHandbookModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setActiveTab,
  onOpenRecruitModal,
  onOpenHandbookModal,
}) => {
  const [selectedFacility, setSelectedFacility] = useState<string>(FACILITIES_DATA[0].id);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-pa1');
  const [selectedDepositPlan, setSelectedDepositPlan] = useState<string>('deposit-1');

  const faqCategories = ['All', 'Parents', 'Players', 'Transfer & Eligibility', 'Cost & Financial Aid'];

  const filteredFaqs = activeFaqCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === activeFaqCategory);

  const currentFacility = FACILITIES_DATA.find((f) => f.id === selectedFacility) || FACILITIES_DATA[0];

  return (
    <div className="space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <Building2 className="w-3.5 h-3.5 text-[#eab308]" /> Historic St. Gregory's Campus • Shawnee, OK
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
          ABOUT THE CAVALIERS
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          Welcome to the Oklahoma Cavaliers Post-Graduate Baseball Program. We provide high school graduates with a collegiate environment designed to develop physical tools, build character, and advance to their next collegiate baseball opportunity.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenHandbookModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-200 bg-[#161616] border border-[#2c2c2c] hover:text-white hover:border-[#ca8a04]/50 hover:bg-[#202020] transition"
          >
            <BookOpen className="w-4 h-4 text-[#eab308]" /> Read Full Team Handbook
          </button>
          <button
            onClick={onOpenRecruitModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] border border-amber-300/40 shadow-md transition"
          >
            <Send className="w-4 h-4" /> Official Prospective Form
          </button>
        </div>
      </section>

      {/* Welcome from Coach Brown & Philosophy */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-10 rounded-3xl border border-[#262626] space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              General Manager's Welcome
            </span>
            <h2 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase">
              Welcome to the Oklahoma Cavaliers
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm text-zinc-300 font-semibold italic">
            Dear Future Cavalier & Families,
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Every baseball player has a unique journey. Some athletes receive multiple scholarship offers before graduation, while others need additional time to mature physically, refine their skills, or gain the exposure they deserve. Our program was created for those athletes.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            The Oklahoma Cavaliers provide a collegiate environment where players continue to develop both on and off the field. Through high-level coaching, structured strength and conditioning, academic support, and a competitive collegiate schedule, we prepare players for the next step in their baseball careers.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Whether your next destination is a Junior College, NAIA institution, NCAA Division II, or NCAA Division I program, our staff is dedicated to helping you reach that opportunity.
          </p>
          <div className="pt-4 border-t border-[#262626] flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-athletic text-lg font-bold text-white uppercase">Coach Christopher Brown</p>
              <p className="text-xs text-[#facc15] font-semibold">General Manager / Head Coach</p>
            </div>
            <a
              href={`mailto:${PROGRAM_INFO.gmEmail}`}
              className="text-xs font-mono text-zinc-400 hover:text-white underline"
            >
              {PROGRAM_INFO.gmEmail}
            </a>
          </div>
        </div>

        {/* Philosophy Card & Why Post Grad */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-[#1c1917] via-[#141414] to-[#0a0a0a] p-8 rounded-3xl border-l-4 border-amber-400 border-y border-r border-[#262626] space-y-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              Coach's Philosophy
            </span>
            <blockquote className="font-athletic text-xl sm:text-2xl font-bold text-white leading-relaxed">
              "The best players aren't made during games. They're built in the weight room, during extra reps after practice, in the classroom, and through the discipline to do the little things every day."
            </blockquote>
            <p className="text-xs font-semibold text-zinc-400">— Coach Christopher Brown</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#262626] space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              One More Year Can Change Everything
            </span>
            <h3 className="font-athletic text-2xl font-bold text-white uppercase">Why Post-Grad?</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              A post-graduate year bridges the gap between high school and college athletics, providing additional time to develop physically, academically, and mentally while competing against collegiate competition.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Benedictine Values */}
      <section className="bg-gradient-to-br from-[#161616] via-[#121212] to-[#0b0b0b] p-8 sm:p-12 rounded-3xl border border-[#ca8a04]/40 space-y-10 shadow-2xl">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Our Mission & Tradition
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            DEVELOP THE PLAYER. BUILD THE PERSON. ADVANCE THE FUTURE.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Located on the historic campus of St. Gregory's in Shawnee, Oklahoma, our program embraces the enduring values of the Benedictine tradition—community, hospitality, humility, stewardship, respect, and service to others.
          </p>
        </div>

        {/* Benedictine Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEDICTINE_VALUES.map((val, idx) => (
            <div key={idx} className="bg-[#0e0e0e] rounded-2xl border border-[#262626] overflow-hidden group hover:border-[#ca8a04]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="relative h-36 w-full bg-black overflow-hidden">
                <img
                  src={val.imageUrl}
                  alt={val.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#1c1917]/90 text-[#facc15] border border-[#ca8a04]/40 shadow">
                    {val.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-athletic text-lg font-bold text-white uppercase text-[#facc15] block group-hover:text-amber-400 transition-colors">
                    {val.name}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                    {val.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 5 Pillars Development Model */}
      <PillarsSection onOpenRecruiting={onOpenRecruitModal} />

      {/* A Day in the Life & Typical Weekday Schedule */}
      <section className="bg-[#121212] p-8 sm:p-12 rounded-3xl border border-[#262626] space-y-8 shadow-2xl">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Collegiate Structure
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            A DAY IN THE LIFE OF A CAVALIER
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300">
            Our structured schedule mirrors the expectations of collegiate baseball programs, preparing players for success at the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Weekday Schedule List */}
          <div className="lg:col-span-8 bg-[#0a0a0a] rounded-2xl border border-[#262626] overflow-hidden">
            <div className="px-5 py-3.5 bg-[#161616] border-b border-[#262626] flex items-center justify-between">
              <span className="font-athletic text-lg font-bold text-white uppercase">Typical Weekday Schedule</span>
              <span className="text-xs text-[#facc15] font-semibold">St. Gregory's Campus</span>
            </div>
            <div className="divide-y divide-[#1e1e1e]">
              {WEEKDAY_SCHEDULE.map((s, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center px-5 py-3 text-xs justify-between gap-1 hover:bg-[#121212]">
                  <span className="font-mono font-bold text-[#facc15] sm:w-40">{s.time}</span>
                  <span className="text-zinc-200 sm:flex-1">{s.activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Cavalier Standard Priorities */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-[#ca8a04]/40 space-y-4">
              <h3 className="font-athletic text-xl font-bold text-white uppercase text-[#facc15]">
                The Cavalier Standard
              </h3>
              <p className="text-xs text-zinc-300">
                Every day is built around four fundamental priorities:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-white text-center">
                <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#262626]">🏋️ Train</div>
                <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#262626]">⚾ Develop</div>
                <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#262626]">📚 Learn</div>
                <div className="p-3 bg-[#0a0a0a] rounded-xl border border-[#262626]">💪 Recover</div>
              </div>
              <p className="text-[11px] text-zinc-400 italic text-center pt-1">
                "Success is built through consistency—not occasional greatness."
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* KROME Sports Performance Partnership */}
      <section className="bg-gradient-to-r from-[#171717] via-[#141414] to-[#0c0c0c] p-8 sm:p-12 rounded-3xl border border-[#ca8a04]/40 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          {/* Logo Showcase Card */}
          <div className="flex-shrink-0 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-zinc-200/80 max-w-[280px] sm:max-w-[320px] w-full flex items-center justify-center">
            <img
              src="/krome_logo.jpg"
              alt="KROME Sports Performance (KSP) Official Logo"
              className="w-full h-auto object-contain max-h-36 rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
              <Flame className="w-3.5 h-3.5" /> Elite Strength & Performance Partner
            </div>
            <h2 className="font-athletic text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              KROME SPORTS PERFORMANCE PARTNERSHIP
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              The Oklahoma Cavaliers train with <strong>KROME Sports Performance (KSP)</strong>, who has coached thousands of athletes from youth to professional ranks, including helping the <strong>2025-2026 Seminole State Trojans Baseball to an NJCAA World Series appearance</strong> this spring.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-[#0a0a0a] p-5 rounded-xl border border-[#262626] space-y-1">
            <strong className="text-[#facc15] font-athletic text-sm uppercase block">Strength & Power</strong>
            <p className="text-zinc-300">Total-body strength, Olympic lifting progressions, medicine ball rotational throws, and plyometrics.</p>
          </div>
          <div className="bg-[#0a0a0a] p-5 rounded-xl border border-[#262626] space-y-1">
            <strong className="text-[#facc15] font-athletic text-sm uppercase block">Speed & Acceleration</strong>
            <p className="text-zinc-300">First-step quickness, linear speed mechanics, change of direction, and verified 60-yard metrics.</p>
          </div>
          <div className="bg-[#0a0a0a] p-5 rounded-xl border border-[#262626] space-y-1">
            <strong className="text-[#facc15] font-athletic text-sm uppercase block">Arm Care Protocols</strong>
            <p className="text-zinc-300">Shoulder stability, scapular strength, forearm development, and throwing progression routines.</p>
          </div>
          <div className="bg-[#0a0a0a] p-5 rounded-xl border border-[#262626] space-y-1">
            <strong className="text-[#facc15] font-athletic text-sm uppercase block">Mobility & Recovery</strong>
            <p className="text-zinc-300">Soft tissue therapy, foam rolling, active recovery, and evidence-based USAW/NSCA training.</p>
          </div>
        </div>
      </section>

      {/* Facilities Showcase Interactive Hub */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Our Facilities & Training Ground
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            YEAR-ROUND PLAYER DEVELOPMENT INFRASTRUCTURE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto">
            Our campus environment provides all the collegiate amenities needed for daily physical progression, recovery, and competition.
          </p>
        </div>

        {/* Facility Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#121212] rounded-2xl border border-[#262626] max-w-4xl mx-auto">
          {FACILITIES_DATA.map((fac) => {
            const isSelected = selectedFacility === fac.id;
            return (
              <button
                key={fac.id}
                onClick={() => setSelectedFacility(fac.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1c1c1c] text-[#facc15] shadow-md border border-[#ca8a04]/50'
                    : 'text-zinc-400 hover:text-white hover:bg-[#161616]'
                }`}
              >
                {fac.title}
              </button>
            );
          })}
        </div>

        {/* Active Facility Display Card */}
        <div className="bg-[#121212] rounded-3xl border border-[#262626] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px]">
            <img
              src={currentFacility.imageUrl}
              alt={currentFacility.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden" />
            {currentFacility.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-[#dc2626] text-white shadow-xl border border-red-400/40">
                {currentFacility.badge}
              </span>
            )}
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] border border-[#ca8a04]/40 text-[#facc15]">
                {currentFacility.subtitle}
              </span>
              <h3 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase">
                {currentFacility.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {currentFacility.description}
              </p>

              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#eab308]">
                  Key Training & Facility Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-200">
                  {currentFacility.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
              <span className="text-xs text-zinc-400">St. Gregory's Campus • Shawnee, OK</span>
              <button
                onClick={onOpenRecruitModal}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] border border-amber-300/40"
              >
                Inquire About Facility Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* College Placement & 7-Step Recruiting Process */}
      <RecruitingStepsSection onOpenRecruitModal={onOpenRecruitModal} />

      {/* Program Investment & Complete Payment Options */}
      <section className="bg-[#121212] p-8 sm:p-12 rounded-3xl border border-[#262626] space-y-10 shadow-2xl">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Transparent Investment
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            PROGRAM COST & PAYMENT OPTIONS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300">
            Standard program fee is $10,000, designed to provide an affordable collegiate alternative including housing, 12 meals per week (Sun Dinner – Sat Lunch), travel, gear, and college recruiting.
          </p>
        </div>

        {/* Big Investment Card */}
        <div className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#101010] p-8 rounded-2xl border border-[#ca8a04]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center lg:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              Complete Post-Graduate Fee
            </span>
            <div className="font-athletic text-5xl sm:text-6xl font-black text-white">
              $10,000
            </div>
            <p className="text-xs text-zinc-300">
              All-inclusive collegiate experience with campus living.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">🏠 HOUSING</span>
              <span className="text-zinc-400">Campus dormitory living included.</span>
            </div>
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">🍽️ MEALS</span>
              <span className="text-zinc-400">12 meals/wk (Sun Dinner–Sat Lunch).</span>
            </div>
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">🚌 TRAVEL</span>
              <span className="text-zinc-400">All competition team travel.</span>
            </div>
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">👕 UNIFORMS</span>
              <span className="text-zinc-400">Game uniforms & gear package.</span>
            </div>
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">🏋️ DEVELOPMENT</span>
              <span className="text-zinc-400">Year-round S&C, clinics, & cages.</span>
            </div>
            <div className="bg-[#0e0e0e]/90 p-3.5 rounded-xl border border-[#262626]">
              <span className="font-bold text-white block">📹 RECRUITING</span>
              <span className="text-zinc-400">Pro video, stats & placement.</span>
            </div>
          </div>
        </div>

        {/* Deposit Payment Options ($2,000) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-athletic text-2xl font-bold text-white uppercase flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#facc15]" /> $2,000 ENROLLMENT DEPOSIT
            </h3>
            <span className="text-xs text-zinc-400">Applied directly to balance</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DEPOSIT_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#262626] space-y-3 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-athletic text-lg font-bold text-white uppercase">{plan.title}</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1a1a1a] text-[#facc15] border border-[#ca8a04]/40 font-bold">
                    {plan.depositTotal}
                  </span>
                </div>
                <div className="space-y-1.5 pt-1">
                  {plan.schedule.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-[#070707] border border-[#262626]">
                      <span className="text-zinc-300">{s.date}</span>
                      <span className="font-bold text-white">{s.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-zinc-400">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Balance Options ($8,000) */}
        <div className="space-y-4 pt-4 border-t border-[#262626]">
          <h3 className="font-athletic text-2xl font-bold text-white uppercase flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#facc15]" /> REMAINING PROGRAM BALANCE ($8,000)
          </h3>
          <p className="text-xs text-zinc-300">
            After the $2,000 enrollment deposit is applied, families select one of the following payment plans:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REMAINING_BALANCE_PLANS.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#262626] space-y-3 text-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1c1c1c] text-[#facc15] border border-[#ca8a04]/40 uppercase">
                      {b.badge}
                    </span>
                    <span className="font-bold text-white">Total: {b.totalCost}</span>
                  </div>
                  <h4 className="font-athletic text-lg font-bold text-white uppercase">{b.title}</h4>
                  <p className="text-zinc-200 font-semibold">{b.structure}</p>
                  <p className="text-[11px] text-zinc-400">{b.notes}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Summary Table */}
          <div className="pt-4 space-y-2">
            <h4 className="font-athletic text-lg font-bold text-white uppercase">Payment Summary Table</h4>
            <div className="bg-[#0a0a0a] rounded-2xl border border-[#262626] overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#161616] border-b border-[#262626] text-[#facc15] font-athletic text-sm uppercase">
                  <tr>
                    <th className="p-3">Payment Plan</th>
                    <th className="p-3">Deposit</th>
                    <th className="p-3">Remaining Balance</th>
                    <th className="p-3">Payment Schedule</th>
                    <th className="p-3">Total Program Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e1e1e] text-zinc-300">
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
              *Includes the $800 payment-plan charge. All payment arrangements must be agreed upon with program administration prior to enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Got Questions? We Have Answers.
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Everything players and parents need to know regarding schedule, housing, college transfer eligibility, and recruiting.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeFaqCategory === cat
                  ? 'bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 shadow-md font-extrabold border border-amber-300/40'
                  : 'bg-[#121212] text-zinc-300 border border-[#262626] hover:text-white hover:bg-[#181818]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#1a1a1a] text-[#facc15] border border-[#262626] shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-athletic text-lg sm:text-xl font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#facc15] shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-[#262626] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-[#161616] to-[#0e0e0e] p-8 sm:p-12 rounded-3xl border border-[#ca8a04]/40 text-center space-y-6 shadow-2xl">
        <CavaliersLogo variant="crest" size="md" className="mx-auto" />
        <div className="space-y-2 max-w-xl mx-auto">
          <h3 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase">
            READY TO JOIN THE CAVALIERS?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            Fall development begins October 1 at St. Gregory's campus. Secure your roster spot today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenRecruitModal}
            className="px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-lg transition border border-amber-300/40"
          >
            <Send className="w-4 h-4 inline-block mr-2" /> Start Recruitment Form
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1a1a1a] border border-[#2c2c2c] hover:text-[#facc15] hover:bg-[#222222]"
          >
            Contact Coach Brown
          </button>
        </div>
      </section>
    </div>
  );
};
