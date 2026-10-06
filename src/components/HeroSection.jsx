import React from 'react';
import { ShieldCheck, ArrowRight, FileText, Server, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ onToggleMode, theme }) {
  const isLight = theme === 'light';

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs transition-colors ${
                isLight
                  ? 'bg-slate-200/80 border-slate-300 text-slate-700'
                  : 'bg-slate-900/90 border-slate-800 text-slate-300'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">Available for Software Engineer & Backend Roles</span>
            </div>

            {/* Main H1 Title - SEO Keyword Anchored */}
            <div className="space-y-2">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                Pavan H
              </h1>
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text ${
                  isLight
                    ? 'bg-gradient-to-r from-sky-600 via-indigo-600 to-amber-600'
                    : 'bg-gradient-to-r from-sky-400 via-sky-200 to-amber-300'
                }`}
              >
                Java Backend Developer / Software Engineer
              </h2>
            </div>

            {/* Value Proposition */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Architecting resilient, high-throughput microservices and distributed backend systems with{' '}
              <strong className={isLight ? 'text-sky-700 font-semibold' : 'text-sky-300 font-semibold'}>
                Java 17/21
              </strong>
              ,{' '}
              <strong className={isLight ? 'text-amber-700 font-semibold' : 'text-amber-300 font-semibold'}>
                Spring Boot
              </strong>
              , PostgreSQL, Redis, and Apache Kafka. Focused on sub-50ms latency, zero-downtime deployments, and ACID-compliant API contracts.
            </p>

            {/* Key Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java 17/21', 'Spring Boot', 'Spring Security', 'REST APIs', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                    isLight
                      ? 'bg-slate-200/80 text-sky-800 border-slate-300 hover:border-sky-500'
                      : 'bg-slate-900/80 text-sky-300 border-slate-800/80 hover:border-sky-500/40'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 flex items-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Backend Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl font-semibold text-sm border flex items-center space-x-2 transition-all ${
                  isLight
                    ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                }`}
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onToggleMode}
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 hover:text-amber-700 text-xs font-bold flex items-center space-x-1.5 transition-all hover:border-amber-400/60 cursor-pointer"
              >
                <span>Beyond the Code →</span>
              </button>
            </div>

            {/* Social & Resume Links */}
            <div
              className={`flex flex-wrap items-center gap-6 pt-4 text-xs ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-600 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Instagram</span>
              </a>
              <a
                href={personalInfo.email ? `mailto:${personalInfo.email}` : '#contact'}
                className="flex items-center space-x-2 hover:text-amber-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Email Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column - Interactive Java Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950/95 border border-slate-800 p-4 sm:p-5 shadow-2xl shadow-slate-900/40 text-left overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] code-font text-slate-400 font-medium">
                  PaymentController.java — Spring Boot 3
                </span>
                <div className="text-[10px] code-font px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  200 OK
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-1.5 text-xs code-font text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-amber-400">@RestController</span>
                </div>
                <div>
                  <span className="text-amber-400">@RequestMapping</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-emerald-300">"/api/v1/payments"</span>
                  <span className="text-slate-400">)</span>
                </div>
                <div>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-sky-300">PaymentController</span> {"{"}
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-amber-400">@PostMapping</span>
                  <span className="text-slate-300">(</span>
                  <span className="text-emerald-300">"/process"</span>
                  <span className="text-slate-300">)</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public</span> ResponseEntity&lt;PaymentResponse&gt; process(
                </div>
                <div className="pl-8">
                  <span className="text-amber-400">@RequestHeader</span>
                  <span className="text-slate-400">(</span>
                  <span className="text-emerald-300">"X-Idempotency-Key"</span>
                  <span className="text-slate-400">)</span> String key,
                </div>
                <div className="pl-8">
                  <span className="text-amber-400">@Valid @RequestBody</span> PaymentRequest req
                </div>
                <div className="pl-4">) {"{"}</div>
                <div className="pl-8 text-slate-400">
                  <span className="text-slate-500">// Redis idempotency check & Kafka event dispatch</span>
                </div>
                <div className="pl-8">
                  var result = <span className="text-sky-300">paymentService</span>.execute(key, req);
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">return</span> ResponseEntity.ok(result);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              {/* Live Metrics Footnote */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3,500 RPS Tested</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Server className="w-3.5 h-3.5 text-sky-400" />
                  <span>Avg Latency: 18ms</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
