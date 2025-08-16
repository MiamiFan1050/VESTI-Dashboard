import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';

interface LoomVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoomVideoModal({ isOpen, onClose }: LoomVideoModalProps) {
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[80vh]",
        "transition-all duration-300",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )}>
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-white hover:text-gray-300 z-20 bg-black/70 rounded-full p-3 backdrop-blur-sm border border-white/20"
          aria-label="Close video modal"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.loom.com/embed/e9eaa347c34b4cb7b2f88b866f6bdcc6?sid=9a1292fe-0834-4206-a304-229d0e747f4e&hideEmbedTopBar=true&hide_share=true&hide_title=true&hide_owner=true&hide_speed=true&t=0s&muted=1&autoplay=1" 
              frameBorder="0" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
