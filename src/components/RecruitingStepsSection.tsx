import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Target, 
  Video, 
  Compass, 
  Send, 
  CalendarCheck, 
  Award, 
  CheckCircle2, 
  Trophy, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Clock,
  ExternalLink
} from 'lucide-react';
import { RECRUITING_STEPS } from '../data/mockData';
import { RecruitingStep } from '../types';

interface RecruitingStepsSectionProps {
  onOpenRecruitModal?: () => void;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-[#facc15]" />,
  Target: <Target className="w-5 h-5 text-[#facc15]" />,
  Video: <Video className="w-5 h-5 text-[#facc15]" />,
  Compass: <Compass className="w-5 h-5 text-[#facc15]" />,
  Send: <Send className="w-5 h-5 text-[#facc15]" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5 text-[#facc15]" />,
  Award: <Award className="w-5 h-5 text-[#facc15]" />,
};

export const RecruitingStepsSection: React.FC<RecruitingStepsSectionProps> = ({
  onOpenRecruitModal,
  title = "THE 7-STEP RECRUITING & PLACEMENT SYSTEM",
  subtitle = "The Cavaliers are not designed to be the final destination of a player's baseball career. We are the bridge to your next collegiate opportunity.",
  compact = false
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  const activeStep: RecruitingStep = RECRUITING_STEPS[activeStepIndex];

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-[11px] font-extrabold uppercase tracking-widest text-[#facc15] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
          <span>Your Next School Is The Goal</span>
        </div>
        
        <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          {title}
        </h2>
        
        <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* View Mode Switcher */}
        {!compact && (
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-[#121212] border border-[#262626]">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-[#800020] to-[#5b0017] text-white border border-[#facc15]/50 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All 7 Steps Grid
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition ${
                  viewMode === 'timeline'
                    ? 'bg-gradient-to-r from-[#800020] to-[#5b0017] text-white border border-[#facc15]/50 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Step-by-Step Focus View
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Step Selector Navigation Ribbon */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#0f0f0f] p-3 rounded-2xl border border-[#262626] shadow-xl overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {RECRUITING_STEPS.map((s, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    if (compact) setViewMode('timeline');
                  }}
                  className={`flex-1 flex flex-col items-center p-2.5 rounded-xl border transition-all text-left relative group ${
                    isActive
                      ? 'bg-gradient-to-b from-[#800020] to-[#3a000e] border-[#facc15] shadow-lg shadow-[#800020]/30 scale-[1.02]'
                      : 'bg-[#141414] border-[#222222] hover:border-[#ca8a04]/50 hover:bg-[#1a1a1a]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-athletic text-xs font-black ${
                      isActive 
                        ? 'bg-[#facc15] text-zinc-950 shadow-sm' 
                        : 'bg-[#222222] text-[#facc15] border border-[#ca8a04]/30'
                    }`}>
                      0{s.step}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                      isActive ? 'text-[#facc15]' : 'text-zinc-400 group-hover:text-zinc-200'
                    }`}>
                      Step 0{s.step}
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold line-clamp-1 text-center ${
                    isActive ? 'text-white' : 'text-zinc-300'
                  }`}>
                    {s.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DISPLAY MODE 1: STEP-BY-STEP FOCUS VIEW */}
      {viewMode === 'timeline' && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-b from-[#171717] via-[#121212] to-[#0a0a0a] rounded-3xl border-2 border-[#ca8a04]/60 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Background Cavaliers Crest Watermark Accent */}
            <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
              <span className="font-athletic text-[180px] font-black text-[#facc15]">CAVS</span>
            </div>

            {/* Top Bar with Step & Timeframe */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#262626] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#800020] to-[#400010] border-2 border-[#facc15] flex items-center justify-center shadow-lg">
                  <span className="font-athletic text-2xl font-black text-[#facc15]">0{activeStep.step}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#facc15] bg-[#800020]/40 px-2.5 py-0.5 rounded border border-[#800020]">
                    {activeStep.phase}
                  </span>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase mt-1">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-xs font-semibold text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-[#facc15]" />
                <span>{activeStep.timeframe}</span>
              </div>
            </div>

            {/* Subtitle & Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-extrabold uppercase text-[#facc15] tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#facc15]" />
                {activeStep.subtitle}
              </h4>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 block">
                Cavaliers Verified Deliverables & System Outputs:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStep.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#171717] border border-[#2a2a2a]">
                    <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-zinc-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cavaliers Advantage Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#800020]/30 via-[#1e1b4b]/20 to-[#121212] border border-[#ca8a04]/50 flex items-start gap-3">
              <Trophy className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#facc15]">The Cavalier Advantage</span>
                <p className="text-xs text-zinc-200 font-medium leading-relaxed">
                  {activeStep.cavaliersAdvantage}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-zinc-300 bg-[#1c1c1c] border border-[#2a2a2a] hover:bg-[#252525] disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                ← Previous Step
              </button>

              <span className="text-xs font-extrabold text-zinc-400">
                Step <strong className="text-[#facc15]">{activeStepIndex + 1}</strong> of 7
              </span>

              <button
                disabled={activeStepIndex === RECRUITING_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(RECRUITING_STEPS.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] border border-amber-300/40 shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DISPLAY MODE 2: ALL 7 STEPS GRID */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECRUITING_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className={`bg-[#121212] rounded-2xl border p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 relative group ${
                activeStepIndex === idx 
                  ? 'border-[#facc15] shadow-xl shadow-[#800020]/20 bg-gradient-to-b from-[#181818] to-[#101010]' 
                  : 'border-[#262626] hover:border-[#ca8a04]/60'
              }`}
            >
              {/* Top Row Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#800020] to-[#400010] border border-[#facc15]/60 flex items-center justify-center font-athletic text-lg font-black text-[#facc15] shadow-md">
                      0{step.step}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#facc15] bg-[#800020]/30 px-2 py-0.5 rounded border border-[#800020]/60">
                      Step {step.step}
                    </span>
                  </div>
                  
                  <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                    {ICON_MAP[step.iconName] || <Sparkles className="w-4 h-4 text-[#facc15]" />}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-athletic text-2xl font-bold text-white uppercase leading-tight group-hover:text-[#facc15] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#eab308] uppercase tracking-wider block">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-1.5 border-t border-[#222222]">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                    Cavaliers System Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                        <span className="line-clamp-1">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Advantage Ribbon */}
              <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-[11px]">
                <span className="text-zinc-400 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#facc15]" />
                  {step.timeframe.split(' ')[0]}
                </span>

                <button
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setViewMode('timeline');
                  }}
                  className="text-[#facc15] font-bold uppercase hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Focus View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-[#800020] via-[#500014] to-[#121212] p-6 rounded-2xl border-2 border-[#facc15]/60 shadow-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/60 border border-[#facc15]/40 text-[10px] font-black uppercase text-[#facc15]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Transfer & Compliance Guarantee</span>
              </div>

              <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                ACADEMIC & TRANSFER ELIGIBILITY ADVOCACY
              </h3>

              <p className="text-xs text-zinc-200 leading-relaxed">
                General Manager Christopher Brown personally navigates NCAA, NAIA, and NJCAA transfer rules, organizing verified player stats, transcript reviews, and direct coach referral lines.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="font-athletic text-xl font-black text-[#facc15] block">100%</span>
                  <span className="text-[10px] text-zinc-300 font-bold uppercase">Placement Focus</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="font-athletic text-xl font-black text-[#facc15] block">50+</span>
                  <span className="text-[10px] text-zinc-300 font-bold uppercase">Coach Contacts</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRecruitModal}
              className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] border border-amber-300/40 shadow-lg transition transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Start Placement Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
