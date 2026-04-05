import styles from "./MoreAbout.module.css";

export default function MoreAbout() {
  return (
    <main className={styles.page} aria-label="Página em branco para desenvolvimento">
      <a className={styles.backButton} href="/#sobre">
        ← voltar para a página principal
      </a>
    </main>
  );
}

