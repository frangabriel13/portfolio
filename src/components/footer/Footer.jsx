import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.menu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={s.copy}>
          <p>© 2023 mandeveloper. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;