import React, { useState } from 'react';
import { 
  Instagram, 
  Plus, 
  X, 
  Save, 
  CheckCircle,
  Users,
  Hash,
  Eye,
  TrendingUp
} from 'lucide-react';
import { userProfileService } from '../utils/userProfileService';
import { SOCIAL_PLATFORMS } from '../utils/discordInterns';

interface SocialMediaSetupProps {
  onComplete: () => void;
}

interface SocialAccount {
  platform: string;
  username: string;
  followers?: number;
  engagement?: number;
}

export function SocialMediaSetup({ onComplete }: SocialMediaSetupProps) {
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addSocialAccount = () => {
    setSocialAccounts(prev => [...prev, { platform: '', username: '' }]);
  };

  const updateSocialAccount = (index: number, field: keyof SocialAccount, value: string | number) => {
    setSocialAccounts(prev => 
      prev.map((account, i) => 
        i === index ? { ...account, [field]: value } : account
      )
    );
  };

  const removeSocialAccount = (index: number) => {
    setSocialAccounts(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save all social accounts to user profile
      userProfileService.updateSocialAccounts(socialAccounts);
      userProfileService.completeSetup();
      
      setIsSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    } catch (error) {
      console.error('Error saving social accounts:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const skipSetup = () => {
    userProfileService.completeSetup();
    onComplete();
  };

  if (isSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Setup Complete!</h3>
          <p className="text-gray-300 mb-6">
            Your social media accounts have been saved. They will be pre-filled in future weekly reports.
          </p>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <p className="text-green-300 text-sm">
              Redirecting to your personalized dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl">
          <Instagram className="h-6 w-6 text-purple-300" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Add Your Social Media Accounts</h3>
          <p className="text-gray-300">These will be pre-filled in your weekly reports</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Social Media Accounts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-300" />
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

          {socialAccounts.length === 0 ? (
            <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
              <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">No social media accounts added yet</p>
              <button
                type="button"
                onClick={addSocialAccount}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-xl transition-all duration-200 border border-purple-500/30"
              >
                <Plus className="h-4 w-4" />
                Add Your First Account
              </button>
            </div>
          ) : (
            socialAccounts.map((account, index) => (
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
                      {SOCIAL_PLATFORMS.map(platform => (
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
            ))
          )}
        </div>

        {/* Benefits Info */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <h4 className="text-blue-300 font-medium mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Why add your social media accounts?
          </h4>
          <ul className="text-blue-200 text-sm space-y-1">
            <li>• Your accounts will be pre-filled in weekly reports</li>
            <li>• Track your follower growth over time</li>
            <li>• Save time on future submissions</li>
            <li>• Better analytics and reporting</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-semibold transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Accounts
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={skipSetup}
            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            Skip for Now
          </button>
        </div>
      </form>
    </div>
  );
}
