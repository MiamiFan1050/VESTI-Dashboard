import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on main page, just scroll
      const element = document.querySelector('#how-it-works');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }
    } else {
      // Navigate to main page with hash
      navigate('/#how-it-works');
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  const handleTestimonialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on main page, just scroll
      const element = document.querySelector('#testimonials');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }
    } else {
      // Navigate to main page with hash
      navigate('/#testimonials');
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md shadow-lg py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        <Link to="/" className="transform transition-all duration-300 hover:scale-105" style={{ marginLeft: '-192px' }}>
          <img 
            src="/images/vesti-logo.png" 
            alt="VESTI Logo" 
            className="object-contain"
            style={{ width: '300px', height: '90px' }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden xs:flex items-center space-x-3 lg:space-x-8">
          <button 
            onClick={handleHowItWorksClick}
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={handleTestimonialsClick}
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Link 
            to="/blog" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/get-featured" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            Get Featured
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/faq" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a 
            href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium text-sm"
          >
            Add to Chrome
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xs:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`xs:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-3 space-y-4">
          <button 
            onClick={handleHowItWorksClick}
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2 text-left w-full"
          >
            How It Works
          </button>
          <button 
            onClick={handleTestimonialsClick}
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2 text-left w-full"
          >
            Testimonials
          </button>
          <Link 
            to="/blog" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            Blog
          </Link>
          <Link 
            to="/get-featured" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            Get Featured
          </Link>
          <Link 
            to="/faq" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            FAQ
          </Link>
          <a 
            href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium text-sm block text-center"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </header>
  );
}