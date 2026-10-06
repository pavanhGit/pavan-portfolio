import React from 'react';
import { Quote, Terminal, UserCheck } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { testimonialsData } from '../data/portfolioData';

export default function TestimonialsSection({ theme }) {
  const isLight = theme === 'light';

  return (
    <section
      id="testimonials"
      className={`py-20 border-y transition-colors ${
        isLight
          ? 'bg-slate-100/80 border-slate-200'
          : 'bg-slate-950/40 border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-12">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>05. Peer Endorsements</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Recommendations & Feedback
          </h2>
          <p className={isLight ? 'text-slate-600 text-sm sm:text-base max-w-2xl' : 'text-slate-400 text-sm sm:text-base max-w-2xl'}>
            What engineering leads and architectural colleagues say about collaborating with Pavan H.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className={`relative p-6 md:p-8 rounded-2xl border flex flex-col justify-between transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-900/70 border-slate-800/80 shadow-xl'
              }`}
            >
              <div>
                <Quote className="w-8 h-8 text-sky-500/20 mb-4" />
                <p className={`text-sm leading-relaxed italic mb-6 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  "{t.content}"
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center font-bold text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{t.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold flex items-center space-x-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      <span>{t.name}</span>
                    </h4>
                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {t.role} — <span className={isLight ? 'text-sky-600' : 'text-sky-300'}>{t.organization}</span>
                    </p>
                  </div>
                </div>

                {t.linkedIn && (
                  <a
                    href={t.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 transition-colors ${isLight ? 'text-slate-500 hover:text-sky-600' : 'text-slate-400 hover:text-sky-400'}`}
                    title="View LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Helper Note for Pavan */}
        <div className={`mt-8 p-4 rounded-xl border text-xs text-center ${isLight ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-slate-900/40 border-slate-800/60 text-slate-400'}`}>
          💡 <span className="font-mono font-semibold">Pavan's Note:</span> Recommendations can easily be updated by editing <code className={isLight ? 'text-sky-700' : 'text-sky-300'}>src/data/portfolioData.js</code>.
        </div>

      </div>
    </section>
  );
}
