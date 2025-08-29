# Credentials Needed for Excel Integration

## 🔑 **Required Credentials List**

To enable the Excel integration that saves form submissions to your Google Sheet, you need these credentials:

## 1. **Google Cloud Service Account Credentials**

### What you need:
- **Service Account Email** (looks like: `your-service@your-project.iam.gserviceaccount.com`)
- **Private Key** (long text starting with `-----BEGIN PRIVATE KEY-----`)

### How to get them:
1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create/Select Project**: Create new or use existing project
3. **Enable Google Sheets API**: 
   - Go to "APIs & Services" → "Library"
   - Search "Google Sheets API" → Enable it
4. **Create Service Account**:
   - Go to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Name it (e.g., "studio-elements-forms")
   - Click "Create and Continue"
5. **Generate Key**:
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" → "Create New Key"
   - Choose "JSON" format
   - Download the JSON file

### From the JSON file, you need:
```json
{
  "client_email": "your-service@your-project.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYour long private key here\n-----END PRIVATE KEY-----\n"
}
```

## 2. **Email Credentials (Optional but Recommended)**

### What you need:
- **Gmail Email Address** (e.g., `your-email@gmail.com`)
- **Gmail App Password** (16-character password like: `abcd efgh ijkl mnop`)

### How to get Gmail App Password:
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Go to Google Account Settings**: https://myaccount.google.com/
3. **Security** → **2-Step Verification** → **App passwords**
4. **Generate App Password**:
   - Select "Mail" as the app
   - Select "Other" as device
   - Name it "Studio Elements Website"
   - Copy the 16-character password

## 3. **Your Google Sheet ID (Already Have This)**

✅ **You already have this**: `1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U`

## 📝 **Where to Put These Credentials**

### In your `server/.env` file:
```env
# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=1g0Dh1T8MYQI7VZkaa0m9ptLjjZGyfZG551DOvmoX_5U
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
ADMIN_EMAIL=admin@studioelementdesigns.com

# Other Settings
PORT=5000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000
```

## 🎯 **Step-by-Step Credential Setup**

### Step 1: Google Cloud Setup (5 minutes)
1. Go to https://console.cloud.google.com/
2. Create new project (or use existing)
3. Enable Google Sheets API
4. Create Service Account
5. Download JSON key file
6. Copy `client_email` and `private_key` from JSON

### Step 2: Gmail Setup (2 minutes)
1. Enable 2FA on Gmail
2. Generate App Password
3. Copy the 16-character password

### Step 3: Share Google Sheet (1 minute)
1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email
4. Give "Editor" permissions

### Step 4: Configure Backend (1 minute)
1. Create `server/.env` file
2. Add all credentials
3. Start backend: `npm run dev`

## 🧪 **Testing Your Credentials**

### Quick Test:
1. Add credentials to `server/.env`
2. Start backend: `cd server && npm run dev`
3. Look for these success messages:
   ```
   ✅ Google Sheets API initialized successfully
   ✅ Email transporter initialized successfully
   🚀 Studio Elements API Server running on http://localhost:5000
   ```

### If you see errors:
- **Google Sheets error**: Check service account email and private key
- **Email error**: Check Gmail app password
- **Permission error**: Make sure sheet is shared with service account

## 🔒 **Security Notes**

- **Never commit `.env` file** to Git (it's in `.gitignore`)
- **Keep credentials private** - don't share them
- **Use environment variables** in production
- **Regenerate keys** if compromised

## 💡 **What Each Credential Does**

1. **Service Account Email**: Identifies your app to Google
2. **Private Key**: Authenticates your app with Google
3. **Gmail Credentials**: Sends email notifications
4. **Sheet ID**: Specifies which sheet to update

## 🎯 **Summary**

**You need these 4 main credentials:**
1. ✅ **Google Sheet ID** (you have this)
2. 🔑 **Service Account Email** (from Google Cloud)
3. 🔑 **Private Key** (from Google Cloud JSON file)
4. 🔑 **Gmail App Password** (from Gmail settings)

**Once you have these, the Excel integration will work automatically!**

**Estimated setup time: 10 minutes total**
