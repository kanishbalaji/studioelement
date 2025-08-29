# Your Google Sheet Setup Guide

## 📊 **Your Google Sheet**
**URL:** https://docs.google.com/spreadsheets/d/1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U/edit?usp=sharing

**Sheet ID:** `1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U`

## 🚀 **Quick Setup for Your Sheet**

### Step 1: Update Your Backend Configuration
In your `server/.env` file, add this exact line:
```env
GOOGLE_SHEETS_SPREADSHEET_ID=1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U
```

### Step 2: Share Your Sheet with Service Account
1. In your Google Sheet, click the "Share" button (top right)
2. Add your service account email (from Google Cloud setup)
3. Give "Editor" permissions
4. Click "Send"

### Step 3: Test the Integration
1. Start your backend: `cd server && npm run dev`
2. Switch to Excel form in `src/App.tsx`:
   ```typescript
   // Change this:
   import Contact from './components/ContactFallback';
   
   // To this:
   import Contact from './components/Contact';
   ```
3. Submit a test form
4. Check your Google Sheet - new row should appear!

## 📋 **Expected Sheet Structure**

When you submit your first form, the system will automatically create these columns in your sheet:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Timestamp | Submission ID | Name | Email | Phone | Project Type | Budget | Message | Status |

**Example row:**
```
2024-01-01 12:00:00 | abc123-def456 | John Doe | john@example.com | +91 9876543210 | residential | 15-30 | I need help with my home design | New
```

## 🔧 **Complete Backend .env Configuration**

Here's what your `server/.env` file should look like:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@studioelementdesigns.com

# Security
JWT_SECRET=your-secure-random-string
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## 🧪 **Testing Steps**

### Quick Test (Without Full Setup)
1. Start backend: `cd server && npm run dev`
2. You'll see warnings about missing Google credentials (that's OK for now)
3. Switch to Excel form in App.tsx
4. Submit a form - you'll get validation and error handling

### Full Test (With Google Sheets)
1. Complete Google Cloud setup (follow `EXCEL_INTEGRATION_SETUP.md`)
2. Add service account credentials to `.env`
3. Share your sheet with service account
4. Start backend and submit form
5. Check your Google Sheet for new entries!

## 📞 **Your Sheet Benefits**

Once connected, your Google Sheet will:
- ✅ Automatically receive all form submissions
- ✅ Organize data in clean columns
- ✅ Allow you to track enquiry status
- ✅ Enable easy filtering and sorting
- ✅ Provide real-time updates
- ✅ Allow team collaboration

## 🎯 **Next Steps**

1. **Test current form**: It's working with console logging
2. **Set up Google Cloud**: Follow the detailed guide
3. **Connect your sheet**: Use the Sheet ID above
4. **Switch to Excel form**: Change one line in App.tsx
5. **Enjoy automated enquiry management!**

Your Google Sheet is ready - just need to connect it to the backend system!
