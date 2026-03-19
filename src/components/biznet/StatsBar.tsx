import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Enterprise Clients", value: 200, suffix: "+" },
  { label: "Models Deployed", value: 1500, suffix: "+" },
  { label: "Data Points Processed", value: 12, suffix: "B+" },
  { label: "Uptime SLA", value: 99, suffix: ".9%" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setVal(target);
              clearInterval(timer);
            } else {
              setVal(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl tracking-tight">
      {val.toLocaleString()}{suffix && val > 0 ? suffix : ""}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <AnimatedNumber target={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-3 font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
