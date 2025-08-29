const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
const winston = require('winston');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Configure Winston Logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'studioelements-api' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: Math.ceil((parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000) / 1000)
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Google Sheets API setup
let auth;
let sheets;

async function initializeGoogleSheets() {
  try {
    auth = new GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheets = google.sheets({ version: 'v4', auth });
    logger.info('Google Sheets API initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize Google Sheets API:', error);
    throw error;
  }
}

// Email transporter setup
let emailTransporter;

async function initializeEmailTransporter() {
  try {
    emailTransporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await emailTransporter.verify();
    logger.info('Email transporter initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize email transporter:', error);
    throw error;
  }
}

// Form validation rules
const contactFormValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  
  body('projectType')
    .isIn(['residential', 'commercial', 'interior', 'renovation', 'consultation'])
    .withMessage('Please select a valid project type'),
  
  body('budget')
    .optional()
    .isIn(['5-15', '15-30', '30-50', '50-100', '100+'])
    .withMessage('Please select a valid budget range'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// Function to append data to Google Sheets
async function appendToGoogleSheets(formData) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = 'Form Submissions!A:I'; // Adjust range as needed

    // Prepare the row data
    const rowData = [
      moment().format('YYYY-MM-DD HH:mm:ss'), // Timestamp
      formData.submissionId,
      formData.name,
      formData.email,
      formData.phone,
      formData.projectType,
      formData.budget || 'Not specified',
      formData.message,
      'New' // Status
    ];

    // Check if headers exist, if not create them
    try {
      const headerResponse = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Form Submissions!A1:I1',
      });

      if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
        // Create headers
        const headers = [
          'Timestamp',
          'Submission ID',
          'Name',
          'Email',
          'Phone',
          'Project Type',
          'Budget',
          'Message',
          'Status'
        ];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Form Submissions!A1:I1',
          valueInputOption: 'RAW',
          resource: {
            values: [headers],
          },
        });

        logger.info('Headers created in Google Sheets');
      }
    } catch (headerError) {
      logger.warn('Could not check/create headers:', headerError.message);
    }

    // Append the new row
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [rowData],
      },
    });

    logger.info(`Data appended to Google Sheets: ${response.data.updates.updatedRows} row(s) added`);
    return response.data;
  } catch (error) {
    logger.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

// Function to send notification email
async function sendNotificationEmail(formData) {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Enquiry - ${formData.projectType} - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f97316; color: white; padding: 20px; text-align: center;">
            <h1>New Project Enquiry</h1>
            <p>Studio Element Designs</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Project Type:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Budget:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Submission ID:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formData.submissionId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Submitted:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${moment().format('YYYY-MM-DD HH:mm:ss')}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 20px;">Project Details</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #f97316;">
              ${formData.message}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 5px;">
              <p style="margin: 0; color: #0066cc;">
                <strong>Action Required:</strong> Please respond to this enquiry within 24 hours for the best customer experience.
              </p>
            </div>
          </div>
          
          <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Studio Element Designs - Creating Spaces That Inspire</p>
          </div>
        </div>
      `,
    };

    const info = await emailTransporter.sendMail(mailOptions);
    logger.info(`Notification email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    logger.error('Error sending notification email:', error);
    throw error;
  }
}

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form submission endpoint
app.post('/api/contact', contactFormValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn('Form validation failed:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Generate unique submission ID
    const submissionId = uuidv4();
    
    // Prepare form data
    const formData = {
      submissionId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      projectType: req.body.projectType,
      budget: req.body.budget,
      message: req.body.message,
      timestamp: new Date().toISOString(),
      ipAddress: req.ip || req.connection.remoteAddress
    };

    logger.info(`Processing form submission: ${submissionId}`);

    // Parallel processing for better performance
    const promises = [];

    // Add to Google Sheets
    if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      promises.push(
        appendToGoogleSheets(formData).catch(error => {
          logger.error('Google Sheets error:', error);
          return { error: 'sheets_failed' };
        })
      );
    }

    // Send notification email
    if (process.env.ADMIN_EMAIL && emailTransporter) {
      promises.push(
        sendNotificationEmail(formData).catch(error => {
          logger.error('Email notification error:', error);
          return { error: 'email_failed' };
        })
      );
    }

    // Wait for all operations to complete
    const results = await Promise.all(promises);
    
    // Check if any operations failed
    const failures = results.filter(result => result && result.error);
    
    if (failures.length > 0) {
      logger.warn(`Some operations failed for submission ${submissionId}:`, failures);
    }

    // Log successful submission
    logger.info(`Form submission processed successfully: ${submissionId}`);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. We will contact you within 24 hours.',
      submissionId,
      timestamp: formData.timestamp
    });

  } catch (error) {
    logger.error('Error processing form submission:', error);
    
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your submission. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get form submissions (admin endpoint - you might want to add authentication)
app.get('/api/submissions', async (req, res) => {
  try {
    if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      return res.status(503).json({
        success: false,
        message: 'Google Sheets not configured'
      });
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Form Submissions!A:I',
    });

    const rows = response.data.values || [];
    const headers = rows[0] || [];
    const data = rows.slice(1).map(row => {
      const submission = {};
      headers.forEach((header, index) => {
        submission[header.toLowerCase().replace(/\s+/g, '_')] = row[index] || '';
      });
      return submission;
    });

    res.json({
      success: true,
      data,
      total: data.length
    });

  } catch (error) {
    logger.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Initialize services and start server
async function startServer() {
  try {
    // Initialize Google Sheets API
    if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      await initializeGoogleSheets();
    } else {
      logger.warn('Google Sheets not configured - submissions will not be saved to sheets');
    }

    // Initialize email transporter
    if (process.env.SMTP_USER && process.env.ADMIN_EMAIL) {
      await initializeEmailTransporter();
    } else {
      logger.warn('Email not configured - notifications will not be sent');
    }

    // Start the server
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
      console.log(`🚀 Studio Elements API Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Start the server
startServer();

module.exports = app;
