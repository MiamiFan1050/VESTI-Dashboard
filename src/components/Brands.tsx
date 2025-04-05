import React, { useState, useEffect } from 'react';
import { Check, Globe, Search, Infinity, ShoppingBag, Store } from 'lucide-react';
import { cn } from '../utils/cn';

// Define retailer categories and their items
const retailerCategories = [
  {
    id: 'marketplaces',
    name: 'Popular Marketplaces',
    retailers: [
      { name: 'Amazon', logo: '/logos/amazon.svg' },
      { name: 'Etsy', logo: '/logos/etsy.svg' },
      { name: 'eBay', logo: '/logos/ebay.svg' },
      { name: 'Walmart', logo: '/logos/walmart.svg' },
      { name: 'Target', logo: '/logos/target.svg' },
      { name: 'Shopify Stores', logo: '/logos/shopify.svg' },
      { name: 'Overstock', logo: '/logos/overstock.svg' },
      { name: 'Wayfair', logo: '/logos/wayfair.svg' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion Brands',
    retailers: [
      { name: 'Zara', logo: '/logos/zara.svg' },
      { name: 'H&M', logo: '/logos/hm.svg' },
      { name: 'Nike', logo: '/logos/nike.svg' },
      { name: 'Adidas', logo: '/logos/adidas.svg' },
      { name: 'Gap', logo: '/logos/gap.svg' },
      { name: 'ASOS', logo: '/logos/asos.svg' },
      { name: 'Uniqlo', logo: '/logos/uniqlo.svg' },
      { name: 'Nordstrom', logo: '/logos/nordstrom.svg' },
      { name: 'Macy\'s', logo: '/logos/macys.svg' },
      { name: 'Levi\'s', logo: '/logos/levis.svg' },
      { name: 'Anthropologie', logo: '/logos/anthropologie.svg' },
      { name: 'Old Navy', logo: '/logos/oldnavy.svg' }
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Retailers',
    retailers: [
      { name: 'Saks Fifth Avenue', logo: '/logos/saks.svg' },
      { name: 'Bloomingdale\'s', logo: '/logos/bloomingdales.svg' },
      { name: 'Net-a-Porter', logo: '/logos/netaporter.svg' },
      { name: 'SSENSE', logo: '/logos/ssense.svg' },
      { name: 'Farfetch', logo: '/logos/farfetch.svg' },
      { name: 'Neiman Marcus', logo: '/logos/neimanmarcus.svg' },
      { name: 'Mytheresa', logo: '/logos/mytheresa.svg' },
      { name: 'Selfridges', logo: '/logos/selfridges.svg' }
    ]
  }
];

// Define advantages
const advantages = [
  {
    title: 'Works Everywhere',
    description: 'Seamlessly works with all major retail sites',
    icon: <Globe className="h-5 w-5 text-purple-600" />
  },
  {
    title: 'One-Click Try-On',
    description: 'Instantly visualize items on your body',
    icon: <ShoppingBag className="h-5 w-5 text-purple-600" />
  },
  {
    title: 'Shop with Confidence',
    description: 'Know exactly how items will look before buying',
    icon: <Store className="h-5 w-5 text-purple-600" />
  }
];

export function Brands() {
  const [activeCategory, setActiveCategory] = useState(retailerCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{name: string, logo: string}[]>([]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = retailerCategories.flatMap(category => 
      category.retailers.filter(retailer => 
        retailer.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    setSearchResults(results);
  }, [searchQuery]);
  
  // Get current retailers to display based on active category or search
  const retailers = searchQuery.trim() !== '' 
    ? searchResults 
    : retailerCategories.find(c => c.id === activeCategory)?.retailers || [];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#77777708_1px,transparent_1px),linear-gradient(to_bottom,#77777708_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-pink-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm border border-purple-200 mb-6">
            <Store className="h-4 w-4 mr-2" />
            <span>Universal Compatibility</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Shop with Confidence on <span className="text-purple-700">Any Site</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-10 max-w-3xl mx-auto">
            Our premium Chrome extension works seamlessly with all major shopping sites, giving you the confidence to shop anywhere without worrying about fit or style.
          </p>
        </div>
        
        {/* Advanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{advantage.title}</h3>
              <p className="text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        {/* Premium Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-16 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30 mb-2">
                <Infinity className="h-4 w-4 mr-2" />
                <span>Premium Experience</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Shop with Complete Confidence on Any Retailer</h3>
              <p className="text-purple-100 mt-2">Our AI works universally across the web for a seamless shopping experience</p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-white text-purple-700 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Add to Chrome - Premium Access
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative mb-8 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-slate-900 placeholder-slate-400"
            placeholder="Search for a retailer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Category Tabs */}
        {searchQuery.trim() === '' && (
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {retailerCategories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-purple-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        
        {/* Retailer Logos */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
          {searchQuery.trim() !== '' && searchResults.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No retailers found matching "{searchQuery}"</p>
              <p className="text-slate-400 mt-2">Try a different search term or browse by category</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {searchQuery.trim() !== '' 
                  ? `Search Results for "${searchQuery}"` 
                  : retailerCategories.find(c => c.id === activeCategory)?.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {retailers.map((retailer, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                      <img 
                        src={retailer.logo} 
                        alt={`${retailer.name} logo`} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <span className="text-sm text-slate-700 text-center">{retailer.name}</span>
                    <div className="mt-2 flex items-center text-xs text-purple-600">
                      <Check className="h-3 w-3 mr-1" />
                      <span>Compatible</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-slate-600">
              <Check className="h-4 w-4 text-purple-600 inline-block mr-2" />
              <span className="font-medium">Shop confidently</span> on these sites and many more with Vesti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}