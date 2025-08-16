import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { BackToTop } from './components/ui/BackToTop';
import { ScrollProgress } from './components/ui/ScrollProgress';

// Lazy load non-critical pages
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const InstallPage = lazy(() => import('./pages/InstallPage').then(module => ({ default: module.InstallPage })));
const LandingPageVariation1 = lazy(() => import('./pages/LandingPage-variation1').then(module => ({ default: module.LandingPageVariation1 })));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const InternshipsPage = lazy(() => import('./pages/InternshipsPage'));
const FullTimePage = lazy(() => import('./pages/FullTimePage'));
const MarketingInternPage = lazy(() => import('./pages/MarketingInternPage'));
const ManagementInternPage = lazy(() => import('./pages/ManagementInternPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage').then(module => ({ default: module.OnboardingPage })));
const GetFeatured = lazy(() => import('./components/GetFeatured').then(module => ({ default: module.GetFeatured })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Wrapper component to conditionally render footer
function AppContent() {
  const location = useLocation();
  const isOnboardingPage = location.pathname === '/onboarding';
  
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      {!isOnboardingPage && <Header />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/variation1" element={<LandingPageVariation1 />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/internships" element={<InternshipsPage />} />
          <Route path="/careers/full-time" element={<FullTimePage />} />
          <Route path="/careers/interns/marketing" element={<MarketingInternPage />} />
          <Route path="/careers/interns/management" element={<ManagementInternPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/get-featured" element={<GetFeatured />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </Suspense>
      {!isOnboardingPage && <Footer />}
      <BackToTop />
      <Analytics />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}