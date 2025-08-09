import React from 'react';
import { Globe, ShoppingBag, Store, ArrowRight, Infinity, Check } from 'lucide-react';

export function Brands() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-pink-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-6">
            <Globe className="h-4 w-4 mr-2" />
            <span>Universal Compatibility</span>
          </div>
          
          <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Shop with Confidence on{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Millions of Stores
            </span>
          </h2>
          
          <p className="text-lg xs:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our premium Chrome extension works seamlessly with millions of online stores and retailers worldwide. 
            From major marketplaces to boutique brands, shop anywhere with complete confidence.
          </p>
        </div>
        
        {/* Key Benefits - Mobile carousel */}
        <div className="md:hidden -mx-4 px-4 mb-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            <div className="min-w-[85%] snap-center bg-white rounded-2xl p-5 shadow-lg border border-purple-100 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Universal Support</h3>
              <p className="text-slate-600 text-sm">Works on any shopping website automatically - no setup required</p>
            </div>
            <div className="min-w-[85%] snap-center bg-white rounded-2xl p-5 shadow-lg border border-purple-100 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4 mx-auto">
                <ShoppingBag className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">One-Click Try-On</h3>
              <p className="text-slate-600 text-sm">Instantly see how any item looks on you with a single click</p>
            </div>
            <div className="min-w-[85%] snap-center bg-white rounded-2xl p-5 shadow-lg border border-purple-100 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4 mx-auto">
                <Store className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Millions of Stores</h3>
              <p className="text-slate-600 text-sm">Compatible with major retailers, marketplaces, and boutique stores</p>
            </div>
          </div>
        </div>

        {/* Key Benefits - Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Universal Support</h3>
            <p className="text-slate-600">Works on any shopping website automatically - no setup required</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">One-Click Try-On</h3>
            <p className="text-slate-600">Instantly see how any item looks on you with a single click</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Store className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Millions of Stores</h3>
            <p className="text-slate-600">Compatible with major retailers, marketplaces, and boutique stores</p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 xs:p-12 shadow-2xl text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30 mb-6">
              <Infinity className="h-4 w-4 mr-2" />
              <span>Unlimited Access</span>
            </div>
            
            <h3 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Shopping?
            </h3>
            
            <p className="text-lg xs:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of confident shoppers who never worry about fit or returns again
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-white mb-2">∞</div>
                <p className="text-purple-100 text-sm xs:text-base">Unlimited Try-Ons</p>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-white mb-2">50K+</div>
                <p className="text-purple-100 text-sm xs:text-base">Happy Shoppers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-white mb-2">85%</div>
                <p className="text-purple-100 text-sm xs:text-base">Fewer Returns</p>
              </div>
            </div>
            
            <a 
              href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Add to Chrome - Premium Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Simple Trust Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-slate-600">
            <Check className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Works with millions of online stores and retailers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}