import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/biznetData";

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
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl">
      {val.toLocaleString()}{suffix && val > 0 ? suffix : ""}
      {!suffix && val > 0 ? "+" : ""}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <AnimatedNumber target={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
