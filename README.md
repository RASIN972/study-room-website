# Study Room Website

Marketing landing page for the Study Room mobile app. Deploys to Vercel.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy to Vercel (GitHub)

### 1. Create GitHub repository

```bash
# Create a new repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/study-room-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub)
2. Click **Add New** → **Project**
3. Import your `study-room-website` repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `study-room-website.vercel.app` (or your custom domain)

### 3. (Optional) Connect custom domain

In your Vercel project → **Settings** → **Domains** → add `studyroom.app` or your domain.

## Pages

- `/` — Landing page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Before Publishing

Update in `lib/constants.ts`:

- `APP_STORE` — Actual App Store URL after approval
- `CONTACT_EMAIL` — Contact email (currently studyroomdevs@gmail.com)
- `URL` — Production domain (e.g. studyroom.app)
