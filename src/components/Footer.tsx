import { Twitter, Instagram, Linkedin, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/90 to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <Link to="/" className="group block">
                <div className="relative">
                  {/* Subtle glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo with enhanced styling */}
                  <img 
                    src="/images/vesti-logo.png" 
                    alt="Vesti Logo"
                    className="relative h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your online shopping experience with virtual try-ons powered by advanced AI technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/onboarding" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Employee Portal */}
          <div>
            <h3 className="font-semibold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/vesti.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/vesti-ext/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            {/* Employee Portal */}
            <div className="space-y-3">
              <Link 
                to="/signin"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white rounded-xl hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
              >
                <LogIn className="h-4 w-4" />
                <span className="text-sm font-medium">Employee Portal</span>
              </Link>
              
              <a 
                href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Install Extension
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              {new Date().getFullYear()} Vesti. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="h-1 w-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-2"></div>
              <p className="text-gray-400">
                Made with for online shoppers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}