import { useParams } from 'react-router-dom';
import { blogPosts } from './BlogPage';
import { Helmet } from 'react-helmet-async';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900">Blog post not found</h1>
        </div>
      </div>
    );
  }

  // SEO keywords based on post category
  const getKeywords = (category: string) => {
    const baseKeywords = 'virtual try on, virtual fitting room, AI fashion, digital clothing try on, online fitting room';
    const categoryKeywords: Record<string, string> = {
      'Virtual Try-On': 'virtual try on technology, virtual clothing try on, virtual dressing room, virtual fitting solution, AR clothing try on',
      'AI Technology': 'AI fashion technology, artificial intelligence fashion, AI virtual try on, AI clothing recommendations',
      'Fashion': 'fashion technology, digital fashion, virtual fashion try on, online fashion fitting',
      'E-commerce': 'e-commerce virtual try on, online shopping try on, virtual fitting for e-commerce',
      'Sustainability': 'sustainable fashion technology, eco-friendly virtual try on, sustainable online shopping',
      'Industry News': 'fashion tech news, virtual try on innovation, fashion technology trends'
    };
    return `${baseKeywords}, ${categoryKeywords[category] || ''}`;
  };

  // SEO description
  const seoDescription = `${post.description} Learn about ${post.category.toLowerCase()} and virtual try-on technology at VESTI, your premier destination for AI-powered fashion solutions.`;

  // Special content for the Forbes article
  const forbesContent = post.slug === 'ai-revolutionizing-ecommerce-forbes' ? (
    <>
      <p className="mb-6">
        AI is turning intelligence—the most valuable commodity humans have ever possessed—into a utility. Modern AI language models like ChatGPT, Grok, or Gemini can instantly access and process vast amounts of human knowledge, fundamentally changing how we work and interact with information.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Challenges in E-commerce</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Political ad spending expected to reach $16 billion in 2024 (31% increase from 2020)</li>
        <li>70% of marketers concerned about third-party cookie deprecation</li>
        <li>Need for strategic pivot to first-party data and owned channels</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">The Future of AI in E-commerce</h2>
      <p className="mb-6">
        The e-commerce sector stands at a pivotal juncture in 2024, largely due to its early adoption of AI technologies. The impact of AI on e-commerce is poised to be monumental, offering unprecedented opportunities for innovation and growth.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Takeaways</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Focus on building first-party databases and owned channels</li>
        <li>Email and text messaging remain effective for customer engagement</li>
        <li>AI should drive business outcomes, not just enhance existing tools</li>
        <li>New business models will emerge based on AI-driven outcomes</li>
      </ul>

      <div className="bg-purple-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-3 text-purple-800">Expert Insight</h3>
        <blockquote className="text-gray-700 italic">
          "Organizations that spend R&D dollars to place AI at the core of their offering and leverage their vast proprietary datasets will have the advantage of delivering the outcomes brands need to thrive in this new world."
        </blockquote>
        <p className="mt-2 text-sm text-gray-600">- Richard Jones, Chief Revenue Officer of Wunderkind</p>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-8">
        <p className="text-sm text-gray-500 mb-6">
          Originally published on Forbes Business Development Council - April 10, 2024
        </p>
        <a 
          href="https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2024/04/10/how-ai-is-revolutionizing-e-commerce/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          Read Full Article on Forbes
          <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </>
  ) : (
    <p className="text-gray-700">{post.description}</p>
  );

  return (
    <>
      <Helmet>
        <title>{post.title} | VESTI - Virtual Try-On Technology</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={getKeywords(post.category)} />
        <meta property="og:title" content={`${post.title} | VESTI`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | VESTI`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://getvesti.com/blog/${post.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header Spacing */}
        <div className="h-20"></div>
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
              {post.source && (
                <>
                  <span>•</span>
                  <span>{post.source}</span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            {post.author && (
              <p className="text-gray-600">By {post.author}</p>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 mix-blend-overlay z-10"></div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600 z-20">
              {post.category}
            </span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {forbesContent}
          </div>
        </article>
      </div>
    </>
  );
} 