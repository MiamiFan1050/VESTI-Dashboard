import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { Brands } from '../components/Brands';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';
import { CTASection } from '../components/CTASection';

export function LandingPage() {
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
        <section id="hero" className="relative">
          <Hero />
        </section>
        <section id="stats" className="relative">
          <Stats />
        </section>
        <section id="how-it-works" className="relative">
          <HowItWorks />
        </section>
        <section id="features" className="relative">
          <Features />
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