import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Users, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  Heart,
  Share2,
  MessageSquare,
  Clock,
  Target,
  Zap,
  Award,
  Briefcase,
  Sparkles,
  Copy,
  CheckCircle,
  RefreshCw,
  Play,
  Music,
  Hash,
  List,
  CheckSquare,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterTemplate } from '../components/BeforeAfterTemplate';
import { ScriptGenerator } from '../components/careers/ScriptGenerator';

export default function DashboardPage() {
  const baseText = "Ask me anything about ";
  const topics = [
    "content creation...",
    "viral hooks...",
    "TikTok captions...",
    "shot lists...",
    "trending audio...",
    "Instagram Reels...",
    "YouTube Shorts...",
    "brand voice...",
    "engagement...",
    "conversion...",
    "viral trends...",
    "content strategy..."
  ];

  const [activeTab, setActiveTab] = useState('content');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState(baseText);
  const [inputValue, setInputValue] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your VESTI AI Assistant. I can help with content creation, brand strategy, and everything VESTI-related. What would you like to work on?"
    }
  ]);

  // Typewriter effect
  React.useEffect(() => {
    const currentTopic = topics[placeholderIndex];
    let currentIndex = 0;
    let isDeleting = false;
    let waitTime = 0;

    const typeInterval = setInterval(() => {
      // Handle waiting period
      if (waitTime > 0) {
        waitTime -= 100;
        return;
      }

      if (!isDeleting) {
        // Typing out the topic
        if (currentIndex < currentTopic.length) {
          setDisplayText(baseText + currentTopic.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Topic is complete, wait before deleting
          isDeleting = true;
          waitTime = 1500;
        }
      } else {
        // Deleting the topic back to base text
        if (currentIndex > 0) {
          setDisplayText(baseText + currentTopic.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          // Topic is deleted, move to next topic
          isDeleting = false;
          setPlaceholderIndex((prev) => (prev + 1) % topics.length);
          currentIndex = 0;
        }
      }
    }, 100); // Typing speed

    return () => clearInterval(typeInterval);
  }, [placeholderIndex]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        content: inputValue.trim()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Generate intelligent VESTI-specific response
      const aiResponse = generateVESTIResponse(inputValue.trim());
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          type: 'ai',
          content: aiResponse
        }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  const generateVESTIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // VESTI Product & Business Knowledge
    if (input.includes('vesti') || input.includes('product') || input.includes('what is') || input.includes('how does')) {
      return `VESTI is an AI-powered virtual try-on platform that helps customers see how clothes look on them before buying. Our technology uses advanced computer vision to create realistic virtual fittings, reducing returns and improving customer confidence. We work with fashion brands to integrate this technology into their e-commerce platforms. What specific aspect of VESTI would you like to know more about?`;
    }
    
    // Content Creation - Hooks
    if (input.includes('hook') || input.includes('viral') || input.includes('attention')) {
      return `Here are some VESTI-specific hook ideas:\n\n💡 "I spent $500 on clothes that didn't fit until I found VESTI! 💸"\n💡 "Watch this outfit transform with VESTI! ✨"\n💡 "This AI just saved me from another return nightmare! 🤖"\n💡 "The future of online shopping is here - and it's mind-blowing! 🚀"\n\nKey elements: emotional pain points, specific dollar amounts, transformation promises, and tech excitement. Want me to generate more for a specific product category?`;
    }
    
    // Content Creation - Captions
    if (input.includes('caption') || input.includes('description') || input.includes('text')) {
      return `Here's a VESTI caption template:\n\n"Just discovered the future of online shopping! 🛍️✨ Virtual try-on has never been easier with VESTI's AI-powered technology. No more guessing if something will fit - see it on yourself instantly! Perfect for anyone who's tired of returns and wants to shop with confidence. #VirtualTryOn #AIFashion #VESTI #FutureOfShopping"\n\nWant me to customize this for a specific product or platform?`;
    }
    
    // Content Creation - Shot Lists
    if (input.includes('shot') || input.includes('video') || input.includes('filming')) {
      return `Here's a VESTI video shot list:\n\n📹 Opening Hook (0-3s): Person frustrated with ill-fitting clothes\n📹 Problem Setup (3-8s): Show pile of returns or wrong sizes\n📹 VESTI Introduction (8-12s): "But what if you could try before you buy?"\n📹 Demo (12-20s): Show VESTI virtual try-on in action\n📹 Results (20-25s): Happy customer with perfect fit\n📹 CTA (25-30s): "Try VESTI today!"\n\nNeed this adapted for a specific product category?`;
    }
    
    // Brand Voice & Guidelines
    if (input.includes('brand') || input.includes('voice') || input.includes('tone')) {
      return `VESTI's brand voice:\n\n🎯 Confident but not arrogant - We're proud of our tech but humble about solving real problems\n🎯 Tech-savvy but accessible - Advanced AI explained simply\n🎯 Fashion-forward but inclusive - For everyone, not just fashionistas\n🎯 Problem-solver focused - We fix real shopping pain points\n\nAvoid: "100% accurate," "perfect fit," "guaranteed viral," medical claims about body image\n\nNeed help applying this to specific content?`;
    }
    
    // Target Audience
    if (input.includes('audience') || input.includes('target') || input.includes('demographic')) {
      return `VESTI's target audiences:\n\n👥 Primary: Online shoppers (18-45) who've experienced sizing issues\n👥 Secondary: Fashion brands looking to reduce returns\n👥 Tertiary: Tech-savvy consumers interested in AI innovation\n\nPain points we solve:\n• Uncertainty about fit when shopping online\n• High return rates and wasted money\n• Time spent on returns and exchanges\n• Lack of confidence in online purchases\n\nWant content tailored to a specific audience segment?`;
    }
    
    // Platform-Specific Content
    if (input.includes('tiktok') || input.includes('instagram') || input.includes('youtube')) {
      const platform = input.includes('tiktok') ? 'TikTok' : input.includes('instagram') ? 'Instagram' : 'YouTube';
      return `${platform} content strategy for VESTI:\n\n📱 ${platform} Best Practices:\n• Keep it short and engaging (${platform === 'TikTok' ? '15-60s' : platform === 'Instagram' ? '30s-1min' : '2-5min'})\n• Start with a strong hook\n• Show the transformation clearly\n• Use trending sounds/music\n• Include clear CTA\n\nContent Ideas:\n• Before/after try-on comparisons\n• "Day in the life" with VESTI\n• Customer testimonials\n• Behind-the-scenes tech demos\n\nNeed specific ${platform} content ideas?`;
    }
    
    // Competitor Analysis
    if (input.includes('competitor') || input.includes('vs') || input.includes('difference')) {
      return `VESTI's competitive advantages:\n\n🏆 AI-Powered Accuracy: More precise than basic AR filters\n🏆 E-commerce Integration: Seamless shopping experience\n🏆 Return Reduction: Proven to reduce returns by 30-50%\n🏆 Brand Partnerships: Works with major fashion brands\n🏆 User-Friendly: No app download required\n\nKey Differentiators:\n• Realistic body mapping technology\n• Integration with existing e-commerce platforms\n• Focus on reducing returns, not just visualization\n• Brand-agnostic solution\n\nWant to create content highlighting these advantages?`;
    }
    
    // Technical Questions
    if (input.includes('how') && (input.includes('work') || input.includes('technology') || input.includes('ai'))) {
      return `How VESTI works:\n\n🤖 AI Technology:\n• Advanced computer vision algorithms\n• Real-time body mapping and measurement\n• Machine learning for accurate fit prediction\n• Integration with e-commerce platforms\n\nUser Experience:\n1. Customer uploads photo or uses live camera\n2. AI analyzes body measurements and proportions\n3. Virtual try-on renders clothing realistically\n4. Customer sees exactly how items will fit\n5. Confident purchase decision\n\nBenefits:\n• Reduces returns by 30-50%\n• Increases conversion rates\n• Improves customer satisfaction\n• Saves money for both customers and brands\n\nNeed technical details for content creation?`;
    }
    
    // General Help
    if (input.includes('help') || input.includes('assist') || input.includes('support')) {
      return `I'm your VESTI AI assistant! I can help you with:\n\n📝 Content Creation: Hooks, captions, shot lists, scripts\n🎨 Design: Canva templates, brand assets, color guides\n📊 Strategy: Platform-specific content, audience targeting\n🏢 Business: Product knowledge, competitive advantages\n💡 Ideas: Viral content concepts, trend adaptation\n\nJust ask me anything about VESTI, content creation, or marketing strategy. What would you like to work on today?`;
    }
    
    // Default response for unrecognized queries
    return `Thanks for your message! I'm here to help you with all things VESTI - from content creation and brand strategy to product knowledge and marketing ideas. Could you be more specific about what you'd like to work on? I can help with hooks, captions, video scripts, brand guidelines, or any VESTI-related content!`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      window.location.href = '/signin';
    }
  };

  return (
    <>
      <Helmet>
        <title>Marketing Dashboard - Vesti Employee Portal</title>
        <meta 
          name="description" 
          content="Marketing intern dashboard with tools for content creation, campaign tracking, and team collaboration." 
        />
      </Helmet>

      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 via-transparent to-pink-500/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Header */}
        <div className="relative z-10 pt-20">
          <div className="flex items-center justify-between px-8 py-10">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium">Back to Site</span>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Marketing Intern Dashboard</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600/20 text-red-300 rounded-xl hover:bg-red-600/30 transition-all duration-300 border border-red-500/30"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16 mt-8">
          {/* Welcome Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-2">
                  Welcome back, Marketing Intern! 🎉
                </h1>
                <p className="text-gray-400 text-sm">
                  Ready to create some viral content today?
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">Last login</p>
                <p className="text-white text-sm font-medium">Today at 9:30 AM</p>
              </div>
            </div>
          </div>

                                {/* Chat Toggle Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                <MessageSquare className="w-4 h-4" />
                {isChatOpen ? 'Close Chat' : 'Open VESTI AI Assistant'}
              </button>
            </div>

                      {/* VESTI AI Chat Interface */}
            {isChatOpen && (
           <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden mb-8">
             
             {/* Chat Header */}
             <div className="p-4 border-b border-white/10">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                 <h2 className="text-lg font-medium text-white">VESTI AI Assistant</h2>
               </div>
             </div>

                         {/* Chat Messages */}
             <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
               {messages.map((message) => (
                 <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                   {message.type === 'ai' && (
                     <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                       <span className="text-white text-xs font-medium">AI</span>
                     </div>
                   )}
                   <div className={`${message.type === 'user' ? 'order-1' : 'flex-1'}`}>
                     <div className={`rounded-xl p-3 ${
                       message.type === 'user' 
                         ? 'bg-purple-600 text-white' 
                         : 'bg-white/5 text-gray-200'
                     }`}>
                       <p className="text-sm">
                         {message.content}
                       </p>
                     </div>
                   </div>
                   {message.type === 'user' && (
                     <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                       <span className="text-white text-xs font-medium">U</span>
                     </div>
                   )}
                 </div>
               ))}
             </div>

                         {/* Input */}
             <div className="p-4 border-t border-white/10">
               <div className="flex gap-2">
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyPress={handleKeyPress}
                   placeholder={displayText}
                   className="flex-1 px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-white/20 transition-all duration-200"
                 />
                 <button
                   onClick={handleSend}
                   className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200"
                   title="Send message"
                 >
                   <Send className="w-4 h-4" />
                 </button>
               </div>
             </div>
          </div>
          )}

                      {/* Navigation Tabs */}
            <div className="relative mb-8 overflow-hidden">
              <div className="flex space-x-2 animate-scroll-tabs">
                {/* First set of tabs */}
                {[
                  { id: 'content', label: 'Content Creation', icon: FileText },
                  { id: 'canva', label: 'Canva Templates', icon: Image },
                  { id: 'veo-tutorials', label: 'Veo Tutorials', icon: Video },
                  { id: 'script-generator', label: 'Script Generator', icon: Sparkles },
                  { id: 'script-tutorials', label: 'Script Tutorials', icon: Play },
                  { id: 'brand-assets', label: 'Brand Assets', icon: Award },
                ].map((tab) => (
                  <button
                    key={`first-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { id: 'content', label: 'Content Creation', icon: FileText },
                  { id: 'canva', label: 'Canva Templates', icon: Image },
                  { id: 'veo-tutorials', label: 'Veo Tutorials', icon: Video },
                  { id: 'script-generator', label: 'Script Generator', icon: Sparkles },
                  { id: 'script-tutorials', label: 'Script Tutorials', icon: Play },
                  { id: 'brand-assets', label: 'Brand Assets', icon: Award },
                ].map((tab) => (
                  <button
                    key={`second-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl min-h-[60vh]">
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Content Creation Tools</h2>
                  <p className="text-gray-300 mb-6">
                    Access all the tools you need to create amazing content.
                  </p>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                         <Sparkles className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Script Generator</h3>
                         <p className="text-sm text-gray-400">AI-powered content ideas</p>
                       </div>
                     </div>
                     <button
                       onClick={() => setActiveTab('script-generator')}
                       className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                     >
                       Open Generator
                     </button>
                   </div>

                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                         <Image className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Canva Templates</h3>
                         <p className="text-sm text-gray-400">Design references</p>
                       </div>
                     </div>
                     <button
                       onClick={() => setActiveTab('canva')}
                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                     >
                       Open Canva
                     </button>
                   </div>

                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                         <Video className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Video Editor</h3>
                         <p className="text-sm text-gray-400">Coming soon</p>
                       </div>
                     </div>
                     <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg cursor-not-allowed opacity-50">
                       Coming Soon
                     </button>
                   </div>
                 </div>
              </div>
            )}

            {activeTab === 'script-tutorials' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Script Tutorials</h2>
                  <p className="text-gray-300 mb-6">
                    Learn how to write compelling scripts that convert.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300">Script tutorials coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'veo-tutorials' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Veo Tutorials</h2>
                  <p className="text-gray-300 mb-6">
                    Master viral video creation with Google Veo + VESTI AI
                  </p>
                </div>

                {/* Veo Prompt Formula */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">🎬 VESTI AI + Google Veo "Viral Prompt" Formula</h3>
                  <div className="space-y-4">
                                         <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">1. Lead with Character (Head to Toe)</h4>
                       <p className="text-gray-300 text-sm">Describe one memorable person in the first sentence - skin tone, hair, outfit, vibe. Make them visually loud!</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"A 5'2" fashion influencer with neon pink hair extensions, wearing a thrift store blazer three sizes too big, and carrying a Starbucks cup with 'VESTI' written in Sharpie, looking absolutely defeated."</p>
                       </div>
                     </div>

                     <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">2. Set the Scene Like a Movie</h4>
                       <p className="text-gray-300 text-sm">Location + time of day + mood + lighting + one ridiculous detail</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"In a messy apartment bedroom at 2 AM, surrounded by piles of returned clothes and empty shopping bags, with only the glow of their phone screen lighting the scene."</p>
                       </div>
                     </div>

                     <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">3. Single Out-of-Pocket Action</h4>
                       <p className="text-gray-300 text-sm">Funny but logical to the character - avoid generic actions</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"They dramatically throw their phone across the bed, then immediately grab it back and frantically open the VESTI app, saying..."</p>
                       </div>
                     </div>

                     <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">4. Dialogue (6 Words or Less)</h4>
                       <p className="text-gray-300 text-sm">Punchy, Gen Z slang, unprofessional if character should be professional</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"This fit is about to be FIRE!"</p>
                       </div>
                     </div>

                     <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">5. VESTI Transformation Moment</h4>
                       <p className="text-gray-300 text-sm">Describe the visual transformation - swirl-on, flash-snap, wrap-around</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"With a magical swipe, their oversized blazer transforms into a perfectly fitted leather jacket — the sleeves now the right length, the shoulders perfectly structured, and the whole look suddenly expensive."</p>
                       </div>
                     </div>

                     <div className="bg-white/10 rounded-xl p-4">
                       <h4 className="font-medium text-white mb-2">6. Punchy VESTI Tag</h4>
                       <p className="text-gray-300 text-sm">Short, shareable, dripping with confidence</p>
                       <div className="mt-2 p-3 bg-purple-600/20 rounded-lg">
                         <p className="text-white text-sm italic">"VESTI: Where fits find you."</p>
                       </div>
                     </div>
                  </div>
                </div>

                {/* Prompt Template */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">📝 Copy-Paste Prompt Template</h3>
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-300 text-sm font-mono">
                      [Scene Length in Seconds]<br/>
                      A [full physical description of character], wearing [detailed outfit], in [specific location + time of day + mood]. The camera [describe angle and movement]. They [funny, unexpected action]. They say: "[short, viral line]". Then [describe dramatic clothing transformation in detail]. On-screen text: "[short VESTI tag]".
                    </p>
                  </div>
                </div>

                {/* Example Prompts */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">💡 Viral Prompt Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <h4 className="font-medium text-white mb-2">The Money-Saver</h4>
                      <p className="text-gray-300 text-sm">"A college student in oversized thrift store clothes, standing in a messy dorm room. They pull out their phone dramatically and say: 'I spent $500 on clothes that didn't fit until I found VESTI!' Then their outfit transforms into a perfect-fitting designer look. On-screen: 'VESTI: Try Before You Buy'"</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <h4 className="font-medium text-white mb-2">The Transformation</h4>
                      <p className="text-gray-300 text-sm">"A stressed office worker in wrinkled business casual, sitting at a desk covered in coffee stains. They dramatically swipe their phone and say: 'Watch this outfit transform!' Then their clothes morph into a sleek, modern techwear ensemble. On-screen: 'VESTI: Instant Style Upgrade'"</p>
                    </div>
                  </div>
                </div>

                {/* Helpful Resources */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">🔗 Helpful Resources</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://veo.google/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Google Veo Official Site</p>
                        <p className="text-gray-400 text-sm">Learn more about Veo AI capabilities</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.tiktok.com/@googleveo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Google Veo TikTok</p>
                        <p className="text-gray-400 text-sm">See official Veo examples and trends</p>
                      </div>
                    </a>

                    <a 
                      href="https://www.youtube.com/results?search_query=google+veo+tutorial" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">YouTube Veo Tutorials</p>
                        <p className="text-gray-400 text-sm">Learn from community creators</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">⭐ Veo Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Do's</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Keep scenes under 10 seconds</li>
                        <li>• Use specific, vivid descriptions</li>
                        <li>• Include camera movements</li>
                        <li>• Add VESTI transformation moments</li>
                        <li>• Use trending sounds and music</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Don'ts</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Don't use generic actions</li>
                        <li>• Avoid complex multi-character scenes</li>
                        <li>• Don't forget the VESTI brand integration</li>
                        <li>• Avoid overly long dialogue</li>
                        <li>• Don't skip the transformation moment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'brand-assets' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Brand Assets</h2>
                  <p className="text-gray-300 mb-6">
                    Access logos, colors, fonts, and brand guidelines for VESTI.
                  </p>
                </div>
                
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Logo Assets */}
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                         <Award className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Logo Files</h3>
                         <p className="text-sm text-gray-400">PNG, SVG, JPG formats</p>
                       </div>
                     </div>
                     <div className="space-y-2">
                       <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200 text-sm">
                         Download Primary Logo
                       </button>
                       <button className="w-full bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm">
                         Download Secondary Logo
                       </button>
                     </div>
                   </div>

                   {/* Color Palette */}
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                         <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Color Palette</h3>
                         <p className="text-sm text-gray-400">Brand colors & hex codes</p>
                       </div>
                     </div>
                     <div className="grid grid-cols-4 gap-2 mb-4">
                       <div className="w-full h-8 bg-purple-600 rounded"></div>
                       <div className="w-full h-8 bg-pink-600 rounded"></div>
                       <div className="w-full h-8 bg-blue-600 rounded"></div>
                       <div className="w-full h-8 bg-emerald-600 rounded"></div>
                     </div>
                     <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm">
                       Download Color Guide
                     </button>
                   </div>

                   {/* Typography */}
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                         <FileText className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Typography</h3>
                         <p className="text-sm text-gray-400">Fonts & text styles</p>
                       </div>
                     </div>
                     <div className="space-y-2 mb-4">
                       <div className="text-white font-bold text-lg">VESTI</div>
                       <div className="text-gray-300 font-medium">Primary Font</div>
                       <div className="text-gray-400 text-sm">Secondary Font</div>
                     </div>
                     <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm">
                       Download Fonts
                     </button>
                   </div>
                 </div>

                 {/* Brand Guidelines */}
                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <h3 className="text-lg font-semibold text-white mb-4">Brand Guidelines</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-3">
                       <h4 className="font-medium text-white">Logo Usage</h4>
                       <ul className="text-gray-300 text-sm space-y-1">
                         <li>• Minimum size: 24px height</li>
                         <li>• Clear space: 1x logo height</li>
                         <li>• Don't stretch or distort</li>
                         <li>• Use on light backgrounds only</li>
                       </ul>
                     </div>
                     <div className="space-y-3">
                       <h4 className="font-medium text-white">Color Usage</h4>
                       <ul className="text-gray-300 text-sm space-y-1">
                         <li>• Primary: Purple (#8B5CF6)</li>
                         <li>• Secondary: Pink (#EC4899)</li>
                         <li>• Accent: Blue (#3B82F6)</li>
                         <li>• Success: Emerald (#10B981)</li>
                       </ul>
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {activeTab === 'canva' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Canva Reference Links</h2>
                  <p className="text-gray-300 mb-6">
                    Access design references and templates to inspire your content creation.
                  </p>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Canva Reference Link */}
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                         </svg>
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Design Reference</h3>
                         <p className="text-sm text-gray-400">Template inspiration</p>
                       </div>
                     </div>
                     
                     <div className="mb-4">
                       <div className="w-full h-40 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg relative overflow-hidden">
                         {/* Template Preview - Post Malone "THIS or THAT" */}
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                           {/* Title */}
                           <div className="text-center mb-1">
                             <div className="text-sm font-bold">THIS or THAT</div>
                             <div className="text-xs opacity-80">Post Malone Edition</div>
                           </div>
                           
                           {/* Banner */}
                           <div className="w-full h-4 bg-white rounded-sm mb-2 relative">
                             <div className="absolute inset-0 flex items-center justify-center">
                               <div className="text-black text-xs">What They Wore → What They Could Wear</div>
                             </div>
                             <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500"></div>
                             <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                           </div>
                           
                           {/* Image frames */}
                           <div className="flex gap-1 w-full mb-1">
                             <div className="flex-1 h-12 bg-white/20 rounded border border-white/30"></div>
                             <div className="flex-1 h-12 bg-white/20 rounded border border-white/30"></div>
                           </div>
                           
                           {/* Labels */}
                           <div className="flex gap-1 w-full mb-1">
                             <div className="flex-1 h-3 bg-gray-300 rounded flex items-center justify-center">
                               <span className="text-black text-xs font-bold">The Fit</span>
                             </div>
                             <div className="flex-1 h-3 bg-gray-300 rounded flex items-center justify-center">
                               <span className="text-black text-xs font-bold">The Look</span>
                             </div>
                           </div>
                           
                           {/* Footer */}
                           <div className="text-xs opacity-80 mt-1">getvesti.com</div>
                         </div>
                       </div>
                     </div>

                     <a
                       href="https://www.canva.com/design/DAGvnM1n3E8/dg3mYC2U2QsfM2VmNJH5uQ/view?utm_content=DAGvnM1n3E8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3bb13dd900"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                     >
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                       Open in Canva
                     </a>
                   </div>

                   {/* Add more reference links here */}
                   <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                         <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                         </svg>
                       </div>
                       <div>
                         <h3 className="font-semibold text-white">Coming Soon</h3>
                         <p className="text-sm text-gray-400">More references</p>
                       </div>
                     </div>
                     
                     <div className="mb-4">
                       <div className="w-full h-32 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg flex items-center justify-center">
                         <div className="text-white text-center">
                           <div className="text-lg font-bold">More Templates</div>
                           <div className="text-sm opacity-80">Coming Soon</div>
                         </div>
                       </div>
                     </div>

                     <button className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 cursor-not-allowed opacity-50">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                       </svg>
                       Add Reference
                     </button>
                   </div>
                 </div>

                 <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                   <h3 className="text-lg font-semibold text-white mb-3">How to Use Reference Links</h3>
                   <ul className="text-gray-300 space-y-2 text-sm">
                     <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                       Click on any reference link to open it in Canva
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                       Use these designs as inspiration for your content
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                       Adapt colors, layouts, and styles to match Vesti's brand
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                       Create your own variations using the template tools above
                     </li>
                   </ul>
                 </div>
              </div>
            )}

            {activeTab === 'script-generator' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">AI Script Generator</h2>
                  <p className="text-gray-300 mb-6">
                    Generate viral content ideas, scripts, and execution plans for VESTI. Our AI-powered tool helps you create engaging content across all social media platforms.
                  </p>
                </div>
                <ScriptGenerator />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}