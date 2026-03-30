import { useState } from "react";
import { useInView } from "../hooks/useInView";
import Lightbox from "./Lightbox";
import styles from "./LookItem.module.css";

export default function LookItem({ look, reverse = false }) {
  const [ref, inView] = useInView();
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className={`${styles.look} ${reverse ? styles.reverse : ""} ${inView ? styles.visible : ""}`}
      >
        {/* Imagem clicável */}
        <div className={styles.imageWrap} onClick={() => setLightbox(true)}>
          <img src={look.image} alt={look.title} />
          <span className={styles.zoom}>↗</span>
        </div>

        {/* Informações */}
        <div className={styles.info}>
          <h3>{look.title}</h3>
          <p>{look.description}</p>
          <p className={styles.materials}>{look.materials}</p>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={look.image}
          alt={look.title}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
}
