import React, { useState } from 'react';
import { PageTab, GalleryPhoto } from '../../types';
import { GALLERY_PHOTOS, PROGRAM_INFO } from '../../data/mockData';
import { CavaliersLogo } from '../CavaliersLogo';
import { Image, X, ChevronLeft, ChevronRight, Maximize2, Send, Camera, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenRecruitModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ setActiveTab, onOpenRecruitModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'All', label: 'All Photos' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'training', label: 'Training & Development' },
    { id: 'games', label: 'Gameday Action' },
    { id: 'campus', label: 'Campus & Dorms' },
  ];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleNext = () => {
    if (!lightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto border-b border-[#222222] pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ca8a04]/40 text-xs font-bold uppercase tracking-widest text-[#facc15]">
          <Camera className="w-3.5 h-3.5 text-[#eab308]" /> Visual Experience
        </div>
        <h1 className="font-athletic text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          CAVALIERS PHOTO GALLERY
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Explore life inside the Oklahoma Cavaliers program at St. Gregory's campus—from high-intensity weight room sessions and bullpen mechanics to gameday competition and campus living.
        </p>
      </div>

      {/* Category Filter Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-zinc-950 shadow-md font-black border border-amber-300/40'
                : 'bg-[#121212] text-zinc-300 border border-[#262626] hover:text-white hover:bg-[#181818]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setLightboxPhoto(photo)}
            className="group relative rounded-2xl overflow-hidden bg-[#121212] border border-[#262626] hover:border-[#ca8a04] transition duration-300 cursor-pointer shadow-lg aspect-4/3"
          >
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-90 transition" />

            {/* Overlay Details */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#0e0e0e]/80 border border-[#ca8a04]/40 text-[#facc15] backdrop-blur-md">
                  {photo.categoryLabel}
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#0e0e0e]/70 text-zinc-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition border border-[#262626]">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="space-y-1 transform group-hover:translate-y-0 transition">
                <h3 className="font-athletic text-2xl font-bold text-white uppercase drop-shadow">
                  {photo.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#0e0e0e] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#141414]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#1c1c1c] border border-[#ca8a04]/40 text-[#facc15]">
                  {lightboxPhoto.categoryLabel}
                </span>
                <h3 className="font-athletic text-xl font-bold text-white uppercase truncate">
                  {lightboxPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-[#1c1c1c] border border-[#2c2c2c]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage with Controls */}
            <div className="relative aspect-16/10 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="max-h-full max-w-full object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#eab308] hover:text-zinc-950 transition border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#eab308] hover:text-zinc-950 transition border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Description Footer */}
            <div className="p-6 bg-[#141414] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#262626]">
              <p className="text-xs text-zinc-300 max-w-xl">
                {lightboxPhoto.description}
              </p>
              <button
                onClick={() => {
                  setLightboxPhoto(null);
                  onOpenRecruitModal();
                }}
                className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] transition shrink-0 border border-amber-300/40"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recruitment Callout */}
      <section className="bg-gradient-to-r from-[#171717] via-[#1a1a1a] to-[#121212] p-8 sm:p-10 rounded-3xl border border-[#ca8a04]/40 text-center space-y-4 shadow-xl">
        <CavaliersLogo variant="crest" size="md" className="mx-auto" />
        <h3 className="font-athletic text-3xl font-black text-white uppercase">
          EXPERIENCE THE CAVALIER ENVIRONMENT IN PERSON
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
          Contact General Manager Coach Christopher Brown to arrange a private campus and facility tour at St. Gregory's in Shawnee, OK.
        </p>
        <button
          onClick={onOpenRecruitModal}
          className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] hover:from-[#fef08a] hover:to-[#eab308] transition shadow-lg border border-amber-300/40"
        >
          <Send className="w-4 h-4 inline mr-2" /> Start Recruitment Profile
        </button>
      </section>
    </div>
  );
};
