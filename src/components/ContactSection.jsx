import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Check, Copy, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isLight = theme === 'light';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam protection check
    setSubmitted(true);
    const subject = encodeURIComponent(formData.subject || `New Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Pavan,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 text-left items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div
                className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
                  isLight ? 'text-sky-600' : 'text-sky-400'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>04. Get In Touch</span>
              </div>
              <h2
                className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                Have a backend challenge worth solving?
              </h2>
              <p className={isLight ? 'text-slate-600 text-base sm:text-lg leading-relaxed font-light' : 'text-slate-400 text-base sm:text-lg leading-relaxed font-light'}>
                Whether you are looking to hire a dedicated Java Backend Engineer, discuss microservices architecture, or collaborate on scalable distributed systems—my inbox is always open.
              </p>
            </div>

            {/* Direct Email Card with Quick Copy */}
            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/60 border-slate-800/80 shadow-xl'
              }`}
            >
              <span className={`text-xs font-mono uppercase font-semibold tracking-wider block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Direct Email Contact
              </span>
              <div
                className={`flex items-center justify-between p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3.5 truncate">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <Mail className="w-5 h-5 shrink-0" />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-sm sm:text-base font-semibold truncate code-font hover:underline ${isLight ? 'text-slate-900' : 'text-white'}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center space-x-1.5 transition-colors shrink-0 cursor-pointer ${
                    isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div
              className={`p-6 rounded-3xl border space-y-3 transition-all ${
                isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/60 border-slate-800/80 shadow-xl'
              }`}
            >
              <span className={`text-xs font-mono uppercase font-semibold tracking-wider block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Direct Phone & WhatsApp
              </span>
              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3.5 truncate">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5 shrink-0" />
                  </div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className={`text-sm sm:text-base font-semibold truncate code-font hover:underline ${isLight ? 'text-slate-900' : 'text-white'}`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <a
                    href={`https://wa.me/919945270658`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-medium bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600/30 border border-emerald-600/30 flex items-center space-x-1.5 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center space-x-1 transition-colors cursor-pointer ${
                      isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 sm:p-5 rounded-2xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-sky-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40 text-slate-300 hover:text-white shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <LinkedinIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-sm sm:text-base font-semibold">Connect on LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400">linkedin.com/in/pavan-h-808a1a19b →</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 sm:p-5 rounded-2xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-sky-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40 text-slate-300 hover:text-white shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <GithubIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span className="text-sm sm:text-base font-semibold">Explore Repositories on GitHub</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400">github.com/pavanhGit →</span>
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 sm:p-5 rounded-2xl border flex items-center justify-between transition-all group ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-pink-400 text-slate-700 hover:text-slate-900 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-pink-500/40 text-slate-300 hover:text-white shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <InstagramIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-sm sm:text-base font-semibold">Follow on Instagram</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-pink-500">instagram.com/pavan._.h/ →</span>
              </a>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 md:p-12 rounded-3xl border space-y-8 ${
                isLight
                  ? 'bg-white border-slate-200/90 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800/80 shadow-2xl'
              }`}
            >
              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Send a Direct Message
                </h3>
                <p className={`text-sm sm:text-base mt-2 font-light ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Fill in your details below and I will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 space-y-4">
                  <div className="flex items-center space-x-3 font-bold text-xl">
                    <Check className="w-7 h-7 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed">
                    Thank you for reaching out, Pavan H will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' }); }}
                    className="mt-3 px-5 py-2.5 rounded-xl bg-emerald-900 text-xs font-bold text-white hover:bg-emerald-800 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Engineer Opportunity / Project Collaboration"
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or the backend engineering challenge..."
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-xl shadow-sky-500/20 flex items-center justify-center space-x-2.5 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Direct Message</span>
                  </button>

                  <p className="text-xs text-slate-500 text-center flex items-center justify-center space-x-1.5 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
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
