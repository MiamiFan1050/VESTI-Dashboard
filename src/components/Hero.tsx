import { ArrowRight, Infinity } from 'lucide-react';
import TryOnSlideshow from './TryOnSlideshow';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-2/3 h-2/3 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-pink-400 opacity-20 animate-ping"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-purple-300 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-pink-300 opacity-20 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid xs:grid-cols-2 gap-4 xs:gap-6 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-last md:order-none">
            <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 text-sm font-medium border border-purple-100/20">
              <Infinity className="h-4 w-4 mr-2" />
              <span>Premium Experience</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
              Try Clothes On 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}for Confident Shopping
              </span>
            </h1>
            
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 mb-6 max-w-lg">
              Our premium Chrome extension uses AI to show you exactly how clothes will look on your body before you buy, eliminating uncertainty and reducing returns
            </p>
            
            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Advanced AI technology for realistic try-ons</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Unlimited virtual try-ons with premium access</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Works with all major shopping sites</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a 
                href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Add to Chrome - Premium Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 font-medium shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-gray-800">85%</span>
                </div>
                <span>Fewer Returns</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-gray-800">50K+</span>
                </div>
                <span>Active Users</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-gray-800">∞</span>
                </div>
                <span>Unlimited Try-Ons</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Browser Demo */}
          <div className="relative order-first md:order-none w-full xs:w-auto ml-auto mb-6 md:mb-0">
            {/* Browser Chrome Effect */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative z-10">
              {/* Browser Header */}
              <div className="bg-gray-100 border-b border-gray-200 p-1.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-full shadow-sm h-5 w-60 flex items-center justify-center text-xs text-gray-500 px-2">
                    shopping.example.com
                  </div>
                </div>
                
                <div className="h-5 w-5"></div>
              </div>
              
              {/* Browser Content - Try On Slideshow */}
              <div className="p-0">
                <TryOnSlideshow />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full filter blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}