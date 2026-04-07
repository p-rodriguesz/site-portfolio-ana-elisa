import Navbar from "./Navbar";
import styles from "./MoreAbout.module.css";

const aboutText = `Substitua este texto pelo conteúdo da sua página "Sobre".
Aqui você pode contar sua trajetória, sua visão como designer e o tipo de trabalho que deseja destacar no portfólio.`;

export default function MoreAbout() {
  return (
    <main className={styles.page} aria-label="Página sobre Ana Elisa">
      <Navbar />

      <section className={styles.content}>
        <p className={styles.kicker}>SOBRE</p>
        <h1 className={styles.title}>Página em construção</h1>

        <div className={styles.textCard}>
          <p>{aboutText}</p>
        </div>

        <a className={styles.backButton} href="/#about">
          ← voltar para a página principal
        </a>
      </section>
    </main>
  );
}

