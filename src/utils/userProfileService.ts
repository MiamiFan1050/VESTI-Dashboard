// User Profile Service for managing intern profiles and social media accounts
import { UserProfile, DISCORD_INTERNS } from './discordInterns';

const PROFILE_STORAGE_KEY = 'vesti_user_profile';

export const userProfileService = {
  // Get current user profile
  getCurrentProfile(): UserProfile | null {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error retrieving user profile:', error);
      return null;
    }
  },

  // Save user profile
  saveProfile(profile: UserProfile): boolean {
    try {
      const updatedProfile = {
        ...profile,
        lastUpdated: Date.now()
      };
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedProfile));
      return true;
    } catch (error) {
      console.error('Error saving user profile:', error);
      return false;
    }
  },

  // Create initial profile
  createProfile(name: string, discordUsername: string): UserProfile {
    return {
      name,
      discordUsername,
      socialAccounts: [],
      setupCompleted: false,
      lastUpdated: Date.now()
    };
  },

  // Add social media account
  addSocialAccount(platform: string, username: string, followers?: number, engagement?: number): boolean {
    const profile = this.getCurrentProfile();
    if (!profile) return false;

    // Check if account already exists for this platform
    const existingIndex = profile.socialAccounts.findIndex(account => account.platform === platform);
    
    if (existingIndex >= 0) {
      // Update existing account
      profile.socialAccounts[existingIndex] = { platform, username, followers, engagement };
    } else {
      // Add new account
      profile.socialAccounts.push({ platform, username, followers, engagement });
    }

    return this.saveProfile(profile);
  },

  // Remove social media account
  removeSocialAccount(platform: string): boolean {
    const profile = this.getCurrentProfile();
    if (!profile) return false;

    profile.socialAccounts = profile.socialAccounts.filter(account => account.platform !== platform);
    return this.saveProfile(profile);
  },

  // Update social media accounts
  updateSocialAccounts(socialAccounts: UserProfile['socialAccounts']): boolean {
    const profile = this.getCurrentProfile();
    if (!profile) return false;

    profile.socialAccounts = socialAccounts;
    return this.saveProfile(profile);
  },

  // Mark setup as completed
  completeSetup(): boolean {
    const profile = this.getCurrentProfile();
    if (!profile) return false;

    profile.setupCompleted = true;
    return this.saveProfile(profile);
  },

  // Clear profile (for testing or logout)
  clearProfile(): void {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  },

  // Check if user has completed setup
  isSetupCompleted(): boolean {
    const profile = this.getCurrentProfile();
    return profile?.setupCompleted || false;
  },

  // Get Discord username suggestions (fuzzy search)
  getDiscordSuggestions(query: string): string[] {
    if (!query.trim()) return DISCORD_INTERNS.slice(0, 10); // Show first 10 if no query
    
    const lowerQuery = query.toLowerCase();
    return DISCORD_INTERNS
      .filter(name => name.toLowerCase().includes(lowerQuery))
      .slice(0, 10); // Limit to 10 suggestions
  },

  // Validate Discord username
  isValidDiscordUser(username: string): boolean {
    return DISCORD_INTERNS.includes(username);
  }
};
