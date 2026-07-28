"use client";

export default function Home() {
  const handleShare = async () => {
    try {
      // Statisches SVG QR-Code holen
      const response = await fetch("/stefania-qr.svg");
      const svgText = await response.text();

      // SVG in Blob umwandeln
      const svgBlob = new Blob([svgText], { type: "image/svg+xml" });

      // In Canvas zeichnen für PNG-Konvertierung
      const img = new Image();
      const url = URL.createObjectURL(svgBlob);
      img.src = url;

      await new Promise((resolve) => { img.onload = resolve; });

      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 400, 400);
        ctx.drawImage(img, 0, 0, 400, 400);
      }

      const pngBlob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), "image/png");
      });

      URL.revokeObjectURL(url);

      if (!pngBlob) return;

      const file = new File([pngBlob], "stefania-dolak-ccq.png", {
        type: "image/png",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Stefania Dolak — CCQ Charactercard",
          text: "Zum Scannen und Versenden:",
        });
      }
    } catch (err) {
      console.log("Share abgebrochen:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* CCQ / CHARACTERCARD — Links oben dezent */}
      <div className="absolute top-4 left-4 z-10">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">CCQ / CHARACTERCARD</p>
      </div>

      {/* HERO */}
      <section className="bg-black text-white py-16 px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Bild-Platzhalter */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Bild</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Stefania Dolak</h1>
          <p className="text-xl text-gray-300 mb-4">VA für Kommunikationsmanagement</p>
        </div>
      </section>

      {/* PROFIL */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-6">Profil</h2>

          <p>Kommunikation verbindet. Kommunikation ist viel mehr – denn sie ist überall.</p>

          <p>In einem Jahrzehnt im Kundenkontakt und in der Mitarbeiterbetreuung lernte ich: Kommunikation ist nicht nur direkter Kontakt – sie ist auch die Art wie man sich präsentiert. Kommunikation geschieht auch durch Bilder – weshalb mich Mediendesign seit Jahren begleitet.</p>

          <p>Gleichzeitig spielt Psychologie eine zentrale Rolle – denn nur wer versteht welche Bedürfnisse, Persönlichkeiten, Einschränkungen und Besonderheiten auf jeder Seite stehen, kann Kommunikation wirklich anpassen. Nur dieses tiefgehende Wissen macht Kommunikation wirklich erreichbar – für eine Zielgruppe, individuell oder für jeden.</p>

          <p>Doch Menschlichkeit, Feinfühligkeit oder Empathie ist heute leider nicht alleine tragbar – es tut mir leid aber es ist die Wahrheit die keiner ausspricht. Weil Wissen mit der Zeit geht, kam die Technik hinzu – und gerade sie hat vieles zerstört. Weshalb ich mir gezielt technisches Know-how aneignete – in IT, Programmen, Darstellungen und dem Wissen von heute und morgen – um die Technik so zu nutzen dass das Wesentliche, was normalerweise untergeht, endlich sichtbar wird.</p>

          <p>Das alles ist nicht getrennt – sondern wichtig miteinander zu verknüpfen. Wissen ist Macht – aber wertlos wenn es nicht richtig eingepflegt, verwaltet und gespeichert wird, um es so zu verändern dass es den grössten Erfolg bringt.</p>

          <p>Erfolg ist für jeden Menschen, jeden Betrieb, jedes Unternehmen etwas anderes. Doch so unterschiedlich jeder sein mag – am Ende geht es immer darum: das Richtige festhalten, es verstehen, verbessern und dann mutig loslegen. Nicht weil wir nicht gut genug sind – sondern weil wir die beste Version von uns und dem was wir aufgebaut haben leben wollen.</p>

          <p>Ein Bedürfnis das jeder in sich trägt: verstanden werden. Gesehen werden.</p>

          <p className="font-bold text-lg text-center pt-2">Dieses Bedürfnis ist meine Motivation.</p>
        </div>

        {/* BILD-SLOT 1 */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Bild</span>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section className="py-12 px-4 border-b border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Angebot</h2>
          <p className="text-gray-700 text-center mb-2">
            Mein Angebot vereint drei Ebenen: <span className="font-bold">Verwaltung · Psychologie · Systemik</span>
          </p>
          <p className="text-sm text-gray-500 text-center mb-8">
            Weil Struktur allein nicht reicht. Weil Menschen keine Prozesse sind. Und weil alles miteinander zusammenhängt.
          </p>

          <p className="text-sm text-gray-500 text-center mb-6">Ich arbeite stundenbasiert in folgenden Bereichen:</p>

          <div className="space-y-3">
            {[
              "Kundenservice",
              "Mitarbeiterbetreuung",
              "Projektanalyse & Changemanagement",
              "Webseitenanalyse & -erstellung",
              "CharacterCard Anpassung",
            ].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-gray-700">
                {item}
              </div>
            ))}
          </div>

        {/* BILD-SLOT 2 */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Bild</span>
          </div>
        </div>
        </div>
      </section>

      {/* HINTERGRUND */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Hintergrund</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="w-20 text-right text-sm font-bold text-gray-400 pt-1">Ab 2014</div>
              <div className="flex-1 text-gray-700">10 Jahre kaufmännisch & medizinisch im Bereich Kundenkontakt und Organisations- sowie Verwaltungsmanagement</div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 text-right text-sm font-bold text-gray-400 pt-1">Ab 2023</div>
              <div className="flex-1 text-gray-700">Psychologische Beraterin (VFP zertifiziert)</div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 text-right text-sm font-bold text-gray-400 pt-1">Ab 2024</div>
              <div className="flex-1 text-gray-700">Systemischer Coach (zertifiziert) mit Fokus auf Kommunikationsprozesse und Konstruktivismus</div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 text-right text-sm font-bold text-gray-400 pt-1">Ab 2025</div>
              <div className="flex-1 text-gray-700">Selbständig mit Fokus auf Schulungsentwicklung im Bereich Resilienz & Kommunikation</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center space-y-3">
            <a
              href="mailto:stefania.dolak@mail.ch?subject=Termin%20vereinbaren"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Als Assistenz über mehrere Jahre und auch heute virtuell für Sie erreichbar. Mit dem Wissen, dass das Wissen nie an einer Stelle stehen bleibt.
            </a>
            <a
              href="mailto:stefania.dolak@mail.ch?subject=Gespr%C3%A4ch%20vereinbaren"
              className="inline-block border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* CHARAKTER */}
      <section className="py-12 px-4 border-b border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-6">Charakter</h2>

          <p className="font-bold text-lg">Was mich ausmacht: ich bleibe nicht stehen.</p>

          <p>Mir reicht die Oberfläche nicht. Ich muss den Hintergrund verstehen – denn nur wer die Tiefe kennt, kann an der Oberfläche wirklich wirken.</p>

          <p>Gerade weil ich als Mensch und Persönlichkeit sensibel bin, habe ich ein feines Gespür für Dynamiken, Menschen und Projekte. Kann das anstrengend sein? Ja. Bleibe ich deshalb stehen? Nein. Ich gehe weiter – lerne von jeder Seite, verstehe jeden Aspekt, um für das grosse Ganze gewappnet zu sein.</p>

          <p>Ich bleibe nicht Jahre in einem Bereich um ihn blind auswendig zu können. Ich wechsle die Perspektive – um den Blick für das ganze System zu behalten. Denn wer mehrere Seiten kennt, denkt vernetzter.</p>

          <p className="italic text-gray-500">Um es in meiner Tanzsprache zu sagen: Warum jahrelang nur einen Tanzstil lernen – wenn ein anderer Stil dir beibringt wie man führt und sich führen lässt? Skills die auf jeden Tanz – und jede Zusammenarbeit – anwendbar sind.</p>
        </div>

        {/* BILD-SLOT 3 */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Bild</span>
          </div>
        </div>
      </section>

      {/* QR-CODE KONTAKT */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="text-gray-600 mb-8">Zum Scannen und Versenden</p>

          {/* QR-Code Bild — klickbar zum Teilen */}
          <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-400 transition cursor-pointer">
            <img
              src="/stefania-qr.svg"
              alt="QR-Code zu Stefania Dolak Charactercard"
              className="w-48 h-48"
              onClick={handleShare}
            />
          </div>

          <p className="text-sm text-gray-400 mt-4">
            <a
              href="https://stefania-dolak-charactercard.vercel.app"
              className="underline hover:text-gray-600"
            >
              stefania-dolak-charactercard.vercel.app
            </a>
          </p>

          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p>📧 stefania.dolak@mail.ch</p>
          </div>
        </div>
      </section>

      {/* CCQ WERBUNG — Dezent, hellgrau, am Ende jeder CCQ */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">CCQ / CHARACTERCARD</p>
          <p className="text-sm text-gray-500">Deine Karte. Dein Charakter. — Erkannt werden für das, was wirklich zählt.</p>
        </div>
      </section>

      <footer className="py-6 px-4 text-center text-sm text-gray-400">
        <p>© 2026 Stefania Dolak · Erkannt werden für das, was wirklich zählt.</p>
      </footer>
    </main>
  );
}
