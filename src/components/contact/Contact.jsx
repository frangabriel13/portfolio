import React from "react";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.container} id="contact">
      <h2 className={s.title}>Contact <span>Me</span></h2>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <div className={s.info}>
            <h4>Informacion de contacto</h4>
            <p>Contactame por mail llenando el formulario de contacto, o bien, hazlo por las redes.</p>
            <button className={s.whatsappButton}>WhatsApp</button>
            <div className={s.icons}>
              <div className={s.iconItem}>
                <i className='bx bx-phone'></i>
                <span>+54 11 5874 2482</span>
              </div>
              <div className={s.iconItem}>
                <i className='bx bx-envelope' ></i>
                <span>mansilla.franco.1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={s.socialIcons}>
            <i className='bx bxl-linkedin' ></i>
            <i className='bx bxl-instagram' ></i>
            <i className='bx bxl-twitter' ></i>
          </div>
        </div>
        <div className={s.form}>
          <div className={`${s.inputGroup}`}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button className={s.sendButton}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;