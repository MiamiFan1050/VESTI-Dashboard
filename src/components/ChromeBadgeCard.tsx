import { ArrowRight } from 'lucide-react';

export default function ChromeBadgeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto">
      {/* Chrome Web Store Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Available on{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Chrome Web Store
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Join thousands of users who are already shopping with confidence
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600">85%</div>
          <div className="text-sm text-gray-600">Fewer Returns</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600">50K+</div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-600">∞</div>
          <div className="text-sm text-gray-600">Unlimited Try-Ons</div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <a 
          href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Add to Chrome - Unlimited Try-Ons
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
} 