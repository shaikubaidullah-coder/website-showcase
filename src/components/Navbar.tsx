import React, { useState } from 'react';
import { Github, Star, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-ink-primary/10 bg-paper/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-ink-primary text-paper flex items-center justify-center font-display font-bold text-xl shadow-sm border border-ink-primary/15 group-hover:scale-105 transition-transform">
            U
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink-primary leading-tight">
              Shaik Ubaidullah
            </span>
            <span className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
              Creative Developer & Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans">
          <a
            href="#gallery"
            className="text-ink-secondary hover:text-ink-primary font-medium transition-colors"
          >
            Exhibition
          </a>
          <a
            href="#about"
            className="text-ink-secondary hover:text-ink-primary font-medium transition-colors"
          >
            Philosophy
          </a>
          <a
            href="https://github.com/shaikubaidullah-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-ink-primary font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-ink-muted" />
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-paper font-sans text-xs font-semibold tracking-wide hover:bg-accent-hover active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Star className="w-3.5 h-3.5 fill-paper/20" />
            <span>Say Hello</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="p-2 rounded-full bg-accent text-paper text-xs font-medium"
            aria-label="Say Hello"
          >
            <Star className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink-secondary hover:text-ink-primary border border-ink-primary/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-ink-primary/10 bg-paper px-4 py-4 space-y-3 font-sans">
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-ink-primary font-medium"
          >
            Exhibition Gallery
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-ink-primary font-medium"
          >
            Philosophy & Disciplines
          </a>
          <a
            href="https://github.com/shaikubaidullah-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-2 text-ink-secondary hover:text-ink-primary"
          >
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub Profile
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
