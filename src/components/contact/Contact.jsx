import React, { useRef, useState } from "react";
import s from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm(
        "service_tnnnfvr",
        "template_3eqdrig",
        form.current,
        "xZ9ZO9Eb1IryQGDeI"
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          setError(true);
          setSending(false);
          console.log(err.text);
        }
      );
  };

  return (
    <div className={s.container} id="contact">
      <h2 className={s.title}>
        Contact <span>Me</span>
      </h2>

      <div className={s.wrapper}>
        {/* ── Left panel: contact info ── */}
        <div className={s.contact}>
          <div className={s.info}>
            <h4>¿Hablamos?</h4>
            <p>
              Escribime por el formulario o elegí el canal que prefieras.
            </p>

            <div className={s.contactItems}>
              <a href="tel:+541158742482" className={s.iconItem}>
                <span className={s.iconCircle}>
                  <i className="bx bx-phone"></i>
                </span>
                <span>+54 11 5874 2482</span>
              </a>

              <a
                href="mailto:mansilla.franco.1@gmail.com"
                className={s.iconItem}
              >
                <span className={s.iconCircle}>
                  <i className="bx bx-envelope"></i>
                </span>
                <span>mansilla.franco.1@gmail.com</span>
              </a>
            </div>

            <div className={s.whatsappDivider}>
              <span>o escribime directo</span>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=541158742482"
              className={s.whatsappCta}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Escribime por WhatsApp
            </a>
          </div>

          <div className={s.socialIcons}>
            <a
              href="https://www.linkedin.com/in/frangabriel13/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/frangabriel.13/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://twitter.com/frangabriel13_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://github.com/frangabriel13/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        {/* ── Right panel: form or success ── */}
        <div className={s.formPanel}>
          {!sent && <h3 className={s.formTitle}>Dejame un mensaje</h3>}
          {sent ? (
            <div className={s.successState}>
              <div className={s.successIcon}>
                <i className="bx bx-check"></i>
              </div>
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por escribirme. Te responderé a la brevedad.</p>
              <button className={s.resetButton} onClick={() => setSent(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className={s.form} ref={form} onSubmit={sendEmail}>
              <div className={s.inputGroup}>
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <textarea
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              {error && (
                <p className={s.errorMessage}>
                  <i className="bx bx-error-circle"></i>
                  Ocurrió un error al enviar el correo electrónico.
                </p>
              )}

              <button className={s.sendButton} disabled={sending}>
                {sending ? (
                  <>
                    <span className={s.spinner}></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje <i className="bx bx-send"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
