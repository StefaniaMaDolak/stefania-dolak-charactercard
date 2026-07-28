import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCQ Charactercard — Erkannt werden für das, was wirklich zählt",
  description: "Deine digitale Visitenkarte. Immer griffbereit. Mit QR-Code, zum Speichern statt nur Anschauen.",
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
