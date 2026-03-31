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
            <h3>WHATSAPP</h3>
            <a
              href="https://wa.me/556196131810"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
              aria-label="Enviar mensagem no WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path
                  fill="currentColor"
                  d="M20.52 3.48A11.69 11.69 0 0012 0C5.37 0 .06 5.33 0 12.05 0 14.89 1.1 17.6 3 19.68L2 24l5-1.31A11.69 11.69 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.19-3.48-8.52zM17.09 14.4c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.54.12-.15.24-.6.8-.74.96-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.6-1.15-1.33-1.29-1.6-.14-.26-.01-.4.1-.52.1-.1.22-.27.34-.4.12-.13.15-.23.22-.37.06-.14.02-.26-.04-.36-.06-.1-.54-1.28-.74-1.76-.2-.48-.39-.42-.54-.42-.14 0-.3 0-.46 0-.16 0-.4.06-.61.29-.21.23-.79.76-.79 1.86 0 1.1.74 2.14.84 2.29.11.15 1.56 2.38 3.78 3.51 2.15 1.06 2.67.91 3.09.86.42-.05 1.34-.55 1.54-1.1.2-.55.2-1.07.14-1.18-.06-.12-.22-.18-.46-.3z"
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
