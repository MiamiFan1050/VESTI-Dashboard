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
  CheckSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterTemplate } from '../components/BeforeAfterTemplate';

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

  const [activeTab, setActiveTab] = useState('overview');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState(baseText);
  const [isTyping, setIsTyping] = useState(true);

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

          {/* VESTI AI Chat Interface */}
          <div className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden mb-8 shadow-2xl">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 p-8 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">VESTI AI Assistant</h2>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online • Ready to help with content creation
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20">
                    <span className="text-white text-sm font-medium">AI Powered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-8 space-y-6 custom-scrollbar">
              {/* AI Welcome Message */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 max-w-[85%] border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-purple-300 font-semibold text-sm">VESTI AI</span>
                    <span className="text-gray-400 text-xs">• Just now</span>
                  </div>
                  <p className="text-white text-base leading-relaxed">
                    Hi! I'm your VESTI AI assistant, designed to help you create viral content that converts. I can generate hooks, write captions, create shot lists, adapt trends, and much more. What would you like to work on today?
                  </p>
                </div>
              </div>

              {/* Sample AI Response */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 max-w-[85%] border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-purple-300 font-semibold text-sm">VESTI AI</span>
                    <span className="text-gray-400 text-xs">• 2 min ago</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Viral Hooks
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between group hover:bg-white/15 transition-all duration-200">
                          <p className="text-white text-sm font-medium">"I spent $500 on clothes that didn't fit until I found VESTI! 💸"</p>
                          <button className="text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100" title="Copy hook">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between group hover:bg-white/15 transition-all duration-200">
                          <p className="text-white text-sm font-medium">"Watch this outfit transform with VESTI! ✨"</p>
                          <button className="text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100" title="Copy hook">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Caption
                      </h4>
                      <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between group hover:bg-white/15 transition-all duration-200">
                        <p className="text-white text-sm leading-relaxed">Just discovered the future of online shopping! 🛍️✨ Virtual try-on has never been easier with VESTI's AI-powered technology.</p>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100" title="Copy caption">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-8 border-t border-white/20 bg-gradient-to-r from-white/5 to-white/10">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder={displayText}
                    className="w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-base"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors" title="Voice input">
                      <MessageSquare className="h-5 w-5" />
                    </button>
                  </div>

                </div>
                <button className="px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Send
                </button>
              </div>
              
              {/* Enhanced Quick Suggestions */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-medium">Quick Actions:</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white rounded-xl hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-200 border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Generate Hook</span>
                    </div>
                  </button>
                  <button className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white rounded-xl hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200 border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Write Caption</span>
                    </div>
                  </button>
                  <button className="p-4 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-white rounded-xl hover:from-green-600/30 hover:to-teal-600/30 transition-all duration-200 border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <List className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Shot List</span>
                    </div>
                  </button>
                  <button className="p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-white rounded-xl hover:from-orange-600/30 hover:to-red-600/30 transition-all duration-200 border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Adapt Trend</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 mb-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'content', label: 'Content Creation', icon: FileText },
              { id: 'campaigns', label: 'Campaigns', icon: Target },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'calendar', label: 'Calendar', icon: Calendar },
              { id: 'team', label: 'Team', icon: Users },
              { id: 'canva', label: 'Canva', icon: Image },
              { id: 'script-generator', label: 'Script Generator', icon: Sparkles },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl min-h-[60vh]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome & Stats */}
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Welcome, Marketing Intern!
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    Here's a quick overview of your impact and upcoming tasks.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-blue-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Total Views</p>
                          <p className="text-white font-bold text-xl">2.4M</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-red-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Engagement</p>
                          <p className="text-white font-bold text-xl">156K</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <Share2 className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Shares</p>
                          <p className="text-white font-bold text-xl">89K</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Growth</p>
                          <p className="text-white font-bold text-xl">+23%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-400" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">TikTok video published</p>
                        <p className="text-gray-400 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Instagram Reel created</p>
                        <p className="text-gray-400 text-xs">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Campaign performance reviewed</p>
                        <p className="text-gray-400 text-xs">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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

            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Campaign Management</h2>
                  <p className="text-gray-300 mb-6">
                    Track and manage your marketing campaigns.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300">Campaign management features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h2>
                  <p className="text-gray-300 mb-6">
                    View detailed analytics and performance metrics.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300">Analytics dashboard coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Content Calendar</h2>
                  <p className="text-gray-300 mb-6">
                    Plan and schedule your content.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300">Content calendar coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Team Collaboration</h2>
                  <p className="text-gray-300 mb-6">
                    Collaborate with your team members.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-300">Team collaboration features coming soon...</p>
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
                  <h2 className="text-2xl font-bold text-white mb-4">Advanced Script Tools</h2>
                  <p className="text-gray-300 mb-6">
                    Use the AI chat above for content ideas, or explore these specialized tools below.
                  </p>
                </div>

                {/* Content Creation Tools */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-6">Content Creation Tools</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 group">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📝</div>
                      <span className="text-sm font-medium">Generate Script</span>
                    </button>
                    <button className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎨</div>
                      <span className="text-sm font-medium">Canva Templates</span>
                    </button>
                    <button className="p-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-200 group">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🔄</div>
                      <span className="text-sm font-medium">Content Generators</span>
                    </button>
                    <button className="p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 group">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎬</div>
                      <span className="text-sm font-medium">Veo Tutorials</span>
                    </button>
                  </div>
                </div>

                {/* Trend Adaptation */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Adapt Viral Trends</h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Paste TikTok/IG link here..."
                      className="flex-1 p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    />
                    <button className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                      Adapt for VESTI
                    </button>
                  </div>
                </div>

                {/* Best Practices & Examples */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Best Practices */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Best Practices</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Brand Tone</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Confident but not arrogant</li>
                          <li>• Tech-savvy but accessible</li>
                          <li>• Fashion-forward but inclusive</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Claims to Avoid</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• "100% accurate" or "perfect fit"</li>
                          <li>• "Guaranteed to go viral"</li>
                          <li>• Medical claims about body image</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Winning Examples */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Winning Examples</h3>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="font-medium text-white mb-2">Money-Saving Hook</h4>
                        <p className="text-gray-300 text-sm mb-2">"I spent $500 on clothes that didn't fit until I found VESTI! 💸"</p>
                        <p className="text-purple-300 text-xs">Why it worked: Emotional pain point + specific dollar amount</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="font-medium text-white mb-2">Transformation Hook</h4>
                        <p className="text-gray-300 text-sm mb-2">"Watch this outfit transform with VESTI! ✨"</p>
                        <p className="text-purple-300 text-xs">Why it worked: Visual promise + magic element</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 
 