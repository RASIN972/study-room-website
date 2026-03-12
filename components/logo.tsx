export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-10 w-10 shrink-0">
        <div
          className="absolute h-10 w-10 rounded-lg bg-brand-dark"
          style={{ left: 0, top: 0 }}
        />
        <div
          className="absolute h-10 w-10 rounded-lg bg-brand-orange"
          style={{ left: 7, top: 7 }}
        />
      </div>
      <span className="font-display text-xl font-bold tracking-widest text-brand-text">
        STUDY ROOM
      </span>
    </div>
  );
}
