import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface VideoSectionProps {
  isVisible: boolean;
  onClose: () => void;
}

export function VideoSection({ isVisible, onClose }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
    }
    
    if (audioRef.current) {
      audioRef.current.volume = 0.7; // Set volume to 70%
      // Remove loop - audio will play once and stop
    }
    
    // Add comprehensive event listeners
    const video = videoRef.current;
    const audio = audioRef.current;
    
    if (video) {
      const handleLoadStart = () => {
        console.log('🎬 Video load started');
        setVideoError(null);
      };
      
      const handleLoadedMetadata = () => {
        console.log('🎬 Video metadata loaded');
        console.log('Duration:', video.duration);
        console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
      };
      
      const handleLoadedData = () => {
        console.log('🎬 Video data loaded');
        setVideoLoaded(true);
      };
      
      const handleCanPlay = () => {
        console.log('🎬 Video can play');
      };
      
      const handleCanPlayThrough = () => {
        console.log('🎬 Video can play through');
      };
      
      const handlePlay = () => {
        console.log('🎬 Video play event fired!');
        setIsPlaying(true);
        // Start audio when video starts
        if (audio) {
          audio.play().catch(err => console.log('Audio play error:', err));
        }
      };
      
      const handlePause = () => {
        console.log('🎬 Video pause event fired!');
        setIsPlaying(false);
        // Pause audio when video pauses
        if (audio) {
          audio.pause();
        }
      };
      
      const handleError = (e: Event) => {
        console.error('🎬 Video error:', e);
        const target = e.target as HTMLVideoElement;
        console.error('Error code:', target.error?.code);
        console.error('Error message:', target.error?.message);
        setVideoError(`Error: ${target.error?.message || 'Unknown error'}`);
      };
      
      // Audio event listeners
      if (audio) {
        const handleAudioEnded = () => {
          console.log('🎵 Audio ended');
          // Audio finished, but video continues looping
        };
        
        audio.addEventListener('ended', handleAudioEnded);
        
        // Clean up audio listeners in the return function
        return () => {
          video.removeEventListener('loadstart', handleLoadStart);
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('canplay', handleCanPlay);
          video.removeEventListener('canplaythrough', handleCanPlayThrough);
          video.removeEventListener('play', handlePlay);
          video.removeEventListener('pause', handlePause);
          video.removeEventListener('error', handleError);
          audio.removeEventListener('ended', handleAudioEnded);
        };
      }
      
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handlePlayVideo = async () => {
    console.log('🎯 Play button clicked!');
    
    if (!videoRef.current) {
      console.error('❌ Video element not found!');
      return;
    }
    
    const video = videoRef.current;
    const audio = audioRef.current;
    console.log('🎬 Video element found');
    console.log('🎬 Video readyState:', video.readyState);
    console.log('🎬 Video paused:', video.paused);
    
    try {
      console.log('▶️ Attempting to play video and audio...');
      
      // Start both video and audio
      const videoPromise = video.play();
      const audioPromise = audio ? audio.play() : Promise.resolve();
      
      await Promise.all([videoPromise, audioPromise]);
      console.log('✅ Video and audio started successfully!');
      setIsPlaying(true);
    } catch (error) {
      console.error('❌ Error playing video/audio:', error);
      setVideoError('Video playback failed. Please try refreshing the page.');
    }
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const audio = audioRef.current;

    if (isPlaying) {
      // Pause video and audio
      video.pause();
      if (audio) {
        audio.pause();
      }
      setIsPlaying(false);
    } else {
      // Play video and audio
      video.play().catch(err => {
        console.error('Error playing video:', err);
        setVideoError('Video playback failed. Please try refreshing the page.');
      });
      
      if (audio) {
        audio.play().catch(err => console.log('Audio play error:', err));
      }
      setIsPlaying(true);
    }
  };

  if (!isVisible) return null;

  return (
    <section id="video-demo" className="relative w-full bg-gradient-to-b from-white via-purple-50/30 to-white py-12 transform transition-all duration-700 ease-out overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-2/3 h-2/3 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Enhanced Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-purple-400 opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 rounded-full bg-pink-400 opacity-30 animate-ping" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-purple-300 opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-pink-300 opacity-30 animate-ping" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-8 h-8 border-2 border-purple-300/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-pink-300/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 text-sm font-medium border border-purple-100/20 mb-4 animate-in slide-in-from-bottom-8 duration-1000">
            <span>🎬</span>
            <span className="ml-2">Product Demo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            See VESTI AI
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              {' '}in Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-400">
            Watch how our revolutionary AI technology transforms your shopping experience with realistic virtual try-ons
          </p>
        </div>

        {/* Enhanced Video Container with clean effects */}
        <div className="relative max-w-6xl mx-auto">
          {/* Clean border effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 animate-pulse"></div>
          
          {/* Video frame with enhanced styling */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 group">
            {/* Enhanced Video header bar */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-full shadow-sm h-5 w-60 flex items-center justify-center text-xs text-gray-500 px-2 border border-gray-200">
                  vesti-ai-demo.com
                </div>
              </div>
              <div className="h-5 w-5"></div>
            </div>
            
            {/* Local HTML5 Video with clickable overlay */}
            <div className="relative overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-700 cursor-pointer"
                loop
                muted
                playsInline
                controls={false}
                preload="metadata"
                onClick={handleVideoClick}
              >
                <source src="/videos/vesti-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Hidden audio element for synchronized audio */}
              <audio
                ref={audioRef}
                preload="metadata"
                style={{ display: 'none' }}
              >
                <source src="/videos/vesti-demo-audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
              
              {/* Clickable overlay - shows play or pause button */}
              <div 
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleVideoClick}
              >
                <div className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/50">
                  {isPlaying ? (
                    <div className="h-12 w-12 flex items-center justify-center">
                      <div className="w-4 h-8 border-l-4 border-r-4 border-gray-800"></div>
                    </div>
                  ) : (
                    <Play className="h-12 w-12 ml-1" fill="currentColor" />
                  )}
                </div>
              </div>
              
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Floating accent elements around video */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          

        </div>

        {/* Enhanced Call to action below video */}
        <div className="text-center mt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-600">
          <p className="text-gray-600 mb-8 text-lg">Ready to experience the future of shopping?</p>
          <a 
            href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 active:translate-y-0 hover:scale-105"
          >
            Add to Chrome - Start Shopping
            <ArrowRight className="ml-3 h-6 w-6 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
}
