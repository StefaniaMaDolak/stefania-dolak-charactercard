"use client";

import { useState } from "react";
import { useCCQConfig } from "../components/CCQConfigLoader";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { config, loading } = useCCQConfig();

  if (loading || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/50">
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
      // Nutzer hat abgebrochen — kein Fehler anzeigen
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className="min-h-screen text-[var(--ccq-dark)] font-sans"
      style={{ backgroundColor: "var(--ccq-primary)" }}
    >
      {/* === BEREICH 1: FLIP-CARD VISITENKARTE === */}
      {/* ANPASSEN: Bilder in public/ und ccq-config.json aktualisieren */}
      <section className="py-12 px-6 flex flex-col items-center">
        <div
          className="relative cursor-pointer"
          style={{ perspective: "1000px", width: "100%", maxWidth: "560px" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className="transition-transform duration-700 mx-auto"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              width: "100%",
              aspectRatio: "16/9",
            }}
          >
            {/* VORDERSEITE */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            >
              <img
                src={config.visitenkarte.vorne}
                alt={`${config.meta.name} — Visitenkarte`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* RÜCKSEITE */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={config.visitenkarte.hinten}
                alt={`${config.meta.titel} — Logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-6 tracking-wider opacity-50">
          Zum Umdrehen tippen
        </p>
      </section>

      {/* === BEREICH 2: NAVIGATION === */}
      <section className="px-6 pb-8">
        <div className="max-w-md mx-auto space-y-3">
          {[
            ...(config.bereiche.profil ? [{ label: "Profil", id: "profil" }] : []),
            ...(config.bereiche.charakter ? [{ label: "Charakter", id: "charakter" }] : []),
            ...(config.bereiche.hintergrund ? [{ label: "Hintergrund", id: "hintergrund" }] : []),
            ...(config.bereiche.angebot ? [{ label: "Angebot", id: "angebot" }] : []),
            ...(config.bereiche.kontakt ? [{ label: "Kontakt", id: "kontakt" }] : []),
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full py-3.5 px-6 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm
                         text-white text-xs tracking-[0.2em] uppercase
                         hover:bg-white/15 hover:border-white/60 transition-all duration-300"
              style={{ color: "var(--ccq-light)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* === BEREICH 3: PROFIL (Leistungen) === */}
      {/* ANPASSEN: Leistungen in ccq-config.json unter "leistungen" eintragen */}
      {config.bereiche.profil && (
        <section id="profil" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Profil</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />
            <p className="text-sm leading-relaxed opacity-85">
              Mein Angebot vereint drei Ebenen:{" "}
              <span className="font-bold">{config.claim}</span>
            </p>
            <p className="text-xs opacity-60">{config.subclaim}</p>

            <div className="space-y-3 pt-4">
              {config.leistungen.map((item) => (
                <div
                  key={item}
                  className="py-3 px-6 rounded-full border border-white/20 bg-white/5 text-sm tracking-wide"
                  style={{ color: "var(--ccq-light)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === BEREICH 4: CHARAKTER === */}
      {/* ANPASSEN: Text in ccq-config.json unter "charakter" eintragen. Optional ausblendbar */}
      {config.bereiche.charakter && (
        <section
          id="charakter"
          className="py-16 px-6"
          style={{ backgroundColor: "var(--ccq-secondary)" }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Charakter</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="text-left space-y-6 text-sm leading-relaxed">
              <p className="font-bold text-base">Was mich ausmacht: ich bleibe nicht stehen.</p>

              <p>Mir reicht die Oberfläche nicht. Ich muss den Hintergrund verstehen – denn nur wer die Tiefe kennt, kann an der Oberfläche wirklich wirken.</p>

              <p>Gerade weil ich als Mensch und Persönlichkeit sensibel bin, habe ich ein feines Gespür für Dynamiken, Menschen und Projekte. Kann das anstrengend sein? Ja. Bleibe ich deshalb stehen? Nein. Ich gehe weiter – lerne von jeder Seite, verstehe jeden Aspekt, um für das grosse Ganze gewappnet zu sein.</p>

              <p>Ich bleibe nicht Jahre in einem Bereich um ihn blind auswendig zu können. Ich wechsle die Perspektive – um den Blick für das ganze System zu behalten. Denn wer mehrere Seiten kennt, denkt vernetzter.</p>

              <p className="italic opacity-70">Um es in meiner Tanzsprache zu sagen: Warum jahrelang nur einen Tanzstil lernen – wenn ein anderer Stil dir beibringt wie man führt und sich führen lässt? Skills die auf jeden Tanz – und jede Zusammenarbeit – anwendbar sind.</p>
            </div>
          </div>
        </section>
      )}

      {/* === BEREICH 5: HINTERGRUND (Vita) === */}
      {/* ANPASSEN: Zeitstrahl in ccq-config.json unter "vita" eintragen. Optional */}
      {config.bereiche.hintergrund && (
        <section id="hintergrund" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Hintergrund</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="space-y-6 text-left">
              {config.vita.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="w-16 text-right text-xs opacity-50 pt-1 tracking-wider">{item.year}</div>
                  <div className="flex-1 text-sm opacity-85 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-4 text-left">
              <p className="text-sm leading-relaxed opacity-85">
                Als Assistenz über mehrere Jahre und auch heute virtuell für Sie erreichbar. Mit dem Wissen, dass das Wissen nie an einer Stelle stehen bleibt.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* === BEREICH 6: ANGEBOT (CTA) === */}
      {/* ANPASSEN: E-Mail in ccq-config.json unter "meta.email" eintragen */}
      {config.bereiche.angebot && (
        <section
          id="angebot"
          className="py-16 px-6"
          style={{ backgroundColor: "var(--ccq-secondary)" }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Angebot</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <p className="text-sm leading-relaxed opacity-85">
              Sie brauchen Unterstützung? Ich bin virtuell für Sie da.
            </p>

            <div className="pt-4 space-y-3">
              <a
                href={`mailto:${config.meta.email}?subject=Termin%20vereinbaren`}
                className="inline-block w-full py-3.5 px-6 rounded-full border border-white/40 bg-white/5
                           text-xs tracking-[0.2em] uppercase text-center
                           hover:bg-white/15 transition-all duration-300"
                style={{ color: "var(--ccq-light)" }}
              >
                Gespräch vereinbaren
              </a>
            </div>
          </div>
        </section>
      )}

      {/* === BEREICH 7: KONTAKT === */}
      {/* Immer gleich — nur QR-Code und Meta-Daten wechseln */}
      {config.bereiche.kontakt && (
        <section id="kontakt" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-light tracking-wide">Kontakt</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <img
                src="/stefania-qr.svg"
                alt={`QR-Code zu ${config.meta.name}`}
                className="w-36 h-36"
              />
            </div>

            <p className="text-sm">
              <a
                href="https://stefania-dolak-charactercard.vercel.app"
                className="underline underline-offset-4 hover:opacity-100 transition"
                style={{ color: "var(--ccq-light)", opacity: 0.8 }}
              >
                stefania-dolak-charactercard.vercel.app
              </a>
            </p>

            <button
              onClick={handleShare}
              className="mt-4 py-3.5 px-8 rounded-full border border-white/40 bg-white/5
                         text-xs tracking-[0.2em] uppercase
                         hover:bg-white/15 transition-all duration-300"
              style={{ color: "var(--ccq-light)" }}
            >
              Seite teilen
            </button>

            <div className="pt-4 space-y-2 text-sm opacity-60">
              <p>{config.meta.email}</p>
            </div>
          </div>
        </section>
      )}

      {/* === BEREICH 8: SPECIALS (Meine Überzeugung) === */}
      {/* ANPASSEN: Text in ccq-config.json unter "specials" eintragen. Optional ausblendbar */}
      {config.bereiche.specials && (
        <section
          className="py-16 px-6"
          style={{ backgroundColor: "var(--ccq-secondary)" }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Meine Überzeugung</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="text-left space-y-6 text-sm leading-relaxed">
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
      )}

      {/* === BEREICH 9: CCQ WERBUNG === */}
      {/* Immer gleich — nie ändern */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">CCQ / CHARACTERCARD</p>
          <p className="text-lg italic opacity-70">Deine Karte. Dein Charakter.</p>
        </div>
      </section>

      {/* === BEREICH 10: FOOTER === */}
      <footer className="py-6 px-4 text-center border-t border-white/10">
        <p className="text-[10px] tracking-wider opacity-30">© 2026 {config.meta.name}</p>
      </footer>
    </main>
  );
}
