import { useLang } from "../context/LanguageContext";

// Placeholder posts — shown only when the Behold widget is NOT yet injected.
// These give the grid structure while the real embed isn't configured.
const placeholders = [
  "/images/dish-burrata.jpg",
  "/images/dish-pasta.jpg",
  "/images/pizza-oven.jpg",
  "/images/dish-tiramisu.jpg",
  "/images/hero-pizza.jpg",
  "/images/restaurant-interior.jpg",
  "/images/dish-burrata.jpg",
  "/images/dish-pasta.jpg",
];

export function InstagramSection() {
  const { t } = useLang();

  // TODO: Behold widget embed
  // When ready, paste the <behold-widget> tag here and add the script
  // (https://behold.so) in index.html or below. The placeholders will be
  // replaced in the DOM by the widget once it initialises. Use a guard like
  // {onceHoldWidgetReady ? <behold-widget .../> : <Placeholders />}
  // or simply drop the <behold-widget> tag in the container.
  const beholdReady = false;

  return (
    <section id="instagram" className="relative py-24 md:py-32 bg-ink-900 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12 md:mb-16">
          <div className="md:col-span-7 reveal">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6">
              {t.instagram.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream whitespace-pre-line">
              {t.instagram.title}
            </h2>
          </div>
          <div className="md:col-span-5 reveal md:text-right">
            <p className="text-cream-dim text-base md:text-lg leading-relaxed md:max-w-sm md:ml-auto">
              {t.instagram.body}
            </p>
            <a
              href="https://instagram.com/pizzeriabruti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-cream transition-colors"
            >
              {t.instagram.cta}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        {/* =============================================
            BEHOLD WIDGET — PLACEHOLDER
            Substitute the container below with the
            Behold embed snippet when ready:

              <behold-widget feed-id="YOUR_FEED_ID"></behold-widget>
              <script async src="https://w.behold.so/widget.js" type="module"></script>
            ============================================= */}
        <div className="reveal">
          {beholdReady ? (
            <div data-behold-slot className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* <behold-widget feed-id="YOUR_FEED_ID"></behold-widget> */}
            </div>
          ) : (
            <div
              aria-hidden
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              title={t.instagram.placeholder}
            >
              {placeholders.map((src, i) => (
                <a
                  key={i}
                  href="https://instagram.com/pizzeriabruti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-[1.06] grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-ink-950/40 group-hover:bg-ink-950/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-wordmark text-cream/80 text-xs tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      BRUTI
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
