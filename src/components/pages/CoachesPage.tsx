import React from 'react';
import { PageTab } from '../../types';
import { COACHES_DATA, PROGRAM_INFO } from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { 
  ShieldAlert, 
  Mail, 
  CheckCircle2, 
  Trophy, 
  Send, 
  Award, 
  UserCheck, 
  GraduationCap, 
  Target, 
  Flame, 
  Quote 
} from 'lucide-react';

interface CoachesPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
}

export const CoachesPage: React.FC<CoachesPageProps> = ({ setActiveTab, onOpenRecruitModal }) => {
  const gm = COACHES_DATA[0]; // Christopher Brown
  const staff = COACHES_DATA.slice(1);

  return (
    <div className="space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <ShieldAlert className="w-3.5 h-3.5 text-[#eab308]" /> Leadership & Player Development
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          COACHING STAFF & BASEBALL OPERATIONS
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Led by General Manager Coach Christopher Brown, our coaching staff brings collegiate experience, extensive recruiting networks, and daily player development passion to St. Gregory's campus.
        </p>
      </div>

      {/* Featured General Manager Spotlight: Coach Christopher Brown */}
      <section className="bg-gradient-to-br from-[#161616] via-[#141414] to-[#0e0e0e] rounded-3xl border border-[#ca8a04]/40 p-8 sm:p-12 shadow-2xl space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GM Identity Block */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a1a] border-2 border-[#ca8a04] p-2 flex items-center justify-center shadow-xl">
                <CavaliersLogo variant="crest" size="xl" />
              </div>
              <span className="absolute -bottom-2 px-3 py-1 rounded-full bg-[#991b1b] text-white text-[11px] font-black uppercase tracking-wider shadow">
                General Manager
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase">
                {gm.name}
              </h2>
              <p className="text-xs text-[#facc15] font-bold uppercase tracking-widest">
                {gm.title}
              </p>
            </div>

            <div className="w-full pt-3 space-y-2 text-xs">
              <a
                href={`mailto:${gm.email}`}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0a0a0a] border border-[#262626] hover:border-[#ca8a04] text-[#facc15] font-mono flex items-center justify-center gap-2 transition"
              >
                <Mail className="w-4 h-4" /> {gm.email}
              </a>
              <button
                onClick={onOpenRecruitModal}
                className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 hover:from-[#fef08a] hover:to-[#eab308] flex items-center justify-center gap-2 shadow-lg transition border border-amber-300/40"
              >
                <Send className="w-3.5 h-3.5" /> Connect With Coach Brown
              </button>
            </div>
          </div>

          {/* GM Bio & Responsibilities */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
                Program Leadership & Operations
              </span>
              <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">
                BRIDGING THE GAP TO THE NEXT LEVEL
              </h3>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {gm.bio}
              </p>
            </div>

            {/* GM Quote */}
            {gm.quote && (
              <div className="bg-[#0e0e0e]/90 p-5 rounded-2xl border-l-4 border-[#eab308] border-y border-r border-[#262626] text-sm italic text-zinc-200 flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#eab308] shrink-0 mt-0.5" />
                <p>"{gm.quote}"</p>
              </div>
            )}

            {/* Key Areas of Responsibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0e0e0e]/70 p-4 rounded-xl border border-[#262626] space-y-2">
                <h4 className="font-athletic text-lg font-bold text-white uppercase flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#facc15]" /> Core Responsibilities
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {gm.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0e0e0e]/70 p-4 rounded-xl border border-[#262626] space-y-2">
                <h4 className="font-athletic text-lg font-bold text-white uppercase flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#facc15]" /> Background & Network
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {gm.experience.map((e, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators & Assistant Staff Grid */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Player Development Team
          </span>
          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            SPECIALIZED COORDINATORS & INSTRUCTORS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Our staff provides position-specific instruction every single day in pitching, hitting, strength & conditioning, and defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#121212] rounded-3xl border border-[#262626] p-7 space-y-5 hover:border-[#ca8a04]/50 transition duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-[#ca8a04]/40 flex items-center justify-center text-[#facc15]">
                    {coach.role.includes('Pitching') ? (
                      <Flame className="w-7 h-7" />
                    ) : coach.role.includes('Hitting') ? (
                      <Target className="w-7 h-7" />
                    ) : (
                      <Trophy className="w-7 h-7" />
                    )}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#1a1a1a] text-[#facc15] border border-[#262626]">
                    {coach.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-athletic text-2xl font-bold text-white uppercase">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-[#eab308] font-bold mt-0.5">
                    {coach.title}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {coach.bio}
                </p>

                {coach.quote && (
                  <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#262626] text-[11px] italic text-zinc-300">
                    "{coach.quote}"
                  </div>
                )}

                <div className="pt-2 border-t border-[#262626] space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Focus Areas:
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {coach.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#facc15] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#262626]">
                <button
                  onClick={onOpenRecruitModal}
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-200 bg-[#1a1a1a] hover:bg-[#222222] hover:text-[#facc15] border border-[#2c2c2c] transition text-center"
                >
                  Connect With Staff
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Philosophy Banner */}
      <section className="bg-gradient-to-r from-[#7f1d1d] via-[#141414] to-[#121212] p-8 sm:p-12 rounded-3xl border border-[#262626] text-center space-y-6 shadow-2xl">
        <CavaliersLogo variant="crest" size="lg" className="mx-auto" />
        <div className="space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            The Cavaliers Staff Creed
          </span>
          <h3 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase">
            WE DON'T JUST TRAIN BASEBALL PLAYERS. WE BUILD BETTER ATHLETES.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Our responsibility is to develop the player, create opportunities, and help position the athlete for the best possible next step.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRecruitModal}
            className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-xl transition border border-amber-300/40"
          >
            <Send className="w-4 h-4 inline mr-2" /> Start Recruitment Form
          </button>
          <a
            href={`mailto:${PROGRAM_INFO.gmEmail}`}
            className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1a1a1a] border border-[#2c2c2c] hover:text-[#facc15] hover:bg-[#222222]"
          >
            Email Coach Brown Directly
          </a>
        </div>
      </section>
    </div>
  );
};
