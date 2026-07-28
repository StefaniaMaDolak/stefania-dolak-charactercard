import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET() {
  // QR-Code zeigt auf diese Charactercard-Seite
  const url = "https://stefania-dolak-charactercard.vercel.app";

  // SVG QR-Code generieren
  const svg = await QRCode.toString(url, {
    type: "svg",
    width: 400,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
