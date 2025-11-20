# 🚀 SunLight Deployment Guide

## Database Configuration ✅ COMPLETE

Your database has been configured with these settings:
- **Host:** rs8-fra.serverhostgroup.com
- **Database:** johnmogi_sunlightLP
- **User:** johnmogi_sunlightUSER
- **Password:** *(configured)*

---

## 📋 Step-by-Step Deployment

### Step 1: Create Database Tables

1. Log into your hosting control panel (cPanel, phpMyAdmin, etc.)
2. Navigate to **phpMyAdmin** or **MySQL Databases**
3. Select the database: `johnmogi_sunlightLP`
4. Go to the **SQL** tab
5. Copy and paste the contents of `backend/database/create_tables.sql`
6. Click **Go** or **Execute**

**Expected result:** You should see messages saying:
- `subscribers` table created
- `votes` table created
- `daily_spreads` table created

---

### Step 2: Upload Files to Server

Upload these folders/files to your server at `johnmogi.com`:

```
/                               (root or public_html)
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
        ├── eather/
        ├── roses/
        ├── cards/
        ├── hearts/
        └── coins/
```

**Important:** Make sure the `backend/` folder is accessible at:
- `https://johnmogi.com/backend/api/subscribe.php`

---

### Step 3: Set File Permissions

On your server, set these permissions:

```bash
chmod 755 backend/
chmod 755 backend/api/
chmod 644 backend/api/*.php
chmod 644 backend/config/database.php
```

**Note:** The backend files should NOT be executable (no 777), but readable by PHP.

---

### Step 4: Test the Connection

After uploading, test if the backend is working:

1. Open your browser to: `https://johnmogi.com/backend/api/count.php`
2. You should see JSON output like: `{"success":true,"count":0}`

If you see an error, check:
- Database credentials are correct
- PHP is installed on your server
- `mysqli` extension is enabled

---

### Step 5: Test Email Collection

1. Go to your live site: `https://johnmogi.com`
2. Click "Get Early Access"
3. Fill in the registration form
4. Submit

**Check the database:**
- Go to phpMyAdmin
- Select `johnmogi_sunlightLP` database
- Click on `subscribers` table
- Click "Browse" - you should see your test entry

---

## 🔧 Troubleshooting

### Error: "Cannot connect to database"

Check `backend/config/database.php`:
- Host is correct: `rs8-fra.serverhostgroup.com`
- Database name matches exactly: `johnmogi_sunlightLP`
- Username/password are correct

### Error: "404 Not Found" for backend/api/subscribe.php

- Check that you uploaded the backend folder to the correct location
- Verify the URL is: `https://johnmogi.com/backend/api/subscribe.php`
- Check file permissions (should be 644)

### Emails saving to localStorage instead of database

Open browser console (F12) and look for:
- "Backend not available, using localStorage" - means the API isn't responding
- Check the Network tab to see if the request to subscribe.php is failing

---

## 📊 Viewing Collected Data

### Via phpMyAdmin:
1. Log into phpMyAdmin
2. Select `johnmogi_sunlightLP`
3. Click table name to browse:
   - **subscribers** - All email signups and registrations
   - **votes** - Card voting data (when implemented)
   - **daily_spreads** - User daily card draws (when implemented)

### Via SQL Query:
```sql
-- Get all subscribers
SELECT * FROM subscribers ORDER BY created_at DESC;

-- Count newsletter subscribers
SELECT COUNT(*) FROM subscribers WHERE newsletter = 1;

-- Get recent registrations
SELECT name, email, created_at
FROM subscribers
WHERE type = 'registration'
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🔐 Security Notes

**Important:** Your database credentials are now stored in `backend/config/database.php`.

**Recommendations:**
1. Don't commit `database.php` to public repositories (already in `.gitignore`)
2. Use strong passwords (you already have one ✓)
3. Consider restricting database access to only your server's IP address
4. Enable HTTPS (SSL certificate) - appears you already have this ✓

---

## 🎯 What Happens Now

When users visit your site:

1. **Email signup:** Data goes to MySQL database (falls back to localStorage if backend fails)
2. **Votes:** Currently localStorage only (can add backend support if needed)
3. **Daily spreads:** Currently localStorage only (can add backend support if needed)

**localStorage fallback ensures the site always works**, even if database is temporarily unavailable.

---

## ✅ Next Steps

After deployment:

1. ✅ Upload files to server
2. ✅ Run `create_tables.sql` in phpMyAdmin
3. ✅ Test by submitting the form
4. ✅ Check database to confirm data saved
5. 🎉 Your data is now permanently stored!

---

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Check server error logs in cPanel
3. Verify all files uploaded correctly
4. Test the database connection directly

The system is designed to gracefully fail to localStorage if backend is unavailable, so your site will work regardless!
