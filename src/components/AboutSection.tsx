import React from 'react';
import { Terminal, Disc3, Cpu, Sparkles, Mail, Github, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 border-t border-ink-primary/10 bg-paper-subtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-ink-primary/10 text-xs font-mono text-ink-primary">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>OPERATING PHILOSOPHY & DISCIPLINES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary leading-tight">
            Building software with visceral craft, mathematical rigor, and operational utility.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary font-sans leading-relaxed">
            I don’t build generic cookie-cutter interfaces. Whether crafting a personal vinyl record archive, animating trigonometric blossoms in 3D canvas, or architecting voice AI pipelines that automate business workflows, every line of code serves a deliberate purpose.
          </p>
        </div>

        {/* 3 Discipline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-ink-primary/10 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-subtle text-accent flex items-center justify-center">
              <Disc3 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink-primary">
              1. Digital Audio & Editorial
            </h3>
            <p className="text-sm text-ink-secondary font-sans leading-relaxed">
              Merging the intimacy of physical record collecting with responsive Web Audio API engines. Building digital listening exhibitions that honor artist craft with tactile track scrubbers and ambient aesthetics.
            </p>
            <div className="font-mono text-xs text-accent pt-2">
              Featured: AUR & Boulevard
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-ink-primary/10 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-paper-bezel text-ink-primary flex items-center justify-center">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink-primary">
              2. Procedural Code & Canvas
            </h3>
            <p className="text-sm text-ink-secondary font-sans leading-relaxed">
              Writing algorithmic particle dynamics, 3D CSS perspective transforms, and 60 FPS mathematical simulations. Zero dependency bloat—just pure mathematics and creative computation.
            </p>
            <div className="font-mono text-xs text-accent pt-2">
              Featured: What Do You Love? & Flowers For You
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-ink-primary/10 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink-primary">
              3. AI Agents & Systems
            </h3>
            <p className="text-sm text-ink-secondary font-sans leading-relaxed">
              Architecting production voice AI agents (Vapi), CRM automated pipelines, and SMB web applications (Qalbi Shawarma House) that convert manual bottlenecks into reliable autonomous workflows.
            </p>
            <div className="font-mono text-xs text-accent pt-2">
              Featured: Sadiq Automation & Qalbi Shawarma
            </div>
          </div>

        </div>

        {/* Contact Outreach Banner (Inspired by Vauliys & CodeKart) */}
        <div className="bg-ink-primary text-paper rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-card-hover">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/10 text-xs font-mono text-paper">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>COMMISSIONS & COLLABORATIONS</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold text-paper leading-tight">
              Have an ambitious web project, sound archive, or automation in mind?
            </h3>

            <p className="text-paper/80 font-sans text-sm sm:text-base leading-relaxed">
              I collaborate with founders, artists, and creators who care about high craft and real-world execution. Reach out directly to discuss your build.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper text-ink-primary font-sans text-sm font-semibold hover:bg-paper-bezel transition-all active:scale-95 shadow-sm"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Open Communication Channels</span>
              </button>

              <a
                href="https://github.com/shaikubaidullah-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper font-sans text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-paper/60" />
              </a>
            </div>
          </div>

          {/* Decorative graph watermarking */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12 hidden lg:block">
            <span className="font-display text-[180px] font-bold text-paper leading-none select-none">
              U
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
