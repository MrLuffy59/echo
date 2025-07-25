import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Echo</h1>
        <h2 className={styles.h2}>
          Une écoute, une aide, un espace sûr pour toi.
        </h2>
      </header>

      <section className={styles.mainContent}>
        <div className={styles.menuAndGesture}>
          <nav className={styles.menu}>
            <Link href="/temoignages" className={styles.menuLink}>
              Lire les témoignages et partager mon histoire
            </Link>
            <Link href="/aide" className={styles.menuLink}>
              Où trouver de l'aide ?
            </Link>
          </nav>

          <section className={styles.gesture}>
            <div className={styles.gestureBox}>
              <Link href="/immediate-help" className={styles.safetyGesture}>
                <img
                  src="/safetygesture.png"
                  alt="Geste de sécurité"
                  className={styles.safetyGestureImage}
                />
                <div className={styles.clickSecure}>
                  Clique ici en toute sécurité
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
