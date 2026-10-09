import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import cv from "../../assets/fMansillaCV.pdf";
import yo from "../../assets/yo.jpeg";

const ROLE = "Full Stack Developer.";
const TYPE_SPEED = 48;   // ms por letra
const TYPE_DELAY = 400;  // espera antes de empezar a escribir
const MARK_DELAY = 250;  // pausa entre el final del texto y la barra

const Home = () => {
  const [typed, setTyped] = useState(0);
  const [marked, setMarked] = useState(false);

  // Efecto máquina de escribir: escribe el rol y al terminar dibuja la barra
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(ROLE.length);
      setMarked(true);
      return;
    }

    const timers = [];
    for (let i = 1; i <= ROLE.length; i++) {
      timers.push(setTimeout(() => setTyped(i), TYPE_DELAY + i * TYPE_SPEED));
    }
    timers.push(
      setTimeout(() => setMarked(true), TYPE_DELAY + ROLE.length * TYPE_SPEED + MARK_DELAY)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

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
      {/* Retrato con bloque desplazado y etiqueta */}
      <div className={s.photoCol}>
        <span className={s.photoBlock} aria-hidden="true" />
        <figure className={s.photo}>
          <img src={yo} alt="Retrato de Franco Mansilla" />
        </figure>
        <span className={s.photoTag}>Buenos Aires, AR</span>
      </div>

      <div className={s.textCol}>
        <h1 className={s.title} aria-label={`Hola, soy Franco. ${ROLE}`}>
          Hola, soy Franco
          <br />
          <span
            className={`${s.highlight} ${marked ? s.marked : ""}`}
            aria-hidden="true"
          >
            {/* Reserva el ancho del texto completo para que nada se mueva */}
            <span className={s.roleGhost}>{ROLE}</span>
            <span className={s.roleTyped}>
              {ROLE.slice(0, typed)}
              {!marked && <span className={s.caret} />}
            </span>
          </span>
        </h1>

        <p className={s.description}>
          Construyo sistemas web y mobile completos — desde el diseño hasta el servidor — que sean rápidos, claros y fáciles de usar.
        </p>

        <div className={s.btns}>
          <button className={s.btnPrimary} onClick={scrollToContact}>
            Contáctame
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
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
