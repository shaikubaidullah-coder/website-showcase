import React from 'react';
import { ArrowDown, ExternalLink, ShieldCheck, Play, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';

interface HeroShowcaseProps {
  flagshipProject: Project;
  totalProjects: number;
  onSelectProject: (p: Project) => void;
  onContactClick: () => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  flagshipProject,
  totalProjects,
  onSelectProject,
  onContactClick
}) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-ink-primary/10 bg-grid-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-subtle border border-ink-primary/10 text-ink-primary text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>DIGITAL EXHIBITION & CATALOGUE // 2026</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-primary leading-[1.08] tracking-tight">
              Crafting interactive soundscapes, generative canvas, and automated systems.
            </h1>

            {/* Grounded Bio */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-sans">
              I am <span className="text-ink-primary font-semibold">Shaik Ubaidullah</span>. 
              I design and engineer tactile web exhibitions, personal music archives, procedural physics, and resilient business automations. 
              No template filler, no fabricated metrics—only verified production builds.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-ink-primary/10">
              <div className="space-y-0.5">
                <div className="font-mono text-2xl font-bold text-ink-primary">{totalProjects}</div>
                <div className="text-[11px] font-mono text-ink-muted uppercase">Verified Builds</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono text-2xl font-bold text-accent">100%</div>
                <div className="text-[11px] font-mono text-ink-muted uppercase">Live Deployed</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono text-2xl font-bold text-ink-primary">2</div>
                <div className="text-[11px] font-mono text-ink-muted uppercase">Music Archives</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono text-2xl font-bold text-ink-primary">3</div>
                <div className="text-[11px] font-mono text-ink-muted uppercase">Canvas & Art</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-primary text-paper font-sans text-sm font-semibold tracking-wide hover:bg-black active:scale-95 transition-all shadow-card"
              >
                <span>Explore All Works</span>
                <ArrowDown className="w-4 h-4 text-paper/80" />
              </a>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper-subtle text-ink-primary border border-ink-primary/15 font-sans text-sm font-medium hover:bg-paper-bezel active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Physical Sketchbook / Featured Flagship Exhibit */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient paper drop shadow framing */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-surface rounded-3xl p-4 sm:p-5 border border-ink-primary/15 shadow-card-hover transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 group">
              
              {/* Header Bar of the Exhibit Frame */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink-primary/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                  <span className="font-mono text-[11px] text-ink-muted ml-2 font-medium">
                    flagship-exhibit.ts
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFIED // {flagshipProject.host}</span>
                </div>
              </div>

              {/* Preview Image with Bezel */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink-primary/10 bg-paper-subtle">
                <img
                  src={flagshipProject.thumbnail}
                  alt={flagshipProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Floating Tactile Stamp */}
                <div className="absolute bottom-3 right-3 bg-paper/95 backdrop-blur-sm border border-ink-primary/20 rounded-full px-3 py-1 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-live animate-ping" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-ink-primary">
                    Now Playing
                  </span>
                </div>
              </div>

              {/* Exhibit Metadata */}
              <div className="mt-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-primary">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-xs text-ink-secondary line-clamp-2 mt-0.5 font-sans">
                      {flagshipProject.tagline}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipProject.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-paper-bezel text-ink-primary border border-ink-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-ink-primary/10">
                  <a
                    href={flagshipProject.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-accent text-paper font-sans text-xs font-semibold hover:bg-accent-hover transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-paper" />
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3 h-3 text-paper/70" />
                  </a>
                  <button
                    onClick={() => onSelectProject(flagshipProject)}
                    className="py-2 px-3 rounded-xl bg-paper-subtle text-ink-primary border border-ink-primary/15 font-sans text-xs font-medium hover:bg-paper-bezel transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
