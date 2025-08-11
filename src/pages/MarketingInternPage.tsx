import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/careers/Hero';
import { Section } from '../components/careers/Section';
import { FAQAccordion } from '../components/careers/FAQAccordion';
import { CTABanner } from '../components/careers/CTABanner';
import { MarketingSlideDeck } from '../components/careers/MarketingSlideDeck';
import { CheckCircle, Clock, MapPin, DollarSign, Users, Target, TrendingUp, Instagram, Twitter, Linkedin, Zap, ArrowRight, Video, Palette, MessageSquare, BarChart3, Eye, Heart, Sparkles, Globe, Lightbulb, GraduationCap, Home, Trophy, Briefcase, Award, Rocket } from 'lucide-react';
import careersContent from '../content/careers';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { openEmail, emailTemplates } from '../utils/emailUtils';

export default function MarketingInternPage() {
  const { marketingIntern, faqs } = careersContent;
  
  // Scroll to top when component mounts
  useScrollToTop();

  const handleApply = () => {
    openEmail(
      emailTemplates.marketingIntern.to,
      emailTemplates.marketingIntern.subject,
      emailTemplates.marketingIntern.body
    );
  };

  return (
    <>
      <Helmet>
        <title>Marketing & Social Media Intern - Vesti Careers | Create Viral Content</title>
        <meta 
          name="description" 
          content="Join Vesti's marketing team as an intern and help shape our brand voice through compelling social media content. Unpaid internship with portfolio-building opportunities." 
        />
        <meta 
          name="keywords" 
          content="marketing intern, social media intern, content creation, unpaid internship, virtual try-on, AI, startup" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Marketing & Social Media Intern - Vesti Careers | Create Viral Content" />
        <meta property="og:description" content="Join Vesti's marketing team as an intern and help shape our brand voice through compelling social media content." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vesti.com/careers/interns/marketing" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing & Social Media Intern - Vesti Careers | Create Viral Content" />
        <meta name="twitter:description" content="Join Vesti's marketing team as an intern and help shape our brand voice through compelling social media content." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Marketing & Social Media Intern",
            "description": "Join Vesti's marketing team and help shape our brand voice through compelling social media content. Create viral content for TikTok, Instagram, and other platforms.",
            "employmentType": "Internship",
            "jobLocation": {
              "@type": "Place",
              "addressLocality": "Remote"
            },
            "organization": {
              "@type": "Organization",
              "name": "Vesti"
            },
            "datePosted": new Date().toISOString(),
            "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
          })}
        </script>
      </Helmet>

      {/* Sleek Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 via-transparent to-pink-500/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
              <Zap className="h-4 w-4 mr-2" />
              <span>Marketing & Social Media Internship</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="block animate-fade-in-up">Create Viral Content</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                for Millions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Join our marketing team and help shape the voice of Vesti through compelling social media content. 
              <span className="block mt-2 text-purple-300 font-medium">Create content that reaches millions of users worldwide.</span>
            </p>

            {/* Quick Info Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">3-6 Months</div>
                <div className="text-gray-400 text-sm">Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Remote</div>
                <div className="text-gray-400 text-sm">Location</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <DollarSign className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Unpaid</div>
                <div className="text-gray-400 text-sm">Portfolio Building</div>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <button
                onClick={handleApply}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-2xl"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Slide Deck */}
      <Section>
        <MarketingSlideDeck />
      </Section>



      {/* Enhanced Role Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-purple-700 font-semibold">Marketing & Social Media</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Role
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're looking for a creative, driven, and digitally-savvy Marketing Intern to help shape the voice of Vesti 
            and bring our brand to life through compelling content. You'll play a key role in our growth by developing 
            and distributing social-first content that drives user engagement, brand awareness, and excitement across digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real Impact</h3>
            <p className="text-gray-600">Your content will reach millions of potential users worldwide</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Viral Potential</h3>
            <p className="text-gray-600">Create content that could go viral and reach millions</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Freedom</h3>
            <p className="text-gray-600">Express your creativity across all social media platforms</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Building</h3>
            <p className="text-gray-600">Build impressive projects for your resume and portfolio</p>
          </div>
        </div>
      </Section>

      {/* Job Details */}
      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Key Responsibilities - Hero Style */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 shadow-2xl border border-purple-500/20 mb-12 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI0Y3M0Y2RiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-2">Your Mission</h3>
                  <p className="text-purple-200 text-lg">Shape the future of fashion tech with content that goes viral</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Featured Responsibility */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-xl">Create Viral Content</h4>
                        <p className="text-purple-200 leading-relaxed">Develop TikTok, Instagram Reels, and X content that reaches millions. Your memes, viral videos, and try-on demos will drive real business results.</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">Primary Focus</span>
                          <span className="bg-pink-500/20 text-pink-200 text-xs px-2 py-1 rounded-full">High Impact</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        <h5 className="font-semibold text-white">Strategy & Analytics</h5>
                      </div>
                      <p className="text-purple-200 text-sm">Drive traffic and user installs through data-driven social media strategy</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-5 w-5 text-blue-400" />
                        <h5 className="font-semibold text-white">Influencer Partnerships</h5>
                      </div>
                      <p className="text-purple-200 text-sm">Coordinate UGC campaigns and build relationships with top creators</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Palette className="h-5 w-5 text-yellow-400" />
                      <h5 className="font-semibold text-white">Visual Design</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Create stunning visuals with AI tools and design software</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-cyan-400" />
                      <h5 className="font-semibold text-white">Copywriting</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Write compelling copy for social posts, blogs, and campaigns</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-orange-400" />
                      <h5 className="font-semibold text-white">Trend Monitoring</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Stay ahead of viral formats and competitor strategies</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-red-400" />
                      <h5 className="font-semibold text-white">Brand Voice</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Shape Vesti's voice and bring our brand to life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements - Modern Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-700 font-semibold">What You Need</span>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">Are You the Perfect Fit?</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're looking for someone who's passionate, creative, and ready to make an impact</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Essential Skills */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-green-200 group-hover:border-green-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Passion & Drive</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Strong interest in fashion, tech, and digital media. You live and breathe social media trends.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Essential</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-blue-200 group-hover:border-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Social Media Savvy</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Deep understanding of TikTok and Instagram. You know what makes content go viral.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Critical</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-purple-200 group-hover:border-purple-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Video Skills</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Experience with CapCut, Adobe Premiere, or similar tools. You can edit like a pro.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">Preferred</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-orange-200 group-hover:border-orange-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Creative Mindset</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Willingness to test new ideas and think outside the box. Your creativity matters here.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">Essential</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Requirements */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700 font-medium">Excellent writing skills</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <GraduationCap className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700 font-medium">Marketing/Media student or recent grad</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Home className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700 font-medium">Remote work capability</span>
              </div>
            </div>
          </div>

          {/* What You'll Gain - Premium Benefits */}
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-8 border border-purple-200 mb-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-4">
                  <Trophy className="w-6 h-6 text-purple-600" />
                  <span className="text-purple-700 font-semibold">Your Rewards</span>
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">Why This Internship is Game-Changing</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">This isn't just another internship - it's your launchpad to a successful career in marketing</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Major Benefits */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Real Brand Experience</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Shape the voice of a fast-growing consumer tech startup. Your work will directly impact millions of users worldwide.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-semibold">High Impact</span>
                          <span className="bg-pink-100 text-pink-700 text-sm px-3 py-1 rounded-full font-semibold">Millions of Users</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Portfolio Goldmine</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Build an impressive portfolio with high-visibility content that actually drives business results. Perfect for your next job application.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-semibold">Real Results</span>
                          <span className="bg-cyan-100 text-cyan-700 text-sm px-3 py-1 rounded-full font-semibold">Career Boost</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Additional Benefits */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Creative Freedom</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Work in an environment where your ideas matter. Experiment with new formats and push creative boundaries.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-semibold">Innovation</span>
                          <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full font-semibold">Your Ideas Matter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Mentorship & Growth</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Learn from founders and marketing leaders. Potential for full-time role or powerful referrals for your next opportunity.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-semibold">Direct Mentorship</span>
                          <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-semibold">Career Path</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-12 text-center">
                <button
                  onClick={handleApply}
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="h-6 w-6" />
                  <span className="font-bold text-lg">Ready to Launch Your Career?</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Platforms */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platforms You'll Work With</h3>
              <p className="text-gray-600 text-lg">Create engaging content across all major social media platforms</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <Instagram className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Instagram</h4>
                <p className="text-sm text-gray-600">Visual content & stories</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <Twitter className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Twitter/X</h4>
                <p className="text-sm text-gray-600">Engagement & trends</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <Linkedin className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                <p className="text-sm text-gray-600">Professional content</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">TikTok</h4>
                <p className="text-sm text-gray-600">Viral video content</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <FAQAccordion faqs={faqs} />
      </Section>

      {/* Bottom spacing for sticky banner */}
      <div className="h-24 sm:h-28"></div>

      {/* Mobile-Optimized CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-1">
                Ready to create viral content?
              </h2>
              <p className="text-purple-100 text-sm">
                Apply now and start your marketing journey with Vesti
              </p>
            </div>
            <button
              onClick={handleApply}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 whitespace-nowrap text-sm sm:text-base"
            >
              Apply for Marketing Intern
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 
 