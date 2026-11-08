"use client";

import { useState } from "react";
import { useCCQConfig } from "../components/CCQConfigLoader";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [openOffer, setOpenOffer] = useState<string | null>(null);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
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
        title: `${config.meta.name} — Kontakt`,
        text: "Zum Kontaktieren:",
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
      id: "verwaltung",
      title: "Verwaltung \u0026 Organisation",
      kurz: "Nicht nur erledigen — dauerhaft strukturieren.",
      lang: "Ich übernehme nicht nur einzelne Aufgaben — ich baue Strukturen auf, die bleiben.\n\n<strong>Dokumente \u0026 Ablage:</strong> Verträge erstellen, Formulare vorbereiten, digitale Ablagesysteme pflegen — damit Unterlagen jederzeit auffindbar und vollständig sind.\n\n<strong>Datenbanken \u0026 Überblick:</strong> Stammdaten pflegen, offene Vorgänge nachverfolgen, Fristen im Blick behalten — damit nichts untergeht.\n\n<strong>Prozesse \u0026 Transparenz:</strong> Abläufe dokumentieren, Checklisten erstellen, Status für alle Beteiligten klar halten — damit Zuständigkeiten auch bei Abwesenheit gesichert sind.\n\nDiese Strukturarbeit ist keine Zusatzleistung. Sie ist der Grund, warum Kommunikation und Management langfristig funktionieren — statt bei jedem Wechsel neu erfunden zu werden müssen.",
    },
    {
      id: "projekt",
      title: "Projektanalyse & Changemanagement",
      kurz: "Struktur schaffen, wo Chaos war.",
      lang: "Ein Projekt, das nicht vorankommt? Oder einen Wandel, den niemand versteht? Ich analysiere die Lage, identifiziere Stolpersteine und entwickele einen klaren Plan — zusammen, damit der Change wirklich ankommt.",
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
    <main className="ccq-page min-h-screen text-[var(--ccq-dark)]">
      {/* HERO / VISITENKARTE — Aufbau nach Stefanias Canva-Referenz */}
      <section className="ccq-hero text-center">
        <img
          src="/ccq-logo-transparent.png"
          alt="CCQ Charactercard"
          className="ccq-logo"
        />

        <button
          type="button"
          className="ccq-flip-card"
          style={{ perspective: "1000px" }}
          onClick={() => setIsFlipped(!isFlipped)}
          aria-label="Visitenkarte drehen"
          aria-pressed={isFlipped}
        >
          <span
            className="ccq-flip-card-inner"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <span className="ccq-card-face">
              <img
                src="/visitenkarte-vorne.jpg"
                alt="Visitenkarte Vorderseite"
              />
            </span>
            <span className="ccq-card-face ccq-card-back">
              <img
                src="/visitenkarte-hinten.jpg"
                alt="Visitenkarte Rückseite"
              />
            </span>
          </span>
        </button>

        <div className="ccq-hero-title">
          <h1>{config.meta.name}</h1>
          <p className="ccq-role">VA | Kommunikationsmanagement</p>
        </div>

        {/* Arbeit bleibt als Abschnitt erhalten, aber bewusst ohne Menüpunkt. */}
        <header className="ccq-nav-wrap">
          <nav className="ccq-nav" aria-label="Bereiche">
            {[
              { label: "PROFIL", target: "profil" },
              { label: "ANGEBOT", target: "angebot" },
              { label: "CHARAKTER", target: "charakter" },
              { label: "PRÄSENT", target: "spezial" },
              { label: "KONTAKT", target: "kontakt" },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="ccq-nav-pill"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        <div className="ccq-swipe-cue" aria-hidden="true">
          <span>SWIPE</span>
          <svg viewBox="0 0 24 34" role="presentation">
            <path d="M12 1v27M5 21l7 8 7-8" />
          </svg>
        </div>

        <div className="sr-only">
          <p>REMOTE</p>
          <p>+41 76 405 64 30</p>
          <p>stefaniamadolak@gmail.com</p>
          <p>Zum Drehen auf die Visitenkarte tippen</p>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="ccq-section-card py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">PROFIL</p>
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

      <div className="ccq-offer-background-group">
        {/* ANGEBOT */}
        <section id="angebot" className="ccq-section-card relative py-20 px-6 overflow-hidden">
        {/* Hintergrund: Schreibtisch, sichtbar */}
        <div
          className="ccq-old-section-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/arbeitsplatz.jpg)",
            opacity: 0.15
          }}
        />

        <div className="relative max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">ANGEBOT</p>
            <h2 className="text-2xl font-light tracking-wide">
              Verwaltung · Psychologie · Systemik
            </h2>
            <blockquote
              className="text-lg italic leading-relaxed py-6 px-8 my-4 rounded-xl"
              style={{
                borderLeft: "3px solid var(--ccq-secondary)",
                backgroundColor: "rgba(154, 149, 128, 0.08)",
                color: "var(--ccq-dark)",
              }}
            >
              „Weil Struktur allein nicht reicht. Weil Menschen keine Prozesse sind. Und weil alles miteinander zusammenhängt.“
            </blockquote>
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
                    openOffer === angebot.id ? "max-h-[1200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="rounded-xl p-6 text-sm leading-relaxed"
                    style={{
                      backgroundColor: "var(--ccq-light)",
                      border: "1px solid var(--ccq-secondary)",
                    }}
                    dangerouslySetInnerHTML={{ __html: angebot.lang.replace(/\n/g, '<br />') }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:stefaniamadolak@gmail.com?subject=Termin%20vereinbaren"
            className="ccq-appointment-button inline-flex rounded-full uppercase border transition-all duration-300 hover:opacity-80"
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

        {/* HINTERGRUND — als verbundener Anhang zum Angebot */}
        <section id="hintergrund" className="ccq-section-card ccq-background-attachment py-20 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">HINTERGRUND</p>
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
      </div>

      {/* ARBEIT */}
      <section id="arbeit" className="ccq-section-card py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">ARBEIT</p>
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

      {/* CHARAKTER */}
      <section id="charakter" className="ccq-section-card relative py-20 px-6 overflow-hidden">
        {/* Hintergrund: Portrait, sichtbar */}
        <div
          className="ccq-old-section-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/portrait.jpg)",
            opacity: 0.15
          }}
        />

        <div className="relative max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">CHARAKTER</p>
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

      {/* PRÄSENT */}
      <section id="spezial" className="ccq-section-card py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40">PRÄSENT</p>
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
      <section id="kontakt" className="ccq-section-card ccq-contact py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="ccq-section-label text-[11px] tracking-[0.3em] uppercase opacity-40" style={{ color: "var(--ccq-light)" }}>KONTAKT</p>
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
              href="mailto:stefaniamadolak@gmail.com"
              className="underline underline-offset-4 hover:opacity-100 transition opacity-80"
              style={{ color: "var(--ccq-light)" }}
            >
              stefaniamadolak@gmail.com
            </a>
          </p>

          <p className="text-sm" style={{ color: "var(--ccq-light)" }}>
            <a
              href="https://wa.me/41764056430"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-100 transition opacity-80"
              style={{ color: "var(--ccq-light)" }}
            >
              +41 76 405 64 30 · WhatsApp
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
            <p>+41 76 405 64 30</p>
          </div>
        </div>
      </section>

      {/* Immer erreichbare Kontakt-Auswahl */}
      <div className="ccq-floating-contact">
        {isContactMenuOpen && (
          <nav className="ccq-contact-options" aria-label="Kontaktmöglichkeiten">
            <a
              href="https://wa.me/41764056430"
              target="_blank"
              rel="noopener noreferrer"
              className="ccq-contact-option ccq-contact-option-whatsapp"
              aria-label="Per WhatsApp schreiben"
              title="WhatsApp"
              onClick={() => setIsContactMenuOpen(false)}
            >
              <span className="ccq-contact-option-label">WhatsApp</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.3 21.7l5.28-1.25A9.7 9.7 0 1 0 12 2Zm0 17.45a7.7 7.7 0 0 1-3.92-1.07l-.38-.23-3.13.74.78-3.04-.25-.4A7.7 7.7 0 1 1 12 19.45Zm4.22-5.77c-.23-.12-1.37-.68-1.58-.75-.21-.08-.36-.12-.52.11-.15.23-.59.75-.72.9-.13.16-.27.18-.5.06-.23-.11-.98-.36-1.86-1.15a7.02 7.02 0 0 1-1.29-1.6c-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.12-.14.16-.24.23-.4.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.16 0-.4.06-.62.29-.21.23-.81.79-.81 1.93 0 1.13.83 2.23.94 2.38.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.32.48.55.18 1.06.15 1.45.09.45-.07 1.37-.56 1.56-1.1.19-.53.19-.99.13-1.08-.05-.1-.2-.15-.43-.27Z" />
              </svg>
            </a>

            <a
              href="mailto:stefaniamadolak@gmail.com"
              className="ccq-contact-option ccq-contact-option-email"
              aria-label="E-Mail an Stefania Dolak schreiben"
              title="E-Mail"
              onClick={() => setIsContactMenuOpen(false)}
            >
              <span className="ccq-contact-option-label">E-Mail</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.13 2 8.12 5.6L20.12 7H3.88Zm16.12 9.92V9.2l-7.43 5.12a1 1 0 0 1-1.14 0L4 9.2v7.72c0 .04.04.08.08.08h15.84c.04 0 .08-.04.08-.08Z" />
              </svg>
            </a>
          </nav>
        )}

        <button
          type="button"
          className="ccq-contact-toggle"
          aria-label={isContactMenuOpen ? "Kontaktmöglichkeiten schließen" : "Kontaktmöglichkeiten öffnen"}
          aria-expanded={isContactMenuOpen}
          onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
        >
          {isContactMenuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6.7 5.3 12 12-1.4 1.4-12-12 1.4-1.4Zm10.6 0 1.4 1.4-12 12-1.4-1.4 12-12Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7.55L6 21.35V17H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v2.15L10.75 15H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z" />
            </svg>
          )}
        </button>
      </div>

      {/* FOOTER */}
      <footer className="ccq-footer py-6 px-4 text-center">
        <p className="text-[10px] tracking-wider opacity-30">© 2026 {config.meta.name}</p>
      </footer>
    </main>
  );
}
