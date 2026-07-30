"use client";

import { useState } from "react";
import { useCCQConfig } from "../components/CCQConfigLoader";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [openOffer, setOpenOffer] = useState<string | null>(null);
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
      lang: "Ich übernehme für dich die Kommunikation mit deinen Kunden — per E-Mail, Telefon oder Chat. Schnell, zuverlässig und mit dem Gespür, das zwischen den Zeilen liest. Ob Anfragen, Beschwerden oder Follow-ups: Deine Kunden fühlen sich verstanden und gut betreut.",
    },
    {
      id: "mitarbeiter",
      title: "Mitarbeiterbetreuung",
      kurz: "Interne Kommunikation, die verbindet statt belastet.",
      lang: "Onboarding, Updates, Konflikte oder einfach nur jemand, der für das Team da ist — ich unterstütze dich bei der internen Kommunikation. Mit psychologischem Feingefühl und organisatorischer Klarheit, damit dein Team gut zusammenarbeitet.",
    },
    {
      id: "projekt",
      title: "Projektanalyse & Changemanagement",
      kurz: "Struktur schaffen, wo Chaos war.",
      lang: "Du hast ein Projekt, das nicht vorankommt? Oder einen Wandel, den niemand versteht? Ich analysiere die Lage, identifiziere Stolpersteine und entwickele einen klaren Plan — zusammen mit dir und deinem Team, damit der Change wirklich ankommt.",
    },
    {
      id: "webseite",
      title: "Webseitenanalyse & -erstellung",
      kurz: "Online sichtbar — und zwar richtig.",
      lang: "Deine Webseite ist deine digitale Visitenkarte. Ich analysiere, was funktioniert und was nicht — und wenn nötig, baue ich sie mit dir neu auf. Technisch fundiert, ästhetisch ansprechend und vor allem: so, dass deine Besucher verstehen, wer du bist.",
    },
    {
      id: "ccq",
      title: "CharacterCard Anpassung",
      kurz: "Deine digitale Visitenkarte, einzigartig wie du.",
      lang: "Eine CharacterCard ist mehr als eine Webseite — sie ist dein digitales Ich. Ich passe Layout, Texte, Farben und Inhalte so an, dass sie wirklich zu dir passen. Mit allem, was dazugehört: QR-Code, Kontaktfunktion, Share-Sheet und dem gewissen Etwas, das dich unverwechselbar macht.",
    },
  ];

  return (
    <main
      className="min-h-screen text-[var(--ccq-dark)] font-sans"
      style={{ backgroundColor: "var(--ccq-primary)" }}
    >
      {/* FLIP-CARD VISITENKARTE */}
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

      {/* NAVIGATION */}
      <section className="px-6 pb-8">
        <div className="max-w-md mx-auto space-y-3">
          {[
            ...(config.bereiche.profil ? [{ label: "Profil", id: "profil" }] : []),
            ...(config.bereiche.angebot ? [{ label: "Angebot", id: "angebot" }] : []),
            ...(config.bereiche.zielgruppe ? [{ label: "Zielgruppe", id: "zielgruppe" }] : []),
            ...(config.bereiche.wissen ? [{ label: "Hintergrund", id: "hintergrund" }] : []),
            ...(config.bereiche.charakter ? [{ label: "Charakter", id: "charakter" }] : []),
            ...(config.bereiche.spezial ? [{ label: "Spezial", id: "spezial" }] : []),
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

      {/* PROFIL */}
      {config.bereiche.profil && (
        <section id="profil" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Profil</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="text-left space-y-6 text-sm leading-relaxed">
              <p className="font-bold text-base text-center">Kommunikation verbindet. Kommunikation ist viel mehr – denn sie ist überall.</p>

              <p>Weisst du was passiert wenn Kommunikation nicht ankommt? Sie wird unsichtbar. Das Beste was du zu bieten hast – dein Herzensblut, deine Arbeit, dein Wissen – geht unter. Nicht weil es nicht gut genug ist. Sondern weil es nicht richtig gezeigt wird.</p>

              <p>Genau hier setze ich an.</p>

              <p>In einem Jahrzehnt im Kundenkontakt und in der Mitarbeiterbetreuung lernte ich: Kommunikation ist nicht nur direkter Kontakt – sie ist auch die Art wie man sich präsentiert. Kommunikation geschieht durch Worte. Durch Bilder. Durch das was zwischen den Zeilen steht – und durch das was du weglässt.</p>

              <p>Doch weisst du was heute leider nicht mehr alleine trägt? Menschlichkeit, Feinfühligkeit und Empathie. Es tut mir leid – aber es ist die Wahrheit die keiner ausspricht. Weil Wissen mit der Zeit geht, kam die Technik hinzu – und gerade sie hat vieles zerstört. Was früher durch ein Gespräch, durch Präsenz, durch echten Kontakt entstanden ist – geht heute oft unter.</p>

              <p>Weshalb ich mir gezielt technisches Know-how aneignete – in IT, Programmen, Darstellungen und dem Wissen von heute und morgen – um die Technik so zu nutzen dass das Wesentliche, was normalerweise untergeht, endlich sichtbar wird.</p>

              <p>Denn nur wer die Psychologie dahinter versteht – welche Bedürfnisse, Persönlichkeiten, Einschränkungen und Besonderheiten auf jeder Seite stehen – kann Kommunikation wirklich anpassen. Für eine Zielgruppe. Individuell. Oder für jeden.</p>

              <p>Das alles ist nicht getrennt – sondern wichtig miteinander zu verknüpfen. Wissen ist Macht – aber wertlos wenn es nicht richtig eingepflegt, verwaltet und gespeichert wird, um es so zu verändern dass es den grössten Erfolg bringt.</p>

              <p>Und Erfolg? Der ist für jeden anders. Für dich als Einzelperson. Für deinen Betrieb. Für dein Unternehmen. Doch so unterschiedlich jeder sein mag – am Ende geht es immer darum: das Richtige festhalten, es verstehen, verbessern und dann mutig loslegen. Nicht weil du nicht gut genug bist – sondern weil du die beste Version von dir und dem was du aufgebaut hast leben willst.</p>

              <p>Ein Bedürfnis das jeder in sich trägt: verstanden werden. Gesehen werden.</p>

              <p className="font-bold text-base text-center">Dieses Bedürfnis ist meine Motivation.</p>
            </div>
          </div>
        </section>
      )}

      {/* ANGEBOT */}
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
              <span className="font-bold">{config.claim}</span>
              <br />
              <span className="text-xs opacity-60">{config.subclaim}</span>
            </p>

            <p className="text-xs opacity-50">Ich arbeite stundenbasiert – für dich – in folgenden Bereichen:</p>

            <div className="space-y-3 pt-4 text-left">
              {angebote.map((angebot) => (
                <div key={angebot.id}>
                  <button
                    onClick={() => toggleOffer(angebot.id)}
                    className="w-full py-3.5 px-6 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm
                               text-white text-sm tracking-wide text-center
                               hover:bg-white/15 hover:border-white/60 transition-all duration-300 flex items-center justify-between"
                    style={{ color: "var(--ccq-light)" }}
                  >
                    <span>{angebot.title}</span>
                    <span className="text-xs opacity-50">{openOffer === angebot.id ? "▲" : "▼"}</span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openOffer === angebot.id ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-sm leading-relaxed">
                      <p className="font-bold mb-2">{angebot.kurz}</p>
                      <p className="opacity-85">{angebot.lang}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
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

      {/* ZIELGRUPPE */}
      {config.bereiche.zielgruppe && (
        <section id="zielgruppe" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Zielgruppe</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="space-y-6 text-left text-sm leading-relaxed">
              <p>Für wen ich arbeite:</p>

              <div className="space-y-3">
                {[
                  {
                    wer: "Selbstständige & Kleinunternehmen",
                    was: "Du hast keine Zeit für Verwaltung, Kommunikation und Webseite – aber du brauchst sie. Ich übernehme.",
                  },
                  {
                    wer: "Praxen & Therapeuten",
                    was: "Kundenkontakt, Terminorganisation, Webseite und das Gefühl, alles allein machen zu müssen. Ich entlaste.",
                  },
                  {
                    wer: "Restaurants & Gastronomie",
                    was: "Reservierungen, Kommunikation, digitale Präsenz. Ich sorge dafür, dass deine Gäste sich willkommen fühlen.",
                  },
                  {
                    wer: "Teams & Start-ups",
                    was: "Interne Kommunikation, Onboarding, Prozesse. Ich bin die Brücke zwischen Chaos und Struktur.",
                  },
                ].map((item) => (
                  <div
                    key={item.wer}
                    className="p-5 rounded-xl bg-white/5 border border-white/20"
                  >
                    <p className="font-bold mb-1">{item.wer}</p>
                    <p className="opacity-70 text-xs leading-relaxed">{item.was}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HINTERGRUND */}
      {config.bereiche.wissen && (
        <section
          id="hintergrund"
          className="py-16 px-6"
          style={{ backgroundColor: "var(--ccq-secondary)" }}
        >
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

            <div className="pt-6 text-left">
              <p className="text-sm leading-relaxed opacity-85">
                Als Assistenz über mehrere Jahre und auch heute virtuell für Sie erreichbar. Mit dem Wissen, dass das Wissen nie an einer Stelle stehen bleibt.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CHARAKTER */}
      {config.bereiche.charakter && (
        <section id="charakter" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Charakter</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <div className="text-left space-y-6 text-sm leading-relaxed">
              <p className="font-bold text-base">Ich bleibe nicht stehen.</p>

              <p>Mir reicht die Oberfläche nicht. Ich muss den Hintergrund verstehen – denn nur wer die Tiefe kennt, kann an der Oberfläche wirklich wirken.</p>

              <p>Gerade weil ich als Mensch und Persönlichkeit sensibel bin, habe ich ein feines Gespür für Dynamiken, Menschen und Projekte. Kann das anstrengend sein? Ja. Bleibe ich deshalb stehen? Nein. Ich gehe weiter – lerne von jeder Seite, verstehe jeden Aspekt, um für das grosse Ganze gewappnet zu sein.</p>

              <p>Ich bleibe nicht Jahre in einem Bereich um ihn blind auswendig zu können. Ich wechsle die Perspektive – um den Blick für das ganze System zu behalten. Denn wer mehrere Seiten kennt, denkt vernetzter.</p>

              <p className="italic opacity-70">Um es in meiner Tanzsprache zu sagen: Warum jahrelang nur einen Tanzstil lernen – wenn ein anderer Stil dir beibringt wie man führt und sich führen lässt? Skills die auf jeden Tanz – und jede Zusammenarbeit – anwendbar sind.</p>
            </div>
          </div>
        </section>
      )}

      {/* SPEZIAL */}
      {config.bereiche.spezial && (
        <section
          id="spezial"
          className="py-16 px-6"
          style={{ backgroundColor: "var(--ccq-secondary)" }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light tracking-wide">Spezial</h2>
            <div className="w-12 h-px bg-white/30 mx-auto" />

            <p className="text-sm opacity-60">Hier erscheinen bald Downloads, Checklisten und Extras für dich.</p>

            <div className="py-8">
              <div className="inline-block p-8 rounded-xl border-2 border-dashed border-white/20 bg-white/5">
                <span className="text-4xl opacity-30">📥</span>
                <p className="mt-4 text-sm opacity-50">Demnächst verfügbar</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* KONTAKT */}
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

      {/* CCQ WERBUNG */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">CCQ / CHARACTERCARD</p>
          <p className="text-lg italic opacity-70">Deine Karte. Dein Charakter.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 text-center border-t border-white/10">
        <p className="text-[10px] tracking-wider opacity-30">© 2026 {config.meta.name}</p>
      </footer>
    </main>
  );
}
