import { useInView } from "../hooks/useInView";
import { profile } from "../data/content";
import styles from "./About.module.css";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section className={styles.about} id="about">
      <div
        className={`${styles.container} ${inView ? styles.visible : ""}`}
        ref={ref}
      >
        <div className={styles.titleRow}>
          <h2>SOBRE</h2>
          <a
            className={styles.moreButton}
            href="/sobre"
            aria-label="Abrir mais informações sobre a Ana Elisa"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className={styles.subtitle}>— FASHION DESIGNER • {profile.location}</p>

        <div className={styles.infoBlock}>
          <h3>PERFIL</h3>
          <p>{profile.about}</p>
        </div>

        <div className={styles.infoBlock}>
          <h3>ESPECIALIDADES</h3>
          <div className={styles.tags}>
            {profile.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
