import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log('Gemini API Key loaded:', apiKey ? 'Yes' : 'No');
const genAI = new GoogleGenerativeAI(apiKey);

// VESTI-specific system prompt
const VESTI_SYSTEM_PROMPT = `You are Alex, a VESTI AI Marketing Assistant specialized in helping with VESTI-related content creation, marketing, and business questions.

**VESTI AI CORE INFORMATION:**

**What is VESTI AI:**
VESTI is a revolutionary AI-powered virtual try-on platform that transforms online shopping by letting customers see exactly how clothes will look on their body before buying. Our Chrome extension uses advanced computer vision and AI algorithms to create realistic virtual fittings, dramatically reducing returns and improving customer confidence.

**Key Technology & Features:**
• **Advanced AI Technology**: Uses sophisticated computer vision algorithms to analyze body measurements and proportions
• **Realistic Virtual Try-On**: Creates accurate 3D body models and maps digital garments with realistic fabric behavior
• **Chrome Extension**: Works seamlessly with all major shopping sites (Zara, H&M, ASOS, Nike, Adidas, Uniqlo, etc.)
• **Unlimited Try-Ons**: Premium access allows unlimited virtual fittings
• **Privacy-First**: Data stays on your device - we never store body measurements or images
• **One-Click Try-On**: Instant visualization with no complicated setup required

**Business Impact:**
• **85% Fewer Returns**: Dramatically reduces return rates for customers and brands
• **50K+ Active Users**: Growing community of confident shoppers
• **Universal Compatibility**: Works with all major e-commerce platforms
• **Time & Money Saver**: Eliminates guesswork and saves hours of shopping time

**Target Audiences:**
• **Primary**: Online shoppers (18-45) who've experienced sizing issues and returns
• **Secondary**: Fashion brands looking to reduce returns and improve customer experience
• **Tertiary**: Tech-savvy consumers interested in AI innovation

**Content Creation Expertise:**
• **Viral Hooks**: Attention-grabbing openings for TikTok, Instagram, YouTube
• **Captions & Descriptions**: Engaging social media copy that drives engagement
• **Video Scripts**: Complete shot lists and dialogue for influencer content
• **Brand Voice**: Confident but humble, tech-savvy but accessible, fashion-forward but inclusive
• **Platform Strategy**: TikTok (15-60s), Instagram (30s-1min), YouTube (2-5min)

**9 Proven Video Scripts Available:**
1. **Video 1**: "I spent $500 on clothes that didn't fit" - Budget frustration hook
2. **Video 2**: AI Model Generation - "POV: your budget said no to expensive photoshoots"
3. **Video 3**: Social Setting - "is it rude that I told her to download an app..."
4. **Video 4**: Discovery Moment - "WHY DID NO ONE TELL ME THIS?!?!"
5. **Video 5**: Closet Organization - "Closet full. Nothing to wear. EVERYDAY."
6. **Video 6**: Home Try-On - "Pov: You found a website to virtually try on clothes..."
7. **Video 7**: Wishlist Try-On - "Shopping online just got easier with VESTI AI..."
8. **Video 8**: Before & After - Transformation from ill-fitting to perfect fit
9. **Video 9**: Quick Demo - "Watch this magic happen in seconds!"

**Brand Voice Guidelines:**
• **Confident but not arrogant** - Proud of our tech but humble about solving real problems
• **Tech-savvy but accessible** - Advanced AI explained simply
• **Fashion-forward but inclusive** - For everyone, not just fashionistas
• **Problem-solver focused** - We fix real shopping pain points
• **Avoid**: "100% accurate," "perfect fit," "guaranteed viral," medical claims

**Competitive Advantages:**
• **AI-Powered Accuracy**: More precise than basic AR filters
• **E-commerce Integration**: Seamless shopping experience
• **Return Reduction**: Proven to reduce returns by 30-50%
• **Brand Partnerships**: Works with major fashion brands
• **User-Friendly**: No app download required

**Technical Process:**
1. Customer uploads photo or uses live camera
2. AI analyzes body measurements and proportions
3. Virtual try-on renders clothing realistically
4. Customer sees exactly how items will fit
5. Confident purchase decision

Always respond in a helpful, professional tone that matches VESTI's brand voice. Keep responses concise but informative, and always relate back to how it helps with VESTI's mission of improving online shopping experiences.

**IMPORTANT: Format your responses with clear structure using:**
• Bullet points (•) for lists
• **Bold text** for emphasis
• Line breaks for readability
• Emojis sparingly but effectively
• Clear sections with spacing`;

