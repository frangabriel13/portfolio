import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const NAV_ITEMS = [
  { id: "home",     label: "Inicio",    num: "01" },
  { id: "resumen",  label: "Resumen",   num: "02" },
  { id: "projects", label: "Proyectos", num: "03" },
  { id: "contact",  label: "Contacto",  num: "04" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [overHome, setOverHome] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
      // Home y Resumen son blancos (y van seguidos): mientras el header esté
      // encima de alguno de los dos, usa la variante clara
      const lastLight = document.getElementById("resumen") || document.getElementById("home");
      const headerHeight = 64;
      setOverHome(
        !lastLight ||
        window.pageYOffset < lastLight.offsetTop + lastLight.offsetHeight - headerHeight
      );
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
      <header className={`${s.container} ${isScrolled ? s.scrolled : ""} ${overHome && !menuOpen ? s.light : ""}`}>
        <a href="#home" className={s.logo} onClick={() => scrollToSection("home")}>
          Franco.
        </a>

        {/* Desktop nav */}
        <nav className={s.desktopNav} aria-label="Navegación principal">
          {NAV_ITEMS.filter(({ id }) => id !== "home").map(({ id, label }) => (
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
        <div className={s.overlayGrid} aria-hidden="true" />

        <nav className={s.mobileNav} aria-label="Navegación móvil">
          {NAV_ITEMS.map(({ id, label, num }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${s.navItem} ${menuOpen ? s.navItemVisible : ""}`}
              style={{ "--delay": `${0.1 + i * 0.07}s` }}
              onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
            >
              <span className={s.navNum}>{num}</span>
              <span className={s.navLabel}>{label}</span>
              <span className={s.navArrow} aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`${s.cta} ${menuOpen ? s.ctaVisible : ""}`}
          onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
        >
          <span>Contactame</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </>
  );
}

export default Header;
