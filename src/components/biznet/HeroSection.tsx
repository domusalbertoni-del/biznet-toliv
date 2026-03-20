import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

const ALPHABETS = "你好世界未来智能網絡事件АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯαβγδεζηθλμπσφψωアイウエオカキクケコ가나다라마바사아자차카타파하";

const useTextScramble = (text: string, delay = 300) => {
  const words = text.split(" ");
  const [resolvedCount, setResolvedCount] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);

  useEffect(() => {
    // Initialize all words as scrambled
    setScrambledWords(
      words.map((w) =>
        w.split("").map((c) => (c === " " ? " " : ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)])).join("")
      )
    );

    const startTimeout = setTimeout(() => {
      let wordIdx = 0;

      const resolveNext = () => {
        if (wordIdx >= words.length) return;

        const currentWord = words[wordIdx];
        const targetIdx = wordIdx;
        let frame = 0;
        const frames = 8;

        const interval = setInterval(() => {
          frame++;
          const progress = frame / frames;

          setScrambledWords((prev) => {
            const next = [...prev];
            next[targetIdx] = currentWord
              .split("")
              .map((char, ci) => {
                if (progress > (ci / currentWord.length) + 0.2) return char;
                return ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
              })
              .join("");
            return next;
          });

          if (frame >= frames) {
            clearInterval(interval);
            setScrambledWords((prev) => {
              const next = [...prev];
              next[targetIdx] = currentWord;
              return next;
            });
            setResolvedCount(targetIdx + 1);
            wordIdx++;
            setTimeout(resolveNext, 40);
          }
        }, 25);
      };

      resolveNext();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, []);

  return scrambledWords.join(" ");
};

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef<HTMLVideoElement>(null);
  const display = useTextScramble("Know who to talk to. Before you say hello.", 300);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Seek back 0.3s before end for seamless loop
      if (video.duration && video.currentTime > video.duration - 0.3) {
        video.currentTime = 0.1;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,25%,93%)] via-[hsl(25,15%,78%)] to-[hsl(20,8%,55%)]" />
      <div className="dark:hidden absolute inset-0" />
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,8%)] via-[hsl(0,0%,15%)] to-[hsl(0,0%,25%)]" />

      <div
        className="absolute inset-0 flex items-center justify-center -translate-y-20 md:-translate-y-28"
        style={{ mixBlendMode: isDark ? "screen" : "multiply" }}
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
            style={isDark ? { filter: "invert(1)" } : undefined}
            src="/videos/hero-cube.mp4"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-foreground/60 mb-5">
            AI-powered corporate networking
          </p>

          <h1 className="font-display font-bold text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight mb-8">
            {display}
          </h1>

          <Link
            to="/signup"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm font-semibold tracking-wider uppercase hover:bg-background transition-all border border-border/50 not-italic"
            style={{ fontFamily: "'Moonwalk', sans-serif" }}
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-amber-200 inline-block" />
            Get Started
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
