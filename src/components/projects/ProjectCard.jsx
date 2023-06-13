import React from "react";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ image, description, title, link, git, isOpen, onToggleDescription }) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <a href={link}>
          <img src={image} alt="Project" className={s.image} />
        </a>
        <div className={s.iconContainer}>
          <a href={link}>
            <i className="bx bx-world"></i>
          </a>
          <a href={git}>
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
      {isOpen && (
        <div className={s.description}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
      <button className={s.button} onClick={onToggleDescription}>
        {isOpen ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ProjectCard;