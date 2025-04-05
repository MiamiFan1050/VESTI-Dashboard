import React, { useState } from 'react';
import { BlogPost } from '../components/Blog/BlogPost';
import { Helmet } from 'react-helmet-async';

export interface BlogPostType {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  category: string;
  source?: string;
  author?: string;
}

const categories = [
  "All",
  "AI Technology",
  "Fashion",
  "Sustainability",
  "E-commerce",
  "Virtual Try-On",
  "Industry News"
];

export const blogPosts: BlogPostType[] = [
  {
    title: "Virtual Try-On Revolution: Say Goodbye to Clothing Returns Forever",
    description: "Discover how VESTI's AI-powered virtual fitting room technology is transforming online shopping by eliminating size uncertainty and reducing returns by up to 80%. Learn how our advanced body mapping creates the most accurate digital clothing visualization available today.",
    date: "April 15, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "virtual-try-on-revolution-eliminate-returns",
    category: "Virtual Try-On",
    author: "Emma Roberts, Fashion Tech Analyst"
  },
  {
    title: "Shop with Confidence: How Virtual Fitting Rooms Transform Online Shopping",
    description: "Tired of the uncertainty when shopping online? Learn how virtual fitting room technology creates a shopping experience where you can visualize exactly how clothes will look and fit on your body before you buy, giving you complete confidence in every purchase.",
    date: "April 13, 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1583744946564-b52d01e7f922?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "shop-with-confidence-virtual-fitting-rooms",
    category: "E-commerce",
    author: "Marcus Chen, UX Research Lead"
  },
  {
    title: "The Ultimate Guide to Virtual Try-On Technology in 2024",
    description: "Everything you need to know about virtual try-on technology and how it's revolutionizing online shopping. From the science behind accurate body mapping to the environmental impact of reduced returns, discover why this technology is essential for modern consumers.",
    date: "April 12, 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "ultimate-guide-virtual-try-on-technology-2024",
    category: "AI Technology",
    author: "Dr. Sophia Williams, AI Research Director"
  },
  {
    title: "How AI Is Revolutionizing E-Commerce: Forbes Insights",
    description: "AI is transforming e-commerce by turning intelligence into a utility. With $16 billion projected in political ad spending and the deprecation of third-party cookies, brands must focus on building first-party databases and leveraging AI-driven solutions for personalized customer experiences.",
    date: "April 10, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "ai-revolutionizing-ecommerce-forbes",
    category: "Industry News",
    source: "Forbes Business Development Council",
    author: "Richard Jones"
  },
  {
    title: "How AI is Revolutionizing Online Shopping: The VESTI Advantage",
    description: "Discover how artificial intelligence is transforming the way we shop online, with virtual try-on technology leading the charge in reducing returns and improving customer satisfaction.",
    date: "April 4, 2024",
    readTime: "5 min",
    image: "/blog/ai-shopping.jpg",
    slug: "ai-revolutionizing-online-shopping",
    category: "AI Technology"
  },
  {
    title: "Virtual Try-On Technology: The Future of Fashion E-commerce",
    description: "Explore how virtual fitting rooms are changing the game for online fashion retailers, making shopping more convenient and sustainable than ever before.",
    date: "April 3, 2024",
    readTime: "4 min",
    image: "/blog/virtual-tryon.jpg",
    slug: "virtual-tryon-future-fashion",
    category: "Virtual Try-On"
  },
  {
    title: "Reducing Fashion Waste: How Virtual Try-Ons Help the Environment",
    description: "Learn how AI-powered virtual try-on solutions are helping reduce return rates and minimize the environmental impact of online fashion shopping.",
    date: "April 2, 2024",
    readTime: "6 min",
    image: "/blog/sustainable-fashion.jpg",
    slug: "reducing-fashion-waste-virtual-tryon",
    category: "Sustainability"
  },
  {
    title: "The Psychology of Virtual Shopping: Why Try-Before-You-Buy Works",
    description: "Understanding consumer behavior and how virtual try-on technology addresses key psychological barriers in online shopping.",
    date: "April 1, 2024",
    readTime: "7 min",
    image: "/blog/psychology-shopping.jpg",
    slug: "psychology-virtual-shopping",
    category: "E-commerce"
  },
  {
    title: "AI Fashion Recommendations: Personalizing Your Shopping Experience",
    description: "How VESTI's AI technology learns your style preferences to provide personalized fashion recommendations.",
    date: "March 31, 2024",
    readTime: "5 min",
    image: "/blog/ai-fashion.jpg",
    slug: "ai-fashion-recommendations",
    category: "AI Technology"
  },
  {
    title: "The Future of Fashion Retail: Bridging Digital and Physical",
    description: "Exploring how virtual try-on technology is creating seamless experiences between online and offline shopping.",
    date: "March 30, 2024",
    readTime: "6 min",
    image: "/blog/future-retail.jpg",
    slug: "future-fashion-retail",
    category: "Fashion"
  }
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // SEO description that includes key terms
  const seoDescription = "Explore VESTI's virtual try-on technology blog for insights on AI fashion, digital fitting rooms, and the future of online shopping. Learn about virtual clothing try-on solutions, e-commerce innovation, and sustainable fashion technology.";

  // SEO keywords focusing on virtual try-on
  const seoKeywords = "virtual try on, virtual fitting room, virtual dressing room, AI fashion technology, digital clothing try on, online fitting room, virtual clothing fitting, AR clothing try on, virtual fashion try on, e-commerce virtual try on, virtual try on solution, fashion technology, digital fashion, virtual fashion fitting";

  return (
    <>
      <Helmet>
        <title>VESTI Blog - Virtual Try-On Technology & AI Fashion Innovation</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="VESTI Blog - Virtual Try-On Technology & AI Fashion Innovation" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://getvesti.com/images/blog-header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VESTI Blog - Virtual Try-On Technology & AI Fashion Innovation" />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://getvesti.com/images/blog-header.jpg" />
        <link rel="canonical" href="https://getvesti.com/blog" />
        
        {/* Schema.org markup for better search results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "VESTI Blog",
            "description": seoDescription,
            "url": "https://getvesti.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "VESTI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://getvesti.com/images/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.date,
              "author": post.author || "VESTI Team",
              "image": post.image,
              "url": `https://getvesti.com/blog/${post.slug}`
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header Spacing */}
        <div className="h-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              VESTI{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights and updates about AI fashion technology, virtual try-ons, and the future of online shopping
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-purple-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 