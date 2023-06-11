import React from "react";
import s from "./Header.module.css"
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId);
  };
  
  const toggleMenu = (sectionId) => {
    setMenuOpen(!menuOpen);
  
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className={s.container}>
        <a href="#home" className={s.logo}>Franco.</a>
        <nav className={`${s.navbar} ${menuOpen ? s.open : ''}`}>
            <a href="#home" className={s.home} onClick={() => toggleMenu('home')}>Home</a>
            <a href="#about" onClick={() => toggleMenu('about')}>About</a>
            <a href="#skills" onClick={() => toggleMenu('skills')}>Skills</a>
            <a href="#projects" onClick={() => toggleMenu('projects')}>Projects</a>
            <a href="#contact" onClick={() => toggleMenu('contact')}>Contact</a>
        </nav>
        <div className={s.navToggle}>
          <i className={`bx bx-menu ${s.icon}`} onClick={toggleMenu}></i>
        </div>
    </div>
  );
}

export default Header;