import { useLang } from "../context/LanguageContext";

interface Props {
  onOpenReserve: () => void;
}

export function ReserveSection({ onOpenReserve }: Props) {
  const { t } = useLang();
  return (
    <section id="reservas" className="relative w-full overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/restaurant-interior.jpg"
          alt="Interior do restaurante Bruti à luz das velas"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-10 py-24 md:py-36 text-center w-full">
        <div className="reveal flex flex-col items-center">
          {/* Eyebrow with flanking lines */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/50" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold">
              {t.reserve.eyebrow}
            </span>
            <span className="h-px w-10 bg-gold/50" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            {t.reserve.titlePre}
            <span className="italic text-gold">{t.reserve.titleAccent}</span>
          </h2>

          <p className="mt-8 text-cream-dim text-base md:text-lg leading-relaxed max-w-xl">
            {t.reserve.body}
          </p>

          <button
            onClick={onOpenReserve}
            className="group mt-12 inline-flex items-center gap-3 bg-gold text-ink-900 px-10 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-gold-deep hover:scale-[1.02] transition-all duration-500"
          >
            {t.reserve.cta}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-cream-mute">
            {t.reserve.via}
          </p>

          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream-mute mb-2">
              {t.reserve.alternative}
            </p>
            <a
              href="tel:+351217250001"
              className="font-display text-2xl md:text-3xl text-cream hover:text-gold transition-colors"
            >
              +351 217 250 001
            </a>
          </div>
        </div>

        {/* Info cards */}
        <div className="reveal mt-16 grid sm:grid-cols-3 border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {t.reserve.cards.map((card) => (
            <div key={card.title} className="p-6 md:p-7 text-left">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                {card.title}
              </div>
              <p className="text-[13px] text-cream-dim leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Italian flag accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex">
        <div className="h-[2px] w-10 bg-italia-green" />
        <div className="h-[2px] w-10 bg-cream" />
        <div className="h-[2px] w-10 bg-italia-red" />
      </div>
    </section>
  );
}
