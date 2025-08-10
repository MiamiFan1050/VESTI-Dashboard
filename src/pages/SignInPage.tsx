import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, ArrowLeft, Users, Zap, Key, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const [accessCode, setAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Check for specific access codes
      if (accessCode === '5432') {
        setUserType('marketing-intern');
        setIsSuccess(true);
        setError('');
      } else if (accessCode.length === 4 && /^\d+$/.test(accessCode)) {
        setUserType('employee');
        setIsSuccess(true);
        setError('');
      } else {
        setError('Please enter a valid 4-digit access code');
        setIsSuccess(false);
      }
    }, 1500);
  };

  const handleReset = () => {
    setAccessCode('');
    setError('');
    setIsSuccess(false);
    setUserType('');
  };

  const handleOpenDashboard = () => {
    navigate('/dashboard');
  };

  if (isSuccess) {
    return (
      <>
        <Helmet>
          <title>Welcome - Vesti Employee Portal</title>
        </Helmet>

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 via-transparent to-pink-500/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

          {/* Back to Home Button */}
          <div className="absolute top-8 left-8 z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Success Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl text-center">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-2xl">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>

                {/* Welcome Message */}
                <h1 className="text-3xl font-bold text-white mb-4">
                  Welcome to Vesti!
                </h1>

                {userType === 'marketing-intern' ? (
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg">
                      🎉 Welcome, Marketing Intern!
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      You now have access to the Vesti employee portal. Here you can:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Access your project dashboard
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        View content creation tools
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Track your social media campaigns
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Connect with the marketing team
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg">
                      🎉 Welcome, Employee!
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      You now have access to the Vesti employee portal and all internal tools.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleOpenDashboard}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                  >
                    Open Dashboard
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full py-3 px-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Employee Portal - Vesti Access</title>
        <meta 
          name="description" 
          content="Enter your access code to sign in to the Vesti employee portal." 
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
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>

        {/* Back to Home Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Employee Portal
              </h1>
              <p className="text-gray-300">
                Enter your access code to continue
              </p>
            </div>

            {/* Access Code Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Access Code Field */}
                <div>
                  <label htmlFor="accessCode" className="block text-sm font-medium text-gray-300 mb-2">
                    Access Code
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Key className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="accessCode"
                      type="text"
                      value={accessCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                        setAccessCode(value);
                        setError('');
                      }}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-center text-2xl font-mono tracking-widest"
                      placeholder="0000"
                      maxLength={4}
                      required
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Enter your 4-digit access code
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm text-center">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || accessCode.length !== 4}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    <span>Access Portal</span>
                  )}
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">Employees</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <Zap className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">Interns</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Need your access code? Contact{' '}
                <a href="mailto:hr@getvesti.com" className="text-purple-300 hover:text-white transition-colors">
                  hr@getvesti.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
 