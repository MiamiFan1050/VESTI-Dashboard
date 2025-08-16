// High-volume, low-competition keywords for Vesti AI
export const primaryKeywords = [
  'virtual try on apps',
  'AI fashion shopping',
  'best Chrome extensions for online shopping',
  'virtual clothing try on',
  'virtual fitting room online',
  'try clothes online virtually',
  'AI clothing fit technology',
  'virtual dressing room app',
  'online shopping Chrome extensions',
  'virtual try on Chrome extension'
];

export const secondaryKeywords = [
  'virtual try on technology',
  'AI fashion assistant',
  'virtual wardrobe app',
  'online fashion fitting',
  'virtual shopping assistant',
  'AI clothing recommendations',
  'virtual styling app',
  'fashion technology AI',
  'virtual closet app',
  'smart shopping tools',
  'virtual try on software',
  'AI personal stylist',
  'virtual fashion fitting',
  'online clothing simulator',
  'virtual body scanner'
];

export const longTailKeywords = [
  'how to try on clothes online virtually',
  'best virtual try on apps for fashion',
  'AI powered virtual fitting room',
  'virtual try on before you buy',
  'Chrome extension for trying on clothes',
  'virtual clothing fitting technology',
  'AI fashion technology for online shopping',
  'virtual try on apps that actually work',
  'free virtual try on clothing apps',
  'virtual styling apps for women',
  'virtual try on for men clothing',
  'AI fashion recommendation engine',
  'virtual closet organization app',
  'online virtual dressing room free',
  'virtual fashion stylist app'
];

// Blog post keyword targeting
export const blogKeywordTargets = {
  'virtual-try-on-apps': {
    primary: 'virtual try on apps',
    secondary: ['virtual clothing try on', 'virtual fitting room online', 'virtual dressing room app'],
    longTail: ['best virtual try on apps for fashion', 'virtual try on apps that actually work', 'free virtual try on clothing apps']
  },
  'ai-fashion-shopping': {
    primary: 'AI fashion shopping',
    secondary: ['AI clothing fit technology', 'AI fashion assistant', 'AI clothing recommendations'],
    longTail: ['AI powered virtual fitting room', 'AI fashion technology for online shopping', 'AI fashion recommendation engine']
  },
  'chrome-extensions-shopping': {
    primary: 'best Chrome extensions for online shopping',
    secondary: ['online shopping Chrome extensions', 'virtual try on Chrome extension', 'smart shopping tools'],
    longTail: ['Chrome extension for trying on clothes', 'best shopping Chrome extensions 2024', 'Chrome extensions that save money shopping']
  }
};

// Page-specific keyword optimization
export const pageKeywords = {
  homepage: {
    title: 'Vesti AI - Free Virtual Try-On Apps | Best Chrome Extension for Fashion',
    description: 'Transform online shopping with Vesti\'s AI-powered virtual try-on Chrome extension. Free virtual clothing fitting, perfect fits guaranteed. Try clothes online virtually!',
    h1: 'Revolutionary Virtual Try-On Apps - See How Clothes Fit Before You Buy',
    h2: [
      'The Best AI Fashion Shopping Experience',
      'Virtual Clothing Try-On Technology That Actually Works',
      'Free Chrome Extension for Virtual Fitting Rooms'
    ],
    keywords: 'virtual try on apps, AI fashion shopping, virtual clothing try on, virtual fitting room online, try clothes online virtually, virtual dressing room app, AI clothing fit technology'
  },
  
  blog: {
    title: 'Virtual Try-On Apps & AI Fashion Shopping Blog | Vesti Technology',
    description: 'Discover the latest in virtual try-on apps, AI fashion shopping, and virtual clothing technology. Expert insights on fashion tech innovation and online shopping trends.',
    keywords: 'virtual try on apps, AI fashion shopping, virtual clothing try on, fashion technology blog, virtual fitting room, online shopping tips'
  },
  
  install: {
    title: 'Install Vesti - Free Virtual Try-On Chrome Extension | AI Fashion App',
    description: 'Download Vesti\'s free virtual try-on Chrome extension. Transform your online shopping with AI-powered virtual clothing fitting. Install now for unlimited try-ons!',
    keywords: 'install virtual try on app, virtual try on Chrome extension, free virtual clothing app, AI fashion technology download'
  }
};

// SEO content templates
export const seoContentTemplates = {
  blogIntro: (keyword: string) => `
    Discover how ${keyword} is revolutionizing the way we shop online. With Vesti's AI-powered virtual try-on technology, you can now experience clothes fitting virtually before making any purchase decision. This comprehensive guide explores the latest innovations in virtual fashion technology and how they're transforming the e-commerce landscape.
  `,
  
  productDescription: (keyword: string) => `
    Vesti AI brings you the most advanced ${keyword} experience available today. Our Chrome extension leverages cutting-edge artificial intelligence to provide accurate virtual clothing fitting, eliminating the guesswork from online fashion shopping.
  `,
  
  callToAction: (keyword: string) => `
    Ready to transform your online shopping experience with ${keyword}? Install Vesti's free Chrome extension and join thousands of satisfied customers who never shop without virtual try-on technology again.
  `
};

// Internal linking structure for SEO
export const internalLinkingStrategy = {
  homepage: [
    { text: 'Install Vesti Chrome Extension', url: '/install', context: 'primary CTA' },
    { text: 'Read Virtual Try-On Blog', url: '/blog', context: 'content discovery' },
    { text: 'How Virtual Try-On Works', url: '/blog/how-virtual-try-on-works', context: 'educational' }
  ],
  
  blog: [
    { text: 'Install Vesti Free', url: '/install', context: 'conversion' },
    { text: 'See Vesti in Action', url: '/#demo', context: 'demonstration' },
    { text: 'Virtual Try-On Features', url: '/#features', context: 'feature highlight' }
  ],
  
  blogPost: [
    { text: 'Download Vesti Chrome Extension', url: '/install', context: 'primary CTA' },
    { text: 'Explore More Virtual Try-On Articles', url: '/blog', context: 'content discovery' },
    { text: 'See How Vesti Works', url: '/#demo', context: 'product demo' }
  ]
};

export default {
  primaryKeywords,
  secondaryKeywords,
  longTailKeywords,
  blogKeywordTargets,
  pageKeywords,
  seoContentTemplates,
  internalLinkingStrategy
};
