import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
  articleAuthor?: string;
  articleDate?: string;
  articleCategory?: string;
}

export function SEOManager({
  title = "Vesti AI - Free Virtual Try-On Chrome Extension | AI Fashion Technology",
  description = "Transform your online shopping with Vesti's AI-powered virtual try-on Chrome extension. See how clothes fit your body before buying. Free, unlimited try-ons. Download now!",
  keywords = "virtual try on, AI fashion, Chrome extension, virtual fitting room, online shopping, try before you buy, fashion technology, clothing fit, virtual dressing room, AI try on",
  image = "https://getvesti.com/images/vesti-og-image.jpg",
  url = "https://getvesti.com",
  type = "website",
  schema,
  articleAuthor,
  articleDate,
  articleCategory
}: SEOProps) {
  
  // Ensure title is under 60 characters for optimal SEO
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  
  // Ensure description is under 160 characters for optimal SEO
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;

  // Generate structured data for SoftwareApplication
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vesti AI",
    "applicationCategory": "ShoppingApplication",
    "operatingSystem": "Chrome, Web",
    "description": "Free AI-powered Chrome extension for virtual clothing try-on. See how clothes fit your body before buying with advanced virtual fitting room technology.",
    "url": "https://getvesti.com",
    "downloadUrl": "https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin",
    "screenshot": "https://getvesti.com/images/vesti-screenshot.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vesti AI",
      "url": "https://getvesti.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getvesti.com/images/vesti-logo.png",
        "width": "200",
        "height": "60"
      }
    },
    "softwareVersion": "2.1.0",
    "fileSize": "2.1MB",
    "installUrl": "https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin",
    "permissions": "activeTab, storage",
    "softwareRequirements": "Chrome Browser 88+",
    "releaseNotes": "Enhanced AI accuracy, faster try-on processing, new clothing categories supported",
    "applicationSuite": "Vesti Fashion Tech Suite",
    "countriesSupported": "US, CA, UK, AU, DE, FR, IT, ES, NL, SE, NO, DK, FI, JP, KR, SG, HK, IN, BR, MX",
    "supportingData": "https://getvesti.com/api/statistics"
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vesti AI",
    "url": "https://getvesti.com",
    "logo": "https://getvesti.com/images/vesti-logo.png",
    "description": "Leading AI-powered virtual try-on technology for online fashion shopping",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Vesti Team"
      }
    ],
    "industry": "Fashion Technology, Artificial Intelligence, E-commerce",
    "numberOfEmployees": "10-50",
    "location": {
      "@type": "Place",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/vestiAI",
      "https://linkedin.com/company/vesti-ai",
      "https://instagram.com/vesti.ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@getvesti.com",
      "availableLanguage": "English"
    }
  };

  // Article schema for blog posts
  const articleSchema = articleAuthor && articleDate ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": optimizedDescription,
    "image": image,
    "author": {
      "@type": "Person",
      "name": articleAuthor
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vesti AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getvesti.com/images/vesti-logo.png"
      }
    },
    "datePublished": articleDate,
    "dateModified": articleDate,
    "articleSection": articleCategory || "Technology",
    "keywords": keywords,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  } : null;

  // Combine schemas
  const combinedSchema = [
    softwareApplicationSchema,
    organizationSchema,
    ...(articleSchema ? [articleSchema] : []),
    ...(schema ? [schema] : [])
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="title" content={optimizedTitle} />
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Vesti AI Virtual Try-On Technology`} />
      <meta property="og:site_name" content="Vesti AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={optimizedTitle} />
      <meta property="twitter:description" content={optimizedDescription} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={`${title} - Vesti AI Virtual Try-On`} />
      <meta property="twitter:site" content="@vestiAI" />
      <meta property="twitter:creator" content="@vestiAI" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content={articleAuthor || "Vesti AI Team"} />
      <meta name="publisher" content="Vesti AI" />
      <meta name="copyright" content="© 2024 Vesti AI. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      
      {/* Mobile & Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Vesti AI" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://chromewebstore.google.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
}

// Pre-defined SEO configurations for different page types
export const SEOConfigs = {
  homepage: {
    title: "Vesti AI - Free Virtual Try-On Chrome Extension | AI Fashion Tech",
    description: "Transform online shopping with Vesti's AI virtual try-on Chrome extension. See how clothes fit your body before buying. Free, unlimited, privacy-first. Download now!",
    keywords: "virtual try on, AI fashion, Chrome extension, virtual fitting room, online shopping, try before you buy, fashion technology, clothing fit, virtual dressing room",
    url: "https://getvesti.com"
  },
  
  blog: {
    title: "Vesti Blog - Virtual Try-On Technology & AI Fashion Innovation",
    description: "Explore the latest in AI fashion technology, virtual try-on innovation, and online shopping trends. Expert insights on the future of digital fashion and e-commerce.",
    keywords: "virtual try on blog, AI fashion news, fashion technology articles, virtual fitting room insights, online shopping trends, fashion tech innovation",
    url: "https://getvesti.com/blog"
  },
  
  careers: {
    title: "Careers at Vesti AI - Join the Future of Fashion Technology",
    description: "Join Vesti's mission to revolutionize online shopping with AI. Remote-first culture, cutting-edge tech, competitive benefits. Marketing, engineering, and design roles available.",
    keywords: "Vesti careers, fashion tech jobs, AI startup jobs, remote work, marketing intern, software engineer, product designer, virtual try-on careers",
    url: "https://getvesti.com/careers"
  },
  
  dashboard: {
    title: "Vesti Marketing Dashboard - Content Creation & Analytics",
    description: "Access Vesti's marketing dashboard for content creation, campaign tracking, and team collaboration. Marketing intern portal with AI-powered tools and resources.",
    keywords: "Vesti dashboard, marketing portal, content creation tools, campaign tracking, marketing analytics, team collaboration",
    url: "https://getvesti.com/dashboard"
  }
};

export default SEOManager;
