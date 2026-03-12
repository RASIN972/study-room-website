const FEATURES = [
  {
    title: 'Small Groups, Real Pressure',
    description:
      'Rooms of 3–25 people who actually know each other. Not strangers — real accountability.',
  },
  {
    title: 'Streaks & Stats',
    description:
      'Track your study minutes, build streaks, see your progress over time.',
  },
  {
    title: 'Reactions',
    description:
      'Your Room reacts to your sessions with 🔥 💪 🧠 👏 ⭐ — instant motivation.',
  },
  {
    title: 'Privacy First',
    description:
      'Your timelapses are only visible to your Room members. No public feeds. No strangers.',
  },
] as const;

export function Features() {
  return (
    <section id="features" className="border-t border-brand-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <h2 className="font-display text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          Features
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-text-secondary">
          Built for accountability that actually works.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-brand-dark-border bg-white p-8 shadow-sm transition hover:border-brand-orange/30"
            >
              <h3 className="font-sans text-xl font-bold text-brand-text">
                {feature.title}
              </h3>
              <p className="mt-3 text-brand-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
