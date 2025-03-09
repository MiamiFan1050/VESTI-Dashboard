import { Chrome, ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { VideoModal } from './TutorialVideo/VideoModal';
import { useModal } from '../hooks/useModal';
import TryOnSlideshow from './TryOnSlideshow';

export function Hero() {
  const { isOpen, open, close } = useModal();

  return (
    <section className="pt-40 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced animated background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="text-center space-y-8 relative">
          <div className="animate-fade-in-up">
            {/* Enhanced badge design */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-purple-600" />
                New: AI-powered size recommendations
              </span>
            </div>

            {/* Enhanced typography and gradient */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Try Before You Buy,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 mt-2 animate-gradient">
                Virtually Perfect
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience clothes shopping like never before. Try on outfits virtually in real-time,
              right from your browser with <span className="font-semibold text-purple-600">AI-powered precision</span>.
            </p>
          </div>
          
          {/* Enhanced button group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Chrome className="h-5 w-5 mr-2 animate-spin-slow" />
              <span>Add to Chrome - It's Free</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={open}
              className="w-full sm:w-auto group backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <Play className="h-5 w-5 mr-2 transform group-hover:scale-110 transition-transform text-purple-600" />
              Watch Demo
            </Button>
          </div>

          {/* Try-On Slideshow with enhanced container */}
          <div className="mt-16 relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"></div>
              <TryOnSlideshow />
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isOpen} onClose={close} />
    </section>
  );
}