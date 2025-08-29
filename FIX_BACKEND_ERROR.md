# Fix Backend Error - Missing Dependencies

## 🚨 **The Problem**
You're getting `Error: Cannot find module 'helmet'` because the backend dependencies aren't installed.

## ✅ **Quick Fix (2 minutes)**

### Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

This will install all required packages:
- helmet (security)
- express (web server)
- cors (cross-origin requests)
- express-rate-limit (rate limiting)
- express-validator (form validation)
- nodemailer (email sending)
- googleapis (Google Sheets API)
- winston (logging)
- moment (date handling)
- uuid (unique IDs)

### Step 2: Create .env File
```bash
cd server
cp .env.example .env
```

Then edit `server/.env` with your credentials from `FINAL_CONFIGURATION.md`

### Step 3: Test Backend
```bash
cd server
npm run dev
```

You should see:
```
🚀 Studio Elements API Server running on http://localhost:5000
📊 Health check: http://localhost:5000/api/health
```

## 🔧 **If Still Getting Errors**

### Missing Google Credentials (Expected)
If you see warnings about Google credentials, that's normal until you add the private key.

### Missing Email Credentials (Expected)  
If you see email warnings, that's normal until you add your Gmail details.

### Port Already in Use
If port 5000 is busy, change PORT in `.env` to 5001 or 3001.

## 🎯 **Next Steps After Backend Starts**

1. **Switch to Excel Form** in `src/App.tsx`:
   ```typescript
   import Contact from './components/Contact';
   ```

2. **Test the form** - it will work even without full credentials

3. **Add credentials** when ready for full Excel integration

## ✅ **Expected Success**

After `npm install` in the server folder, your backend should start successfully and you can test the Excel integration form!
