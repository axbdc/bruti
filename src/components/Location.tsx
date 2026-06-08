import { useLang } from "../context/LanguageContext";

export function Location() {
  const { t } = useLang();
  return (
    <section id="visitar" className="relative py-24 md:py-32 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal mb-14">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6">
            {t.visit.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-cream">
            {t.visit.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 reveal order-2 md:order-1 space-y-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream-mute mb-3">
                {t.visit.phoneLabel}
              </div>
              <a
                href="tel:+351217250001"
                className="font-display text-2xl text-cream hover:text-gold transition-colors"
              >
                +351 217 250 001
              </a>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream-mute mb-3">
                {t.visit.hoursTitle}
              </div>
              <ul className="space-y-1.5 text-cream">
                {t.visit.hours.map((h) => (
                  <li key={h} className={h.includes("Encerrado") || h.includes("Closed") ? "text-cream-mute italic text-sm" : "font-display text-xl"}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream-mute mb-3">
                {t.footer.tagline}
              </div>
              <p className="text-cream-dim leading-relaxed">{t.footer.address}</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Jos%C3%A9+Malhoa+14B+Lisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-cream transition-colors border-b border-gold/40 pb-1"
            >
              {t.visit.mapCta} <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="md:col-span-7 reveal order-1 md:order-2">
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden border border-white/5">
              <iframe
                title="Bruti — Localização"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.1655%2C38.7280%2C-9.1515%2C38.7380&layer=mapnik&marker=38.7330%2C-9.1585"
                loading="lazy"
                className="absolute inset-0 h-full w-full bg-ink-800 grayscale contrast-125"
                style={{ filter: "grayscale(1) invert(0.92) hue-rotate(180deg) brightness(0.85)" }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
