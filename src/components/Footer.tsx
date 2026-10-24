import React from 'react';
import { ArrowUp, ShieldCheck, Github } from 'lucide-react';

interface FooterProps {
  totalProjects: number;
}

export const Footer: React.FC<FooterProps> = ({ totalProjects }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-ink-primary/10 bg-paper py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-ink-primary/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-ink-primary">
                Shaik Ubaidullah
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-subtle text-accent border border-accent-border font-semibold">
                ARCHIVE // 2026
              </span>
            </div>
            <p className="text-xs text-ink-secondary font-sans">
              Curated digital exhibition featuring {totalProjects} verified web applications, audio archives, and systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-secondary">
            <a
              href="https://github.com/shaikubaidullah-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href="#gallery"
              className="hover:text-ink-primary transition-colors"
            >
              Gallery
            </a>
            <span>·</span>
            <a
              href="#about"
              className="hover:text-ink-primary transition-colors"
            >
              Philosophy
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-ink-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon & Integrity Stamp */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Zero dummy data · 100% verified live production URLs · Static Vite architecture</span>
          </div>

          <div>
            © 2026 Shaik Ubaidullah. Built with craft & precision.
          </div>
        </div>

      </div>
    </footer>
  );
};
