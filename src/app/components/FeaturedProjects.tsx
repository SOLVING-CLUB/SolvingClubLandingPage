import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { projects, ProjectCategory } from '@/app/data/projects';

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Mobile App', value: 'Mobile App' },
  { label: 'Web App', value: 'Web App' },
  { label: 'Website', value: 'Website' },
  { label: 'Multi Platform', value: 'Multi Platform' },
  { label: 'Timeline', value: 'Timeline' },
];

export function FeaturedProjects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

        {/* Project cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isWeb =
              project.category === 'Web App' ||
              project.category === 'Website' ||
              project.category === 'Multi Platform';

            return (
              <motion.article
                key={project.id}
                className={cn(
                  'rounded-2xl border bg-card/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-sm',
                  'transition-all hover:shadow-xl hover:border-primary/70'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1.9fr)] items-stretch">
                  {/* Left: visual preview */}
                  <div className="relative flex items-center justify-center">
                    {isWeb ? (
                      <div className="w-full max-w-md rounded-xl border border-border bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-lg overflow-hidden">
                        {/* Browser header */}
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-slate-900/80">
                          <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="ml-3 h-6 flex-1 rounded-md bg-slate-800/80" />
                        </div>
                        {/* Browser body */}
                        <div className="aspect-[16/10] bg-slate-950/80 flex items-center justify-center">
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            Project Preview
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-xs mx-auto rounded-[2rem] border border-border bg-gradient-to-b from-slate-900 to-black shadow-xl flex items-center justify-center aspect-[9/19]">
                        <div className="w-[88%] h-[88%] rounded-[1.6rem] bg-slate-950/90 border border-slate-700/60 flex items-center justify-center">
                          <p className="text-xs sm:text-sm text-muted-foreground text-center px-4">
                            {project.title}
                            <br />
                            <span className="text-[11px] text-muted-foreground/80">
                              Project Preview
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Team {project.team.replace('Team: ', '')}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                          {project.date}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-[11px] font-medium text-black">
                          {project.projectType || project.badge}
                        </span>
                      </div>

                      {/* Title & description */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-semibold">
                          {project.title}{' '}
                          <span className="font-normal text-muted-foreground">
                            – {project.subtitle}
                          </span>
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        View Details
                      </button>

                      {/* Placeholder GitHub button (no URL yet) */}
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:bg-muted/60 transition-colors"
                      >
                        GitHub
                      </button>

                      {project.liveSiteUrl && project.liveSiteUrl !== '#' && (
                        <a
                          href={project.liveSiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-emerald-500/80 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                        >
                          View Live Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

