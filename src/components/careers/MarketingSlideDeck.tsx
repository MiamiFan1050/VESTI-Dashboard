import React, { useState, useEffect } from 'react';
import { X, Play, Users, Target, TrendingUp, Zap, Star, Award, Rocket, Globe, ArrowRight, Briefcase, CheckCircle, DollarSign, Clock, MapPin, BarChart3, Palette, MessageSquare, Share2, Eye, Heart, ThumbsUp, Calendar, Building2, Lightbulb, Shield, Trophy, Sparkles, Video, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { openEmail, emailTemplates } from '../../utils/emailUtils';

export const MarketingSlideDeck: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleApply = () => {
    openEmail(
      emailTemplates.marketingIntern.to,
      emailTemplates.marketingIntern.subject,
      emailTemplates.marketingIntern.body
    );
  };

  const steps = [
    {
      title: "Marketing & Social Media Internship",
      subtitle: "Create viral content that reaches millions of users worldwide",
      icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-3 py-1 border border-green-500/30 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-200 text-sm font-semibold">Limited Positions Available</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Join our fast-growing AI startup and create content that reaches <span className="text-purple-300 font-bold">millions of users worldwide</span>. 
              Build an impressive portfolio with real campaigns that drive actual business results.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-3 border border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-white font-bold text-sm">3-6 Months</div>
                <div className="text-blue-300 text-xs">Duration</div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-3 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-white font-bold text-sm">Remote</div>
                <div className="text-purple-300 text-xs">Location</div>
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-xl p-3 border border-pink-500/30 group-hover:border-pink-400/60 transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-white font-bold text-sm">Portfolio</div>
                <div className="text-pink-300 text-xs">Building</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What You'll Do",
      subtitle: "Real responsibilities that impact millions of users",
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-lg p-3 border border-blue-500/30 group cursor-pointer hover:border-blue-400/60 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Create Viral Content</h4>
                <p className="text-white/70 text-xs">Develop engaging posts that reach millions across Instagram, TikTok, LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-lg p-3 border border-purple-500/30 group cursor-pointer hover:border-purple-400/60 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Analyze Performance</h4>
                <p className="text-white/70 text-xs">Track engagement, optimize campaigns, and drive real business results</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 rounded-lg p-3 border border-green-500/30 group cursor-pointer hover:border-green-400/60 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Build Communities</h4>
                <p className="text-white/70 text-xs">Grow authentic audiences and foster brand loyalty</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why This is Amazing",
      subtitle: "Unprecedented opportunities for your career",
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30",
      content: (
        <div className="space-y-3">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-3 py-1 border border-orange-500/30">
              <Zap className="h-4 w-4 text-orange-400" />
              <span className="text-orange-200 text-sm font-semibold">Fast-Growing AI Startup</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-lg p-3 border border-blue-500/30 group cursor-pointer hover:border-blue-400/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-blue-400" />
                <h4 className="font-bold text-white text-sm">Global Reach</h4>
              </div>
              <p className="text-white/70 text-xs">Your work reaches millions of users worldwide</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-lg p-3 border border-purple-500/30 group cursor-pointer hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-purple-400" />
                <h4 className="font-bold text-white text-sm">Cutting-Edge Tech</h4>
              </div>
              <p className="text-white/70 text-xs">Work with revolutionary AI technology</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 rounded-lg p-3 border border-green-500/30 group cursor-pointer hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-4 w-4 text-green-400" />
                <h4 className="font-bold text-white text-sm">Real Impact</h4>
              </div>
              <p className="text-white/70 text-xs">See your work drive business results</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/10 to-pink-800/10 rounded-lg p-3 border border-pink-500/30 group cursor-pointer hover:border-pink-400/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="h-4 w-4 text-pink-400" />
                <h4 className="font-bold text-white text-sm">Career Growth</h4>
              </div>
              <p className="text-white/70 text-xs">Fast-track your career in digital marketing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Apply",
      subtitle: "Simple process to join our team",
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-500/30",
      content: (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-3 py-1 border border-blue-500/30">
              <Clock className="h-4 w-4 text-blue-400" />
              <span className="text-blue-200 text-sm font-semibold">Applications Open Now</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">1</div>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Submit Your Portfolio</span>
                <p className="text-white/70 text-xs">Show us your best creative work and social media content</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">2</div>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Complete Creative Challenge</span>
                <p className="text-white/70 text-xs">Create a viral marketing campaign for our product</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">3</div>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Join Our Team</span>
                <p className="text-white/70 text-xs">Start creating content that reaches millions of users</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ready to Start?",
      subtitle: "Join our team and create content that matters",
      icon: <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-500/30",
      content: (
        <div className="text-center space-y-4">
          <div className="bg-gradient-to-br from-indigo-600/15 to-purple-600/15 rounded-xl p-4 border border-indigo-500/40">
            <h3 className="text-lg font-bold text-white mb-2">Why Apply Now?</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              This isn't just another internship. You'll work on real campaigns that reach <span className="text-indigo-300 font-bold">millions of users</span>, 
              build an impressive portfolio, and potentially join our team full-time.
            </p>
          </div>
          <div className="space-y-3">
            <a
              href="mailto:contact@getvesti.com?subject=Marketing%20Internship%20Application&body=Hi%20VESTI%20Team%2C%0A%0AI'm%20interested%20in%20applying%20for%20the%20Marketing%20%26%20Social%20Media%20Internship.%20Please%20find%20my%20CV%20attached.%0A%0ABest%20regards"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl w-full justify-center"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <div className="flex items-center justify-center gap-4 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-400" />
                <span>Remote Work</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-400" />
                <span>Portfolio Building</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-400" />
                <span>Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (event.key === 'Escape') {
        stopAnimation();
      } else if (event.key === 'ArrowLeft') {
        prevStep();
      } else if (event.key === 'ArrowRight') {
        nextStep();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    if (isPlaying && isOpen) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying, isOpen, steps.length]);

  const startAnimation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
    setIsOpen(false);
    setCurrentStep(0);
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="relative">
      {/* Better Layout with Text Left, Content Right */}
      <div className="max-w-4xl mx-auto">
        {/* Single Column Layout */}
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Why Choose This <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Internship</span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join a fast-growing AI startup and work on real marketing campaigns that actually matter. 
                You'll build an impressive portfolio with proven results, learn from industry experts, 
                and potentially land a full-time role. This isn't just another internship - it's your career launchpad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Work with cutting-edge AI technology</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Build real campaigns that drive results</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Create an impressive portfolio with real work</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">Potential for full-time role after internship</span>
              </div>
            </div>
          </div>

          {/* Stunning CTA Button - No Meaningless Blur */}
          <div className="relative group">
            <button
              onClick={startAnimation}
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 border border-white/20"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="h-5 w-5 text-white ml-0.5" />
              </div>
              <span>Watch Internship Overview</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3-6 Months</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Portfolio Building</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={stopAnimation}
          />
          
          {/* Modal Content - Smaller for Mobile */}
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 overflow-hidden max-h-[75vh] sm:max-h-[80vh]">
            {/* Close Button - Fixed */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopAnimation();
              }}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-50 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStep();
              }}
              className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer shadow-lg"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStep();
              }}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer shadow-lg"
              aria-label="Next step"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>

            {/* Content - Reduced Padding for Mobile */}
            <div className="p-3 sm:p-6 md:p-8">
              {/* Header - Smaller for Mobile */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm md:text-base">
                  {steps[currentStep].subtitle}
                </p>
              </div>

              {/* Dynamic Content - Smaller Margins */}
              <div className="mb-4 sm:mb-6">
                {steps[currentStep].content}
              </div>

              {/* Step Indicators - Smaller */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToStep(index);
                    }}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-white scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>

              {/* Apply Button - Back in Modal */}
              <div className="text-center">
                <button
                  onClick={handleApply}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-xs sm:text-sm"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 