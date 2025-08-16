import React from 'react';

interface SmartImageProps {
  src: string;
  alt?: string;
  className?: string;
  context?: 'blog' | 'hero' | 'feature' | 'testimonial' | 'product' | 'demo' | 'team' | 'logo';
  topic?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  className = '',
  context = 'product',
  topic = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}: SmartImageProps) {
  
  // Generate contextual alt text based on image context and topic
  const generateAltText = (src: string, context: string, topic: string, providedAlt?: string): string => {
    // If alt text is provided, enhance it with SEO keywords
    if (providedAlt && providedAlt.trim() !== '') {
      return enhanceAltText(providedAlt, context);
    }

    // Extract image name/type from URL for context
    const urlParts = src.split('/');
    const fileName = urlParts[urlParts.length - 1];
    const isUnsplash = src.includes('unsplash.com');
    const isVestiAsset = src.includes('getvesti.com') || src.startsWith('/');

    // Base Vesti keywords for SEO
    const vestiKeywords = ['Vesti AI', 'virtual try-on', 'AI fashion technology'];
    
    // Context-specific alt text generation
    switch (context) {
      case 'blog':
        if (topic) {
          return `${topic} visualization with Vesti AI virtual try-on technology - modern fashion e-commerce solution`;
        }
        return `Fashion technology blog illustration showcasing Vesti AI virtual try-on Chrome extension capabilities`;
      
      case 'hero':
        return 'Vesti AI virtual try-on Chrome extension hero image - transform your online fashion shopping experience with AI';
      
      case 'feature':
        return `Vesti AI feature demonstration - ${topic || 'advanced virtual fitting room'} technology for online clothing try-on`;
      
      case 'demo':
        return `Live demonstration of Vesti AI virtual try-on Chrome extension - see how clothes fit your body before buying online`;
      
      case 'testimonial':
        return `Happy customer using Vesti AI virtual try-on technology - real user experience with AI fashion fitting`;
      
      case 'product':
        if (topic.includes('Chrome') || topic.includes('extension')) {
          return `Vesti AI Chrome extension interface - free virtual try-on tool for online fashion shopping`;
        }
        return `Vesti AI virtual try-on product showcase - ${topic || 'advanced AI fashion technology'} for confident online shopping`;
      
      case 'team':
        return `Vesti AI team member - fashion technology experts building the future of virtual try-on experiences`;
      
      case 'logo':
        return 'Vesti AI logo - leading virtual try-on Chrome extension for AI-powered fashion fitting';
      
      default:
        // Generic fallback with topic if available
        if (topic) {
          return `${topic} - Vesti AI virtual try-on technology for online fashion shopping confidence`;
        }
        return 'Vesti AI virtual try-on Chrome extension - see how clothes fit your body with AI fashion technology';
    }
  };

  // Enhance existing alt text with SEO keywords
  const enhanceAltText = (originalAlt: string, context: string): string => {
    const lowerAlt = originalAlt.toLowerCase();
    
    // Don't enhance if already contains Vesti keywords
    if (lowerAlt.includes('vesti') || lowerAlt.includes('virtual try-on') || lowerAlt.includes('ai fashion')) {
      return originalAlt;
    }

    // Add context-appropriate Vesti keywords
    const contextEnhancements = {
      blog: 'featuring Vesti AI virtual try-on technology',
      hero: 'with Vesti AI virtual fashion fitting',
      feature: 'powered by Vesti AI virtual try-on',
      demo: 'using Vesti AI Chrome extension',
      testimonial: 'with Vesti virtual try-on experience',
      product: 'showcasing Vesti AI fashion technology',
      team: 'from Vesti AI fashion tech team',
      logo: 'Vesti AI virtual try-on brand'
    };

    const enhancement = contextEnhancements[context as keyof typeof contextEnhancements] || 'with Vesti AI virtual try-on';
    return `${originalAlt} ${enhancement}`;
  };

  // Generate optimized alt text
  const optimizedAlt = generateAltText(src, context, topic, alt);

  // Ensure alt text is not too long (aim for under 125 characters for optimal SEO)
  const finalAlt = optimizedAlt.length > 125 ? optimizedAlt.substring(0, 122) + '...' : optimizedAlt;

  return (
    <img
      src={src}
      alt={finalAlt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      {...(priority && { fetchPriority: 'high' as any })}
      // Additional SEO attributes
      itemProp="image"
      // Accessibility improvements
      role="img"
      // Performance hints
      decoding="async"
    />
  );
}

// Specialized components for common use cases
export function BlogImage({ src, topic, alt, className }: Omit<SmartImageProps, 'context'>) {
  return (
    <SmartImage
      src={src}
      alt={alt}
      className={className}
      context="blog"
      topic={topic}
      loading="lazy"
    />
  );
}

export function HeroImage({ src, alt, className }: Omit<SmartImageProps, 'context'>) {
  return (
    <SmartImage
      src={src}
      alt={alt}
      className={className}
      context="hero"
      loading="eager"
      priority={true}
    />
  );
}

export function FeatureImage({ src, topic, alt, className }: Omit<SmartImageProps, 'context'>) {
  return (
    <SmartImage
      src={src}
      alt={alt}
      className={className}
      context="feature"
      topic={topic}
      loading="lazy"
    />
  );
}

export function DemoImage({ src, alt, className }: Omit<SmartImageProps, 'context'>) {
  return (
    <SmartImage
      src={src}
      alt={alt}
      className={className}
      context="demo"
      loading="lazy"
    />
  );
}

// Utility function to generate alt text for existing images
export const generateVestiAltText = (
  originalAlt: string,
  imageContext: string,
  topic?: string
): string => {
  const smartImage = new SmartImage({
    src: '',
    alt: originalAlt,
    context: imageContext as any,
    topic: topic || ''
  });
  
  // This would be used in a more dynamic context
  return originalAlt + ' with Vesti AI virtual try-on technology';
};

export default SmartImage;
