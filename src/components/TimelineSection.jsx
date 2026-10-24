import React from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal, Briefcase, Layers } from 'lucide-react';
import { workExperienceData } from '../data/portfolioData';

export default function TimelineSection({ theme }) {
  const isLight = theme === 'light';

  return (
    <section
      id="experience"
      className={`py-28 md:py-36 border-y transition-colors duration-300 ${
        isLight
          ? 'bg-slate-50/70 border-slate-200'
          : 'bg-slate-950/40 border-slate-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-3 mb-16">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>03. Work Experience</span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Work Experience & Key Systems
          </h2>
          <p className={isLight ? 'text-slate-600 text-base sm:text-lg max-w-2xl font-light' : 'text-slate-400 text-base sm:text-lg max-w-2xl font-light'}>
            Production backend development across mission-critical banking platforms and high-throughput e-commerce systems.
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="space-y-12 text-left">
          {workExperienceData.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className={`p-8 md:p-12 rounded-3xl border transition-all duration-300 space-y-8 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  : 'bg-slate-900/60 border-slate-800/80 shadow-2xl hover:border-slate-700'
              }`}
            >
              
              {/* Header Info */}
              <div
                className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6 ${
                  isLight ? 'border-slate-200' : 'border-slate-800/80'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${
                        isLight
                          ? 'bg-sky-50 text-sky-700 border-sky-200'
                          : 'bg-slate-950 text-sky-300 border-slate-800'
                      }`}
                    >
                      {exp.domain}
                    </span>
                    <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {exp.company}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {exp.title}
                  </h3>

                  <p className={`text-sm sm:text-base font-semibold ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs code-font">
                  <span
                    className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border ${
                      isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-700'
                        : 'bg-slate-800 border-slate-700/60 text-slate-300'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-sky-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className={`text-base sm:text-lg leading-relaxed font-light ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {exp.overview}
              </p>

              {/* Key Contributions */}
              <div className="space-y-4 pt-1">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  Key Contributions & Impact
                </h4>
                <ul className="space-y-3.5">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className={`flex items-start space-x-3.5 text-sm sm:text-base leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/60">
                <span className={`text-xs font-mono uppercase font-semibold block mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors ${
                        isLight
                          ? 'bg-slate-100 text-sky-800 border-slate-200'
                          : 'bg-slate-950 text-sky-300 border-slate-800'
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
