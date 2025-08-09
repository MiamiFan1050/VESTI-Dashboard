import { useEffect, useRef } from 'react';
import { ArrowRight, ShoppingBag, TrendingUp, Percent, Infinity } from 'lucide-react';

// Featured testimonials with metrics
const featuredTestimonials = [
  {
    quote: "I've cut my return rate by 80% since using Vesti! Now I shop with complete confidence.",
    author: "Olivia T.",
    role: "Online Shopper",
    metric: "80%",
    metricLabel: "Fewer Returns",
    icon: <Percent className="h-5 w-5" />,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    quote: "I used to buy 3 sizes of everything. Now I get the right size every time with Vesti.",
    author: "Mark S.",
    role: "Content Creator",
    metric: "100%",
    metricLabel: "Size Confidence",
    icon: <TrendingUp className="h-5 w-5" />,
    gradient: "from-purple-600 via-fuchsia-600 to-pink-600"
  },
  {
    quote: "As a retailer, we've seen a 40% drop in returns since recommending Vesti to customers.",
    author: "Rachel M.",
    role: "Boutique Owner",
    metric: "40%",
    metricLabel: "Return Reduction",
    icon: <ShoppingBag className="h-5 w-5" />,
    gradient: "from-pink-600 to-purple-600"
  }
];

const testimonialRows = [
  // Row 1 - Moving Left
  [
    { quote: "Vesti has completely changed how I shop online. No more guessing!", author: "Sarah J.", role: "Fashion Blogger", gradient: "from-purple-600 to-pink-600" },
    { quote: "The virtual try-on is incredibly accurate. Saved so much on returns!", author: "Michael R.", role: "Regular Shopper", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "This is the future of online shopping. Amazing AI technology!", author: "Emma L.", role: "Style Consultant", gradient: "from-pink-600 to-purple-600" },
    { quote: "Shopping has never been more confident. Love the previews!", author: "David K.", role: "Tech Enthusiast", gradient: "from-purple-600 to-pink-600" },
    { quote: "Game-changing technology for online retail!", author: "Rachel M.", role: "Boutique Owner", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "The accuracy is mind-blowing. Every store needs this!", author: "James P.", role: "Digital Marketer", gradient: "from-pink-600 to-purple-600" },
    { quote: "I've cut my return rate by 80% since using Vesti!", author: "Olivia T.", role: "Online Shopper", gradient: "from-purple-600 to-pink-600" },
    { quote: "Perfect for trying clothes before committing to purchase.", author: "Daniel F.", role: "Fashion Enthusiast", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" }
  ],
  // Row 2 - Moving Right
  [
    { quote: "Finally, no more size uncertainty when shopping online!", author: "Lisa T.", role: "Fashion Designer", gradient: "from-purple-600 to-pink-600" },
    { quote: "The AR preview is incredibly realistic. Love it!", author: "Mark S.", role: "Content Creator", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "Best online shopping experience I've ever had!", author: "Nina C.", role: "Lifestyle Blogger", gradient: "from-pink-600 to-purple-600" },
    { quote: "Revolutionary way to shop for clothes online!", author: "Tom H.", role: "Product Designer", gradient: "from-purple-600 to-pink-600" },
    { quote: "Perfect fit every time. No more returns!", author: "Alice W.", role: "Fashion Editor", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "Can't imagine shopping without Vesti now!", author: "Peter M.", role: "Tech Reviewer", gradient: "from-pink-600 to-purple-600" },
    { quote: "Vesti has saved me countless hours of shopping frustration.", author: "Jennifer K.", role: "Working Professional", gradient: "from-purple-600 to-pink-600" },
    { quote: "The most innovative shopping tool I've seen in years!", author: "Brandon L.", role: "Innovation Consultant", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" }
  ],
  // Row 3 - Moving Left
  [
    { quote: "Transformed my online shopping confidence!", author: "Kate B.", role: "Style Influencer", gradient: "from-purple-600 to-pink-600" },
    { quote: "The future of fashion retail is here!", author: "Ryan D.", role: "E-commerce Manager", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "Incredible accuracy in size predictions!", author: "Sophie L.", role: "Fashion Consultant", gradient: "from-pink-600 to-purple-600" },
    { quote: "Makes online shopping so much more fun!", author: "Chris P.", role: "UX Designer", gradient: "from-purple-600 to-pink-600" },
    { quote: "Finally, a solution to online fitting rooms!", author: "Maria G.", role: "Retail Analyst", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" },
    { quote: "Every online store should use this!", author: "Andrew R.", role: "Tech Journalist", gradient: "from-pink-600 to-purple-600" },
    { quote: "Shopping with confidence from the comfort of my home!", author: "Samantha J.", role: "Remote Worker", gradient: "from-purple-600 to-pink-600" },
    { quote: "Vesti has revolutionized my online shopping habits completely.", author: "Ethan M.", role: "Sustainability Advocate", gradient: "from-purple-600 via-fuchsia-600 to-pink-600" }
  ]
];

export function Testimonials() {
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    rowRefs.forEach((ref, index) => {
      if (!ref.current) return;
      
      const row = ref.current;
      const direction = index === 1 ? 1 : -1;
      
      // Different speeds for each row to prevent synchronization
      const speeds = [18, 16, 20];
      const speed = speeds[index];
      
      let position = 0;
      
      // Set initial positions to stagger the rows
      if (index === 0) position = 0;
      else if (index === 1) position = -300; // Start middle row at different position
      else position = -150;
      
      const animate = () => {
        position += direction * (speed / 60);
        const rowWidth = row.scrollWidth / 2;
        
        if (Math.abs(position) >= rowWidth) {
          position = 0;
        }
        
        row.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      
      animate();
    });
  }, []);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 md:px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 text-xs md:text-sm font-medium mb-4 md:mb-5 border border-purple-100/20">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
            People Are{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shopping with Confidence
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-3 md:mt-4">
            Our premium Chrome extension has helped thousands of shoppers reduce returns and shop with confidence
          </p>
        </div>

        {/* Premium Banner */}
        <div className="text-center py-6 md:py-8 mb-12 md:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
              <Infinity className="h-5 w-5 md:h-6 md:w-6 text-white" />
              <span className="text-white font-semibold text-sm md:text-base">Premium Unlimited Try-Ons</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Shop with Complete Confidence</h3>
            <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base">
              Try on any outfit virtually before you buy. Reduce returns, save time, and shop with confidence.
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center px-6 md:px-8 py-2.5 md:py-3.5 bg-white text-purple-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Add to Chrome
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {featuredTestimonials.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 md:p-6 shadow-xl border border-purple-100 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center text-purple-700">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">{item.metric}</div>
                      <div className="text-xs md:text-sm text-slate-600">{item.metricLabel}</div>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-slate-500">Verified</div>
                </div>
                <p className="text-slate-700 text-sm md:text-base mb-3 md:mb-4">{item.quote}</p>
                <div className="text-slate-500 text-xs md:text-sm">— {item.author}, {item.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Rows */}
        <div className="space-y-6 md:space-y-8">
          {testimonialRows.map((row, index) => (
            <div key={index} className="overflow-x-hidden">
              <div ref={rowRefs[index]} className="flex gap-3 md:gap-4 will-change-transform">
                {[...row, ...row].map((t, i) => (
                  <div key={i} className="min-w-[280px] md:min-w-[360px] bg-white rounded-xl p-4 md:p-6 shadow-lg border border-purple-100">
                    <p className="text-slate-700 text-sm md:text-base mb-2 md:mb-3">{t.quote}</p>
                    <div className="text-slate-500 text-xs md:text-sm">— {t.author}, {t.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}