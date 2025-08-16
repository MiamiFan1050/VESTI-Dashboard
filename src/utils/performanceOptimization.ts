// Performance optimization utilities for Vesti SEO

// Image optimization and lazy loading
export const optimizeImageUrl = (url: string, width?: number, height?: number, quality: number = 80): string => {
  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', quality.toString());
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${params.toString()}`;
  }
  
  return url;
};

// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical styles for immediate page load */
  .hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #f3e8ff 0%, #ffffff 50%, #fdf2f8 100%);
  }
  
  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Optimized font loading */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/inter-v12-latin-600.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/inter-v12-latin-700.woff2') format('woff2');
  }
`;

// Lazy loading configuration
export const lazyLoadConfig = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

// SEO-optimized meta viewport
export const mobileViewportMeta = {
  content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
};

// Performance metrics tracking
export const trackWebVitals = (metric: any) => {
  // Track Core Web Vitals for SEO
  const { name, value, id } = metric;
  
  // Send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }
  
  // Log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}: ${value}`);
  }
};

// Resource hints for better performance
export const resourceHints = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://images.unsplash.com' },
  { rel: 'preconnect', href: 'https://chromewebstore.google.com' },
  { rel: 'dns-prefetch', href: '//google-analytics.com' },
  { rel: 'dns-prefetch', href: '//googletagmanager.com' },
  { rel: 'preload', href: '/fonts/inter-v12-latin-regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: '/fonts/inter-v12-latin-600.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
];

// Mobile-first responsive breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Intersection Observer for scroll-triggered animations
export const createScrollObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
};

// Cache strategies
export const cacheStrategies = {
  // Cache images with long expiration
  images: {
    cacheName: 'vesti-images-v1',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  
  // Cache API responses with shorter expiration
  api: {
    cacheName: 'vesti-api-v1',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxEntries: 50
  },
  
  // Cache static assets indefinitely
  static: {
    cacheName: 'vesti-static-v1',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    maxEntries: 200
  }
};

export default {
  optimizeImageUrl,
  criticalCSS,
  lazyLoadConfig,
  mobileViewportMeta,
  trackWebVitals,
  resourceHints,
  breakpoints,
  createScrollObserver,
  debounce,
  registerServiceWorker,
  cacheStrategies
};
