import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database('./vesti_submissions.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  db.serialize(() => {
    // Create submissions table
    db.run(`
      CREATE TABLE IF NOT EXISTS submissions (
        id TEXT PRIMARY KEY,
        timestamp INTEGER NOT NULL,
        name TEXT NOT NULL,
        discord_username TEXT NOT NULL,
        social_accounts TEXT NOT NULL,
        videos_posted INTEGER NOT NULL,
        total_views INTEGER NOT NULL,
        most_successful_video TEXT NOT NULL,
        weekly_interactions INTEGER NOT NULL,
        additional_notes TEXT,
        week_of TEXT NOT NULL
      )
    `);

    // Create intern profiles table
    db.run(`
      CREATE TABLE IF NOT EXISTS intern_profiles (
        name TEXT PRIMARY KEY,
        discord_username TEXT NOT NULL,
        social_accounts TEXT NOT NULL,
        total_submissions INTEGER DEFAULT 0,
        last_submission_date TEXT
      )
    `);
  });
}

// API Routes

// Submit a new weekly package
app.post('/api/submissions', (req, res) => {
  const { data } = req.body;
  
  if (!data) {
    return res.status(400).json({ success: false, error: 'Missing submission data' });
  }

  const id = `submission_${Date.now()}_${uuidv4().substr(0, 8)}`;
  const timestamp = Date.now();

  const stmt = db.prepare(`
    INSERT INTO submissions (
      id, timestamp, name, discord_username, social_accounts,
      videos_posted, total_views, most_successful_video,
      weekly_interactions, additional_notes, week_of
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run([
    id,
    timestamp,
    data.name,
    data.discordUsername,
    JSON.stringify(data.socialAccounts),
    data.videosPosted,
    data.totalViews,
    JSON.stringify(data.mostSuccessfulVideo),
    data.weeklyInteractions,
    data.additionalNotes || '',
    data.weekOf
  ], function(err) {
    if (err) {
      console.error('Error saving submission:', err);
      return res.status(500).json({ success: false, error: 'Failed to save submission' });
    }

    // Update intern profile
    updateInternProfile(data);

    res.json({ success: true, id });
  });

  stmt.finalize();
});

// Get all submissions
app.get('/api/submissions', (req, res) => {
  db.all(`
    SELECT 
      id, timestamp, name, discord_username, social_accounts,
      videos_posted, total_views, most_successful_video,
      weekly_interactions, additional_notes, week_of
    FROM submissions 
    ORDER BY timestamp DESC
  `, (err, rows) => {
    if (err) {
      console.error('Error fetching submissions:', err);
      return res.status(500).json({ error: 'Failed to fetch submissions' });
    }

    const submissions = rows.map(row => ({
      id: row.id,
      timestamp: row.timestamp,
      data: {
        name: row.name,
        discordUsername: row.discord_username,
        socialAccounts: JSON.parse(row.social_accounts),
        videosPosted: row.videos_posted,
        totalViews: row.total_views,
        mostSuccessfulVideo: JSON.parse(row.most_successful_video),
        weeklyInteractions: row.weekly_interactions,
        additionalNotes: row.additional_notes,
        weekOf: row.week_of
      }
    }));

    res.json(submissions);
  });
});

// Get submissions by intern name
app.get('/api/submissions/intern/:name', (req, res) => {
  const { name } = req.params;
  
  db.all(`
    SELECT 
      id, timestamp, name, discord_username, social_accounts,
      videos_posted, total_views, most_successful_video,
      weekly_interactions, additional_notes, week_of
    FROM submissions 
    WHERE name = ?
    ORDER BY timestamp DESC
  `, [name], (err, rows) => {
    if (err) {
      console.error('Error fetching submissions by intern:', err);
      return res.status(500).json({ error: 'Failed to fetch submissions' });
    }

    const submissions = rows.map(row => ({
      id: row.id,
      timestamp: row.timestamp,
      data: {
        name: row.name,
        discordUsername: row.discord_username,
        socialAccounts: JSON.parse(row.social_accounts),
        videosPosted: row.videos_posted,
        totalViews: row.total_views,
        mostSuccessfulVideo: JSON.parse(row.most_successful_video),
        weeklyInteractions: row.weekly_interactions,
        additionalNotes: row.additional_notes,
        weekOf: row.week_of
      }
    }));

    res.json(submissions);
  });
});

// Get unique intern names
app.get('/api/interns', (req, res) => {
  db.all(`
    SELECT DISTINCT name 
    FROM submissions 
    ORDER BY name
  `, (err, rows) => {
    if (err) {
      console.error('Error fetching interns:', err);
      return res.status(500).json({ error: 'Failed to fetch interns' });
    }

    const interns = rows.map(row => row.name);
    res.json(interns);
  });
});

// Get intern profiles
app.get('/api/intern-profiles', (req, res) => {
  db.all(`
    SELECT 
      name, discord_username, social_accounts,
      total_submissions, last_submission_date
    FROM intern_profiles 
    ORDER BY name
  `, (err, rows) => {
    if (err) {
      console.error('Error fetching intern profiles:', err);
      return res.status(500).json({ error: 'Failed to fetch intern profiles' });
    }

    const profiles = rows.map(row => ({
      name: row.name,
      discordUsername: row.discord_username,
      socialAccounts: JSON.parse(row.social_accounts),
      totalSubmissions: row.total_submissions,
      lastSubmissionDate: row.last_submission_date
    }));

    res.json(profiles);
  });
});

// Get analytics summary
app.get('/api/analytics', (req, res) => {
  db.all(`
    SELECT 
      COUNT(*) as total_submissions,
      COUNT(DISTINCT name) as unique_interns,
      SUM(videos_posted) as total_videos,
      SUM(total_views) as total_views,
      SUM(weekly_interactions) as total_interactions
    FROM submissions
  `, (err, row) => {
    if (err) {
      console.error('Error fetching analytics:', err);
      return res.status(500).json({ error: 'Failed to fetch analytics' });
    }

    const analytics = row[0];
    res.json({
      totalSubmissions: analytics.total_submissions,
      uniqueInterns: analytics.unique_interns,
      totalVideos: analytics.total_videos,
      totalViews: analytics.total_views,
      totalInteractions: analytics.total_interactions
    });
  });
});

// Helper function to update intern profile
function updateInternProfile(submissionData) {
  const { name, discordUsername, socialAccounts, weekOf } = submissionData;
  
  // Check if profile exists
  db.get('SELECT * FROM intern_profiles WHERE name = ?', [name], (err, row) => {
    if (err) {
      console.error('Error checking intern profile:', err);
      return;
    }

    if (row) {
      // Update existing profile
      db.run(`
        UPDATE intern_profiles 
        SET total_submissions = total_submissions + 1, 
            last_submission_date = ?
        WHERE name = ?
      `, [weekOf, name]);
    } else {
      // Create new profile
      db.run(`
        INSERT INTO intern_profiles (
          name, discord_username, social_accounts, 
          total_submissions, last_submission_date
        ) VALUES (?, ?, ?, 1, ?)
      `, [name, discordUsername, JSON.stringify(socialAccounts), weekOf]);
    }
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
