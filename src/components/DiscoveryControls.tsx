import React from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { CATEGORIES } from '../data/projects';

interface DiscoveryControlsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (c: string) => void;
  sortBy: 'recent' | 'alpha';
  onSortChange: (s: 'recent' | 'alpha') => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  filteredCount: number;
  onResetFilters: () => void;
}

export const DiscoveryControls: React.FC<DiscoveryControlsProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  categoryCounts,
  totalCount,
  filteredCount,
  onResetFilters
}) => {
  const isFiltered = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <div className="space-y-6 pt-4">
      {/* Top row: Search input & Sort selector */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search bar (CodeKart-inspired rounded search) */}
        <div className="relative flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-muted">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search verified websites, technologies, or keywords..."
            className="w-full pl-10 pr-10 py-2.5 rounded-full bg-surface border border-ink-primary/15 text-sm text-ink-primary placeholder:text-ink-muted/80 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-ink-muted hover:text-ink-primary transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Right side: Sort control & Filter Reset */}
        <div className="flex items-center gap-3 justify-between sm:justify-end">
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper-subtle hover:bg-paper-bezel border border-ink-primary/10 text-xs font-mono text-ink-secondary hover:text-ink-primary transition-all active:scale-95"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-ink-primary/15 text-xs font-mono text-ink-secondary shadow-subtle">
            <SlidersHorizontal className="w-3.5 h-3.5 text-ink-muted" />
            <span className="text-[11px] uppercase tracking-wider text-ink-muted">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as 'recent' | 'alpha')}
              className="bg-transparent text-ink-primary font-medium focus:outline-none cursor-pointer"
            >
              <option value="recent">Most Recent</option>
              <option value="alpha">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? 'bg-ink-primary text-paper shadow-sm'
                  : 'bg-surface hover:bg-paper-subtle text-ink-secondary hover:text-ink-primary border border-ink-primary/10'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full font-mono text-[10px] ${
                  isSelected
                    ? 'bg-paper/20 text-paper'
                    : 'bg-paper-bezel text-ink-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results status text */}
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted border-b border-ink-primary/10 pb-3">
        <span>
          Showing <span className="font-semibold text-ink-primary">{filteredCount}</span> of {totalCount} verified projects
        </span>
        {isFiltered && (
          <span className="text-accent font-medium">Filtered results</span>
        )}
      </div>
    </div>
  );
};
