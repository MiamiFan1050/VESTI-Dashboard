import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LogOut, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdminDashboard } from '../components/AdminDashboard';

export default function AdminDashboardPage() {
  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      window.location.href = '/signin';
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Vesti Employee Portal</title>
        <meta 
          name="description" 
          content="Admin dashboard for viewing and managing intern submissions and performance metrics." 
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
              
              {/* Top Navigation */}
              <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link 
                  to="/signin"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/20"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Portal</span>
                </Link>
                
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white">Admin Access</h3>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-200 border border-red-500/30"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-12 sm:mt-16">
          <AdminDashboard />
        </div>
      </div>
    </>
  );
}
