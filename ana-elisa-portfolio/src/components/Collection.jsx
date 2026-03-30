import { useInView } from "../hooks/useInView";
import { collections } from "../data/content";
import LookItem from "./LookItem";
import styles from "./Collection.module.css";

export default function Collection() {
  const [titleRef, titleInView] = useInView();

  return (
    <section className={styles.collection} id="collection">
      {collections.map((col) => (
        <div key={col.id}>
          {/* Título */}
          <div
            ref={titleRef}
            className={`${styles.title} ${titleInView ? styles.visible : ""}`}
          >
            <h2>{col.title}</h2>
          </div>

          {/* Moodboard full width */}
          {col.moodboard && (
            <div className={styles.fullWidth}>
              <img src={col.moodboard} alt={`Moodboard — ${col.title}`} />
            </div>
          )}

          {/* Descrição da coleção */}
          <div className={styles.description}>
            <h3>{col.subtitle}</h3>
            <p>{col.description}</p>
          </div>

          {/* Croquis full width */}
          {col.croquis && (
            <div className={styles.fullWidth}>
              <img src={col.croquis} alt={`Croquis — ${col.title}`} />
            </div>
          )}

          {/* Looks alternados */}
          {col.looks.map((look, i) => (
            <LookItem key={look.id} look={look} reverse={i % 2 !== 0} />
          ))}
        </div>
      ))}
    </section>
  );
}
