import React, { useState } from 'react';
import { X, Mail, Github, Check, Copy, ExternalLink, MapPin, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'shaikubaidullah689@gmail.com';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-primary/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-surface rounded-3xl border border-ink-primary/20 shadow-modal overflow-hidden z-10 p-6 sm:p-8 space-y-6 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-ink-primary/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-live" />
            <span className="text-xs font-mono font-medium text-ink-primary uppercase tracking-wider">
              Direct Contact
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-paper-bezel text-ink-muted hover:text-ink-primary transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Intro */}
        <div className="space-y-2">
          <h2 id="contact-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-ink-primary">
            Let’s start a conversation.
          </h2>
          <p className="text-sm text-ink-secondary font-sans leading-relaxed">
            Whether you want to build a bespoke interactive showcase, consult on voice AI agents, or explore custom software, here is how to reach me directly.
          </p>
        </div>

        {/* Email Pill Box */}
        <div className="p-4 rounded-2xl bg-paper-subtle border border-ink-primary/10 space-y-3">
          <div className="text-[11px] font-mono uppercase text-ink-muted font-bold tracking-wider">
            Primary Email Channel
          </div>
          <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-surface border border-ink-primary/10">
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-ink-primary truncate">
                {contactEmail}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper-subtle hover:bg-paper-bezel text-xs font-mono text-ink-primary border border-ink-primary/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-ink-muted" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Channels List */}
        <div className="space-y-2.5">
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-paper hover:bg-paper-bezel border border-ink-primary/10 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-subtle text-accent flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-primary font-sans">
                  Open in Default Email Client
                </div>
                <div className="text-xs text-ink-muted font-sans">
                  Direct dispatch via mailto:
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-ink-primary transition-colors" />
          </a>

          <a
            href="https://github.com/shaikubaidullah-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-paper hover:bg-paper-bezel border border-ink-primary/10 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-ink-primary text-paper flex items-center justify-center">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-primary font-sans">
                  GitHub Profile & Repositories
                </div>
                <div className="text-xs text-ink-muted font-sans">
                  @shaikubaidullah-coder
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-ink-primary transition-colors" />
          </a>
        </div>

        {/* Operating status metadata */}
        <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono text-ink-muted border-t border-ink-primary/10">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Atmakur, AP / Global Remote</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>IST (UTC +5:30)</span>
          </div>
        </div>

      </div>
    </div>
  );
};
