# Email Data Management Guide

## 📧 Where Do Emails Go?

Currently, all email and registration data is stored in your browser's **localStorage** (Phase 1 - No Backend).

### Data Storage Locations

Your browser stores three types of data:

1. **Newsletter Emails** - `localStorage.emails`
2. **Full Registrations** - `localStorage.registrations`
3. **Subscriber Count** - Calculated from emails array

## 🔍 Viewing Your Email Data

### Option 1: Browser Console (Easiest)

1. **Open your page** (`index.html`)
2. **Press F12** to open Developer Tools
3. **Click "Console" tab**
4. **Copy and paste** these commands:

```javascript
// View all newsletter emails
console.table(JSON.parse(localStorage.getItem('emails')));

// View all registrations (includes names)
console.table(JSON.parse(localStorage.getItem('registrations')));

// Get total count
console.log('Total subscribers:', JSON.parse(localStorage.getItem('emails')).length);
```

### Option 2: Application Storage View

1. **Press F12** to open Developer Tools
2. **Click "Application" tab** (Chrome/Edge) or "Storage" tab (Firefox)
3. **Expand "Local Storage"** in the left sidebar
4. **Click your site URL**
5. **Look for these keys:**
   - `emails`
   - `registrations`
6. **Click each key** to view the data

## 📥 Exporting Email Data

### Quick Export (Copy-Paste)

Open browser console (F12) and run:

```javascript
// Export all email data as JSON
const emailData = {
    emails: JSON.parse(localStorage.getItem('emails')),
    registrations: JSON.parse(localStorage.getItem('registrations')),
    exportDate: new Date().toISOString(),
    totalSubscribers: JSON.parse(localStorage.getItem('emails')).length
};

// Copy this output and save to a file
console.log(JSON.stringify(emailData, null, 2));
```

Then:
1. **Right-click the output** in console
2. **Select "Copy object"**
3. **Paste into a text editor**
4. **Save as** `email-data-export.json`

### Export to CSV (Email List Only)

```javascript
// Generate CSV of emails
const emails = JSON.parse(localStorage.getItem('emails'));
const csv = 'Email\n' + emails.join('\n');

// Download CSV file
const blob = new Blob([csv], { type: 'text/csv' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'subscribers.csv';
a.click();
```

### Export Full Registrations to CSV

```javascript
// Generate CSV of full registrations
const registrations = JSON.parse(localStorage.getItem('registrations'));

const csv = 'Name,Email,Newsletter,Registration Date\n' +
    registrations.map(reg =>
        `"${reg.name}","${reg.email}",${reg.newsletter},${reg.timestamp}`
    ).join('\n');

// Download CSV file
const blob = new Blob([csv], { type: 'text/csv' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'full-registrations.csv';
a.click();
```

## 🚀 Phase 2: Backend Migration (Future)

When you're ready to migrate to MySQL + Prisma:

### 1. Export Current Data

Before migrating, export all current localStorage data using the scripts above.

### 2. Backend Setup

```bash
cd backend
npm install express prisma @prisma/client mysql2
npx prisma init
```

### 3. Import Existing Data

After setting up the database, import your existing subscribers:

```javascript
// backend/scripts/import-emails.js
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();
const exportData = JSON.parse(fs.readFileSync('email-data-export.json'));

async function importData() {
    // Import emails
    for (const email of exportData.emails) {
        await prisma.subscriber.create({
            data: { email }
        });
    }

    // Import full registrations
    for (const reg of exportData.registrations) {
        await prisma.registration.create({
            data: {
                name: reg.name,
                email: reg.email,
                newsletter: reg.newsletter,
                timestamp: new Date(reg.timestamp)
            }
        });
    }

    console.log('Import complete!');
}

importData();
```

## 📊 Email Data Structure

### Newsletter Emails Array
```json
[
    "user1@example.com",
    "user2@example.com",
    "user3@example.com"
]
```

### Full Registrations Array
```json
[
    {
        "name": "John Doe",
        "email": "john@example.com",
        "newsletter": true,
        "timestamp": "2025-01-17T10:30:00.000Z"
    },
    {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "newsletter": false,
        "timestamp": "2025-01-17T11:45:00.000Z"
    }
]
```

## 🔒 Data Privacy & Security

### Current (Phase 1 - localStorage)
- ✅ Data stays on user's browser
- ✅ No server storage
- ⚠️ Data clears if browser cache is cleared
- ⚠️ Only accessible from the same browser
- ⚠️ Not backed up automatically

### Future (Phase 2 - MySQL Backend)
- ✅ Server-side storage
- ✅ Automatic backups
- ✅ Accessible from any device
- ✅ GDPR compliant (with proper setup)
- ✅ Secure authentication

## 📧 Email Integration (Future)

When you add a backend, you can integrate email services:

### Recommended Services:
- **SendGrid** - Professional email API
- **Mailchimp** - Newsletter management
- **ConvertKit** - Creator-focused email
- **EmailJS** - Simple JavaScript email sender

### Example: SendGrid Integration

```javascript
// backend/services/email.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendWelcomeEmail(email, name) {
    const msg = {
        to: email,
        from: 'noreply@sunlight.com',
        subject: 'Welcome to SunLight!',
        html: `
            <h1>Welcome, ${name}!</h1>
            <p>Thank you for joining the SunLight community.</p>
        `
    };

    await sgMail.send(msg);
}
```

## 🛠️ Quick Commands Reference

```javascript
// View all emails
JSON.parse(localStorage.getItem('emails'))

// View all registrations
JSON.parse(localStorage.getItem('registrations'))

// Get subscriber count
JSON.parse(localStorage.getItem('emails')).length

// Clear all email data (CAUTION!)
localStorage.removeItem('emails')
localStorage.removeItem('registrations')

// Export everything
console.log(JSON.stringify({
    emails: JSON.parse(localStorage.getItem('emails')),
    registrations: JSON.parse(localStorage.getItem('registrations'))
}, null, 2))
```

## 📝 Notes

- **Backup regularly** - Copy your data periodically since it's only in localStorage
- **Test exports** - Run export scripts before clearing browser data
- **Privacy first** - Never share raw email data publicly
- **Migration ready** - The data structure is designed for easy backend migration

---

**Questions?** Your email data is safe in localStorage for now, and ready to migrate to a proper backend when you're ready!
