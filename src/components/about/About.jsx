import React, { useEffect, useRef } from "react";
import s from "./About.module.css";
import yo from "../../assets/yo.jpeg";

const About = () => {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    const element = aboutRef.current;
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add(s.fadeIn);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <div className={s.container} id="about" ref={aboutRef}>
      <h2 className={s.title}>About <span>Me</span></h2>
      <div className={s.about}>
        <div className={s.leftSection}>
          <img src={yo} alt="Profile" className={s.image} />
          <h4 className={s.name}>Franco Mansilla</h4>
          <h5 className={s.role}>Full Stack Developer</h5>
        </div>
        <div className={s.rightSection}>
          <p className={s.description}>Soy Full Stack Developer con experiencia. Comencé a estudiar desarrollo web de forma autodidacta, 
          aprendiendo tecnologías demandadas por la industria que me permitieron desarrollar numerosos proyectos y seguir perfeccionando 
          mis habilidades. <br /><br />

          En mis inicios, comencé desarrollando la E-commerce de varias tiendas de ropa de Buenos Aires. Gracias a que mis trabajos contentaron
          a mis clientes, algunos se unieron con el fin de contratarme para un proyecto mucho mas ambicioso. Crear una aplicación B2B (Bussiness to Businnes) 
          que conecte fabricantes con mayoristas. Hoy puedo decir que sigo trabajando en Fabricante Directo realizando mantenimiento y actualizando la app.
          Como buen profesional, mi compromiso con el trabajo es inquebrantable y me esfuerzo por alcanzar los mejores resultados en cada proyecto 
          en el que me involucro. <br /><br />

          La programación me ha dado un propósito y me ha enseñado que con perseverancia y dedicación, 
          cualquier obstáculo puede ser superado.</p>
        </div>
      </div>
    </div>
  ) 
}


export default About;