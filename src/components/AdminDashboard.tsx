import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Eye, 
  Calendar, 
  Users, 
  TrendingUp, 
  BarChart3,
  Filter,
  Search,
  RefreshCw,
  FileText,
  User,
  MessageSquare,
  Video,
  Heart,
  Share2,
  X,
  Clock,
  Target,
  Award,
  Instagram,
  Hash
} from 'lucide-react';
import { apiService, SubmissionData, InternProfile } from '../utils/apiService';

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<SubmissionData[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<SubmissionData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIntern, setSelectedIntern] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [analytics, setAnalytics] = useState<any>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueInterns, setUniqueInterns] = useState<string[]>([]);
  const [availableWeeks, setAvailableWeeks] = useState<string[]>([]);
  const [internProfiles, setInternProfiles] = useState<InternProfile[]>([]);
  const [activeTab, setActiveTab] = useState<'submissions' | 'profiles'>('submissions');

  useEffect(() => {
    loadSubmissions();
  }, []);

  useEffect(() => {
    filterSubmissions();
  }, [submissions, searchTerm, selectedIntern, selectedWeek]);

  const loadSubmissions = async () => {
    setIsLoading(true);
    try {
      const [allSubmissions, analyticsData, internsList, profiles] = await Promise.all([
        apiService.getAllSubmissions(),
        apiService.getAnalyticsSummary(),
        apiService.getUniqueInterns(),
        apiService.getInternProfiles()
      ]);
      
      setSubmissions(allSubmissions);
      setAnalytics(analyticsData);
      setUniqueInterns(internsList);
      setInternProfiles(profiles);
      
      // Get available weeks
      const weeks = [...new Set(allSubmissions.map(s => s.data.weekOf))].sort().reverse();
      setAvailableWeeks(weeks);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterSubmissions = () => {
    let filtered = submissions;

    if (searchTerm) {
      filtered = filtered.filter(submission =>
        submission.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.data.discordUsername.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.data.additionalNotes.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedIntern) {
      filtered = filtered.filter(submission =>
        submission.data.name === selectedIntern
      );
    }

    if (selectedWeek) {
      filtered = filtered.filter(submission =>
        submission.data.weekOf === selectedWeek
      );
    }

    // Sort by most recent first
    filtered.sort((a, b) => b.timestamp - a.timestamp);
    setFilteredSubmissions(filtered);
  };

  const exportData = async () => {
    try {
      const data = await apiService.exportData();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `vesti-submissions-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl">
          <BarChart3 className="h-6 w-6 text-purple-300" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Admin Dashboard</h3>
          <p className="text-gray-300">View and manage intern submissions</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-white/5 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'submissions'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <FileText className="h-4 w-4" />
              Weekly Submissions
            </div>
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'profiles'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Users className="h-4 w-4" />
              Intern Profiles & Social Media
            </div>
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium">Active Interns</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{analytics.uniqueInterns}</p>
            <p className="text-xs text-blue-300">Marketing team members</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20 hover:border-green-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium">Weekly Reports</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{analytics.totalSubmissions}</p>
            <p className="text-xs text-green-300">Submitted packages</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium">Content Created</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{analytics.totalVideos.toLocaleString()}</p>
            <p className="text-xs text-purple-300">Videos produced</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Eye className="h-5 w-5 text-pink-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium">Total Reach</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{analytics.totalViews.toLocaleString()}</p>
            <p className="text-xs text-pink-300">Views across platforms</p>
          </div>
        </div>
      )}

      {/* Submissions Tab Content */}
      {activeTab === 'submissions' && (
        <>
          {/* Filters and Search */}
          <div className="space-y-4 mb-6">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, Discord username, or notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={loadSubmissions}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 disabled:bg-gray-500/20 text-purple-300 disabled:text-gray-400 rounded-xl transition-all duration-200 border border-purple-500/30 disabled:border-gray-500/30"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Loading...' : 'Refresh'}
            </button>
            
            <button
              onClick={exportData}
              className="inline-flex items-center gap-2 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-xl transition-all duration-200 border border-green-500/30"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-64">
            <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Intern</label>
            <select
              value={selectedIntern}
              onChange={(e) => setSelectedIntern(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>All Interns ({uniqueInterns.length})</option>
              {uniqueInterns.map(intern => (
                <option key={intern} value={intern} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
                  {intern}
                </option>
              ))}
            </select>
          </div>
          
          <div className="sm:w-64">
            <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Week</label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>All Weeks ({availableWeeks.length})</option>
              {availableWeeks.map(week => (
                <option key={week} value={week} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
                  Week of {new Date(week).toLocaleDateString()}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedIntern || selectedWeek || searchTerm) && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedIntern('');
                  setSelectedWeek('');
                  setSearchTerm('');
                }}
                className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-200 border border-red-500/30"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Counter */}
      {!isLoading && filteredSubmissions.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-400">
            Showing {filteredSubmissions.length} of {submissions.length} submissions
            {(selectedIntern || selectedWeek || searchTerm) && (
              <span className="text-purple-400"> (filtered)</span>
            )}
          </p>
        </div>
      )}

      {/* Submissions List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading submissions...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">
              {submissions.length === 0 
                ? "No submissions yet - interns haven't submitted their weekly packages"
                : "No submissions match your current filters"
              }
            </p>
            {(selectedIntern || selectedWeek || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedIntern('');
                  setSelectedWeek('');
                  setSearchTerm('');
                }}
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                Clear filters to see all submissions
              </button>
            )}
          </div>
        ) : (
          filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
              onClick={() => setSelectedSubmission(submission)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-200">
                    <User className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{submission.data.name}</h4>
                    <div className="flex items-center gap-2">
                      <Hash className="h-3 w-3 text-gray-400" />
                      <p className="text-sm text-gray-400">@{submission.data.discordUsername}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                    <Clock className="h-3 w-3" />
                    <span>{new Date(submission.timestamp).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>Week of {new Date(submission.data.weekOf).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <Video className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">{submission.data.videosPosted}</p>
                  <p className="text-xs text-gray-400">Videos Posted</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <Eye className="h-5 w-5 text-green-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">{submission.data.totalViews.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Total Views</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <Heart className="h-5 w-5 text-red-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">{submission.data.weeklyInteractions.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Interactions</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <Instagram className="h-5 w-5 text-pink-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">{submission.data.socialAccounts.length}</p>
                  <p className="text-xs text-gray-400">Social Accounts</p>
                </div>
              </div>

              {/* Most Successful Video Preview */}
              {submission.data.mostSuccessfulVideo.title && (
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-300">Most Successful Video</span>
                  </div>
                  <p className="text-white font-medium text-sm truncate">{submission.data.mostSuccessfulVideo.title}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-400">{submission.data.mostSuccessfulVideo.platform}</span>
                    <span className="text-xs text-gray-400">{submission.data.mostSuccessfulVideo.views.toLocaleString()} views</span>
                  </div>
                </div>
              )}

              {/* Click hint */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">Click to view full details</p>
              </div>
            </div>
          ))
        )}
          </div>
        </>
      )}

      {/* Profiles Tab Content */}
      {activeTab === 'profiles' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Intern Profiles & Social Media</h3>
              <p className="text-gray-300">View all registered interns and their social media accounts</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Total Registered Interns</p>
              <p className="text-2xl font-bold text-purple-400">{internProfiles.length}</p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-3">
                <RefreshCw className="h-5 w-5 text-purple-400 animate-spin" />
                <span className="text-gray-300">Loading intern profiles...</span>
              </div>
            </div>
          ) : internProfiles.length === 0 ? (
            <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">No intern profiles found</p>
              <p className="text-gray-500 text-sm">Interns need to complete their profile setup first</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internProfiles.map((profile, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
                  {/* Intern Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <User className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{profile.name}</h4>
                      <div className="flex items-center gap-1">
                        <Hash className="h-3 w-3 text-purple-400" />
                        <span className="text-sm text-purple-300">@{profile.discordUsername}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      profile.setupCompleted 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {profile.setupCompleted ? 'Complete' : 'Incomplete'}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-gray-400">Submissions</p>
                      <p className="text-lg font-bold text-white">{profile.totalSubmissions}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-gray-400">Social Accounts</p>
                      <p className="text-lg font-bold text-white">{profile.socialAccounts.length}</p>
                    </div>
                  </div>

                  {/* Social Media Accounts */}
                  {profile.socialAccounts.length > 0 ? (
                    <div className="space-y-3">
                      <h5 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        Social Media Accounts
                      </h5>
                      <div className="space-y-2">
                        {profile.socialAccounts.map((account, accountIndex) => (
                          <div key={accountIndex} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-white">{account.platform}</span>
                              {account.followers && (
                                <span className="text-xs text-gray-400">{account.followers.toLocaleString()} followers</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-300">@{account.username}</p>
                            {account.engagement && (
                              <div className="mt-1">
                                <span className="text-xs text-purple-400">{account.engagement}% engagement</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 bg-white/5 rounded-lg border border-white/10">
                      <Instagram className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-400">No social accounts added</p>
                    </div>
                  )}

                  {/* Last Submission */}
                  {profile.lastSubmissionDate && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>Last submission: {new Date(profile.lastSubmissionDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Submission Details</h3>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="text-white font-medium">{selectedSubmission.data.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Discord Username</p>
                    <p className="text-white font-medium">@{selectedSubmission.data.discordUsername}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Week Of</p>
                    <p className="text-white font-medium">{new Date(selectedSubmission.data.weekOf).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Submitted</p>
                    <p className="text-white font-medium">{new Date(selectedSubmission.timestamp).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Social Accounts */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Social Media Accounts</h4>
                <div className="space-y-3">
                  {selectedSubmission.data.socialAccounts.map((account, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <span className="text-white font-medium">{account.platform}</span>
                      <span className="text-gray-300">@{account.username}</span>
                      {account.followers && (
                        <span className="text-sm text-gray-400">({account.followers.toLocaleString()} followers)</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{selectedSubmission.data.videosPosted}</p>
                    <p className="text-gray-400">Videos Posted</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{selectedSubmission.data.totalViews.toLocaleString()}</p>
                    <p className="text-gray-400">Total Views</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{selectedSubmission.data.weeklyInteractions.toLocaleString()}</p>
                    <p className="text-gray-400">Weekly Interactions</p>
                  </div>
                </div>
              </div>

              {/* Most Successful Video */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Most Successful Video</h4>
                <div className="space-y-3">
                  <p className="text-white font-medium">{selectedSubmission.data.mostSuccessfulVideo.title}</p>
                  <p className="text-gray-300">Platform: {selectedSubmission.data.mostSuccessfulVideo.platform}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{selectedSubmission.data.mostSuccessfulVideo.views.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{selectedSubmission.data.mostSuccessfulVideo.likes.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{selectedSubmission.data.mostSuccessfulVideo.comments.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Comments</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{selectedSubmission.data.mostSuccessfulVideo.shares.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Shares</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {selectedSubmission.data.additionalNotes && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Additional Notes</h4>
                  <p className="text-gray-300 whitespace-pre-wrap">{selectedSubmission.data.additionalNotes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
