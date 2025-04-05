import { useState } from 'react';
import { Button } from './ui/Button';
import { Chrome, Infinity, Star, Shield } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-pink-900/95"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400 opacity-30 animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-pink-400 opacity-20 animate-ping"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-purple-300 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-pink-300 opacity-20 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl"></div>
          
          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm mb-6 border border-white/20">
                <Infinity className="w-8 h-8 text-white animate-pulse" />
              </div>
              
              <span className="inline-block px-4 py-1 rounded-full bg-purple-400/10 text-purple-200 text-sm font-medium mb-4 border border-purple-400/20">
                Premium Experience
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Experience{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Confident Shopping
                </span>
              </h2>
              
              <p className="text-lg text-purple-200 mb-8 leading-relaxed">
                Our premium Chrome extension gives you all the tools you need to shop with complete confidence and eliminate returns
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Premium Features */}
              <div className="grid md:grid-cols-3 gap-6 w-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex flex-col items-center text-center">
                  <Infinity className="h-6 w-6 text-purple-300 mb-2" />
                  <h3 className="text-white text-sm font-medium mb-1">Unlimited Items</h3>
                  <p className="text-purple-200 text-xs">Try on as many clothing items as you want</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex flex-col items-center text-center">
                  <Star className="h-6 w-6 text-purple-300 mb-2" />
                  <h3 className="text-white text-sm font-medium mb-1">Premium AI</h3>
                  <p className="text-purple-200 text-xs">Advanced inpainting technology for realistic results</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-purple-300 mb-2" />
                  <h3 className="text-white text-sm font-medium mb-1">Privacy Protected</h3>
                  <p className="text-purple-200 text-xs">Your photos never leave your device</p>
                </div>
              </div>
              
              <Button 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
              >
                <Chrome className="w-5 h-5" />
                Add to Chrome - Premium Access
              </Button>
              
              <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
                
              <div className="text-center">
                <p className="text-purple-200 mb-4">Want updates on new features?</p>
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl active:shadow-md"
                    >
                      Subscribe
                    </Button>
                  </div>
                  
                  <div className="h-8 mt-4 flex items-center justify-center">
                    {status === 'success' && (
                      <div className="flex items-center justify-center gap-2 text-green-400 animate-fadeIn">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p>Thanks for subscribing!</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              
              {/* Privacy Note */}
              <p className="mt-2 text-purple-300 text-sm text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-2xl"></div>
          <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full filter blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}