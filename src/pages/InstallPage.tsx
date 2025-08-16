import React from 'react';
import { SEOManager, SEOConfigs } from '../components/SEO/SEOManager';
import { SmartImage, HeroImage } from '../components/SEO/SmartImage';
import { pageKeywords } from '../utils/seoKeywords';

export function InstallPage() {
  return (
    <>
      <SEOManager
        title={pageKeywords.install.title}
        description={pageKeywords.install.description}
        keywords={pageKeywords.install.keywords}
        url="https://getvesti.com/install"
        image="https://getvesti.com/images/vesti-install-hero.jpg"
        type="website"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header Spacing */}
        <div className="h-20"></div>
        
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Install Vesti - Free <span className="text-purple-600">Virtual Try-On Chrome Extension</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your online shopping with AI-powered virtual clothing fitting. See how clothes fit your body before buying. 
                Free, unlimited try-ons from 10,000+ stores.
              </p>
              
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <a 
                  href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
                  title="Install Vesti AI Virtual Try-On Chrome Extension Free"
                >
                  🚀 Install Vesti Free - Chrome Web Store
                </a>
                <div className="flex items-center space-x-3 text-gray-600">
                  <span className="text-sm">⭐ 4.8/5 rating</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">50,000+ users</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">100% Free</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative max-w-4xl mx-auto">
                <HeroImage
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200&h=600"
                  alt="Install Vesti AI virtual try-on Chrome extension interface showing AI fashion technology for online shopping"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              How to Install Vesti AI Virtual Try-On Extension
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Get started with virtual clothing try-on in less than 2 minutes
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Click "Install Vesti Free" Button
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Click the installation button above to go to the Chrome Web Store. Vesti is completely free with no hidden costs or subscription fees.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-purple-800">
                      💡 <strong>Pro tip:</strong> Make sure you're using Google Chrome browser for the best virtual try-on experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Add to Chrome & Enable Extension
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In the Chrome Web Store, click "Add to Chrome" then "Add Extension" when prompted. Vesti will appear in your browser toolbar.
                  </p>
                  <SmartImage
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400"
                    alt="Chrome Web Store interface showing how to install Vesti AI virtual try-on extension"
                    context="demo"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Start Virtual Try-On Shopping
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Visit any online clothing store and click the Vesti icon to start trying on clothes virtually. Upload one photo and see perfect fits instantly!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">👔</div>
                      <div className="text-sm font-medium text-green-800">Works on 10,000+ stores</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm font-medium text-blue-800">Instant results</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="text-sm font-medium text-purple-800">Privacy-first design</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Why Install Vesti AI Virtual Try-On Extension?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              The most advanced virtual clothing fitting technology available
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  95% Accuracy Rate
                </h3>
                <p className="text-gray-700">
                  Our AI virtual try-on technology provides the most accurate clothing visualization available, reducing returns by 80%.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  🛍️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Works Everywhere
                </h3>
                <p className="text-gray-700">
                  Compatible with 10,000+ online stores including Amazon, ASOS, Zara, H&M, and more. One extension, unlimited shopping.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                  💰
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Save Money & Time
                </h3>
                <p className="text-gray-700">
                  Avoid expensive returns and wasted time. Users save an average of $400+ per year with confident online shopping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Frequently Asked Questions About Installing Vesti
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Is Vesti AI virtual try-on extension really free?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes! Vesti is completely free to download and use. There are no subscription fees, hidden costs, or premium tiers. 
                  You get unlimited virtual try-ons across all supported stores.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Which browsers support Vesti virtual try-on?
                </summary>
                <p className="mt-4 text-gray-700">
                  Currently, Vesti is available as a Chrome extension. We're working on versions for other browsers including Firefox, Safari, and Edge. 
                  Chrome provides the best performance for our AI virtual try-on technology.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  How accurate is the virtual clothing fitting?
                </summary>
                <p className="mt-4 text-gray-700">
                  Vesti achieves 95% accuracy in virtual clothing visualization using advanced AI and computer vision. 
                  Our technology maps clothing to your specific body measurements, showing realistic fit, drape, and appearance.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Is my personal data safe with Vesti?
                </summary>
                <p className="mt-4 text-gray-700">
                  Absolutely. Vesti uses privacy-first design with local processing. Your photos and body measurements are processed locally 
                  and never stored on our servers. We don't sell or share your personal data with third parties.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">
                  Which online stores work with Vesti?
                </summary>
                <p className="mt-4 text-gray-700">
                  Vesti works with over 10,000 online stores including Amazon, ASOS, Zara, H&M, Forever 21, Boohoo, PrettyLittleThing, 
                  Shein, and many more. If a store sells clothing online, Vesti likely supports it.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Online Shopping?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join 50,000+ shoppers who never buy clothes online without virtual try-on technology.
            </p>
            
            <a 
              href="https://chromewebstore.google.com/detail/vesti-ai-free-virtual-try/lakceeelkccloehcppjkiaifkkmfcdin"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg shadow-lg transform hover:scale-105"
              title="Download Vesti AI Virtual Try-On Chrome Extension"
            >
              🆓 Install Vesti Free Now
            </a>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-purple-200">
              <div className="flex items-center space-x-2">
                <span className="text-lg">⭐⭐⭐⭐⭐</span>
                <span className="text-sm">4.8/5 rating</span>
              </div>
              <div className="text-sm">50,000+ happy users</div>
              <div className="text-sm">Works on 10,000+ stores</div>
            </div>

            <div className="mt-12">
              <p className="text-purple-200 mb-4">
                Want to learn more about virtual try-on technology?
              </p>
              <div className="flex flex-wrap items-center justify-center space-x-6">
                <a href="/blog" className="text-white hover:text-purple-200 underline">
                  Read Our Blog
                </a>
                <a href="/blog/best-virtual-try-on-apps-2024" className="text-white hover:text-purple-200 underline">
                  Best Virtual Try-On Apps
                </a>
                <a href="/blog/ai-fashion-shopping-revolution-online-retail" className="text-white hover:text-purple-200 underline">
                  AI Fashion Shopping Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InstallPage;
