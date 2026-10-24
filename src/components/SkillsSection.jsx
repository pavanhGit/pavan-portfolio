import React, { useState } from 'react';
import {
  Code2,
  Zap,
  Database,
  Network,
  Globe,
  Radio,
  Box,
  Cloud,
  CheckCircle2,
  GitBranch,
  Package,
  Server,
  Shield,
  RotateCw,
  PlayCircle,
  Flame,
  Terminal,
  FileCode,
  ShieldCheck,
  CheckSquare,
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export default function SkillsSection({ theme }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const isLight = theme === 'light';

  // Map each skill to an appropriate modern icon
  const skillIcons = {
    'Java': Code2,
    'Spring Boot': Zap,
    'Spring Data JPA / Hibernate': Database,
    'Microservices Architecture': Network,
    'RESTful Web Services': Globe,
    'MySQL & SQL': Database,
    'Apache Kafka': Radio,
    'Docker': Box,
    'AWS (EC2, S3, RDS)': Cloud,
    'JUnit & Mockito': CheckCircle2,
    'Git & GitHub': GitBranch,
    'Maven': Package,
    'REST API Design & Integration': Server,
    'Design Patterns & SOLID Principles': Shield,
    'Agile / Scrum': RotateCw,
    'Jenkins & CI/CD Pipelines': PlayCircle,
    'Redis': Flame,
    'Linux': Terminal,
    'Postman & OpenAPI': FileCode,
    'SonarQube': ShieldCheck,
    'JIRA & Confluence': CheckSquare,
  };

  const filterTabs = ['All', 'Backend', 'Architecture', 'Database', 'Messaging', 'DevOps', 'Cloud', 'Testing', 'Tools'];

  const filteredSkills = selectedFilter === 'All'
    ? skillsList
    : skillsList.filter((s) => s.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-8">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>02. Skills & Technologies</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Core Technology Stack
          </h2>
          <p className={isLight ? 'text-slate-600 text-sm sm:text-base font-light' : 'text-slate-400 text-sm sm:text-base font-light'}>
            Key technologies, frameworks, and engineering tools I work with daily.
          </p>
        </div>

        {/* Compact Interactive Tiles Container */}
        <div
          className={`p-6 sm:p-8 md:p-10 rounded-3xl border transition-all duration-300 ${
            isLight
              ? 'bg-white border-slate-200/90 shadow-sm'
              : 'bg-slate-900/60 border-slate-800/80 shadow-2xl'
          }`}
        >
          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : isLight
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Compressed Small Tiles Grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill) => {
              const IconComponent = skillIcons[skill.name] || Code2;
              return (
                <div
                  key={skill.name}
                  className={`group flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 hover:scale-[1.04] cursor-default ${
                    isLight
                      ? 'bg-slate-50/90 border-slate-200/90 hover:border-sky-400 hover:bg-sky-50/40 text-slate-800 hover:shadow-md'
                      : 'bg-slate-950/70 border-slate-800/80 hover:border-sky-500/50 hover:bg-slate-950 text-slate-200 hover:shadow-lg hover:shadow-sky-500/5'
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-xl transition-colors ${
                      isLight
                        ? 'bg-sky-50 text-sky-600 group-hover:bg-sky-100'
                        : 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer Count Hint */}
          <div
            className={`mt-8 pt-5 border-t text-center text-xs flex items-center justify-center space-x-2 ${
              isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
            }`}
          >
            <span>Showing {filteredSkills.length} of {skillsList.length} core engineering competencies</span>
          </div>

        </div>

      </div>
    </section>
  );
}
