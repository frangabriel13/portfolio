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
          <p className={s.description}>Desde mi infancia, siempre sentí fascinación por la tecnología y 
          el mundo de la informática. Cuando pasaba por momentos difíciles y la dificultad 
          de no encontrar un rumbo claro en mi vida, descubrí en la programación mi verdadera vocación, 
          esa luz al final del túnel que me motivó a seguir adelante. Desde entonces, 
          dedico incontables horas a resolver problemas de lógica, aprender nuevas tecnologías 
          y crear proyectos que me permiten mejorar mis habilidades. <br /><br />

          Me desenvuelvo con facilidad tanto en trabajos individuales como en equipo. 
          Mi destreza en la resolución de conflictos es una de mis mejores habilidades. 
          Enfrento los problemas como desafíos y no me frustro, siempre busco las mejores soluciones. 
          Como buen profesional, mi compromiso con el trabajo es inquebrantable y me esfuerzo 
          por alcanzar los mejores resultados en cada proyecto en el que me involucro. <br /><br />

          La programación me ha dado un propósito y me ha enseñado que con perseverancia y dedicación, 
          cualquier obstáculo puede ser superado.</p>
        </div>
      </div>
    </div>
  ) 
}


export default About;