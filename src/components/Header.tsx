import { ShoppingBag, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-pink-50/30"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <ShoppingBag className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            VESTI
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium relative group"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Link 
            to="/blog" 
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium relative group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg active:shadow-md font-medium text-sm">
            Add to Chrome
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-3 space-y-4">
          <a 
            href="#features" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            Testimonials
          </a>
          <Link 
            to="/blog" 
            className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium py-2"
          >
            Blog
          </Link>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium text-sm">
            Add to Chrome
          </button>
        </div>
      </div>
    </header>
  );
}