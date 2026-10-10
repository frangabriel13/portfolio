import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import cv from "../../assets/francoMansillaCV.pdf";
import yo from "../../assets/yo.jpeg";

const ROLE = "Full Stack Developer";
const TEXT = `${ROLE}.`; // el punto se escribe pero queda fuera de la barra
const TYPE_SPEED = 48;   // ms por letra
const TYPE_DELAY = 400;  // espera antes de empezar a escribir
const MARK_DELAY = 250;  // pausa entre el final del texto y la barra

const Home = () => {
  const [typed, setTyped] = useState(0);
  const [marked, setMarked] = useState(false);

  // Efecto máquina de escribir: escribe el rol y al terminar dibuja la barra
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(TEXT.length);
      setMarked(true);
      return;
    }

    // Cada letra se agenda recién cuando se escribió la anterior: si el hilo
    // principal se traba (carga de imágenes/fuentes) no se escriben varias de golpe
    let timer;
    let cancelled = false;
    const cleanups = [];
    const step = (i) => {
      if (cancelled) return;
      if (i > TEXT.length) {
        timer = setTimeout(() => setMarked(true), MARK_DELAY);
        return;
      }
      setTyped(i);
      timer = setTimeout(() => step(i + 1), TYPE_SPEED);
    };
    const start = () => {
      if (cancelled) return;
      timer = setTimeout(() => step(1), TYPE_DELAY);
    };

    // Empieza cuando la página terminó de cargar y la pestaña está visible
    const waitVisible = () => {
      if (document.visibilityState === "visible") return start();
      const onVisible = () => {
        if (document.visibilityState !== "visible") return;
        document.removeEventListener("visibilitychange", onVisible);
        start();
      };
      document.addEventListener("visibilitychange", onVisible);
      cleanups.push(() => document.removeEventListener("visibilitychange", onVisible));
    };

    if (document.readyState === "complete") {
      waitVisible();
    } else {
      window.addEventListener("load", waitVisible, { once: true });
      cleanups.push(() => window.removeEventListener("load", waitVisible));
    }

    return () => {
      cancelled = true;
      clearTimeout(timer);
      cleanups.forEach((fn) => fn());
    };
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
        <h1 className={s.title} aria-label={`Hola, soy Franco. ${TEXT}`}>
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
              {!marked && typed <= ROLE.length && <span className={s.caret} />}
            </span>
          </span>
          <span className={s.roleDot} aria-hidden="true">
            <span className={typed > ROLE.length ? "" : s.roleGhost}>.</span>
            {!marked && typed > ROLE.length && <span className={s.caret} />}
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
