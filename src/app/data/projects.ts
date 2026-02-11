export type ProjectCategory = 'All' | 'Mobile App' | 'Web App' | 'Website' | 'Multi Platform' | 'Timeline';

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  team: string;
  date: string;
  badge: string;
  description: string;
  overview?: string;
  technologies?: string[];
  liveSiteUrl?: string;
  projectType?: 'Client Project' | 'Freelance Project' | 'Multi Platform';
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'TRAVEL TOGETHER',
    subtitle: 'Mobile App - Android',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Client: PRASAD',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Android app that helps groups plan trips together, coordinate itineraries, and stay organised during travel.',
    overview:
      'Built a comprehensive Android application for group travel planning with real-time itinerary coordination and collaborative features. Implemented user authentication, group management, and location-based services.',
    technologies: ['Android', 'Kotlin', 'Firebase', 'Google Maps API', 'Material Design'],
    liveSiteUrl: '#',
  },
  {
    id: 2,
    title: 'SARAL EVENTS',
    subtitle: '2 Mobile Apps, 1 Web App, 1 Website',
    category: 'Multi Platform',
    team: 'Team: 1',
    date: 'Client: SARAL EVENTS',
    badge: 'Multi Platform',
    projectType: 'Multi Platform',
    description:
      'End‑to‑end solution for event management with Android apps, web app, and marketing website for organisers and attendees.',
    overview:
      'Developed a complete multi-platform event management ecosystem including Android apps for organizers and attendees, a web application for event management, and a marketing website. Integrated payment processing, ticket generation, and real-time notifications.',
    technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
    liveSiteUrl: '#',
  },
  {
    id: 3,
    title: 'TUVO',
    subtitle: 'Ticket Booking Platform',
    category: 'Web App',
    team: 'Team: 1',
    date: 'June 2025',
    badge: 'Freelance Project',
    projectType: 'Freelance Project',
    description:
      'Full‑stack ticket booking web application with secure payments, QR‑based tickets, and automated confirmations.',
    overview:
      'Built a full-stack ticket booking platform with secure PayU payments and server verification. Implemented PDF ticket generation with QR codes and automated email receipts. Developed a comprehensive role-based admin dashboard for managing events and bookings.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Radix UI', 'Supabase', 'Vercel'],
    liveSiteUrl: '#',
  },
  {
    id: 4,
    title: 'PLATTR',
    subtitle: 'Capacitor App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Client: HOSTIFY TECHNOLOGIES PVT.LTD',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Cross‑platform Capacitor app for hospitality businesses, streamlining operations and property management on Android and iOS.',
    overview:
      'Developed a cross-platform mobile application using Capacitor for hospitality businesses. Features include property management, booking system, guest communication, and analytics dashboard. Built with modern web technologies and native plugins.',
    technologies: ['Capacitor', 'React', 'TypeScript', 'Ionic', 'Node.js', 'PostgreSQL'],
    liveSiteUrl: '#',
  },
  {
    id: 5,
    title: 'PRANARAS ACADEMY',
    subtitle: 'Academy Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Client: RAHUL',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Responsive website for Pranaras Academy to showcase courses, programs, and student outcomes.',
    overview:
      'Created a modern, responsive website for Pranaras Academy featuring course listings, program details, student testimonials, and enrollment forms. Implemented SEO optimization and performance enhancements.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveSiteUrl: '#',
  },
  {
    id: 6,
    title: 'RELAI WORLD',
    subtitle: 'Corporate Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Client: RELAI WORLD PVT.LTD',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Corporate website for Relai World to present services, brand story, and contact channels.',
    overview:
      'Designed and developed a corporate website showcasing Relai World\'s services, company story, and contact information. Features include service pages, team section, and integrated contact forms with email notifications.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'Vercel'],
    liveSiteUrl: '#',
  },
  {
    id: 7,
    title: 'JOBSNEXT',
    subtitle: 'Job Search Mobile App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Client: ABSOLVE IT&HR PVT.LTD',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Mobile app for job seekers with job listings, search, and notifications, built for Android and iOS.',
    overview:
      'Built a comprehensive job search mobile application for both Android and iOS platforms. Features include advanced job search filters, saved jobs, application tracking, push notifications, and user profiles. Integrated with backend API for real-time job listings.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Node.js', 'MongoDB'],
    liveSiteUrl: '#',
  },
];
