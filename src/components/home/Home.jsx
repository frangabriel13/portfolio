import React from "react";
import s from "./Home.module.css";
import cv from "../../assets/franMansillaCV.pdf"
import portada from "../../assets/codeman.png";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CVfrancom.pdf";
    link.click();
  };

  return(
    <div className={s.container} id="home">
      <div className={s.leftSection}>
        <h1 className={s.title}>Hola, soy Franco</h1>
        <h3 className={s.subtitle}>Full Stack Developer</h3>
        <p className={s.description}>La programación me permite dar vida a las ideas transformando la imaginación en código.</p>
        <div className={s.btns}>
          <button className={s.btnOne} onClick={scrollToContact}>Contáctame</button>
          <button className={s.btnTwo} onClick={handleDownloadCV}>Descargar CV</button>
        </div>
        <div className={s.socialIcons}>
          <a href="https://www.linkedin.com/in/frangabriel13/" target="_blank">
            <i className={`bx bxl-linkedin ${s.icon}`}></i>
          </a>
          <a href="https://www.instagram.com/frangabriel.13/" target="_blank">
            <i className={`bx bxl-instagram ${s.icon}`}></i>
          </a>
          <a href="https://twitter.com/frangabriel13_/" target="_blank">
            <i className={`bx bxl-twitter ${s.icon}`}></i>
          </a>
          <a href="https://github.com/frangabriel13/" target="_blank">
            <i className={`bx bxl-github ${s.icon}`}></i>
          </a>
        </div>
      </div>
      <div className={s.rightSection}>
        <img src={portada} alt="img" className={s.image} />
      </div>
    </div>
  ) 
}


export default Home;