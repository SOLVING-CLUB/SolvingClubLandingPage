// Performance optimization utilities

/**
 * Preload critical resources
 */
export function preloadResources() {
  // Preload will be handled by Vite in production
  // No manual preloading needed
}

/**
 * Lazy load images when they enter viewport
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Prefetch next likely pages
 */
export function prefetchPages() {
  const prefetchLinks = ['#services', '#work', '#about', '#contact'];
  
  prefetchLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  });
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  // Preload critical resources
  preloadResources();
  
  // Setup lazy loading
  setupLazyLoading();
  
  // Prefetch likely pages
  prefetchPages();
  
  // Register service worker if available (only in production)
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    // Check if we're in production build
    const isProduction = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1' &&
                        !window.location.hostname.includes('localhost');
    
    if (isProduction) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(() => console.log('Service Worker registered'))
          .catch(err => {
            console.log('Service Worker registration failed:', err);
            // Don't block app if service worker fails
          });
      });
    }
  }
}
