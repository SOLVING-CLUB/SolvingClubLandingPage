import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Users, Calendar } from 'lucide-react';
import { projects, Project } from '@/app/data/projects';
import { cn } from '@/app/components/ui/utils';
import { Header } from '@/app/components/Header';

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
          {/* Left: Browser Window Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xl">
              {/* Browser Window Header */}
              <div className="bg-muted/50 border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground text-center">
                  {project.liveSiteUrl || 'project-preview.com'}
                </div>
              </div>
              
              {/* Browser Content Area */}
              <div className="bg-muted/30 aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 opacity-50">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {project.title} – {project.subtitle}
              </h1>
              <p className="text-lg text-muted-foreground">
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

            {/* Visit Live Site Button */}
            {project.liveSiteUrl && (
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
            )}
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
