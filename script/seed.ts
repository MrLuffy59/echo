import "dotenv/config";
import mysql from "mysql2/promise";

const { MYSQL_DB_HOST, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_NAME } =
  process.env;

const emergencyContacts = [
  {
    number: "3919",
    service_name: "Violences conjugales",
    description: "Gratuit, anonyme, 24h/24 et 7j/7. Écoute et accompagnement.",
  },
  {
    number: "17",
    service_name: "Police - Gendarmerie",
    description: "Urgence vitale. Intervention immédiate.",
  },
  {
    number: "114",
    service_name: "Urgence SMS sourds/malentendants",
    description:
      "Envoi de SMS pour personnes avec troubles de la parole ou audition.",
  },
  {
    number: "112",
    service_name: "Numéro d'urgence européen",
    description: "Fonctionne dans toute l'Europe depuis un mobile ou fixe.",
  },
  {
    number: "15",
    service_name: "SAMU",
    description:
      "Urgence médicale. Appeler en cas de danger physique ou besoin de soins.",
  },
];

const seed = async () => {
  try {
    const connection = await mysql.createConnection({
      host: MYSQL_DB_HOST,
      user: MYSQL_DB_USER,
      password: MYSQL_DB_PASSWORD,
      database: MYSQL_DB_NAME,
    });

    for (const { number, service_name, description } of emergencyContacts) {
      await connection.query(
        "INSERT INTO emergency_contacts (number, service_name, description) VALUES (?, ?, ?)",
        [number, service_name, description]
      );
    }

    console.log("Seed completed successfully.");
    await connection.end();
  } catch (error) {
    console.error("An error occurred during seeding:", error);
  }
};

seed();
