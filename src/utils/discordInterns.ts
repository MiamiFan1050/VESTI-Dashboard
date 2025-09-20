// List of all current Discord interns from the VESTI team
// This list can be updated as new interns join or leave

export const DISCORD_INTERNS = [
  'Alejandra H',
  'Anushri Wachche', 
  'arsema',
  'aylin',
  'aylinna',
  'coastal clouds',
  'Dana Bruno',
  'Eli',
  'Ema Lara',
  'Jokerr',
  'Judy',
  'KrishJ12345',
  'Michael',
  'Mrinal',
  'Nina',
  'p.trick',
  'Rachel Cortez',
  'Raymond',
  'Samantha Fang',
  'Shruti',
  'Steve',
  'Tiffany325',
  'Vanetic'
];

// Social media platforms available for selection
export const SOCIAL_PLATFORMS = [
  'Instagram',
  'TikTok', 
  'YouTube',
  'Twitter',
  'LinkedIn',
  'Facebook',
  'Pinterest',
  'Reddit',
  'Discord',
  'Snapchat',
  'Other'
];

// User profile interface for storing intern information
export interface UserProfile {
  name: string;
  discordUsername: string;
  socialAccounts: Array<{
    platform: string;
    username: string;
    followers?: number;
    engagement?: number;
  }>;
  setupCompleted: boolean;
  lastUpdated: number;
}
