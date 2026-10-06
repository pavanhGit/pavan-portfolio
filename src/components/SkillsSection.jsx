import React, { useState } from 'react';
import { Server, Database, Cpu, Cloud, CheckCircle, Code2, Terminal } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection({ theme }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const isLight = theme === 'light';

  const categoryIcons = {
    'Backend Core': Server,
    'Databases & Caching': Database,
    'Distributed Systems & Messaging': Cpu,
    'Cloud, DevOps & Build Tools': Cloud,
    'Testing & Monitoring': CheckCircle,
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-12">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>02. Technical Competencies</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Skills & Technology Stack
          </h2>
          <p className={isLight ? 'text-slate-600 text-sm sm:text-base max-w-2xl' : 'text-slate-400 text-sm sm:text-base max-w-2xl'}>
            A structured breakdown of technologies I use to build scalable enterprise backend applications.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : isLight
                    ? 'bg-slate-200 text-slate-700 border border-slate-300 hover:text-slate-900 hover:border-slate-400'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredData.map((group) => {
            const IconComponent = categoryIcons[group.category] || Code2;
            return (
              <div
                key={group.category}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-sky-400 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/30'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div
                    className={`flex items-center space-x-3 mb-6 pb-4 border-b ${
                      isLight ? 'border-slate-200' : 'border-slate-800/80'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="group/item">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              isLight
                                ? 'text-slate-800 group-hover/item:text-sky-600'
                                : 'text-slate-200 group-hover/item:text-sky-300'
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] code-font px-2 py-0.5 rounded border ${
                              isLight
                                ? 'bg-slate-100 text-slate-600 border-slate-200'
                                : 'bg-slate-800 text-slate-400 border-slate-700/60'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
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
