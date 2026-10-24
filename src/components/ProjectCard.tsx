import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article className="group bg-surface rounded-2xl border border-ink-primary/10 hover:border-ink-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Device/Browser Bezel Frame */}
      <div className="relative aspect-[16/10] bg-paper-subtle border-b border-ink-primary/10 overflow-hidden">
        
        {/* Top Browser Bar within preview */}
        <div className="absolute top-0 inset-x-0 h-6 bg-paper-bezel/90 backdrop-blur-xs border-b border-ink-primary/10 px-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
            <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
            <span className="w-2 h-2 rounded-full bg-ink-muted/30" />
          </div>
          <span className="font-mono text-[9px] text-ink-muted truncate max-w-[180px]">
            {project.productionUrl.replace('https://', '')}
          </span>
          <div className="w-6" />
        </div>

        {/* Screenshot Image */}
        <img
          src={project.thumbnail}
          alt={`Screenshot preview of ${project.title}`}
          className="w-full h-full object-cover object-top pt-6 group-hover:scale-103 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Status Chip overlay */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-md border border-ink-primary/10 text-[10px] font-mono shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-pulse" />
          <span className="font-semibold text-ink-primary uppercase tracking-wider">
            {project.host}
          </span>
        </div>

        {project.featured && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-accent text-paper text-[10px] font-mono font-medium shadow-xs">
            ★ Featured
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title and Category */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-accent font-medium uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-[11px] font-mono text-ink-muted">
              {project.deploymentDate.slice(0, 7)}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-paper-subtle text-ink-primary border border-ink-primary/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-paper-bezel text-ink-muted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-ink-primary/10 flex items-center gap-2">
          <a
            href={project.productionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-ink-primary text-paper hover:bg-black font-sans text-xs font-semibold tracking-wide transition-all shadow-subtle active:scale-95"
            aria-label={`Open live website for ${project.title}`}
          >
            <span>Visit Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-paper-subtle hover:bg-paper-bezel text-ink-primary border border-ink-primary/15 font-sans text-xs font-medium transition-all active:scale-95"
            aria-label={`Inspect details for ${project.title}`}
          >
            <Info className="w-3.5 h-3.5 text-ink-secondary" />
            <span className="hidden xs:inline">Details</span>
          </button>
        </div>

      </div>
    </article>
  );
};
