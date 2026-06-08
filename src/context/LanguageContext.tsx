import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "../data/translations";

interface TranslationShape {
  nav: { story: string; menu: string; instagram: string; reserve: string; visit: string };
  hero: { tagline: string; ctaMenu: string; ctaReserve: string; scroll: string };
  story: { eyebrow: string; title: string; body: string[]; signature: string };
  menuDrawer: { title: string; subtitle: string; close: string; add: string };
  instagram: { eyebrow: string; title: string; body: string; cta: string; placeholder: string };
  reserve: { eyebrow: string; titlePre: string; titleAccent: string; body: string; cta: string; via: string; alternative: string; callLabel: string; cards: { title: string; body: string }[] };
  visit: { eyebrow: string; title: string; phoneLabel: string; hoursTitle: string; hours: string[]; mapCta: string };
  footer: { tagline: string; rights: string; credits: string; address: string };
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = translations[lang];
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
