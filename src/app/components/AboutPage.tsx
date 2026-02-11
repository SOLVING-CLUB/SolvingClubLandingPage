import { Suspense } from 'react';
import { Header } from '@/app/components/Header';
import { About } from '@/app/components/About';
import { Team } from '@/app/components/Team';
import { Footer } from '@/app/components/Footer';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export function AboutPage() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background text-foreground relative overflow-x-hidden">
      {/* Simple background wrapper to match the main layout */}
      <div className="relative z-0">
        <Header />
        <main className="pt-24">
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <Team />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

