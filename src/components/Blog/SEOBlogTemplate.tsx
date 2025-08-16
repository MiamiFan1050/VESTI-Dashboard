import React from 'react';
import { SEOManager } from '../SEO/SEOManager';
import { SmartImage } from '../SEO/SmartImage';
import { internalLinkingStrategy, seoContentTemplates } from '../../utils/seoKeywords';

interface SEOBlogTemplateProps {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  author: string;
  date: string;
  category: string;
  slug: string;
  heroImage: string;
  content: React.ReactNode;
  readTime: string;
}

export function SEOBlogTemplate({
  title,
  description,
  primaryKeyword,
  secondaryKeywords,
  longTailKeywords,
  author,
  date,
  category,
  slug,
  heroImage,
  content,
  readTime
}: SEOBlogTemplateProps) {
  
  const blogUrl = `https://getvesti.com/blog/${slug}`;
  
  // Generate keyword-rich meta description
  const seoDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  // Combine all keywords for SEO
  const allKeywords = [primaryKeyword, ...secondaryKeywords, ...longTailKeywords.slice(0, 3)].join(', ');

  return (
    <>
      <SEOManager
        title={`${title} | Vesti AI Virtual Try-On Blog`}
        description={seoDescription}
        keywords={allKeywords}
        url={blogUrl}
        image={heroImage}
        type="article"
        articleAuthor={author}
        articleDate={date}
        articleCategory={category}
      />

      <article className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header Spacing */}
        <div className="h-20"></div>
        
        {/* Breadcrumb Navigation for SEO */}
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-purple-600 transition-colors">Blog</a>
            <span>/</span>
            <span className="text-gray-900">{category}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              {category}
            </div>
            
            {/* H1 Title - Primary Keyword Optimized */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-sm">By</span>
                <span className="font-medium text-gray-900">{author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{readTime} read</span>
              </div>
            </div>

            {/* Hero Image with SEO Alt Text */}
            <div className="relative">
              <SmartImage
                src={heroImage}
                alt={`${title} - comprehensive guide to ${primaryKeyword} with Vesti AI virtual try-on technology`}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                context="blog"
                topic={primaryKeyword}
                priority={true}
              />
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="prose prose-lg prose-purple max-w-none">
            
            {/* SEO-Optimized Introduction */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {seoContentTemplates.blogIntro(primaryKeyword)}
              </p>
              
              {/* Quick Install CTA */}
              <div className="flex items-center space-x-4">
                <a 
                  href="/install" 
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  title={`Install Vesti Chrome Extension for ${primaryKeyword}`}
                >
                  🚀 Install Vesti Free
                </a>
                <span className="text-sm text-gray-600">Join 50,000+ users transforming their shopping</span>
              </div>
            </div>

            {/* Main Content */}
            {content}

            {/* Internal Linking Section */}
            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Virtual Try-On Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {internalLinkingStrategy.blogPost.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-200"
                    title={link.text}
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm">→</span>
                    </div>
                    <span className="font-medium text-gray-900">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* SEO-Optimized Call-to-Action */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience {primaryKeyword}?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {seoContentTemplates.callToAction(primaryKeyword)}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="/install"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg"
                  title={`Download Vesti - Free ${primaryKeyword} Chrome Extension`}
                >
                  🆓 Install Vesti Free
                </a>
                <a 
                  href="/#demo"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-600 transition-colors font-medium"
                  title={`See ${primaryKeyword} Demo`}
                >
                  👀 See Demo
                </a>
              </div>
              <p className="text-sm mt-4 opacity-75">
                ⭐ Rated 4.8/5 by 50,000+ users | 🚀 Free forever | 🔒 Privacy-first
              </p>
            </div>

            {/* Author Bio with Keywords */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">About the Author</h4>
              <p className="text-gray-700">
                <strong>{author}</strong> is a fashion technology expert specializing in {primaryKeyword} and AI-powered shopping solutions. 
                With extensive experience in virtual fitting room technology and e-commerce innovation, 
                they provide insights into the latest trends in virtual fashion and online shopping optimization.
              </p>
            </div>

            {/* Schema-Friendly FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About {primaryKeyword}
              </h3>
              <div className="space-y-4">
                <details className="bg-white rounded-lg border border-gray-200 p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    What are the best {primaryKeyword} available today?
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Vesti AI leads the market in {primaryKeyword} with its advanced Chrome extension that provides 
                    accurate virtual clothing fitting using AI technology. Other solutions exist, but Vesti offers 
                    the most realistic and user-friendly virtual try-on experience.
                  </p>
                </details>
                
                <details className="bg-white rounded-lg border border-gray-200 p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    How accurate are {primaryKeyword} for online shopping?
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Modern {primaryKeyword} like Vesti achieve 90%+ accuracy through advanced AI body mapping 
                    and computer vision technology. This significantly reduces return rates and improves 
                    shopping confidence compared to traditional online shopping methods.
                  </p>
                </details>
                
                <details className="bg-white rounded-lg border border-gray-200 p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    Are {primaryKeyword} free to use?
                  </summary>
                  <p className="mt-3 text-gray-700">
                    Yes! Vesti's virtual try-on Chrome extension is completely free to download and use. 
                    You get unlimited virtual try-ons with no subscription fees or hidden costs, making it 
                    accessible for all online shoppers.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default SEOBlogTemplate;
