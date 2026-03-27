import React from "react";
import s from "./Home.module.css";
import cv from "../../assets/fMansillaCV.pdf";
import portada from "../../assets/escritorio-ia.png";

const Home = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Franco_Mansilla_CV.pdf";
    link.click();
  };

  return (
    <section className={s.container} id="home">
      <div className={s.leftSection}>

        {/* Role badge — establece contexto antes del nombre */}
        <div className={s.badge}>
          <span className={s.badgeDot} aria-hidden="true" />
          <h3 className={s.subtitle}>Full Stack Developer · Disponible</h3>
        </div>

        {/* Título principal */}
        <h1 className={s.title}>
          Hola, soy <span className={s.titleAccent}>Franco</span>
        </h1>

        {/* Descripción */}
        <p className={s.description}>
          Construyo productos digitales completos — desde la interfaz hasta el servidor — con atención al detalle y foco en la experiencia de usuario.
        </p>

        {/* CTAs */}
        <div className={s.btns}>
          <button className={s.btnPrimary} onClick={scrollToContact}>
            Contáctame
          </button>
          <button className={s.btnSecondary} onClick={handleDownloadCV}>
            Descargar CV
          </button>
        </div>

        {/* Social links */}
        <div className={s.socialRow}>
          <span className={s.socialLine} aria-hidden="true" />
          <div className={s.socialIcons}>
            <a
              href="https://www.linkedin.com/in/frangabriel13/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={s.socialLink}
            >
              <i className="bx bxl-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/frangabriel.13/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={s.socialLink}
            >
              <i className="bx bxl-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/frangabriel13_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className={s.socialLink}
            >
              <i className="bx bxl-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/frangabriel13/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={s.socialLink}
            >
              <i className="bx bxl-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className={s.rightSection}>
        <div className={s.imageWrapper}>
          <div className={s.imageGlow} aria-hidden="true" />
          <img
            src={portada}
            alt="Franco Mansilla — Full Stack Developer"
            className={s.image}
          />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={s.scrollHint} aria-hidden="true">
        <span className={s.scrollLine} />
      </div>
    </section>
  );
};

export default Home;
