import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  background?: 'gradient' | 'solid' | 'image';
  className?: string;
}

export function Hero({ title, subtitle, description, background = 'gradient', className = '' }: HeroProps) {
  return (
    <section className={`relative py-16 md:py-24 lg:py-32 ${className}`}>
      {/* Background */}
      {background === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      )}
      {background === 'solid' && (
        <div className="absolute inset-0 bg-gray-50"></div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-2/3 h-2/3 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
} 
 
 