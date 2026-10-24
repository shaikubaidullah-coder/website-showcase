export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'sound-music' | 'creative-code' | 'ai-automation' | 'client-business' | 'identity-portfolios';
  categoryLabel: string;
  technologies: string[];
  productionUrl: string;
  repositoryUrl?: string;
  isPrivateRepo?: boolean;
  thumbnail: string;
  featured: boolean;
  host: 'Netlify' | 'Vercel';
  status: 'live' | 'archived';
  deploymentDate: string;
  highlightDetails: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'sound-music', label: 'Sound & Music' },
  { id: 'creative-code', label: 'Creative Code & Canvas' },
  { id: 'ai-automation', label: 'AI & Systems' },
  { id: 'client-business', label: 'Client & Business' },
  { id: 'identity-portfolios', label: 'Portfolios & Identity' },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'aur-music-archive',
    slug: 'aur-music-archive',
    title: 'AUR — Personal Music Archive',
    tagline: 'An immersive, art-directed digital listening exhibition.',
    description: 'A curated personal listening exhibition and record archive of AUR, built with responsive track navigation, vinyl aesthetics, and Web Audio API integration.',
    longDescription: 'AUR is an art-directed digital listening room designed as an intimate spatial experience. It features custom album artwork presentation, an interactive audio player with waveform scrubbers, tracklist selection, and delicate visual micro-interactions celebrating music culture.',
    category: 'sound-music',
    categoryLabel: 'Sound & Music',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Web Audio API', 'Vite'],
    productionUrl: 'https://aur-music-archive.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/aur-music-archive',
    isPrivateRepo: false,
    thumbnail: '/projects/aur-music-archive.png',
    featured: true,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-10-24',
    highlightDetails: [
      'Interactive custom audio playback engine with track timecodes',
      'Art-directed vinyl cover display and ambient mood lighting',
      'Instant responsive design across mobile and desktop viewports',
      '100% client-side zero-latency track switching'
    ]
  },
  {
    id: 'boulevard-music',
    slug: 'boulevard-music',
    title: 'Boulevard — Record Collection',
    tagline: 'A personal music collection of songs I keep coming back to.',
    description: 'An editorial vinyl and track archive curated with intimate typography, track commentary, and fluid playback controls.',
    longDescription: 'Boulevard is a personal musical journal celebrating timeless records. It organizes favorite tracks into an editorial digital binder with bespoke typography, subtle hover physics, and embedded streaming players.',
    category: 'sound-music',
    categoryLabel: 'Sound & Music',
    technologies: ['TypeScript', 'React', 'CSS Modules', 'Vercel Edge'],
    productionUrl: 'https://boulevard-music.vercel.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/boulevard-music',
    isPrivateRepo: false,
    thumbnail: '/projects/boulevard-music.png',
    featured: true,
    host: 'Vercel',
    status: 'live',
    deploymentDate: '2026-10-01',
    highlightDetails: [
      'Editorial track commentary and curation notes',
      'Custom record sleeve display with tactile card physics',
      'Subtle spring animations on hover and interaction',
      'Edge-hosted on Vercel with instant sub-100ms response'
    ]
  },
  {
    id: 'the-archive-gallery',
    slug: 'the-archive-gallery',
    title: 'The Archive Gallery',
    tagline: 'Cinematic React spatial gallery and media experience.',
    description: 'A cinematic media gallery exploring spatial web navigation, full-screen focal previews, and fluid animation sequences.',
    longDescription: 'The Archive Gallery treats digital assets like museum installations. It implements full-bleed transitions, keyboard navigation, and minimalist typographic framing to create an immersive visual exhibition.',
    category: 'creative-code',
    categoryLabel: 'Creative Code & Canvas',
    technologies: ['JavaScript', 'React', 'Framer Motion', 'Tailwind CSS'],
    productionUrl: 'https://the-archive-gallery.vercel.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/the-archive-gallery',
    isPrivateRepo: true,
    thumbnail: '/projects/the-archive-gallery.png',
    featured: false,
    host: 'Vercel',
    status: 'live',
    deploymentDate: '2026-09-23',
    highlightDetails: [
      'Cinematic spatial layout with smooth transitions',
      'High-contrast minimalist gallery presentation',
      'Hardware-accelerated CSS and transform animations',
      'Accessible keyboard navigation for asset switching'
    ]
  },
  {
    id: 'what-do-you-love-animation',
    slug: 'what-do-you-love-animation',
    title: 'What Do You Love? — Canvas Physics',
    tagline: 'Interactive procedural HTML5 canvas particle experiment.',
    description: 'A mathematical canvas animation with generative particle dynamics responding to user pointer movement and algorithmic physics.',
    longDescription: 'A pure creative coding study built without heavy graphics libraries. It utilizes raw HTML5 Canvas 2D context to calculate particle velocity, gravitational pull, and optical dissipation in real time at 60 FPS.',
    category: 'creative-code',
    categoryLabel: 'Creative Code & Canvas',
    technologies: ['HTML5 Canvas', 'Vanilla JavaScript', 'Mathematical Physics'],
    productionUrl: 'https://what-do-you-love-animation.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/what-do-you-love-animation',
    isPrivateRepo: false,
    thumbnail: '/projects/what-do-you-love-animation.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-09-30',
    highlightDetails: [
      'Zero-dependency pure vanilla JavaScript implementation',
      '60 FPS mathematical particle vector calculations',
      'Dynamic mouse velocity tracking and spring recoil',
      'Ultra-lightweight bundle loading in under 50ms'
    ]
  },
  {
    id: 'flowers-for-you',
    slug: 'flowers-for-you',
    title: 'Flowers For You — Algorithmic Blossom',
    tagline: 'Algorithmic botanical animation with 3D perspective transforms.',
    description: 'A delicate interactive digital floral exhibition simulating botanical growth and petal geometry through CSS 3D transforms.',
    longDescription: 'Flowers For You combines mathematical trigonometry with 3D perspective layers to model blossoming flora in code. It serves as both a digital greeting and a creative engineering experiment in organic motion.',
    category: 'creative-code',
    categoryLabel: 'Creative Code & Canvas',
    technologies: ['HTML5', 'CSS3 3D Transforms', 'Trigonometric Math', 'Audio'],
    productionUrl: 'https://flowers-for-you-six.vercel.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/flowers-for-you',
    isPrivateRepo: false,
    thumbnail: '/projects/flowers-for-you.png',
    featured: true,
    host: 'Vercel',
    status: 'live',
    deploymentDate: '2026-08-30',
    highlightDetails: [
      'Compound 3D CSS rotateX, rotateY, and translateZ matrices',
      'Sequential blossom bloom timing using CSS custom properties',
      'Organic color gradients mimicking real petal illumination',
      'Integrated ambient soundtrack playback'
    ]
  },
  {
    id: 'qalbishawarma',
    slug: 'qalbishawarma',
    title: 'Qalbi Shawarma House',
    tagline: 'Authentic local restaurant web presence & online ordering.',
    description: 'A commercial restaurant web application for Qalbi Shawarma House in Atmakur, featuring digital menu exploration, dietary badges, and WhatsApp ordering.',
    longDescription: 'Engineered for a real culinary business, Qalbi Shawarma House showcases 100% Halal chicken shawarma, samoli rolls, crispy fries, and fried chicken. Built with modern React and Tailwind, it focuses on high-conversion local ordering via WhatsApp API integration and rapid mobile loading.',
    category: 'client-business',
    categoryLabel: 'Client & Business',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'WhatsApp Business API'],
    productionUrl: 'https://qalbishawarma.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/qalbi',
    isPrivateRepo: false,
    thumbnail: '/projects/qalbishawarma.png',
    featured: true,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-08-20',
    highlightDetails: [
      'High-conversion WhatsApp one-click direct ordering',
      'Interactive item category filtering with dietary tags',
      'Mobile-first layout optimized for local smartphone users',
      'Zero-layout-shift menu grid with fast image loading'
    ]
  },
  {
    id: 'sadiq-automation',
    slug: 'sadiq-automation',
    title: 'Sadiq Automation Agency',
    tagline: 'AI Automation Engineer & Systems Builder service platform.',
    description: 'A production agency showcase outlining Voice AI receptionists, CRM integrations, and operational n8n automated pipelines.',
    longDescription: 'Sadiq Automation communicates technical solutions for businesses drowning in manual workflows. It highlights voice agent architectures, automated lead qualification, and multi-tool orchestration with interactive service accordions.',
    category: 'ai-automation',
    categoryLabel: 'AI & Systems',
    technologies: ['HTML5', 'Modern CSS', 'ES Modules', 'Vite'],
    productionUrl: 'https://sadiq-automation.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/sadiq-automation',
    isPrivateRepo: true,
    thumbnail: '/projects/sadiq-automation.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-09-08',
    highlightDetails: [
      'Interactive capability accordions detailing business ROI',
      'Clear workflow architecture diagrams and delivery roadmap',
      'Direct client inquiry and consultation routing',
      'Fast vanilla JavaScript bundling with zero framework bloat'
    ]
  },
  {
    id: 'main-portfolio',
    slug: 'main-portfolio',
    title: 'AI Automation Engineer — Deep Forest',
    tagline: 'Atmospheric systems builder portfolio with LERP cursor physics.',
    description: 'A cybernetic, dark-forest portfolio with client-side SPA routing, interactive skills matrix, and terminal blueprint aesthetics.',
    longDescription: 'Built with Vite and vanilla modern ECMAScript, this portfolio features custom LERP cursor tracking, interactive accordion panels, and an engineering milestone timeline documenting AI systems delivery.',
    category: 'ai-automation',
    categoryLabel: 'AI & Systems',
    technologies: ['HTML5', 'CSS3', 'ES Modules', 'Vite', 'Canvas Physics'],
    productionUrl: 'https://shaikubaid.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/main-portfolio',
    isPrivateRepo: false,
    thumbnail: '/projects/main-portfolio.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-07-05',
    highlightDetails: [
      'Atmospheric Deep Forest Teal aesthetic with particle physics',
      'Client-side SPA router supporting hash and history navigation',
      'Comprehensive 4-part skills matrix and service deliverables',
      'Keyboard shortcut dialog for instant hotkey navigation'
    ]
  },
  {
    id: 'journey-aiskills',
    slug: 'journey-aiskills',
    title: 'Journey AI Skills Roadmap',
    tagline: 'Interactive timeline tracking progression across AI disciplines.',
    description: 'A structured visual learning roadmap documenting milestones across agent engineering, LLM orchestration, and workflow tooling.',
    longDescription: 'Journey AI Skills visualizes the deliberate path of mastering autonomous agents, prompt evaluation, and multi-model systems. It provides full transparency into technical competencies and continuous engineering growth.',
    category: 'ai-automation',
    categoryLabel: 'AI & Systems',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    productionUrl: 'https://journey-aiskills.vercel.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/journey.aiskills',
    isPrivateRepo: false,
    thumbnail: '/projects/journey-aiskills.png',
    featured: false,
    host: 'Vercel',
    status: 'live',
    deploymentDate: '2026-09-08',
    highlightDetails: [
      'Chronological milestone timeline from 2025 to Present',
      'Categorized competencies across Voice AI, n8n, and Python',
      'Clean responsive layout with high-contrast text',
      'Direct verification links to completed courses and resources'
    ]
  },
  {
    id: 'shaikubaidullah-portfolio-v2',
    slug: 'shaikubaidullah-portfolio-v2',
    title: 'Shaik Ubaidullah: The Ego Trip',
    tagline: 'High-personality creative developer identity statement.',
    description: 'An expressive editorial landing page exploring bold typography, raw personal narrative, and distinct visual personality.',
    longDescription: 'Designed as a creative departure from standard corporate portfolios, The Ego Trip embraces strong editorial voice, candid self-awareness, and distinctive typographic rhythm.',
    category: 'identity-portfolios',
    categoryLabel: 'Portfolios & Identity',
    technologies: ['HTML5', 'CSS3', 'Modern Typography'],
    productionUrl: 'https://shaikubaidullah-portfolio.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/shaikubaidullah-portfolio-v2',
    isPrivateRepo: false,
    thumbnail: '/projects/shaikubaidullah-portfolio-v2.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-08-26',
    highlightDetails: [
      'Bold editorial serif headline composition',
      'Unconventional, candid developer manifesto copy',
      'Lightweight single-file architecture with zero build lag',
      'Fully responsive fluid type scaling'
    ]
  },
  {
    id: 'shaikubaidullah-landing',
    slug: 'shaikubaidullah-landing',
    title: 'Shaik Ubaidullah: Just A Guy',
    tagline: 'Minimalist personal landing page and raw link bio.',
    description: 'A stripped-back minimalist bio page providing direct access to social handles, code repositories, and communication channels.',
    longDescription: 'A study in radical minimalism: removing every unnecessary decoration to leave only clear typography, verified contact links, and personal identity.',
    category: 'identity-portfolios',
    categoryLabel: 'Portfolios & Identity',
    technologies: ['HTML5', 'Minimalist CSS'],
    productionUrl: 'https://shaikubaidullah-landing.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/shaikubaidullah-landing',
    isPrivateRepo: false,
    thumbnail: '/projects/shaikubaidullah-landing.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-08-25',
    highlightDetails: [
      'Pure minimalist typography and high-contrast styling',
      'Sub-2KB footprint with instant 0-second first paint',
      'Semantic links with target and security attributes',
      'Flawless scaling on small mobile screens'
    ]
  },
  {
    id: 'ubaidairesources',
    slug: 'ubaidairesources',
    title: 'Ubaid Resources Hub',
    tagline: 'Curated repository of AI tools, prompts, and automation links.',
    description: 'A structured bookmark directory of high-utility AI development tools, prompt templates, and automation frameworks.',
    longDescription: 'Curated by Shaik Ubaidullah for engineers and creators, this resource directory categorizes top tools across LLM inference, Voice AI, automation hubs, and creative media generation.',
    category: 'identity-portfolios',
    categoryLabel: 'Portfolios & Identity',
    technologies: ['HTML5', 'CSS3', 'Curated Dataset'],
    productionUrl: 'https://ubaidairesources.netlify.app',
    repositoryUrl: 'https://github.com/shaikubaidullah-coder/MY-WEBSITE',
    isPrivateRepo: true,
    thumbnail: '/projects/ubaidairesources.png',
    featured: false,
    host: 'Netlify',
    status: 'live',
    deploymentDate: '2026-05-16',
    highlightDetails: [
      'Categorized resource lists for rapid discovery',
      'Personal bookmarks matching browser workflow links',
      'Simple card-based navigation with clean external icons',
      'Zero external scripts or trackers'
    ]
  }
];
