import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  X
} from 'lucide-react';
import { CAVALIER_PILLARS } from '../data/mockData';
import { DevelopmentPillar } from '../types';

interface PillarsSectionProps {
  onOpenRecruiting?: () => void;
  compact?: boolean;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ 
  onOpenRecruiting,
  compact = false 
}) => {
  const [selectedPillar, setSelectedPillar] = useState<DevelopmentPillar | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="cavaliers-5-pillars" className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1917] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
          Comprehensive Student-Athlete Blueprint
        </div>
        <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          THE 5 PILLARS OF CAVALIER DEVELOPMENT
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Every aspect of the Oklahoma Cavaliers curriculum is engineered around five fundamental pillars designed to develop elite baseball athletes, responsible scholars, and high-character men ready for collegiate success.
        </p>
      </div>

      {/* Main 5 Pillars Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {CAVALIER_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            id={`pillar-card-${pillar.id}`}
            onClick={() => setSelectedPillar(pillar)}
            className="group relative bg-[#121212] rounded-2xl border border-[#262626] hover:border-[#ca8a04]/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col cursor-pointer"
          >
            {/* Image Container with Top Badge & Gradient Scrim */}
            <div className="relative h-48 w-full overflow-hidden bg-black">
              <img
                src={pillar.imageUrl}
                alt={pillar.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

              {/* Number Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="font-athletic text-lg font-black text-white px-2.5 py-0.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 shadow-md">
                  {pillar.number}
                </span>
              </div>

              {/* Pillar Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#1c1917]/90 text-[#facc15] border border-[#ca8a04]/50 backdrop-blur-md shadow-md">
                  {pillar.badge}
                </span>
              </div>

              {/* Title Overlay on Image Bottom */}
              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <div className="p-1.5 rounded-lg bg-black/60 text-[#facc15] border border-white/10 backdrop-blur-sm">
                    {getIcon(pillar.iconName)}
                  </div>
                  <h3 className="font-athletic text-xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                    {pillar.shortTitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#facc15] tracking-wide line-clamp-1">
                  {pillar.tagline}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                  {pillar.description}
                </p>
              </div>

              {/* Focus Points List */}
              <div className="space-y-1.5 pt-3 border-t border-[#262626]/80 text-[11px]">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Key Focus Areas:</span>
                {pillar.focusAreas.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
                {pillar.focusAreas.length > 3 && (
                  <p className="text-[10px] text-zinc-400 font-semibold pt-1">
                    +{pillar.focusAreas.length - 3} more curriculum modules
                  </p>
                )}
              </div>

              {/* Card Footer Action */}
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-[#1c1c1c] group-hover:bg-[#ca8a04] group-hover:text-black text-zinc-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-[#262626] group-hover:border-[#ca8a04]"
              >
                <span>Explore {pillar.shortTitle} Pillar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal for Selected Pillar */}
      {selectedPillar && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPillar(null)}
        >
          <div 
            className="bg-[#141414] border border-[#ca8a04]/50 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#ca8a04] hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-64 w-full bg-black">
              <img
                src={selectedPillar.imageUrl}
                alt={selectedPillar.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-[#ca8a04]/60 text-xs font-bold text-[#facc15] uppercase tracking-wider">
                  {getIcon(selectedPillar.iconName)}
                  <span>Pillar {selectedPillar.number} — {selectedPillar.badge}</span>
                </div>
                <h3 className="font-athletic text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  {selectedPillar.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#facc15] uppercase tracking-wider">
                  {selectedPillar.tagline}
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              {/* Full Focus Areas List */}
              <div className="bg-[#1c1c1c] p-5 rounded-2xl border border-[#2e2e2e] space-y-3">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#facc15]" />
                  Curriculum & Development Modules
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPillar.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#facc15] flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-zinc-400">
                  Part of the comprehensive Oklahoma Cavaliers post-grad development program.
                </span>
                {onOpenRecruiting && (
                  <button
                    onClick={() => {
                      setSelectedPillar(null);
                      onOpenRecruiting();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#ca8a04] hover:bg-[#eab308] text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Apply For Placement</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
