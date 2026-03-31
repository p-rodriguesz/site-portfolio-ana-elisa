import styles from "./Hero.module.css";

// Placeholder hero image (replace with your real .jpg/.webp when available)
const HERO_IMAGE = "/images/hero.svg";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img src={HERO_IMAGE} alt="Ana Elisa Alves — Fashion Portfolio" />
    </section>
  );
}
