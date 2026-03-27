import React, { useEffect, useRef, useState } from "react";
import s from "./About.module.css";
import yo from "../../assets/yo.jpeg";

const About = () => {
  const innerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(s.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={s.container} id="about">
      <div className={s.inner} ref={innerRef}>

        <div className={s.sectionHeader}>
          <h2 className={s.title}>
            About <span className={s.accent}>Me</span>
          </h2>
          <span className={s.titleBar} aria-hidden="true" />
        </div>

        <div className={s.layout}>

          <aside className={s.profileCard}>
            <div className={s.photoRing}>
              <img
                src={yo}
                alt="Foto de perfil de Franco Mansilla"
                className={s.image}
              />
            </div>
            <div className={s.profileMeta}>
              <h3 className={s.name}>Franco Mansilla</h3>
              <p className={s.role}>Full Stack Developer</p>
            </div>
          </aside>

          <div className={s.bio}>

            {/* Párrafo 1: siempre visible */}
            <p className={s.paragraph}>
              Soy Full Stack Developer especializado en construir productos digitales funcionales y escalables, tanto en la web como en mobile. Inicié mi camino de forma autodidacta,
              especializándome en tecnologías demandadas por la industria y desarrollando múltiples proyectos que me permitieron consolidar mis habilidades
              técnicas.
            </p>

            {/* Párrafos 2 y 3: colapsables en mobile */}
            <div
              className={`${s.collapsible} ${expanded ? s.collapsibleOpen : ""}`}
              aria-hidden={!expanded}
            >
              <div className={s.collapsibleInner}>
                <p className={s.paragraph}>
                  Comencé de manera freelance creando plataformas E-commerce para distintas tiendas de ropa en Buenos Aires; incluso trabajé para clientes del exterior.
                  Gracias a los resultados obtenidos, fui convocado para participar en un proyecto de mayor escala:
                  el desarrollo de una plataforma B2B que conecta fabricantes con mayoristas, llamada Fabricante Directo.
                  En este proyecto lideré el desarrollo integral de la aplicación,
                  tanto en su versión web como en las aplicaciones mobile para Android e iOS, encargándome además del mantenimiento,
                  la optimización y la evolución continua del sistema. Actualmente continúo trabajando en la mejora de la plataforma,
                  incorporando nuevas funcionalidades y garantizando su estabilidad y rendimiento.
                </p>

                <p className={s.paragraph}>
                  En 2026 comencé la carrera de Ingeniería Informática en la Universidad Nacional de La Matanza (UNLaM),
                  complementando mi formación autodidacta con bases académicas sólidas. La programación no solo es mi profesión, sino también mi vocación.
                  Me caracterizo por escribir código mantenible, documentar lo que construyo y entregar lo que prometo.
                </p>
              </div>
            </div>

            {/* Botón solo visible en mobile */}
            <button
              className={s.toggleBtn}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Ver menos" : "Ver más"}
              <i
                className={`bx bx-chevron-down ${s.toggleIcon} ${expanded ? s.toggleIconOpen : ""}`}
                aria-hidden="true"
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
