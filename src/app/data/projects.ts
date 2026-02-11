export type ProjectCategory = 'All' | 'Mobile App' | 'Web App' | 'Website';

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
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'TRAVEL TOGETHER',
    subtitle: 'Mobile App - Android',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Sep 2024',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'AI‑driven travel companion that builds smart itineraries and helps groups coordinate trips on the go.',
    overview:
      'Travel Together is an AI‑driven travel application that creates personalised trip itineraries and helps groups stay coordinated before and during travel. The app combines real‑time geolocation navigation, smart suggestions for places to visit, and shared schedules so every traveller knows where to be and when. A dedicated admin dashboard allows trip organisers to review routes, manage travellers, and adjust plans instantly. The backend is powered by Firebase and Firestore for secure authentication, reliable data storage, and real‑time updates, while AI integration personalises recommendations based on user preferences and travel history.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'AI Integration'],
    liveSiteUrl: '#',
  },
  {
    id: 2,
    title: 'SARAL EVENTS - WEBSITE',
    subtitle: 'Marketing Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Public marketing website for Saral Events that showcases services, featured events, and makes it easy for users to discover and enquire.',
    overview:
      'Designed and developed the primary marketing website for Saral Events, focused on lead generation and event discovery with SEO-friendly pages and responsive layouts.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-landing.png',
  },
  {
    id: 3,
    title: 'SARAL EVENTS ADMIN PORTAL',
    subtitle: 'Web App for Organisers',
    category: 'Web App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Web admin portal for organisers to configure events, manage vendors and tickets, and monitor real‑time bookings.',
    overview:
      'SaralEvents is a full‑stack event management platform covering website, web admin, and mobile apps for attendees and vendors. The admin portal is built with TypeScript for web components and backed by Supabase services. It provides organiser tools for configuring events, managing vendors and inventory, tracking real‑time availability, and promoting featured events with a banner system. Role‑based access and clear dashboards help teams operate complex events smoothly while keeping data consistent across all channels.',
    technologies: ['Flutter', 'Dart', 'TypeScript', 'Supabase', 'PLpgSQL', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-admin.png',
  },
  {
    id: 4,
    title: 'SARAL EVENTS USER APP',
    subtitle: 'Mobile App for Attendees',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Mobile app for attendees to browse events, book tickets, and manage their passes from a single place.',
    overview:
      'Developed a user-facing mobile experience for Saral Events attendees with event discovery, ticket booking, QR-based tickets, and real-time notifications.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-user-app.jpeg',
  },
  {
    id: 5,
    title: 'SARAL EVENTS VENDOR APP',
    subtitle: 'Mobile App for Vendors',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Vendor‑facing mobile app to manage stalls, inventory, and orders during Saral Events functions.',
    overview:
      'Created a vendor-focused mobile application with stall assignment, order tracking, payment summaries, and on-site tools to streamline vendor operations.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-vendor-app.jpeg',
  },
  {
    id: 6,
    title: 'TUVO',
    subtitle: 'Ticket Booking Platform',
    category: 'Web App',
    team: 'Team: 1',
    date: 'August 2025',
    badge: 'Freelance Project',
    projectType: 'Freelance Project',
    description:
      'Full‑stack ticket booking web platform with secure PayU payments, QR‑code tickets, and a role‑based admin dashboard.',
    overview:
      'TUVO is a full‑stack ticket booking platform built with Next.js 15 and TypeScript. It integrates secure PayU payments with server‑side verification to ensure safe transactions for users. Tickets are generated as PDFs with embedded QR codes, and automated email receipts keep customers informed after each purchase. On the operations side, a powerful role‑based admin dashboard allows organisers to create events, manage pricing and capacity, view reports, and monitor bookings in real time. The system is deployed with Supabase as the backend and Vercel for fast, reliable hosting.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Radix UI', 'Supabase', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/tuvo-landing.png',
  },
  {
    id: 7,
    title: 'PLATTR',
    subtitle: 'Capacitor App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Nov-4-2025 to Jan-15-2026',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Cross‑platform hospitality app available on web, iOS, and Android, supported with ongoing technical assistance and store deployments.',
    overview:
      'Plattrr is a comprehensive cross‑platform application built with TypeScript, React, and Capacitor for mobile deployment. The solution spans web, iOS, and Android, giving hospitality teams a single system for booking management, property operations, and customer communication. Beyond core development, the project included hands‑on technical support, CI/CD setup, and complete management of Apple App Store and Google Play Store releases. The stack uses Supabase for backend services and data storage, Firebase for push notifications and supporting integrations, and Vercel for fast web hosting, with careful build configurations to keep behaviour consistent across platforms.',
    technologies: ['TypeScript', 'React', 'Supabase', 'Firebase', 'Capacitor', 'Vercel', 'iOS', 'Android'],
    liveSiteUrl: '#',
    imageUrl: '/plattr.jpeg',
  },
  {
    id: 8,
    title: 'PRANARAS ACADEMY',
    subtitle: 'Academy Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Started at 20-Dec-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Modern responsive website that presents Pranaras Academy’s courses, programs, and key information for prospective students.',
    overview:
      'Pranaras Academy Website is a front‑end project focused on clearly presenting the academy’s offerings in a clean, professional, and mobile‑friendly layout. The site highlights the academy’s mission, featured courses, enrollment details, and contact information so visitors can quickly understand what is offered and how to get started. The page structure uses well‑defined sections such as hero, about, courses, testimonials, and contact to guide users through the content. Particular attention is given to typography, branding, and responsive behaviour so that the experience feels polished on desktops, tablets, and smartphones. Modern best practices around semantic HTML, accessibility, and performance are applied throughout.',
    technologies: [
      'HTML5',
      'CSS3 (Flexbox, Grid, responsive design)',
      'JavaScript (ES6+)',
      'Git & GitHub',
      'Modern browser DevTools',
    ],
    liveSiteUrl: '#',
    imageUrl: '/pranaras-academy.png',
  },
  {
    id: 9,
    title: 'RELAI WORLD',
    subtitle: 'Corporate Website',
    category: 'Website',
    team: 'Team: 1',
    date: 'Started at 3rd Feb – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Corporate marketing website that shares Relai World’s services, story, and contact touchpoints.',
    overview:
      'Designed and developed a corporate website showcasing Relai World\'s services, company story, and contact information. Features include service pages, team section, and integrated contact forms with email notifications.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/relai-world.png',
  },
  {
    id: 10,
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
    imageUrl: '/jobsnext.jpeg',
  },
];
