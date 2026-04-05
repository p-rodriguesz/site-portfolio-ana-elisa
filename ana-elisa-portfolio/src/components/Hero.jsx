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
  },
  {
    src: "/images/david-bowie-hero.webp",
    alt: "David bowie",
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

const slideVariants = {
  from: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.045,
    opacity: 1,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  to: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 0.985,
    opacity: 1,
  }),
};

export default function Hero({ onExitComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(1);

  function moveSlide(direction) {
    setCarouselDirection(direction);
    setActiveSlide((current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  }

  function goToNextSlide() {
    moveSlide(1);
  }

  function goToPreviousSlide() {
    moveSlide(-1);
  }

  useEffect(() => {
    if (isLeaving) return;

    const timer = window.setTimeout(() => {
      goToNextSlide();
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isLeaving]);

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
        <AnimatePresence mode="sync" custom={carouselDirection} initial={false}>
          <motion.img
            key={HERO_SLIDES[activeSlide].src}
            src={HERO_SLIDES[activeSlide].src}
            alt={HERO_SLIDES[activeSlide].alt}
            className={styles.pageImage}
            custom={carouselDirection}
            variants={slideVariants}
            initial="from"
            animate="center"
            exit="to"
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        <div className={styles.pageWash} aria-hidden="true" />

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

