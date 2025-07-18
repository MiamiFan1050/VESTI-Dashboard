import { useState, useEffect } from 'react';

interface TryOnSlideshowProps {
  modelImages?: string[];
  clothingImages?: string[];
  resultImages?: string[];
}

const defaultImages = {
  model: [
    '/images/Model_01_before.jpg',
    '/images/Model_02_before.jpg',
    '/images/Model_03_before.jpg',
    '/images/Model_04_before.jpg'
  ],
  clothing: [
    '/images/Clothing_01.jpg',
    '/images/Clothing_02.jpg',
    '/images/Clothing_03.jpg',
    '/images/Clothing_04.jpg'
  ],
  result: [
    '/images/Model_01_after.jpg',
    '/images/model_02_after.jpg',
    '/images/Model_03_after.jpg',
    '/images/Model_04_after.jpg'
  ]
};

export const TryOnSlideshow: React.FC<TryOnSlideshowProps> = ({
  modelImages = defaultImages.model,
  clothingImages = defaultImages.clothing,
  resultImages = defaultImages.result,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSets = Math.min(modelImages.length, clothingImages.length, resultImages.length);

  // Auto-scroll without pause/play functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(current => 
        current === totalSets - 1 ? 0 : current + 1
      );
    }, 1800);
    
    return () => clearInterval(intervalId);
  }, [totalSets]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 rounded-3xl">
      {/* Title and Benefit Section */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">See the Magic in Action</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our Chrome extension removes your current outfit and shows any clothing item on your body in seconds
        </p>
      </div>

      <div className="showcase relative">
        {/* Removing the Flow Arrows that connect the panels */}
        
        {/* Panels */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-6 lg:gap-8 relative z-10">
          {/* Original Photo Panel */}
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="panel-header py-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-2">Step 1</span>
              <h3 className="text-base xs:text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Upload Your Photo
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {modelImages.map((image, index) => (
                <img
                  key={`model-${index}`}
                  src={image}
                  alt={`Model photo ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Selected Item Panel */}
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="panel-header py-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-2">Step 2</span>
              <h3 className="text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Select Any Clothing
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {clothingImages.map((image, index) => (
                <img
                  key={`clothing-${index}`}
                  src={image}
                  alt={`Clothing item ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Result Panel */}
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-purple-200">
            <div className="panel-header py-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium mb-2">Step 3</span>
              <h3 className="text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                See It On Your Body
              </h3>
            </div>
            <div className="panel-content relative aspect-[3/4]">
              {resultImages.map((image, index) => (
                <img
                  key={`result-${index}`}
                  src={image}
                  alt={`Result ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="mt-10 text-center">
        <a 
          href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
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
