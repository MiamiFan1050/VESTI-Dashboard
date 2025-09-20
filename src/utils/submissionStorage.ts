// Local storage utility for weekly productivity package submissions
// This provides a simple way to store and retrieve submissions until a proper database is set up

export interface StoredSubmission {
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

const STORAGE_KEY = 'vesti_weekly_submissions';

export const submissionStorage = {
  // Save a new submission
  saveSubmission: (submissionData: Omit<StoredSubmission, 'id' | 'timestamp'>): string => {
    const id = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const submission: StoredSubmission = {
      id,
      timestamp: Date.now(),
      data: submissionData.data
    };

    try {
      const existingSubmissions = submissionStorage.getAllSubmissions();
      const updatedSubmissions = [...existingSubmissions, submission];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
      return id;
    } catch (error) {
      console.error('Error saving submission to localStorage:', error);
      throw new Error('Failed to save submission');
    }
  },

  // Get all submissions
  getAllSubmissions: (): StoredSubmission[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error retrieving submissions from localStorage:', error);
      return [];
    }
  },

  // Get submissions by intern name
  getSubmissionsByIntern: (internName: string): StoredSubmission[] => {
    const allSubmissions = submissionStorage.getAllSubmissions();
    return allSubmissions.filter(submission => 
      submission.data.name.toLowerCase().includes(internName.toLowerCase())
    );
  },

  // Get submissions by date range
  getSubmissionsByDateRange: (startDate: Date, endDate: Date): StoredSubmission[] => {
    const allSubmissions = submissionStorage.getAllSubmissions();
    return allSubmissions.filter(submission => {
      const submissionDate = new Date(submission.data.weekOf);
      return submissionDate >= startDate && submissionDate <= endDate;
    });
  },

  // Get the latest submission for an intern
  getLatestSubmissionByIntern: (internName: string): StoredSubmission | null => {
    const internSubmissions = submissionStorage.getSubmissionsByIntern(internName);
    return internSubmissions.length > 0 
      ? internSubmissions.sort((a, b) => b.timestamp - a.timestamp)[0]
      : null;
  },

  // Get analytics summary
  getAnalyticsSummary: () => {
    const allSubmissions = submissionStorage.getAllSubmissions();
    
    if (allSubmissions.length === 0) {
      return {
        totalSubmissions: 0,
        uniqueInterns: 0,
        totalVideos: 0,
        totalViews: 0,
        totalInteractions: 0,
        averageVideosPerIntern: 0,
        averageViewsPerIntern: 0,
        averageInteractionsPerIntern: 0
      };
    }

    const uniqueInterns = new Set(allSubmissions.map(s => s.data.name));
    const totalVideos = allSubmissions.reduce((sum, s) => sum + s.data.videosPosted, 0);
    const totalViews = allSubmissions.reduce((sum, s) => sum + s.data.totalViews, 0);
    const totalInteractions = allSubmissions.reduce((sum, s) => sum + s.data.weeklyInteractions, 0);

    return {
      totalSubmissions: allSubmissions.length,
      uniqueInterns: uniqueInterns.size,
      totalVideos,
      totalViews,
      totalInteractions,
      averageVideosPerIntern: totalVideos / uniqueInterns.size,
      averageViewsPerIntern: totalViews / uniqueInterns.size,
      averageInteractionsPerIntern: totalInteractions / uniqueInterns.size
    };
  },

  // Export all data as JSON
  exportData: (): string => {
    const allSubmissions = submissionStorage.getAllSubmissions();
    return JSON.stringify(allSubmissions, null, 2);
  },

  // Import data from JSON
  importData: (jsonData: string): boolean => {
    try {
      const submissions = JSON.parse(jsonData);
      if (Array.isArray(submissions)) {
        localStorage.setItem(STORAGE_KEY, jsonData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  },

  // Clear all submissions (use with caution)
  clearAllSubmissions: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  }
};

// Utility functions for formatting data
export const formatSubmissionForEmail = (submission: StoredSubmission): string => {
  const { data } = submission;
  
  let emailContent = `Weekly Productivity Package Submission\n\n`;
  emailContent += `Intern: ${data.name}\n`;
  emailContent += `Discord: ${data.discordUsername}\n`;
  emailContent += `Week of: ${data.weekOf}\n`;
  emailContent += `Submitted: ${new Date(submission.timestamp).toLocaleString()}\n\n`;
  
  emailContent += `Social Media Accounts:\n`;
  data.socialAccounts.forEach((account, index) => {
    emailContent += `${index + 1}. ${account.platform}: ${account.username}`;
    if (account.followers) emailContent += ` (${account.followers} followers)`;
    if (account.engagement) emailContent += ` (${account.engagement}% engagement)`;
    emailContent += `\n`;
  });
  
  emailContent += `\nContent Performance:\n`;
  emailContent += `- Videos Posted: ${data.videosPosted}\n`;
  emailContent += `- Total Views: ${data.totalViews.toLocaleString()}\n`;
  emailContent += `- Weekly Interactions: ${data.weeklyInteractions.toLocaleString()}\n\n`;
  
  emailContent += `Most Successful Video:\n`;
  emailContent += `- Title: ${data.mostSuccessfulVideo.title}\n`;
  emailContent += `- Platform: ${data.mostSuccessfulVideo.platform}\n`;
  emailContent += `- Views: ${data.mostSuccessfulVideo.views.toLocaleString()}\n`;
  emailContent += `- Likes: ${data.mostSuccessfulVideo.likes.toLocaleString()}\n`;
  emailContent += `- Comments: ${data.mostSuccessfulVideo.comments.toLocaleString()}\n`;
  emailContent += `- Shares: ${data.mostSuccessfulVideo.shares.toLocaleString()}\n\n`;
  
  if (data.additionalNotes) {
    emailContent += `Additional Notes:\n${data.additionalNotes}\n`;
  }
  
  return emailContent;
};
