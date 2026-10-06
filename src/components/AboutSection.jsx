import React from 'react';
import { UserCheck, ShieldCheck, Zap, Layers, Compass, Award, Terminal } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function AboutSection({ theme }) {
  const isLight = theme === 'light';

  const iconMap = {
    'Resilient Design': ShieldCheck,
    'Performance First': Zap,
    'Clean Architecture': Layers,
    'Continuous Learning': Compass,
  };

  return (
    <section
      id="about"
      className={`py-20 relative border-y transition-colors ${
        isLight
          ? 'bg-slate-100/80 border-slate-200'
          : 'bg-slate-950/40 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left space-y-2 mb-12">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>01. Engineering Profile</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            About Pavan H
          </h2>
          <p className={isLight ? 'text-slate-600 text-sm sm:text-base max-w-2xl' : 'text-slate-400 text-sm sm:text-base max-w-2xl'}>
            A look into my background, backend engineering philosophy, and architectural journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div
              className={`prose max-w-none space-y-4 text-base leading-relaxed ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <p>{aboutData.summary}</p>
              <p>{aboutData.journey}</p>
              <p>{aboutData.architectureGoal}</p>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div
                className={`p-4 rounded-xl border text-left transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className="text-2xl font-bold text-sky-600 dark:text-sky-400 font-mono block">Java 17/21</span>
                <span className={`text-xs mt-1 block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Primary Stack Focus</span>
              </div>
              <div
                className={`p-4 rounded-xl border text-left transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-mono block">Sub-50ms</span>
                <span className={`text-xs mt-1 block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Target API Latency</span>
              </div>
              <div
                className={`p-4 rounded-xl border text-left col-span-2 sm:col-span-1 transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-sm'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono block">99.9%</span>
                <span className={`text-xs mt-1 block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Target System Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Core Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`text-lg font-semibold text-left flex items-center space-x-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              <Award className="w-5 h-5 text-amber-500" />
              <span>Engineering Principles</span>
            </h3>

            <div className="space-y-3">
              {aboutData.coreValues.map((val) => {
                const IconComponent = iconMap[val.title] || Zap;
                return (
                  <div
                    key={val.title}
                    className={`p-4 rounded-xl border transition-colors text-left group ${
                      isLight
                        ? 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg transition-colors mt-0.5 ${isLight ? 'bg-slate-100 text-sky-600' : 'bg-slate-800 text-sky-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold transition-colors ${isLight ? 'text-slate-900 group-hover:text-sky-600' : 'text-white group-hover:text-sky-300'}`}>
                          {val.title}
                        </h4>
                        <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