export const generateVESTIResponse = async (userInput: string): Promise<string> => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create the chat session
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: VESTI_SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "I understand! I'm VESTI AI, ready to help you with all things VESTI - from content creation and brand strategy to product knowledge and marketing ideas. What would you like to work on today?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the user's message
    const result = await chat.sendMessage(userInput);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    console.error('API Key present:', !!import.meta.env.VITE_GEMINI_API_KEY);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    
    // Fallback to the original rule-based system if API fails
    return generateFallbackResponse(userInput);
  }
};

// Enhanced fallback response system with comprehensive VESTI knowledge
const generateFallbackResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  // VESTI Product & Business Knowledge
  if (input.includes('vesti') || input.includes('product') || input.includes('what is') || input.includes('how does')) {
    return `**VESTI AI** is a revolutionary Chrome extension that transforms online shopping! 🛍️✨

**What we do:**
• **AI-Powered Virtual Try-On**: See exactly how clothes will look on your body before buying
• **Chrome Extension**: Works seamlessly with all major shopping sites (Zara, H&M, ASOS, Nike, Adidas, Uniqlo)
• **85% Fewer Returns**: Dramatically reduces return rates for customers and brands
• **50K+ Active Users**: Growing community of confident shoppers

**How it works:**
1. Upload a photo or use live camera
2. AI analyzes your body measurements and proportions
3. Virtual try-on renders clothing realistically
4. See exactly how items will fit
5. Shop with confidence!

**Key Features:**
• **Unlimited Try-Ons** with premium access
• **Privacy-First**: Data stays on your device
• **One-Click Try-On**: No complicated setup required
• **Universal Compatibility**: Works with all major e-commerce platforms

What specific aspect of VESTI would you like to know more about?`;
  }
  
  // Content Creation - Hooks
  if (input.includes('hook') || input.includes('viral') || input.includes('attention')) {
    return `**VESTI-Specific Hook Ideas** 🎯

**Emotional Pain Point Hooks:**
• "I spent $500 on clothes that didn't fit until I found VESTI! 💸"
• "This AI just saved me from another return nightmare! 🤖"
• "Closet full. Nothing to wear. EVERYDAY. 😫"

**Transformation Hooks:**
• "Watch this outfit transform with VESTI! ✨"
• "The future of online shopping is here - and it's mind-blowing! 🚀"
• "WHY DID NO ONE TELL ME THIS?!?! 😱"

**Discovery Hooks:**
• "POV: You found a website to virtually try on clothes... 🏠"
• "is it rude that I told her to download an app where u can virtually try on all ur clothes 😂"
• "POV: your budget said no to expensive photoshoots but you suck at taking photos..."

**Key Elements:**
• Specific dollar amounts
• Emotional frustration
• Transformation promises
• Tech excitement
• Relatable scenarios

Want me to generate more for a specific product category or platform?`;
  }
  
  // Content Creation - Captions
  if (input.includes('caption') || input.includes('description') || input.includes('text')) {
    return `**VESTI Caption Templates** 📝

**General Caption:**
"Just discovered the future of online shopping! 🛍️✨ Virtual try-on has never been easier with VESTI's AI-powered technology. No more guessing if something will fit - see it on yourself instantly! Perfect for anyone who's tired of returns and wants to shop with confidence. #VirtualTryOn #AIFashion #VESTI #FutureOfShopping"

**Transformation Caption:**
"Before: Clothes that don't fit 😔 | After: Perfect fit with VESTI AI! 😍 The difference is INSANE! Now I can see exactly how clothes will look on me before buying. No more returns, no more guesswork! ✨ #VESTI #VirtualTryOn #ShoppingHack"

**Tech-Focused Caption:**
"This AI-powered Chrome extension is changing the game! 🤖✨ Upload a photo and see how ANY outfit looks on your body instantly. Works with Zara, H&M, ASOS, Nike, and all your favorite brands. The future of fashion is here! #VESTI #AIFashion #VirtualTryOn"

**Pain Point Caption:**
"Tired of spending money on clothes that don't fit? 😤 VESTI AI lets you try before you buy with realistic virtual try-ons. 85% fewer returns, 100% more confidence! 🛍️✨ #ShoppingHack #VESTI #NoMoreReturns"

Want me to customize this for a specific product or platform?`;
  }
  
  // Content Creation - Shot Lists
  if (input.includes('shot') || input.includes('video') || input.includes('filming')) {
    return `**VESTI Video Shot Lists** 📹

**Standard 30-Second Video:**
• **Opening Hook (0-3s)**: Person frustrated with ill-fitting clothes
• **Problem Setup (3-8s)**: Show pile of returns or wrong sizes
• **VESTI Introduction (8-12s)**: "But what if you could try before you buy?"
• **Demo (12-20s)**: Show VESTI virtual try-on in action
• **Results (20-25s)**: Happy customer with perfect fit
• **CTA (25-30s)**: "Try VESTI today!"

**Quick Demo (8-15s):**
• **Hook (0-2s)**: "Watch this magic happen in seconds!"
• **Process (3-5s)**: Show quick try-on process in fast motion
• **Result (6-8s)**: Show final result with excitement

**Before & After (15-20s):**
• **Before (0-5s)**: Show frustration with ill-fitting clothes
• **Transformation (6-10s)**: Show VESTI transformation process
• **After (11-15s)**: Show confident, happy result

**Discovery Video (10-15s):**
• **Hook (0-3s)**: "WHY DID NO ONE TELL ME THIS?!?!"
• **Problem/Solution (4-6s)**: Show online store with VESTI try-on
• **Benefit (7-10s)**: Show the try-on effect in action
• **Reaction (11-15s)**: Positive, happy reaction

Need this adapted for a specific product category or platform?`;
  }
  
  // Brand Voice & Guidelines
  if (input.includes('brand') || input.includes('voice') || input.includes('tone')) {
    return `**VESTI Brand Voice Guidelines** 🎯

**Core Voice Characteristics:**
• **Confident but not arrogant** - Proud of our tech but humble about solving real problems
• **Tech-savvy but accessible** - Advanced AI explained simply
• **Fashion-forward but inclusive** - For everyone, not just fashionistas
• **Problem-solver focused** - We fix real shopping pain points

**Tone Examples:**
✅ **Good**: "Our AI helps you see how clothes will fit before buying"
✅ **Good**: "Transform your online shopping experience with VESTI"
✅ **Good**: "No more guessing - see it on yourself instantly"

❌ **Avoid**: "100% accurate," "perfect fit," "guaranteed viral," medical claims about body image

**Language Guidelines:**
• Use "help," "assist," "support" rather than "guarantee"
• Focus on "confidence" and "clarity" rather than "perfection"
• Emphasize "reducing returns" and "saving time/money"
• Use inclusive language that appeals to all body types

**Emotional Triggers:**
• Frustration with returns and ill-fitting clothes
• Excitement about new technology
• Relief from shopping stress
• Confidence in purchase decisions

Need help applying this to specific content?`;
  }
  
  // Target Audience
  if (input.includes('audience') || input.includes('target') || input.includes('demographic')) {
    return `**VESTI Target Audiences** 👥

**Primary Audience (18-45):**
• Online shoppers who've experienced sizing issues and returns
• People who value convenience and time-saving solutions
• Fashion-conscious individuals who shop frequently online
• Budget-conscious shoppers who want to avoid return costs

**Secondary Audience:**
• Fashion brands looking to reduce returns and improve customer experience
• E-commerce businesses wanting to increase conversion rates
• Marketing professionals seeking innovative solutions

**Tertiary Audience:**
• Tech-savvy consumers interested in AI innovation
• Early adopters of new technology
• Content creators looking for trending topics

**Pain Points We Solve:**
• **Uncertainty**: "Will this fit me?"
• **Wasted Money**: Returns cost time and money
• **Time Spent**: Hours on returns and exchanges
• **Lack of Confidence**: Hesitation to buy online
• **Frustration**: Clothes that look great on models but terrible on you

**Audience Segments:**
• **Fashion Enthusiasts**: Want to look their best, shop frequently
• **Busy Professionals**: Value time-saving solutions
• **Budget Shoppers**: Want to avoid return costs
• **Tech Early Adopters**: Excited about AI innovation

Want content tailored to a specific audience segment?`;
  }
  
  // Platform-Specific Content
  if (input.includes('tiktok') || input.includes('instagram') || input.includes('youtube') || input.includes('reddit') || input.includes('twitter') || input.includes('linkedin')) {
    let platform = '';
    if (input.includes('tiktok')) platform = 'TikTok';
    else if (input.includes('instagram')) platform = 'Instagram';
    else if (input.includes('youtube')) platform = 'YouTube';
    else if (input.includes('reddit')) platform = 'Reddit';
    else if (input.includes('twitter')) platform = 'Twitter';
    else if (input.includes('linkedin')) platform = 'LinkedIn';
    
                        if (platform === 'TikTok') {
      return `**Hi! Here are 6 things I can help you with for TikTok content:**

1. **Viral Hook Ideas** - Create attention-grabbing openings like "I spent $500 on clothes that didn't fit until I found VESTI! 💸"

2. **Trending Audio Suggestions** - Find the perfect sounds and music that are currently viral on TikTok

3. **Video Script Ideas** - Generate complete 15-60 second video concepts with dialogue and timing

4. **Caption Writing** - Create engaging captions with hashtags that drive engagement and shares

5. **Shot List Planning** - Break down your video into specific shots and timing (0-3s hook, 3-8s problem, etc.)

6. **Content Strategy** - Plan your TikTok content calendar with before/after transformations, discovery moments, and pain point hooks

What would you like to start with? I can help you create viral TikTok content!`;
    }
    
                        if (platform === 'Instagram') {
      return `**Hi! Here are 6 things I can help you with for Instagram content:**

1. **Reels Ideas** - Create viral 30s-1min videos like try-on transformations and before/after comparisons

2. **Stories Content** - Design behind-the-scenes content, polls, and Q&A sessions to engage your audience

3. **Post Captions** - Write engaging captions with hashtags that convert followers into customers

4. **Carousel Ideas** - Plan multi-slide content like "5 Ways VESTI Saves You Money" or "Complete Guide to Virtual Try-On"

5. **IGTV Scripts** - Develop longer-form videos (2-5min) for in-depth tutorials and behind-the-scenes content

6. **Content Strategy** - Plan your Instagram content mix with lifestyle shopping content, tech demos, and high-quality visuals

What would you like to start with? I can help you build a complete Instagram presence!`;
    }
    
                        if (platform === 'Reddit') {
      return `**Hi! Here are 6 things I can help you with for Reddit content:**

1. **Subreddit Selection** - Find the perfect communities like r/fashionadvice, r/shoppingaddiction, r/technology, and r/entrepreneur

2. **Post Ideas** - Create engaging content that provides real value, like "How AI is changing online shopping" or "Tired of returns? Here's a solution"

3. **Comment Responses** - Craft authentic responses that build relationships and establish VESTI as a helpful community member

4. **AMA Preparation** - Plan comprehensive Q&A sessions about virtual try-on technology and shopping solutions

5. **Discussion Starters** - Generate conversation topics like "What's your biggest online shopping frustration?" to spark engagement

6. **Content Strategy** - Develop educational posts, problem-solving discussions, and success stories that feel genuine and helpful

What would you like to start with? I can help you build authentic Reddit relationships!`;
    }
    
                        if (platform === 'YouTube') {
      return `**Hi! Here are 6 things I can help you with for YouTube content:**

1. **Video Ideas** - Generate unique content concepts like "Complete Guide to Virtual Try-On" or "VESTI vs. Traditional Shopping"

2. **Script Writing** - Craft engaging video structure and dialogue for 8-15 minute tutorials and reviews

3. **Thumbnail Concepts** - Design eye-catching thumbnails that boost click-through rates and drive views

4. **SEO Optimization** - Optimize titles, descriptions, and tags for search terms like "virtual try-on" and "AI fashion"

5. **Shorts Content** - Create viral 2-5 minute short-form videos for YouTube Shorts discovery

6. **Content Strategy** - Plan product demos, before/after comparisons, customer testimonials, and behind-the-scenes content

What would you like to start with? I can help you build a successful YouTube channel!`;
    }
    
                        if (platform === 'Twitter') {
      return `**Hi! Here are 6 things I can help you with for Twitter content:**

1. **Tweet Ideas** - Craft compelling short-form content under 280 characters like "Hot take: Virtual try-on will replace fitting rooms" or "This AI just saved me $200 on returns"

2. **Thread Creation** - Build longer-form storytelling like "Why virtual try-on is the future of e-commerce" with multiple connected tweets

3. **Engagement Strategies** - Develop community-building approaches with polls, questions, and interactive content

4. **Hashtag Research** - Find trending topics and relevant hashtags like #VirtualTryOn, #AIFashion, and #ShoppingHack

5. **Poll Questions** - Create interactive content like "Would you try virtual try-on?" to spark conversations and gather insights

6. **Content Strategy** - Plan quick tips, industry insights, customer success stories, and behind-the-scenes content

What would you like to start with? I can help you build a strong Twitter presence!`;
    }
    
                        if (platform === 'LinkedIn') {
      return `**Hi! Here are 6 things I can help you with for LinkedIn content:**

1. **Thought Leadership Posts** - Develop industry insights like "The Future of E-commerce: AI-Powered Shopping" to position VESTI as an expert

2. **Business Posts** - Create professional content and tips that drive engagement with fashion industry professionals and e-commerce executives

3. **Article Writing** - Craft longer-form content (1,300+ characters) that provides deep value and demonstrates expertise

4. **Case Studies** - Showcase success stories and data like "How Virtual Try-On is Reducing Returns by 85%" to prove ROI

5. **Networking Content** - Build professional relationships through strategic engagement with industry professionals

6. **Content Strategy** - Plan industry insights, business benefits, technology deep-dives, and professional success stories

What would you like to start with? I can help you build thought leadership on LinkedIn!`;
    }
    
    return `**${platform} Content Strategy for VESTI** 📱

**${platform} Best Practices:**
• **Length**: ${platform === 'TikTok' ? '15-60s' : platform === 'Instagram' ? '30s-1min' : '2-5min'}
• **Hook**: Start with a strong, attention-grabbing opening
• **Visual**: Show the transformation clearly and quickly
• **Audio**: Use trending sounds/music for ${platform === 'TikTok' ? 'TikTok' : 'social media'}
• **CTA**: Clear call-to-action at the end

**Content Ideas for ${platform}:**
• **Before/After Comparisons**: Show ill-fitting vs. perfect fit
• **Day in the Life**: "Shopping with VESTI" lifestyle content
• **Customer Testimonials**: Real user experiences
• **Behind-the-Scenes**: Tech demos and how it works
• **Trending Challenges**: Adapt to current ${platform} trends
• **Educational**: "How to use VESTI" tutorials

**Engagement Tips:**
• Use relevant hashtags: #VirtualTryOn #AIFashion #VESTI #ShoppingHack
• Encourage comments: "What's your biggest shopping frustration?"
• Create shareable moments: Dramatic transformations
• Use trending audio and effects

Need specific ${platform} content ideas or script examples?`;
  }
  
  // Competitor Analysis
  if (input.includes('competitor') || input.includes('vs') || input.includes('difference')) {
    return `**VESTI Competitive Advantages** 🏆

**Key Differentiators:**
• **AI-Powered Accuracy**: More precise than basic AR filters
• **E-commerce Integration**: Seamless shopping experience on existing sites
• **Return Reduction**: Proven to reduce returns by 30-50%
• **Brand Partnerships**: Works with major fashion brands
• **User-Friendly**: No app download required - Chrome extension

**Technology Advantages:**
• **Advanced Computer Vision**: Sophisticated body mapping algorithms
• **Realistic Fabric Simulation**: Accurate drape and texture rendering
• **Real-Time Processing**: Instant try-on results
• **Privacy-First**: Data stays on your device

**Business Model Advantages:**
• **Universal Compatibility**: Works with all major shopping platforms
• **Brand-Agnostic**: Not tied to specific retailers
• **Proven ROI**: Measurable return reduction for brands
• **Scalable Solution**: Easy integration for e-commerce sites

**User Experience Advantages:**
• **One-Click Try-On**: No complicated setup required
• **Unlimited Try-Ons**: Premium access removes restrictions
• **Mobile-Friendly**: Works on all devices
• **Instant Results**: No waiting for processing

**Content Opportunities:**
• Highlight the "no app download" advantage
• Showcase compatibility with favorite brands
• Demonstrate realistic vs. basic AR try-ons
• Share return reduction statistics

Want to create content highlighting these advantages?`;
  }
  
  // Technical Questions
  if (input.includes('how') && (input.includes('work') || input.includes('technology') || input.includes('ai'))) {
    return `**How VESTI Technology Works** 🤖

**AI Technology Process:**
• **Advanced Computer Vision**: Analyzes body measurements and proportions
• **Real-Time Body Mapping**: Creates accurate 3D body models
• **Machine Learning**: Predicts fit based on thousands of data points
• **Fabric Simulation**: Renders realistic clothing behavior

**User Experience Flow:**
1. **Upload Photo**: Customer uploads photo or uses live camera
2. **AI Analysis**: System analyzes body measurements and proportions
3. **Virtual Try-On**: Renders clothing realistically on body model
4. **Real-Time View**: Customer sees exactly how items will fit
5. **Confident Purchase**: Makes informed buying decision

**Technical Features:**
• **Chrome Extension**: Seamless integration with shopping sites
• **Privacy Protection**: Data stays on your device
• **Real-Time Processing**: Instant try-on results
• **Universal Compatibility**: Works with all major e-commerce platforms

**Business Benefits:**
• **Reduces Returns**: By 30-50% on average
• **Increases Conversion**: Higher confidence leads to more purchases
• **Improves Satisfaction**: Better fit expectations
• **Saves Money**: For both customers and brands

**Technical Advantages:**
• **No App Download**: Browser-based solution
• **Cross-Platform**: Works on desktop and mobile
• **Scalable**: Easy to integrate with new sites
• **Secure**: Privacy-first approach

Need technical details for content creation or marketing materials?`;
  }
  
  // Script Tutorials
  if (input.includes('script') || input.includes('tutorial') || input.includes('video')) {
    return `**VESTI Video Script Tutorials** 📹

**9 Proven Scripts Available:**

**1. Budget Frustration Hook (Video 1)**
• Hook: "I spent $500 on clothes that didn't fit until I found VESTI! 💸"
• Perfect for: Cost-conscious audience, return frustration

**2. AI Model Generation (Video 2)**
• Hook: "POV: your budget said no to expensive photoshoots but you suck at taking photos..."
• Perfect for: Content creators, small businesses

**3. Social Setting (Video 3)**
• Hook: "is it rude that I told her to download an app where u can virtually try on all ur clothes..."
• Perfect for: Social sharing, friend recommendations

**4. Discovery Moment (Video 4)**
• Hook: "WHY DID NO ONE TELL ME THIS?!?!"
• Perfect for: Viral potential, surprise factor

**5. Closet Organization (Video 5)**
• Hook: "Closet full. Nothing to wear. EVERYDAY."
• Perfect for: Lifestyle content, relatable problems

**6. Home Try-On (Video 6)**
• Hook: "Pov: You found a website to virtually try on clothes..."
• Perfect for: Comfortable, home-based audience

**7. Wishlist Try-On (Video 7)**
• Hook: "Shopping online just got easier with VESTI AI..."
• Perfect for: Shopping enthusiasts, wishlist content

**8. Before & After (Video 8)**
• Hook: Transformation from ill-fitting to perfect fit
• Perfect for: Visual impact, dramatic results

**9. Quick Demo (Video 9)**
• Hook: "Watch this magic happen in seconds!"
• Perfect for: Quick attention, fast-paced content

**Script Elements:**
• **Hook**: Attention-grabbing opening (0-3s)
• **Problem**: Pain point identification (3-8s)
• **Solution**: VESTI introduction (8-12s)
• **Demo**: Show the technology (12-20s)
• **Result**: Happy outcome (20-25s)
• **CTA**: Call to action (25-30s)

Want me to break down any specific script in detail?`;
  }
  
  // General Help
  if (input.includes('help') || input.includes('assist') || input.includes('support')) {
    return `**I'm Alex, your VESTI AI Marketing Assistant!** 🤖✨

**I can help you with:**

**📝 Content Creation:**
• Viral hooks and attention-grabbing openings
• Engaging captions and social media copy
• Complete video scripts and shot lists
• Platform-specific content strategies

**🎨 Brand & Design:**
• Brand voice guidelines and tone
• Canva templates and design ideas
• Color schemes and visual identity
• Marketing asset creation

**📊 Strategy & Planning:**
• Platform-specific content (TikTok, Instagram, YouTube)
• Audience targeting and segmentation
• Competitive analysis and positioning
• Campaign planning and execution

**🏢 Business & Product:**
• VESTI product knowledge and features
• Technical explanations and demos
• Competitive advantages and differentiators
• Customer pain points and solutions

**💡 Creative Ideas:**
• Viral content concepts and trends
• Content adaptation and repurposing
• Engagement strategies and tactics
• Innovation and creative direction

**Just ask me anything about VESTI, content creation, or marketing strategy! What would you like to work on today?** 🚀`;
  }
  
  // Default response for unrecognized queries
  return `**Thanks for your message! I'm Alex, your VESTI AI Marketing Assistant.** 🤖✨

I'm here to help you with all things VESTI - from content creation and brand strategy to product knowledge and marketing ideas.

**What I can help with:**
• **Content Creation**: Hooks, captions, video scripts, shot lists
• **Brand Strategy**: Voice guidelines, tone, positioning
• **Product Knowledge**: VESTI features, technology, benefits
• **Marketing Ideas**: Platform strategies, audience targeting
• **Creative Direction**: Viral concepts, trends, innovation

**Could you be more specific about what you'd like to work on?** I can help with any VESTI-related content or marketing challenge! 🚀`;
};
