import { ArrowRight, ShoppingBag, Infinity, BadgeCheck, CreditCard, Shield } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-pink-600/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="md:w-3/5">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20 mb-6">
              <Infinity className="h-4 w-4 mr-2" />
              <span>Premium Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Shop with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete Confidence
              </span>
            </h2>
            
            <p className="text-purple-200 text-lg mb-8 leading-relaxed max-w-2xl">
              Join thousands of satisfied shoppers who have revolutionized the way they buy clothes online. Our premium Chrome extension gives you all the tools you need to shop with complete confidence and eliminate returns.
            </p>
            
            {/* Benefit List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 flex items-center justify-center">
                  <BadgeCheck className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Unlimited Virtual Try-Ons</h3>
                  <p className="text-purple-200 text-sm">Try on as many items as you want from any retailer</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 flex items-center justify-center">
                  <BadgeCheck className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Reduce Returns by 85%</h3>
                  <p className="text-purple-200 text-sm">Shop with confidence and save time and money</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 flex items-center justify-center">
                  <BadgeCheck className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Premium AI Technology</h3>
                  <p className="text-purple-200 text-sm">Advanced algorithms for realistic virtual try-ons</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-white text-purple-700 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Add to Chrome - Premium Access
              <div className="w-6 h-6 rounded-full bg-purple-100 ml-3 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <ArrowRight className="h-3.5 w-3.5 text-purple-700" />
              </div>
            </a>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-purple-300">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Privacy Protected</span>
              </div>
              
              <div className="flex items-center gap-2 text-purple-300">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Secure Installation</span>
              </div>
              
              <div className="flex items-center gap-2 text-purple-300">
                <ShoppingBag className="h-5 w-5" />
                <span className="text-sm">Works Everywhere</span>
              </div>
            </div>
          </div>
          
          {/* Image/Preview Side */}
          <div className="md:w-2/5 relative">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-r from-purple-100 to-pink-50 rounded-xl p-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-inner">
                  <img 
                    src="/images/cta-preview.jpg" 
                    alt="Vesti virtual try-on preview" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Before/After Overlay */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      {/* Before Label */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-xs rounded-md">
                        Before
                      </div>
                      {/* This is just for effect, the image already has the before/after split */}
                      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white"></div>
                    </div>
                    <div className="w-1/2 relative">
                      {/* After Label */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-md">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200">
                    <Infinity className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Premium Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 -mt-12 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60 filter blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 left-12 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 filter blur-2xl animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Testimonial Quote */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <div className="text-white opacity-40 text-6xl font-serif">"</div>
          <p className="text-white text-xl italic my-6 leading-relaxed">
            Vesti completely changed how I shop online. I no longer order multiple sizes or worry about returns. I shop with complete confidence knowing exactly how clothing will look on me.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-purple-400/20 backdrop-blur-sm flex items-center justify-center border border-purple-400/30">
              <span className="text-purple-300 text-xl font-medium">SJ</span>
            </div>
            <div className="ml-4 text-left">
              <p className="text-white font-medium">Sarah Johnson</p>
              <p className="text-purple-300 text-sm">Fashion Blogger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 