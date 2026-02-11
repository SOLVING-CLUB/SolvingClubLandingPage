import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/app/components/ui/utils';

type ProjectCategory = 'All' | 'Mobile App' | 'Web App' | 'Website' | 'Multi Platform' | 'Timeline';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  team: string;
  date: string;
  badge: string;
  description: string;
};

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Mobile App', value: 'Mobile App' },
  { label: 'Web App', value: 'Web App' },
  { label: 'Website', value: 'Website' },
  { label: 'Multi Platform', value: 'Multi Platform' },
  { label: 'Timeline', value: 'Timeline' },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'TRAVEL TOGETHER',
    subtitle: 'Mobile App - Android',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Client: PRASAD',
    badge: 'Client Project',
    description:
      'Android app that helps groups plan trips together, coordinate itineraries, and stay organised during travel.',
  },
  {
    id: 2,
    title: 'SARAL EVENTS',
    subtitle: '2 Mobile Apps, 1 Web App, 1 Website',
    category: 'Multi Platform',
    team: 'Team: 1',
    date: 'Client: SARAL EVENTS',
    badge: 'Multi Platform',
    description:
      'End‑to‑end solution for event management with Android apps, web app, and marketing website for organisers and attendees.',
  },
  {
    id: 3,
    title: 'TUVO',
    subtitle: 'Ticket Booking Platform',
    category: 'Web App',
    team: 'Team: 1',
    date: 'Client: MITHUN CHAKRAVARTHI',
    badge: 'Client Project',
    description:
      'Full‑stack ticket booking web application with secure payments, QR‑based tickets, and automated confirmations.',
  },
  {
    id: 4,
    title: 'PLATTR',
    subtitle: 'Capacitor App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Client: HOSTIFY TECHNOLOGIES PVT.LTD',
    badge: 'Client Project',
    description:
      'Cross‑platform Capacitor app for hospitality businesses, streamlining operations and property management on Android and iOS.',
  },
  {
    id: 5,
    title: 'PRANARAS ACADEMY',
    subtitle: 'Academy Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Client: RAHUL',
    badge: 'Client Project',
    description:
      'Responsive website for Pranaras Academy to showcase courses, programs, and student outcomes.',
  },
  {
    id: 6,
    title: 'RELAI WORLD',
    subtitle: 'Corporate Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Client: RELAI WORLD PVT.LTD',
    badge: 'Client Project',
    description:
      'Corporate website for Relai World to present services, brand story, and contact channels.',
  },
  {
    id: 7,
    title: 'JOBSNEXT',
    subtitle: 'Job Search Mobile App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Client: ABSOLVE IT&HR PVT.LTD',
    badge: 'Client Project',
    description:
      'Mobile app for job seekers with job listings, search, and notifications, built for Android and iOS.',
  },
];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const activeProject = filteredProjects[0] ?? projects[0];

  return (
    <section
      id="featured-projects"
      className="min-h-[100vh] min-h-[100dvh] py-16 sm:py-24 lg:py-32 bg-background flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            A collection of projects we&apos;ve built and contributed to
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My Projects
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                'px-4 py-2 rounded-full text-sm border transition-all',
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground border-primary shadow'
                  : 'bg-muted/40 text-muted-foreground border-border hover:bg-muted'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Layout similar to reference: image / content */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_2fr)] items-stretch">
          {/* Placeholder visual panel */}
          <motion.div
            className="relative rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-border overflow-hidden min-h-[260px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.3),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),transparent_55%)] mix-blend-screen" />

            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300/70 mb-3">
                  Featured Project
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-300/80 mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs text-slate-200 border border-white/10">
                  {activeProject.team}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs text-slate-200 border border-white/10">
                  {activeProject.date}
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-500/90 px-3 py-1 text-xs text-black font-medium">
                  {activeProject.badge}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Projects list */}
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={cn(
                  'rounded-2xl border bg-card/70 backdrop-blur-sm p-5 sm:p-6 cursor-pointer transition-all',
                  project.id === activeProject.id
                    ? 'border-primary/80 shadow-lg shadow-primary/20'
                    : 'border-border hover:border-primary/60 hover:bg-card'
                )}
                onMouseEnter={() => setActiveFilter(project.category)}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.title} –{' '}
                    <span className="text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </h3>
                  <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {project.category === 'All' ? 'Mixed' : project.category}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {project.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

