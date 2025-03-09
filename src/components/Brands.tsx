import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

const brands = [
  {
    name: 'Nike',
    logo: '/logos/nike.svg',
    users: 52520,
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Adidas',
    logo: '/logos/adidas.svg',
    users: 21200,
    color: 'from-purple-600 via-fuchsia-600 to-pink-600'
  },
  {
    name: 'Zara',
    logo: '/logos/zara.svg',
    users: 10287,
    color: 'from-pink-600 to-purple-600'
  },
  {
    name: 'H&M',
    logo: '/logos/hm.svg',
    users: 11475,
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Uniqlo',
    logo: '/logos/uniqlo.svg',
    users: 43249,
    color: 'from-purple-600 via-fuchsia-600 to-pink-600'
  },
  {
    name: 'ASOS',
    logo: '/logos/asos.svg',
    users: 24692,
    color: 'from-pink-600 to-purple-600'
  }
];

export function Brands() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.brand-card');
    let currentIndex = 0;

    const animate = () => {
      cards.forEach((card, index) => {
        if (index === currentIndex) {
          (card as HTMLElement).style.transform = 'scale(1.05) translateY(-10px)';
          (card as HTMLElement).style.filter = 'brightness(1.1)';
        } else {
          (card as HTMLElement).style.transform = 'scale(1) translateY(0)';
          (card as HTMLElement).style.filter = 'brightness(1)';
        }
      });

      currentIndex = (currentIndex + 1) % cards.length;
    };

    const interval = setInterval(animate, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of shoppers using Vesti with their favorite retailers
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={cn(
                "brand-card relative bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl",
                "transition-all duration-500 ease-in-out"
              )}
            >
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-br",
                brand.color
              )} />
              
              <div className="relative p-8">
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-purple-600">
                    {brand.users.toLocaleString()}+ users
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Verified Partner
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            And many more retailers being added every month!
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">View all supported retailers</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}