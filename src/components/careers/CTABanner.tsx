import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
  sticky?: boolean;
}

export function CTABanner({ 
  title, 
  description, 
  buttonText, 
  buttonUrl, 
  className = '',
  sticky = false 
}: CTABannerProps) {
  // Preserve UTM parameters from current URL
  const getUrlWithUTM = () => {
    if (typeof window === 'undefined') return buttonUrl;
    
    const currentUrl = new URL(window.location.href);
    const utmParams = new URLSearchParams();
    
    // Extract UTM parameters from current URL
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = currentUrl.searchParams.get(param);
      if (value) {
        utmParams.set(param, value);
      }
    });
    
    const targetUrl = new URL(buttonUrl, window.location.origin);
    utmParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });
    
    return targetUrl.toString();
  };

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white ${sticky ? 'sticky bottom-0 z-50' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-1">
              {title}
            </h2>
            {description && (
              <p className="text-purple-100 text-sm">
                {description}
              </p>
            )}
          </div>
          <a
            href={getUrlWithUTM()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
} 