import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.menu}>
          <ul>
            <li onClick={() => handleMenuClick('home')}>Home</li>
            <li onClick={() => handleMenuClick('about')}>About</li>
            <li onClick={() => handleMenuClick('skills')}>Skills</li>
            <li onClick={() => handleMenuClick('projects')}>Projects</li>
            <li onClick={() => handleMenuClick('contact')}>Contact</li>
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