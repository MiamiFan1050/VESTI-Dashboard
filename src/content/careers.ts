export interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  description: string;
  requirements: string[];
  benefits: string[];
  applyUrl: string;
  featured?: boolean;
}

export interface CultureHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const careersContent = {
  overview: {
    title: "Join Our Mission to Transform Online Shopping",
    subtitle: "We're building the future of virtual try-on technology, and we need passionate people to help us get there.",
    description: "At Vesti, we're revolutionizing how people shop online by making virtual try-ons accessible, accurate, and unlimited. Join our team of innovators, designers, and engineers who are passionate about solving real-world problems.",
  },
  
  culture: {
    title: "Why Work at Vesti?",
    highlights: [
      {
        title: "Remote-First Culture",
        description: "Work from anywhere with flexible hours and a supportive remote environment",
        icon: "🌍"
      },
      {
        title: "Cutting-Edge AI",
        description: "Work with the latest AI/ML technologies in computer vision and virtual try-on",
        icon: "🤖"
      },
      {
        title: "Impact-Driven",
        description: "Help millions of shoppers make confident purchasing decisions",
        icon: "🎯"
      },
      {
        title: "Fast-Growing",
        description: "Join a rapidly expanding startup with huge growth potential",
        icon: "📈"
      },
      {
        title: "Learning Culture",
        description: "Continuous learning with mentorship, conferences, and skill development",
        icon: "📚"
      },
      {
        title: "Great Benefits",
        description: "Competitive compensation, health insurance, and equity options",
        icon: "💎"
      }
    ] as CultureHighlight[]
  },

