// EmailJS Template Configuration for Weekly Productivity Package
// This file shows the template structure that should be created in EmailJS dashboard

export const weeklyProductivityTemplate = {
  template_id: 'template_weekly_productivity',
  template_name: 'Weekly Productivity Package Submission',
  subject: 'Weekly Productivity Package - {{intern_name}} - Week of {{week_of}}',
  
  // HTML Template for EmailJS
  html_template: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Weekly Productivity Package</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Marketing Intern Performance Report</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">Intern Information</h2>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #555;">Name:</strong> {{intern_name}}<br>
          <strong style="color: #555;">Discord Username:</strong> {{discord_username}}<br>
          <strong style="color: #555;">Week of:</strong> {{week_of}}<br>
          <strong style="color: #555;">Submitted:</strong> {{submission_date}}
        </div>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin: 30px 0 20px 0;">Social Media Accounts</h2>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          {{social_accounts}}
        </div>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin: 30px 0 20px 0;">Content Performance</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; text-align: center;">
            <h3 style="color: #1976d2; margin: 0 0 10px 0;">Videos Posted</h3>
            <p style="font-size: 24px; font-weight: bold; color: #333; margin: 0;">{{videos_posted}}</p>
          </div>
          <div style="background: #f3e5f5; padding: 15px; border-radius: 5px; text-align: center;">
            <h3 style="color: #7b1fa2; margin: 0 0 10px 0;">Total Views</h3>
            <p style="font-size: 24px; font-weight: bold; color: #333; margin: 0;">{{total_views}}</p>
          </div>
        </div>
        
        <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
          <h3 style="color: #2e7d32; margin: 0 0 10px 0;">Weekly Interactions</h3>
          <p style="font-size: 24px; font-weight: bold; color: #333; margin: 0;">{{weekly_interactions}}</p>
        </div>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin: 30px 0 20px 0;">Most Successful Video</h2>
        <div style="background: #fff3e0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          {{most_successful_video}}
        </div>
        
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin: 30px 0 20px 0;">Additional Notes</h2>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          {{additional_notes}}
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            This report was automatically generated from the VESTI Employee Portal.
          </p>
        </div>
      </div>
    </div>
  `,
  
  // Plain text template for email clients that don't support HTML
  text_template: `
    WEEKLY PRODUCTIVITY PACKAGE - MARKETING INTERN PERFORMANCE REPORT
    
    INTERN INFORMATION:
    Name: {{intern_name}}
    Discord Username: {{discord_username}}
    Week of: {{week_of}}
    Submitted: {{submission_date}}
    
    SOCIAL MEDIA ACCOUNTS:
    {{social_accounts}}
    
    CONTENT PERFORMANCE:
    Videos Posted: {{videos_posted}}
    Total Views: {{total_views}}
    Weekly Interactions: {{weekly_interactions}}
    
    MOST SUCCESSFUL VIDEO:
    {{most_successful_video}}
    
    ADDITIONAL NOTES:
    {{additional_notes}}
    
    ---
    This report was automatically generated from the VESTI Employee Portal.
  `
};

// Instructions for setting up the EmailJS template:
export const emailJSSetupInstructions = {
  service_id: 'service_7g7d7m9', // Your existing EmailJS service ID
  template_id: 'template_weekly_productivity', // New template ID to create
  public_key: 'uUxCq93I6S-H6COPh', // Your existing EmailJS public key
  
  setup_steps: [
    '1. Go to your EmailJS dashboard',
    '2. Navigate to Email Templates section',
    '3. Click "Create New Template"',
    '4. Set Template ID to: template_weekly_productivity',
    '5. Set Template Name to: Weekly Productivity Package Submission',
    '6. Copy the HTML template from weeklyProductivityTemplate.html_template',
    '7. Copy the text template from weeklyProductivityTemplate.text_template',
    '8. Save the template',
    '9. Test the template with sample data'
  ],
  
  variables_used: [
    'intern_name',
    'discord_username', 
    'week_of',
    'submission_date',
    'social_accounts',
    'videos_posted',
    'total_views',
    'weekly_interactions',
    'most_successful_video',
    'additional_notes'
  ]
};
