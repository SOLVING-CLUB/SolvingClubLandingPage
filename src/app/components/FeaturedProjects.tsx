import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { projects, ProjectCategory } from '@/app/data/projects';
import { ProjectAsset } from '@/app/components/ProjectAsset';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/app/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Smartphone, ExternalLink } from 'lucide-react';

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Mobile App', value: 'Mobile App' },
  { label: 'Web App', value: 'Web App' },
  { label: 'Website', value: 'Website' },
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
                'bg-gradient-to-b from-white/15 via-white/5 to-black/60',
                'shadow-[inset_0_1px_rgba(255,255,255,0.6)] backdrop-blur-sm',
                activeFilter === filter.value
                  ? 'text-slate-50 border-primary/80'
                  : 'text-slate-300 border-border/70 hover:border-primary/60'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
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
                  {/* Left: Project Showcase Image */}
                  <div className="relative flex items-center justify-center w-full">
                    <ProjectAsset
                      imageUrl={project.imageUrl}
                      title={project.title}
                      category={project.category}
                    />
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-col gap-5">
                    <div className="space-y-3">
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 border border-border/60 bg-gradient-to-b from-white/10 via-white/5 to-black/50 shadow-[inset_0_1px_rgba(255,255,255,0.5)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Team {project.team.replace('Team: ', '')}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium text-black border border-amber-400/70 bg-gradient-to-b from-amber-300/95 via-amber-400/95 to-amber-500">
                          {project.projectType || project.badge}
                        </span>
                        {project.status && project.dateStart && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span
                                className={cn(
                                  'inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium cursor-default border',
                                  project.status === 'completed'
                                    ? 'border-emerald-300/80 bg-gradient-to-b from-emerald-200/95 via-emerald-300/95 to-emerald-500 text-black'
                                    : 'border-sky-300/80 bg-gradient-to-b from-sky-200/95 via-sky-300/95 to-sky-500 text-black'
                                )}
                              >
                                {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              {project.status === 'completed' && project.dateEnd
                                ? `${project.dateStart} – ${project.dateEnd}`
                                : project.dateStart}
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>

                      {/* Title & description */}
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-semibold">
                          {project.title}{' '}
                          <span className="font-normal text-muted-foreground">
                            – {project.subtitle}
                          </span>
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        {project.overview && (
                          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                            {project.overview.length > 420
                              ? `${project.overview.slice(0, 420)}…`
                              : project.overview}
                          </p>
                        )}
                      </div>

                      {/* Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-primary/40 bg-gradient-to-b from-primary/15 via-primary/10 to-black/60 text-primary shadow-[inset_0_1px_rgba(255,255,255,0.4)]"
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

                      {/* Download App button for Mobile Apps */}
                      {project.category === 'Mobile App' && (project.appStore || project.playStore) ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300"
                            >
                              <Smartphone className="h-4 w-4" />
                              Download App
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="text-xl sm:text-2xl">{project.title}</DialogTitle>
                              <DialogDescription>Download the app from your preferred app store</DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-4 py-4">
                              {project.appStore && (
                                <a
                                  href={project.appStore.trim()}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs text-muted-foreground mb-1">Download on the</div>
                                    <div className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">App Store</div>
                                  </div>
                                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                              )}
                              {project.playStore && (
                                <a
                                  href={project.playStore.trim()}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.05L14.18,12L3.84,21.95C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs text-muted-foreground mb-1">Get it on</div>
                                    <div className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">Google Play</div>
                                  </div>
                                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : project.liveSiteUrl && project.liveSiteUrl !== '#' ? (
                        <a
                          href={project.liveSiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-emerald-500/80 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                        >
                          View Live Project
                        </a>
                      ) : null}
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

