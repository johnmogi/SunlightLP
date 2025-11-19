# ⚡ Quick Start - Get Your Database Running

## ✅ Configuration Complete!

Your database settings are already configured:
- **Host:** rs8-fra.serverhostgroup.com
- **Database:** johnmogi_sunlightLP
- **API URL:** https://johnmogi.com/backend/api/

---

## 🎯 3 Simple Steps to Deploy

### 1️⃣ Create the Database Tables (5 minutes)

**Option A: Using phpMyAdmin (Easiest)**
1. Log into your hosting control panel (cPanel)
2. Click **phpMyAdmin**
3. Select database: `johnmogi_sunlightLP`
4. Click **SQL** tab at the top
5. Open the file: `backend/database/create_tables.sql`
6. Copy ALL the SQL code
7. Paste into the SQL window
8. Click **Go**

**Option B: Using Command Line**
```bash
mysql -h rs8-fra.serverhostgroup.com -u johnmogi_sunlightUSER -p johnmogi_sunlightLP < backend/database/create_tables.sql
```
(It will prompt for password)

---

### 2️⃣ Upload Files to Server (10 minutes)

Upload these to `johnmogi.com`:

**Required files:**
```
/public_html/  (or root directory)
├── index.html
├── styles.css
├── script.js
├── backend/
│   ├── api/
│   │   ├── subscribe.php
│   │   └── count.php
│   └── config/
│       └── database.php
└── images/
    └── cards/
        └── (all your card folders)
```

**Via FTP/SFTP:**
- Use FileZilla or your hosting file manager
- Upload to the root web directory

**Via cPanel File Manager:**
1. Go to cPanel → File Manager
2. Navigate to `public_html/`
3. Upload all files
4. Extract if needed

---

### 3️⃣ Test It! (2 minutes)

**Test 1: Check Backend Connection**
- Open: `https://johnmogi.com/backend/api/count.php`
- You should see: `{"success":true,"count":0}`
- ✅ If you see this → Backend is working!
- ❌ If you see error → Check database credentials

**Test 2: Submit Registration**
1. Go to: `https://johnmogi.com`
2. Click "Get Early Access"
3. Fill in name and email
4. Submit

**Test 3: Check Database**
1. Go to phpMyAdmin
2. Select `johnmogi_sunlightLP`
3. Click `subscribers` table
4. Click "Browse"
5. ✅ You should see your test entry!

---

## 🎉 You're Done!

Your site is now:
- ✅ Collecting emails permanently in MySQL
- ✅ Storing registrations with names and timestamps
- ✅ Working globally (not just in your browser)
- ✅ Falling back to localStorage if needed

---

## 📊 View Your Data Anytime

**Quick SQL Queries:**

```sql
-- See all subscribers
SELECT * FROM subscribers ORDER BY created_at DESC;

-- Count total subscribers
SELECT COUNT(*) FROM subscribers;

-- See only full registrations (with names)
SELECT name, email, created_at
FROM subscribers
WHERE type = 'registration'
ORDER BY created_at DESC;

-- See only newsletter signups
SELECT email, created_at
FROM subscribers
WHERE type = 'newsletter'
ORDER BY created_at DESC;
```

Run these in phpMyAdmin → SQL tab

---

## 🚨 Troubleshooting

**"Database connection failed"**
- Check that tables were created (Step 1)
- Verify database name is exactly: `johnmogi_sunlightLP`
- Check that files are uploaded to correct location

**"404 Not Found" on backend/api/subscribe.php**
- Verify you uploaded the `backend/` folder
- Check the path is: `https://johnmogi.com/backend/api/subscribe.php`
- Make sure file permissions are correct (644)

**Still saving to localStorage instead of database**
- Open browser console (F12)
- Look for error messages
- Check Network tab to see the API request

---

## 🔒 Security Check

Your setup includes:
- ✅ CORS headers configured
- ✅ SQL injection protection (prepared statements)
- ✅ Email validation
- ✅ HTTPS (SSL) for secure transmission
- ✅ Strong database password

**Recommendation:** Don't share your `database.php` file publicly!

---

## 📧 What Data is Collected?

**Subscribers Table:**
- Email address (required)
- Name (optional - from full registration)
- Newsletter preference (yes/no)
- Type (newsletter or registration)
- Created date/time
- Updated date/time

**Currently NOT using backend (still in localStorage):**
- Votes
- Daily spreads

Let me know if you want to add backend support for votes and daily spreads!
