# SunLight - Tarot & Spiritual Guidance Landing Page

A beautiful, interactive landing page for tarot and spiritual guidance featuring voting galleries, daily card spreads, and community engagement.

## Features

### 1. **Community Voting Gallery**
- Main gallery with 6 featured tarot artwork pieces
- Users can vote once per artwork
- Real-time vote counting
- Vote data persisted in localStorage

### 2. **Double Daily Spread**
- **Reflection Card**: Randomly drawn card that resets daily
- **Activation Card**: User-selected card from full deck
- Daily spreads are saved and persist throughout the day
- Resets automatically at midnight

### 3. **Curated Collections**
- **Major Arcana Gallery**: Displays major arcana cards
- **Minor Arcana Gallery**: Shows minor arcana cards
- **Reader's Choice**: Random selection of cards

### 4. **Newsletter Signup**
- Email collection with validation
- Prevents duplicate subscriptions
- Displays subscriber count
- All emails stored in localStorage

## Getting Started

### Running Locally

1. Simply open `index.html` in your web browser
2. No build process or server required for Phase 1

```bash
# Option 1: Double-click index.html

# Option 2: Use a simple server
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Live Server in VS Code
# Right-click index.html → "Open with Live Server"
```

## Current Data Storage (Phase 1)

All data is currently stored in **localStorage**:

- **Votes**: Gallery vote counts and user vote tracking
- **Emails**: Newsletter subscriber emails
- **Daily Spread**: Today's drawn cards (resets daily)

### Accessing Stored Data

Open browser console (F12) and run:

```javascript
// View all votes
console.log(JSON.parse(localStorage.getItem('votes')));

// View all subscriber emails
console.log(JSON.parse(localStorage.getItem('emails')));

// View today's spread
console.log(JSON.parse(localStorage.getItem('dailySpread')));
```

### Exporting Data

To export data before migration, run in console:

```javascript
// Export all data as JSON
const exportData = {
    votes: JSON.parse(localStorage.getItem('votes')),
    emails: JSON.parse(localStorage.getItem('emails')),
    userVotes: JSON.parse(localStorage.getItem('userVotes')),
    dailySpread: JSON.parse(localStorage.getItem('dailySpread'))
};

console.log(JSON.stringify(exportData, null, 2));
// Copy and save this output
```

## Migration to MySQL + Prisma (Phase 2)

### Database Schema Design

When ready to migrate, here's the recommended Prisma schema:

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model GalleryImage {
  id          String   @id @default(cuid())
  title       String
  description String
  emoji       String
  votes       Int      @default(0)
  createdAt   DateTime @default(now())
  userVotes   UserVote[]
}

model UserVote {
  id        String       @id @default(cuid())
  imageId   String
  userId    String       // Could be IP, session ID, or user ID
  createdAt DateTime     @default(now())
  image     GalleryImage @relation(fields: [imageId], references: [id])

  @@unique([imageId, userId])
}

model Subscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}

model TarotCard {
  id          Int      @id @default(autoincrement())
  name        String
  emoji       String
  meaning     String
  type        String   // "major" or "minor"
  dailySpreads DailySpread[]
}

model DailySpread {
  id             String     @id @default(cuid())
  date           DateTime   @unique @db.Date
  reflectionCard TarotCard? @relation(fields: [reflectionId], references: [id])
  reflectionId   Int?
  createdAt      DateTime   @default(now())
}

model UserSpread {
  id             String     @id @default(cuid())
  userId         String
  date           DateTime   @db.Date
  reflectionId   Int
  activationId   Int
  createdAt      DateTime   @default(now())

  @@unique([userId, date])
}
```

### Migration Steps

#### 1. Setup Backend

```bash
# Create backend folder
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express prisma @prisma/client cors dotenv
npm install -D nodemon

# Initialize Prisma
npx prisma init
```

#### 2. Configure Database

Create `.env` file:

```env
DATABASE_URL="mysql://username:password@localhost:3306/sunlight"
```

#### 3. Create API Endpoints

Create `backend/server.js`:

```javascript
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Vote endpoints
app.post('/api/vote', async (req, res) => {
  const { imageId, userId } = req.body;

  try {
    await prisma.userVote.create({
      data: { imageId, userId }
    });

    await prisma.galleryImage.update({
      where: { id: imageId },
      data: { votes: { increment: 1 } }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Already voted or invalid data' });
  }
});

app.get('/api/votes', async (req, res) => {
  const images = await prisma.galleryImage.findMany({
    include: { _count: { select: { userVotes: true } } }
  });
  res.json(images);
});

// Newsletter endpoints
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const subscriber = await prisma.subscriber.create({
      data: { email }
    });
    res.json({ success: true, subscriber });
  } catch (error) {
    res.status(400).json({ error: 'Email already subscribed' });
  }
});

app.get('/api/subscribers/count', async (req, res) => {
  const count = await prisma.subscriber.count();
  res.json({ count });
});

// Daily spread endpoints
app.get('/api/daily-spread', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let spread = await prisma.dailySpread.findUnique({
    where: { date: today },
    include: { reflectionCard: true }
  });

  if (!spread) {
    // Create new daily spread
    const cards = await prisma.tarotCard.findMany();
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    spread = await prisma.dailySpread.create({
      data: {
        date: today,
        reflectionId: randomCard.id
      },
      include: { reflectionCard: true }
    });
  }

  res.json(spread);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### 4. Update Frontend

Modify `script.js` to use API instead of localStorage:

```javascript
// Replace localStorage calls with fetch calls

async handleVote(imageId) {
    const userId = this.getUserId(); // Generate or get from session

    try {
        const response = await fetch('http://localhost:3000/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageId, userId })
        });

        if (response.ok) {
            await this.loadVotes();
            this.renderVotingGallery();
        }
    } catch (error) {
        console.error('Vote failed:', error);
    }
}

async handleNewsletterSignup() {
    const email = document.getElementById('email-input').value;

    try {
        const response = await fetch('http://localhost:3000/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            this.showMessage('Thank you for subscribing!', 'success');
            await this.loadSubscriberCount();
        }
    } catch (error) {
        this.showMessage('Subscription failed', 'error');
    }
}
```

## Customization

### Adding Your Own Tarot Cards

Edit `script.js` and modify the `TAROT_CARDS` array:

```javascript
const TAROT_CARDS = [
    {
        id: 1,
        name: "Your Card Name",
        emoji: "🎴",
        meaning: "Card meaning here",
        type: "major" // or "minor"
    },
    // ... more cards
];
```

### Adding Real Images

1. Create an `images` folder
2. Add your images
3. Update the gallery rendering in `script.js`:

```javascript
// Replace emoji-based rendering with:
<img src="images/${image.filename}" alt="${image.title}" />
```

### Styling

All styles are in `styles.css`. Key CSS variables:

```css
:root {
    --primary-color: #6B4E9B;    /* Purple */
    --secondary-color: #D4AF37;  /* Gold */
    --accent-color: #FF6B9D;     /* Pink */
    /* Modify these to change the color scheme */
}
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design included

## Future Enhancements

- [ ] User authentication
- [ ] Card reading history
- [ ] Social sharing
- [ ] Admin panel for managing content
- [ ] Advanced analytics
- [ ] Email notifications
- [ ] Payment integration for readings
- [ ] Real-time voting updates

## License

This project is open source and available for personal and commercial use.

---

**Built with ✨ and 🔮**
# SunlightLP
