import Link from 'next/link';
import { Logo } from './logo';
import { LINKS, SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-brand-dark-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <Logo className="opacity-90" />
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href={LINKS.PRIVACY}
              className="text-brand-text-muted transition hover:text-brand-orange"
            >
              Privacy Policy
            </Link>
            <Link
              href={LINKS.TERMS}
              className="text-brand-text-muted transition hover:text-brand-orange"
            >
              Terms of Service
            </Link>
            <a
              href={`mailto:${SITE.CONTACT_EMAIL}`}
              className="text-brand-text-muted transition hover:text-brand-orange"
            >
              Contact
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-brand-text-muted">
          © {SITE.COPYRIGHT_YEAR} {SITE.NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
