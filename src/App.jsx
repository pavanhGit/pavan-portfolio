import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pavan_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('pavan_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen world-transition selection:bg-sky-500 selection:text-slate-950 ${
        theme === 'light'
          ? 'grid-bg-engineering-light text-slate-800'
          : 'grid-bg-engineering text-slate-100'
      }`}
    >
      {/* Sticky Top Header Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Experience View */}
      <main>
        <HeroSection theme={theme} />
        <AboutSection theme={theme} />
        <SkillsSection theme={theme} />
        <TimelineSection theme={theme} />
        <ProjectsSection theme={theme} />
        <TestimonialsSection theme={theme} />
        <ContactSection theme={theme} />
      </main>

      {/* Global Footer */}
      <Footer theme={theme} />
    </div>
  );
}
