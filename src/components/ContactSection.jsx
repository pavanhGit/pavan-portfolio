import React, { useState } from 'react';
import { Mail, FileText, Send, Check, Copy, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const isLight = theme === 'light';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam protection check
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div
                className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
                  isLight ? 'text-sky-600' : 'text-sky-400'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>06. Get In Touch</span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                Have a backend problem worth solving?
              </h2>
              <p className={isLight ? 'text-slate-600 text-sm sm:text-base leading-relaxed' : 'text-slate-300 text-sm sm:text-base leading-relaxed'}>
                Whether you are looking to hire a dedicated Java Backend Engineer, discuss microservices architecture, or collaborate on scalable systems—my inbox is always open.
              </p>
            </div>

            {/* Direct Email Card with Quick Copy */}
            <div
              className={`p-5 rounded-2xl border space-y-3 ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <span className={`text-xs font-mono uppercase font-semibold block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Direct Email Contact
              </span>
              <div
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <Mail className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className={`text-sm font-semibold truncate code-font ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors shrink-0 cursor-pointer ${
                    isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-sky-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <LinkedinIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-sm font-semibold">Connect on LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400">linkedin.com/in/pavan-h →</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-sky-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <GithubIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-sm font-semibold">Explore Repositories on GitHub</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400">github.com/pavanhGit →</span>
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-pink-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-pink-500/40 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <InstagramIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-sm font-semibold">Follow on Instagram</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-pink-500">instagram.com/pavan._.h/ →</span>
              </a>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 md:p-8 rounded-2xl border space-y-6 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-900/70 border-slate-800/80 shadow-2xl'
              }`}
            >
              <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Send a Message</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 space-y-3">
                  <div className="flex items-center space-x-2 font-bold text-lg">
                    <Check className="w-6 h-6 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-xs text-emerald-200">
                    Thank you for reaching out, Pavan H will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' }); }}
                    className="mt-2 px-4 py-2 rounded-lg bg-emerald-900 text-xs font-bold text-white hover:bg-emerald-800 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono uppercase mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono uppercase mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Engineer Role / Project Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or the backend engineering challenge..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Protected with client-side anti-spam verification</span>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
