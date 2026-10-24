import React from 'react';
import { Quote, Terminal } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { testimonialsData } from '../data/portfolioData';

export default function TestimonialsSection({ theme }) {
  const isLight = theme === 'light';

  return (
    <section
      id="testimonials"
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
            <span>05. Peer Endorsements</span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Recommendations & Feedback
          </h2>
          <p className={isLight ? 'text-slate-600 text-base sm:text-lg max-w-2xl font-light' : 'text-slate-400 text-base sm:text-lg max-w-2xl font-light'}>
            What engineering leads and architectural colleagues say about collaborating with Pavan H.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className={`relative p-8 md:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                isLight
                  ? 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300'
                  : 'bg-slate-900/60 border-slate-800/80 shadow-xl hover:border-slate-700'
              }`}
            >
              <div>
                <Quote className="w-10 h-10 text-sky-500/25 mb-6" />
                <p className={`text-base sm:text-lg leading-relaxed italic mb-8 font-light ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  "{t.content}"
                </p>
              </div>

              <div className={`pt-6 border-t flex items-center justify-between ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full border overflow-hidden flex items-center justify-center font-bold text-sm ${isLight ? 'bg-sky-50 border-sky-200 text-sky-700' : 'bg-slate-800 border-slate-700 text-sky-300'}`}>
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{t.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold flex items-center space-x-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      <span>{t.name}</span>
                    </h4>
                    <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {t.role} — <span className={isLight ? 'text-sky-600 font-medium' : 'text-sky-300 font-medium'}>{t.organization}</span>
                    </p>
                  </div>
                </div>

                {t.linkedIn && (
                  <a
                    href={t.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isLight
                        ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600'
                        : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                    }`}
                    title="View LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
