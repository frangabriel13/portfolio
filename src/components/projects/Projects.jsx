import React from "react";
import s from "./Projects.module.css"
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      image: "/src/assets/rumay.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/src/assets/pokemon.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/src/assets/elpredio.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className={s.container}>
      <h2>Projects</h2>
      <div className={s.projects}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;