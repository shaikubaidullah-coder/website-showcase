import { useState, useMemo, useEffect } from 'react';
import { PROJECTS, CATEGORIES, Project } from './data/projects';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroShowcase } from './components/HeroShowcase';
import { DiscoveryControls } from './components/DiscoveryControls';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { FolderSearch, RotateCcw } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'alpha'>('recent');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Keyboard shortcut listener for fast search focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = PROJECTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Flagship project for the hero spotlight
  const flagshipProject = useMemo(() => {
    return PROJECTS.find((p) => p.id === 'aur-music-archive') || PROJECTS[0];
  }, []);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        project.productionUrl.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.deploymentDate).getTime() - new Date(a.deploymentDate).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-paper selection:bg-accent-subtle selection:text-accent font-sans">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar totalProjects={PROJECTS.length} />

      {/* 2. Sticky Navbar */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* 3. Hero Section (Asymmetric Split Screen) */}
      <HeroShowcase
        flagshipProject={flagshipProject}
        totalProjects={PROJECTS.length}
        onSelectProject={(p) => setSelectedProject(p)}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 4. Main Gallery Section */}
      <main id="gallery" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-subtle border border-ink-primary/10 text-xs font-mono text-ink-primary">
            <span className="w-2 h-2 rounded-full bg-status-live" />
            <span>VERIFIED PORTFOLIO REGISTRY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
            Curated Digital Works
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary font-sans max-w-2xl leading-relaxed">
            Filter through music archives, procedural canvas experiments, client applications, and automation systems. Every card links directly to its verified production URL.
          </p>
        </div>

        {/* Discovery & Filter Controls */}
        <DiscoveryControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categoryCounts={categoryCounts}
          totalCount={PROJECTS.length}
          filteredCount={filteredProjects.length}
          onResetFilters={resetFilters}
        />

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center rounded-3xl bg-surface border border-ink-primary/10 space-y-4 max-w-md mx-auto my-12 shadow-subtle">
            <div className="w-12 h-12 rounded-2xl bg-paper-subtle text-ink-muted flex items-center justify-center mx-auto">
              <FolderSearch className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-ink-primary">
                No matching projects found
              </h3>
              <p className="text-xs text-ink-secondary font-sans">
                No verified records match &ldquo;{searchQuery}&rdquo; in this category.
              </p>
            </div>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-primary text-paper text-xs font-mono hover:bg-black transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </main>

      {/* 5. About / Philosophy Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 6. Footer */}
      <Footer totalProjects={PROJECTS.length} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

export default App;
