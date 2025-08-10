import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LandingPage } from './pages/LandingPage';
import CareersPage from './pages/CareersPage';
import InternshipsPage from './pages/InternshipsPage';
import FullTimePage from './pages/FullTimePage';
import MarketingInternPage from './pages/MarketingInternPage';
import ManagementInternPage from './pages/ManagementInternPage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';
import { GetFeatured } from './components/GetFeatured';
import { FAQ } from './components/FAQ';
import { BackToTop } from './components/ui/BackToTop';
import { ScrollProgress } from './components/ui/ScrollProgress';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
        </Routes>
        <Footer />
        <BackToTop />
        <Analytics />
      </div>
    </Router>
  );
}