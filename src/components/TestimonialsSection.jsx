import React from 'react';
import { Quote, Terminal, UserCheck } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { testimonialsData } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-mono tracking-wider uppercase">
            <Terminal className="w-4 h-4" />
            <span>05. Peer Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Recommendations & Feedback
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            What engineering leads and architectural colleagues say about collaborating with Pavan H.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="relative p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between shadow-xl"
            >
              <div>
                <Quote className="w-8 h-8 text-sky-500/20 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center text-slate-400 font-bold text-xs">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{t.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                      <span>{t.name}</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.role} — <span className="text-sky-300">{t.organization}</span>
                    </p>
                  </div>
                </div>

                {t.linkedIn && (
                  <a
                    href={t.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-sky-400 transition-colors"
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
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400 text-center">
          💡 <span className="font-mono text-slate-300">Pavan's Note:</span> Recommendations can easily be updated by editing <code className="text-sky-300">src/data/portfolioData.js</code>.
        </div>

      </div>
    </section>
  );
}
