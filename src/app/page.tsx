"use client";

export default function Home() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Stefania Dolak — CCQ Charactercard",
        text: "Zum Scannen und Versenden:",
        url: "https://stefania-dolak-charactercard.vercel.app",
      });
    } catch (err) {
      console.log("Share abgebrochen:", err);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen text-white font-sans" style={{ backgroundColor: '#9A9580' }}>
      {/* HERO — Großes Bild mit Name Overlay */}
      <section className="relative h-[70vh] min-h-[500px] w-full">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Stefania Dolak"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#9A9580]/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-white drop-shadow-lg">
            Stefania
          </h1>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mt-4 text-white/80">
            Kommunikationsmanagement
          </p>
        </div>
      </section>

      {/* NAVIGATION — Runde Pillen */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="max-w-md mx-auto space-y-3">
          {[
            { label: "Profil", id: "profil" },
            { label: "Angebot", id: "angebot" },
            { label: "Hintergrund", id: "hintergrund" },
            { label: "Charakter", id: "charakter" },
            { label: "Kontakt", id: "kontakt" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full py-3.5 px-6 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm
                         text-white text-xs tracking-[0.2em] uppercase
                         hover:bg-white/15 hover:border-white/60 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-light tracking-wide">Profil</h2>
          <div className="w-12 h-px bg-white/30 mx-auto" />
          <div className="text-left space-y-6 text-sm leading-relaxed text-white/90">
            <p>Kommunikation verbindet. Kommunikation ist viel mehr – denn sie ist überall.</p>

            <p>In einem Jahrzehnt im Kundenkontakt und in der Mitarbeiterbetreuung lernte ich: Kommunikation ist nicht nur direkter Kontakt – sie ist auch die Art wie man sich präsentiert. Kommunikation geschieht auch durch Bilder – weshalb mich Mediendesign seit Jahren begleitet.</p>

            <p>Gleichzeitig spielt Psychologie eine zentrale Rolle – denn nur wer versteht welche Bedürfnisse, Persönlichkeiten, Einschränkungen und Besonderheiten auf jeder Seite stehen, kann Kommunikation wirklich anpassen. Nur dieses tiefgehende Wissen macht Kommunikation wirklich erreichbar – für eine Zielgruppe, individuell oder für jeden.</p>

            <p>Doch Menschlichkeit, Feinfühligkeit oder Empathie ist heute leider nicht alleine tragbar – es tut mir leid aber es ist die Wahrheit die keiner ausspricht. Weil Wissen mit der Zeit geht, kam die Technik hinzu – und gerade sie hat vieles zerstört. Weshalb ich mir gezielt technisches Know-how aneignete – in IT, Programmen, Darstellungen und dem Wissen von heute und morgen – um die Technik so zu nutzen dass das Wesentliche, was normalerweise untergeht, endlich sichtbar wird.</p>

            <p>Das alles ist nicht getrennt – sondern wichtig miteinander zu verknüpfen. Wissen ist Macht – aber wertlos wenn es nicht richtig eingepflegt, verwaltet und gespeichert wird, um es so zu verändern dass es den grössten Erfolg bringt.</p>

            <p>Erfolg ist für jeden Menschen, jeden Betrieb, jedes Unternehmen etwas anderes. Doch so unterschiedlich jeder sein mag – am Ende geht es immer darum: das Richtige festhalten, es verstehen, verbessern und dann mutig loslegen. Nicht weil wir nicht gut genug sind – sondern weil wir die beste Version von uns und dem was wir aufgebaut haben leben wollen.</p>

            <p>Ein Bedürfnis das jeder in sich trägt: verstanden werden. Gesehen werden.</p>

            <p className="font-bold text-base text-center pt-2">Dieses Bedürfnis ist meine Motivation.</p>
          </div>
        </div>
      </section>

      {/* BILD-SLOT 1 */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="/präsentation.jpg"
              alt="Stefania bei einer Präsentation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section id="angebot" className="py-16 px-6" style={{ backgroundColor: '#8E8875' }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-light tracking-wide">Angebot</h2>
          <div className="w-12 h-px bg-white/30 mx-auto" />
          <p className="text-sm leading-relaxed text-white/85">
            Mein Angebot vereint drei Ebenen: <span className="font-bold">Verwaltung · Psychologie · Systemik</span>
          </p>
          <p className="text-xs text-white/60">
            Weil Struktur allein nicht reicht. Weil Menschen keine Prozesse sind. Und weil alles miteinander zusammenhängt.
          </p>
          <p className="text-xs text-white/50">Ich arbeite stundenbasiert in folgenden Bereichen:</p>

          <div className="space-y-3 pt-4">
            {[
              "Kundenservice",
              "Mitarbeiterbetreuung",
              "Projektanalyse & Changemanagement",
              "Webseitenanalyse & -erstellung",
              "CharacterCard Anpassung",
            ].map((item) => (
              <div
                key={item}
                className="py-3 px-6 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm tracking-wide"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILD-SLOT 2 */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="/workshop.jpg"
              alt="Stefania im Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HINTERGRUND */}
      <section id="hintergrund" className="py-16 px-6" style={{ backgroundColor: '#8E8875' }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-light tracking-wide">Hintergrund</h2>
          <div className="w-12 h-px bg-white/30 mx-auto" />

          <div className="space-y-6 text-left">
            {[
              { year: "2014", text: "10 Jahre kaufmännisch & medizinisch im Bereich Kundenkontakt und Organisations- sowie Verwaltungsmanagement" },
              { year: "2023", text: "Psychologische Beraterin (VFP zertifiziert)" },
              { year: "2024", text: "Systemischer Coach (zertifiziert) mit Fokus auf Kommunikationsprozesse und Konstruktivismus" },
              { year: "2025", text: "Selbständig mit Fokus auf Schulungsentwicklung im Bereich Resilienz & Kommunikation" },
            ].map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="w-16 text-right text-xs text-white/50 pt-1 tracking-wider">{item.year}</div>
                <div className="flex-1 text-sm text-white/85 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4 text-left">
            <p className="text-sm leading-relaxed text-white/85">
              Als Assistenz über mehrere Jahre und auch heute virtuell für Sie erreichbar. Mit dem Wissen, dass das Wissen nie an einer Stelle stehen bleibt.
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <a
              href="mailto:stefania.dolak@mail.ch?subject=Termin%20vereinbaren"
              className="inline-block w-full py-3.5 px-6 rounded-full border border-white/40 bg-white/5
                         text-white text-xs tracking-[0.2em] uppercase text-center
                         hover:bg-white/15 transition-all duration-300"
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* CHARAKTER */}
      <section id="charakter" className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-light tracking-wide">Charakter</h2>
          <div className="w-12 h-px bg-white/30 mx-auto" />

          <div className="text-left space-y-6 text-sm leading-relaxed text-white/90">
            <p className="font-bold text-base">Was mich ausmacht: ich bleibe nicht stehen.</p>

            <p>Mir reicht die Oberfläche nicht. Ich muss den Hintergrund verstehen – denn nur wer die Tiefe kennt, kann an der Oberfläche wirklich wirken.</p>

            <p>Gerade weil ich als Mensch und Persönlichkeit sensibel bin, habe ich ein feines Gespür für Dynamiken, Menschen und Projekte. Kann das anstrengend sein? Ja. Bleibe ich deshalb stehen? Nein. Ich gehe weiter – lerne von jeder Seite, verstehe jeden Aspekt, um für das grosse Ganze gewappnet zu sein.</p>

            <p>Ich bleibe nicht Jahre in einem Bereich um ihn blind auswendig zu können. Ich wechsle die Perspektive – um den Blick für das ganze System zu behalten. Denn wer mehrere Seiten kennt, denkt vernetzter.</p>

            <p className="italic text-white/70">Um es in meiner Tanzsprache zu sagen: Warum jahrelang nur einen Tanzstil lernen – wenn ein anderer Stil dir beibringt wie man führt und sich führen lässt? Skills die auf jeden Tanz – und jede Zusammenarbeit – anwendbar sind.</p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-16 px-6" style={{ backgroundColor: '#8E8875' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-light tracking-wide">Kontakt</h2>
          <div className="w-12 h-px bg-white/30 mx-auto" />

          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <img
              src="/stefania-qr.svg"
              alt="QR-Code zu Stefania Dolak Charactercard"
              className="w-36 h-36"
            />
          </div>

          <p className="text-sm">
            <a
              href="https://stefania-dolak-charactercard.vercel.app"
              className="text-white/80 underline underline-offset-4 hover:text-white transition"
            >
              stefania-dolak-charactercard.vercel.app
            </a>
          </p>

          <button
            onClick={handleShare}
            className="mt-4 py-3.5 px-8 rounded-full border border-white/40 bg-white/5
                       text-white text-xs tracking-[0.2em] uppercase
                       hover:bg-white/15 transition-all duration-300"
          >
            Seite teilen
          </button>

          <div className="pt-4 space-y-2 text-sm text-white/60">
            <p>stefania.dolak@mail.ch</p>
          </div>
        </div>
      </section>

      {/* CCQ WERBUNG */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">CCQ / CHARACTERCARD</p>
          <p className="text-lg text-white/70 italic">Deine Karte. Dein Charakter.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 text-center border-t border-white/10">
        <p className="text-[10px] tracking-wider text-white/30">
          © 2026 Stefania Dolak
        </p>
      </footer>
    </main>
  );
}
