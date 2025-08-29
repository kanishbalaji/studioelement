# Excel Form Submission Integration Setup Guide

This guide will help you set up the complete form-to-Excel integration for the Studio Elements website, including backend API, Google Sheets integration, and email notifications.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Cloud Platform account
- Gmail account for email notifications
- Google Sheets

### 1. Backend Setup

#### Install Dependencies
```bash
cd server
npm install
```

#### Environment Configuration
1. Copy the environment template:
```bash
cp .env.example .env
```

2. Configure your `.env` file with the following:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Google Sheets API Configuration
GOOGLE_SHEETS_SPREADSHEET_ID=your_actual_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour actual private key here\n-----END PRIVATE KEY-----\n"

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@studioelementdesigns.com

# Security
JWT_SECRET=your-secure-random-string-here
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### 2. Google Sheets API Setup

#### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API

#### Step 2: Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Fill in the details and create
4. Generate a JSON key file
5. Copy the `client_email` and `private_key` from the JSON file

#### Step 3: Create Google Sheet
1. Create a new Google Sheet
2. Copy the Spreadsheet ID from the URL (between `/d/` and `/edit`)
3. Share the sheet with your service account email (give Editor access)
4. The sheet will automatically create headers when first form is submitted

### 3. Email Configuration

#### Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings
3. Security > 2-Step Verification > App passwords
4. Generate an app password for "Mail"
5. Use this password in your `.env` file

### 4. Frontend Setup

#### Environment Configuration
1. Copy the frontend environment template:
```bash
cp .env.example .env
```

2. Configure your `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000
```

For production, change to your actual API URL:
```env
REACT_APP_API_URL=https://your-api-domain.com
```

### 5. Running the Application

#### Development Mode
1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend (in a new terminal):
```bash
npm start
```

#### Production Mode
1. Build the frontend:
```bash
npm run build
```

2. Start the backend:
```bash
cd server
npm start
```

## 📊 Google Sheets Structure

The system automatically creates the following columns in your Google Sheet:

| Column | Description |
|--------|-------------|
| Timestamp | When the form was submitted |
| Submission ID | Unique identifier for each submission |
| Name | Customer's full name |
| Email | Customer's email address |
| Phone | Customer's phone number |
| Project Type | Type of project (residential, commercial, etc.) |
| Budget | Budget range selected |
| Message | Project details and requirements |
| Status | Submission status (New, In Progress, Completed) |

## 🔧 API Endpoints

### POST /api/contact
Submit a new contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "projectType": "residential",
  "budget": "15-30",
  "message": "I need help with my home design..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your enquiry has been submitted successfully. We will contact you within 24 hours.",
  "submissionId": "uuid-here",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET /api/health
Check API health status.

### GET /api/submissions
Get all form submissions (admin endpoint).

## 🛡️ Security Features

- **Rate Limiting**: Prevents spam submissions
- **Input Validation**: Server-side validation for all fields
- **CORS Protection**: Configurable allowed origins
- **Helmet.js**: Security headers
- **Error Handling**: Comprehensive error logging

## 🚨 Error Handling

The system includes comprehensive error handling:

1. **Frontend Validation**: Real-time form validation
2. **Backend Validation**: Server-side validation with detailed error messages
3. **Network Errors**: Graceful handling of connection issues
4. **Google Sheets Errors**: Fallback mechanisms if Sheets API fails
5. **Email Errors**: Continues processing even if email fails

## 📝 Logging

All activities are logged using Winston:
- `logs/error.log` - Error logs only
- `logs/combined.log` - All logs
- Console output in development

## 🔄 Deployment

### Backend Deployment (Heroku Example)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git:
```bash
git subtree push --prefix server heroku main
```

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder
3. Set environment variables in deployment platform

### Environment Variables for Production
Make sure to set these in your production environment:
- All variables from `.env.example`
- Update `ALLOWED_ORIGINS` with your production domain
- Use strong `JWT_SECRET`
- Set `NODE_ENV=production`

## 🧪 Testing

### Test the Integration
1. Start both frontend and backend
2. Fill out the contact form
3. Check Google Sheets for new entry
4. Check email for notification
5. Verify logs for any errors

### Manual Testing Checklist
- [ ] Form validation works
- [ ] Successful submission creates Google Sheets entry
- [ ] Email notification is sent
- [ ] Error handling works for network issues
- [ ] Rate limiting prevents spam
- [ ] CORS allows your domain

## 🔍 Troubleshooting

### Common Issues

#### Google Sheets API Errors
- Verify service account has access to the sheet
- Check if the spreadsheet ID is correct
- Ensure Google Sheets API is enabled

#### Email Not Sending
- Verify Gmail app password is correct
- Check if 2FA is enabled on Gmail account
- Ensure SMTP settings are correct

#### CORS Errors
- Add your domain to `ALLOWED_ORIGINS`
- Check if API URL is correct in frontend

#### Form Not Submitting
- Check browser console for errors
- Verify API is running on correct port
- Check network tab for failed requests

### Debug Mode
Set `NODE_ENV=development` to see detailed error messages.

## 📞 Support

For issues with this integration:
1. Check the logs in `logs/` directory
2. Verify all environment variables are set
3. Test each component individually
4. Check Google Cloud Console for API quotas

## 🔄 Updates and Maintenance

### Regular Maintenance
- Monitor Google Sheets API quotas
- Check email delivery rates
- Review error logs regularly
- Update dependencies periodically

### Scaling Considerations
- Consider using a database for high-volume submissions
- Implement queue system for email processing
- Add authentication for admin endpoints
- Consider using Google Sheets alternatives for better performance

---

## 📋 Complete Setup Checklist

- [ ] Backend dependencies installed
- [ ] Environment variables configured
- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created and configured
- [ ] Google Sheet created and shared
- [ ] Gmail app password generated
- [ ] Frontend environment configured
- [ ] Both servers running
- [ ] Form submission tested
- [ ] Google Sheets entry verified
- [ ] Email notification received
- [ ] Error handling tested
- [ ] Production deployment configured

Once all items are checked, your Excel integration is ready for production use!
