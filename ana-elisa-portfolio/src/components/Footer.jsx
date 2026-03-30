import { profile } from "../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} {profile.name.toUpperCase()} • FASHION PORTFOLIO • {profile.location.toUpperCase()}</p>
      <p className={styles.tagline}>{profile.tagline}</p>
    </footer>
  );
}
