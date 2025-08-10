import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/careers/Hero';
import { Section } from '../components/careers/Section';
import { RoleCard } from '../components/careers/RoleCard';
import { CTABanner } from '../components/careers/CTABanner';
import { ArrowLeft, Users, Zap, Mail, ArrowRight, Star, Clock, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import careersContent from '../content/careers';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function InternshipsPage() {
  const internshipRoles = careersContent.openRoles.filter(role => role.type === 'Internship');
  
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Internship Program - Vesti Careers | Launch Your Career</title>
        <meta 
          name="description" 
          content="Join Vesti's internship program and gain hands-on experience in a fast-growing AI startup. Perfect for students and recent graduates." 
        />
        <meta 
          name="keywords" 
          content="internship, student opportunities, entry level, virtual try-on, AI, remote work, startup experience" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Internship Program - Vesti Careers | Launch Your Career" />
        <meta property="og:description" content="Join Vesti's internship program and gain hands-on experience in a fast-growing AI startup." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vesti.com/careers/internships" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internship Program - Vesti Careers | Launch Your Career" />
        <meta name="twitter:description" content="Join Vesti's internship program and gain hands-on experience in a fast-growing AI startup." />
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
              <Users className="h-4 w-4 mr-2" />
              <span>Internship Program</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
              <span className="block animate-fade-in-up">Launch Your Career in</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                AI & Virtual Try-On
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Perfect for students and recent graduates looking to gain hands-on experience in a fast-growing AI startup. 
              <span className="block mt-2 text-purple-300 font-medium">Build your portfolio, learn from industry experts, and potentially join our team full-time.</span>
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
                href="#internships"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-2xl"
              >
                View Internships
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Program Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-8 py-4 rounded-full mb-8">
            <Zap className="w-8 h-8 text-purple-600" />
            <span className="text-purple-700 font-bold text-lg">Internship Program</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Why Choose Our
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Internship Program?
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Our internship program is designed to give you real-world experience while working on cutting-edge technology that impacts millions of users.
            <span className="block mt-4 text-purple-600 font-semibold">No coffee runs here - you'll work on actual features that ship to production!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Projects</h3>
            <p className="text-gray-600 leading-relaxed">Work on actual features that ship to millions of users worldwide</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">👥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Mentorship</h3>
            <p className="text-gray-600 leading-relaxed">Learn from experienced professionals who've built successful products</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Building</h3>
            <p className="text-gray-600 leading-relaxed">Build impressive projects that will make your resume stand out</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Path</h3>
            <p className="text-gray-600 leading-relaxed">High conversion rate to full-time positions upon graduation</p>
          </div>
        </div>
      </Section>

      {/* Available Internships - Enhanced */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Available
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Browse our current internship opportunities and find the perfect role to launch your career.
            <span className="block mt-4 text-purple-600 font-semibold">Each role offers unique learning opportunities and real-world impact.</span>
          </p>
        </div>

        <div id="internships" className="max-w-6xl mx-auto space-y-12">
          {/* Marketing & Social Media Intern */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">Marketing & Social Media Intern</h3>
                    <p className="text-purple-600 font-semibold">Create viral content and grow Vesti's presence</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join our marketing team and help spread the word about Vesti's game-changing virtual try-on technology. 
                  You'll create compelling content, manage social media campaigns, and develop strategies to reach our target audience.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">3-6</div>
                    <div className="text-sm text-gray-600">Months Duration</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">Portfolio</div>
                    <div className="text-sm text-gray-600">Building Focus</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Content Creation</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Social Media</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Viral Marketing</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Growth Hacking</span>
                </div>

                <a
                  href="/careers/interns/marketing"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Do:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Create engaging social media content across all platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Develop viral marketing campaigns and strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Analyze performance metrics and optimize content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Collaborate with the product team on messaging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Intern */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">Management Intern</h3>
                    <p className="text-indigo-600 font-semibold">Lead teams and gain hands-on management experience</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Take on a leadership role within our internship program, overseeing projects, mentoring other interns, 
                  and contributing to strategic decisions. Perfect for ambitious individuals looking to fast-track their career in management.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">3-6</div>
                    <div className="text-sm text-gray-600">Months Duration</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">Portfolio</div>
                    <div className="text-sm text-gray-600">Building Focus</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Leadership</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Project Management</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Strategy</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Operations</span>
                </div>

                <a
                  href="/careers/interns/management"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Do:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Lead and mentor a small team of interns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Assist in day-to-day operations and strategic decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Optimize processes for efficiency and productivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Participate in recruitment and onboarding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our application process is simple and straightforward. We're looking for passionate students who want to make a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Application Process</h3>
              <p className="text-lg text-gray-600">
                To apply for any internship, simply email your resume and cover letter to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Choose Your Role</h4>
                <p className="text-gray-600 text-sm">Select the internship position that interests you</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Prepare Materials</h4>
                <p className="text-gray-600 text-sm">Update your resume and write a cover letter</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Application</h4>
                <p className="text-gray-600 text-sm">Send your materials to our careers team</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:careers@vesti.com?subject=Internship Application - Vesti"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Apply for Internship
              </a>
              <p className="text-gray-500 mt-4">careers@vesti.com</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Back to Careers */}
      <div className="text-center py-8">
        <Link 
          to="/careers"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Careers
        </Link>
      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to launch your career?"
        description="Apply now and start your journey with Vesti"
        buttonText="Apply for Internship"
        buttonUrl="mailto:careers@vesti.com?subject=Internship Application - Vesti"
      />
    </>
  );
} 
 