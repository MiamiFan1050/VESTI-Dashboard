import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Play, Pause } from 'lucide-react';

export function DynamicIPhoneDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      title: "Landing Page",
      subtitle: "Discover VESTI AI",
      description: "Welcome to the future of shopping",
      image: "/images/vesti-logo.png",
      bgColor: "from-purple-500 to-pink-500",
      accentColor: "purple"
    },
    {
      title: "Select Clothing",
      subtitle: "Choose Your Style",
      description: "Browse and select any clothing item",
      image: "/images/Clothing_01.jpeg",
      bgColor: "from-blue-500 to-cyan-500",
      accentColor: "blue"
    },
    {
      title: "Try-On Result",
      subtitle: "See the Magic",
      description: "Instant virtual try-on with AI",
      image: "/images/Model_01_after.jpeg",
      bgColor: "from-green-500 to-emerald-500",
      accentColor: "green"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium border border-purple-200 mb-6 animate-pulse">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-ping"></span>
            Dynamic Demo
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience VESTI AI
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              in 3 Simple Steps
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how our revolutionary AI transforms your shopping experience with instant virtual try-ons
          </p>
        </div>

        {/* iPhone Demo Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* iPhone Frame */}
          <div className="relative">
            {/* iPhone Body */}
            <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* iPhone Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Dynamic Content */}
                <div className="relative w-full h-full">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentStep 
                          ? 'opacity-100 translate-x-0' 
                          : index < currentStep 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                    >
                      {/* Step Background */}
                      <div className={`w-full h-full bg-gradient-to-br ${step.bgColor} relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                          {/* Step Number */}
                          <div className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg mb-6 border border-white/30`}>
                            {index + 1}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-white text-2xl font-bold mb-2">{step.title}</h3>
                          
                          {/* Subtitle */}
                          <p className="text-white/80 text-lg mb-4">{step.subtitle}</p>
                          
                          {/* Description */}
                          <p className="text-white/70 text-sm mb-8">{step.description}</p>
                          
                          {/* Image */}
                          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Progress Indicator */}
                          <div className="flex gap-2 mt-8">
                            {steps.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i === currentStep 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/40'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
            </div>
            
            {/* Floating Elements Around iPhone */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Controls and Info */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Current Step Info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4">
                Step {currentStep + 1} of {steps.length}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              
              <p className="text-xl text-gray-600 mb-4">
                {steps[currentStep].subtitle}
              </p>
              
              <p className="text-gray-500 max-w-md">
                {steps[currentStep].description}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous step"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-white" />
                ) : (
                  <Play className="h-6 w-6 text-white ml-1" />
                )}
              </button>
              
              <button
                onClick={nextStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next step"
              >
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Step Indicators */}
            <div className="flex gap-3">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Try It Now - Free
            <ArrowRight className="h-5 w-5" />
          </a>
          
          <p className="text-gray-500 mt-4">
            Join thousands of confident shoppers today
          </p>
        </div>
      </div>
    </section>
  );
}
