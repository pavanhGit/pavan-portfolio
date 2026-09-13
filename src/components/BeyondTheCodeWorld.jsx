import React, { useState } from 'react';
import { Compass, Bike, Flame, Mountain, MapPin, Award, CheckCircle2, Clock, Sparkles, Code, ArrowLeft } from 'lucide-react';
import { adventuresData, personalInfo } from '../data/portfolioData';

export default function BeyondTheCodeWorld({ onBackToEngineering }) {
  const [filterBucket, setFilterBucket] = useState('all');

  const filteredBucket =
    filterBucket === 'all'
      ? adventuresData.bucketList
      : adventuresData.bucketList.filter((item) => item.status === filterBucket);

  return (
    <div className="grid-bg-adventure min-h-screen text-slate-100 pt-28 pb-20 transition-all duration-500 animate-fadeIn">
      
      {/* Top Banner Navigation back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Compass className="w-5 h-5 animate-pulse-amber" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                You are exploring:
              </span>
              <h1 className="text-lg font-bold text-white">
                Pavan H — Beyond the Code
              </h1>
            </div>
          </div>

          <button
            onClick={onBackToEngineering}
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering →</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner for Adventure World */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Human Behind the Code</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 tracking-tight">
            {adventuresData.tagline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {adventuresData.subtext}
          </p>
        </div>

        {/* Achievement Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {adventuresData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-card-adventure text-left relative overflow-hidden group hover:scale-[1.03] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-400 group-hover:opacity-20 transition-opacity">
                <Flame className="w-16 h-16" />
              </div>

              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 block tracking-tight">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold text-white mt-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Adventure Stories Grid */}
        <div className="space-y-8 text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Mountain className="w-6 h-6 text-amber-400" />
              <span>Adventures & Physical Challenges</span>
            </h3>
            <p className="text-sm text-slate-400">
              Personal endurance logs, physical milestones, and lessons taken back into engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventuresData.stories.map((story) => (
              <div
                key={story.id}
                className="p-6 rounded-2xl glass-card-adventure flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {story.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {story.date}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {story.title}
                  </h4>

                  <p className="text-xs font-semibold text-amber-400 italic">
                    "{story.highlight}"
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-mono text-amber-300">
                  <span>{story.statsTag}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Bucket List Matrix */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span>The Bucket List Matrix</span>
              </h3>
              <p className="text-sm text-slate-400">
                Completed challenges, active missions, and planned crazy ideas.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2">
              {['all', 'completed', 'in-progress', 'planned'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterBucket(st)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                    filterBucket === st
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBucket.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="shrink-0">
                    {item.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {item.status === 'in-progress' && <Clock className="w-5 h-5 text-amber-400 animate-pulse" />}
                    {item.status === 'planned' && <Compass className="w-5 h-5 text-sky-400" />}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {item.task}
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                      item.status === 'completed'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : item.status === 'in-progress'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-sky-950 text-sky-300 border border-sky-800'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Return */}
        <div className="pt-12 border-t border-amber-500/20 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Ready to explore the engineering side?
          </h3>
          <button
            onClick={onBackToEngineering}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-sky-500/20 inline-flex items-center space-x-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>Return to Java Backend Engineering →</span>
          </button>
        </div>

      </div>
    </div>
  );
}
