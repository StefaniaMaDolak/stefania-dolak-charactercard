"use client";

export default function SaveContactButton() {
  const handleShare = async () => {
    const vcardContent = `BEGIN:VCARD
VERSION:4.0
FN:Stefania Dolak
N:Dolak;Stefania;;;
ORG:VA für Kommunikationsmanagement
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:stefania.dolak@mail.ch
URL:https://stefania-dolak-charactercard.vercel.app
NOTE:Erkannt werden fuer das was wirklich zaehlt
END:VCARD`;

    const file = new File([vcardContent], "stefania-dolak.vcf", {
      type: "text/vcard",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "Stefania Dolak",
          text: "VA für Kommunikationsmanagement",
        });
      } catch (err) {
        console.log("Share abgebrochen:", err);
      }
    } else {
      const blob = new Blob([vcardContent], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "stefania-dolak.vcf";
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
    </div>
  );
}
