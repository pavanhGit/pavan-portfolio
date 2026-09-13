import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Terminal, Layers, ArrowUpRight, X, AlertTriangle, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Microservices / FinTech', 'Distributed Systems', 'Security & Auth', 'FinTech & Systems'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-mono tracking-wider uppercase">
            <Terminal className="w-4 h-4" />
            <span>04. Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Backend Systems & Architecture Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world backend case studies focusing on high-concurrency APIs, microservice resilience, event streaming, and transactional integrity.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 text-sky-300 border border-slate-800">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] code-font px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      Featured Architecture
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem & Solution Quick Grid */}
                <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-amber-400 block font-semibold">
                      Problem Solved:
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-sky-400 block font-semibold">
                      Architectural Approach:
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] code-font bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Deep-Dive Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
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
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 text-left shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                    System Architecture Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div>
                    <h5 className="text-xs font-mono uppercase text-amber-400 font-bold">
                      Business & Technical Problem:
                    </h5>
                    <p className="text-xs text-slate-300 mt-1">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase text-sky-400 font-bold">
                      Engineering Solution:
                    </h5>
                    <p className="text-xs text-slate-300 mt-1">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Key Engineering Challenges Overcome
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyChallenges.map((challenge, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Technologies & Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs code-font rounded bg-slate-800 text-sky-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code on GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
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
