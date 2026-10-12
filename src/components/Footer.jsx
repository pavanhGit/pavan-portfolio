import React from 'react';
import { Terminal, Mail, Phone, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ isAdventureMode, onToggleMode, theme }) {
  const isLight = theme === 'light';

  return (
    <footer
      className={`py-12 border-t text-left transition-colors duration-500 ${
        isAdventureMode
          ? 'bg-[#09090b] border-amber-500/20 text-slate-400'
          : isLight
          ? 'bg-slate-100 border-slate-200 text-slate-600'
          : 'bg-slate-950 border-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b ${
            isLight && !isAdventureMode ? 'border-slate-200' : 'border-slate-800/80'
          }`}
        >
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div
                className={`p-1.5 rounded ${
                  isAdventureMode
                    ? 'bg-amber-500/20 text-amber-400'
                    : isLight
                    ? 'bg-sky-500/10 text-sky-600'
                    : 'bg-sky-500/20 text-sky-400'
                }`}
              >
                <Terminal className="w-4 h-4" />
              </div>
              <span className={`text-lg font-bold tracking-tight ${isLight && !isAdventureMode ? 'text-slate-900' : 'text-white'}`}>
                {personalInfo.name}
              </span>
            </div>
            <p className={`text-xs max-w-md leading-relaxed ${isLight && !isAdventureMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Java Backend Developer & Software Engineer crafting scalable, resilient microservices, high-performance REST APIs, and distributed event-driven systems.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <h4 className={`text-xs font-mono uppercase font-bold ${isLight && !isAdventureMode ? 'text-slate-900' : 'text-slate-300'}`}>
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#hero" className={`transition-colors ${isLight && !isAdventureMode ? 'hover:text-sky-600' : 'hover:text-sky-400'}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={`transition-colors ${isLight && !isAdventureMode ? 'hover:text-sky-600' : 'hover:text-sky-400'}`}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className={`transition-colors ${isLight && !isAdventureMode ? 'hover:text-sky-600' : 'hover:text-sky-400'}`}>
                  Skills & Stack
                </a>
              </li>
              <li>
                <a href="#projects" className={`transition-colors ${isLight && !isAdventureMode ? 'hover:text-sky-600' : 'hover:text-sky-400'}`}>
                  Projects & Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className={`transition-colors ${isLight && !isAdventureMode ? 'hover:text-sky-600' : 'hover:text-sky-400'}`}>
                  Contact & Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Mode Switch */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-mono uppercase font-bold ${isLight && !isAdventureMode ? 'text-slate-900' : 'text-slate-300'}`}>
              Connect & Brand
            </h4>
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isLight && !isAdventureMode
                    ? 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border-slate-300'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isLight && !isAdventureMode
                    ? 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border-slate-300'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isLight && !isAdventureMode
                    ? 'bg-white text-pink-600 hover:text-pink-700 hover:bg-slate-200 border-slate-300'
                    : 'bg-slate-900 text-pink-400 hover:text-pink-300 hover:bg-slate-800 border-slate-800'
                }`}
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2 rounded-lg border transition-colors ${
                  isLight && !isAdventureMode
                    ? 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border-slate-300'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onToggleMode}
              className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 flex items-center space-x-1 pt-1 cursor-pointer font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAdventureMode ? 'Switch to Engineering Mode' : 'Switch to Beyond the Code Mode'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0 ${isLight && !isAdventureMode ? 'text-slate-500' : 'text-slate-500'}`}>
          <p>© {new Date().getFullYear()} Pavan H. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <a href="/sitemap.xml" className="hover:text-slate-700 dark:hover:text-slate-400">
              Sitemap.xml
            </a>
            <span>•</span>
            <a href="/robots.txt" className="hover:text-slate-700 dark:hover:text-slate-400">
              Robots.txt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
