import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF5C00',
        'brand-orange-light': '#FF7A33',
        'brand-orange-dark': '#E05200',
        'brand-white': '#FFFFFF',
        'brand-dark': '#1F1F1E',
        'brand-dark-card': '#2A2A29',
        'brand-dark-border': '#E5E7EB',
        'brand-light-bg': '#FAFAFA',
        'brand-light-card': '#FFFFFF',
        'brand-text': '#1F1F1E',
        'brand-text-secondary': '#6B7280',
        'brand-text-muted': '#9CA3AF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
