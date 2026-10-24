import React, { useState } from 'react';
import { Camera, Terminal, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function AboutSection({ theme }) {
  const isLight = theme === 'light';
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className={`py-28 md:py-36 relative border-y transition-colors duration-300 ${
        isLight
          ? 'bg-slate-50/70 border-slate-200'
          : 'bg-slate-950/40 border-slate-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>01. Engineering Profile</span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            About Me
          </h2>
          <p className={isLight ? 'text-slate-600 text-base sm:text-lg max-w-2xl font-light' : 'text-slate-400 text-base sm:text-lg max-w-2xl font-light'}>
            4 years of enterprise backend engineering, banking application modernization, and problem solving.
          </p>
        </div>

        {/* 2-Column Layout: Left Photo Space | Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dedicated Rectangular Photo Placeholder */}
          <div className="lg:col-span-5 sticky top-28">
            <div
              className={`relative w-full aspect-[4/5] rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-6 text-center ${
                isLight
                  ? 'bg-gradient-to-b from-white to-slate-100 border-slate-300 shadow-xl shadow-slate-200/60'
                  : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-slate-800 shadow-2xl shadow-black/60'
              }`}
            >
              {/* Optional Photo Image (auto-displays if profile-photo.jpg exists in public folder) */}
              {!imgError ? (
                <img
                  src="/profile-photo.jpg"
                  alt="Pavan H"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              ) : null}

              {/* Elegant Placeholder Frame (visible if photo not yet uploaded) */}
              {imgError && (
                <div className="space-y-5 z-10 flex flex-col items-center max-w-xs">
                  <div
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-dashed transition-all ${
                      isLight
                        ? 'border-sky-400 bg-sky-50 text-sky-600'
                        : 'border-sky-500/40 bg-sky-500/10 text-sky-400'
                    }`}
                  >
                    <Camera className="w-10 h-10 animate-pulse" />
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Pavan H
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${isLight ? 'text-sky-700' : 'text-sky-300'}`}>
                      Java Backend Developer
                    </p>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono text-center ${
                      isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>📷 Photo Space: Drop your photo in </span>
                    <strong className="block text-sky-500 mt-0.5">public/profile-photo.jpg</strong>
                  </div>
                </div>
              )}

              {/* Ambient Badge Overlay at bottom */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div
                  className={`p-3 rounded-2xl backdrop-blur-md border text-xs flex items-center justify-between ${
                    isLight
                      ? 'bg-white/80 border-slate-200 text-slate-800 shadow-md'
                      : 'bg-slate-900/80 border-slate-800/80 text-slate-200 shadow-xl'
                  }`}
                >
                  <span className="font-semibold">TCS Core Banking</span>
                  <span className="font-mono text-emerald-500 font-bold">4 Yrs Exp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Provided by User */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed font-light">
              {aboutData.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={isLight ? 'text-slate-700' : 'text-slate-300'}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/60">
              {aboutData.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    isLight
                      ? 'bg-white border-slate-200 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800/80'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-500 font-mono tracking-tight block">
                    {stat.value}
                  </span>
                  <span className={`text-xs mt-1.5 block font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {stat.label}
                  </span>
                  <span className={`text-[11px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
