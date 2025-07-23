import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "echo",
  description: "Une écoute, une aide, un espace sûr pour toi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="https://www.google.com" className="exitButton">
          Exit
        </a>
        {children}
      </body>
    </html>
  );
}
