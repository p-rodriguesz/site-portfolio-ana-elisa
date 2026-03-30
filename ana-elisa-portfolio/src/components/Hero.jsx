import styles from "./Hero.module.css";

// Substitua pelo caminho da sua imagem hero
const HERO_IMAGE = "/images/hero.jpg";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img src={HERO_IMAGE} alt="Ana Elisa Alves — Fashion Portfolio" />
    </section>
  );
}
