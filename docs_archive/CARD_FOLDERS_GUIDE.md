# Card Folder Structure Guide

## 📁 Folder Organization

Your card images are now organized into 5 categories:

```
images/cards/
├── major/      - Major Arcana cards (22 cards)
├── minor/      - Minor Arcana cards (56 cards)
├── court/      - Court cards (16 cards - Pages, Knights, Queens, Kings)
├── special/    - Special cards, Oracle cards, or custom additions
└── featured/   - Featured artwork for the voting gallery
```

## 🔄 How to Migrate Your Current Cards

### Step 1: Move Images to Folders

Organize your 48 current card images from `images/cards/` into the appropriate subfolders:

**Major Arcana** → `images/cards/major/`
- The Fool, The Daydreamer, The Awakened One, etc.

**Court & Minor Arcana** → `images/cards/minor/` or `images/cards/court/`
- Queen of Swords, Prince of Cups, Two of Roses, etc.

**Voting Gallery Images** → `images/cards/featured/`
- Your 6 best images for community voting

### Step 2: Update Image Paths in script.js

Open `script.js` and update the image paths to include the folder prefix:

**Before:**
```javascript
{ id: 1, name: "The Fool", image: "card_name.png", type: "major" }
```

**After:**
```javascript
{ id: 1, name: "The Fool", image: "major/card_name.png", type: "major" }
```

### Step 3: Update Gallery Images

For the voting gallery images in `script.js`:

**Before:**
```javascript
const GALLERY_IMAGES = [
    { id: 'g1', title: 'The Moonlit Pool', image: '2._Sepia_notebook...png' }
]
```

**After:**
```javascript
const GALLERY_IMAGES = [
    { id: 'g1', title: 'The Moonlit Pool', image: 'featured/2._Sepia_notebook...png' }
]
```

## 📝 Quick Migration Script

You can move files manually or use this command structure:

```bash
# Example: Move a major arcana card
mv images/cards/The_Fool.png images/cards/major/

# Example: Move all Queen cards to court folder
mv images/cards/*Queen*.png images/cards/court/

# Example: Move featured gallery images
mv images/cards/featured_image_1.png images/cards/featured/
```

## 🎯 Benefits of This Organization

1. **Easier Management** - Find cards by category quickly
2. **Better Organization** - Separate card types logically
3. **Scalability** - Easy to add new cards to the right category
4. **Cleaner Code** - Image paths indicate card type
5. **Future Database Migration** - Folder structure matches card categories

## 🔍 Current Structure vs New Structure

### Current (Flat):
```
images/cards/
├── card1.png
├── card2.png
├── card3.png
└── ... (all 48 mixed together)
```

### New (Organized):
```
images/cards/
├── major/
│   ├── 01_The_Fool.png
│   ├── 02_The_Daydreamer.png
│   └── ...
├── minor/
│   ├── Two_of_Roses.png
│   ├── Three_Spilled_Cups.png
│   └── ...
├── court/
│   ├── Queen_of_Swords.png
│   ├── Prince_of_Cups.png
│   └── ...
├── special/
│   └── ... (custom cards)
└── featured/
    ├── moonlit_pool.png
    ├── awakened_one.png
    └── ... (6 gallery images)
```

## ⚡ Quick Start

1. **Move images** to appropriate folders
2. **Update `script.js`** - add folder prefix to all image paths
3. **Test the page** - verify all images load correctly
4. **Done!** Your cards are now organized

---

**Note:** The code is already prepared for this structure. You just need to move the files and update the paths!
