# Email Export Guide

## 📧 Where Are Emails Stored?

Your emails are currently stored in **localStorage** in your browser. They're saved automatically when people subscribe.

**Two types of data are collected:**
1. **Newsletter signups** - Just email addresses
2. **Full registrations** - Name, email, newsletter preference, and timestamp

---

## 💾 How to Export Emails to a File

You can export all emails directly from your browser console. Here's how:

### Method 1: Export to JSON (Recommended)

1. **Open your page** (`index.html`)
2. **Press F12** to open Developer Tools
3. **Click "Console" tab**
4. **Type this command:**
   ```javascript
   exportEmails()
   ```
5. **Press Enter**

A file will automatically download: `sunlight-emails-YYYY-MM-DD.json`

**This file contains:**
- All newsletter emails
- All full registrations (with names and timestamps)
- Total subscriber count
- Export date

---

### Method 2: Export to CSV (Excel-Compatible)

1. **Open your page** (`index.html`)
2. **Press F12** to open Developer Tools
3. **Click "Console" tab**
4. **Type this command:**
   ```javascript
   exportEmailsCSV()
   ```
5. **Press Enter**

This will download **TWO files**:
- `sunlight-emails-YYYY-MM-DD.csv` - Simple list of emails
- `sunlight-registrations-YYYY-MM-DD.csv` - Full registration data with names

**Perfect for:**
- Opening in Excel or Google Sheets
- Importing to email marketing tools
- Making mailing lists

---

## 📊 Example Export Data

### JSON Format:
```json
{
  "emails": [
    "user1@example.com",
    "user2@example.com"
  ],
  "registrations": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "newsletter": true,
      "timestamp": "2025-01-18T10:30:00.000Z"
    }
  ],
  "exportDate": "2025-01-18T12:00:00.000Z",
  "totalSubscribers": 2,
  "totalRegistrations": 1
}
```

### CSV Format (Emails):
```
Email
user1@example.com
user2@example.com
```

### CSV Format (Registrations):
```
Name,Email,Newsletter,Registration Date
"John Doe","john@example.com",true,2025-01-18T10:30:00.000Z
```

---

## 🔄 Importing to Email Marketing Tools

### Mailchimp:
1. Export to CSV
2. In Mailchimp: Audience → Import contacts
3. Upload the CSV file

### SendGrid:
1. Export to CSV
2. In SendGrid: Marketing → Contacts → Upload CSV

### ConvertKit:
1. Export to CSV
2. In ConvertKit: Subscribers → Import
3. Upload the CSV file

---

## 🔒 Backup Your Emails

**Important:** Since emails are in localStorage, they will be lost if you:
- Clear browser cache
- Clear site data
- Reinstall the browser
- Switch browsers

**Backup regularly by:**
1. Running `exportEmails()` every week
2. Saving the files to a safe location
3. Consider setting up the backend (MySQL) for automatic storage

---

## 🚀 Backend Migration (Future)

Once you set up the PHP/MySQL backend (see `BACKEND_SETUP.md`):
- Emails automatically save to database
- No risk of losing data
- Automatic backups possible
- Access from any device
- Can integrate with email services

---

## 🛠️ Quick Commands Reference

**Open browser console (F12), then:**

```javascript
// Export all emails and registrations to JSON
exportEmails()

// Export to CSV files
exportEmailsCSV()

// View all emails in console
console.table(JSON.parse(localStorage.getItem('emails')))

// View all registrations in console
console.table(JSON.parse(localStorage.getItem('registrations')))

// Get total count
console.log('Total subscribers:', JSON.parse(localStorage.getItem('emails')).length)
```

---

## 💡 Pro Tips

1. **Export before clearing browser data** - Always export first!
2. **Regular backups** - Export weekly or after getting new subscribers
3. **Multiple formats** - Export both JSON and CSV for flexibility
4. **Date stamping** - Files are automatically named with the date
5. **Keep multiple backups** - Save files in multiple locations

---

**Need help?** Your emails are safe in localStorage and ready to export anytime with just one command!
