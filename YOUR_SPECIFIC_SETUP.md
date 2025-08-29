# Your Specific Excel Integration Setup

## ✅ **Your Google Cloud Credentials (Confirmed)**

**Service Account ID:** `110569703802492857182`
**Service Account Email:** `studio-elements@studio-elements-470418.iam.gserviceaccount.com`
**Google Sheet ID:** `1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U`

## 🔑 **What You Still Need**

### 1. Private Key (from Google Cloud)
You need to download the JSON key file for your service account to get the private key.

**How to get it:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Go to "IAM & Admin" → "Service Accounts"
3. Find your service account: `studio-elements@studio-elements-470418.iam.gserviceaccount.com`
4. Click on it
5. Go to "Keys" tab
6. Click "Add Key" → "Create New Key"
7. Choose "JSON" format
8. Download the file

**From the JSON file, copy the `private_key` field (it's a long text starting with `-----BEGIN PRIVATE KEY-----`)**

### 2. Gmail App Password (Optional but Recommended)
For email notifications when someone submits a form.

**How to get it:**
1. Enable 2-Factor Authentication on your Gmail
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Security → 2-Step Verification → App passwords
4. Generate password for "Mail" → "Other" → "Studio Elements"
5. Copy the 16-character password

## 📝 **Your Exact .env Configuration**

Create `server/.env` file with these exact values:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U
GOOGLE_SERVICE_ACCOUNT_EMAIL=studio-elements@studio-elements-470418.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nPASTE_YOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
ADMIN_EMAIL=admin@studioelementdesigns.com

# Security
JWT_SECRET=studio-elements-secret-key-2024
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## 🔗 **Share Your Google Sheet**

**IMPORTANT:** You must share your Google Sheet with your service account:

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U/edit
2. Click "Share" button (top right)
3. Add this email: `studio-elements@studio-elements-470418.iam.gserviceaccount.com`
4. Set permission to "Editor"
5. Click "Send"

## 🚀 **Quick Test Steps**

### Step 1: Get Private Key
1. Download JSON key file from Google Cloud
2. Copy the `private_key` value
3. Add it to your `server/.env` file

### Step 2: Share Sheet
1. Share your Google Sheet with: `studio-elements@studio-elements-470418.iam.gserviceaccount.com`

### Step 3: Test Backend
```bash
cd server
npm install
npm run dev
```

You should see:
```
✅ Google Sheets API initialized successfully
🚀 Studio Elements API Server running on http://localhost:5000
```

### Step 4: Switch to Excel Form
In `src/App.tsx`, change:
```typescript
// Change this:
import Contact from './components/ContactFallback';

// To this:
import Contact from './components/Contact';
```

### Step 5: Test Form
1. Start your website: `npm start`
2. Go to Contact section
3. Submit a form
4. Check your Google Sheet - new row should appear!

## 🧪 **Testing Checklist**

- [ ] Downloaded JSON key file from Google Cloud
- [ ] Added private key to `server/.env`
- [ ] Shared Google Sheet with service account email
- [ ] Started backend server successfully
- [ ] Switched to Excel form in App.tsx
- [ ] Submitted test form
- [ ] Verified new row in Google Sheet

## 🎯 **What Your Sheet Will Look Like**

After first submission, your sheet will have these columns:

| Timestamp | Submission ID | Name | Email | Phone | Project Type | Budget | Message | Status |
|-----------|---------------|------|-------|-------|--------------|--------|---------|--------|
| 2024-01-01 12:00:00 | abc123... | John Doe | john@example.com | +91 9876543210 | residential | 15-30 | I need help... | New |

## 🔧 **If You Get Errors**

**"Permission denied" error:**
- Make sure you shared the sheet with: `studio-elements@studio-elements-470418.iam.gserviceaccount.com`

**"Invalid credentials" error:**
- Check that private key is correctly formatted in .env file
- Make sure there are no extra spaces or characters

**"API not enabled" error:**
- Go to Google Cloud Console → APIs & Services → Library
- Search "Google Sheets API" and enable it

## ✅ **You're Almost There!**

You have:
- ✅ Service account created
- ✅ Service account email
- ✅ Google Sheet ready
- ✅ Backend code ready

You just need:
- 🔑 Private key (from JSON download)
- 🔗 Share sheet with service account
- 🚀 Test the integration

**Once you get the private key and share the sheet, your Excel integration will work automatically!**
