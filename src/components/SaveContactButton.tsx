"use client";

export default function SaveContactButton() {
  const handleShare = async () => {
    // Base64-Bild direkt eingebettet (200x200px JPEG)
    const photoBase64 = "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";

    // vCard 4.0 mit data-URI fuer Bilder
    // iOS, Android, WhatsApp unterstuetzen dieses Format
    const vcardContent = `BEGIN:VCARD
VERSION:4.0
FN:CCQ Charactercard
N:Charactercard;CCQ;;;
ORG:CCQ
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:hello@ccq-card.ch
URL:https://ccq-produktseite.vercel.app
PHOTO:data:image/jpeg;base64,${photoBase64}
NOTE:Erkannt werden fuer das was wirklich zaehlt
END:VCARD`;

    const file = new File([vcardContent], "ccq.vcf", {
      type: "text/vcard",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        // @ts-ignore
        await navigator.share({
          files: [file],
          title: "CCQ Charactercard",
          text: "Erkannt werden fuer das was wirklich zaehlt",
        });
      } catch (err) {
        console.log("Share abgebrochen:", err);
      }
    } else {
      const blob = new Blob([vcardContent], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ccq.vcf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleShare}
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-black to-gray-800 text-white font-bold text-lg py-5 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-gray-200"
      >
        <span className="text-3xl">📲</span>
        <span>
          Als Kontakt speichern
          <span className="block text-sm font-normal text-gray-300 mt-1">
            Direkt in dein Telefon
          </span>
        </span>
      </button>
      <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto">
        🎯 iPhone: Im Share-Sheet nach rechts scrollen → „Kontakte" auswählen
      </p>
    </div>
  );
}
