import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return(
    <div className={s.container}>
      <div className={s.leftSection}>
        <h1 className={s.title}>Hola, soy Franco</h1>
        <h2 className={s.subtitle}>Full Stack Developer</h2>
        <p className={s.description}>
          Frase de tres renglones que describe tus habilidades y experiencia.
        </p>
        <div className={s.buttons}>
          <button className={s.button}>Contactame</button>
          <button className={s.button}>Descarga CV</button>
        </div>
        <div className={s.socialIcons}>
          <a href="https://www.instagram.com/yourusername">
            <i className={`bx bxl-instagram ${s.icon}`}></i>
          </a>
          <a href="https://twitter.com/yourusername">
            <i className={`bx bxl-twitter ${s.icon}`}></i>
          </a>
          <a href="https://www.linkedin.com/in/yourusername">
            <i className={`bx bxl-linkedin ${s.icon}`}></i>
          </a>
        </div>
      </div>
      <div className={s.rightSection}>
        <img
          src="/path/to/your/image.jpg"
          alt="Profile Image"
          className={s.image}
        />
      </div>
    </div>
  ) 
}


export default Home;