  openRoles: [
    {
      id: "marketing-social-media-intern",
      title: "Marketing & Social Media Intern",
      department: "Marketing",
      location: "Remote",
      type: "Internship",
      description: "Create compelling content and manage social media campaigns to promote Vesti's virtual try-on technology across all platforms.",
      requirements: [
        "Currently pursuing degree in Marketing, Communications, Digital Media, or related field",
        "Strong creative writing and visual content creation skills",
        "Experience with Instagram, TikTok, LinkedIn, and Twitter",
        "Basic knowledge of social media analytics and trends",
        "Proficiency in Canva, Figma, or similar design tools",
        "Passion for fashion, technology, and social media trends",
        "Ability to work in a fast-paced, creative environment"
      ],
      benefits: [
        "Build a portfolio of viral social media campaigns",
        "Learn from experienced marketing professionals",
        "Gain hands-on experience with cutting-edge AI technology",
        "Flexible remote work schedule (15-20 hours/week)",
        "Potential for full-time conversion upon graduation",
        "Portfolio building opportunities",
        "Networking opportunities in tech and fashion industries"
      ],
      applyUrl: "/apply?role=marketing-social-media-intern",
      featured: true
    },
    {
      id: "management-intern",
      title: "Management Intern",
      department: "Operations",
      location: "Remote",
      type: "Internship",
      description: "Gain hands-on management experience by overseeing intern workflows, making strategic decisions, and learning day-to-day operations.",
      requirements: [
        "Currently pursuing degree in Business, Management, Entrepreneurship, or related field",
        "Strong leadership and communication skills",
        "Experience in project management or team coordination",
        "Analytical mindset with strategic thinking abilities",
        "Proficiency in project management tools (Notion, Asana, etc.)",
        "Interest in startup operations and scaling processes",
        "Ability to manage multiple priorities and deadlines"
      ],
      benefits: [
        "Real management experience leading intern teams",
        "Direct mentorship from company leadership",
        "Strategic decision-making opportunities",
        "Learn startup operations and scaling processes",
        "Build leadership skills and management portfolio",
        "Flexible remote work schedule (20-25 hours/week)",
        "Competitive stipend + leadership bonuses",
        "Fast-track to management positions upon graduation"
      ],
      applyUrl: "/apply?role=management-intern",
      featured: true
    },
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our Chrome extension and web platform.",
      requirements: [
        "3+ years experience with React, TypeScript, and modern frontend frameworks",
        "Experience with Chrome extension development",
        "Strong understanding of responsive design and accessibility",
        "Experience with Tailwind CSS or similar utility-first frameworks",
        "Knowledge of web performance optimization"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Remote-first work environment",
        "Latest tools and equipment",
        "Health, dental, and vision insurance",
        "Unlimited PTO and flexible hours"
      ],
      applyUrl: "/apply?role=frontend-developer"
    },
    {
      id: "ai-engineer",
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop and optimize our computer vision models for virtual try-on technology.",
      requirements: [
        "MS/PhD in Computer Science, ML, or related field",
        "Experience with PyTorch, TensorFlow, or similar frameworks",
        "Background in computer vision, image processing, or generative AI",
        "Experience with model optimization and deployment",
        "Strong Python programming skills"
      ],
      benefits: [
        "Work on cutting-edge AI technology",
        "Competitive salary and equity package",
        "Conference attendance and research opportunities",
        "Collaboration with top AI researchers",
        "Remote-first work environment"
      ],
      applyUrl: "/apply?role=ai-engineer"
    }
  ] as Role[],

  marketingIntern: {
    title: "Marketing & Social Media Intern",
    subtitle: "Create viral content and grow Vesti's social media presence",
    overview: "Join our marketing team and help spread the word about Vesti's game-changing virtual try-on technology. You'll create compelling content, manage social media campaigns, and develop strategies to reach our target audience of online shoppers across all platforms.",
    
    responsibilities: [
      "Create engaging social media content for Instagram, TikTok, LinkedIn, and Twitter",
      "Develop viral marketing campaigns and content strategies",
      "Manage social media accounts and community engagement",
      "Create visual content using Canva, Figma, or similar tools",
      "Analyze social media performance and optimize content",
      "Collaborate with influencers and brand partnerships",
      "Stay up-to-date with social media trends and best practices",
      "Assist with email marketing campaigns and newsletter creation"
    ],

    requirements: [
      "Currently pursuing degree in Marketing, Communications, Digital Media, or related field",
      "Strong creative writing and visual content creation skills",
      "Experience with Instagram, TikTok, LinkedIn, and Twitter",
      "Basic knowledge of social media analytics and trends",
      "Proficiency in Canva, Figma, or similar design tools",
      "Passion for fashion, technology, and social media trends",
      "Ability to work in a fast-paced, creative environment",
      "Strong attention to detail and organizational skills"
    ],

    benefits: [
      "Build a portfolio of viral social media campaigns",
      "Learn from experienced marketing professionals",
      "Gain hands-on experience with cutting-edge AI technology",
      "Flexible remote work schedule (15-20 hours/week)",
      "Potential for full-time conversion upon graduation",
      "Portfolio building opportunities",
      "Networking opportunities in tech and fashion industries"
    ],

    duration: "3-6 months (flexible based on your schedule)",
    startDate: "Immediate start available",
    compensation: "Portfolio building opportunities"
  },

  faqs: [
    {
      question: "What's the time commitment for the marketing intern role?",
      answer: "We're flexible! The role is designed for 15-20 hours per week, and we can work around your class schedule. We prefer interns who can commit to at least 3 months, but we're open to longer-term arrangements."
    },
    {
      question: "Is this a paid internship?",
      answer: "This is an unpaid internship focused on portfolio building and gaining real-world experience. You'll work on high-impact projects that reach millions of users, build an impressive portfolio, and gain valuable skills that will help launch your career in marketing and social media."
    },
    {
      question: "Can I work remotely?",
      answer: "Absolutely! Vesti is a remote-first company, so you can work from anywhere. We use tools like Slack, Zoom, and Notion to stay connected and collaborate effectively."
    },
    {
      question: "How will this internship help my career?",
      answer: "This internship is designed to give you real-world experience that directly translates to your future career. You'll build an impressive portfolio with actual campaigns that reached millions of users, gain hands-on experience with cutting-edge AI technology, and develop skills that are highly valued in the marketing industry. Plus, you'll make valuable connections in the tech and fashion industries."
    },
    {
      question: "What tools and software will I use?",
      answer: "You'll work with tools like Canva for design, Buffer/Hootsuite for social media management, Mailchimp for email campaigns, Google Analytics for tracking, and our internal tools. We'll provide training on any tools you're not familiar with."
    },
    {
      question: "How do I apply?",
      answer: "Click the 'Apply Now' button below! You'll be asked to submit your resume, a brief cover letter explaining why you're interested in Vesti, and any relevant portfolio work or social media examples."
    }
  ] as FAQ[]
};

export default careersContent; 
 