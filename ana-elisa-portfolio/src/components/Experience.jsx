import { useInView } from "../hooks/useInView";
import { experiences, certificates } from "../data/content";
import styles from "./Experience.module.css";

function ExpCard({ exp, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3>{exp.title}</h3>
      <p className={styles.period}>{exp.period}</p>
      <p>{exp.description}</p>
    </div>
  );
}

export default function Experience() {
  const [titleRef, titleInView] = useInView();

  return (
    <section className={styles.experience} id="experience">
      <h2
        ref={titleRef}
        className={`${styles.title} ${titleInView ? styles.visible : ""}`}
      >
        EXPERIÊNCIA
      </h2>

      <div className={styles.grid}>
        {experiences.map((exp, i) => (
          <ExpCard key={exp.id} exp={exp} delay={i * 100} />
        ))}
      </div>

      {/* Certificados */}
      {certificates.length > 0 && (
        <div className={styles.certs}>
          <h3 className={styles.certsTitle}>CERTIFICADOS</h3>
          <div className={styles.certGrid}>
            {certificates.map((cert) => (
              <img
                key={cert.id}
                src={cert.image}
                alt={cert.title}
                className={styles.certImg}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
