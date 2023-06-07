import React from "react";
import s from "./About.module.css";

const About = () => {
  return(
    <div className={s.container}>
      <h2 className={s.title}>About <span>Me</span></h2>
      <div className={s.about}>
        <div className={s.leftSection}>
          <img src="/src/assets/yo.jpeg" alt="Profile" className={s.image} />
          <h4 className={s.name}>Franco Mansilla</h4>
          <h5 className={s.role}>Full Stack Developer</h5>
        </div>
        <div className={s.rightSection}>
          <p className={s.description}>Desde mi infancia, siempre sentí fascinación por la tecnología y 
          el mundo de la informática. Cuando pasaba por momentos difíciles y la dificultad 
          de no encontrar un rumbo claro en mi vida, descubrí en la programación mi verdadera vocación, 
          esa luz al final del túnel que me motivó a seguir adelante. Desde entonces, 
          dedico incontables horas a resolver problemas de lógica, aprender nuevas tecnologías 
          y crear proyectos que me permiten mejorar mis habilidades. 
          La programación me ha dado un propósito y me ha enseñado que con perseverancia y dedicación, 
          cualquier obstáculo puede ser superado.</p>
        </div>
      </div>
    </div>
  ) 
}


export default About;