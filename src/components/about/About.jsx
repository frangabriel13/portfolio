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
          <p className={s.description}>Soy Full Stack Developer con experiencia en el desarrollo de soluciones web y mobile. Inicié mi camino de forma autodidacta, 
            especializándome en tecnologías demandadas por la industria y desarrollando múltiples proyectos que me permitieron consolidar mis habilidades 
            técnicas. <br /><br />

            Comencé creando plataformas E-commerce para distintas tiendas de ropa en Buenos Aires. Gracias a los resultados obtenidos, 
            fui convocado para participar en un proyecto de mayor escala: el desarrollo de una plataforma B2B que conecta fabricantes con mayoristas, 
            llamada Fabricante Directo. En este proyecto lideré el desarrollo integral de la aplicación, 
            tanto en su versión web como en las aplicaciones mobile para Android e iOS, encargándome además del mantenimiento, 
            la optimización y la evolución continua del sistema. Actualmente continúo trabajando en la mejora de la plataforma, 
            incorporando nuevas funcionalidades y garantizando su estabilidad y rendimiento. <br /><br />

            En 2026 comencé la carrera de Ingeniería Informática en la Universidad Nacional de La Matanza (UNLaM), 
            complementando mi formación autodidacta con bases académicas sólidas. La programación no solo es mi profesión, sino también mi vocación. 
            Me caracterizo por el compromiso, la responsabilidad y la búsqueda constante de excelencia en cada proyecto que desarrollo.
          </p>
        </div>
      </div>
    </div>
  ) 
}


export default About;