import React, { useState } from 'react';
import { Player, PageTab } from '../../types';
import { ROSTER_DATA, PROGRAM_INFO } from '../../data/mockData';
import { PlayerDetailModal } from '../PlayerDetailModal';
import { CavaliersLogo } from '../CavaliersLogo';
import { 
  Users, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Flame, 
  GraduationCap, 
  MapPin, 
  Send, 
  ExternalLink, 
  Shield, 
  Activity,
  Trophy
} from 'lucide-react';

interface RosterPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
}

export const RosterPage: React.FC<RosterPageProps> = ({ setActiveTab, onOpenRecruitModal }) => {
  const [selectedPosition, setSelectedPosition] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const positionFilters = ['All', 'Pitcher', 'Catcher', 'Infielder', 'Outfielder', 'Two-Way'];

  const filteredPlayers = ROSTER_DATA.filter((player) => {
    const matchesPosition =
      selectedPosition === 'All' || player.primaryPosition === selectedPosition;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      player.name.toLowerCase().includes(query) ||
      player.hometown.toLowerCase().includes(query) ||
      player.highSchool.toLowerCase().includes(query) ||
      player.positions.some((p) => p.toLowerCase().includes(query)) ||
      player.number.toString().includes(query);

    return matchesPosition && matchesSearch;
  });

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <Users className="w-3.5 h-3.5 text-[#eab308]" /> Oklahoma Cavaliers Post-Grad
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          2025–2026 ACTIVE ROSTER
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Meet the student-athletes developing daily at St. Gregory's campus and preparing for collegiate baseball opportunities.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Position Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] rounded-xl border border-[#262626] w-full md:w-auto">
            {positionFilters.map((pos) => {
              const count =
                pos === 'All'
                  ? ROSTER_DATA.length
                  : ROSTER_DATA.filter((p) => p.primaryPosition === pos).length;
              return (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                    selectedPosition === pos
                      ? 'bg-[#1c1c1c] text-[#facc15] shadow-sm border border-[#ca8a04]/50'
                      : 'text-zinc-400 hover:text-white hover:bg-[#161616]'
                  }`}
                >
                  <span>{pos}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#0a0a0a] text-zinc-300">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search name, school, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#121212] border border-[#262626] focus:border-[#ca8a04] focus:outline-none text-xs text-white placeholder-zinc-500"
              />
            </div>

            <div className="flex items-center p-1 bg-[#121212] rounded-xl border border-[#262626]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs transition ${
                  viewMode === 'grid'
                    ? 'bg-[#1c1c1c] text-[#facc15]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid Card View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs transition ${
                  viewMode === 'table'
                    ? 'bg-[#1c1c1c] text-[#facc15]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-zinc-400 flex items-center justify-between">
          <span>Showing <strong>{filteredPlayers.length}</strong> student-athletes</span>
          <span className="text-[11px] text-[#eab308]">Click any player for scouting card & video links</span>
        </div>
      </div>

      {/* Main Roster Views */}
      {filteredPlayers.length === 0 ? (
        <div className="text-center py-16 bg-[#121212] rounded-3xl border border-[#262626] space-y-4">
          <CavaliersLogo variant="crest" size="md" className="mx-auto opacity-50" />
          <h3 className="font-athletic text-2xl font-bold text-white uppercase">
            No Players Found Matching Your Search
          </h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search query or position filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPosition('All');
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#facc15] bg-[#1a1a1a] border border-[#2c2c2c] hover:bg-[#222222]"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              onClick={() => setSelectedPlayer(player)}
              className="bg-[#121212] rounded-2xl border border-[#262626] hover:border-[#ca8a04] transition duration-300 p-6 flex flex-col justify-between space-y-4 cursor-pointer group shadow-lg hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Card Top */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#0e0e0e] border-2 border-[#ca8a04] flex items-center justify-center font-athletic text-2xl font-black text-[#facc15] group-hover:scale-105 transition">
                    #{player.number}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#1a1a1a] text-white border border-[#262626] block">
                      {player.positions.join(' / ')}
                    </span>
                    <span className="text-[10px] text-[#eab308] font-bold mt-1 block">
                      B/T: {player.bats}/{player.throws}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-athletic text-2xl font-bold text-white group-hover:text-[#facc15] transition">
                    {player.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#eab308] shrink-0" />
                    {player.hometown}, {player.state} • {player.highSchool}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] text-zinc-300 border border-[#262626]">
                    {player.height} / {player.weight} lbs
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] text-[#facc15] font-semibold border border-[#262626]">
                    {player.gpa} GPA
                  </span>
                  {player.metrics.fastballVelo && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] text-emerald-400 font-mono border border-[#262626]">
                      FB: {player.metrics.fastballVelo}
                    </span>
                  )}
                  {player.metrics.exitVelocity && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] text-amber-400 font-mono border border-[#262626]">
                      Exit: {player.metrics.exitVelocity}
                    </span>
                  )}
                  {player.metrics.popTime && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#0a0a0a] text-cyan-400 font-mono border border-[#262626]">
                      Pop: {player.metrics.popTime}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-400 font-medium truncate max-w-[170px]">
                  {player.commitmentStatus}
                </span>
                <span className="text-[#facc15] font-bold group-hover:translate-x-1 transition">
                  View Card →
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Pro Scouting Table View */
        <div className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-[#0a0a0a] text-zinc-400 uppercase text-[10px] font-bold tracking-wider border-b border-[#262626]">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Pos</th>
                  <th className="p-4">B/T</th>
                  <th className="p-4">Ht/Wt</th>
                  <th className="p-4">Hometown & High School</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">GPA</th>
                  <th className="p-4">Verified Metrics</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]">
                {filteredPlayers.map((player) => (
                  <tr
                    key={player.id}
                    onClick={() => setSelectedPlayer(player)}
                    className="hover:bg-[#181818] transition cursor-pointer"
                  >
                    <td className="p-4 font-athletic text-lg font-bold text-[#facc15]">
                      #{player.number}
                    </td>
                    <td className="p-4 font-bold text-white text-sm">
                      {player.name}
                    </td>
                    <td className="p-4 font-semibold text-zinc-200">
                      {player.positions.join('/')}
                    </td>
                    <td className="p-4">
                      {player.bats}/{player.throws}
                    </td>
                    <td className="p-4">
                      {player.height} / {player.weight}
                    </td>
                    <td className="p-4">
                      {player.hometown}, {player.state} ({player.highSchool})
                    </td>
                    <td className="p-4">
                      {player.gradYear}
                    </td>
                    <td className="p-4 font-semibold text-[#facc15]">
                      {player.gpa}
                    </td>
                    <td className="p-4 font-mono text-[11px] text-emerald-400">
                      {player.metrics.fastballVelo || player.metrics.exitVelocity || player.metrics.sixtyYardDash || 'Verified'}
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-[#facc15] font-bold hover:underline">
                        Profile →
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Recruits CTA Banner */}
      <section className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] p-8 rounded-3xl border border-[#ca8a04]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white uppercase">
            WANT TO WEAR THE CAVALIER UNIFORM?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            We are actively scouting 2024, 2025, and transfer athletes for our upcoming post-graduate campaign.
          </p>
        </div>
        <button
          onClick={onOpenRecruitModal}
          className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] shadow-md transition border border-amber-300/40"
        >
          <Send className="w-3.5 h-3.5 inline mr-1.5" /> Submit Player Profile
        </button>
      </section>

      {/* Detailed Modal Trigger */}
      <PlayerDetailModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        onOpenRecruitModal={onOpenRecruitModal}
      />
    </div>
  );
};
