import React from 'react';
import { ArrowRight, Play, Chrome, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">


      {/* Main Content - Single Page Layout */}
      <div className="h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Content - Video */}
          <div className="relative lg:col-span-2">
            {/* Video Container with Glow Effect */}
            <div className="relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-20 animate-pulse"></div>
              
              <div className="relative bg-black rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-sm">vesti.ai/tutorial</div>
                </div>
                
                {/* Video Container - Structured for extension detection */}
                <div className="relative rounded-3xl overflow-hidden bg-transparent shadow-2xl w-full max-w-7xl">
                  {/* Hidden product elements for extension detection */}
                  <div className="hidden">
                    <img src="/images/Clothing_01.jpeg" alt="Product Image" className="product-image" />
                    <div className="product-title">Sample Product</div>
                    <div className="product-price">$29.99</div>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                  
                  {/* Video Embed */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                      <iframe 
                        src="https://www.loom.com/embed/e9eaa347c34b4cb7b2f88b866f6bdcc6?sid=9a1292fe-0834-4206-a304-229d0e747f4e&hideEmbedTopBar=true&hide_share=true&hide_title=true&hide_owner=true&hide_speed=true&t=0s&muted=1" 
                        frameBorder="0" 
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowFullScreen 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        className="shadow-xl"
                      />
                      
                      {/* Play Button Overlay */}
                      <div 
                        className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer z-10 hover:bg-black/30 transition-all duration-300"
                        onClick={() => {
                          // Start audio when user clicks play button
                          const audio = document.getElementById('vesti-audio') as HTMLAudioElement;
                          if (audio) {
                            console.log('Audio element found, attempting to play...');
                            audio.play().then(() => {
                              console.log('Audio started successfully!');
                            }).catch(e => {
                              console.log('Audio play failed:', e);
                              // Try to show what went wrong
                              if (e.name === 'NotAllowedError') {
                                console.log('Browser blocked autoplay - user needs to interact first');
                              }
                            });
                          } else {
                            console.log('Audio element not found!');
                          }
                          // Hide the play button after clicking
                          const playButton = document.getElementById('play-overlay');
                          if (playButton) {
                            playButton.style.display = 'none';
                          }
                        }}
                        id="play-overlay"
                      >
                        <div className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/50">
                          <svg className="w-12 h-12 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Audio Player for synchronized audio - only plays when video is interacted with */}
                  <audio 
                    id="vesti-audio"
                    className="mt-4 w-full"
                    style={{ display: 'none' }}
                    preload="metadata"
                  >
                    <source src="/videos/vesti-demo-audio.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Right Content - Extension CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Click here to{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  open Vesti AI
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Your extension is now installed and ready to use!
              </p>
            </div>

            {/* Longer white arrow pointing down - double the line length */}
            <div className="absolute bottom-32 right-40 animate-bounce">
              <svg className="w-16 h-48 text-white" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path d="M12 2v32m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
}
