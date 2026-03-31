import { useMemo } from "react";
import styles from "./FlowerAnimation.module.css";

// Helper to produce a random integer between min and max (inclusive)
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function FlowerAnimation({ title }) {
  // Generate a stable set of decorative flowers on first render
  const { frontFlowers, backFlowers } = useMemo(() => {
    // Increased defaults per user request
    const frontCount = 12;
    const backCount = 9;

    const make = (count, area) =>
      Array.from({ length: count }).map(() => {
        const top = rand(0, 90);
        const left = rand(-20, 100);
        // Slightly reduce max front size so many flowers don't overcrowd the title
        const size = rand(area === "front" ? 50 : 70, area === "front" ? 140 : 200);
        const rot = rand(-45, 45);
        const opacity = 1; // per request, 100%
        return { top: `${top}%`, left: `${left}%`, size: `${size}px`, rot: `rotate(${rot}deg)`, opacity };
      });

    return {
      frontFlowers: make(frontCount, "front"),
      backFlowers: make(backCount, "back"),
    };
  }, []);

  return (
    <h2 className={styles.titleWithFlowers}>
      {/* Back flowers */}
      {backFlowers.map((f, i) => (
        <span
          key={`back-${i}`}
          className={`${styles.flowerContainer} ${styles.flowerContainerBehind}`}
          style={{ top: f.top, left: f.left, width: f.size, height: f.size, zIndex: 1, opacity: f.opacity }}
          aria-hidden
        >
          <img
            src="/images/O808.svg"
            alt=""
            className={styles.flowerBack}
            style={{ transform: f.rot }}
          />
        </span>
      ))}

      {/* Title text (inherits font & size from the container) */}
      <span className={styles.titleText}>{title}</span>

      {/* Front flowers */}
      {frontFlowers.map((f, i) => (
        <span
          key={`front-${i}`}
          className={`${styles.flowerContainer} ${styles.flowerContainerFront}`}
          style={{ top: f.top, left: f.left, width: f.size, height: f.size, zIndex: 5, opacity: f.opacity }}
          aria-hidden
        >
          <img
            src="/images/O808.svg"
            alt=""
            className={styles.flowerFront}
            style={{ transform: f.rot }}
          />
        </span>
      ))}
    </h2>
  );
}
