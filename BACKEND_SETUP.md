# Backend Setup Guide

## Prerequisites

- **XAMPP**, **WAMP**, **MAMP**, or any local server with PHP and MySQL
- PHP 7.4 or higher
- MySQL 5.7 or higher

## Quick Setup (5 minutes)

### Step 1: Install Local Server

If you don't have a local PHP/MySQL server:

**Windows:** Download [XAMPP](https://www.apachefriends.org/download.html)
**Mac:** Download [MAMP](https://www.mamp.info/en/downloads/)
**Linux:** Install via package manager:
```bash
sudo apt-get install apache2 php mysql-server
```

### Step 2: Start Services

**XAMPP:**
1. Open XAMPP Control Panel
2. Click "Start" for Apache
3. Click "Start" for MySQL

**MAMP:**
1. Open MAMP
2. Click "Start Servers"

### Step 3: Create Database

1. Open **phpMyAdmin**: http://localhost/phpmyadmin
2. Click "Import" tab
3. Choose file: `backend/database/schema.sql`
4. Click "Go"

**OR** run this in terminal:
```bash
mysql -u root -p < backend/database/schema.sql
```

### Step 4: Configure Database Connection

Edit `backend/config/database.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');        // Your MySQL username
define('DB_PASS', '');            // Your MySQL password (often empty for local)
define('DB_NAME', 'sunlight_tarot');
```

### Step 5: Move Files to Web Directory

Copy your entire project to the web server directory:

**XAMPP (Windows):** `C:\xampp\htdocs\sunlight\`
**XAMPP (Linux):** `/opt/lampp/htdocs/sunlight/`
**MAMP (Mac):** `/Applications/MAMP/htdocs/sunlight/`

### Step 6: Update Frontend API URL

Edit `script.js` and set your API URL:

```javascript
const API_BASE_URL = 'http://localhost/sunlight/backend/api';
```

### Step 7: Test

1. Open: http://localhost/sunlight/index.html
2. Try subscribing to the newsletter
3. Check phpMyAdmin to see if the email was saved

## Verification Checklist

- [ ] Apache/PHP server is running
- [ ] MySQL server is running
- [ ] Database `sunlight_tarot` exists
- [ ] Table `subscribers` exists
- [ ] `backend/config/database.php` has correct credentials
- [ ] Files are in the web server directory
- [ ] Can access http://localhost/sunlight/index.html
- [ ] Newsletter signup works and saves to database

## Troubleshooting

### "Database connection failed"
- Check MySQL is running
- Verify credentials in `backend/config/database.php`
- Make sure database `sunlight_tarot` exists

### "CORS error" in browser console
- Make sure you're accessing via `http://localhost` not `file://`
- Check that PHP files have the CORS headers set

### "404 Not Found" for API
- Verify files are in the correct web directory
- Check that Apache is running
- Verify the API_BASE_URL in script.js is correct

### Can't access phpMyAdmin
- **XAMPP:** http://localhost/phpmyadmin
- **MAMP:** http://localhost:8888/phpMyAdmin
- Check that Apache and MySQL are both running

## Database Schema

The database has three tables:

### `subscribers`
- `id` - Auto-increment primary key
- `email` - Unique email address
- `name` - User's name (optional, for full registration)
- `newsletter` - Boolean, opted in to newsletter
- `type` - 'newsletter' or 'registration'
- `created_at` - Timestamp
- `updated_at` - Timestamp

### `votes`
- `id` - Auto-increment primary key
- `image_id` - ID of the voted image
- `ip_address` - Voter's IP
- `user_agent` - Browser info
- `created_at` - Timestamp

### `daily_spreads`
- `id` - Auto-increment primary key
- `email` - User email (optional)
- `reflection_card_id` - Card ID
- `activation_card_id` - Card ID
- `spread_date` - Date of spread
- `created_at` - Timestamp

## API Endpoints

### POST /backend/api/subscribe.php
Subscribe to newsletter or register

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",           // optional
  "newsletter": true,            // optional, default true
  "type": "registration"         // optional: "newsletter" or "registration"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing!",
  "subscriberCount": 42
}
```

### GET /backend/api/count.php
Get total subscriber count

**Response:**
```json
{
  "success": true,
  "count": 42
}
```

## Viewing Your Data

### phpMyAdmin
1. Go to http://localhost/phpmyadmin
2. Click "sunlight_tarot" database
3. Click "subscribers" table
4. View all emails

### MySQL Command Line
```sql
USE sunlight_tarot;
SELECT * FROM subscribers;
SELECT COUNT(*) FROM subscribers;
```

## Export Data

### CSV Export (phpMyAdmin)
1. Open phpMyAdmin
2. Select `subscribers` table
3. Click "Export" tab
4. Choose "CSV" format
5. Click "Go"

### SQL Export
```bash
mysqldump -u root -p sunlight_tarot subscribers > subscribers_backup.sql
```

## Fallback to localStorage

If the backend is not available, the system automatically falls back to localStorage. The frontend checks if the API is reachable and uses localStorage if not.

## Production Deployment

When deploying to a live server:

1. **Update database credentials** in `backend/config/database.php`
2. **Update API_BASE_URL** in `script.js` to your domain
3. **Add SSL certificate** (HTTPS required for production)
4. **Set up automated backups** for the database
5. **Implement rate limiting** to prevent spam
6. **Add email verification** (recommended)

## Next Steps

- Set up automated email sending (SendGrid, Mailchimp, etc.)
- Add admin dashboard to view subscribers
- Implement GDPR compliance (unsubscribe, data export, etc.)
- Add email verification for new subscribers
- Set up automated backups

---

**Questions?** Check the database connection first, verify services are running, and ensure files are in the web directory!
