import { useRef, useState } from "react";
import s from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frangabriel13/" },
  { label: "GitHub", href: "https://github.com/frangabriel13/" },
  { label: "Instagram", href: "https://www.instagram.com/frangabriel.13/" },
  { label: "X", href: "https://twitter.com/frangabriel13_/" },
];

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
    <section className={s.container} id="contact">
      <div className={s.inner}>
        <h2 className={s.title}>Contacto</h2>

        <div className={s.card}>
          {/* ── Panel negro: canales de contacto ── */}
          <aside className={s.panel}>
            <div className={s.panelTop}>
              <h3 className={s.panelTitle}>
                <span className={s.highlight}>¿Hablamos?</span>
              </h3>
              <p className={s.panelText}>
                Escribime por el formulario o elegí el canal que prefieras.
              </p>

              <div className={s.channels}>
                <a href="mailto:mansilla.franco.1@gmail.com" className={s.channel}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  mansilla.franco.1@gmail.com
                </a>
                <a href="tel:+541158742482" className={s.channel}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                  </svg>
                  +54 11 5874 2482
                </a>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=541158742482"
                target="_blank"
                rel="noopener noreferrer"
                className={s.whatsapp}
              >
                Escribime por WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>

            <nav className={s.socials} aria-label="Redes sociales">
              {SOCIALS.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* ── Formulario o confirmación ── */}
          <div className={s.formPanel}>
            {sent ? (
              <div className={s.success} role="status">
                <span className={s.successIcon} aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                </span>
                <h3 className={s.successTitle}>¡Mensaje enviado!</h3>
                <p className={s.successText}>Gracias por escribirme. Te respondo a la brevedad.</p>
                <button type="button" className={s.resetButton} onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className={s.form} ref={form} onSubmit={sendEmail}>
                <h3 className={s.formTitle}>Dejame un mensaje</h3>

                <label className={s.field}>
                  Nombre
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>

                <label className={s.field}>
                  Email
                  <input
                    type="email"
                    name="user_email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label className={s.field}>
                  Mensaje
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Contame sobre tu proyecto"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                {error && (
                  <p className={s.error} role="alert">
                    No se pudo enviar el mensaje. Probá de nuevo o escribime por WhatsApp.
                  </p>
                )}

                <button type="submit" className={s.sendButton} disabled={sending}>
                  {sending ? (
                    <>
                      <span className={s.spinner} aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
