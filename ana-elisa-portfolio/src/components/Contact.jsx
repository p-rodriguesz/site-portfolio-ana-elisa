import { useInView } from "../hooks/useInView";
import { profile } from "../data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section className={styles.contact} id="contact">
      <div
        ref={ref}
        className={`${styles.inner} ${inView ? styles.visible : ""}`}
      >
        <h2>CONTATO</h2>

        <div className={styles.grid}>
          <div className={styles.item}>
            <h3>E-MAIL</h3>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className={styles.item}>
            <h3>TELEFONE</h3>
            <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className={styles.instagramButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className={styles.item}>
            <h3>LINKEDIN</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className={styles.item}>
            <h3>INSTAGRAM</h3>

            <a
                href="https://www.instagram.com/elisaswork_/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramButton}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.icon}
              >
                <path
                    d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76
        0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10
        2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3
        3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3
        3-3h10zm-5 3a5 5 0 100 10 5 5 0
        000-10zm0 2a3 3 0 110 6 3 3 0
        010-6zm4.5-2.5a1 1 0 100 2 1 1 0
        000-2z"
                    fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
