import React, { useState } from 'react';
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

  const toggleWorldMode = () => {
    setIsAdventureMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen world-transition selection:bg-amber-500 selection:text-slate-950 ${
        isAdventureMode ? 'grid-bg-adventure' : 'grid-bg-engineering'
      }`}
    >
      {/* Sticky Top Header Navigation */}
      <Navbar
        isAdventureMode={isAdventureMode}
        onToggleMode={toggleWorldMode}
      />

      {/* Main Dual-World Experience View */}
      <main>
        {isAdventureMode ? (
          <BeyondTheCodeWorld onBackToEngineering={toggleWorldMode} />
        ) : (
          <>
            <HeroSection onToggleMode={toggleWorldMode} />
            <AboutSection />
            <SkillsSection />
            <TimelineSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        isAdventureMode={isAdventureMode}
        onToggleMode={toggleWorldMode}
      />
    </div>
  );
}
