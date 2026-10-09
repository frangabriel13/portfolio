import React from "react";
import s from "./Home.module.css";
import cv from "../../assets/fMansillaCV.pdf";
import yo from "../../assets/yo.jpeg";

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
      {/* Retrato con manchas de puntos */}
      <div className={s.photoCol}>
        <span className={`${s.dots} ${s.dotsTop}`} aria-hidden="true" />
        <span className={`${s.dots} ${s.dotsBottom}`} aria-hidden="true" />
        <figure className={s.photo}>
          <img src={yo} alt="Retrato de Franco Mansilla" />
        </figure>
      </div>

      <div className={s.textCol}>
        <h1 className={s.title}>
          Hola, soy Franco y soy{" "}
          <span className={s.highlight}>Full Stack Developer.</span>
        </h1>

        <p className={s.description}>
          Vivo en Buenos Aires y construyo productos digitales completos — desde la interfaz hasta el servidor — con atención al detalle y foco en la experiencia de usuario.
        </p>

        <div className={s.btns}>
          <button className={s.btnPrimary} onClick={scrollToContact}>
            Contáctame
          </button>
          <button className={s.btnSecondary} onClick={handleDownloadCV}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v12M6 10l6 6 6-6M5 20h14" />
            </svg>
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
