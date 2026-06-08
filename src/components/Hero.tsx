import { useLang } from "../context/LanguageContext";

interface Props {
  onOpenMenu: () => void;
  onOpenReserve: () => void;
}

export function Hero({ onOpenMenu, onOpenReserve }: Props) {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-pizza.jpg"
          alt="Pizza napolitana Margherita em fundo escuro"
          className="h-full w-full object-cover kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
      </div>

      {/* Italian flag accent — tiny vertical bar bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex">
        <div className="h-[2px] w-10 bg-italia-green" />
        <div className="h-[2px] w-10 bg-cream" />
        <div className="h-[2px] w-10 bg-italia-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-5 md:px-10 text-center pt-20 pb-28">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6 animate-fade">
          Pizzeria &amp; Restaurante · Lisboa
        </div>

        <h1 className="font-wordmark text-cream text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none animate-fade">
          BRUTI
        </h1>

        <div className="mt-8 flex items-center gap-4 text-cream-mute text-xs uppercase tracking-[0.3em]">
          <span className="h-px w-12 bg-cream/30" />
          <span>Est. 2024</span>
          <span className="h-px w-12 bg-cream/30" />
        </div>

        <p className="font-display italic text-cream text-xl md:text-2xl lg:text-3xl mt-10 max-w-xl leading-relaxed animate-fade">
          {t.hero.tagline}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade">
          <button
            onClick={onOpenMenu}
            className="group relative inline-flex items-center gap-3 bg-gold text-ink-900 px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
          >
            {t.hero.ctaMenu}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={onOpenReserve}
            className="inline-flex items-center gap-3 border border-cream/30 text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-all"
          >
            {t.hero.ctaReserve}
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-mute text-[10px] uppercase tracking-[0.3em]">
        <span>{t.hero.scroll}</span>
        <span className="block w-px h-10 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
