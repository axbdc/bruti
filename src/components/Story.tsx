import { useLang } from "../context/LanguageContext";

export function Story() {
  const { t } = useLang();
  return (
    <section id="historia" className="relative py-24 md:py-36 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
        {/* Image / visual block */}
        <div className="md:col-span-5 reveal">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/restaurant-interior.jpg"
              alt="Interior do restaurante Bruti, iluminação cálida ao jantar"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Forno · Lenha · Alma</div>
            </div>
          </div>

          {/* Italian flag detail */}
          <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream-mute">
            <div className="flex">
              <div className="h-2 w-3 bg-italia-green" />
              <div className="h-2 w-3 bg-cream" />
              <div className="h-2 w-3 bg-italia-red" />
            </div>
            <span>Autenticità Italiana</span>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7 reveal">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6">
            {t.story.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream whitespace-pre-line">
            {t.story.title}
          </h2>
          <div className="mt-10 space-y-6 text-cream-dim text-base md:text-lg leading-relaxed max-w-xl">
            {t.story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4">
            <span className="font-display italic text-gold text-xl">— {t.story.signature}</span>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] hairline" />
    </section>
  );
}
