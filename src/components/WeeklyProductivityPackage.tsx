import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Instagram, 
  MessageSquare, 
  Hash, 
  Eye, 
  Heart, 
  Share2, 
  Video, 
  TrendingUp, 
  Send, 
  CheckCircle,
  Plus,
  X,
  Award,
  Target,
  BarChart3,
  Clock
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { apiService } from '../utils/apiService';
import { userProfileService } from '../utils/userProfileService';
import { DISCORD_INTERNS } from '../utils/discordInterns';

interface SocialAccount {
  platform: string;
  username: string;
  followers?: number;
  engagement?: number;
}

interface VideoData {
  title: string;
  platform: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

interface WeeklySubmission {
  name: string;
  discordUsername: string;
  socialAccounts: SocialAccount[];
  videosPosted: number;
  totalViews: number;
  mostSuccessfulVideo: VideoData;
  weeklyInteractions: number;
  additionalNotes: string;
  weekOf: string;
}

export function WeeklyProductivityPackage() {
  const userProfile = userProfileService.getCurrentProfile();
  
  const [submission, setSubmission] = useState<WeeklySubmission>({
    name: userProfile?.name || '',
    discordUsername: userProfile?.discordUsername || '',
    socialAccounts: userProfile?.socialAccounts || [],
    videosPosted: 0,
    totalViews: 0,
    mostSuccessfulVideo: {
      title: '',
      platform: '',
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0
    },
    weeklyInteractions: 0,
    additionalNotes: '',
    weekOf: new Date().toISOString().split('T')[0]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [discordSuggestions, setDiscordSuggestions] = useState<string[]>([]);
  const [showDiscordSuggestions, setShowDiscordSuggestions] = useState(false);

  const socialPlatforms = [
    'Instagram', 'TikTok', 'YouTube', 'Twitter', 'Facebook', 'LinkedIn', 'Reddit', 'Other'
  ];

  const handleDiscordInputChange = (value: string) => {
    setSubmission(prev => ({ ...prev, discordUsername: value }));
    if (value.length > 0) {
      const suggestions = userProfileService.getDiscordSuggestions(value);
      setDiscordSuggestions(suggestions);
      setShowDiscordSuggestions(true);
    } else {
      setShowDiscordSuggestions(false);
    }
  };

  const handleDiscordSuggestionClick = (suggestion: string) => {
    setSubmission(prev => ({ ...prev, discordUsername: suggestion }));
    setShowDiscordSuggestions(false);
  };

  const addSocialAccount = () => {
    setSubmission(prev => ({
      ...prev,
      socialAccounts: [...prev.socialAccounts, { platform: '', username: '' }]
    }));
  };

  const updateSocialAccount = (index: number, field: keyof SocialAccount, value: string | number) => {
    setSubmission(prev => ({
      ...prev,
      socialAccounts: prev.socialAccounts.map((account, i) => 
        i === index ? { ...account, [field]: value } : account
      )
    }));
  };

  const removeSocialAccount = (index: number) => {
    setSubmission(prev => ({
      ...prev,
      socialAccounts: prev.socialAccounts.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to API service (works in live environment)
      const result = await apiService.submitWeeklyPackage({
        data: {
          name: submission.name,
          discordUsername: submission.discordUsername,
          socialAccounts: submission.socialAccounts,
          videosPosted: submission.videosPosted,
          totalViews: submission.totalViews,
          mostSuccessfulVideo: submission.mostSuccessfulVideo,
          weeklyInteractions: submission.weeklyInteractions,
          additionalNotes: submission.additionalNotes,
          weekOf: submission.weekOf
        }
      });

      if (!result.success) {
        throw new Error('Failed to save submission');
      }

      console.log(`Submission saved with ID: ${result.id}`);

      // Prepare the email data
      const emailData = {
        to_email: 'vesti.ext@gmail.com',
        intern_name: submission.name,
        discord_username: submission.discordUsername,
        week_of: submission.weekOf,
        social_accounts: submission.socialAccounts.map(account => 
          `${account.platform}: ${account.username}${account.followers ? ` (${account.followers} followers)` : ''}${account.engagement ? ` (${account.engagement}% engagement)` : ''}`
        ).join('\n'),
        videos_posted: submission.videosPosted,
        total_views: submission.totalViews.toLocaleString(),
        most_successful_video: `${submission.mostSuccessfulVideo.title} on ${submission.mostSuccessfulVideo.platform} - ${submission.mostSuccessfulVideo.views.toLocaleString()} views, ${submission.mostSuccessfulVideo.likes} likes, ${submission.mostSuccessfulVideo.comments} comments, ${submission.mostSuccessfulVideo.shares} shares`,
        weekly_interactions: submission.weeklyInteractions.toLocaleString(),
        additional_notes: submission.additionalNotes || 'None',
        submission_date: new Date().toLocaleString()
      };

      // Try to send email using EmailJS, but don't fail the whole submission if email fails
      try {
        await emailjs.send(
          'service_7g7d7m9', // Your EmailJS service ID
          'template_weekly_productivity', // We'll need to create this template
          emailData,
          'uUxCq93I6S-H6COPh' // Your EmailJS public key
        );
        console.log('Email sent successfully');
      } catch (emailError) {
        console.warn('Email sending failed, but submission was saved locally:', emailError);
        // Don't throw the error - just log it since the data is saved locally
      }

      setIsSuccess(true);
      setIsSubmitting(false);

      // Don't auto-reset the form - let user manually clear it if they want to submit another

    } catch (error) {
      console.error('Error submitting weekly package:', error);
      setError('Failed to submit your weekly package. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Weekly Package Submitted!</h3>
          <p className="text-gray-300 mb-6">
            Thank you! Your weekly productivity package has been successfully submitted to the team.
          </p>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-green-400" />
              <p className="text-green-300 font-medium">Week of {new Date(submission.weekOf).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-400" />
              <p className="text-green-300 text-sm">Submitted on {new Date().toLocaleDateString()}</p>
            </div>
            <p className="text-green-300 text-sm">
              Your submission has been saved and is now available for team review.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Submit Another Report
            </button>
            
            <button
              onClick={() => {
                // Reset form and go back
                setSubmission({
                  name: '',
                  discordUsername: '',
                  socialAccounts: [],
                  videosPosted: 0,
                  totalViews: 0,
                  mostSuccessfulVideo: {
                    title: '',
                    platform: '',
                    views: 0,
                    likes: 0,
                    comments: 0,
                    shares: 0
                  },
                  weeklyInteractions: 0,
                  additionalNotes: '',
                  weekOf: new Date().toISOString().split('T')[0]
                });
                setIsSuccess(false);
              }}
              className="w-full py-3 px-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Done - Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl">
          <Calendar className="h-6 w-6 text-purple-300" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Weekly Productivity Package</h3>
          <p className="text-gray-300">Submit your weekly marketing performance and analytics</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <User className="h-5 w-5 text-purple-300" />
            Basic Information
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={submission.name}
                onChange={(e) => setSubmission(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Discord Username *
              </label>
              <input
                type="text"
                value={submission.discordUsername}
                onChange={(e) => handleDiscordInputChange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                placeholder="Start typing your Discord name..."
                required
              />
              
              {/* Discord Suggestions Dropdown */}
              {showDiscordSuggestions && discordSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl max-h-48 overflow-y-auto z-50">
                  {discordSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDiscordSuggestionClick(suggestion)}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Week Of *
            </label>
            <input
              type="date"
              value={submission.weekOf}
              onChange={(e) => setSubmission(prev => ({ ...prev, weekOf: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
              required
            />
          </div>
        </div>

        {/* Social Media Accounts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Instagram className="h-5 w-5 text-purple-300" />
              Social Media Accounts
            </h4>
            <button
              type="button"
              onClick={addSocialAccount}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-xl transition-all duration-200 border border-purple-500/30"
            >
              <Plus className="h-4 w-4" />
              Add Account
            </button>
          </div>

          {submission.socialAccounts.map((account, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-300">Account {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeSocialAccount(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Platform
                  </label>
                  <select
                    value={account.platform}
                    onChange={(e) => updateSocialAccount(index, 'platform', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                  >
                    <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>Select Platform</option>
                    {socialPlatforms.map(platform => (
                      <option key={platform} value={platform} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>{platform}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={account.username}
                    onChange={(e) => updateSocialAccount(index, 'username', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="@username"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Followers (Optional)
                  </label>
                  <input
                    type="number"
                    value={account.followers || ''}
                    onChange={(e) => updateSocialAccount(index, 'followers', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter followers count"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Performance */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Video className="h-5 w-5 text-purple-300" />
            Content Performance
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Videos Posted This Week *
              </label>
                <input
                  type="number"
                  value={submission.videosPosted || ''}
                  onChange={(e) => setSubmission(prev => ({ ...prev, videosPosted: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter number of videos"
                  required
                  min="0"
                />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Total Views This Week *
              </label>
              <input
                type="number"
                value={submission.totalViews || ''}
                onChange={(e) => setSubmission(prev => ({ ...prev, totalViews: parseInt(e.target.value) || 0 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                placeholder="Enter total views"
                required
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Weekly Interactions (Likes + Comments + Shares) *
            </label>
            <input
              type="number"
              value={submission.weeklyInteractions || ''}
              onChange={(e) => setSubmission(prev => ({ ...prev, weeklyInteractions: parseInt(e.target.value) || 0 }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
              placeholder="Enter total interactions"
              required
              min="0"
            />
          </div>
        </div>

        {/* Most Successful Video */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-300" />
            Most Successful Video This Week
          </h4>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  value={submission.mostSuccessfulVideo.title}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, title: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter video title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Platform
                </label>
                <select
                  value={submission.mostSuccessfulVideo.platform}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, platform: e.target.value }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                >
                  <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>Select Platform</option>
                  {socialPlatforms.map(platform => (
                    <option key={platform} value={platform} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>{platform}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Views
                </label>
                <input
                  type="number"
                  value={submission.mostSuccessfulVideo.views || ''}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, views: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter views"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Likes
                </label>
                <input
                  type="number"
                  value={submission.mostSuccessfulVideo.likes || ''}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, likes: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter likes"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Comments
                </label>
                <input
                  type="number"
                  value={submission.mostSuccessfulVideo.comments || ''}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, comments: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter comments"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Shares
                </label>
                <input
                  type="number"
                  value={submission.mostSuccessfulVideo.shares || ''}
                  onChange={(e) => setSubmission(prev => ({
                    ...prev,
                    mostSuccessfulVideo: { ...prev.mostSuccessfulVideo, shares: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200"
                  placeholder="Enter shares"
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-300" />
            Additional Notes
          </h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Any additional insights, challenges, or achievements this week?
            </label>
            <textarea
              value={submission.additionalNotes}
              onChange={(e) => setSubmission(prev => ({ ...prev, additionalNotes: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-200 resize-none"
              placeholder="Share any insights about what worked well, challenges faced, or goals for next week..."
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl disabled:transform-none disabled:shadow-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Submit Weekly Package
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
