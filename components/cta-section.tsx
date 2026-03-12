import { DownloadBadges } from './download-badges';
import { SITE } from '@/lib/constants';

export function CtaSection() {
  return (
    <section className="border-t border-brand-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
            Ready to study?
          </h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Download {SITE.NAME} and start proving it.
          </p>
          <div className="mt-10 flex justify-center">
            <DownloadBadges />
          </div>
          <p className="mt-8">
            <a
              href={`mailto:${SITE.CONTACT_EMAIL}`}
              className="text-brand-orange transition hover:text-brand-orange-light hover:underline"
            >
              Questions? Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
