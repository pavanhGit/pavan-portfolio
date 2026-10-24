import React, { useState } from 'react';
import { Server, Database, Cpu, Cloud, CheckCircle, Terminal, ShieldCheck, Layers, GitBranch } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection({ theme }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const isLight = theme === 'light';

  const categoryIcons = {
    'Backend Development': Server,
    'Banking & Enterprise': ShieldCheck,
    'Messaging & Event Processing': Cpu,
    'Database & Data Processing': Database,
    'Cloud, DevOps & Linux': Cloud,
    'API, Testing & Practices': CheckCircle,
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-3 mb-14">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>02. Technical Competencies</span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Skills & Technology Stack
          </h2>
          <p className={isLight ? 'text-slate-600 text-base sm:text-lg max-w-2xl font-light' : 'text-slate-400 text-base sm:text-lg max-w-2xl font-light'}>
            Key high-weightage competencies and enterprise tools I use to build robust, scalable backend systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 scale-[1.02]'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border border-slate-300 hover:text-slate-900 hover:border-slate-400'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Grid - Spacious 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left">
          {filteredData.map((group) => {
            const IconComponent = categoryIcons[group.category] || Server;
            return (
              <div
                key={group.category}
                className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isLight
                    ? 'bg-white border-slate-200/90 hover:border-sky-300 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/30 shadow-xl'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div
                    className={`flex items-center space-x-4 mb-8 pb-5 border-b ${
                      isLight ? 'border-slate-200' : 'border-slate-800/80'
                    }`}
                  >
                    <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {group.category}
                      </h3>
                      <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {group.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List with spacious breathing room */}
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/item p-4 rounded-2xl border transition-colors ${
                          isLight
                            ? 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-50 hover:border-slate-300'
                            : 'bg-slate-950/40 border-slate-800/50 hover:bg-slate-950/70 hover:border-slate-700/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-base font-semibold transition-colors ${
                              isLight
                                ? 'text-slate-900 group-hover/item:text-sky-600'
                                : 'text-slate-100 group-hover/item:text-sky-300'
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-[11px] code-font px-2.5 py-1 rounded-md border font-medium ${
                              isLight
                                ? 'bg-sky-50 text-sky-700 border-sky-200'
                                : 'bg-slate-800 text-sky-300 border-slate-700/60'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
