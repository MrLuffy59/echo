import { unstable_cache } from "next/cache";
import styles from "./page.module.css";
import Link from "next/link";

type Contact = {
  id: string;
  number: string;
  service_name: string;
  description: string;
};

const getCachedContacts = unstable_cache(
  async () => {
    const res = await fetch("http://localhost:3000/api/emergency");
    if (!res.ok) throw new Error("Erreur lors du chargement");
    return res.json();
  },
  ["emergency-contacts"],
  { revalidate: 60 }
);

export default async function ImmediateHelp() {
  const contacts: Contact[] = await getCachedContacts();

  return (
    <main className={styles.helpPage}>
      <Link href="/" className={styles.homeBtn}>
        Accueil
      </Link>
      <h1 className={styles.title}>Aide immédiate</h1>

      <section className={styles.mainContent}>
        <ul className={styles.contactList}>
          {contacts.map((c) => (
            <li key={c.id} className={styles.contactItem}>
              <strong>{c.number}</strong> - {c.service_name}
              <br />
              <span className={styles.desc}>{c.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
