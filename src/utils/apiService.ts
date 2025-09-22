// API Service for handling submissions in a live environment
// This simulates a real backend API that would be used in production

        export interface SubmissionData {
          id: string;
          timestamp: number;
          data: {
            name: string;
            discordUsername: string;
            socialAccounts: Array<{
              platform: string;
              username: string;
              followers?: number;
              engagement?: number;
            }>;
            videosPosted: number;
            totalViews: number;
            mostSuccessfulVideo: {
              title: string;
              platform: string;
              views: number;
              likes: number;
              comments: number;
              shares: number;
            };
            weeklyInteractions: number;
            additionalNotes: string;
            weekOf: string;
          };
        }

        // Interface for intern profiles with social media accounts
        export interface InternProfile {
          name: string;
          discordUsername: string;
          socialAccounts: Array<{
            platform: string;
            username: string;
            followers?: number;
            engagement?: number;
          }>;
          totalSubmissions: number;
          lastSubmissionDate?: string;
          setupCompleted: boolean;
        }

// In-memory storage for demo purposes
// In production, this would be replaced with actual API calls to your backend
let submissionsStorage: SubmissionData[] = [];

export const apiService = {
  // Submit a new weekly package
  async submitWeeklyPackage(submissionData: Omit<SubmissionData, 'id' | 'timestamp'>): Promise<{ success: boolean; id: string }> {
    try {
      const id = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const submission: SubmissionData = {
        id,
        timestamp: Date.now(),
        data: submissionData.data
      };

      // Add to storage
      submissionsStorage.push(submission);

      // In production, this would be:
      // const response = await fetch('/api/submissions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submission)
      // });
      // return await response.json();

      console.log(`Submission saved with ID: ${id}`);
      return { success: true, id };
    } catch (error) {
      console.error('Error submitting weekly package:', error);
      return { success: false, id: '' };
    }
  },

  // Get all submissions (for admin dashboard)
  async getAllSubmissions(): Promise<SubmissionData[]> {
    try {
      // In production, this would be:
      // const response = await fetch('/api/submissions');
      // return await response.json();

      // Sort by most recent first
      return [...submissionsStorage].sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }
  },

  // Get submissions by intern name
  async getSubmissionsByIntern(internName: string): Promise<SubmissionData[]> {
    try {
      const allSubmissions = await this.getAllSubmissions();
      return allSubmissions.filter(submission => 
        submission.data.name.toLowerCase().includes(internName.toLowerCase())
      );
    } catch (error) {
      console.error('Error fetching submissions by intern:', error);
      return [];
    }
  },

  // Get submissions by date range
  async getSubmissionsByDateRange(startDate: Date, endDate: Date): Promise<SubmissionData[]> {
    try {
      const allSubmissions = await this.getAllSubmissions();
      return allSubmissions.filter(submission => {
        const submissionDate = new Date(submission.data.weekOf);
        return submissionDate >= startDate && submissionDate <= endDate;
      });
    } catch (error) {
      console.error('Error fetching submissions by date range:', error);
      return [];
    }
  },

  // Get analytics summary
  async getAnalyticsSummary() {
    try {
      const allSubmissions = await this.getAllSubmissions();
      
      if (allSubmissions.length === 0) {
        return {
          totalSubmissions: 0,
          uniqueInterns: 0,
          totalVideos: 0,
          totalViews: 0,
          totalInteractions: 0,
          averageVideosPerIntern: 0,
          averageViewsPerIntern: 0,
          averageInteractionsPerIntern: 0,
          weeklyTrends: []
        };
      }

      const uniqueInterns = new Set(allSubmissions.map(s => s.data.name));
      const totalVideos = allSubmissions.reduce((sum, s) => sum + s.data.videosPosted, 0);
      const totalViews = allSubmissions.reduce((sum, s) => sum + s.data.totalViews, 0);
      const totalInteractions = allSubmissions.reduce((sum, s) => sum + s.data.weeklyInteractions, 0);

      // Calculate weekly trends
      const weeklyTrends = this.calculateWeeklyTrends(allSubmissions);

      return {
        totalSubmissions: allSubmissions.length,
        uniqueInterns: uniqueInterns.size,
        totalVideos,
        totalViews,
        totalInteractions,
        averageVideosPerIntern: totalVideos / uniqueInterns.size,
        averageViewsPerIntern: totalViews / uniqueInterns.size,
        averageInteractionsPerIntern: totalInteractions / uniqueInterns.size,
        weeklyTrends
      };
    } catch (error) {
      console.error('Error calculating analytics:', error);
      return {
        totalSubmissions: 0,
        uniqueInterns: 0,
        totalVideos: 0,
        totalViews: 0,
        totalInteractions: 0,
        averageVideosPerIntern: 0,
        averageViewsPerIntern: 0,
        averageInteractionsPerIntern: 0,
        weeklyTrends: []
      };
    }
  },

  // Calculate weekly trends for analytics
  calculateWeeklyTrends(submissions: SubmissionData[]) {
    const weeklyData: { [key: string]: { videos: number; views: number; interactions: number; count: number } } = {};

    submissions.forEach(submission => {
      const weekKey = submission.data.weekOf;
      if (!weeklyData[weekKey]) {
        weeklyData[weekKey] = { videos: 0, views: 0, interactions: 0, count: 0 };
      }
      weeklyData[weekKey].videos += submission.data.videosPosted;
      weeklyData[weekKey].views += submission.data.totalViews;
      weeklyData[weekKey].interactions += submission.data.weeklyInteractions;
      weeklyData[weekKey].count += 1;
    });

    return Object.entries(weeklyData)
      .map(([week, data]) => ({
        week,
        videos: data.videos,
        views: data.views,
        interactions: data.interactions,
        submissions: data.count
      }))
      .sort((a, b) => new Date(a.week).getTime() - new Date(b.week).getTime());
  },

  // Export all data
  async exportData(): Promise<string> {
    try {
      const allSubmissions = await this.getAllSubmissions();
      return JSON.stringify(allSubmissions, null, 2);
    } catch (error) {
      console.error('Error exporting data:', error);
      return '[]';
    }
  },

  // Get unique interns list
  async getUniqueInterns(): Promise<string[]> {
    try {
      const allSubmissions = await this.getAllSubmissions();
      const uniqueInterns = [...new Set(allSubmissions.map(s => s.data.name))];
      return uniqueInterns.sort();
    } catch (error) {
      console.error('Error fetching unique interns:', error);
      return [];
    }
  },

  // Get all intern profiles with their social media accounts
  async getInternProfiles(): Promise<InternProfile[]> {
    try {
      const profiles: InternProfile[] = [];
      
      // Get user profiles from localStorage
      const profileKeys = Object.keys(localStorage).filter(key => key.startsWith('vesti_user_profile'));
      
      profileKeys.forEach(key => {
        try {
          const profileData = JSON.parse(localStorage.getItem(key) || '{}');
          if (profileData.name && profileData.discordUsername) {
            // Count submissions for this intern
            const internSubmissions = submissionsStorage.filter(s => 
              s.data.discordUsername === profileData.discordUsername
            );
            
            profiles.push({
              name: profileData.name,
              discordUsername: profileData.discordUsername,
              socialAccounts: profileData.socialAccounts || [],
              totalSubmissions: internSubmissions.length,
              lastSubmissionDate: internSubmissions.length > 0 
                ? new Date(Math.max(...internSubmissions.map(s => s.timestamp))).toISOString().split('T')[0]
                : undefined,
              setupCompleted: profileData.setupCompleted || false
            });
          }
        } catch (error) {
          console.error('Error parsing profile:', error);
        }
      });

      // Sort by Discord username
      profiles.sort((a, b) => a.discordUsername.localeCompare(b.discordUsername));
      
      return profiles;
    } catch (error) {
      console.error('Error fetching intern profiles:', error);
      return [];
    }
  }
};

// Production API endpoints (commented out - would be used in real deployment)
/*
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-api-domain.com/api';

export const productionApiService = {
  async submitWeeklyPackage(submissionData: Omit<SubmissionData, 'id' | 'timestamp'>) {
    const response = await fetch(`${API_BASE_URL}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify(submissionData)
    });
    return await response.json();
  },

  async getAllSubmissions() {
    const response = await fetch(`${API_BASE_URL}/submissions`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    return await response.json();
  },

  async getSubmissionsByIntern(internName: string) {
    const response = await fetch(`${API_BASE_URL}/submissions?intern=${encodeURIComponent(internName)}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    return await response.json();
  }
};
*/
