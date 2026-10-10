import s from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Inicio", id: "home" },
  { label: "Resumen", id: "resumen" },
  { label: "Proyectos", id: "projects" },
  { label: "Contacto", id: "contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frangabriel13/" },
  { label: "GitHub", href: "https://github.com/frangabriel13/" },
  { label: "Instagram", href: "https://www.instagram.com/frangabriel.13/" },
  { label: "X", href: "https://twitter.com/frangabriel13_/" },
];

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.columns}>
          {/* ── Marca ── */}
          <div className={s.brand}>
            <a href="#home" className={s.logo} onClick={(e) => scrollToSection(e, "home")}>
              <span className={s.highlight}>Franco.</span>
            </a>
            <p className={s.tagline}>
              Full Stack Developer en Buenos Aires. Construyo sistemas web y mobile completos.
            </p>
          </div>

          {/* ── Navegación ── */}
          <nav className={s.column} aria-label="Pie de página">
            <span className={s.columnTitle}>Navegación</span>
            {NAV_LINKS.map(({ label, id }) => (
              <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
                {label}
              </a>
            ))}
          </nav>

          {/* ── Contacto ── */}
          <div className={s.column}>
            <span className={s.columnTitle}>Contacto</span>
            <a href="mailto:mansilla.franco.1@gmail.com" className={s.email}>
              mansilla.franco.1@gmail.com
            </a>
            <a href="https://api.whatsapp.com/send?phone=541158742482" target="_blank" rel="noopener noreferrer">
              WhatsApp ↗
            </a>
          </div>

          {/* ── Redes ── */}
          <div className={s.column}>
            <span className={s.columnTitle}>Redes</span>
            {SOCIALS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className={s.bottomBar}>
          <p className={s.copy}>
            © {new Date().getFullYear()} Franco Mansilla. Todos los derechos reservados.
          </p>
          <button type="button" className={s.topButton} onClick={scrollToTop} aria-label="Volver arriba">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
