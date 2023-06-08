import React from "react";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ image, description, title, isOpen, onToggleDescription }) => {
  return (
    <div className={s.card}>
      <img src={image} alt="Project" className={s.image} />
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