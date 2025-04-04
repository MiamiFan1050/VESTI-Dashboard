import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LandingPage } from './pages/LandingPage';
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
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}