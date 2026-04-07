import { useMemo } from "react";
import styles from "./FlowerAnimation.module.css";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function FlowerAnimation({ title }) {
  const { frontFlowers, backFlowers } = useMemo(() => {
    const make = (count, layer) =>
      Array.from({ length: count }, (_, index) => {
        const isEdgeFlower = index % 3 === 0;
        const top = isEdgeFlower ? rand(-14, 108) : rand(10, 92);
        const left = isEdgeFlower ? rand(-18, 112) : rand(6, 94);
        const size = rand(layer === "front" ? 54 : 74, layer === "front" ? 134 : 178);
        const rotate = rand(-28, 28);
        const duration = rand(layer === "front" ? 10 : 12, layer === "front" ? 15 : 18);
        const delay = rand(0, 8) * 0.28;
        const opacity = layer === "front" ? 0.96 : 0.64;

        return {
          top: `${top}%`,
          left: `${left}%`,
          size: `${size}px`,
          rotate: `${rotate}deg`,
          duration: `${duration}s`,
          delay: `${delay}s`,
          opacity,
        };
      });

    return {
      backFlowers: make(7, "back"),
      frontFlowers: make(6, "front"),
    };
  }, []);

  const renderFlowers = (flowers, layerClass, imgClass) =>
    flowers.map((f, i) => (
      <span
        key={`${layerClass}-${i}`}
        className={`${styles.flowerContainer} ${layerClass}`}
        style={{
          top: f.top,
          left: f.left,
          width: f.size,
          height: f.size,
          opacity: f.opacity,
          transform: `translate(-50%, -50%) rotate(${f.rotate})`,
          animationDelay: f.delay,
        }}
      >
        <img
          src="/images/O808.svg"
          alt=""
          aria-hidden="true"
          className={`${styles.flowerMark} ${imgClass}`}
          style={{ animationDuration: f.duration, animationDelay: f.delay }}
        />
      </span>
    ));

  return (
    <h2 className={styles.titleWithFlowers}>
      <span className={styles.titleLayer} aria-hidden="true">
        {renderFlowers(backFlowers, styles.flowerBackLayer, styles.flowerBack)}
      </span>

      <span className={styles.titleText}>{title}</span>

      <span className={styles.titleLayer} aria-hidden="true">
        {renderFlowers(frontFlowers, styles.flowerFrontLayer, styles.flowerFront)}
      </span>
    </h2>
  );
}
