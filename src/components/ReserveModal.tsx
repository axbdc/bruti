import { useEffect } from "react";
import { useLang } from "../context/LanguageContext";

/**
 * Reservation modal — preparado para a OPÇÃO B (widget do Dig In embebido).
 *
 * ── COMO ATIVAR A OPÇÃO B ──────────────────────────────────────────
 * 1. Pedir ao cliente o widget de reservas no painel DIG-IN BIZ / Book Lite.
 * 2. Se vier como IFRAME: cola o URL em DIGIN_WIDGET_SRC e põe
 *    DIGIN_WIDGET_READY = true. Fica logo a funcionar dentro do modal.
 * 3. Se vier como <script> (em vez de iframe): vê o bloco comentado
 *    "VARIANTE SCRIPT" mais abaixo — descomenta o useEffect e usa a div
 *    #digin-widget-root como alvo.
 *
 * Enquanto DIGIN_WIDGET_READY for false, mostra-se a OPÇÃO A
 * (encaminhamento para a página do Dig In), por isso o site funciona já.
 *
 * Nota: em qualquer das opções, a reserva é processada e confirmada pelo
 * Dig In. O widget só traz o formulário deles para dentro do site.
 */

// ───── Configuração ─────
const DIGIN_WIDGET_READY = false;                 // <- pôr true quando o snippet estiver colado
const DIGIN_WIDGET_SRC = "";                       // <- colar aqui o URL do iframe do Dig In
const DIGIN_RESERVE_URL = "https://www.dig-in.pt/restaurante/bruti"; // <- fallback (Opção A): link real do perfil
const PHONE = "+351217250001";
const PHONE_DISPLAY = "+351 217 250 001";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ReserveModal({ open, onClose }: Props) {
  const { t, lang } = useLang();

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

  // ───── VARIANTE SCRIPT (Opção B com <script> em vez de iframe) ─────
  // Descomenta este bloco se o Dig In te der um <script> que injeta o widget.
  // useEffect(() => {
  //   if (!open || !DIGIN_WIDGET_READY) return;
  //   const s = document.createElement("script");
  //   s.src = "URL_DO_SCRIPT_DO_DIG_IN"; // <- colar
  //   s.async = true;
  //   document.getElementById("digin-widget-root")?.appendChild(s);
  //   return () => { s.remove(); };
  // }, [open]);

  const note =
    lang === "pt"
      ? "Vai ser encaminhado para o Dig In para escolher a data e a hora e confirmar a reserva."
      : "You'll be taken to Dig In to choose your date and time and confirm your booking.";
  const bookLabel = lang === "pt" ? "Reservar no Dig In" : "Book on Dig In";

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
            <h3 className="font-display text-3xl text-cream leading-tight">{t.reserve.cta}</h3>
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
          {DIGIN_WIDGET_READY ? (
            /* ───── OPÇÃO B — widget do Dig In embebido ───── */
            <div
              id="digin-widget-root"
              data-digin-slot
              className="overflow-hidden bg-ink-900/50 border border-white/5"
            >
              {DIGIN_WIDGET_SRC ? (
                <iframe
                  title="Reservas Dig In"
                  src={DIGIN_WIDGET_SRC}
                  loading="lazy"
                  className="w-full h-[520px] bg-transparent"
                />
              ) : null}
              {/* Se for variante <script>, o widget injeta-se aqui dentro */}
            </div>
          ) : (
            /* ───── OPÇÃO A — encaminhamento (fallback ativo) ───── */
            <div className="flex flex-col items-center justify-center text-center bg-ink-900/50 border border-white/5 p-8">
              <p className="text-cream-dim text-sm leading-relaxed max-w-xs mb-6">{note}</p>
              <a
                href={DIGIN_RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-ink-900 px-7 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors"
              >
                {bookLabel} <span aria-hidden>↗</span>
              </a>
            </div>
          )}

          <p className="mt-5 text-[11px] text-cream-mute text-center">
            {t.reserve.alternative}{" "}
            <a href={`tel:${PHONE}`} className="text-gold hover:text-cream">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
