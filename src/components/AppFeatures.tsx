import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import appFeed from "@/assets/app-feed.webp";
import appResale from "@/assets/app-resale.webp";

const features = [
  {
    title: "Descubre los mejores eventos",
    description: "Feed personalizado de eventos según tu ubicación, gustos y amigos. Filtra por género, ciudad o zona universitaria.",
    image: appFeed,
    accent: "primary" as const,
  },
  {
    title: "Revende tickets sin drama",
    description: "Marketplace P2P para revender entradas de eventos agotados. Seguro, rápido y dentro de la app.",
    image: appResale,
    accent: "accent" as const,
  },
  {
    title: "Match Mode — Conecta en eventos",
    description: "Haz swipe para conectar con otros asistentes antes o durante el evento. Chat se desbloquea con match.",
    image: appFeed,
    accent: "primary" as const,
  },
  {
    title: "Gana XP y recompensas",
    description: "Gana puntos XP por comprar tickets, asistir a eventos, invitar amigos y más. Sube de nivel y desbloquea beneficios.",
    image: appResale,
    accent: "accent" as const,
  },
  {
    title: "Wallet de tickets con QR",
    description: "Todas tus entradas en un solo lugar con código QR para entrar al evento. Transfiere tickets a tus amigos.",
    image: appFeed,
    accent: "primary" as const,
  },
  {
    title: "LIVTO Token — Crypto rewards",
    description: "Gana tokens LIVTO en Solana por tu actividad. Úsalos para descuentos, tips a artistas y más.",
    image: appResale,
    accent: "accent" as const,
  },
];

const AppFeatures = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % features.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + features.length) % features.length, -1);
  }, [current, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const feat = features[current];

  return (
    <section className="py-16">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl heading-uppercase mb-3">
            Todo en <span className="text-gradient">una app</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Descubre, compra tickets, conecta y gana recompensas — todo desde Toliv.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div
            className={`rounded-2xl overflow-hidden bg-card border border-border/50 p-6 md:p-8 transition-all duration-300 ${
              isAnimating
                ? direction > 0
                  ? "opacity-0 translate-x-8"
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    feat.accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {current + 1} / {features.length}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{feat.description}</p>
              </div>
              <div className="flex-1 max-w-[280px]">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Descarga la app
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
