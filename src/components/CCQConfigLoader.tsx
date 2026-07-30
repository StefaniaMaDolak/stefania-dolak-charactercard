"use client";

import { useEffect, useState } from "react";

export interface CCQConfig {
  visitenkarte: {
    vorne: string;
    hinten: string;
  };
  farben: {
    primary: string;
    secondary: string;
    dark: string;
    light: string;
  };
  meta: {
    name: string;
    titel: string;
    email: string;
  };
  bereiche: {
    profil: boolean;
    angebot: boolean;
    zielgruppe: boolean;
    wissen: boolean;
    charakter: boolean;
    spezial: boolean;
    kontakt: boolean;
  };
  leistungen: string[];
  vita: { year: string; text: string }[];
  claim: string;
  subclaim: string;
}

export function useCCQConfig() {
  const [config, setConfig] = useState<CCQConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/ccq-config.json")
      .then((r) => r.json())
      .then((data: CCQConfig) => {
        // CSS-Variablen setzen
        document.documentElement.style.setProperty("--ccq-primary", data.farben.primary);
        document.documentElement.style.setProperty("--ccq-secondary", data.farben.secondary);
        document.documentElement.style.setProperty("--ccq-dark", data.farben.dark);
        document.documentElement.style.setProperty("--ccq-light", data.farben.light);
        setConfig(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { config, loading };
}
