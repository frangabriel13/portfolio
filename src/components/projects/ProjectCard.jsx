import React, { useState } from "react";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ image, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={s.card}>
      <img src={image} alt="Project" className={s.image} />
      {showDescription && <div className={s.description}>{description}</div>}
      <button className={s.button} onClick={handleToggleDescription}>
        {showDescription ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ProjectCard;