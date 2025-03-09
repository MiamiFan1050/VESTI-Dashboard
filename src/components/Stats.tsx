import { Users, ShoppingBag, Store } from 'lucide-react';
import { cn } from '../utils/cn';

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: '50K+',
    label: 'Active Users',
    description: 'Trust Vesti for their shopping',
    color: 'from-purple-600 to-pink-600'
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    value: '1M+',
    label: 'Virtual Try-ons',
    description: 'Completed successfully',
    color: 'from-purple-600 via-fuchsia-600 to-pink-600'
  },
  {
    icon: <Store className="h-6 w-6" />,
    value: '500+',
    label: 'Supported Stores',
    description: 'Compatible retailers',
    color: 'from-pink-600 to-purple-600'
  }
];

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-center">
                <div className={cn(
                  "mx-auto w-16 h-16 flex items-center justify-center rounded-2xl mb-6",
                  "transform group-hover:scale-110 transition-all duration-300",
                  "bg-gradient-to-r shadow-lg",
                  stat.color
                )}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                
                <h3 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </h3>
                
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </p>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}