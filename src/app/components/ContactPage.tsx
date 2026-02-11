import { Suspense } from 'react';
import { Header } from '@/app/components/Header';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export function ContactPage() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background text-foreground relative overflow-x-hidden">
      <div className="relative z-0">
        <Header />
        <main className="pt-24">
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

