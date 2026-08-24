import React, { useState } from 'react';
import { PageTab, GameSchedule } from '../../types';
import { SCHEDULE_DATA, PROGRAM_INFO } from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  Download, 
  ExternalLink, 
  Filter, 
  Home, 
  Send, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';

interface SchedulePageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ setActiveTab, onOpenRecruitModal }) => {
  const [activeSeason, setActiveSeason] = useState<'Spring' | 'Fall'>('Spring');
  const [filterType, setFilterType] = useState<'All' | 'Home' | 'Away' | 'Scrimmage'>('All');

  const gamesForSeason = SCHEDULE_DATA.filter((g) => g.season === activeSeason);

  const filteredGames = gamesForSeason.filter((game) => {
    if (filterType === 'Home') return game.isHome;
    if (filterType === 'Away') return !game.isHome;
    if (filterType === 'Scrimmage') return game.gameType.includes('Scrimmage');
    return true;
  });

  const exportIcsCalendar = () => {
    let icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Oklahoma Cavaliers//Post-Grad Baseball//EN\nCALSCALE:GREGORIAN\n`;
    filteredGames.forEach((g) => {
      icsContent += `BEGIN:VEVENT\nSUMMARY:Oklahoma Cavaliers vs ${g.opponent}\nLOCATION:${g.field}, ${g.location}\nDESCRIPTION:${g.gameType} - ${g.notes || 'Oklahoma Cavaliers Post-Grad Baseball'}\nSTATUS:CONFIRMED\nEND:VEVENT\n`;
    });
    icsContent += `END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `oklahoma_cavaliers_${activeSeason.toLowerCase()}_schedule.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <Calendar className="w-3.5 h-3.5 text-[#eab308]" /> 2026–2027 Collegiate Slate
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          GAME SCHEDULE & RESULTS
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          The Cavaliers compete in approximately 30–40 spring collegiate games and 5 fall development scrimmages against regional NJCAA, NAIA, and NCAA junior varsity programs.
        </p>
      </div>

      {/* Oklahoma Cavaliers Game Day & Doubleheader Spotlight Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#121212] shadow-2xl">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <img src="/ok_cavs_gameday.jpg" alt="Oklahoma Cavaliers Gameday" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" /> Gameday Competition & Doubleheaders
            </div>
            <h2 className="font-athletic text-2xl sm:text-4xl font-black text-white uppercase tracking-wide">
              BATTLE-TESTED COLLEGIATE COMPETITION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Every doubleheader (7/7 innings) and single game is approached with professional preparation, scouting reports, and direct recruiting exposure in front of college scouts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-[#141414]/90 border border-amber-500/30 text-center">
              <span className="block font-athletic text-2xl font-black text-[#facc15]">30–40</span>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Spring Games</span>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-[#141414]/90 border border-amber-500/30 text-center">
              <span className="block font-athletic text-2xl font-black text-[#facc15]">7 / 7</span>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Doubleheaders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Season Switcher & Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Spring vs Fall Tabs */}
          <div className="flex items-center p-1.5 bg-[#121212] rounded-2xl border border-[#262626] w-full md:w-auto">
            <button
              onClick={() => setActiveSeason('Spring')}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition ${
                activeSeason === 'Spring'
                  ? 'bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 shadow-md border border-amber-300/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Spring 2027 Championship Slate (30–40 Games)
            </button>
            <button
              onClick={() => setActiveSeason('Fall')}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition ${
                activeSeason === 'Fall'
                  ? 'bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 shadow-md border border-amber-300/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Fall 2026 Development & Scrimmages
            </button>
          </div>

          {/* Export Action */}
          <button
            onClick={exportIcsCalendar}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 bg-[#161616] border border-[#262626] hover:text-[#facc15] hover:border-[#ca8a04]/50 hover:bg-[#202020] transition"
          >
            <Download className="w-4 h-4 text-[#eab308]" /> Export .ICS Calendar
          </button>
        </div>

        {/* Home / Away / Scrimmage Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            {(['All', 'Home', 'Away', 'Scrimmage'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterType(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  filterType === filter
                    ? 'bg-[#1c1c1c] text-[#facc15] border border-[#ca8a04]/50 shadow-sm'
                    : 'text-zinc-400 hover:text-white bg-[#121212] border border-[#262626]'
                }`}
              >
                {filter} {filter !== 'All' && 'Games'}
              </button>
            ))}
          </div>

          <span className="text-xs text-zinc-400">
            Showing <strong>{filteredGames.length}</strong> scheduled matchups
          </span>
        </div>
      </div>

      {/* Game Cards List */}
      <div className="space-y-4">
        {filteredGames.map((game) => {
          const isHome = game.isHome;
          const isFinal = game.status === 'Final';

          return (
            <div
              key={game.id}
              className="bg-[#121212] rounded-2xl border border-[#262626] hover:border-[#ca8a04]/60 transition duration-300 p-6 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              {/* Date & Home Badge */}
              <div className="flex items-center gap-4 min-w-[210px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#262626] flex flex-col items-center justify-center text-center p-1">
                  <span className="text-[10px] uppercase font-bold text-[#eab308] tracking-wider">
                    {game.date.split(' ')[0]}
                  </span>
                  <span className="font-athletic text-2xl font-black text-white">
                    {game.date.split(' ')[1].replace(',', '')}
                  </span>
                </div>

                <div className="space-y-1">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                      isHome
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isHome ? 'HOME GAME' : 'AWAY'}
                  </span>
                  <p className="text-xs font-semibold text-zinc-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" /> {game.time}
                  </p>
                </div>
              </div>

              {/* Matchup Details */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#facc15] uppercase tracking-wider">
                    {game.gameType}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">
                    vs {game.opponentLocation}
                  </span>
                </div>

                <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">
                  {game.opponent}
                </h3>

                <p className="text-xs text-zinc-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                  <span>{game.field} — {game.location}</span>
                </p>

                {game.notes && (
                  <p className="text-[11px] text-zinc-400 italic">
                    {game.notes}
                  </p>
                )}
              </div>

              {/* Status & Results */}
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[#262626]">
                {isFinal ? (
                  <div className="text-left lg:text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Final Result</span>
                    <span className="font-athletic text-xl font-bold text-[#facc15]">{game.result}</span>
                  </div>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#262626] text-xs font-semibold text-zinc-300">
                    Scheduled
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(game.field + ' ' + game.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 bg-[#161616] border border-[#262626] hover:text-white hover:bg-[#202020] flex items-center gap-1 transition"
                  >
                    Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Home Venue Spotlight */}
      <section className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] p-8 sm:p-10 rounded-3xl border border-[#ca8a04]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
            Home Field Advantage
          </span>
          <h3 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase">
            ST. GREGORY'S BASEBALL FIELD
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Home games and live bullpens are hosted at the collegiate baseball facilities on the historic St. Gregory's campus at <strong>1900 W. MacArthur Street, Shawnee, OK 74804</strong>.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-zinc-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Free Admission for College Scouts</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Full Collegiate Dimensions</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#facc15]" /> Dedicated Bullpen & Cage Areas</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3">
          <button
            onClick={onOpenRecruitModal}
            className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-lg transition text-center border border-amber-300/40"
          >
            Apply for Upcoming Season
          </button>
          <a
            href={`mailto:${PROGRAM_INFO.gmEmail}?subject=Scouting%20Schedule%20Inquiry`}
            className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-[#0a0a0a] border border-[#262626] hover:text-white hover:bg-[#161616] text-center"
          >
            Scout Credentials & Inquiries
          </a>
        </div>
      </section>
    </div>
  );
};
