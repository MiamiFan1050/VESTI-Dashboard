# VESTI Dashboard - Database Setup Instructions

## Problem Solved
Your application was using localStorage to store submissions, which meant data was isolated to each user's browser. Submissions from users on different WiFi networks/IP addresses weren't visible in your admin portal.

## Solution Implemented
I've created a backend API with SQLite database that stores all submissions centrally, ensuring all submissions are visible in the admin portal regardless of where users are located.

## Setup Instructions

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Start the Backend Server
```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The backend will run on `http://localhost:3001` and create a SQLite database file `vesti_submissions.db`.

### 3. Update Frontend Environment
Create a `.env` file in your project root:
```bash
VITE_API_URL=http://localhost:3001/api
```

### 4. Test the Setup
1. Start your frontend: `npm run dev`
2. Start the backend: `cd backend && npm run dev`
3. Submit a weekly package from the frontend
4. Check the admin portal - the submission should appear
5. Test from a different device/network - submissions should still appear

## API Endpoints

The backend provides these endpoints:

- `POST /api/submissions` - Submit a new weekly package
- `GET /api/submissions` - Get all submissions
- `GET /api/submissions/intern/:name` - Get submissions by intern name
- `GET /api/interns` - Get unique intern names
- `GET /api/intern-profiles` - Get intern profiles
- `GET /api/analytics` - Get analytics summary
- `GET /api/health` - Health check

## Database Schema

The SQLite database has two tables:

### submissions
- id (TEXT PRIMARY KEY)
- timestamp (INTEGER)
- name (TEXT)
- discord_username (TEXT)
- social_accounts (TEXT - JSON)
- videos_posted (INTEGER)
- total_views (INTEGER)
- most_successful_video (TEXT - JSON)
- weekly_interactions (INTEGER)
- additional_notes (TEXT)
- week_of (TEXT)

### intern_profiles
- name (TEXT PRIMARY KEY)
- discord_username (TEXT)
- social_accounts (TEXT - JSON)
- total_submissions (INTEGER)
- last_submission_date (TEXT)

## Deployment

### For Production Deployment:

1. **Backend Deployment**: Deploy the backend to a service like:
   - Railway
   - Render
   - Heroku
   - DigitalOcean App Platform
   - AWS EC2

2. **Update Environment Variables**: Set `VITE_API_URL` to your deployed backend URL

3. **Database**: The SQLite file will be created automatically on first run

## Troubleshooting

### Backend won't start:
- Check if port 3001 is available
- Ensure all dependencies are installed: `npm install`

### Frontend can't connect to backend:
- Verify backend is running on port 3001
- Check the `VITE_API_URL` environment variable
- Ensure CORS is enabled (it is by default)

### Submissions not appearing:
- Check browser console for errors
- Verify backend is receiving requests (check backend console)
- Check database file exists: `vesti_submissions.db`

## Benefits of This Solution

1. **Centralized Data**: All submissions stored in one database
2. **Cross-Device Visibility**: Submissions visible from any device/network
3. **Persistent Storage**: Data survives browser cache clears
4. **Scalable**: Easy to migrate to PostgreSQL/MySQL later
5. **Real-time**: Admin portal shows all submissions immediately
