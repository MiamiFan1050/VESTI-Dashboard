import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  MousePointer, 
  CheckCircle2, 
  ShoppingBag, 
  CreditCard 
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Install the Premium Extension",
      description: "Add our Chrome extension with a single click for instant access to premium virtual try-on technology.",
      image: "/images/how-it-works-1.jpg",
      icon: <MousePointer className="h-6 w-6 text-purple-600" />,
      features: [
        "One-click installation process",
        "Premium access activated instantly",
        "Works on all major browsers",
        "No account creation required"
      ]
    },
    {
      title: "Shop with Confidence",
      description: "Browse your favorite online retailers and click the Vesti button to see clothes on your body instantly.",
      image: "/images/how-it-works-2.jpg",
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
      features: [
        "Works with thousands of retailers",
        "Just one click to see the preview",
        "AI adapts to your body shape",
        "Unlimited try-ons with premium access"
      ]
    },
    {
      title: "Make Confident Purchases",
      description: "Buy with the certainty that items will fit and look great, eliminating returns and saving time and money.",
      image: "/images/how-it-works-3.jpg",
      icon: <CreditCard className="h-6 w-6 text-purple-600" />,
      features: [
        "85% reduction in returns",
        "Save $150 on average each month",
        "Eliminate size uncertainty",
        "Shop with complete confidence"
      ]
    }
  ];
  
  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };
  
  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };
  
  const currentStep = steps[activeStep];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-b from-purple-50 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 md:top-60 -left-10 md:-left-20 w-40 md:w-80 h-40 md:h-80 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 md:bottom-40 -right-10 md:-right-20 w-40 md:w-80 h-40 md:h-80 bg-pink-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-2xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs md:text-sm border border-purple-200 mb-4 md:mb-6">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
            How to Shop with <span className="text-purple-700">Complete Confidence</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg mb-4 md:mb-5 max-w-md md:max-w-3xl mx-auto">
            Our premium Chrome extension makes it easy to shop with confidence in just three simple steps
          </p>
        </div>
        
        {/* Steps Navigation */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex bg-slate-100 rounded-full p-1.5 overflow-x-auto max-w-full">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`flex items-center px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeStep === index 
                    ? 'bg-white text-purple-700 shadow-sm' 
                    : 'bg-transparent text-slate-500 hover:text-slate-700'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full mr-2 flex items-center justify-center ${
                  activeStep === index 
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {index + 1}
                </div>
                {step.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Current Step */}
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md border border-slate-200 mb-10 md:mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-gradient-to-r from-purple-100 to-pink-50 rounded-xl p-3 md:p-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={currentStep.image} 
                    alt={`Step ${activeStep + 1}: ${currentStep.title}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Step Indicator */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium text-purple-700 border border-purple-200">
                    Step {activeStep + 1} of {steps.length}
                  </div>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex justify-between mt-3 md:mt-4">
                  <button 
                    onClick={prevStep}
                    className="bg-white p-2 md:p-3 rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-slate-600" />
                  </button>
                  
                  <button 
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 md:p-3 rounded-full shadow-sm hover:shadow-md transition-all text-white"
                    aria-label="Next step"
                  >
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 md:mr-4">
                  {currentStep.icon}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-slate-900">{currentStep.title}</h3>
              </div>
              
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">{currentStep.description}</p>
              
              {/* Key Features */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-base md:text-lg font-semibold text-slate-800">Key Features:</h4>
                {currentStep.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-0.5 md:mt-1 mr-2.5 md:mr-3 text-purple-600">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <p className="text-slate-700 text-sm md:text-base">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              {activeStep === steps.length - 1 && (
                <a 
                  href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 md:mt-8 inline-flex items-center px-5 md:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Add to Chrome - Premium Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm font-medium text-slate-500">Your Progress</span>
            <span className="text-xs md:text-sm font-medium text-purple-600">{((activeStep + 1) / steps.length * 100).toFixed(0)}% Complete</span>
          </div>
          <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
              style={{ width: `${(activeStep + 1) / steps.length * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}