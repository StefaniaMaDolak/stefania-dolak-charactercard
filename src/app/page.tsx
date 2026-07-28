"use client";

import SaveContactButton from "@/components/SaveContactButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
            <img src="/logo.jpg" alt="Stefania Dolak" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Stefania Dolak</h1>
          <p className="text-xl text-gray-300 mb-4">VA für Kommunikationsmanagement</p>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Erkannt werden für das was wirklich zählt · Van-Life · Remote · CCQ
          </p>
        </div>
      </section>

      {/* PROFIL */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Profil</h2>
          <div className="space-y-4 text-gray-700">
            <p>Ich bin Stefania — eine hochsensible, detailverliebte Frau, die ihre Stärken in Struktur, Empathie und visuelles Denken in den Dienst anderer stellt.</p>
            <p>Derzeit arbeite ich als Remote-VA (Virtual Assistant) für Kommunikationsmanagement. Parallel baue ich mit meinem KI-Assistenten Hermes mein eigenes Produkt: <strong>CCQ Charactercard</strong> — die digitale Visitenkarte, die im Telefon lebt.</p>
            <p>Mein Weg: Kurzfristig professionelle VA-Dienstleistungen, langfristig CCQ als eigenes Format für Selbstständige, Gastronomen und Praxen.</p>
          </div>
        </div>
      </section>

      {/* CHARAKTER */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Charakter</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["Hochsensibel", "Detailverliebt", "Pragmatisch", "Visuell", "Lernbereit", "Ehrlich"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">{tag}</span>
            ))}
          </div>
          <p className="text-gray-700 text-center max-w-lg mx-auto">Was mich ausmacht: Ich denke nutzerfristig, lehne Reibung ab und suche immer die eleganteste Lösung. Höchste UX-Standards — für mich selbst und für meine Kunden.</p>
        </div>
      </section>

      {/* NETZWERK */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Netzwerk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg"><h3 className="font-bold mb-1">DaVinci</h3><p className="text-sm text-gray-600">Mentor & strategische Beratung</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><h3 className="font-bold mb-1">Hermes</h3><p className="text-sm text-gray-600">KI-Assistent & Tech-Partner</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><h3 className="font-bold mb-1">Deniz</h3><p className="text-sm text-gray-600">IT-Infrastruktur & Server</p></div>
            <div className="bg-gray-50 p-4 rounded-lg"><h3 className="font-bold mb-1">Cash Kingsley</h3><p className="text-sm text-gray-600">Finanz-Assistent (in Aufbau)</p></div>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Angebot</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4"><h3 className="font-bold text-lg mb-1">CCQ Charactercard</h3><p className="text-sm text-gray-600 mb-2">Die digitale Visitenkarte für dein Telefon</p><p className="text-sm text-gray-700">5 Bereiche: Profil · Charakter · Team · Angebot · Specials. Individuell für jeden Kunden. Preis auf Anfrage.</p></div>
            <div className="border border-gray-200 rounded-lg p-4"><h3 className="font-bold text-lg mb-1">Virtual Assistance</h3><p className="text-sm text-gray-600 mb-2">Kommunikationsmanagement & Organisation</p><p className="text-sm text-gray-700">E-Mail-Management, Terminierung, Recherche, Dokumentation, Koordination.</p></div>
            <div className="border border-gray-200 rounded-lg p-4"><h3 className="font-bold text-lg mb-1">Web & Design</h3><p className="text-sm text-gray-600 mb-2">Next.js · Tailwind · Vercel</p><p className="text-sm text-gray-700">Landing Pages, digitale Visitenkarten, kleine Webauftritte mit Fokus auf UX.</p></div>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Specials</h2>
          <div className="bg-black text-white rounded-xl p-6 mb-4"><h3 className="font-bold text-lg mb-2">🚐 Van-Life meets Business</h3><p className="text-sm text-gray-300">Ich arbeite remote und mobil. Flexibilität ist nicht nur ein Trend — sie ist mein Lebensstil. Das macht mich unabhängig und kreativ.</p></div>
          <div className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold text-lg mb-2">🌱 IT-Anfängerin mit Wachstumsmindset</h3><p className="text-sm text-gray-600">Ich lerne jeden Tag. Von Null auf Next.js, GitHub, Vercel, KI-Integration. Wer mit mir arbeitet, bekommt jemanden, der Fragen stellt — und Lösungen findet.</p></div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="text-gray-600 mb-8">Speichere mich direkt in deinem Telefon — damit du mich immer griffbereit hast.</p>
          <SaveContactButton />
          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p>📧 koordination.sdolak@gmail.com</p>
            <p>🌐 ccq-produktseite.vercel.app</p>
            <p>💼 GitHub: StefaniaMaDolak</p>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 text-center text-sm text-gray-400">
        <p>© 2026 Stefania Dolak · Erkannt werden für das was wirklich zählt</p>
      </footer>
    </main>
  );
}
