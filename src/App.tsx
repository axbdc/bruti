import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { useReveal } from "./hooks/useReveal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { InstagramSection } from "./components/InstagramSection";
import { ReserveSection } from "./components/ReserveSection";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { MenuDrawer } from "./components/MenuDrawer";
import { ReserveModal } from "./components/ReserveModal";

function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-ink-900 text-cream antialiased selection:bg-gold selection:text-ink-950">
      <Navbar onOpenMenu={() => setMenuOpen(true)} onOpenReserve={() => setReserveOpen(true)} />
      <main>
        <Hero onOpenMenu={() => setMenuOpen(true)} onOpenReserve={() => setReserveOpen(true)} />
        <Story />
        <InstagramSection />
        <ReserveSection onOpenReserve={() => setReserveOpen(true)} />
        <Location />
      </main>
      <Footer />

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
