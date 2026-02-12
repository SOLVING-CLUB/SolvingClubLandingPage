import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Users, Calendar, Smartphone } from 'lucide-react';
import { projects, Project } from '@/app/data/projects';
import { cn } from '@/app/components/ui/utils';
import { Header } from '@/app/components/Header';
import { ProjectAsset } from '@/app/components/ProjectAsset';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectId = id ? parseInt(id, 10) : null;
  const project: Project | undefined = projectId 
    ? projects.find((p) => p.id === projectId)
    : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects', { replace: true })}
            className="text-primary hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] min-h-[100dvh] bg-background">
      <Header />
      <section className="pt-16 pb-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/projects', { replace: true })}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </motion.button>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1.8fr)] items-start">
          {/* Left: Project Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectAsset
              imageUrl={project.imageUrl}
              title={project.title}
              category={project.category}
            />
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {project.title} – {project.subtitle}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Meta Info */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={18} />
                <span className="text-sm">{project.team}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={18} />
                <span className="text-sm">{project.date}</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground border border-border">
                  {project.projectType || project.badge}
                </span>
                {project.badge !== project.projectType && (
                  <span className="inline-flex items-center rounded-full bg-amber-500/90 px-3 py-1 text-xs text-black font-medium">
                    {project.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Download App Button for Mobile Apps */}
              {project.category === 'Mobile App' && (project.appStore || project.playStore) ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-white/20 text-black rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} />
                      <span>Download App</span>
                    </motion.button>
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
                          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black flex items-center justify-center">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground mb-1">Download on the</div>
                            <div className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">App Store</div>
                          </div>
                          <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      )}
                      {project.playStore && (
                        <a
                          href={project.playStore.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black flex items-center justify-center">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.05L14.18,12L3.84,21.95C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground mb-1">Get it on</div>
                            <div className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">Google Play</div>
                          </div>
                          <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : project.liveSiteUrl && project.liveSiteUrl !== '#' ? (
                <motion.a
                  href={project.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-primary text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={18} />
                </motion.a>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Project Overview Section */}
        {project.overview && (
          <motion.div
            className="mt-16 rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Project Overview</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        )}

        {/* Technologies Used Section */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            className="mt-8 rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Technologies Used</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Tools and technologies powering this project
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={cn(
                    'inline-flex items-center rounded-lg bg-primary/10 text-primary px-4 py-2 text-sm font-medium',
                    'border border-primary/20 hover:bg-primary/20 transition-colors'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
    </div>
  );
}
