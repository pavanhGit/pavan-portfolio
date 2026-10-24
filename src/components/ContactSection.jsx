import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Check, Copy, Terminal, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isLight = theme === 'light';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam protection
    setSubmitted(true);
    const subject = encodeURIComponent(formData.subject || `New Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Pavan,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Section Header - Symmetrical & Clean */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
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
            Whether you are looking to hire a dedicated Java Backend Engineer, discuss enterprise banking architecture, or collaborate on scalable distributed systems—my inbox is always open.
          </p>
        </div>

        {/* Symmetrical 2-Column Grid (Identical Card Dimensions & Equal Heights) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch text-left">
          
          {/* Left Card: Direct Contact Channels */}
          <div
            className={`rounded-3xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
              isLight
                ? 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300'
                : 'bg-slate-900/60 border-slate-800/80 shadow-2xl hover:border-slate-700'
            }`}
          >
            <div>
              {/* Card Header */}
              <div className="mb-6 pb-6 border-b border-slate-800/60">
                <h3 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Direct Channels
                </h3>
                <p className={`text-sm mt-1 font-light ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Feel free to reach out directly via email, phone, or any social network.
                </p>
              </div>

              {/* Contact Channels Stack */}
              <div className="space-y-4">
                
                {/* Email Channel */}
                <div
                  className={`p-5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-sky-300'
                      : 'bg-slate-950/80 border-slate-800 hover:border-sky-500/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[11px] font-mono uppercase tracking-wider block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                          Official Email
                        </span>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className={`text-sm sm:text-base font-semibold truncate code-font block hover:underline ${isLight ? 'text-slate-900' : 'text-white'}`}
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center space-x-1.5 transition-colors shrink-0 cursor-pointer self-start sm:self-auto ${
                        isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Copied!</span>
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

                {/* Phone & WhatsApp Channel */}
                <div
                  className={`p-5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-emerald-300'
                      : 'bg-slate-950/80 border-slate-800 hover:border-emerald-500/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[11px] font-mono uppercase tracking-wider block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                          Phone & WhatsApp
                        </span>
                        <a
                          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                          className={`text-sm sm:text-base font-semibold code-font block hover:underline ${isLight ? 'text-slate-900' : 'text-white'}`}
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0 self-start sm:self-auto">
                      <a
                        href={`https://wa.me/919945270658`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600/30 border border-emerald-600/30 flex items-center space-x-1.5 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center space-x-1 transition-colors cursor-pointer ${
                          isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                        title="Copy phone to clipboard"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500 font-bold">Copied!</span>
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
                </div>

                {/* Symmetrical Social Profiles 3-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  
                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl border flex flex-col justify-between transition-all group ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 hover:border-sky-400 text-slate-700'
                        : 'bg-slate-950/80 border-slate-800 hover:border-sky-500/40 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <LinkedinIcon className="w-5 h-5 text-sky-500" />
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        LinkedIn
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 truncate block">
                        pavan-h
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl border flex flex-col justify-between transition-all group ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 hover:border-sky-400 text-slate-700'
                        : 'bg-slate-950/80 border-slate-800 hover:border-sky-500/40 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <GithubIcon className="w-5 h-5 text-sky-400" />
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        GitHub
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 truncate block">
                        pavanhGit
                      </span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl border flex flex-col justify-between transition-all group ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 hover:border-pink-400 text-slate-700'
                        : 'bg-slate-950/80 border-slate-800 hover:border-pink-500/40 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <InstagramIcon className="w-5 h-5 text-pink-500" />
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-500 transition-colors" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        Instagram
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 truncate block">
                        pavan._.h
                      </span>
                    </div>
                  </a>

                </div>

              </div>
            </div>

            {/* Bottom Location & Status Pill */}
            <div
              className={`mt-6 pt-5 border-t flex items-center justify-between text-xs ${
                isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800/80 text-slate-400'
              }`}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Based in Bengaluru, India</span>
              </div>
              <span className="font-mono text-emerald-500 font-semibold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Roles</span>
              </span>
            </div>
          </div>

          {/* Right Card: Direct Message Form (Exact Matching Outer Card Dimensions) */}
          <div
            className={`rounded-3xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
              isLight
                ? 'bg-white border-slate-200/90 shadow-sm'
                : 'bg-slate-900/60 border-slate-800/80 shadow-2xl'
            }`}
          >
            <div>
              {/* Card Header */}
              <div className="mb-6 pb-6 border-b border-slate-800/60">
                <h3 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Send a Direct Message
                </h3>
                <p className={`text-sm mt-1 font-light ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Fill in your details below and I will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 space-y-4">
                  <div className="flex items-center space-x-3 font-bold text-xl">
                    <Check className="w-7 h-7 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed font-light">
                    Thank you for reaching out, Pavan will get back to you shortly at your email address.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' }); }}
                    className="mt-3 px-5 py-2.5 rounded-xl bg-emerald-900 text-xs font-bold text-white hover:bg-emerald-800 cursor-pointer"
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

                  {/* Name and Email in 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                            : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Engineer Opportunity / System Collaboration"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or the backend engineering challenge..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                          : 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Anti-Spam Footer */}
            <div
              className={`mt-6 pt-5 border-t text-center text-xs flex items-center justify-center space-x-1.5 ${
                isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Protected with client-side anti-spam verification</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
