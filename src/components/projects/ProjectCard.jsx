// import React from "react";
// import s from "./ProjectCard.module.css";

// const ProjectCard = ({ image, description, title, isOpen, onToggleDescription }) => {
//   return (
//     <div className={s.card}>
//       <img src={image} alt="Project" className={s.image} />
//       {isOpen && (
//         <div className={s.description}>
//           <h3>{title}</h3>
//           <p>{description}</p>
//         </div>
//       )}
//       <button className={s.button} onClick={onToggleDescription}>
//         {isOpen ? "Ver menos" : "Ver más"}
//       </button>
//     </div>
//   );
// };

// export default ProjectCard;

import React from "react";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ image, description, title, isOpen, onToggleDescription }) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <img src={image} alt="Project" className={s.image} />
        <div className={s.iconContainer}>
          <i className="bx bx-world"></i>
          <i className="bx bxl-github"></i>
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