import { apiRoutes } from "@/data/ROUTE";
import { echoMessage } from "@/echoMessage";

export type EmergencyContact = {
  id: string;
  number: string;
  service_name: string;
  description: string;
};

export async function getEmergencyContacts(): Promise<EmergencyContact[]> {
  const res = await fetch(apiRoutes.EMERGENCY_CONTACTS, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error(echoMessage.loadingErrorEmergency);
  }

  const data = await res.json();

  return data.map((c: EmergencyContact) => ({
    id: c.id,
    number: c.number,
    service_name: c.service_name,
    description: c.description,
  }));
}
