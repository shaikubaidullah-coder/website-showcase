import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  totalProjects: number;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ totalProjects }) => {
  return (
    <aside aria-label="Announcement" className="w-full bg-ink-primary text-paper py-2 px-4 text-xs font-mono tracking-wide border-b border-paper/10 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-status-live animate-pulse" />
          <span className="text-paper/90 font-medium">
            Exhibition Live:
          </span>
          <span className="text-paper/70 hidden sm:inline">
            Accepting bookmarks & collaboration, not generic bookings.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-paper/80">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-paper/10 text-[11px] text-paper">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            {totalProjects} Verified Builds
          </span>
          <a
            href="#gallery"
            className="hover:text-paper underline underline-offset-2 transition-colors hidden md:inline"
          >
            Jump to Gallery ↓
          </a>
        </div>
      </div>
    </aside>
  );
};
