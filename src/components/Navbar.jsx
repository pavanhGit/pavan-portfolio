import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Code, Terminal, Sparkles, FileText, Send, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isAdventureMode, onToggleMode, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isAdventureMode
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-amber-950/20'
            : isLight
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-200/50'
            : 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-2.5 text-left focus:outline-none"
          >
            <div
              className={`p-2 rounded-lg transition-colors ${
                isAdventureMode
                  ? 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 border border-amber-500/30'
                  : isLight
                  ? 'bg-sky-500/10 text-sky-600 group-hover:bg-sky-500/20 border border-sky-500/30'
                  : 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 border border-sky-500/30'
              }`}
            >
              {isAdventureMode ? (
                <Compass className="w-5 h-5 animate-pulse-amber" />
              ) : (
                <Terminal className="w-5 h-5 animate-pulse-cyan" />
              )}
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors ${
                  isLight && !isAdventureMode
                    ? 'text-slate-900 group-hover:text-sky-600'
                    : 'text-white group-hover:text-amber-400'
                }`}
              >
                {personalInfo.name}
              </span>
              <span
                className={`block text-[11px] code-font font-medium tracking-wide ${
                  isLight && !isAdventureMode ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {isAdventureMode ? '// Beyond the Code' : '<Java Backend Developer />'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          {!isAdventureMode && (
            <nav
              className={`hidden md:flex items-center space-x-1 lg:space-x-2 p-1.5 rounded-full border transition-colors ${
                isLight
                  ? 'bg-slate-100/90 border-slate-200 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Mode Switcher Button, Theme Switcher & CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {!isAdventureMode && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs code-font px-3 py-1.5 rounded-md transition-colors ${
                  isLight
                    ? 'text-slate-700 hover:text-sky-600 hover:bg-slate-200/60'
                    : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/50'
                }`}
              >
                GitHub
              </a>
            )}

            {/* Dark/Light Theme Switcher Toggle */}
            {!isAdventureMode && (
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-sky-400 hover:bg-slate-800'
                }`}
                title={isLight ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
                aria-label="Toggle Light / Dark Theme"
              >
                {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Crucial Transformation Button */}
            <button
              onClick={onToggleMode}
              className={`relative group overflow-hidden px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-md flex items-center space-x-2 cursor-pointer ${
                isAdventureMode
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-sky-500/25 ring-2 ring-sky-400/50'
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/30 ring-2 ring-amber-400/50'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                {isAdventureMode ? (
                  <>
                    <Code className="w-3.5 h-3.5" />
                    <span>Back to Engineering →</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 fill-amber-950" />
                    <span>Beyond the Code →</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button & Mobile Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            {!isAdventureMode && (
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-lg text-xs font-bold ${
                  isLight
                    ? 'bg-slate-200 text-amber-600 border border-slate-300'
                    : 'bg-slate-800 text-sky-300 border border-slate-700'
                }`}
                aria-label="Toggle theme"
              >
                {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={onToggleMode}
              className={`p-2 rounded-lg text-xs font-bold flex items-center space-x-1 ${
                isAdventureMode
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              {isAdventureMode ? <Code className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isLight && !isAdventureMode ? 'text-slate-700' : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn ${
            isLight && !isAdventureMode
              ? 'bg-white/95 border-slate-200'
              : 'bg-slate-900/95 border-slate-800'
          }`}
        >
          {!isAdventureMode && (
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    isLight
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <div
            className={`pt-2 border-t flex flex-col space-y-2 ${
              isLight && !isAdventureMode ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <button
              onClick={() => {
                onToggleMode();
                setMobileMenuOpen(false);
              }}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 ${
                isAdventureMode
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-amber-500 text-slate-950'
              }`}
            >
              {isAdventureMode ? (
                <>
                  <Code className="w-4 h-4" />
                  <span>Back to Engineering →</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Beyond the Code →</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
