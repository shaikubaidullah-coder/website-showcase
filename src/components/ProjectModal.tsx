import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ShieldCheck, Check, Calendar, Globe } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-primary/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Sheet */}
      <div className="relative w-full max-w-3xl bg-surface rounded-3xl border border-ink-primary/20 shadow-modal overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-ink-primary/10 flex items-center justify-between bg-paper-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-live animate-ping" />
            <span className="text-xs font-mono font-medium text-ink-primary">
              VERIFIED EXHIBIT: {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-paper-bezel text-ink-muted hover:text-ink-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Large Preview Frame */}
          <div className="rounded-2xl border border-ink-primary/15 overflow-hidden bg-paper-subtle shadow-card">
            <div className="h-7 bg-paper-bezel border-b border-ink-primary/10 px-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <span className="font-mono text-[10px] text-ink-muted">
                {project.productionUrl}
              </span>
              <div className="w-6" />
            </div>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full max-h-[380px] object-cover object-top"
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-subtle text-accent border border-accent-border">
                {project.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Live on {project.host}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-ink-muted">
                <Calendar className="w-3 h-3" />
                {project.deploymentDate}
              </span>
            </div>

            <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-ink-primary">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-ink-secondary font-sans leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="space-y-3 bg-paper-subtle p-4 rounded-2xl border border-ink-primary/10">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink-primary">
              Inspected Architecture & Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlightDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-secondary font-sans">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink-muted">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-surface border border-ink-primary/15 text-ink-primary shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-ink-primary/10 bg-paper-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.repositoryUrl && !project.isPrivateRepo ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface hover:bg-paper-bezel border border-ink-primary/15 text-xs font-medium text-ink-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-ink-muted px-2 py-1">
                {project.isPrivateRepo ? '🔒 Private Client / Core Repository' : ''}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              Close
            </button>
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-paper font-sans text-xs font-semibold hover:bg-accent-hover transition-colors shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span>Launch Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-paper/80" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
