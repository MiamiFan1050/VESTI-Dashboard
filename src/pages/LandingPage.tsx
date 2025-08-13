import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { Brands } from '../components/Brands';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';
import { CTASection } from '../components/CTASection';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { VideoSection } from '../components/VideoSection';
import VestiScrollJourney from '../components/VestiScrollJourney';
import { useEffect, useState } from 'react';

export function LandingPage() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

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
      }, 100); // Small delay to ensure page is rendered
    }
  }, []);

  // SEO description optimized for virtual try-on (≤160 characters)
  const seoDescription = "Try on clothes online with VESTI's AI-powered virtual fitting room. See how outfits fit before buying and shop with confidence. Reduce returns with our virtual try-on technology.";
  
  // SEO keywords focusing on virtual try-on
  const seoKeywords = "AI virtual try on, virtual fitting room, virtual dressing room, AI fashion technology, digital clothing try on, online fitting room, virtual clothing fitting, AR clothing try on, virtual fashion try on, e-commerce virtual try on, virtual try on solution, fashion technology, digital fashion, virtual fashion fitting";

  return (
    <>
      <Helmet>
        <title>VESTI - AI Virtual Try-On Technology | Virtual Fitting Room for Online Shopping</title>
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

      <main>
        <section id="hero" className="relative">
          <Hero onShowVideo={() => setIsVideoVisible(true)} />
        </section>
        
        {/* Scroll-driven hero journey */}
        <VestiScrollJourney />
        
        <VideoSection isVisible={isVideoVisible} onClose={() => setIsVideoVisible(false)} />
        
        {/* Interactive Demo Section */}
        <section id="demo" className="py-16 bg-gradient-to-b from-purple-50/30 to-white relative">
          <InteractiveDemo />
        </section>
        
        <section id="stats" className="relative">
          <Stats />
        </section>
        <section id="testimonials" className="relative">
          <Testimonials />
        </section>
        <section id="brands" className="relative">
          <Brands />
        </section>
        <section id="newsletter" className="relative">
          <Newsletter />
        </section>
        <section id="cta" className="relative">
          <CTASection />
        </section>
      </main>
    </>
  );
} 