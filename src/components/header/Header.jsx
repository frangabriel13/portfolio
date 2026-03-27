import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const NAV_ITEMS = [
  { id: "home",     label: "Home",     num: "01" },
  { id: "about",    label: "About",    num: "02" },
  { id: "skills",   label: "Skills",   num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "contact",  label: "Contact",  num: "05" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    setTimeout(() => scrollToSection(sectionId), 300);
  };

  return (
    <>
      <header className={`${s.container} ${isScrolled ? s.scrolled : ""}`}>
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
