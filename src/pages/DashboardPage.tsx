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
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterTemplate } from '../components/BeforeAfterTemplate';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
        <div className="relative z-10">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Site</span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-semibold">Marketing Intern Dashboard</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/30 transition-all duration-300 border border-red-500/30"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8">
          {/* Welcome Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, Marketing Intern! 🎉
                </h1>
                <p className="text-gray-300">
                  Ready to create some viral content today?
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Last login</p>
                <p className="text-white font-semibold">Today at 9:30 AM</p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                        <p className="text-white text-sm">Instagram story created</p>
                        <p className="text-gray-400 text-xs">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Campaign performance reviewed</p>
                        <p className="text-gray-400 text-xs">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-pink-400" />
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-left">
                      <Plus className="h-6 w-6 text-purple-400 mb-2" />
                      <p className="text-white text-sm font-medium">Create Post</p>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 text-left">
                      <Video className="h-6 w-6 text-blue-400 mb-2" />
                      <p className="text-white text-sm font-medium">New Video</p>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-300 text-left">
                      <BarChart3 className="h-6 w-6 text-green-400 mb-2" />
                      <p className="text-white text-sm font-medium">View Analytics</p>
                    </button>
                    <button className="p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 text-left">
                      <MessageSquare className="h-6 w-6 text-orange-400 mb-2" />
                      <p className="text-white text-sm font-medium">Team Chat</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Content Creation Tools</h2>
                <p className="text-gray-300">Content creation tools will be available here.</p>
                <BeforeAfterTemplate />
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Campaign Management</h2>
                <p className="text-gray-300">Campaign management tools will be available here.</p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Analytics & Insights</h2>
                <p className="text-gray-300">Analytics and insights will be available here.</p>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Content Calendar</h2>
                <p className="text-gray-300">Content calendar will be available here.</p>
              </div>
            )}

            {activeTab === 'team' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Team Collaboration</h2>
                <p className="text-gray-300">Team collaboration tools will be available here.</p>
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
          </div>
        </div>
      </div>
    </>
  );
} 
 