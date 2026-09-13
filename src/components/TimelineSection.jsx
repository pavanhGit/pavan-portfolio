import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-14">
          <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-mono tracking-wider uppercase">
            <Terminal className="w-4 h-4" />
            <span>03. Career Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My journey through backend software engineering, delivering core infrastructure and scalable APIs.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12 text-left">
          {experienceData.map((exp, idx) => (
            <div key={exp.organization + idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-500 group-hover:border-amber-400 group-hover:scale-125 transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-amber-400">
                      {exp.organization}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 code-font">
                    <span className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 border border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Technical Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                      className="px-2.5 py-1 rounded text-[11px] code-font bg-slate-950 text-slate-300 border border-slate-800"
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
