// Cloud-based API Service using JSONBin.io for data storage
// This provides a simple, free cloud database solution

const JSONBIN_API_KEY = '$2a$10$lMoxP/yCSew29TJtZylUH.m0RHvUtIMxmPlyG44KCwIGaIvC4v5P6';
const JSONBIN_BIN_ID = '68d0b721d0ea881f4085e729';

const API_BASE_URL = 'https://api.jsonbin.io/v3/b';

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

// Fallback to localStorage if cloud service is not configured
const useCloudStorage = JSONBIN_API_KEY && JSONBIN_BIN_ID && JSONBIN_API_KEY !== 'your-jsonbin-api-key';

export const cloudApiService = {
  // Submit a new weekly package
  async submitWeeklyPackage(submissionData: Omit<SubmissionData, 'id' | 'timestamp'>): Promise<{ success: boolean; id: string }> {
    try {
      const id = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const submission: SubmissionData = {
        id,
        timestamp: Date.now(),
        data: submissionData.data
      };

      if (useCloudStorage) {
        // Get existing submissions
        const existingSubmissions = await this.getAllSubmissions();
        
        // Add new submission
        const updatedSubmissions = [...existingSubmissions, submission];
        
        // Save to cloud - use the same structure as the bin
        const response = await fetch(`${API_BASE_URL}/${JSONBIN_BIN_ID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': JSONBIN_API_KEY
          },
          body: JSON.stringify({ submissions: updatedSubmissions })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        // Fallback to localStorage
        const existingSubmissions = this.getLocalSubmissions();
        const updatedSubmissions = [...existingSubmissions, submission];
        localStorage.setItem('vesti_cloud_submissions', JSON.stringify(updatedSubmissions));
      }

      console.log(`Submission saved with ID: ${id}`);
      return { success: true, id };
    } catch (error) {
      console.error('Error submitting weekly package:', error);
      return { success: false, id: '' };
    }
  },

  // Get all submissions
  async getAllSubmissions(): Promise<SubmissionData[]> {
    try {
      if (useCloudStorage) {
        const response = await fetch(`${API_BASE_URL}/${JSONBIN_BIN_ID}/latest`, {
          headers: {
            'X-Master-Key': JSONBIN_API_KEY
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // Handle both array format and nested object format
        if (Array.isArray(result.record)) {
          return result.record;
        } else if (result.record && Array.isArray(result.record.submissions)) {
          return result.record.submissions;
        } else {
          return [];
        }
      } else {
        // Fallback to localStorage
        return this.getLocalSubmissions();
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return this.getLocalSubmissions(); // Fallback to localStorage
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
      const allSubmissions = await this.getAllSubmissions();
      const profiles: InternProfile[] = [];
      
      // Group submissions by intern
      const internMap = new Map<string, SubmissionData[]>();
      allSubmissions.forEach(submission => {
        const name = submission.data.name;
        if (!internMap.has(name)) {
          internMap.set(name, []);
        }
        internMap.get(name)!.push(submission);
      });

      // Create profiles
      internMap.forEach((submissions, name) => {
        const latestSubmission = submissions.sort((a, b) => b.timestamp - a.timestamp)[0];
        profiles.push({
          name,
          discordUsername: latestSubmission.data.discordUsername,
          socialAccounts: latestSubmission.data.socialAccounts,
          totalSubmissions: submissions.length,
          lastSubmissionDate: new Date(latestSubmission.timestamp).toISOString().split('T')[0],
          setupCompleted: true
        });
      });

      return profiles.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error('Error fetching intern profiles:', error);
      return [];
    }
  },

  // Helper method to get local submissions
  getLocalSubmissions(): SubmissionData[] {
    try {
      const stored = localStorage.getItem('vesti_cloud_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error retrieving local submissions:', error);
      return [];
    }
  },

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      if (useCloudStorage) {
        const response = await fetch(`${API_BASE_URL}/${JSONBIN_BIN_ID}/latest`, {
          headers: {
            'X-Master-Key': JSONBIN_API_KEY
          }
        });
        return response.ok;
      } else {
        return true; // localStorage is always available
      }
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
};
