import Link from 'next/link';
import { Logo } from './logo';
import { ArrowLeft } from 'lucide-react';

export function LegalLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen bg-brand-light-bg">
      <header className="sticky top-0 z-50 border-b border-brand-dark-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-brand-text transition hover:text-brand-orange"
          >
            <ArrowLeft size={18} />
            Back to home
          </Link>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h1 className="font-display text-2xl font-bold text-brand-text sm:text-3xl">
          {title}
        </h1>
        <article className="prose mt-8 max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-brand-text prose-p:text-brand-text-secondary prose-li:text-brand-text-secondary prose-a:text-brand-orange prose-a:no-underline hover:prose-a:text-brand-orange-light prose-strong:text-brand-text">
          {children}
        </article>
      </main>
    </div>
  );
}
