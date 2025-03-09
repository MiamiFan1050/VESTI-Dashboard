import { ShoppingBag, Twitter, Instagram, Facebook } from 'lucide-react';

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
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vesti
              </span>
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

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200"
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