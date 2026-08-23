import React from 'react';
import { Player } from '../types';
import { X, Award, Shield, User, MapPin, GraduationCap, Video, Mail, CheckCircle, Flame, Activity } from 'lucide-react';
import { CavaliersLogo } from './CavaliersLogo';
import { PROGRAM_INFO } from '../data/mockData';

interface PlayerDetailModalProps {
  player: Player | null;
  onClose: () => void;
  onOpenRecruitModal: () => void;
}

export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ player, onClose, onOpenRecruitModal }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121212] border border-[#262626] shadow-2xl text-zinc-100">
        {/* Header Ribbon */}
        <div className="relative bg-gradient-to-r from-[#181818] via-[#141414] to-[#0d0d0d] p-6 border-b border-[#262626] flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#121212] border-2 border-[#ca8a04] flex items-center justify-center font-athletic text-3xl font-black text-[#facc15] shadow-lg">
              #{player.number}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-athletic text-2xl sm:text-3xl font-black tracking-wide text-white">
                  {player.name}
                </h3>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#facc15] flex items-center gap-2 mt-0.5">
                <span>{player.positions.join(' / ')}</span>
                <span>•</span>
                <span>B/T: {player.bats}/{player.throws}</span>
                <span>•</span>
                <span>Class of {player.gradYear}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-[#1a1a1a] border border-[#262626]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#181818] p-3 rounded-xl border border-[#262626] text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Height / Weight</span>
              <p className="font-athletic text-xl font-bold text-white mt-0.5">{player.height} / {player.weight} lbs</p>
            </div>
            <div className="bg-[#181818] p-3 rounded-xl border border-[#262626] text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Hometown</span>
              <p className="font-athletic text-lg font-bold text-white mt-0.5">{player.hometown}, {player.state}</p>
            </div>
            <div className="bg-[#181818] p-3 rounded-xl border border-[#262626] text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">High School</span>
              <p className="font-athletic text-sm font-bold text-white mt-0.5 truncate">{player.highSchool}</p>
            </div>
            <div className="bg-[#181818] p-3 rounded-xl border border-[#262626] text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Academic GPA</span>
              <p className="font-athletic text-xl font-bold text-[#facc15] mt-0.5">{player.gpa} GPA</p>
            </div>
          </div>

          {/* Verified Scouting Metrics */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#facc15] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#eab308]" /> Verified Development Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {player.metrics.fastballVelo && (
                <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Fastball Velo</span>
                  <span className="text-sm font-bold text-white font-mono">{player.metrics.fastballVelo}</span>
                </div>
              )}
              {player.metrics.exitVelocity && (
                <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Exit Velocity</span>
                  <span className="text-sm font-bold text-[#facc15] font-mono">{player.metrics.exitVelocity}</span>
                </div>
              )}
              {player.metrics.sixtyYardDash && (
                <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">60-Yard Dash</span>
                  <span className="text-sm font-bold text-white font-mono">{player.metrics.sixtyYardDash}</span>
                </div>
              )}
              {player.metrics.popTime && (
                <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Catcher Pop Time</span>
                  <span className="text-sm font-bold text-white font-mono">{player.metrics.popTime}</span>
                </div>
              )}
              <div className="bg-[#141414] p-3 rounded-xl border border-[#262626] flex items-center justify-between">
                <span className="text-xs text-zinc-400">Commitment</span>
                <span className="text-xs font-semibold text-emerald-400">{player.commitmentStatus}</span>
              </div>
            </div>
          </div>

          {/* Player Scouting Bio */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#facc15] flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#eab308]" /> Coach Scouting Summary
            </h4>
            <div className="bg-[#161616] p-4 rounded-xl border border-[#262626] text-sm text-zinc-200 leading-relaxed">
              {player.bio}
            </div>
          </div>

          {/* College Scout Inquiry Box */}
          <div className="bg-[#181818] p-5 rounded-xl border border-[#ca8a04]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#facc15] uppercase tracking-wider">College Coach & Scout Inquiries</p>
              <p className="text-xs text-zinc-300 mt-1">
                To request video footage, verified transcripts, or schedule a workout evaluation for #{player.number} {player.name}:
              </p>
            </div>
            <a
              href={`mailto:${PROGRAM_INFO.gmEmail}?subject=Scout%20Inquiry%20-%20%23${player.number}%20${player.name}`}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] transition shadow-md border border-amber-300/40"
            >
              <Mail className="w-3.5 h-3.5" /> Scout #{player.number}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
