import React, { useState } from 'react';

interface SarahTryOnProps {
  // Add props as needed
}

export function SarahTryOn({}: SarahTryOnProps) {
  const [selectedClothing, setSelectedClothing] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const sarahImages = {
    before: '/images/sarah-before.jpg',
    clothing: [
      '/images/Sarahb-1.webp',
      '/images/Sarahb-2.webp',
      '/images/Sarahb-3.webp',
      '/images/Sarahb-4.webp'
    ],
    beforeResults: [
      '/images/Sarahb-1.webp',
      '/images/Sarahb-2.webp',
      '/images/Sarahb-3.webp',
      '/images/Sarahb-4.webp'
    ],
    afterResults: [
      '/images/Sarahr-1.webp',
      '/images/Sarahr-2.webp',
      '/images/Sarahr-3.webp',
      '/images/Sarahr-4.webp'
    ]
  };

  const clothingNames = [
    'Casual T-Shirt',
    'Summer Dress', 
    'Blouse',
    'Cardigan'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
          Sarah's Women's Collection
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience AI-powered virtual try-ons with Sarah's exclusive collection
        </p>
      </div>

      {/* Model Card and Clothing Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Sarah's Before Image - Left Side */}
        <div className="flex justify-center">
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img 
              src={sarahImages.before} 
              alt="Sarah - Model" 
              className="w-80 h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">Sarah</h3>
              <p className="text-white/80 text-sm">Female</p>
            </div>
          </div>
        </div>

        {/* Clothing Selection - Right Side */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Choose Your Style</h3>
          <div className="grid grid-cols-2 gap-6">
            {sarahImages.clothing.map((clothing, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedClothing === index 
                    ? 'border-purple-500 shadow-purple-200' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setSelectedClothing(index)}
              >
                <img 
                  src={clothing} 
                  alt={clothingNames[index]}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h4 className="text-center font-semibold text-gray-800">
                    {clothingNames[index]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before/After Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setShowBefore(true)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              showBefore 
                ? 'bg-white text-gray-900 shadow-md' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowBefore(false)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              !showBefore 
                ? 'bg-white text-gray-900 shadow-md' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            After
          </button>
        </div>
      </div>

      {/* Result Display */}
      <div className="text-center mb-12">
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-2xl mx-auto">
          <img 
            src={showBefore ? sarahImages.beforeResults[selectedClothing] : sarahImages.afterResults[selectedClothing]} 
            alt={`Sarah ${showBefore ? 'Before' : 'After'} - ${clothingNames[selectedClothing]}`}
            className="w-full h-auto"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              showBefore 
                ? 'bg-blue-500 text-white' 
                : 'bg-green-500 text-white'
            }`}>
              {showBefore ? 'Before' : 'AI Generated'}
            </span>
          </div>
        </div>
      </div>

      {/* Try On Button */}
      <div className="text-center">
        <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
          Try On Now
        </button>
      </div>
    </div>
  );
}
