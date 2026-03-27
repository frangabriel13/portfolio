import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home',     id: 'home'     },
    { label: 'About',    id: 'about'    },
    { label: 'Skills',   id: 'skills'   },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact',  id: 'contact'  },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.topAccent} aria-hidden="true"></div>

      <div className={s.container}>

        {/* ── Brand ── */}
        <div className={s.brand}>
          <span className={s.logo}>mandeveloper</span>
          <p className={s.tagline}>Desarrollador Web Full Stack</p>
        </div>

        {/* ── Quick navigation ── */}
        <div className={s.column}>
          <h5 className={s.columnTitle}>Navegación</h5>
          <nav aria-label="Footer navigation">
            <ul className={s.navList}>
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleMenuClick(id)}
                    className={s.navLink}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Contact ── */}
        <div className={s.column}>
          <h5 className={s.columnTitle}>Contacto</h5>
          <a href="mailto:mansilla.franco.1@gmail.com" className={s.emailLink}>
            <i className="bx bx-envelope" aria-hidden="true"></i>
            mansilla.franco.1@gmail.com
          </a>
          <div className={s.socialIcons}>
            <a
              href="https://www.linkedin.com/in/frangabriel13/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/frangabriel13/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/frangabriel.13/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/frangabriel13_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={s.bottomBar}>
        <p className={s.copy}>© 2023 mandeveloper. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
