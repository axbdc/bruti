import { useLang } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink-950 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-5">
            <div className="font-wordmark text-cream text-2xl tracking-[0.35em]">BRUTI</div>
            <p className="mt-3 font-display italic text-cream-dim text-sm">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-6 text-[11px] uppercase tracking-[0.25em]">
              <a
                href="https://instagram.com/pizzeriabruti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/PizzeriaBruti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              {t.visit.eyebrow}
            </div>
            <p className="text-cream text-sm leading-relaxed">{t.footer.address}</p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              {t.visit.phoneLabel}
            </div>
            <a
              href="tel:+351217250001"
              className="text-cream text-sm hover:text-gold transition-colors"
            >
              +351 217 250 001
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-cream-mute">
            © {year} Bruti — Pizzeria &amp; Restaurante. {t.footer.rights}
          </p>
          <p className="text-[11px] text-cream-mute italic">{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
