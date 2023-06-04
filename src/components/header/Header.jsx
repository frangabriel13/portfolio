import React from "react";
import s from "./Header.module.css"

function Header() {
  return (
    <div className={s.container}>
        <a href="#home" className={s.logo}>Franco.</a>
        <nav className={s.navbar}>
            <a href="#home" className={s.home}>Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
        <div className={s.navToggle}>
          <i className={`bx bx-menu ${s.icon}`}></i>
        </div>
    </div>
  );
}

export default Header;