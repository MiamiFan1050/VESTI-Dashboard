import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { Brands } from '../components/Brands';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';
import { CTASection } from '../components/CTASection';
import { useEffect, useRef, useState } from 'react';

export function LandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Handle hash scrolling when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }, 100);
    }
  }, []);

  // Scroll-based overlay effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = section.offsetHeight;
        
        // Calculate progress through this section (0 to 1)
        const progress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight * 0.5) / (sectionHeight + windowHeight * 0.3)));
        
        // Apply overlay effect with smoother transitions
        if (progress > 0 && progress < 1) {
          // Create overlay effect for smooth transitions
          const opacity = Math.min(1, Math.pow(progress, 0.8) * 1.2);
          const transform = `translateY(${(1 - progress) * -30}px) scale(${0.98 + progress * 0.02})`;
          const zIndex = Math.floor(progress * 15) + 1;
          
          section.style.opacity = opacity.toString();
          section.style.transform = transform;
          section.style.zIndex = zIndex.toString();
          section.style.position = 'relative';
        } else if (progress >= 1) {
          // Section is fully visible
          section.style.opacity = '1';
          section.style.transform = 'translateY(0) scale(1)';
          section.style.zIndex = '15';
          section.style.position = 'relative';
        } else {
          // Section is not yet visible
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px) scale(0.98)';
          section.style.zIndex = '0';
          section.style.position = 'relative';
        }
      });
      
      setScrollProgress(scrollY / (document.body.scrollHeight - windowHeight));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO description optimized for virtual try-on
  const seoDescription = "Transform your online shopping experience with VESTI's revolutionary virtual try-on technology. Our AI-powered virtual fitting room lets you try clothes virtually before buying, ensuring perfect fit and zero returns. Experience the future of fashion with our advanced virtual dressing room.";
  
  // SEO keywords focusing on virtual try-on
  const seoKeywords = "virtual try on, virtual fitting room, virtual dressing room, AI fashion technology, digital clothing try on, online fitting room, virtual clothing fitting, AR clothing try on, virtual fashion try on, e-commerce virtual try on, virtual try on solution, fashion technology, digital fashion, virtual fashion fitting";

  return (
    <>
      <Helmet>
        <title>VESTI - Revolutionary Virtual Try-On Technology | Try Clothes Online</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Schema.org structured data for virtual try-on service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "VESTI Virtual Try-On",
            "applicationCategory": "Virtual Fitting Room",
            "description": seoDescription,
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "AI-powered virtual try-on",
              "Realistic virtual fitting room",
              "Size recommendation",
              "360-degree view",
              "Real-time visualization"
            ]
          })}
        </script>

        {/* FAQ structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is virtual try-on technology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual try-on technology uses AI and AR to let you see how clothes will look on you before buying. It creates a realistic virtual fitting room experience, helping ensure perfect fit and reduce returns."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is VESTI's virtual fitting room?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VESTI's AI-powered virtual try-on technology provides highly accurate fit predictions by analyzing your measurements and comparing them with detailed product specifications."
                }
              },
              {
                "@type": "Question",
                "name": "Can I try clothes virtually before buying?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! VESTI's virtual dressing room lets you try clothes virtually before purchasing, giving you a realistic preview of how items will look and fit on you."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section 
          ref={(el) => (sectionsRef.current[0] = el)}
          id="hero" 
          className="relative transition-all duration-700 ease-out"
          style={{ 
            opacity: 1,
            transform: 'translateY(0) scale(1)',
            zIndex: 10
          }}
        >
          <Hero />
        </section>
        
        {/* Chrome Web Store Showcase - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[1] = el)}
          id="how-it-works" 
          className="py-8 bg-gradient-to-b from-white to-purple-50/30 relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-120px', // Reduce gap more
            position: 'relative'
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Available on{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chrome Web Store
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Join thousands of users who are already shopping with confidence
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/images/esti.png" 
                alt="VESTI Chrome Extension on Chrome Web Store" 
                className="w-full h-auto block"
                style={{ 
                  backgroundColor: '#fffeff',
                  filter: 'brightness(1.02) contrast(1.01)',
                  mixBlendMode: 'normal'
                }}
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full filter blur-xl"></div>
            </div>
            
            {/* Additional Images */}
            <div className="mt-0">
              <img 
                src="/images/1.png" 
                alt="VESTI Feature 1" 
                className="w-full h-auto block"
                style={{ 
                  backgroundColor: '#fffeff',
                  filter: 'brightness(1.02) contrast(1.01)',
                  mixBlendMode: 'normal'
                }}
              />
            </div>
            
            <div className="mt-0">
              <img 
                src="/images/2.png" 
                alt="VESTI Feature 2" 
                className="w-full h-auto block"
                style={{ 
                  backgroundColor: '#fffeff',
                  filter: 'brightness(1.02) contrast(1.01)',
                  mixBlendMode: 'normal'
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[2] = el)}
          id="stats" 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-80px', // Reduce gap
            position: 'relative'
          }}
        >
          <Stats />
        </section>

        {/* Testimonials Section - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[3] = el)}
          id="testimonials" 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-80px', // Reduce gap
            position: 'relative'
          }}
        >
          <Testimonials />
        </section>

        {/* Brands Section - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[4] = el)}
          id="brands" 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-80px', // Reduce gap
            position: 'relative'
          }}
        >
          <Brands />
        </section>

        {/* Newsletter Section - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[5] = el)}
          id="newsletter" 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-80px', // Reduce gap
            position: 'relative'
          }}
        >
          <Newsletter />
        </section>

        {/* CTA Section - Overlay Effect */}
        <section 
          ref={(el) => (sectionsRef.current[6] = el)}
          id="cta" 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            opacity: 0,
            transform: 'translateY(30px) scale(0.98)',
            zIndex: 0,
            marginTop: '-80px', // Reduce gap
            position: 'relative'
          }}
        >
          <CTASection />
        </section>
      </main>
    </>
  );
} 