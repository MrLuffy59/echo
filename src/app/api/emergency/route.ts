import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { echoMessage } from "@/echoMessage";

export async function GET() {
  try {
    const [contacts] = await db.query(
      "SELECT id, number, service_name, description FROM emergency_contacts"
    );

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching emergency contacts:", error);
    return NextResponse.json(
      { message: echoMessage.loadingErrorEmergency },
      { status: 500 }
    );
  }
}
