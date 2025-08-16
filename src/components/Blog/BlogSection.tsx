
import { BlogPost } from './BlogPost';

const blogPosts = [
  {
    title: "How AI is Revolutionizing Online Shopping: The VESTI Advantage",
    description: "Discover how artificial intelligence is transforming the way we shop online, with virtual try-on technology leading the charge in reducing returns and improving customer satisfaction.",
    date: "April 4, 2024",
    readTime: "5 min",
    image: "/blog/ai-shopping.jpg",
    slug: "ai-revolutionizing-online-shopping",
    category: "AI Technology",
    author: "VESTI Team"
  },
  {
    title: "Virtual Try-On Technology: The Future of Fashion E-commerce",
    description: "Explore how virtual fitting rooms are changing the game for online fashion retailers, making shopping more convenient and sustainable than ever before.",
    date: "April 3, 2024",
    readTime: "4 min",
    image: "/blog/virtual-tryon.jpg",
    slug: "virtual-tryon-future-fashion",
    category: "Virtual Try-On",
    author: "VESTI Team"
  },
  {
    title: "Reducing Fashion Waste: How Virtual Try-Ons Help the Environment",
    description: "Learn how AI-powered virtual try-on solutions are helping reduce return rates and minimize the environmental impact of online fashion shopping.",
    date: "April 2, 2024",
    readTime: "6 min",
    image: "/blog/sustainable-fashion.jpg",
    slug: "reducing-fashion-waste-virtual-tryon",
    category: "Sustainability",
    author: "VESTI Team"
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Insights from{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VESTI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI fashion technology and virtual try-on solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
} 