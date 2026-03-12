import { Logo } from './logo';
import { DownloadBadges } from './download-badges';
import { PhoneMockup } from './phone-mockup';
import { SITE } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-center">
          <Logo className="mb-8" />
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-text sm:text-5xl lg:text-6xl xl:text-7xl">
            {SITE.TAGLINE}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-brand-text-secondary sm:text-xl">
            {SITE.DESCRIPTION}
          </p>
          <div className="mt-10">
            <DownloadBadges />
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
