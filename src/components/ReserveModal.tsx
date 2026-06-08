import { useEffect } from "react";
import { useLang } from "../context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Reservation modal — wraps the Dig-In widget.
 *
 * TODO: Dig-In widget embed
 * When ready, paste the Dig-In embed snippet inside the slot marked below.
 * E.g.:
 *   <div id="digin-root"></div>
 *   <script async src="https://widget.dig-in.com/..."></script>
 *
 * In the meantime, a clean placeholder / direct-link fallback is shown so
 * visitors can still book via a new-tab link while the widget is not in place.
 */
export function ReserveModal({ open, onClose }: Props) {
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

  // Direct-link fallback (replace with your real Dig-In URL)
  const digInUrl = "https://digin.pt/restaurant/bruti";

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`absolute left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-ink-800 border border-white/10 shadow-2xl transition-all duration-500 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <header className="flex items-start justify-between gap-6 px-8 pt-8 pb-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Prenotazione</div>
            <h3 className="font-display text-3xl text-cream leading-tight">
              {t.reserve.cta}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-cream-dim hover:text-gold transition-colors p-2 -mr-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="px-8 pb-8">
          {/* =============================================
              DIG-IN WIDGET PLACEHOLDER
              Replace this block with your Dig-In embed
              snippet when ready.
              ============================================= */}
          <div
            data-digin-slot
            className="min-h-[280px] flex flex-col items-center justify-center text-center border border-dashed border-gold/30 bg-ink-900/50 p-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Dig-In Widget
            </p>
            <p className="text-cream-dim text-sm leading-relaxed max-w-xs mb-6">
              O widget de reservas será carregado aqui assim que o snippet do Dig-In seja colocado no componente <code className="text-gold text-xs">ReserveModal</code>.
            </p>
            <a
              href={digInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink-900 px-6 py-3 text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors"
            >
              Reservar no Dig-In <span aria-hidden>↗</span>
            </a>
          </div>

          <p className="mt-5 text-[11px] text-cream-mute text-center">
            {t.reserve.alternative}
            <a href="tel:+351217250001" className="text-gold hover:text-cream">+351 217 250 001</a>
          </p>
        </div>
      </div>
    </div>
  );
}
