import { useState, useEffect, useRef, useCallback } from 'react';

interface TryOnSlideshowProps {
  modelImages?: string[];
  clothingImages?: string[];
  resultImages?: string[];
}

const defaultImages = {
  model: [
    '/images/Model_01_before.jpeg',
    '/images/Model_02_before.jpg',
    '/images/Model_03_before.jpg',
    '/images/Model_04_before.jpg',
    '/images/Model_05_before.png',
    '/images/Model_06_before.jpeg',
    '/images/Model_07_before.jpeg',
    '/images/Model_08_before.jpeg',
    '/images/Model_09_before.jpeg',
    '/images/Model_10_before.png'
  ],
  clothing: [
    '/images/Clothing_01.jpeg',
    '/images/Clothing_02.jpg',
    '/images/Clothing_03.jpg',
    '/images/Clothing_04.jpg',
    '/images/Clothing_05.png',
    '/images/Clothing_06.png',
    '/images/Clothing_07.jpeg',
    '/images/Clothing_08.png',
    '/images/Clothing_09.png',
    '/images/Clothing_10.png'
  ],
  result: [
    '/images/Model_01_after.jpeg',
    '/images/model_02_after.jpg',
    '/images/Model_03_after.jpg',
    '/images/Model_04_after.jpg',
    '/images/Model_05_after.png',
    '/images/Model_06_after.jpeg',
    '/images/Model_07_after.jpeg',
    '/images/Model_08_after.jpeg',
    '/images/Model_09_after.jpeg',
    '/images/Model_10_after.png'
  ]
};

export const TryOnSlideshow: React.FC<TryOnSlideshowProps> = ({
  modelImages = defaultImages.model,
  clothingImages = defaultImages.clothing,
  resultImages = defaultImages.result,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSets = Math.min(modelImages.length, clothingImages.length, resultImages.length);

  // Enhanced Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-30px 0px -30px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Enhanced scroll-based animation with better performance
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Improved scroll progress calculation for smoother animation
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = viewportCenter - elementCenter;
      const maxDistance = windowHeight / 2;
      
      const progress = Math.max(0, Math.min(1, 1 - (distance / maxDistance)));
      setScrollProgress(progress);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Auto-scroll without pause/play functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(current => 
        current === totalSets - 1 ? 0 : current + 1
      );
    }, 1800);
    
    return () => clearInterval(intervalId);
  }, [totalSets]);

  // Enhanced panel style calculation with better animations
  const getPanelStyle = useCallback((panelIndex: number) => {
    const baseOpacity = isVisible ? 1 : 0;
    const scrollOpacity = Math.max(0, Math.min(1, (scrollProgress - panelIndex * 0.15) * 3));
    const opacity = baseOpacity * (0.8 + scrollOpacity * 0.2);
    
    // Enhanced transform with parallax-like movement
    const translateY = Math.sin(scrollProgress * Math.PI + panelIndex * 0.3) * 15;
    const scale = 0.98 + scrollOpacity * 0.02;
    const translateX = Math.sin(scrollProgress * Math.PI + panelIndex * 0.7) * 5;
    
    const transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    
    return {
      opacity,
      transform,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  }, [isVisible, scrollProgress]);

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-2 py-3 rounded-3xl relative">
      {/* Title and Benefit Section - Reduced spacing */}
      <div 
        className="text-center mb-4 transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-1">See the Magic in Action</h3>
        <p className="text-gray-600 max-w-lg mx-auto text-sm">
          Our Chrome extension removes your current outfit and shows any clothing item on your body in seconds
        </p>
      </div>

      <div className="showcase relative">
        {/* Panels with ultra-tight spacing and enhanced scroll-based animations */}
        <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-3 relative z-10 -mx-2 md:-mx-4">
          {/* Original Photo Panel */}
          <div 
            className="panel bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 mx-1 md:mx-2"
            style={getPanelStyle(0)}
          >
            <div className="panel-header py-2 text-center">
              <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-1">Step 1</span>
              <h3 className="text-xs md:text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Upload Your Photo
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {modelImages.map((image, index) => (
                <img
                  key={`model-${index}`}
                  src={image}
                  alt={`Model photo ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Selected Item Panel */}
          <div 
            className="panel bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 mx-1 md:mx-2"
            style={getPanelStyle(1)}
          >
            <div className="panel-header py-2 text-center">
              <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-1">Step 2</span>
              <h3 className="text-xs md:text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Select Any Clothing
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {clothingImages.map((image, index) => (
                <img
                  key={`clothing-${index}`}
                  src={image}
                  alt={`Clothing item ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Result Panel */}
          <div 
            className="panel bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 border-2 border-purple-200 mx-1 md:mx-2"
            style={getPanelStyle(2)}
          >
            <div className="panel-header py-2 text-center">
              <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-1">Step 3</span>
              <h3 className="text-xs md:text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                See It On Your Body
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {resultImages.map((image, index) => (
                <img
                  key={`result-${index}`}
                  src={image}
                  alt={`Result ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Button - Reduced spacing */}
      <div 
        className="mt-4 text-center transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <a 
          href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-sm"
          aria-label="Add to Chrome with unlimited try-ons"
        >
          Add to Chrome - Unlimited Try-Ons
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TryOnSlideshow;
