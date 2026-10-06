import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import BeyondTheCodeWorld from './components/BeyondTheCodeWorld';
import Footer from './components/Footer';

export default function App() {
  const [isAdventureMode, setIsAdventureMode] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pavan_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('pavan_portfolio_theme', theme);
  }, [theme]);

  const toggleWorldMode = () => {
    setIsAdventureMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen world-transition selection:bg-amber-500 selection:text-slate-950 ${
        isAdventureMode
          ? 'grid-bg-adventure text-slate-100'
          : theme === 'light'
          ? 'grid-bg-engineering-light text-slate-800'
          : 'grid-bg-engineering text-slate-100'
      }`}
    >
      {/* Sticky Top Header Navigation */}
      <Navbar
        isAdventureMode={isAdventureMode}
        onToggleMode={toggleWorldMode}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Dual-World Experience View */}
      <main>
        {isAdventureMode ? (
          <BeyondTheCodeWorld onBackToEngineering={toggleWorldMode} />
        ) : (
          <>
            <HeroSection onToggleMode={toggleWorldMode} theme={theme} />
            <AboutSection theme={theme} />
            <SkillsSection theme={theme} />
            <TimelineSection theme={theme} />
            <ProjectsSection theme={theme} />
            <TestimonialsSection theme={theme} />
            <ContactSection theme={theme} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        isAdventureMode={isAdventureMode}
        onToggleMode={toggleWorldMode}
        theme={theme}
      />
    </div>
  );
}
