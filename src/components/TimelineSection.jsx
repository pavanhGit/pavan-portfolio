import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function TimelineSection({ theme }) {
  const isLight = theme === 'light';

  return (
    <section
      id="experience"
      className={`py-20 border-y transition-colors ${
        isLight
          ? 'bg-slate-100/80 border-slate-200'
          : 'bg-slate-950/40 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-14">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>03. Career Roadmap</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Professional Experience Timeline
          </h2>
          <p className={isLight ? 'text-slate-600 text-sm sm:text-base max-w-2xl' : 'text-slate-400 text-sm sm:text-base max-w-2xl'}>
            My journey through backend software engineering, delivering core infrastructure and scalable APIs.
          </p>
        </div>

        {/* Timeline List */}
        <div
          className={`relative border-l-2 ml-4 md:ml-8 space-y-12 text-left ${
            isLight ? 'border-slate-300' : 'border-slate-800'
          }`}
        >
          {experienceData.map((exp, idx) => (
            <div key={exp.organization + idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 group-hover:scale-125 transition-all duration-300 ${
                  isLight
                    ? 'bg-white border-sky-600 group-hover:border-amber-500'
                    : 'bg-slate-950 border-sky-500 group-hover:border-amber-400'
                }`}
              />

              {/* Card Container */}
              <div
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 space-y-4 ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700 shadow-xl'
                }`}
              >
                
                {/* Header Info */}
                <div
                  className={`flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-4 ${
                    isLight ? 'border-slate-200' : 'border-slate-800/80'
                  }`}
                >
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isLight
                          ? 'text-slate-900 group-hover:text-sky-600'
                          : 'text-white group-hover:text-sky-300'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <span className={isLight ? 'text-sm font-semibold text-amber-600' : 'text-sm font-semibold text-amber-400'}>
                      {exp.organization}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs code-font">
                    <span
                      className={`flex items-center space-x-1 px-2.5 py-1 rounded border ${
                        isLight
                          ? 'bg-slate-100 border-slate-200 text-slate-700'
                          : 'bg-slate-800 border-slate-700/60 text-slate-300'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className={`flex items-center space-x-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {exp.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2 pt-2">
                  <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Key Technical Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className={`flex items-start space-x-2 text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded text-[11px] code-font border ${
                        isLight
                          ? 'bg-slate-100 text-slate-700 border-slate-200'
                          : 'bg-slate-950 text-slate-300 border-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
