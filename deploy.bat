@echo off
echo Building project...
npm run build
echo.
echo Build complete! Now deploy to your hosting platform.
echo.
echo If using Vercel:
echo 1. Run: vercel login
echo 2. Run: vercel --prod
echo.
echo If using Netlify:
echo 1. Drag the 'dist' folder to Netlify
echo 2. Or connect your GitHub repo for auto-deploy
echo.
pause
