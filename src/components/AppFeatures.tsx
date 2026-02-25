import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import appFeed from "@/assets/app-feed.png";
import appResale from "@/assets/app-resale.webp";
import appMatchMode from "@/assets/app-match-mode.png";
import appXp from "@/assets/app-xp.png";
import appWallet from "@/assets/app-wallet.png";
import { useLang } from "@/contexts/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [appFeed, appMatchMode, appXp, appWallet];
const accents = ["primary", "accent", "primary", "accent"] as const;

const AppFeatures = () => {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animState, setAnimState] = useState<"idle" | "exiting" | "entering">("idle");
  const [direction, setDirection] = useState(0);
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal();

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (animState !== "idle") return;
      setDirection(dir);
      setAnimState("exiting");
      // After exit animation, swap content and enter
      setTimeout(() => {
        setDisplayed(index);
        setCurrent(index);
        setAnimState("entering");
        // After enter animation, go idle
        setTimeout(() => {
          setAnimState("idle");
        }, 300);
      }, 250);
    },
    [animState]
  );

  const next = useCallback(() => {
    goTo((current + 1) % t.features.length, 1);
  }, [current, goTo, t.features.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + t.features.length) % t.features.length, -1);
  }, [current, goTo, t.features.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const feat = t.features[displayed];
  const accent = accents[displayed];

  const slideClass =
    animState === "exiting"
      ? direction > 0
        ? "opacity-0 -translate-x-6"
        : "opacity-0 translate-x-6"
      : animState === "entering"
      ? "opacity-100 translate-x-0"
      : "opacity-100 translate-x-0";

  return (
    <section className="py-16" ref={ref}>
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className={`text-center mb-10 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl heading-uppercase mb-3">
            {t.appFeaturesTitle} <span className="text-gradient">{t.appFeaturesTitleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            {t.appFeaturesSubtitle}
          </p>
        </div>

        <div className={`relative max-w-3xl mx-auto reveal ${isVisible ? 'visible' : ''} reveal-delay-2`}>
          <div className="rounded-2xl overflow-hidden bg-card border border-border/50 p-6 md:p-8">
            <div className={`transition-all duration-300 ease-in-out ${slideClass}`}>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                    {displayed + 1} / {t.features.length}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{feat.description}</p>
                </div>
                <div className="flex-1 max-w-[280px] h-[400px] flex items-center justify-center">
                  <img src={images[displayed]} alt={feat.title} className="max-w-full max-h-full object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {t.features.map((_, i) => (
              <button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
            ))}
          </div>
        </div>

        <div className={`flex justify-center mt-8 reveal ${isVisible ? 'visible' : ''} reveal-delay-3`}>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary">
            {t.downloadApp}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
