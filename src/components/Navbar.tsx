import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

interface Props {
  onOpenMenu: () => void;
  onOpenReserve: () => void;
}

export function Navbar({ onOpenMenu, onOpenReserve }: Props) {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Block body scroll while mobile menu is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const links = [
    { href: "#historia", label: t.nav.story },
    { href: "#instagram", label: t.nav.instagram },
    { href: "#visitar", label: t.nav.visit },
  ];

  const headerBg =
    mobileOpen || scrolled
      ? "bg-[#16120F] border-b border-white/10"
      : "bg-transparent";
  const py = mobileOpen || scrolled ? "py-3" : "py-6";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerBg} ${py}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <a
            href="#top"
            onClick={closeMobile}
            className="font-wordmark text-cream text-lg md:text-xl tracking-[0.25em] hover:text-gold transition-colors"
          >
            BRUTI
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-cream-dim">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
            <button onClick={onOpenMenu} className="hover:text-gold transition-colors">
              {t.nav.menu}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="hidden md:inline-flex text-[10px] uppercase tracking-[0.22em] text-cream-mute hover:text-gold transition-colors"
              aria-label="Toggle language"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button
              onClick={onOpenReserve}
              className="hidden sm:inline-flex items-center gap-2 border border-gold/60 text-gold hover:bg-gold hover:text-ink-900 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all duration-300"
            >
              {t.hero.ctaReserve}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-cream p-2 -mr-2 relative w-10 h-10 flex items-center justify-center"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <span className="flex flex-col gap-[5px]">
                  <span className="block w-6 h-px bg-current" />
                  <span className="block w-6 h-px bg-current" />
                  <span className="block w-4 h-px bg-current ml-auto" />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu — covers entire viewport as a separate fixed overlay
          so it's never clipped by the header. Translate off-screen when closed. */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#16120F] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          mobileOpen ? "translate-y-0" : "translate-y-full pointer-events-none"
        }`}
      >
        {/* Leave space at top for the header */}
        <nav className="flex flex-col h-full px-6 pt-24 pb-10 overflow-y-auto">
          <div className="space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMobile}
                className="block py-4 font-display text-3xl text-cream border-b border-white/5 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                closeMobile();
                onOpenMenu();
              }}
              className="w-full text-left py-4 font-display text-3xl text-cream border-b border-white/5 hover:text-gold transition-colors"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => {
                closeMobile();
                onOpenReserve();
              }}
              className="w-full text-left py-4 font-display text-3xl text-gold border-b border-white/5 hover:text-cream transition-colors"
            >
              {t.hero.ctaReserve}
            </button>
          </div>

          <div className="mt-auto pt-10 flex items-center justify-between">
            <button
              onClick={() => {
                toggle();
                closeMobile();
              }}
              className="text-[10px] uppercase tracking-[0.3em] text-cream-mute hover:text-gold transition-colors"
            >
              {lang === "pt" ? "English" : "Português"}
            </button>

            <a
              href="tel:+351217250001"
              className="text-[11px] uppercase tracking-[0.25em] text-cream-dim hover:text-gold transition-colors"
            >
              +351 217 250 001
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
