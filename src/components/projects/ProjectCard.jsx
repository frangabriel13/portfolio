import React from "react";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ image, description, title, link, git, stack, featured }) => {
  if (featured) {
    return (
      <article className={s.featuredCard}>
        <span className={s.featuredBadge}>
          <i className="bx bxs-star"></i> Destacado
        </span>

        <div className={s.featuredImage}>
          <img src={image} alt={title} />
          <div className={s.featuredOverlay}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={s.overlayBtn}
              aria-label="Ver proyecto en vivo"
            >
              <i className="bx bx-world"></i>
            </a>
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className={s.overlayBtn}
              aria-label="Ver código en GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

        <div className={s.featuredContent}>
          <h3 className={s.featuredTitle}>{title}</h3>
          <div className={s.stackRow}>
            {stack?.map((tech, i) => (
              <span key={i} className={s.badge}>
                {tech}
              </span>
            ))}
          </div>
          <p className={s.featuredDesc}>{description}</p>
          <div className={s.ctaRow}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={s.ctaPrimary}
            >
              Ver proyecto <i className="bx bx-link-external"></i>
            </a>
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className={s.ctaSecondary}
            >
              <i className="bx bxl-github"></i> GitHub
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={s.card}>
      <div className={s.imageWrap}>
        <img src={image} alt={title} className={s.image} />
        <div className={s.overlay}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={s.overlayBtn}
            aria-label="Ver proyecto en vivo"
          >
            <i className="bx bx-world"></i>
          </a>
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className={s.overlayBtn}
            aria-label="Ver código en GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div className={s.cardBody}>
        <h3 className={s.cardTitle}>{title}</h3>
        <div className={s.stackRow}>
          {stack?.map((tech, i) => (
            <span key={i} className={s.badge}>
              {tech}
            </span>
          ))}
        </div>
        <p className={s.cardDesc}>{description}</p>
        <div className={s.cardFooter}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={s.linkPrimary}
          >
            Ver proyecto <i className="bx bx-link-external"></i>
          </a>
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className={s.linkSecondary}
            aria-label="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
