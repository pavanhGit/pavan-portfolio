import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Code, Terminal, Sparkles, FileText, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isAdventureMode, onToggleMode }) {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isAdventureMode
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-amber-950/20'
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
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-[11px] code-font text-slate-400 font-medium tracking-wide">
                {isAdventureMode ? '// Beyond the Code' : '<Java Backend Developer />'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          {!isAdventureMode && (
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Mode Switcher Button & CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {!isAdventureMode && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs code-font text-slate-300 hover:text-sky-400 px-3 py-1.5 rounded-md hover:bg-slate-800/50 transition-colors"
              >
                GitHub
              </a>
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
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
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          {!isAdventureMode && (
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
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
