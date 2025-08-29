# FINAL CONFIGURATION - Ready to Use!

## ✅ **Your Complete Credentials**

**Service Account Email:** `studio-elements@animated-alloy-285602.iam.gserviceaccount.com`
**Service Account ID:** `107240161481373613093`
**Google Sheet ID:** `1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U`
**Gmail App Password:** `xxen oahp flya omry`

## 📝 **Your Complete server/.env File**

Create `server/.env` with these exact values:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U
GOOGLE_SERVICE_ACCOUNT_EMAIL=studio-elements@animated-alloy-285602.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=xxenoahpflyaomry
ADMIN_EMAIL=your-gmail@gmail.com

# Security
JWT_SECRET=studio-elements-secret-2024
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000
```

## 🔑 **You Still Need: Private Key**

**How to get your private key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Go to "IAM & Admin" → "Service Accounts"
3. Find: `studio-elements@animated-alloy-285602.iam.gserviceaccount.com`
4. Click on it → "Keys" tab
5. "Add Key" → "Create New Key" → "JSON"
6. Download the JSON file
7. Open the file and copy the `private_key` value

**The private key looks like:**
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
(many lines of text)
...
-----END PRIVATE KEY-----
```

## 🔗 **Share Your Google Sheet**

**CRITICAL STEP:** Share your Google Sheet with your service account:

1. Open: https://docs.google.com/spreadsheets/d/1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U/edit
2. Click "Share" button
3. Add: `studio-elements@animated-alloy-285602.iam.gserviceaccount.com`
4. Set permission: "Editor"
5. Click "Send"

## 🚀 **Final Setup Steps**

### Step 1: Get Private Key
1. Download JSON from Google Cloud
2. Copy `private_key` value
3. Add to `server/.env` file (replace `YOUR_PRIVATE_KEY_HERE`)

### Step 2: Update Email
Replace `your-gmail@gmail.com` with your actual Gmail address in the .env file

### Step 3: Share Sheet
Share your Google Sheet with: `studio-elements@animated-alloy-285602.iam.gserviceaccount.com`

### Step 4: Test Backend
```bash
cd server
npm install
npm run dev
```

### Step 5: Switch to Excel Form
In `src/App.tsx`:
```typescript
// Change this line:
import Contact from './components/ContactFallback';

// To this:
import Contact from './components/Contact';
```

### Step 6: Test Complete Integration
1. Start website: `npm start`
2. Submit a form
3. Check your Google Sheet for new row!
4. Check your email for notification!

## 🎯 **Success Indicators**

**Backend startup should show:**
```
✅ Google Sheets API initialized successfully
✅ Email transporter initialized successfully
🚀 Studio Elements API Server running on http://localhost:5000
```

**After form submission:**
- ✅ New row appears in your Google Sheet
- ✅ Email notification sent to your Gmail
- ✅ Success message shown on website

## 📊 **Your Google Sheet Structure**

After first submission:

| Timestamp | Submission ID | Name | Email | Phone | Project Type | Budget | Message | Status |
|-----------|---------------|------|-------|-------|--------------|--------|---------|--------|
| 2024-01-01 12:00:00 | uuid-123 | John Doe | john@example.com | +91 9876543210 | residential | 15-30 | Project details | New |

## 🔧 **Troubleshooting**

**If backend fails to start:**
- Check private key format in .env
- Ensure no extra spaces in credentials

**If "Permission denied" error:**
- Make sure sheet is shared with service account email

**If email doesn't work:**
- Verify Gmail app password: `xxenoahpflyaomry`
- Check your Gmail address is correct

## ✅ **You're Ready!**

**You have everything except the private key:**
- ✅ Service account email
- ✅ Gmail app password  
- ✅ Google Sheet ID
- ✅ Backend code ready
- 🔑 Just need: Private key from JSON download

**Once you add the private key and share the sheet, your Excel integration will be fully functional!**

**Your form submissions will automatically:**
- Save to Google Sheets in real-time
- Send email notifications
- Provide professional enquiry management
