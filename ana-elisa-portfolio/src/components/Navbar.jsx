import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Início",     href: "#hero" },
  { label: "Sobre",      href: "#about" },
  { label: "Coleção",    href: "#collection" },
  { label: "Experiência",href: "#experience" },
  { label: "Contato",    href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#hero" className={styles.logo}>AEA</a>

      {/* Hamburguer */}
      <button
        className={`${styles.toggle} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Links */}
      <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={handleLink}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
