"use client";

import { useState } from "react";
import { useCCQConfig } from "../components/CCQConfigLoader";

export default function Home() {
  const [openOffer, setOpenOffer] = useState<string | null>(null);
  const { config, loading } = useCCQConfig();

  if (loading || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--ccq-dark)]/50">
        Lade...
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${config.meta.name} — CCQ Charactercard`,
        text: "Zum Scannen und Versenden:",
        url: typeof window !== "undefined" ? window.location.href : "https://stefania-dolak-charactercard.vercel.app",
      });
    } catch {
      // Nutzer hat abgebrochen
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleOffer = (id: string) => {
    setOpenOffer(openOffer === id ? null : id);
  };

  const angebote = [
    {
      id: "kundenservice",
      title: "Kundenservice",
      kurz: "Direkter Kontakt, professionell und persönlich.",
      lang: "Ich übernehme die Kommunikation mit Kunden — per E-Mail, Telefon oder Chat. Schnell, zuverlässig und mit dem Gespür, das zwischen den Zeilen liest. Ob Anfragen, Beschwerden oder Follow-ups: Deine Kunden fühlen sich verstanden und gut betreut.",
    },
    {
      id: "mitarbeiter",
      title: "Mitarbeiterbetreuung",
      kurz: "Interne Kommunikation, die verbindet statt belastet.",
      lang: "Onboarding, Updates, Konflikte oder einfach nur jemand, der für das Team da ist — ich unterstütze bei der internen Kommunikation. Mit psychologischem Feingefühl und organisatorischer Klarheit, damit dein Team gut zusammenarbeitet.",
    },
    {
      id: "projekt",
      title: "Projektanalyse & Changemanagement",
      kurz: "Struktur schaffen, wo Chaos war.",
      lang: "Ein Projekt, das nicht vorankommt? Oder einen Wandel, den niemand versteht? Ich analysiere die Lage, identifiziere Stolpersteine und entwickele einen klaren Plan — zusammen, damit der Change wirklich ankommt.",
    },
    {
      id: "webseite",
      title: "Webseitenanalyse & -erstellung",
      kurz: "Online sichtbar — und zwar richtig.",
      lang: "Deine Webseite ist deine digitale Visitenkarte. Ich analysiere, was funktioniert und was nicht — und wenn nötig, bauen wir sie neu auf. Technisch fundiert, ästhetisch ansprechend und vor allem: so, dass die Besucher verstehen, wer dahinter steht.",
    },
    {
      id: "ccq",
      title: "CharacterCard Anpassung",
      kurz: "Deine digitale Visitenkarte, einzigartig wie du.",
      lang: "Eine CharacterCard ist mehr als eine Webseite — sie ist dein digitales Ich. Ich passe Layout, Texte, Farben und Inhalte so an, dass sie wirklich zu dir passen. Mit allem, was dazugehört: QR-Code, Kontaktfunktion, Share-Sheet und dem gewissen Etwas, das dich unverwechselbar macht.",
    },
  ];

  const tools = [
    "Excel · Word · OpenOffice · Outlook · Papershift",
    "Teams · Zoom · Google Family · iCloud Family · Calendly",
    "Lightroom · Canva · Final Cut · Refero",
    "ChatGPT · Claude · Perplexity · Hermes Agent",
    "Obsidian · GitHub · Honcho · MistralAI · Ollama",
    "die Fähigkeit, jedes neue Tool sofort zu verstehen und einzusetzen",
  ];

  return (
    <main
      className="min-h-screen text-[var(--ccq-dark)] font-sans"
      style={{ backgroundColor: "var(--ccq-light)" }}
    >
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[var(--ccq-primary)]/30">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "var(--ccq-dark)" }}>
            KM
          </div>
          <nav className="flex gap-4 overflow-x-auto">
            {["PROFIL", "ANGEBOT", "ARBEITSWEISE", "HINTERGRUND", "CHARAKTER", "SPEZIAL", "KONTAKT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] tracking-wider uppercase hover:opacity-60 transition-opacity whitespace-nowrap"
                style={{ color: "var(--ccq-dark)" }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO / PORTRAIT */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="relative mx-auto" style={{ width: "280px", height: "380px" }}>
            <img
              src="/portrait.png"
              alt="Stefania Dolak"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-light tracking-wide" style={{ color: "var(--ccq-dark)" }}>
              {config.meta.name}
            </h1>
            <p className="text-sm tracking-[0.2em] uppercase opacity-60">
              VA | Kommunikationsmanagement
            </p>
            <p className="text-xs tracking-wider opacity-40">REMOTE</p>
          </div>
          <div className="space-y-1 text-sm opacity-70">
            <p>(+41) 77 292 73 88</p>
            <p className="lowercase">stefaniamadolak@gmail.com</p>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="py-20 px-6" style={{ backgroundColor: "var(--ccq-primary)" }}>
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">PROFIL</p>
            <h2 className="text-2xl font-light tracking-wide leading-relaxed">
              Die Virtuelle Assistenz für Kommunikationsmanagement
            </h2>
          </div>

          <div className="text-left space-y-6 text-sm leading-relaxed" style={{ color: "var(--ccq-dark)" }}>
            <p className="font-bold text-base text-center">
              Kommunikation verbindet. Kommunikation ist viel mehr – denn sie ist überall.
            </p>

            <p>
              Weisst du was passiert wenn Kommunikation nicht ankommt? Sie wird unsichtbar. Das Beste was du zu bieten hast – dein Herzensblut, deine Arbeit, dein Wissen – geht unter. Nicht weil es nicht gut genug ist. Sondern weil es nicht richtig gezeigt wird.
            </p>

            <p>
              Mehr als zehn Jahre Erfahrung in Verwaltung, Organisation, Kundenkontakt und Mitarbeiterbetreuung haben mir gezeigt, dass Kommunikation weit über Gespräche hinausgeht. Sie steckt in gut organisierten Prozessen, klaren Strukturen und einem professionellen Außenauftritt. Kommunikation geschieht durch Worte. Durch Bilder. Durch das, was zwischen den Zeilen steht – und durch das, was du unbewusst weglässt.
            </p>

            <p>
              Doch, was geht heute oft verloren? <strong>Menschlichkeit. Feinfühligkeit. Empathie. Echtes Interesse.</strong> Es tut mir leid – aber es ist die Wahrheit die keiner ausspricht. Denn Wissen ist Macht. Und Wissen ist Technik. -gerade diese hat vieles zerstört.
            </p>

            <p>
              Technik kann vieles erleichtern – aber sie ersetzt kein echtes Gespür für Menschen. Was früher durch ein persönliches Gespräch, durch Präsenz, durch echten Kontakt entstanden ist - geht heute oft unter.
            </p>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section id="angebot" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">ANGEBOT</p>
            <h2 className="text-2xl font-light tracking-wide">
              Verwaltung · Psychologie · Systemik
            </h2>
            <p className="text-sm opacity-60 leading-relaxed">
              Weil Struktur allein nicht reicht. Weil Menschen keine Prozesse sind. Und weil alles miteinander zusammenhängt.
            </p>
            <p className="text-xs opacity-40">Ich arbeite stundenbasiert – in folgenden Bereichen:</p>
          </div>

          <div className="space-y-3 text-left">
            {angebote.map((angebot) => (
              <div key={angebot.id}>
                <button
                  onClick={() => toggleOffer(angebot.id)}
                  className="w-full py-4 px-6 rounded-xl border transition-all duration-300 flex items-center justify-between group"
                  style={{
                    borderColor: "var(--ccq-secondary)",
                    backgroundColor: "var(--ccq-primary)",
                    color: "var(--ccq-dark)",
                  }}
                >
                  <div>
                    <p className="font-bold text-sm">{angebot.title}</p>
                    <p className="text-xs opacity-60 mt-1">{angebot.kurz}</p>
                  </div>
                  <span className="text-xs opacity-40 group-hover:opacity-70 transition">
                    {openOffer === angebot.id ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openOffer === angebot.id ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="rounded-xl p-6 text-sm leading-relaxed"
                    style={{
                      backgroundColor: "var(--ccq-light)",
                      border: "1px solid var(--ccq-secondary)",
                    }}
                  >
                    {angebot.lang}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:stefaniamadolak@gmail.com?subject=Termin%20vereinbaren"
            className="inline-block py-4 px-8 rounded-full text-xs tracking-[0.2em] uppercase border transition-all duration-300 hover:opacity-80"
            style={{
              borderColor: "var(--ccq-dark)",
              color: "var(--ccq-dark)",
            }}
          >
            → Gespräch vereinbaren
          </a>

          {/* TOOLS */}
          <div className="pt-8 text-left space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase opacity-40">MEIN TEAM / Meine Tools</p>
            <div className="space-y-2">
              {tools.map((tool) => (
                <p key={tool} className="text-xs opacity-60 leading-relaxed">
                  — {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARBEITSWEISE */}
      <section id="arbeitsweise" className="py-20 px-6" style={{ backgroundColor: "var(--ccq-primary)" }}>
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">ARBEITSWEISE</p>
            <h2 className="text-2xl font-light tracking-wide">Team</h2>
          </div>

          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ maxWidth: "500px" }}>
            <img
              src="/arbeitsplatz.jpg"
              alt="Arbeitsplatz"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="text-left space-y-6 text-sm leading-relaxed" style={{ color: "var(--ccq-dark)" }}>
            <p>
              Weshalb ich mir gezielt technisches Know-how aneignete – in IT, Programmen, Darstellungen und dem Wissen von heute und morgen – um die Technik so zu nutzen dass das Wesentliche, was normalerweise untergeht, endlich sichtbar wird.
            </p>

            <p>
              Denn nur wer die Psychologie dahinter versteht – welche Bedürfnisse, Persönlichkeiten, Einschränkungen und Besonderheiten auf jeder Seite stehen – kann Kommunikation wirklich anpassen. Für eine Zielgruppe. Individuell. Oder für jeden.
            </p>

            <p>
              Das alles ist nicht getrennt – sondern wichtig miteinander zu verknüpfen. Wissen ist Macht – aber wertlos wenn es nicht richtig eingepflegt, verwaltet und gespeichert wird, um es so zu verändern dass es den grössten Erfolg bringt.
            </p>

            <p>
              Und Erfolg? Der ist für jeden anders. Für eine Einzelperson. Für einen Betrieb. Für ein Unternehmen. Doch so unterschiedlich jeder sein mag – es geht immer um dasselbe: Speichern, Verstehen, Verändern, Verbessern und Starten.
            </p>

            <p className="font-bold">
              Nicht weil man nicht gut genug ist – sondern weil man die beste Version von sich und dem was man aufgebaut hat leben will.
            </p>

            <div className="text-center pt-6 space-y-2">
              <p className="italic opacity-70">
                Ein Bedürfnis das jeder in sich trägt: verstanden werden. Gesehen werden.
              </p>
              <p className="font-bold">
                Dieses Bedürfnis ist meine Motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HINTERGRUND */}
      <section id="hintergrund" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">HINTERGRUND</p>
          </div>

          <div className="text-left space-y-6">
            {config.vita.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="w-16 text-right text-xs font-bold tracking-wider pt-1" style={{ color: "var(--ccq-secondary)" }}>
                  {item.year}
                </div>
                <div className="flex-1 text-sm leading-relaxed opacity-85">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-left">
            <p className="text-sm leading-relaxed opacity-70 italic">
              Als Assistenz über mehrere Jahre und auch heute virtuell für Sie erreichbar. Mit dem Wissen, dass das Wissen nie an einer Stelle stehen bleibt.
            </p>
          </div>
        </div>
      </section>

      {/* CHARAKTER */}
      <section id="charakter" className="py-20 px-6" style={{ backgroundColor: "var(--ccq-primary)" }}>
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">CHARAKTER</p>
          </div>

          <div className="text-left space-y-6 text-sm leading-relaxed" style={{ color: "var(--ccq-dark)" }}>
            <p className="font-bold text-base">
              Ich bleibe nicht stehen.
            </p>

            <p>
              Mir reicht die Oberfläche nicht. Ich muss den Hintergrund verstehen – denn nur wer die Tiefe kennt, kann an der Oberfläche wirklich wirken.
            </p>

            <p>
              Gerade weil ich als Mensch und Persönlichkeit sensibel bin, habe ich ein feines Gespür für Dynamiken, Menschen und Projekte. Kann das anstrengend sein? Ja. Bleibe ich deshalb stehen? Nein. Ich gehe weiter – lerne von jeder Seite, verstehe jeden Aspekt, um für das grosse Ganze gewappnet zu sein.
            </p>

            <p>
              Ich bleibe nicht Jahre in einem Bereich um ihn blind auswendig zu können. Ich wechsle die Perspektive – um den Blick für das ganze System zu behalten. Denn wer mehrere Seiten kennt, denkt vernetzter.
            </p>

            <p className="italic opacity-70">
              Um es in meiner Tanzsprache zu sagen: Warum jahrelang nur einen Tanzstil lernen – wenn ein anderer Stil dir beibringt wie man führt und sich führen lässt? Skills die auf jeden Tanz – und jede Zusammenarbeit – anwendbar sind.
            </p>
          </div>
        </div>
      </section>

      {/* SPEZIAL */}
      <section id="spezial" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">SPEZIAL</p>
          </div>

          <p className="text-sm opacity-60">Hier erscheinen bald Downloads, Checklisten und Extras für dich.</p>

          <div className="py-8">
            <div
              className="inline-block p-8 rounded-xl border-2 border-dashed"
              style={{ borderColor: "var(--ccq-secondary)", backgroundColor: "var(--ccq-primary)" }}
            >
              <span className="text-4xl opacity-30">📥</span>
              <p className="mt-4 text-sm opacity-50">Demnächst verfügbar</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 px-6" style={{ backgroundColor: "var(--ccq-dark)" }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40" style={{ color: "var(--ccq-light)" }}>KONTAKT</p>
          </div>

          <div className="inline-block p-4 rounded-2xl border" style={{ borderColor: "var(--ccq-secondary)", backgroundColor: "rgba(255,255,255,0.05)" }}>
            <img
              src="/stefania-qr.svg"
              alt={`QR-Code zu ${config.meta.name}`}
              className="w-36 h-36"
            />
          </div>

          <p className="text-sm" style={{ color: "var(--ccq-light)" }}>
            <a
              href="https://stefania-dolak-charactercard.vercel.app"
              className="underline underline-offset-4 hover:opacity-100 transition opacity-80"
              style={{ color: "var(--ccq-light)" }}
            >
              stefania-dolak-charactercard.vercel.app
            </a>
          </p>

          <button
            onClick={handleShare}
            className="mt-4 py-3.5 px-8 rounded-full border text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{
              borderColor: "var(--ccq-secondary)",
              color: "var(--ccq-light)",
            }}
          >
            Seite teilen
          </button>

          <div className="pt-4 space-y-2 text-sm opacity-60" style={{ color: "var(--ccq-light)" }}>
            <p>stefaniamadolak@gmail.com</p>
            <p>(+41) 77 292 73 88</p>
          </div>
        </div>
      </section>

      {/* CCQ WERBUNG */}
      <section className="py-10 px-6 border-t" style={{ borderColor: "var(--ccq-secondary)" }}>
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">CCQ / CHARACTERCARD</p>
          <p className="text-lg italic opacity-70">Deine Karte. Dein Charakter.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 text-center border-t" style={{ borderColor: "var(--ccq-secondary)" }}>
        <p className="text-[10px] tracking-wider opacity-30">© 2026 {config.meta.name}</p>
      </footer>
    </main>
  );
}
