import { useEffect } from "react";
import { menu } from "../data/menu";
import { useLang } from "../context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MenuDrawer({ open, onClose }: Props) {
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={t.menuDrawer.close}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.menuDrawer.title}
        className={`absolute right-0 top-0 h-full w-[92vw] sm:w-[480px] md:w-[500px] bg-ink-800 border-l border-white/5 shadow-2xl flex flex-col transition-transform duration-[450ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex-shrink-0 flex items-start justify-between gap-6 px-8 pt-10 pb-6 border-b border-white/5 bg-ink-900/60">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Il Menu</div>
            <h2 className="font-display text-3xl text-cream leading-tight">{t.menuDrawer.title}</h2>
            <p className="mt-2 text-xs text-cream-mute leading-relaxed max-w-xs">
              {t.menuDrawer.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.menuDrawer.close}
            className="text-cream-dim hover:text-gold transition-colors p-2 -mr-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {/* Scrollable */}
        <div className="drawer-scroll flex-1 overflow-y-auto px-8 py-10">
          {menu.map((category) => (
            <section key={category.id} className="mb-14 last:mb-0">
              <h3 className="text-[11px] uppercase tracking-[0.35em] text-gold mb-8 pb-2 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-8">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-xl text-cream flex-1 leading-tight">
                        {item.name}
                      </span>
                      <span className="flex-1 mx-1 border-b border-dotted border-cream/20 self-end mb-1.5" />
                      <span className="font-display text-lg text-gold whitespace-nowrap">
                        {item.price}€
                      </span>
                    </div>

                    {item.description && (
                      <p className="mt-2 text-[13px] text-cream-dim leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}

                    {item.labels && item.labels.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.labels.map((l) => (
                          <span
                            key={l}
                            className="text-[10px] uppercase tracking-[0.2em] text-cream-mute border border-cream/15 px-2 py-0.5"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.extras && item.extras.length > 0 && (
                      <ul className="mt-2 space-y-0.5">
                        {item.extras.map((x) => (
                          <li key={x.label} className="text-[11px] text-cream-mute italic">
                            {t.menuDrawer.add} {x.label.toLocaleLowerCase()} — {x.price}€
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="mt-6 pt-6 border-t border-white/10 text-[11px] text-cream-mute leading-relaxed">
            Preços em euros. IVA incluído. Disponibilidade sujeita a sazonalidade.
            Por favor informe o nosso staff sobre alergias ou intolerâncias alimentares.
          </div>
        </div>
      </aside>
    </div>
  );
}
