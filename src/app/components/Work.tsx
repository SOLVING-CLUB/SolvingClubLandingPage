import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'SARAL EVENTS',
    category: 'EVENT PLATFORM · WEB & MOBILE',
    description:
      'End-to-end event management ecosystem including website, admin portal, user app, and vendor app for Saral Events.',
    tags: ['Web App', 'Mobile App', 'Event Management'],
    imageQuery: 'event management app'
  },
  {
    id: 2,
    title: 'TUVO',
    category: 'WEB APP · TICKETING',
    description:
      'Full-stack ticket booking platform with secure PayU payments, QR-code tickets, and a powerful admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'PayU'],
    imageQuery: 'ticket booking web app'
  },
  {
    id: 3,
    title: 'PLATTR',
    category: 'CROSS-PLATFORM · HOSPITALITY',
    description:
      'Cross-platform hospitality app built with Capacitor, running on web, Android, and iOS for property operations.',
    tags: ['Capacitor', 'React', 'Supabase'],
    imageQuery: 'hospitality management app'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  // In a real application, you would fetch the image using unsplash_tool
  // For now, we'll use a placeholder

  return (
    <motion.div
      className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <ImageWithFallback
          src={`https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-primary-foreground text-center"
          >
            <ExternalLink className="w-12 h-12 mx-auto mb-2" />
            <p className="font-medium">View Project</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-sm text-primary mb-2">{project.category}</div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const navigate = useNavigate();

  return (
    <section id="work" className="min-h-[100vh] min-h-[100dvh] py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-muted/30 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-primary/40 bg-gradient-to-b from-primary/15 via-primary/10 to-black/70 shadow-[inset_0_1px_rgba(255,255,255,0.55)]"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-medium text-primary">Our Portfolio</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground px-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Take a look at some of our recent work and success stories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
        >
          <motion.button
            type="button"
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base border border-primary/80 bg-gradient-to-b from-white/15 via-primary/90 to-primary text-primary-foreground shadow-[inset_0_1px_rgba(255,255,255,0.55)] hover:brightness-110 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}