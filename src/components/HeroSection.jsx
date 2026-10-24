import React from 'react';
import { ArrowRight, Mail, Server, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ theme }) {
  const isLight = theme === 'light';

  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Badge */}
            <div>
              <div
                className={`inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border text-xs tracking-wide transition-colors ${
                  isLight
                    ? 'bg-slate-100 border-slate-300/80 text-slate-700 shadow-sm'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 backdrop-blur-md'
                }`}
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Open to Java Backend & Software Engineering Roles</span>
              </div>
            </div>

            {/* Main H1 Title */}
            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">pavan</span>
              </h1>
              
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                  isLight ? 'text-slate-800' : 'text-slate-200'
                }`}
              >
                {personalInfo.heroSubtitle}
              </h2>
            </div>

            {/* Value Proposition / Mission */}
            <p
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {personalInfo.heroParagraph}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {['Java 17 / 8+', 'Spring Boot', 'TCS BaNCS', 'REST APIs', 'SQL & Oracle', 'Apache Kafka', 'Redis', 'Docker', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 ${
                    isLight
                      ? 'bg-slate-100 text-sky-800 border-slate-200 hover:border-sky-400 hover:bg-slate-50'
                      : 'bg-slate-900/60 text-sky-300 border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-800/50'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/20 flex items-center space-x-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Work Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`px-8 py-4 rounded-xl font-semibold text-sm border flex items-center space-x-2 transition-all duration-200 ${
                  isLight
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm font-medium ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors py-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors py-1"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-pink-400 transition-colors py-1"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 hover:text-amber-400 transition-colors py-1"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>officialpavanh@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column - Enterprise Java Banking Terminal Window */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800/90 p-6 sm:p-8 shadow-2xl shadow-black/50 text-left overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs code-font text-slate-400 font-medium">
                  BankingTransactionService.java
                </span>
                <div className="text-[10px] code-font px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold">
                  TCS BaNCS
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2 text-xs code-font text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-amber-400">@Service</span>
                </div>
                <div>
                  <span className="text-amber-400">@Transactional</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-sky-300">isolation</span> = <span className="text-emerald-300">SERIALIZABLE</span>
                  <span className="text-slate-400">)</span>
                </div>
                <div>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-sky-300 font-semibold">BankingTransactionService</span> {"{"}
                </div>
                <div className="pl-4 text-slate-500 italic">
                  // Java 17 migrated core banking transaction handler
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public</span> TransactionResult processAccountEntry(
                </div>
                <div className="pl-8">
                  <span className="text-amber-400">@Valid</span> TransactionRequest request
                </div>
                <div className="pl-4">) {"{"}</div>
                <div className="pl-8 text-slate-400">
                  <span className="text-slate-500">// Verify ledger balance & enforce ACID rules</span>
                </div>
                <div className="pl-8">
                  accountRepository.validateAndLock(request.getAccId());
                </div>
                <div className="pl-8">
                  var status = ledgerEngine.postEntry(request);
                </div>
                <div className="pl-8 text-slate-500 italic">
                  // Asynchronous Kafka audit event dispatch
                </div>
                <div className="pl-8">
                  kafkaTemplate.send(<span className="text-emerald-300">"banking-audit-log"</span>, status);
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">return</span> TransactionResult.success(status);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              {/* Verified Metrics Footnote */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100+ Defects Solved</span>
                </div>
                <div className="flex items-center space-x-2 text-sky-400 font-mono">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>2 Bank Java 17 Upgrades</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
