import React, { useState } from "react";
import s from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import rumay from "../../assets/rumay.png";
import poke from "../../assets/pokemon.png";
import predio from "../../assets/elpredio.png";

const Projects = () => {
  const projectsData = [
    {
      title: "Rumay - E-commerce",
      image: `${rumay}`,
      link: "https://rumay.com.ar/",
      git: "https://rumay.com.ar/",
      description: "E-commerce diseñada en WordPress con Divi, WooCommerce y BodyCommerce. Tienda online realizada para una tienda mayorista de indumentaria femenina",
    },
    {
      title: "Pokémon - Proyecto Académico",
      image: `${poke}`,
      link: "https://pi-pokemon-alpha-seven.vercel.app/",
      git: "https://github.com/frangabriel13/PI-Pokemon",
      description: "Proyecto individual utilizando la Api de Pokémon. Utilicé JavaScript, NodeJs, Express, PostgreSQL, React y Redux, con CSS puro. Posee filtrados, ordenados, paginado, rutas para buscar o crear pokémon.",
    },
    {
      title: "El Predio - Proyecto Real",
      image: `${predio}`,
      link: "https://el-predio.vercel.app/",
      git: "https://el-predio.vercel.app/",
      description: "Trabajo real y en grupo hecho para un complejo deportivo de canchas de fútbol con sistema de reservas. Implementé registro de usuarios, autenticación local y de terceros, envío de mails, pasarela de pagos con MercadoPago, dashboard de admin, etc. Tecnologías: JavaScript, NodeJs, Express, PostgreSQL y React.",
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
              link={project.link}
              git={project.git}
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