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

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy (zero config)

Or use the Vercel CLI:

```bash
npx vercel
```

## Pages

- `/` — Landing page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Before Publishing

Update in `lib/constants.ts`:

- `APP_STORE` — Actual App Store URL after approval
- `GOOGLE_PLAY` — Actual Google Play URL
- `CONTACT_EMAIL` — Contact email (currently studyroomdevs@gmail.com)
- `URL` — Production domain (e.g. studyroom.app)
