import React, { useState } from "react";
import s from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import rumay from "../../assets/rumay.png";
import poke from "../../assets/pokemon.png";
import predio from "../../assets/elpredio.png";
import fabricante from "../../assets/fd1.png";
import africa from "../../assets/africa.png";
import tirria from "../../assets/tirria.png";
import eternal from "../../assets/er1.png";

const Projects = () => {
  const projectsData = [
    {
      title: "Fabricante Directo",
      image: `${fabricante}`,
      link: "https://fabricantedirecto.com/",
      git: "https://github.com/frangabriel13/fabricante-directo",
      description: "Aplicación B2B que reune fabricantes textiles con mayoristas. Me ocupé mayormente del backend diseñando una arquitectura de microservicios. Utilicé stack PERN junto a servicios de AWS como S3, EC2 y RDS.",
    },
    {
      title: "Eternal Restful",
      image: `${eternal}`,
      link: "https://www.eternalrestfulfuneralservices.com/",
      git: "https://github.com/frangabriel13/restful",
      description: "Sitio web de una funeraria de Estados Unidos (en idioma inglés y español). Página informativa de la empresa, con detalles sobre sus servicios y contacto. Además, cuenta con un dashboard para la gestión de clientes manejado por un administrador y cuentas de empleados.",
    },
    {
      title: "Africa Mía",
      image: `${africa}`,
      link: "https://africamia-jeans.online/",
      git: "https://github.com/frangabriel13/africaMia",
      description: "E-commerce autogestionada para una tienda de jeans de dama. Usé stack PERN e implementé AWS S3 para el guardado de imágenes.",
    },
    {
      title: "Tirria",
      image: `${tirria}`,
      link: "https://tirriasolflores.com/",
      git: "https://github.com/frangabriel13/tirria-sol",
      description: "E-commerce autogestionada para una tienda de indumentaria femenina. Usé stack PERN e implementé Cloudinary para el guardado de imágenes.",
    },
    {
      title: "Rumay - E-commerce",
      image: `${rumay}`,
      link: "https://github.com/frangabriel13",
      git: "https://github.com/frangabriel13",
      description: "E-commerce diseñada en WordPress con Divi, WooCommerce y BodyCommerce. Tienda online realizada para una tienda mayorista de indumentaria femenina.",
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
      git: "https://github.com/EmmanuelML78/EL-PREDIO",
      description: "Trabajo en grupo hecho para un complejo deportivo de canchas de fútbol con sistema de reservas, registro de usuarios, autenticación local y de terceros, envío de mails, pasarela de pagos, etc. Tecnologías: JavaScript, NodeJs, Express, PostgreSQL y React.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={s.container} id="projects">
      <h2 className={s.title}>My <span>Projects</span></h2>
      <div className={s.projects}>
        {projectsData.map((project, index) => (
          <div key={index} className={`${s.projectContainer} ${index === openIndex ? s.activeContainer : ''}`}>
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