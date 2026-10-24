import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Terminal, Layers, ArrowUpRight, X, AlertTriangle, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection({ theme }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const isLight = theme === 'light';

  const categories = ['All', 'Microservices / FinTech', 'Distributed Systems', 'Security & Auth', 'FinTech & Systems'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-3 mb-14">
          <div
            className={`inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase ${
              isLight ? 'text-sky-600' : 'text-sky-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>04. Engineering Portfolio</span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            Backend Systems & Architecture Projects
          </h2>
          <p className={isLight ? 'text-slate-600 text-base sm:text-lg max-w-2xl font-light' : 'text-slate-400 text-base sm:text-lg max-w-2xl font-light'}>
            Real-world backend case studies focusing on high-concurrency APIs, microservice resilience, event streaming, and transactional integrity.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 scale-[1.02]'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border border-slate-300 hover:text-slate-900 hover:border-slate-400'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl border transition-all duration-300 p-8 md:p-10 flex flex-col justify-between ${
                isLight
                  ? 'bg-white border-slate-200/90 hover:border-sky-300 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/30 shadow-xl'
              }`}
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-mono px-3.5 py-1 rounded-full border ${
                      isLight
                        ? 'bg-sky-50 text-sky-700 border-sky-200'
                        : 'bg-slate-950 text-sky-300 border-slate-800'
                    }`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      className={`text-[11px] code-font px-2.5 py-1 rounded-md border ${
                        isLight
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      }`}
                    >
                      Featured Architecture
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold tracking-tight transition-colors mb-3.5 ${
                    isLight
                      ? 'text-slate-900 group-hover:text-sky-600'
                      : 'text-white group-hover:text-sky-300'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed mb-6 font-light ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {project.description}
                </p>

                {/* Problem & Solution Panel */}
                <div
                  className={`space-y-4 p-5 md:p-6 rounded-2xl border mb-6 ${
                    isLight
                      ? 'bg-slate-50/80 border-slate-200/80'
                      : 'bg-slate-950/60 border-slate-800/60'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 block font-bold mb-1">
                      Problem Solved
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 block font-bold mb-1">
                      Architectural Approach
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-lg text-xs code-font border transition-colors ${
                        isLight
                          ? 'bg-slate-100 text-slate-700 border-slate-200'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700/60'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div
                className={`pt-5 border-t flex items-center justify-between ${
                  isLight ? 'border-slate-200' : 'border-slate-800/80'
                }`}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 flex items-center space-x-1.5 cursor-pointer py-1"
                >
                  <span>Deep-Dive Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-slate-800/50 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div
              className={`relative w-full max-w-3xl border rounded-3xl p-8 md:p-10 text-left shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-900'
                  : 'bg-slate-900 border-slate-700/90 text-white'
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 p-2 rounded-xl transition-colors cursor-pointer ${
                  isLight
                    ? 'text-slate-500 hover:text-slate-900 bg-slate-100'
                    : 'text-slate-400 hover:text-white bg-slate-800'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold mt-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className={`text-xs font-mono uppercase font-semibold mb-1.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    System Architecture Overview
                  </h4>
                  <p className={`text-base leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {selectedProject.description}
                  </p>
                </div>

                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div>
                    <h5 className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 font-bold mb-1">
                      Business & Technical Problem:
                    </h5>
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold mb-1">
                      Engineering Solution:
                    </h5>
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-mono uppercase font-semibold mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Key Engineering Challenges Overcome
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.keyChallenges.map((challenge, i) => (
                      <li key={i} className={`flex items-start space-x-3 text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-xs font-mono uppercase font-semibold mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Technologies & Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs code-font rounded-lg border ${
                          isLight
                            ? 'bg-slate-100 text-sky-800 border-slate-200'
                            : 'bg-slate-800 text-sky-300 border-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`pt-6 border-t flex justify-between items-center ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code on GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer ${
                    isLight
                      ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
