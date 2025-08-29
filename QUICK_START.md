# Quick Start Guide - Excel Integration Testing

## 🚀 Getting Started

Since you're seeing a 403 error, here's how to properly start and test the Excel integration:

### Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 2: Set Up Environment Variables
1. Copy the environment template:
```bash
cp .env.example .env
```

2. For **quick testing without Google Sheets**, use these minimal settings in `server/.env`:
```env
PORT=5000
NODE_ENV=development
ADMIN_EMAIL=your-email@gmail.com
ALLOWED_ORIGINS=http://localhost:3000
```

### Step 3: Start the Backend Server
```bash
cd server
npm run dev
```

You should see:
```
🚀 Studio Elements API Server running on http://localhost:5000
📊 Health check: http://localhost:5000/api/health
```

### Step 4: Set Up Frontend Environment
In the root directory, create `.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

### Step 5: Start the Frontend
```bash
npm start
```

This will open your website at `http://localhost:3000`

### Step 6: Test the Form
1. Go to the Contact section
2. Fill out the form
3. Submit it
4. You should see a success message

## 🧪 Testing Without Full Setup

The form will work in "basic mode" without Google Sheets or email:
- Form validation will work
- You'll get success/error messages
- Data won't be saved to Excel (until you configure Google Sheets)
- No emails will be sent (until you configure SMTP)

## 📊 To Enable Full Excel Integration

Follow the complete setup in `EXCEL_INTEGRATION_SETUP.md`:
1. Set up Google Cloud Project
2. Create Google Sheets
3. Configure email settings
4. Update environment variables

## 🔍 Troubleshooting

**If backend won't start:**
```bash
cd server
npm install
node server.js
```

**If frontend won't start:**
```bash
npm install
npm start
```

**Check if servers are running:**
- Backend: http://localhost:5000/api/health
- Frontend: http://localhost:3000

## ✅ What You'll See Working

1. **Form Validation**: Real-time field validation
2. **Loading States**: Spinner while submitting
3. **Success Messages**: Confirmation with submission ID
4. **Error Handling**: Network error recovery
5. **Responsive Design**: Works on all devices

The Excel integration is fully implemented and ready - you just need to start the servers to test it!
