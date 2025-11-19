# 📤 Upload Checklist - Security & Content Updates

## Files to Upload to Server

### ✅ Upload These Files:

```
/sunlight/
├── index.html                    ← UPDATED (new tab, fixed counts)
├── script.js                     ← UPDATED (honeypot check)
├── robots.txt                    ← NEW (for Google)
├── .htaccess                     ← NEW (security headers)
└── backend/
    └── api/
        └── subscribe.php         ← UPDATED (rate limiting, validation)
```

---

## Step-by-Step Upload Instructions

### **1. Upload Updated Files**

**Via cPanel File Manager:**
1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html/sunlight/`
4. Upload and **REPLACE** these files:
   - `index.html`
   - `script.js`
5. Upload **NEW** files to same directory:
   - `robots.txt`
   - `.htaccess`
6. Navigate to `public_html/sunlight/backend/api/`
7. Upload and **REPLACE**:
   - `subscribe.php`

**Via FTP (FileZilla):**
1. Connect to your server
2. Navigate to `/public_html/sunlight/`
3. Upload files (overwrite when prompted)

---

## 🧪 Testing After Upload

### **Test 1: Content Updates ✓**

**Visit:** `https://johnmogi.com/sunlight/`

**Check:**
- [ ] Site loads without errors
- [ ] "About" section opens
- [ ] "Card Transformations" tab exists (3rd tab)
- [ ] "The Fifth Element" tab shows "10 cards total" not "22"
- [ ] All tabs load correctly

---

### **Test 2: Robots.txt ✓**

**Visit:** `https://johnmogi.com/sunlight/robots.txt`

**Should see:**
```
# robots.txt for SunLight Tarot
User-agent: *
Allow: /
Disallow: /backend/
...
```

- [ ] robots.txt file loads
- [ ] Shows correct content

---

### **Test 3: Security Headers ✓**

**Check with Browser DevTools:**
1. Open site: `https://johnmogi.com/sunlight/`
2. Press F12 → Network tab
3. Refresh page
4. Click on first request (HTML file)
5. Look at Response Headers

**Should see:**
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`

- [ ] Security headers present

---

### **Test 4: Registration Form (Human) ✓**

**Normal Registration:**
1. Click "Get Early Access"
2. Fill in:
   - Name: Test User
   - Email: your-real-email@example.com
3. Submit

**Expected:**
- [ ] Form submits successfully
- [ ] Shows "Welcome" message
- [ ] Email saved to database

**Verify in phpMyAdmin:**
- [ ] Check `subscribers` table
- [ ] Your test email should appear

---

### **Test 5: Bot Protection (Honeypot) ✓**

**Simulate Bot:**
1. Open browser console (F12)
2. Click "Get Early Access"
3. In console, type:
   ```javascript
   document.getElementById('reg-website').value = 'bot-filled-this';
   ```
4. Fill form normally and submit

**Expected:**
- [ ] Shows "success" message (fake)
- [ ] Email NOT saved to database (check phpMyAdmin)
- [ ] Console shows: "Bot detected via honeypot"

---

### **Test 6: Rate Limiting ✓**

**Rapid Submissions:**
1. Click "Get Early Access"
2. Submit form
3. Immediately submit again
4. Immediately submit 3rd time
5. Try 4th time

**Expected after 3 submissions:**
- [ ] 4th attempt shows "Too many requests"
- [ ] Wait 60 seconds
- [ ] Can submit again successfully

---

### **Test 7: Input Validation ✓**

**Test Invalid Email:**
- Try email: `notanemail`
- [ ] Should reject with "Invalid email address"

**Test Long Name:**
- Try name with 300+ characters
- [ ] Should reject with "Name is too long"

**Test XSS Attempt:**
- Try name: `<script>alert('test')</script>`
- [ ] Should save as plain text (tags stripped)

---

## 🚨 Troubleshooting

### **Issue: .htaccess Causes 500 Error**

**Solution:**
1. Remove `.htaccess` file
2. Re-upload with fewer rules
3. Test which section causes issue
4. Your server might not support certain modules

**Quick Fix:**
Create minimal `.htaccess`:
```apache
Options -Indexes
<Files "database.php">
    Order allow,deny
    Deny from all
</Files>
```

---

### **Issue: Robots.txt Not Loading**

**Check:**
1. File uploaded to correct location (`/sunlight/` not `/sunlight/backend/`)
2. File named exactly `robots.txt` (lowercase)
3. File permissions: 644

---

### **Issue: Security Headers Not Showing**

**Possible causes:**
1. `.htaccess` not uploaded
2. Server doesn't support `mod_headers`
3. `.htaccess` overridden by server config

**Still secure without headers** - backend protections are most important!

---

### **Issue: Rate Limiting Too Strict**

**If legitimate users are blocked:**

Edit `subscribe.php` line 23-24:
```php
$rate_limit_window = 120; // Change to 2 minutes
$max_requests = 5; // Change to 5 requests
```

---

## ✅ Final Verification

After all tests pass:

- [ ] Content updates visible
- [ ] robots.txt accessible
- [ ] Registration works for humans
- [ ] Bots are blocked
- [ ] Rate limiting active
- [ ] Validation working
- [ ] Database saving correctly
- [ ] No console errors
- [ ] Site loads fast
- [ ] Images displaying

---

## 🎉 Success Criteria

**Your site is ready when:**

✅ All 7 tests pass
✅ No console errors
✅ Content is accurate
✅ Forms work smoothly
✅ Bots are blocked
✅ Security headers active (if supported)
✅ Database receiving real signups

---

## 📞 Quick Support

**If something isn't working:**

1. Check browser console (F12) for errors
2. Check server error logs in cPanel
3. Verify all files uploaded to correct locations
4. Check file permissions (644 for files, 755 for directories)
5. Test in incognito/private browsing mode

---

**Upload these files now, then run through the tests!** 🚀
