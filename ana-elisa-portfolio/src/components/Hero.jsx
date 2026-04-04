import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Hero.module.css";

const HERO_SLIDES = [
  {
    src: "/images/hero-image.webp",
    alt: "Hero editorial image",
  },
  {
    src: "/images/keep-fashion-weird.webp",
    alt: "Keep fashion weird editorial image",
  },
  {
    src: "/images/dont-complain.webp",
    alt: "Dont complain",
  }
];

const heroVariants = {
  idle: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    rotateZ: 0,
    scale: 1,
  },
  leaving: {
    y: "-112vh",
    opacity: 0,
    rotateX: 8,
    rotateZ: -1,
    scale: 0.985,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero({ onExitComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (isLeaving) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isLeaving]);

  function goToPreviousSlide() {
    setActiveSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }

  function goToNextSlide() {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  }

  function handleDiscover() {
    if (!isLeaving) {
      setIsLeaving(true);
    }
  }

  return (
    <motion.section
      className={styles.hero}
      initial={false}
      animate={isLeaving ? "leaving" : "idle"}
      variants={heroVariants}
      onAnimationComplete={() => {
        if (isLeaving) {
          onExitComplete?.();
        }
      }}
    >
      <div className={styles.pageFrame}>
        <AnimatePresence mode="wait">
          <motion.img
            key={HERO_SLIDES[activeSlide].src}
            src={HERO_SLIDES[activeSlide].src}
            alt={HERO_SLIDES[activeSlide].alt}
            className={styles.pageImage}
            initial={{ opacity: 0, scale: 1.035, x: 32 }}
            animate={{ opacity: 1, scale: 1.02, x: 0 }}
            exit={{ opacity: 0, scale: 1.035, x: -32 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        <div className={styles.paperWash} aria-hidden="true" />

        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={goToPreviousSlide}
          aria-label="Imagem anterior"
          type="button"
          disabled={isLeaving}
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={goToNextSlide}
          aria-label="Próxima imagem"
          type="button"
          disabled={isLeaving}
        >
          <span aria-hidden="true">›</span>
        </button>

        <button
          className={styles.revealButton}
          onClick={handleDiscover}
          aria-label="Toque para descobrir"
          disabled={isLeaving}
        >
          toque para descobrir
        </button>
      </div>
    </motion.section>
  );
}

