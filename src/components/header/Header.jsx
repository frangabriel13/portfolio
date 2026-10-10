import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const NAV_ITEMS = [
  { id: "resumen",  label: "Resumen",   num: "01" },
  { id: "projects", label: "Proyectos", num: "02" },
  { id: "contact",  label: "Contacto",  num: "03" },
];

const EMAIL = "mansilla.franco.1@gmail.com";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [overHome, setOverHome] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
      // Home, Resumen, Proyectos y Contacto son blancos (y van seguidos):
      // mientras el header esté encima de alguno, usa la variante clara
      const lastLight =
        document.getElementById("contact") ||
        document.getElementById("projects") ||
        document.getElementById("resumen") ||
        document.getElementById("home");
      const headerHeight = 64;
      setOverHome(
        !lastLight ||
        window.pageYOffset < lastLight.offsetTop + lastLight.offsetHeight - headerHeight
      );
      // Sección actual: la última cuyo inicio ya pasó la mitad de la pantalla
      const mid = window.pageYOffset + window.innerHeight / 2;
      const current = NAV_ITEMS.filter(({ id }) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= mid;
      }).pop();
      setActiveId(current ? current.id : null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    // Wait one tick for React to remove overflow:hidden, then scroll.
    // The overlay closes over 650ms so the section is already in position when it reveals.
    setTimeout(() => scrollToSection(sectionId), 50);
  };

  return (
    <>
      <header className={`${s.container} ${isScrolled ? s.scrolled : ""} ${overHome || menuOpen ? s.light : ""} ${menuOpen ? s.menuOpen : ""}`}>
        <a href="#home" className={s.logo} onClick={() => scrollToSection("home")}>
          Franco.
        </a>

        {/* Desktop nav */}
        <nav className={s.desktopNav} aria-label="Navegación principal">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
              {label}
            </a>
          ))}
        </nav>

        {/* Redes (desktop) */}
        <div className={s.socials}>
          <a href="https://github.com/frangabriel13/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/frangabriel13/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`${s.hamburger} ${menuOpen ? s.active : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`${s.overlay} ${menuOpen ? s.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className={s.overlayBody}>
          <p className={`${s.overlayLabel} ${menuOpen ? s.revealed : ""}`}>Índice</p>

          <nav className={s.mobileNav} aria-label="Navegación móvil">
            {NAV_ITEMS.map(({ id, label, num }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${s.navItem} ${menuOpen ? s.revealed : ""} ${activeId === id ? s.navItemActive : ""}`}
                style={{ "--delay": `${0.12 + i * 0.07}s` }}
                aria-current={activeId === id ? "true" : undefined}
                onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
              >
                <span className={s.navNum}>{num}</span>
                <span className={s.navLabel}>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className={`${s.overlayFooter} ${menuOpen ? s.revealed : ""}`} style={{ "--delay": "0.36s" }}>
          <div className={s.mailBlock}>
            <span className={s.overlayLabel}>Escribime</span>
            <a href={`mailto:${EMAIL}`} className={s.mail}>{EMAIL}</a>
          </div>
          <div className={s.footerRow}>
            <div className={s.footerSocials}>
              <a href="https://github.com/frangabriel13/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/frangabriel13/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
            </div>
            <span className={s.location}>Buenos Aires, AR</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
