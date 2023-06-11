import React, { useState } from "react";
import s from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Rumay - E-commerce",
      image: "/src/assets/rumay.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Pokémon - Proyecto Académico",
      image: "/src/assets/pokemon.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "El Predio - Proyecto Real",
      image: "/src/assets/elpredio.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Rumay - E-commerce",
      image: "/src/assets/rumay.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Pokémon - Proyecto Académico",
      image: "/src/assets/pokemon.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "El Predio - Proyecto Real",
      image: "/src/assets/elpredio.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={s.container} id="projects">
      <h2>Projects</h2>
      <div className={s.projects}>
        {projectsData.map((project, index) => (
          <div key={index} className={s.projectContainer}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              isOpen={index === openIndex}
              onToggleDescription={() => handleToggleDescription(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;