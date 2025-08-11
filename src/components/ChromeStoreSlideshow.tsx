import React, { useState, useEffect } from 'react';

const images = [
  {
    src: "/images/VESTI51.jpg", 
    alt: "VESTI Feature Showcase 1"
  },
  {
    src: "/images/VESTI 52.png",
    alt: "VESTI Feature Showcase 2"
  }
];

export function ChromeStoreSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Trigger load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative max-w-5xl mx-auto transition-all duration-1000 ease-out ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Premium Slideshow Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white via-gray-50/50 to-white border border-gray-100/50">
        <div 
          className="flex transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block transition-all duration-700 ease-out group-hover:scale-[1.01]"
                style={{
                  backgroundColor: '#fffeff',
                  filter: 'brightness(1.02) contrast(1.01)',
                  mixBlendMode: 'normal'
                }}
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Premium slide indicator */}
        <div className="absolute top-6 right-6 bg-black/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-white/20 shadow-lg transition-all duration-300 hover:bg-black/20">
          <span className="font-semibold">{currentIndex + 1}</span>
          <span className="text-gray-500 mx-1">/</span>
          <span className="text-gray-500">{images.length}</span>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
        
        {/* Premium corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-br-3xl"></div>
      </div>

      {/* Floating premium elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
