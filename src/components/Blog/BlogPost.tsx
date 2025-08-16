
import { Link } from 'react-router-dom';
import { BlogPostType } from '../../pages/BlogPage';

type BlogPostProps = BlogPostType;

export function BlogPost({ title, description, date, readTime, image, slug, category }: BlogPostProps) {
  // Use the provided image or fall back to a placeholder
  const imageUrl = image.startsWith('http') ? image : 
    `https://source.unsplash.com/800x600/?fashion,${category.toLowerCase().replace(' ', '-')}`;
  
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link to={`/blog/${slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 mix-blend-overlay z-10"></div>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600 z-20">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} read</span>
          </div>
          
          <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 hover:text-purple-600 transition-colors duration-200">
            {title}
          </h2>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {description}
          </p>

          <div className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
            Read More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
} 