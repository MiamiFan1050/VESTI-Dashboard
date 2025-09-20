import React, { useState, useRef, useEffect } from 'react';
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
import { WeeklyProductivityPackage } from '../components/WeeklyProductivityPackage';
import { AdminDashboard } from '../components/AdminDashboard';
import { SocialMediaSetup } from '../components/SocialMediaSetup';
import { generateVESTIResponse } from '../utils/geminiApi';
import { renderMarkdown } from '../utils/markdownRenderer';
import { userProfileService } from '../utils/userProfileService';
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
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [selectedScript, setSelectedScript] = useState<number | null>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your VESTI AI Assistant. I can help with content creation, brand strategy, and everything VESTI-related. What would you like to work on?"
    }
  ]);
  const [showSocialSetup, setShowSocialSetup] = useState(false);
  const [userProfile, setUserProfile] = useState(userProfileService.getCurrentProfile());

  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatMessagesRef.current) {
      // Small delay to ensure the message is rendered
      setTimeout(() => {
        if (chatMessagesRef.current) {
          chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages]);

  // Check if user needs to complete social media setup
  useEffect(() => {
    if (userProfile && !userProfile.setupCompleted) {
      setShowSocialSetup(true);
    }
  }, [userProfile]);

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

  const handleSend = async (customInput?: string) => {
    const messageToSend = customInput || inputValue.trim();
    
    if (messageToSend) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        content: messageToSend
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Clear input if not using custom input
      if (!customInput) {
        setInputValue('');
      }
      
      // Show loading state
      const loadingMessage = {
          id: Date.now() + 1,
          type: 'ai',
        content: '🤔 Thinking...'
      };
      setMessages(prev => [...prev, loadingMessage]);
      
      try {
        // Get AI response using Gemini API
        const aiResponse = await generateVESTIResponse(messageToSend);
        
        // Replace loading message with actual response
        setMessages(prev => prev.map(msg => 
          msg.id === loadingMessage.id 
            ? { ...msg, content: aiResponse }
            : msg
        ));
      } catch (error) {
        console.error('Error getting AI response:', error);
        
        // Replace loading message with error
        setMessages(prev => prev.map(msg => 
          msg.id === loadingMessage.id 
            ? { ...msg, content: 'Sorry, I encountered an error. Please try again.' }
            : msg
        ));
      }
    }
  };
  const getScriptDetails = (scriptNumber: number) => {
    const scripts = {
      1: {
        title: "Video 1: Online Shopping Try-On Hack",
        duration: "42 seconds",
        color: "from-pink-500 to-purple-600",
        sections: [
          {
            title: "🎬 Hook (0-4s)",
            description: "Start with a selfie-style shot. Place a split screen next to your face showing two different product photos of the same item from an online store.",
            onScreenText: "online shopping try on hack???",
            dialogue: "Does anyone else go online shopping and cannot tell if it's the clothes that are cute or if it's just the model making the clothes cute?"
          },
          {
            title: "💡 Problem (5-9s)",
            description: "Continue talking to the camera, explaining the problem. Remove the on-screen text and the split screen.",
            dialogue: "Like that's the one reason why I like going in-person shopping, but I found a way to digitally try on the clothes."
          },
          {
            title: "🔧 Solution (10-14s)",
            description: "Transition to a close-up of your phone screen showing the Vesti AI app.",
            onScreenText: "this is the app 'Vesti'",
            dialogue: "The app is called Vesti and you just upload four selfies, and then you could try on clothes online."
          },
          {
            title: "👗 First Try-On (15-25s)",
            description: "Show a split-screen. On one side, show the product page of a sweater. On the other side, show your face superimposed on the model.",
            dialogue: "I really wanted to see if this sweater would look good on me from addicted, and I use the extension Vesti, and then look what it gave me. Like, that's literally me. Is that not insane?"
          },
          {
            title: "👗 Second Try-On (26-31s)",
            description: "Repeat the process with a different item, like a dress. Show the product page and then the try-on result.",
            dialogue: "Then I decided I was going to try some darker colors because I didn't like the way the white and pink looked on me. I tried this dress and hello."
          },
          {
            title: "💾 Save Feature (32-37s)",
            description: "Show the app's interface with the saved outfits.",
            dialogue: "My outfits that I digitally try on are all saved here with a link for me to actually purchase them."
          },
          {
            title: "🎯 Conclusion (38-42s)",
            description: "Use a split screen to show a product page and then the Vesti try-on result.",
            dialogue: "I'm so happy I downloaded this because I do not know color theory and I need to physically like try on clothes, so this is such a great hack."
          }
        ]
      },
      2: {
        title: "Video 2: AI Model Generation",
        duration: "20 seconds",
        color: "from-blue-500 to-cyan-600",
        sections: [
          {
            title: "🎬 Hook (0-5s)",
            description: "Start with a POV shot of you sitting on a bed, looking at your phone with a product laid out next to you.",
            onScreenText: "POV: your budget said no to the expensive photoshoot but you suck at taking photos..."
          },
          {
            title: "😅 The Problem (6-7s)",
            description: "Film yourself standing, wearing the product, and posing awkwardly.",
            onScreenText: "Me taking ✨awkward✨ still photos of my product"
          },
          {
            title: "🔧 The Solution (8-10s)",
            description: "Film a screen recording of you on your computer, going to getvesti.com. Upload a photo of the product.",
            onScreenText: "Generate ai model and Upload product photo 👕"
          },
          {
            title: "✨ The Try-On (11-14s)",
            description: "Film the screen as Vesti AI generates the model wearing your product.",
            onScreenText: "Generate the model wearing your product 😩"
          },
          {
            title: "🎯 The Result (15-19s)",
            description: "Film a clear shot of the final AI-generated image, highlighting the quality.",
            onScreenText: "Use for your website 😎"
          }
        ]
      },
      3: {
        title: "Video 3: Social Setting",
        duration: "7 seconds",
        color: "from-green-500 to-emerald-600",
        sections: [
          {
            title: "🎬 Hook (0-7s)",
            description: "Start a selfie-style video with a friend or partner in a social setting (e.g., a bar, restaurant, or out on the town).",
            onScreenText: "is it rude that I told her to download an app where u can virtually try on all ur clothes so she could start having 10/10 fits everytime we go out 😂",
            dialogue: "No spoken words, just a popular trending audio track."
          }
        ]
      },
      4: {
        title: "Video 4: Discovery Moment",
        duration: "14 seconds",
        color: "from-yellow-500 to-orange-600",
        sections: [
          {
            title: "😱 Hook (0-3s)",
            description: "Start with a close-up of your face, looking shocked or surprised.",
            onScreenText: "WHY DID NO ONE TELL ME THIS?!?!",
            dialogue: "No spoken words, just background music."
          },
          {
            title: "💻 The Problem/Solution (4-6s)",
            description: "Film a screen recording of yourself on an online clothing store. Use a split screen to show a product photo with the original model and then with your face on the model.",
            onScreenText: "Zara model and Me"
          },
          {
            title: "💡 The Benefit (7-7s)",
            description: "Cut back to your face.",
            onScreenText: "You can try on the clothes before buying..."
          },
          {
            title: "✨ The Try-On (8-10s)",
            description: "Show the Vesti AI try-on effect on the website in action again."
          },
          {
            title: "😊 Reaction (11-14s)",
            description: "End the video with a positive, happy reaction."
          }
        ]
      },
      5: {
        title: "Video 5: Closet Organization",
        duration: "13 seconds",
        color: "from-purple-500 to-pink-600",
        sections: [
          {
            title: "😫 Hook (0-3s)",
            description: "Start with a close-up of your face, looking frustrated or overwhelmed.",
            onScreenText: "Closet full. Nothing to wear. EVERYDAY.",
            dialogue: "No spoken words, just background music."
          },
          {
            title: "👗 The Problem (4-6s)",
            description: "Film your closet, showing it's full of clothes but nothing seems to work together.",
            onScreenText: "So many clothes... but nothing to wear 😭"
          },
          {
            title: "💡 The Solution (7-9s)",
            description: "Show yourself using the Vesti AI app to try on different outfit combinations.",
            onScreenText: "Vesti AI to the rescue! ✨"
          },
          {
            title: "✨ The Result (10-13s)",
            description: "Show the final outfit that Vesti AI helped you put together.",
            onScreenText: "Perfect outfit found! 🎉"
          }
        ]
      },
      6: {
        title: "Video 6: Home Try-On",
        duration: "10 seconds",
        color: "from-indigo-500 to-purple-600",
        sections: [
          {
            title: "🏠 Hook (0-2s)",
            description: "Start with a shot of you at home, looking comfortable.",
            onScreenText: "Pov: You found a website to virtually try on clothes...",
            dialogue: "No spoken words, just background music."
          },
          {
            title: "💻 The Discovery (3-5s)",
            description: "Show a screen recording of you discovering the Vesti AI website.",
            onScreenText: "Vesti AI - Virtual Try-On"
          },
          {
            title: "✨ The Try-On (6-8s)",
            description: "Show the virtual try-on process in action.",
            onScreenText: "Watch the magic happen! ✨"
          },
          {
            title: "🎉 The Result (9-10s)",
            description: "Show the final result with a happy reaction.",
            onScreenText: "Perfect fit! 🎉"
          }
        ]
      },
      7: {
        title: "Video 7: Wishlist Try-On",
        duration: "36 seconds",
        color: "from-teal-500 to-cyan-600",
        sections: [
          {
            title: "🛍️ Hook (0-5s)",
            description: "Start with a shot of you looking at your online shopping wishlist.",
            onScreenText: "Shopping online just got easier with VESTI AI...",
            dialogue: "I have so many clothes in my wishlist but I never know if they'll look good on me."
          },
          {
            title: "💡 The Solution (6-10s)",
            description: "Show yourself using Vesti AI to try on items from your wishlist.",
            onScreenText: "Try on your wishlist items virtually! ✨"
          },
          {
            title: "👗 First Try-On (11-20s)",
            description: "Show the first item being tried on virtually.",
            dialogue: "Look at this dress! I thought it would look terrible on me but it's actually perfect."
          },
          {
            title: "👗 Second Try-On (21-30s)",
            description: "Show another item being tried on.",
            dialogue: "And this sweater? I was so unsure about the color but now I can see it works!"
          },
          {
            title: "💾 Save & Buy (31-36s)",
            description: "Show the saved outfits and purchase process.",
            dialogue: "Now I can save all my favorite looks and buy them with confidence!"
          }
        ]
      },
      8: {
        title: "Video 8: Before & After",
        duration: "15 seconds",
        color: "from-rose-500 to-pink-600",
        sections: [
          {
            title: "😔 Before (0-5s)",
            description: "Show yourself looking frustrated with ill-fitting clothes.",
            onScreenText: "Before: Clothes that don't fit 😔",
            dialogue: "I always end up with clothes that look great on the model but terrible on me."
          },
          {
            title: "✨ The Transformation (6-10s)",
            description: "Show the Vesti AI transformation process.",
            onScreenText: "Vesti AI transformation in progress... ✨"
          },
          {
            title: "😍 After (11-15s)",
            description: "Show the final result with you looking confident and happy.",
            onScreenText: "After: Perfect fit! 😍",
            dialogue: "The difference is INSANE! Now I can see exactly how clothes will look on me before buying."
          }
        ]
      },
      9: {
        title: "Video 9: Quick Demo",
        duration: "8 seconds",
        color: "from-amber-500 to-yellow-600",
        sections: [
          {
            title: "⚡ Quick Start (0-2s)",
            description: "Start with a fast-paced intro showing the Vesti AI app.",
            onScreenText: "Watch this magic happen in seconds!",
            dialogue: "No spoken words, just upbeat background music."
          },
          {
            title: "🎯 The Process (3-5s)",
            description: "Show the quick try-on process in fast motion.",
            onScreenText: "Upload → Try-On → Perfect! ✨"
          },
          {
            title: "🎉 The Result (6-8s)",
            description: "Show the final result with excitement.",
            onScreenText: "That's it! Perfect fit in seconds! 🎉"
          }
        ]
      }
    };
    
    return scripts[scriptNumber as keyof typeof scripts] || null;
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      userProfileService.clearProfile();
      window.location.href = '/signin';
    }
  };

  const handleSocialSetupComplete = () => {
    setShowSocialSetup(false);
    setUserProfile(userProfileService.getCurrentProfile());
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
        <div className="relative z-10 pt-24 sm:pt-28">
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium hidden sm:inline">Back to Site</span>
                <span className="font-medium sm:hidden">Back</span>
              </Link>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-white font-semibold text-base sm:text-lg">
                  {userProfile ? `Welcome, ${userProfile.name}!` : 'Marketing Intern Dashboard'}
                </span>
                {userProfile && (
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-purple-300">
                    <Hash className="h-3 w-3" />
                    <span>@{userProfile.discordUsername}</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-red-600/20 text-red-300 rounded-xl hover:bg-red-600/30 transition-all duration-300 border border-red-500/30 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Sign Out</span>
            </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pb-16 mt-12 sm:mt-16">
          {/* Welcome Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 mb-6 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Welcome back, Marketing Intern! 🎉
                </h1>
                <p className="text-gray-400 text-sm">
                  Ready to create some viral content today?
                </p>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <p className="text-gray-500 text-xs">Last login</p>
                <p className="text-white text-sm font-medium">Today at 9:30 AM</p>
              </div>
            </div>
          </div>

          {/* Social Media Setup */}
          {showSocialSetup && (
            <div className="mb-6 sm:mb-8">
              <SocialMediaSetup onComplete={handleSocialSetupComplete} />
            </div>
          )}

                                {/* Chat Toggle Button */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md text-white rounded-xl hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200 font-medium border border-white/20 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">{isChatOpen ? 'Close Chat' : 'Open VESTI AI Assistant'}</span>
                <span className="sm:hidden">{isChatOpen ? 'Close' : 'Open AI'}</span>
              </button>
            </div>

                      {/* VESTI AI Chat Interface */}
            {isChatOpen && (
           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden mb-8 shadow-2xl h-[500px] sm:h-[600px] md:h-[700px] flex flex-col">
             
             {/* Chat Header */}
             <div className="p-3 sm:p-4 border-b border-white/20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex-shrink-0">
               <div className="flex items-center gap-2 sm:gap-3">
                 <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                 <h2 className="text-base sm:text-lg font-semibold text-white">Alex - Marketing Assistant</h2>
                 <div className="ml-auto text-xs text-gray-300 hidden sm:block">Powered by Vesti AI Assistant</div>
               </div>
             </div>

                         {/* Chat Messages */}
             <div 
               ref={chatMessagesRef}
               className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pb-4 sm:pb-6"
             >
               {messages.map((message) => (
                 <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''} animate-fadeInUp`}>
                   {message.type === 'ai' && (
                     <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                       <span className="text-white text-xs font-bold">AI</span>
                     </div>
                   )}
                   <div className={`${message.type === 'user' ? 'order-1' : 'flex-1'}`}>
                     <div className={`rounded-xl p-3 sm:p-4 ${
                       message.type === 'user' 
                         ? 'bg-purple-600 text-white max-w-[280px] sm:max-w-xs' 
                         : 'bg-white/10 text-gray-100 max-w-[320px] sm:max-w-2xl border border-white/20'
                     }`}>
                       <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                         {message.type === 'ai' ? renderMarkdown(message.content) : message.content}
                       </div>
                     </div>
                   </div>
                   {message.type === 'user' && (
                     <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                       <span className="text-white text-xs font-bold">U</span>
                     </div>
                   )}
                 </div>
               ))}
             </div>

                         {/* Input */}
             <div className="flex-shrink-0 p-4 sm:p-6 border-t border-white/20 bg-gradient-to-r from-white/5 to-white/10">
               <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyPress={handleKeyPress}
                   placeholder={displayText}
                   className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-300 text-sm sm:text-base focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                 />
                 <button
                   onClick={() => handleSend()}
                   className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                   title="Send message"
                 >
                   <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                 </button>
               </div>
               
                               {/* Platform-Specific Quick Actions */}
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">Choose Your Platform</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">I can help you create amazing content for any of these platforms</p>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  {[
                    { name: 'TikTok', prompt: 'I want to create content with TikTok. What can you help me with?' },
                    { name: 'Instagram', prompt: 'I want to create content with Instagram. What can you help me with?' },
                    { name: 'Reddit', prompt: 'I want to create content with Reddit. What can you help me with?' },
                    { name: 'YouTube', prompt: 'I want to create content with YouTube. What can you help me with?' },
                    { name: 'Twitter', prompt: 'I want to create content with Twitter. What can you help me with?' },
                    { name: 'Pinterest', prompt: 'I want to create content with Pinterest. What can you help me with?' },
                    { name: 'LinkedIn', prompt: 'I want to create content with LinkedIn. What can you help me with?' }
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => {
                        handleSend(platform.prompt);
                      }}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:border-white/40 hover:scale-105 hover:shadow-lg min-w-[70px] sm:min-w-[80px] text-center"
                    >
                      {platform.name}
                    </button>
                  ))}
               </div>
             </div>
          </div>
          )}

                      {/* Navigation Tabs */}
            <div className="relative mb-8 sm:mb-10 overflow-hidden">
              {/* Attention-Grabbing Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white">Dashboard Tools</h3>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">Explore all available resources and tools</p>
              </div>
              
              <div className="flex space-x-1 sm:space-x-1.5 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {[
                  { id: 'content', label: 'Content Creation', icon: FileText },
                  { id: 'canva', label: 'Canva Templates', icon: Image },
                  { id: 'veo-tutorials', label: 'Veo Tutorials', icon: Video },
                  { id: 'script-generator', label: 'Script Generator', icon: Sparkles },
                  { id: 'script-tutorials', label: 'Script Tutorials', icon: Play },
                  { id: 'brand-assets', label: 'Brand Assets', icon: Award },
                  { id: 'successful-videos', label: 'Successful Videos', icon: Play },
                  { id: 'content-schedule', label: 'Content Schedule', icon: Calendar },
                  { id: 'weekly-package', label: 'Weekly Package', icon: TrendingUp },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex flex-col items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 text-xs font-medium border backdrop-blur-sm overflow-visible min-w-[70px] sm:min-w-[75px] ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white border-white/30 shadow-lg shadow-white/10 scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border-white/10 hover:border-white/20 hover:shadow-md hover:shadow-white/5 hover:scale-105'
                    }`}
                  >
                    {/* Subtle inner glow on hover */}
                    <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-100' 
                        : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100'
                    }`}></div>
                    
                    <div className={`relative z-10 transition-all duration-300 ${
                      activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      <tab.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <span className="relative z-10 text-xs font-medium text-center leading-tight">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl min-h-[50vh] sm:min-h-[60vh]">
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
                {/* Script Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Video 1 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 1 ? null : 1)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Online Shopping Try-On</h4>
                        <p className="text-xs text-gray-400">42s • High Converting</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Does anyone else go online shopping and cannot tell if it's the clothes that are cute..."</p>
                  </div>

                  {/* Video 2 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 2 ? null : 2)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">AI Model Generation</h4>
                        <p className="text-xs text-gray-400">20s • Quick & Easy</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"POV: your budget said no to the expensive photoshoot..."</p>
                  </div>

                  {/* Video 3 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-green-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 3 ? null : 3)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Social Setting</h4>
                        <p className="text-xs text-gray-400">7s • Trending Audio</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"is it rude that I told her to download an app..."</p>
                  </div>

                  {/* Video 4 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 4 ? null : 4)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Discovery Moment</h4>
                        <p className="text-xs text-gray-400">14s • Shock & Awe</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"WHY DID NO ONE TELL ME THIS?!?!"</p>
                  </div>

                  {/* Video 5 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 5 ? null : 5)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Closet Organization</h4>
                        <p className="text-xs text-gray-400">13s • Problem-Solution</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Closet full. Nothing to wear. EVERYDAY."</p>
                  </div>

                  {/* Video 6 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 6 ? null : 6)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Home Try-On</h4>
                        <p className="text-xs text-gray-400">10s • App Demo</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Pov: You found a website to virtually try on clothes..."</p>
                  </div>

                  {/* Video 7 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 7 ? null : 7)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Wishlist Try-On</h4>
                        <p className="text-xs text-gray-400">36s • Shopping Experience</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Shopping online just got easier with VESTI AI..."</p>
                  </div>

                  {/* Video 8 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 8 ? null : 8)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Before & After</h4>
                        <p className="text-xs text-gray-400">15s • Transformation</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"The difference is INSANE!"</p>
                  </div>

                  {/* Video 9 */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer" onClick={() => setSelectedScript(selectedScript === 9 ? null : 9)}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">Quick Demo</h4>
                        <p className="text-xs text-gray-400">8s • Fast Demo</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs">"Watch this magic happen in seconds!"</p>
                  </div>
                </div>

                {/* Detailed Script (Hidden by default) */}
                {selectedScript && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white text-center mb-6">Detailed Script Breakdown</h3>
                    {(() => {
                      const script = getScriptDetails(selectedScript);
                      if (!script) return <div className="bg-white/5 rounded-xl p-6 border border-white/10"><p className="text-gray-300 text-center">Script not found.</p></div>;
                      
                      return (
                        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${script.color} rounded-lg flex items-center justify-center`}>
                              <Play className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{script.title}</h4>
                              <p className="text-sm text-gray-400">Duration: {script.duration}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            {script.sections.map((section, index) => (
                              <div key={index} className="bg-white/10 rounded-xl p-4">
                                <h5 className="font-medium text-white mb-2">{section.title}</h5>
                                <p className="text-gray-300 text-sm mb-2">{section.description}</p>
                                <div className="bg-purple-600/20 rounded-lg p-3">
                                  {section.onScreenText && (
                                    <>
                                      <p className="text-white text-sm font-medium">On-screen text:</p>
                                      <p className="text-white text-sm italic">"{section.onScreenText}"</p>
                                    </>
                                  )}
                                  {'dialogue' in section && section.dialogue && (
                                    <>
                                      <p className="text-white text-sm font-medium mt-2">What to say:</p>
                                      <p className="text-white text-sm italic">"{section.dialogue}"</p>
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
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
                    Access logos, colors, and brand guidelines for VESTI.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Logo Assets */}
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group justify-self-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">Logo Files</h3>
                        <p className="text-sm text-gray-400">Primary & Secondary logos</p>
                      </div>
                    </div>
                    
                    {/* Primary Logo - Vesti */}
                    <div className="mb-6 p-5 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-center mb-4">
                        <img 
                          src="/images/vesti-logo.png" 
                          alt="VESTI Primary Logo" 
                          className="h-16 mx-auto mb-3"
                        />
                        <p className="text-sm text-gray-400">Primary Logo</p>
                      </div>
                      <a 
                        href="/images/vesti-logo.png" 
                        download="vesti-logo.png"
                        className="block w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200 text-sm text-center font-medium"
                      >
                        Download PNG
                      </a>
                    </div>
                    
                    {/* Secondary Logo - V */}
                    <div className="p-5 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-center mb-4">
                        <img 
                          src="/images/Vesti-logo-old-v.png" 
                          alt="VESTI Secondary Logo" 
                          className="h-16 mx-auto mb-3"
                        />
                        <p className="text-sm text-gray-400">Secondary Logo</p>
                      </div>
                      <a 
                        href="/images/Vesti-logo-old-v.png" 
                        download="Vesti-logo-old-v.png"
                        className="block w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200 text-sm text-center font-medium"
                      >
                        Download PNG
                      </a>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group justify-self-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">Brand Colors</h3>
                        <p className="text-sm text-gray-400">Hex codes & visual examples</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Primary: Purple */}
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-10 h-10 bg-[#8B5CF6] rounded border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">Primary</div>
                          <div className="text-gray-400 text-xs">#8B5CF6</div>
                        </div>
                      </div>
                      
                      {/* Secondary: Pink */}
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-10 h-10 bg-[#EC4899] rounded border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">Secondary</div>
                          <div className="text-gray-400 text-xs">#EC4899</div>
                        </div>
                      </div>
                      
                      {/* Accent: Blue */}
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-10 h-10 bg-[#3B82F6] rounded border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">Accent</div>
                          <div className="text-gray-400 text-xs">#3B82F6</div>
                        </div>
                      </div>
                      
                      {/* Success: Emerald */}
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-10 h-10 bg-[#10B981] rounded border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">Success</div>
                          <div className="text-gray-400 text-xs">#10B981</div>
                        </div>
                      </div>
                    </div>
                    

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

            {activeTab === 'successful-videos' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Successful Video Examples</h2>
                  <p className="text-gray-300 mb-6">
                    Study these successful TikTok videos from competitors to understand what works and what we're looking for.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* @fashnai Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@fashnai</h3>
                        <p className="text-sm text-gray-400">Fashion & Style Content</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@fashnai/video/7472445375283039510?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 text-sm text-center">Video 1</a>
                      <a href="https://www.tiktok.com/@fashnai/video/7470452439401991446?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 text-sm text-center">Video 2</a>
                    </div>
                  </div>

                  {/* @0yindasola Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@0yindasola</h3>
                        <p className="text-sm text-gray-400">Fashion & Lifestyle</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@0yindasola/video/7512962861853904150?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-cyan-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>

                  {/* @luxeveraaa Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@luxeveraaa</h3>
                        <p className="text-sm text-gray-400">Luxury Fashion</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@luxeveraaa/video/7527524661819755806?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-purple-600 to-pink-700 text-white py-2 px-3 rounded-lg hover:from-purple-700 hover:to-pink-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>

                  {/* @lucyatdressy Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@lucyatdressy</h3>
                        <p className="text-sm text-gray-400">Dress Styling</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@lucyatdressy/video/7535321295219723527?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-2 px-3 rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>

                  {/* @styledbysalmaa Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@styledbysalmaa</h3>
                        <p className="text-sm text-gray-400">Personal Styling</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@styledbysalmaa/video/7535982580185763127?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-2 px-3 rounded-lg hover:from-orange-700 hover:to-red-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>

                  {/* @fitswithjake7 Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@fitswithjake7</h3>
                        <p className="text-sm text-gray-400">Men's Fashion</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@fitswithjake7/video/7531511264971869471?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-2 px-3 rounded-lg hover:from-indigo-700 hover:to-blue-800 transition-all duration-200 text-sm text-center">Video 1</a>
                      <a href="https://www.tiktok.com/@fitswithjake7/video/7530442404093037854?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-2 px-3 rounded-lg hover:from-indigo-700 hover:to-blue-800 transition-all duration-200 text-sm text-center">Video 2</a>
                    </div>
                  </div>

                  {/* @kayadevonte Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@kayadevonte</h3>
                        <p className="text-sm text-gray-400">Fashion & Beauty</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@kayadevonte/video/7508727643915717910?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-teal-600 to-green-700 text-white py-2 px-3 rounded-lg hover:from-teal-700 hover:to-green-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>

                  {/* @joyyshi Videos */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">@joyyshi</h3>
                        <p className="text-sm text-gray-400">Fashion & Lifestyle</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="https://www.tiktok.com/@joyyshi/video/7442166072364518674?is_from_webapp=1&sender_device=pc&web_id=7505848652914198047" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 px-3 rounded-lg hover:from-yellow-700 hover:to-orange-800 transition-all duration-200 text-sm text-center">Video 1</a>
                    </div>
                  </div>
                </div>

                {/* Video Analysis Guide */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">What to Look For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-white">Content Elements</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Strong opening hook (0-3 seconds)</li>
                        <li>• Clear problem statement</li>
                        <li>• Solution demonstration</li>
                        <li>• Before/after transformation</li>
                        <li>• Strong call-to-action</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-white">Engagement Factors</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• High view counts</li>
                        <li>• Strong comment engagement</li>
                        <li>• Shareable content</li>
                        <li>• Trending audio/music</li>
                        <li>• Relatable scenarios</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional Trending Links */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Trending Content & Trends</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    These trending links showcase content that's currently performing well. Study the execution, storytelling, and creative approaches that are resonating with audiences right now.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <a href="https://www.tiktok.com/t/ZP8k3GcUW/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm text-center font-medium">Trending Content 1</a>
                    <a href="https://www.tiktok.com/t/ZP8k3C95X/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-sm text-center font-medium">Trending Content 2</a>
                    <a href="https://www.tiktok.com/t/ZP8k3nQWM/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-sm text-center font-medium">Trending Content 3</a>
                    <a href="https://www.tiktok.com/t/ZP8k37tRw/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 text-sm text-center font-medium">Trending Content 4</a>
                    <a href="https://www.tiktok.com/t/ZP8k3qEvt/" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm text-center font-medium">Trending Content 5</a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content-schedule' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Content Schedule & Job Description</h2>
                  <p className="text-gray-300 mb-6">
                    Your roadmap to success as a VESTI Marketing Intern. Follow this structured approach to build sustainable content creation habits.
                  </p>
                </div>

                {/* Job Description */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Marketing Intern Role Overview</h3>
                  <div className="space-y-4 text-gray-300">
                    <p><strong className="text-white">About Vesti:</strong> Vesti is an innovative virtual try-on Chrome extension that allows users to upload an image of themselves (or celebrities) and instantly see how clothing items from across the web would look on them. We're reimagining online shopping through AI-powered styling and personalization—and we're growing fast.</p>
                    
                    <p><strong className="text-white">About the Role:</strong> We're looking for a creative, driven, and digitally-savvy Marketing Intern to help shape the voice of Vesti and bring our brand to life through compelling content. You'll play a key role in our growth by developing and distributing social-first content that drives user engagement, brand awareness, and excitement across digital platforms.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Key Responsibilities:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Content Creation: Develop engaging short-form content for TikTok, Instagram Reels, X, and other platforms</li>
                          <li>• Social Media Strategy: Execute strategy to drive traffic and user installs</li>
                          <li>• Visual Assets: Collaborate with design team or AI tools to generate visual assets</li>
                          <li>• Influencer Outreach: Support influencer outreach and UGC campaigns</li>
                          <li>• Copywriting: Write copy for social posts, blog entries, email campaigns</li>
                          <li>• Analytics: Analyze content performance and recommend optimizations</li>
                          <li>• Trend Monitoring: Keep content relevant and fresh</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Requirements:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Passion for fashion, tech, and digital media</li>
                          <li>• Strong grasp of TikTok and Instagram trends</li>
                          <li>• Video editing skills (CapCut, Adobe Premiere preferred)</li>
                          <li>• Experience with Canva, Figma, or Adobe Creative Suite</li>
                          <li>• Excellent writing and storytelling skills</li>
                          <li>• Proactive attitude and creativity</li>
                          <li>• Current student or recent grad in Marketing, Communications, Media, or related field</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Schedule */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Content Creation Schedule</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Week 1 */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                      <h4 className="font-medium text-white mb-3 text-center">Week 1: Foundation</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">1</div>
                          <div className="text-xs text-gray-400">Video per day</div>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Learn the process</li>
                          <li>• Build confidence</li>
                          <li>• Establish quality standards</li>
                          <li>• Learn what works</li>
                        </ul>
                      </div>
                    </div>

                    {/* Weeks 2-4 */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                      <h4 className="font-medium text-white mb-3 text-center">Weeks 2-4: Growth</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">2</div>
                          <div className="text-xs text-gray-400">Videos per day</div>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Morning post (9-10 AM)</li>
                          <li>• Evening post (6-8 PM)</li>
                          <li>• Focus on quality content</li>
                          <li>• Build engagement systems</li>
                        </ul>
                      </div>
                    </div>

                    {/* Week 5+ */}
                    <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-lg p-4 border border-pink-500/20">
                      <h4 className="font-medium text-white mb-3 text-center">Week 5+: Scale</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-400">2-3</div>
                          <div className="text-xs text-gray-400">Videos per day</div>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Content batching</li>
                          <li>• Advanced optimization</li>
                          <li>• Performance analysis</li>
                          <li>• Strategy refinement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daily Workflow */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Daily Workflow</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                        <h4 className="font-medium text-white mb-2">Morning (9-10 AM)</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Check trending topics</li>
                          <li>• Create first video</li>
                          <li>• Post and monitor engagement</li>
                          <li>• Plan evening content</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                        <h4 className="font-medium text-white mb-2">Afternoon (2-4 PM)</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Engage with comments</li>
                          <li>• Research new trends</li>
                          <li>• Plan tomorrow's content</li>
                          <li>• Analyze performance</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-lg p-4 border border-pink-500/20">
                        <h4 className="font-medium text-white mb-2">Evening (6-8 PM)</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Create second video</li>
                          <li>• Post and engage</li>
                          <li>• Respond to DMs</li>
                          <li>• Document learnings</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-4 border border-green-500/20">
                        <h4 className="font-medium text-white mb-2">Weekly Review</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Performance analysis</li>
                          <li>• Content calendar planning</li>
                          <li>• Strategy adjustments</li>
                          <li>• Skill development focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Ramp Up Gradually */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Why Ramp Up Gradually?</h3>
                  <div className="space-y-4 text-gray-300">
                    <p><strong className="text-white">Quality Over Quantity:</strong> It's better to create 1 amazing video (100k views) than 3 mediocre videos (5k each). Focus on learning what works before scaling up.</p>
                    
                    <p><strong className="text-white">Sustainable Habits:</strong> Building a consistent routine takes time. Starting with 1 video per day helps establish the habit without overwhelming yourself.</p>
                    
                    <p><strong className="text-white">Skill Development:</strong> Each video is an opportunity to improve your editing, storytelling, and trend-spotting abilities. Quality practice leads to better results.</p>
                    
                    <p><strong className="text-white">Audience Building:</strong> Consistent, high-quality content builds trust with your audience. They'll come to expect and engage with your content regularly.</p>
                    
                    <p><strong className="text-white">Burnout Prevention:</strong> Content creation can be mentally demanding. A gradual approach prevents burnout and keeps you motivated long-term.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'weekly-package' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Weekly Productivity Package</h2>
                  <p className="text-gray-300 mb-6">
                    Submit your weekly marketing performance and analytics to track progress and get feedback.
                  </p>
                </div>
                <WeeklyProductivityPackage />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}