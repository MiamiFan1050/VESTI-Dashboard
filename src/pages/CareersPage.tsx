import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/careers/Hero';
import { Section } from '../components/careers/Section';
import { CTABanner } from '../components/careers/CTABanner';
import { ArrowRight, Users, Zap, Star, Target, Globe, Award, TrendingUp, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function CareersPage() {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Careers at Vesti - Join Our Mission to Transform Online Shopping</title>
        <meta 
          name="description" 
          content="Join Vesti's mission to revolutionize online shopping with AI-powered virtual try-ons. Explore our internship and full-time programs. Remote-first culture with competitive benefits." 
        />
        <meta 
          name="keywords" 
          content="careers, jobs, hiring, virtual try-on, AI, remote work, startup, engineering, marketing, design, internship" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Careers at Vesti - Join Our Mission to Transform Online Shopping" />
        <meta property="og:description" content="Join Vesti's mission to revolutionize online shopping with AI-powered virtual try-ons. Explore our internship and full-time programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vesti.com/careers" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Vesti - Join Our Mission to Transform Online Shopping" />
        <meta name="twitter:description" content="Join Vesti's mission to revolutionize online shopping with AI-powered virtual try-ons. Explore our internship and full-time programs." />
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
              <span>Join the Future of Shopping</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight">
              <span className="block animate-fade-in-up">Build the Future of</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Virtual Try-On
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Join our mission to revolutionize online shopping with AI-powered virtual try-ons. 
              <span className="block mt-2 text-purple-300 font-medium">Help millions of people shop with confidence while working on cutting-edge technology.</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">10M+</div>
                <div className="text-gray-400">Users Worldwide</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-gray-400">Remote-First</div>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a
                href="#programs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-2xl"
              >
                Explore Opportunities
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at Vesti Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Work at Vesti?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're building a team that's passionate about innovation, collaboration, and making a real impact in the world of online shopping.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Remote-First Culture</h3>
            <p className="text-gray-600">Work from anywhere with flexible hours and a supportive remote environment</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge AI</h3>
            <p className="text-gray-600">Work with the latest AI/ML technologies in computer vision and virtual try-on</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact-Driven</h3>
            <p className="text-gray-600">Help millions of shoppers make confident purchasing decisions</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast-Growing</h3>
            <p className="text-gray-600">Join a rapidly expanding startup with huge growth potential</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Culture</h3>
            <p className="text-gray-600">Continuous learning with mentorship, conferences, and skill development</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Great Benefits</h3>
            <p className="text-gray-600">Competitive compensation, health insurance, and equity options</p>
          </div>
        </div>
      </Section>

      {/* Program Selection Section */}
      <Section id="programs">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're looking to launch your career or join our core team, we have exciting opportunities for passionate individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Internship Program */}
          <Link to="/careers/internships" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Internship Program</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Perfect for students and recent graduates looking to gain hands-on experience in a fast-growing AI startup.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Real-world project experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Mentorship from industry experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Potential for full-time conversion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Portfolio building opportunities</span>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  Explore Internships
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Full-Time Program */}
          <Link to="/careers/full-time" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Full-Time Program</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join our core team and help build the future of virtual try-on technology with competitive compensation and equity.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Competitive salary + equity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Cutting-edge AI technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Health, dental, vision insurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Unlimited PTO + flexible hours</span>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Explore Full-Time Roles
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* Application Process Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our application process is simple and straightforward. We're looking for passionate individuals who want to make a difference.
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
                To apply for any role, simply email your resume and cover letter to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Choose Your Program</h4>
                <p className="text-gray-600 text-sm">Select either our Internship or Full-Time program</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Review Roles</h4>
                <p className="text-gray-600 text-sm">Browse available positions and requirements</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Application</h4>
                <p className="text-gray-600 text-sm">Send your resume and cover letter</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:careers@vesti.com?subject=Application for Vesti Position"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Email Your Application
              </a>
              <p className="text-gray-500 mt-4">careers@vesti.com</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to join our mission?"
        description="Take the first step towards an exciting career at Vesti"
        buttonText="Explore Opportunities"
        buttonUrl="/careers"
      />
    </>
  );
} 
 