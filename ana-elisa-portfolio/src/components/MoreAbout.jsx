import Navbar from "./Navbar";
import { profile } from "../data/content";
import styles from "./MoreAbout.module.css";

export default function MoreAbout() {
  return (
    <main className={styles.page} aria-label="Página MOREABOUT">
      <Navbar />

      <section className={styles.content}>
        <div className={styles.copy}>
          <h1 className={styles.title}>Fashion as self-translation</h1>

          <div className={styles.textCard}>
            <div className={styles.profileBlock}>
              <span className={styles.profileLabel}>Perfil</span>
              <div className={styles.profileText}>{profile.aboutFull}</div>
            </div>

            <div className={styles.profileBlock}>
              <span className={styles.profileLabel}>Foco</span>
              <div className={styles.tagGrid}>
                {profile.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a className={styles.backButton} href="/#about">
            ← voltar para a página principal
          </a>
        </div>

        <aside className={styles.visual} aria-label="Espaço reservado para imagem">
          <div className={styles.visualFrame}>
            <img
              className={styles.visualImage}
              src="/images/8scmbf.webp"
              alt="Retrato editorial da Ana Elisa"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

