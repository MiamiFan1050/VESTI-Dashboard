// API Service for handling submissions in a live environment
// This uses a cloud-based solution for cross-device data persistence

import { cloudApiService } from './cloudApiService';

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

export const apiService = {
  // Submit a new weekly package
  async submitWeeklyPackage(submissionData: Omit<SubmissionData, 'id' | 'timestamp'>): Promise<{ success: boolean; id: string }> {
    return await cloudApiService.submitWeeklyPackage(submissionData);
  },

  // Get all submissions (for admin dashboard)
  async getAllSubmissions(): Promise<SubmissionData[]> {
    return await cloudApiService.getAllSubmissions();
  },

  // Get submissions by intern name
  async getSubmissionsByIntern(internName: string): Promise<SubmissionData[]> {
    return await cloudApiService.getSubmissionsByIntern(internName);
  },

  // Get submissions by date range
  async getSubmissionsByDateRange(startDate: Date, endDate: Date): Promise<SubmissionData[]> {
    return await cloudApiService.getSubmissionsByDateRange(startDate, endDate);
  },

  // Get analytics summary
  async getAnalyticsSummary() {
    return await cloudApiService.getAnalyticsSummary();
  },

  // Calculate weekly trends for analytics
  calculateWeeklyTrends(submissions: SubmissionData[]) {
    return cloudApiService.calculateWeeklyTrends(submissions);
  },

  // Export all data
  async exportData(): Promise<string> {
    return await cloudApiService.exportData();
  },

  // Get unique interns list
  async getUniqueInterns(): Promise<string[]> {
    return await cloudApiService.getUniqueInterns();
  },

  // Get all intern profiles with their social media accounts
  async getInternProfiles(): Promise<InternProfile[]> {
    return await cloudApiService.getInternProfiles();
  },

  // Health check
  async healthCheck(): Promise<boolean> {
    return await cloudApiService.healthCheck();
  }
};