import React from 'react';

interface BlogVisualProps {
  type: 'ai-tech' | 'virtual-tryon' | 'gen-z' | 'chrome-ext' | 'influencer' | 'confidence' | 'sustainable';
  className?: string;
}

export function BlogVisual({ type, className = '' }: BlogVisualProps) {
  const baseClasses = "w-full h-48 md:h-64 rounded-xl shadow-lg overflow-hidden relative";
  
  const visualContent = {
    'ai-tech': (
      <div className={`${baseClasses} bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* AI Circuit Pattern */}
              <div className="relative">
                <div className="w-32 h-32 border-2 border-white/30 rounded-full mx-auto mb-4 relative">
                  <div className="absolute inset-4 border border-white/50 rounded-full">
                    <div className="absolute inset-3 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">AI</span>
                    </div>
                  </div>
                  {/* Connecting lines */}
                  <div className="absolute top-1/2 left-0 w-8 h-px bg-white/40 -translate-x-full"></div>
                  <div className="absolute top-1/2 right-0 w-8 h-px bg-white/40 translate-x-full"></div>
                  <div className="absolute left-1/2 top-0 w-px h-8 bg-white/40 -translate-y-full"></div>
                  <div className="absolute left-1/2 bottom-0 w-px h-8 bg-white/40 translate-y-full"></div>
                </div>
                <h3 className="text-xl font-bold">AI Technology</h3>
                <p className="text-sm opacity-80">Revolutionizing Fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'virtual-tryon': (
      <div className={`${baseClasses} bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Virtual Try-On Visual */}
              <div className="relative">
                <div className="w-24 h-32 bg-white/20 rounded-lg mx-auto mb-4 relative">
                  <div className="absolute inset-2 border-2 border-white/50 rounded border-dashed">
                    <div className="absolute inset-1 bg-gradient-to-b from-white/30 to-white/10 rounded"></div>
                  </div>
                  {/* Clothing overlay effect */}
                  <div className="absolute -top-2 -left-2 w-28 h-36 border-2 border-pink-300 rounded-lg opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold">Virtual Try-On</h3>
                <p className="text-sm opacity-80">See Before You Buy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'gen-z': (
      <div className={`${baseClasses} bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Gen Z Mobile-First Visual */}
              <div className="relative">
                <div className="w-16 h-28 bg-white/20 rounded-lg mx-auto mb-4 relative">
                  <div className="absolute inset-1 bg-gradient-to-b from-white/30 to-white/10 rounded">
                    <div className="absolute top-2 left-1/2 w-6 h-px bg-white/50 -translate-x-1/2 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 w-4 h-4 border border-white/50 rounded-full -translate-x-1/2"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Gen Z Shopping</h3>
                <p className="text-sm opacity-80">Digital Native Style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'chrome-ext': (
      <div className={`${baseClasses} bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Chrome Extension Visual */}
              <div className="relative">
                <div className="w-32 h-20 bg-white/20 rounded-lg mx-auto mb-4 relative">
                  <div className="absolute inset-2 bg-gradient-to-r from-white/30 to-white/10 rounded">
                    {/* Extension icons */}
                    <div className="absolute top-1 right-1 flex gap-1">
                      <div className="w-3 h-3 bg-purple-400 rounded"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Chrome Extensions</h3>
                <p className="text-sm opacity-80">Smart Shopping Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'influencer': (
      <div className={`${baseClasses} bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Influencer Content Visual */}
              <div className="relative">
                <div className="flex gap-2 justify-center mb-4">
                  <div className="w-12 h-16 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-16 bg-white/30 rounded-lg"></div>
                  <div className="w-12 h-16 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold">Influencer Content</h3>
                <p className="text-sm opacity-80">Viral Fashion Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'confidence': (
      <div className={`${baseClasses} bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Confidence Visual */}
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Shop with Confidence</h3>
                <p className="text-sm opacity-80">Perfect Fit Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'sustainable': (
      <div className={`${baseClasses} bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 ${className}`}>
        <div className="absolute inset-0 bg-black/20">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              {/* Sustainability Visual */}
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Sustainable Fashion</h3>
                <p className="text-sm opacity-80">Reduce, Reuse, Try-On</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return visualContent[type] || visualContent['ai-tech'];
}

export default BlogVisual;
