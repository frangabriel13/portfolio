import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return(
    <div className={s.container} id="home">
      <div className={s.leftSection}>
        <h1 className={s.title}>Hola, soy Franco</h1>
        <h3 className={s.subtitle}>Full Stack Developer</h3>
        <p className={s.description}>La programación es el superpoder que me permite dar vida a las ideas, 
        transformando la imaginación en código. Es el arte de crear soluciones innovadoras 
        que resuelven problemas complejos y abren puertas hacia un futuro lleno de posibilidades.</p>
        <div className={s.btns}>
          <button className={s.btnOne}>Contáctame</button>
          <button className={s.btnTwo}>Descargar CV</button>
        </div>
        <div className={s.socialIcons}>
          <i className={`bx bxl-linkedin ${s.icon}`}></i>
          <i className={`bx bxl-instagram ${s.icon}`}></i>
          <i className={`bx bxl-twitter ${s.icon}`}></i>
        </div>
      </div>
      <div className={s.rightSection}>
        <img src="/src/assets/codeman.png" alt="img" className={s.image} />
      </div>
    </div>
  ) 
}


export default Home;