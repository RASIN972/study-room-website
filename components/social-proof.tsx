const TAGLINES = [
  'PROVE IT.',
  'SMALL GROUPS, REAL PRESSURE.',
  'YOUR ROOM IS WATCHING.',
];

export function SocialProof() {
  return (
    <section className="border-t border-brand-dark-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-8 sm:gap-12">
          {TAGLINES.map((tagline) => (
            <p
              key={tagline}
              className="font-display text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="text-brand-orange">{tagline.split(' ')[0]}</span>{' '}
              {tagline.split(' ').slice(1).join(' ')}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
