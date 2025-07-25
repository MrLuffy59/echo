const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export const apiRoutes = {
  EMERGENCY_CONTACTS: `${apiUrl}/emergency`,
  EMERGENCY_ID: (id: string) => `${apiUrl}/emergency/${id}`,
};

export const appRoutes = {
  HOME: `${appUrl}/`,
  IMMEDIATE_HELP: `${appUrl}/immediate-help`,
  EMERGENCY_CONTACTS: `${appUrl}/emergency-contacts`,
  EMERGENCY_ID: (id: string) => `${appUrl}/emergency-contacts/${id}`,
};
