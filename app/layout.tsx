import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Study Room — Study Together. Prove It.',
  description:
    'Timelapse yourself studying and share sessions with your accountability group. Small groups, real pressure.',
  keywords: [
    'study',
    'accountability',
    'timelapse',
    'study group',
    'productivity',
    'study room',
  ],
  authors: [{ name: 'Study Room' }],
  openGraph: {
    title: 'Study Room — Study Together. Prove It.',
    description:
      'Timelapse yourself studying and share sessions with your accountability group.',
    url: 'https://studyroom.app',
    siteName: 'Study Room',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Room — Study Together. Prove It.',
    description:
      'Timelapse yourself studying and share sessions with your accountability group.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
