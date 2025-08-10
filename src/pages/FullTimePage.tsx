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

export default function FullTimePage() {
  const fullTimeRoles = careersContent.openRoles.filter(role => role.type === 'Full-time');
  
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Full-Time Positions - Vesti Careers | Join Our Core Team</title>
        <meta 
          name="description" 
          content="Join Vesti's core team and help build the future of virtual try-on technology. Competitive compensation, equity, and cutting-edge AI work." 
        />
        <meta 
          name="keywords" 
          content="full-time jobs, career opportunities, AI engineering, virtual try-on, remote work, competitive salary, equity" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Full-Time Positions - Vesti Careers | Join Our Core Team" />
        <meta property="og:description" content="Join Vesti's core team and help build the future of virtual try-on technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vesti.com/careers/full-time" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full-Time Positions - Vesti Careers | Join Our Core Team" />
        <meta name="twitter:description" content="Join Vesti's core team and help build the future of virtual try-on technology." />
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
              <Star className="h-4 w-4 mr-2" />
              <span>Full-Time Positions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
              <span className="block animate-fade-in-up">Join Our Core Team</span>
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Build the Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Work on cutting-edge AI technology that's revolutionizing online shopping. 
              <span className="block mt-2 text-blue-300 font-medium">Enjoy competitive compensation, equity, and the opportunity to make a real impact on millions of users.</span>
            </p>

            {/* Quick Info Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Full-Time</div>
                <div className="text-gray-400 text-sm">Permanent Role</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Remote</div>
                <div className="text-gray-400 text-sm">Location</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <DollarSign className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Competitive</div>
                <div className="text-gray-400 text-sm">Salary + Equity</div>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a
                href="#positions"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 shadow-2xl"
              >
                View Positions
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Program Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-green-100 px-8 py-4 rounded-full mb-8">
            <Star className="w-8 h-8 text-blue-600" />
            <span className="text-blue-700 font-bold text-lg">Full-Time Program</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Why Join Our
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Core Team?
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Work on cutting-edge AI technology that's revolutionizing online shopping. 
            <span className="block mt-4 text-blue-600 font-semibold">Enjoy competitive compensation, equity, and the opportunity to make a real impact on millions of users.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pay</h3>
            <p className="text-gray-600 leading-relaxed">Competitive salary + equity package with regular reviews</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Tech</h3>
            <p className="text-gray-600 leading-relaxed">Work with latest AI/ML technologies in computer vision</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Great Benefits</h3>
            <p className="text-gray-600 leading-relaxed">Health, dental, vision insurance + wellness programs</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⏰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Hours</h3>
            <p className="text-gray-600 leading-relaxed">Unlimited PTO + flexible schedule + remote work</p>
          </div>
        </div>
      </Section>

      {/* Available Positions - Enhanced */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Available
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Positions
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Browse our current full-time opportunities and find the perfect role to advance your career.
            <span className="block mt-4 text-blue-600 font-semibold">Each role offers unique challenges and opportunities for growth.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Frontend Developer */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">Frontend Developer</h3>
                    <p className="text-blue-600 font-semibold">Build beautiful, responsive user interfaces</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join our frontend team and help build the user interfaces that millions of people use to try on clothes virtually. 
                  You'll work with React, TypeScript, and modern web technologies to create seamless user experiences.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">$80-120K</div>
                    <div className="text-sm text-gray-600">Annual Salary</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">0.1-0.3%</div>
                    <div className="text-sm text-gray-600">Equity Package</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">React</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">TypeScript</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">UI/UX</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Performance</span>
                </div>

                <a
                  href="mailto:careers@vesti.com?subject=Frontend Developer Application - Vesti"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Do:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Build responsive, accessible user interfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Optimize performance and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Collaborate with designers and backend teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Write clean, maintainable, and tested code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI/ML Engineer */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">AI/ML Engineer</h3>
                    <p className="text-green-600 font-semibold">Build cutting-edge AI for virtual try-ons</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Work on the core AI technology that powers our virtual try-on experience. You'll develop computer vision models, 
                  work with large datasets, and push the boundaries of what's possible in virtual try-on technology.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">$100-150K</div>
                    <div className="text-sm text-gray-600">Annual Salary</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">0.2-0.5%</div>
                    <div className="text-sm text-gray-600">Equity Package</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Computer Vision</span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Deep Learning</span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Python</span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">TensorFlow</span>
                </div>

                <a
                  href="mailto:careers@vesti.com?subject=AI/ML Engineer Application - Vesti"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Do:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Develop computer vision models for virtual try-on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Optimize model performance and accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Work with large-scale datasets and pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Deploy models to production environments</span>
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
            Our application process is simple and straightforward. We're looking for passionate professionals who want to make a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Application Process</h3>
              <p className="text-lg text-gray-600">
                To apply for any full-time position, simply email your resume and cover letter to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Choose Your Role</h4>
                <p className="text-gray-600 text-sm">Select the position that matches your skills</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Prepare Materials</h4>
                <p className="text-gray-600 text-sm">Update your resume and write a cover letter</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Application</h4>
                <p className="text-gray-600 text-sm">Send your materials to our careers team</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:careers@vesti.com?subject=Full-Time Application - Vesti"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Apply for Full-Time Position
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
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Careers
        </Link>
      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to join our core team?"
        description="Apply now and start your journey with Vesti"
        buttonText="Apply for Full-Time Position"
        buttonUrl="mailto:careers@vesti.com?subject=Full-Time Application - Vesti"
      />
    </>
  );
} 