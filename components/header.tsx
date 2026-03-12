'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './logo';
import { LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-brand-text transition hover:text-brand-orange"
          >
            Features
          </a>
          <Link
            href={LINKS.PRIVACY}
            className="text-sm font-medium text-brand-text transition hover:text-brand-orange"
          >
            Privacy Policy
          </Link>
          <Link
            href={LINKS.TERMS}
            className="text-sm font-medium text-brand-text transition hover:text-brand-orange"
          >
            Terms
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-text md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-brand-dark-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-brand-text"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <Link
              href={LINKS.PRIVACY}
              className="text-sm font-medium text-brand-text"
              onClick={() => setMobileOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href={LINKS.TERMS}
              className="text-sm font-medium text-brand-text"
              onClick={() => setMobileOpen(false)}
            >
              Terms
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
