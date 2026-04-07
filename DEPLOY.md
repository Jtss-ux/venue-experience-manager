# Deployment Instructions

## Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd venue-experience-manager
vercel --prod
```

## Option 2: Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
cd venue-experience-manager
netlify deploy --prod --dir=dist
```

## Option 3: Firebase Hosting

1. Login to Firebase:
```bash
firebase login
```

2. Deploy:
```bash
cd venue-experience-manager
firebase deploy --only hosting
```

## Option 4: GitHub Pages

1. Go to GitHub Repository Settings
2. Navigate to Pages
3. Select "main" branch and /dist folder
4. Save

## Option 5: Manual Upload (Netlify Drop)

1. Go to https://app.netlify.com/drop
2. Drag and drop the `dist` folder
3. Get your live URL

---

**After deployment**, update your submission with:
- GitHub Repository: https://github.com/Jtss-ux/venue-experience-manager
- Deployed Link: [YOUR_LIVE_URL]
- Blog Link: [YOUR_BLOG_URL]