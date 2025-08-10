import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/careers/Hero';
import { Section } from '../components/careers/Section';
import { FAQAccordion } from '../components/careers/FAQAccordion';
import { CTABanner } from '../components/careers/CTABanner';
import { CheckCircle, Clock, MapPin, DollarSign, Users, Target, TrendingUp, Award, BarChart3, Lightbulb, Zap, Star, ArrowRight, Trophy, Briefcase, Rocket } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { openEmail, emailTemplates } from '../utils/emailUtils';

export default function ManagementInternPage() {
  // Scroll to top when component mounts
  useScrollToTop();

  const handleApply = () => {
    openEmail(
      emailTemplates.managementIntern.to,
      emailTemplates.managementIntern.subject,
      emailTemplates.managementIntern.body
    );
  };

  const managementIntern = {
    title: "Management Intern",
    subtitle: "Gain real leadership experience in a fast-growing AI startup",
    overview: "Join our operations team and gain hands-on management experience by overseeing intern workflows, making strategic decisions, and learning day-to-day operations. This is your opportunity to develop leadership skills while contributing to Vesti's growth.",
    
    responsibilities: [
      "Oversee and coordinate intern team workflows and projects",
      "Make strategic decisions on resource allocation and priorities",
      "Lead weekly team meetings and provide mentorship to other interns",
      "Develop and implement process improvements and operational strategies",
      "Manage project timelines and ensure deliverables are met",
      "Analyze team performance metrics and provide feedback",
      "Collaborate with leadership on strategic planning and execution",
      "Represent the intern team in cross-functional meetings"
    ],

    requirements: [
      "Currently pursuing degree in Business, Management, Entrepreneurship, or related field",
      "Strong leadership and communication skills",
      "Experience in project management or team coordination",
      "Analytical mindset with strategic thinking abilities",
      "Proficiency in project management tools (Notion, Asana, etc.)",
      "Interest in startup operations and scaling processes",
      "Ability to manage multiple priorities and deadlines",
      "Previous internship or leadership experience (preferred)"
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

    duration: "3-6 months (flexible based on your schedule)",
    startDate: "Immediate start available",
    compensation: "Competitive stipend + leadership bonuses"
  };

  const faqs = [
    {
      question: "What's the time commitment for the management intern role?",
      answer: "The role is designed for 20-25 hours per week, with flexibility to work around your class schedule. We prefer interns who can commit to at least 3 months, but we're open to longer-term arrangements."
    },
    {
      question: "Is this a paid internship?",
      answer: "This is an unpaid internship focused on portfolio building and gaining real-world leadership experience. You'll work on high-impact projects, lead teams, and gain valuable management skills that will help launch your career."
    },
    {
      question: "What management experience will I gain?",
      answer: "You'll lead a team of other interns, make strategic decisions, manage projects, and learn startup operations. This is real management experience, not just shadowing."
    },
    {
      question: "How will this internship help my career?",
      answer: "This internship provides real management experience that directly translates to your future career. You'll lead teams, make strategic decisions, manage projects, and learn startup operations - all valuable skills for any management role. You'll build a strong portfolio demonstrating your leadership abilities and make connections in the tech industry."
    },
    {
      question: "What tools and software will I use?",
      answer: "You'll work with tools like Notion for project management, Slack for communication, Zoom for meetings, and various analytics tools. We'll provide training on any tools you're not familiar with."
    },
    {
      question: "How do I apply?",
      answer: "Click the 'Apply Now' button below! You'll be asked to submit your resume, a brief cover letter explaining your leadership experience and why you're interested in Vesti, and any relevant project management examples."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Management Intern - Vesti Careers | Gain Real Leadership Experience</title>
        <meta 
          name="description" 
          content="Join Vesti as a Management Intern and gain hands-on leadership experience. Oversee intern teams, make strategic decisions, and learn startup operations in a fast-growing AI company." 
        />
        <meta 
          name="keywords" 
          content="management intern, leadership internship, startup management, operations intern, project management, team leadership" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Management Intern - Vesti Careers | Gain Real Leadership Experience" />
        <meta property="og:description" content="Join Vesti as a Management Intern and gain hands-on leadership experience. Oversee intern teams, make strategic decisions, and learn startup operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vesti.com/careers/interns/management" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Management Intern - Vesti Careers | Gain Real Leadership Experience" />
        <meta name="twitter:description" content="Join Vesti as a Management Intern and gain hands-on leadership experience. Oversee intern teams, make strategic decisions, and learn startup operations." />
        
        {/* JSON-LD Schema for JobPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Management Intern",
            "description": managementIntern.overview,
            "employmentType": "INTERN",
            "jobLocation": {
              "@type": "Place",
              "addressLocality": "Remote"
            },
            "organization": {
              "@type": "Organization",
              "name": "Vesti",
              "url": "https://vesti.com"
            },
            "datePosted": new Date().toISOString(),
            "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            "qualifications": managementIntern.requirements.join(", "),
            "responsibilities": managementIntern.responsibilities.join(", "),
            "benefits": managementIntern.benefits.join(", "),
            "salaryCurrency": "USD",
            "applicantLocationRequirements": {
              "@type": "Country",
              "name": "United States"
            }
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
              <span>Management Internship</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="block animate-fade-in-up">Lead Our Intern Team</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                & Drive Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Join our operations team and gain hands-on management experience by overseeing intern workflows, making strategic decisions, and learning day-to-day operations.
              <span className="block mt-2 text-purple-300 font-medium">This is your opportunity to develop leadership skills while contributing to Vesti's growth.</span>
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
              <a
                href="mailto:contact@getvesti.com?subject=Management%20Internship%20Application&body=Hi%20VESTI%20Team%2C%0A%0AI'm%20interested%20in%20applying%20for%20the%20Management%20Internship.%20Please%20find%20my%20CV%20attached.%0A%0ABest%20regards"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-2xl"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Role Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-purple-700 font-semibold">Management & Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Role
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're looking for a driven, organized, and leadership-focused Management Intern to oversee our intern team 
            and contribute to strategic decision-making. You'll play a key role in our growth by managing workflows, 
            coordinating projects, and developing operational processes that scale our fast-growing AI startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Team Leadership</h3>
            <p className="text-gray-600">Lead and mentor a team of other interns across different departments</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Planning</h3>
            <p className="text-gray-600">Make strategic decisions on resource allocation and project priorities</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Process Optimization</h3>
            <p className="text-gray-600">Develop and implement scalable operational processes</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
            <p className="text-gray-600">Fast-track to management positions and leadership opportunities</p>
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
                  <p className="text-purple-200 text-lg">Lead our intern team and drive operational excellence in a fast-growing AI startup</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Featured Responsibility */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-xl">Lead Intern Team</h4>
                        <p className="text-purple-200 leading-relaxed">Oversee and coordinate workflows across all intern departments. Your leadership will directly impact our startup's growth and efficiency.</p>
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
                        <BarChart3 className="h-5 w-5 text-green-400" />
                        <h5 className="font-semibold text-white">Strategic Planning</h5>
                      </div>
                      <p className="text-purple-200 text-sm">Make key decisions on resource allocation and project priorities</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-400" />
                        <h5 className="font-semibold text-white">Process Optimization</h5>
                      </div>
                      <p className="text-purple-200 text-sm">Develop scalable operational processes and workflows</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-5 w-5 text-yellow-400" />
                      <h5 className="font-semibold text-white">Mentorship</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Provide guidance and support to other interns</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-cyan-400" />
                      <h5 className="font-semibold text-white">Performance Analysis</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Track team metrics and provide strategic feedback</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-orange-400" />
                      <h5 className="font-semibold text-white">Cross-functional Collaboration</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Work with leadership on strategic initiatives</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-red-400" />
                      <h5 className="font-semibold text-white">Project Management</h5>
                    </div>
                    <p className="text-purple-200 text-sm mt-1">Ensure deliverables are met on time and within scope</p>
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're looking for someone who's organized, strategic, and ready to lead</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Essential Skills */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-green-200 group-hover:border-green-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Leadership Skills</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Strong ability to lead teams, motivate others, and drive results. You naturally take initiative and inspire confidence.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Essential</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-blue-200 group-hover:border-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Strategic Thinking</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Analytical mindset with ability to make data-driven decisions and prioritize effectively.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Critical</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-purple-200 group-hover:border-purple-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Project Management</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Experience with project management tools and ability to manage multiple priorities and deadlines.</p>
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
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Communication</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Excellent written and verbal communication skills. You can clearly articulate ideas and provide constructive feedback.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">Essential</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Requirements */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700 font-medium">Business/Management student or recent grad</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Star className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700 font-medium">Previous leadership experience preferred</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Zap className="h-5 w-5 text-teal-600" />
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
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">This isn't just another internship - it's your launchpad to a successful career in management</p>
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
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Real Management Experience</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Lead a team of interns and make strategic decisions that impact our startup's growth. This is real management, not just shadowing.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-semibold">High Impact</span>
                          <span className="bg-pink-100 text-pink-700 text-sm px-3 py-1 rounded-full font-semibold">Real Leadership</span>
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
                        <p className="text-gray-700 leading-relaxed mb-4">Build an impressive management portfolio with real team leadership experience. Perfect for your next job application.</p>
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
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Strategic Decision Making</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Make real strategic decisions on resource allocation, priorities, and operational processes. Your choices matter.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-semibold">High Impact</span>
                          <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full font-semibold">Real Authority</span>
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
                        <h4 className="font-black text-gray-900 mb-3 text-2xl">Direct Mentorship</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">Learn directly from company leadership and founders. Potential for full-time management role or powerful referrals.</p>
                        <div className="flex items-center gap-2">
                          <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-semibold">Direct Access</span>
                          <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-semibold">Career Path</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-12 text-center">
                <a
                  href="mailto:contact@getvesti.com?subject=Management%20Internship%20Application&body=Hi%20VESTI%20Team%2C%0A%0AI'm%20interested%20in%20applying%20for%20the%20Management%20Internship.%20Please%20find%20my%20CV%20attached.%0A%0ABest%20regards"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="h-6 w-6" />
                  <span className="font-bold text-lg">Ready to Lead Our Team?</span>
                  <ArrowRight className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Management Tools */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools You'll Master</h3>
              <p className="text-gray-600 text-lg">Develop expertise in industry-standard management and collaboration tools</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-semibold text-gray-900">Notion</h4>
                <p className="text-sm text-gray-600">Project management & docs</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-semibold text-gray-900">Asana</h4>
                <p className="text-sm text-gray-600">Task management</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold text-gray-900">Slack</h4>
                <p className="text-sm text-gray-600">Team communication</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-gray-900">Analytics</h4>
                <p className="text-sm text-gray-600">Performance tracking</p>
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
                Ready to lead our intern team?
              </h2>
              <p className="text-purple-100 text-sm">
                Apply now and start your leadership journey with Vesti
              </p>
            </div>
            <a
              href="mailto:contact@getvesti.com?subject=Management%20Internship%20Application&body=Hi%20VESTI%20Team%2C%0A%0AI'm%20interested%20in%20applying%20for%20the%20Management%20Internship.%20Please%20find%20my%20CV%20attached.%0A%0ABest%20regards"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 whitespace-nowrap text-sm sm:text-base"
            >
              Apply for Management Intern
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
 