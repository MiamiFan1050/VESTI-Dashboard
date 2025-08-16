import React from 'react';
import { 
  ShoppingBag, 
  Infinity, 
  Wand2, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  PencilRuler, 
  Zap 
} from 'lucide-react';

// Feature data structure
const features = [
  {
    icon: <Wand2 className="h-6 w-6 text-purple-600" />,
    title: "Premium AI Technology",
    description: "Advanced algorithms create realistic virtual try-ons that give you accurate previews of how clothes will fit your body."
  },
  {
    icon: <Infinity className="h-6 w-6 text-purple-600" />,
    title: "Unlimited Try-Ons",
    description: "Try on as many items as you want with our premium service - no restrictions, no limits, no guesswork."
  },
  {
    icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
    title: "Universal Compatibility",
    description: "Works seamlessly with all major shopping sites to ensure you can shop confidently anywhere online."
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    title: "One-Click Try-On",
    description: "Instantly see how items will look on you with a single click - no complicated setup required."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
    title: "Privacy Guaranteed",
    description: "Your data stays on your device. We never store your body measurements or images on our servers."
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-600" />,
    title: "Time & Money Saver",
    description: "Eliminate returns and save hours of shopping time by knowing exactly how clothes will look before buying."
  }
];

// Premium advantages
const premiumAdvantages = [
  {
    stat: "85%",
    label: "Reduced Returns",
    description: "Shop with complete confidence and significantly reduce return rates"
  },
  {
    stat: "97%",
    label: "Shopping Confidence",
    description: "Users report near-perfect confidence in their online purchases"
  },
  {
    stat: "5.2h",
    label: "Time Saved Monthly",
    description: "Average time saved per month by eliminating return trips and reorders"
  }
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-purple-50 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-pink-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-6">
            <Wand2 className="h-4 w-4 mr-2" />
            <span>Premium Experience</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Everything You Need for <span className="text-purple-700">Virtual Try-On Shopping</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-5 max-w-3xl mx-auto">
            Our premium Chrome extension gives you all the tools you need to shop with complete confidence and eliminate the uncertainty of online clothes shopping.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Premium Advantages */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30 mb-5">
              <Infinity className="h-4 w-4 mr-2" />
              <span>Premium Advantages</span>
                </div>
            
            <h3 className="text-3xl font-bold text-white">Shop with Complete Confidence</h3>
            <p className="text-purple-100 mt-3 max-w-2xl mx-auto">
              Our premium service transforms your online shopping experience with real, measurable benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumAdvantages.map((advantage, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{advantage.stat}</div>
                <div className="text-lg font-medium text-white mb-3">{advantage.label}</div>
                <p className="text-purple-100">{advantage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Add to Chrome - Premium Access
              <Smartphone className="ml-3 h-5 w-5 text-purple-500" />
            </a>
          </div>
        </div>
        
        {/* How It Works Teaser */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Start Shopping with Confidence?</h3>
          <div className="flex justify-center items-center">
            <PencilRuler className="h-6 w-6 text-purple-600 mr-2" />
            <span className="text-lg text-purple-700 font-medium">See how it works in three simple steps</span>
          </div>
          <div className="mt-3">
            <button className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-xl font-medium hover:bg-purple-200 transition-colors">
              Explore How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}