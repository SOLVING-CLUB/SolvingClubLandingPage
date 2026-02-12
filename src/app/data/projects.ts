export type ProjectCategory = 'All' | 'Mobile App' | 'Web App' | 'Website';
export type ProjectStatus = 'ongoing' | 'completed';

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
  status?: ProjectStatus;
  dateStart?: string;
  dateEnd?: string;
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
    status: 'ongoing',
    dateStart: 'Sep 2024',
  },
  {
    id: 2,
    title: 'SARAL EVENTS - WEBSITE',
    subtitle: 'Marketing Website & Deep-Link Host',
    category: 'Website',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Public marketing site that introduces Saral Events, showcases categories, and routes users into the correct app screens via universal links.',
    overview:
      'Landing website for Saral Events built with Next.js 14 and Tailwind CSS. It acts as the public face of the platform, explaining how Saral simplifies event planning while hosting universal-link routes like /service/[id] and /invite/[slug] that deep‑link into the mobile apps. The site is optimised for SEO, performance, and clear CTAs to download the apps or start planning an event.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-landing.png',
    status: 'ongoing',
    dateStart: '23 Apr 2025',
  },
  {
    id: 3,
    title: 'SARAL EVENTS ADMIN PORTAL',
    subtitle: 'Company Dashboard Web App',
    category: 'Web App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Admin-only dashboard where the Saral Events team manages users, vendors, bookings, payments, invitations, and platform analytics.',
    overview:
      'Next.js 14 admin portal that gives the Saral Events operations team full control over the platform. It exposes dashboards for orders, vendors, users, services, reviews, marketing banners, and support tickets, backed by Supabase SQL views and role‑based access control. From here the team can approve vendors, resolve support issues, trigger payouts, and monitor real‑time business metrics, making the multi‑app ecosystem manageable from a single place.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Postgres', 'RBAC'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-admin.png',
    status: 'ongoing',
    dateStart: '23 Apr 2025',
  },
  {
    id: 4,
    title: 'SARAL EVENTS USER APP',
    subtitle: 'Customer Event Planning App',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Flutter mobile app where customers discover verified vendors, plan events, create e‑invites, and book services with online payments.',
    overview:
      'Saral Events User App is the customer-facing Flutter application in the Saral ecosystem. Users authenticate with email/Google, manage their profile and addresses, browse services across categories (catering, decor, venues, photography, etc.), build event plans with budgets and checklists, create shareable e‑invites, and complete bookings using Razorpay. The app talks directly to a shared Supabase backend (Postgres + Auth + Functions) and consumes deep/universal links from the landing site for invite previews and referrals.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'Razorpay', 'Deep Links', 'Android', 'iOS'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-user-app.jpeg',
    status: 'ongoing',
    dateStart: '23 Apr 2025',
  },
  {
    id: 5,
    title: 'SARAL EVENTS VENDOR APP',
    subtitle: 'Vendor Management App',
    category: 'Mobile App',
    team: 'Team: 1',
    date: 'Started at 23-Apr-2025 – about to close',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'Flutter app for vendors to manage profiles, services, bookings, payments, and on‑ground event operations.',
    overview:
      'Saral Events Vendor App is a dedicated Flutter application for service providers on the platform. Vendors onboard with KYC, configure the services they offer, manage availability and pricing, and respond to incoming bookings. The app provides a lightweight dashboard for orders, payouts, chat/support, and notifications so vendors can run their business from mobile while staying in sync with the shared Supabase backend and the admin portal.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'Push Notifications'],
    liveSiteUrl: '#',
    imageUrl: '/saral-events-vendor-app.jpeg',
    status: 'ongoing',
    dateStart: '23 Apr 2025',
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
      'BookMyShow‑style ticket booking platform (tuvo.in) with PayU payments, email tickets, and a simple admin experience.',
    overview:
      'TUVO is a production ticket booking platform similar to BookMyShow, built on Next.js and Supabase. Users register, browse events, and purchase tickets through a PayU payment flow; on success, they receive a confirmation email with their ticket attached. The system stores booking history so users can view and download previous tickets. On the admin side, protected routes allow event owners to configure events and manage bookings. The stack combines Next.js for the web app, Supabase for auth/database/storage, Resend for transactional mail, and Vercel + a custom domain (tuvo.in) for deployment.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PayU', 'Resend', 'Vercel'],
    liveSiteUrl: '#',
    imageUrl: '/tuvo-landing.png',
    status: 'completed',
    dateStart: 'Jan 2025',
    dateEnd: 'Aug 2025',
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
    status: 'completed',
    dateStart: 'Nov 4 2025',
    dateEnd: 'Jan 15 2026',
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
      'Modern, responsive marketing website for Pranaras Academy, built as a scalable foundation for a full educational platform.',
    overview:
      'The Pranaras Academy website is a Next.js App Router project that gives the academy a clean, professional online presence. It uses a component‑based architecture with reusable layout pieces (header, footer, sections) and Tailwind CSS for fast, responsive UI. The implementation focuses on performance, accessibility, and a structure that can grow into course listings, student dashboards, authentication, and admin tooling. Documentation and configuration (Next, TypeScript, PostCSS) are set up so the codebase is easy to extend and maintain over time.',
    technologies: [
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Component-based UI',
      'Dark/Light Theme System',
    ],
    liveSiteUrl: '#',
    imageUrl: '/pranaras-academy.png',
    status: 'ongoing',
    dateStart: '20 Dec 2025',
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
    status: 'ongoing',
    dateStart: '3 Feb',
  },
  {
    id: 10,
    title: 'JOBSNEXT',
    subtitle: 'Job Portal Mobile App - Android, iOS',
    category: 'Mobile App',
    team: 'Team: 2',
    date: 'Client: ABSOLVE IT&HR PVT.LTD',
    badge: 'Client Project',
    projectType: 'Client Project',
    description:
      'End‑to‑end Flutter job portal app bringing the existing web recruitment platform to Android and iOS with employer, job seeker, admin, and director modules.',
    overview:
      'JOBSNEXT Mobile is a Flutter application designed as a full companion to the existing web job portal. It uses a clean architecture with Provider state management, GoRouter navigation, Dio/Retrofit API integration, and local storage via Hive/Shared Preferences. The app includes rich flows for employers (posting jobs, viewing applicants, managing pipelines) and job seekers (profiles, multi‑resume management, video resumes, advanced job search, recommendations, and application tracking). Separate admin and director views expose analytics, revenue, growth metrics, and support tooling. The project is planned and delivered in structured phases covering foundation, auth, dashboards, notifications, testing, and release to the App Store and Play Store.',
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'Provider',
      'GoRouter',
      'Dio & Retrofit',
      'Hive',
      'Firebase Cloud Messaging',
    ],
    liveSiteUrl: '#',
    imageUrl: '/jobsnext.jpeg',
    status: 'ongoing',
    dateStart: '20 Jan 2026',
  },
];
