import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stefania Dolak — Kommunikationsmanagement | VA für Verwaltung \u0026 Organisation",
  description: "Virtuelle Assistenz für Kommunikationsmanagement, Verwaltung \u0026 Organisation. 10 Jahre Erfahrung. Psychologische Beraterin. Systemischer Coach. Remote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
