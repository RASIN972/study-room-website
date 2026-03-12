import { Video, Timer, Film, Users } from 'lucide-react';

const STEPS = [
  {
    icon: Video,
    title: 'Start a Session',
    description:
      'Tap record, set your subject, and start studying.',
  },
  {
    icon: Timer,
    title: 'Study on Camera',
    description:
      'The app captures a timelapse of you studying using your front camera.',
  },
  {
    icon: Film,
    title: 'Get Your Timelapse',
    description:
      "When you're done, your session is stitched into a short timelapse video.",
  },
  {
    icon: Users,
    title: 'Share to Your Room',
    description:
      'Post your timelapse to your accountability group. Prove you put in the work.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-brand-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <h2 className="font-display text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          How It Works
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-text-secondary">
          Four simple steps to stay accountable.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-brand-dark-border bg-white p-8 shadow-sm transition hover:border-brand-orange/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/20 text-brand-orange">
                <step.icon size={24} />
              </div>
              <p className="mt-6 font-sans text-sm font-medium text-brand-orange">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-sans text-xl font-bold text-brand-text">
                {step.title}
              </h3>
              <p className="mt-3 text-brand-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
