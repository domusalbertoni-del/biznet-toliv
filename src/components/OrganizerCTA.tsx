import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.webp";
import partnerPos from "@/assets/partner-pos.svg";
import { useLang } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const slides = [dashboardMockup, partnerPos];

const OrganizerCTA = () => {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animState, setAnimState] = useState<"idle" | "exiting" | "entering" | "fading-in">("idle");
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (animState !== "idle") return;
      setDirection(dir);
      setAnimState("exiting");
      setTimeout(() => {
        setDisplayed(index);
        setCurrent(index);
        setAnimState("entering");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimState("fading-in");
            setTimeout(() => setAnimState("idle"), 500);
          });
        });
      }, 250);
    },
    [animState]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideClass =
    animState === "exiting"
      ? direction > 0
        ? "opacity-0 -translate-x-4"
        : "opacity-0 translate-x-4"
      : "opacity-100 translate-x-0";

  return (
    <section className="py-16" ref={ref}>
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className={`rounded-3xl bg-gradient-to-br from-card via-card to-secondary border border-border/50 p-10 md:p-14 relative overflow-hidden reveal-scale ${isVisible ? 'visible' : ''}`}>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl heading-uppercase mb-4">{t.launchingEvent}</h2>
              <p className="text-base text-muted-foreground mb-8 max-w-md">{t.organizerSubtitle}</p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                <a href="https://partner.toliv.com/event/new" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-opacity text-accent-foreground" style={{ background: 'linear-gradient(135deg, hsl(16, 90%, 55%), hsl(350, 80%, 58%))' }}>
                  {t.listMyEvent}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://partner.toliv.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-border text-sm font-medium hover:bg-secondary transition-colors">
                  {t.learnMore}
                </a>
              </div>
            </div>

            <div className="flex-1 max-w-lg relative">
              <div className="flex items-center gap-2">
                <button onClick={prev} className="shrink-0 w-8 h-8 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className={`flex-1 transition-all duration-300 ease-in-out ${slideClass}`}>
                  <img
                    src={slides[displayed]}
                    alt="Partner feature"
                    className="w-full rounded-xl shadow-2xl border border-border/30"
                  />
                  <p className="text-sm text-foreground text-center mt-3 px-2">
                    {t.organizerSlides[displayed].description}
                  </p>
                </div>

                <button onClick={next} className="shrink-0 w-8 h-8 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerCTA;
