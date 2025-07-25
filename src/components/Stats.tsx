import React from 'react';
import { ArrowUpRight, ShoppingBag, Clock, Infinity, BarChart3, CreditCard, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

// Define statistics with consistent messaging
const stats = [
  {
    value: "85%",
    label: "Reduced Returns",
    description: "Average return reduction for premium users",
    icon: <ShoppingBag className="h-5 w-5 text-purple-600" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    value: "97%",
    label: "Confidence Rate",
    description: "Users who shop with complete confidence",
    icon: <ShieldCheck className="h-5 w-5 text-purple-600" />,
    color: "from-pink-500 to-purple-500"
  },
  {
    value: "3.2M+",
    label: "Items Visualized",
    description: "Clothing items tried on with our AI",
    icon: <Infinity className="h-5 w-5 text-purple-600" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    value: "$150",
    label: "Monthly Savings",
    description: "Average savings from confident shopping",
    icon: <CreditCard className="h-5 w-5 text-purple-600" />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    value: "5.2h",
    label: "Time Saved",
    description: "Average hours saved monthly on returns",
    icon: <Clock className="h-5 w-5 text-purple-600" />,
    color: "from-pink-500 to-indigo-500"
  }
];

// Define key advantages
const advantages = [
  {
    title: "Visualize Before Buying",
    description: "See exactly how clothes look on your body before purchasing",
    icon: <TrendingUp className="h-6 w-6 text-white" />
  },
  {
    title: "Perfect Fit Every Time",
    description: "Eliminate size uncertainty with realistic body mapping",
    icon: <CheckCircle className="h-6 w-6 text-white" />
  },
  {
    title: "Universal Compatibility",
    description: "Works with all major shopping sites for a seamless experience",
    icon: <ShieldCheck className="h-6 w-6 text-white" />
  }
];

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-50 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header with Animated Badge - Restructured */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-4 animate-pulse">
            <BarChart3 className="h-4 w-4 mr-2" />
            <span>Real Results</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="relative inline-block">
              Confidence
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-purple-200/50 to-pink-200/50 -z-10"></span>
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Advantage</span>
          </h2>
          
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            Our premium AI technology delivers measurable results for shoppers who want to eliminate 
            returns and shop with complete confidence
          </p>
        </div>
        
        {/* Stats Grid - Enhanced with Animations and Visual Appeal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-24">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Background gradient that appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center shadow-sm">
                  {stat.icon}
                </div>
                <ArrowUpRight className="h-5 w-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-slate-800 mb-2">{stat.label}</div>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Key Advantages Section */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-10 mb-20 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Shoppers Choose Vesti</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              The key advantages that have made us the preferred choice for confident online shopping
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {advantages.map((advantage, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-lg">
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{advantage.title}</h4>
                <p className="text-purple-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Testimonial Quote with Custom Background */}
        <div className="max-w-4xl mx-auto relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto flex items-center justify-center shadow-lg mb-6">
              <span className="text-white text-2xl md:text-3xl">"</span>
            </div>
            <p className="text-slate-700 text-lg md:text-xl italic my-6 leading-relaxed text-center">
              Since I started using Vesti, I've completely eliminated returns. I shop with so much more confidence knowing exactly how everything will fit and look on my body before I buy.
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white shadow-md">
                <span className="text-lg md:text-xl font-medium">ME</span>
              </div>
              <div className="ml-4 text-left">
                <p className="text-slate-900 font-medium">Maria E.</p>
                <p className="text-slate-500 text-sm">Premium Vesti User</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Button with Animation */}
        <div className="text-center">
          <a 
            href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse hover:animate-none"
          >
            Add to Chrome - Unlimited Try-Ons
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </a>
          <p className="text-slate-600 mt-4 text-sm font-medium">Join thousands of confident shoppers today</p>
        </div>
      </div>
    </section>
  );
}