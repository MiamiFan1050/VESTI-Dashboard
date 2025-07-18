import React, { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, ChevronRight, CheckCircle } from 'lucide-react';

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Add debugging log to verify component renders
  useEffect(() => {
    console.log('Demo component from Demo.tsx rendered at:', new Date().toISOString());
  }, []);
  
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-100/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-pink-100/30 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-4">
            <PlayCircle className="h-4 w-4 mr-2" />
            <span>See the Magic in Action</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Try Before You Buy, <span className="text-purple-700">Virtually</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Our Chrome extension removes your current outfit and shows any clothing item on your body in seconds
          </p>
        </div>
        
        {/* Demo Viewer - Matching the exact appearance in screenshot */}
        <div className="bg-white rounded-2xl shadow-xl border border-purple-100 mb-16 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 max-w-4xl mx-auto">
              {/* Step Labels styled exactly like the screenshot */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-4">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full px-3 py-1 inline-block mb-2">
                    <span className="text-purple-600 text-sm font-medium">Step 1</span>
                  </div>
                  <p className="text-pink-500 font-medium text-base md:text-lg">Upload Your Photo</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full px-3 py-1 inline-block mb-2">
                    <span className="text-purple-600 text-sm font-medium">Step 2</span>
                  </div>
                  <p className="text-pink-500 font-medium text-base md:text-lg">Select Any Clothing</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-600 rounded-full flex justify-center items-center px-3 py-1 inline-block mb-2">
                    <CheckCircle className="inline-block h-4 w-4 mr-1 text-white" />
                    <span className="text-white text-sm font-medium">Instant Result</span>
                  </div>
                  <p className="text-pink-500 font-medium text-base md:text-lg">See It On Your Body</p>
                </div>
              </div>
              
              {/* Images row - styled to match screenshot exactly */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                {/* Left image - Original photo */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src="/images/demo-before.jpg" 
                    alt="Original photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Middle image - Clothing item */}
                <div className="relative">
                  <div className="bg-gray-50 rounded-2xl p-4 md:p-6 flex items-center justify-center h-full shadow-sm">
                    <img 
                      src="/images/clothing-item.jpg" 
                      alt="Clothing item" 
                      className="max-h-48 object-contain"
                    />
                  </div>
                  
                  {/* Center connector lines - styled as in screenshot */}
                  <div className="absolute left-0 top-1/2 -translate-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="#9333EA" strokeWidth="2" strokeDasharray="2 2"/>
                    </svg>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 translate-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="#9333EA" strokeWidth="2" strokeDasharray="2 2"/>
                    </svg>
                  </div>
                  
                  {/* Unlimited Items badge - positioned as in screenshot */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-5">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full px-3 py-1.5 whitespace-nowrap flex items-center shadow-md">
                      <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5H5a1 1 0 00-1 1v12a1 1 0 001 1h3M16 5h3a1 1 0 011 1v12a1 1 0 01-1 1h-3M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Unlimited Items
                    </div>
                  </div>
                </div>
                
                {/* Right image - Result */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative h-full">
                    <img 
                      src="/images/demo-after.jpg" 
                      alt="Virtual try-on result" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Non-overlapping results callout - bottom right corner only */}
                    <div className="absolute bottom-0 right-0 max-w-[180px] bg-black/60 px-3 py-2 text-white rounded-tl-md">
                      <p className="text-xs">Shop with complete confidence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Controls - styled to match screenshot exactly */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-2 mb-6">
                  <button 
                    className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center"
                    aria-label="Previous example"
                  >
                    <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center"
                    aria-label="Pause slideshow"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
                        <rect x="14" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none">
                        <path d="M6 4l12 8-12 8V4z" fill="currentColor"/>
                      </svg>
                    )}
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center"
                    aria-label="Next example"
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <a 
                  href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all"
                  aria-label="Add to Chrome - Unlimited Try-Ons"
                >
                  Add to Chrome - Unlimited Try-Ons
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Comparison - Enhanced for visual appeal */}
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100/40 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100/40 rounded-full filter blur-3xl"></div>
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Premium Experience</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 relative inline-block">
              The <span className="relative">
                Confidence 
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-purple-200/50 to-pink-200/50 -z-10"></span>
              </span> 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Difference</span>
            </h3>
            
            <p className="text-slate-600 text-lg mb-16 max-w-3xl mx-auto">
              Experience the transformative impact of shopping with confidence instead of uncertainty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              {/* Decorative "Without" badge */}
              <div className="absolute -top-6 inset-x-0 flex justify-center">
                <div className="px-8 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 text-sm font-medium rounded-full border border-red-200 shadow-sm">
                  Shopping Without Vesti
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-red-100 shadow-xl h-full transform hover:rotate-1 transition-transform duration-300">
                <div className="flex items-center justify-center mb-8 md:mb-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-50 p-5 flex items-center justify-center">
                    <svg className="h-10 w-10 md:h-12 md:w-12 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-500 mt-0.5 shadow-sm">✕</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Guessing if clothes will fit properly</h4>
                      <p className="text-slate-600 text-sm">Ordering blindly based on size charts that vary between brands</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-500 mt-0.5 shadow-sm">✕</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Ordering multiple sizes "just in case"</h4>
                      <p className="text-slate-600 text-sm">Wasting money on extra shipping and tying up funds in returns</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-500 mt-0.5 shadow-sm">✕</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Wasting time with returns</h4>
                      <p className="text-slate-600 text-sm">The hassle of repackaging, printing labels, and trips to return centers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-500 mt-0.5 shadow-sm">✕</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Disappointment when items arrive</h4>
                      <p className="text-slate-600 text-sm">The frustration of clothes that look nothing like you expected</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative "With" badge */}
              <div className="absolute -top-6 inset-x-0 flex justify-center">
                <div className="px-8 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 text-sm font-medium rounded-full border border-purple-200 shadow-sm">
                  Shopping With Vesti
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-purple-50 p-6 md:p-8 rounded-2xl border border-purple-100 shadow-xl h-full transform hover:-rotate-1 transition-transform duration-300">
                <div className="flex items-center justify-center mb-8 md:mb-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 p-5 flex items-center justify-center">
                    <svg className="h-10 w-10 md:h-12 md:w-12 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 flex items-center justify-center text-purple-600 mt-0.5 shadow-sm">✓</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Shop with complete confidence</h4>
                      <p className="text-slate-600 text-sm">See exactly how clothes will look on your body before purchasing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 flex items-center justify-center text-purple-600 mt-0.5 shadow-sm">✓</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Order the perfect size every time</h4>
                      <p className="text-slate-600 text-sm">AI technology ensures you always select the right fit for your body</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 flex items-center justify-center text-purple-600 mt-0.5 shadow-sm">✓</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Save time and eliminate returns</h4>
                      <p className="text-slate-600 text-sm">No more wasted time with packaging and shipping back unwanted items</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 flex items-center justify-center text-purple-600 mt-0.5 shadow-sm">✓</div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Excitement when items arrive exactly as expected</h4>
                      <p className="text-slate-600 text-sm">The joy of opening packages knowing they'll fit and look great</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-16">
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Experience the Confidence Difference
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 