import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSets = Math.min(modelImages.length, clothingImages.length, resultImages.length);

  const nextSet = useCallback(() => {
    setCurrentIndex(current => 
      current < totalSets - 1 ? current + 1 : current
    );
  }, [totalSets]);

  const prevSet = useCallback(() => {
    setCurrentIndex(current => 
      current > 0 ? current - 1 : current
    );
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying(current => !current);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex(current => 
          current === totalSets - 1 ? 0 : current + 1
        );
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, totalSets]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 bg-gradient-to-br from-purple-50/50 via-white/50 to-pink-50/50 rounded-3xl">
      <div className="showcase relative">
        {/* Flow Arrows */}
        <div className="hidden md:block absolute top-1/2 left-[33%] right-[33%] -translate-y-1/2 z-0 pointer-events-none">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 h-[0.5px] bg-gradient-to-r from-purple-400/60 via-purple-400/40 to-purple-400/10"></div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-[0.5px] bg-gradient-to-r from-purple-400/60 via-purple-400/40 to-purple-400/10"></div>
            </div>
          </div>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {/* Original Photo Panel */}
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            <div className="panel-header py-4 text-center">
              <span className="text-sm text-purple-400 mb-1 block">Step 1</span>
              <h3 className="text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Original Photo
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
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            <div className="panel-header py-4 text-center">
              <span className="text-sm text-purple-400 mb-1 block">Step 2</span>
              <h3 className="text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Selected Item
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
          <div className="panel bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            <div className="panel-header py-4 text-center">
              <span className="text-sm text-purple-400 mb-1 block">Step 3</span>
              <h3 className="text-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Virtual Try-On Result
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

      {/* Controls */}
      <div className="controls mt-8 flex justify-center gap-3">
        <button
          onClick={prevSet}
          disabled={currentIndex === 0}
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:hover:translate-y-0 disabled:shadow-none"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={toggleAutoPlay}
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        <button
          onClick={nextSet}
          disabled={currentIndex === totalSets - 1}
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:hover:translate-y-0 disabled:shadow-none"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TryOnSlideshow;
