import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'gradient';
  id?: string;
}

export function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'white',
  id
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-purple-50 via-white to-pink-50'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
} 