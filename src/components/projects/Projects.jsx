import { useState } from "react";
import s from "./Projects.module.css";
import fabricante from "../../assets/fabricante.png";
import fullsync from "../../assets/full.png";
import eternal from "../../assets/eternal.png";
import fitapp from "../../assets/fitapp.png";
import agendapp from "../../assets/agendapp.png";

const FEATURED = {
  title: "Fabricante Directo",
  image: fabricante,
  description:
    "Aplicación B2B que reúne fabricantes y mayoristas, en web y en apps para Android e iOS. Arquitectura de microservicios con stack PERN y servicios de AWS (S3, EC2 y RDS).",
  stack: ["Node.js", "Microservicios", "AWS", "PostgreSQL", "React", "React Native"],
  link: "https://fabricantedirecto.com/",
  git: "https://github.com/frangabriel13/fabricante-directo",
  // La captura es del rediseño, que todavía no está publicado
  redesign: true,
};

// stack vacío ("") no se muestra.
// Sin link (sin deploy, o con un rediseño sin publicar) la tarjeta muestra
// un solo botón "Ver código" que lleva al repo de GitHub.
const PROJECTS = [
  {
    title: "FullSync",
    category: "Empresa propia",
    image: fullsync,
    description:
      "Empresa de soluciones IT que fundé con mi hermano. Me encargo del análisis, el diseño y la arquitectura de los sistemas y del backend.",
    stack: "",
    link: "https://fullsync.site/",
    git: "https://github.com/frangabriel13/fullSync/",
  },
  {
    title: "AgendApp",
    category: "Sistemas",
    image: agendapp,
    description:
      "Sistema de gestión de turnos, empleados, infraestructura y sedes, con disponibilidad del equipo y facturación.",
    stack: "Next.js · NestJS · PostgreSQL",
    link: "",
    git: "https://github.com/frangabriel13/agendapp-front/",
  },
  {
    title: "FitApp",
    category: "Sistemas",
    image: fitapp,
    description:
      "Aplicación de gestión de rutinas de gimnasio: planificación por ciclos, días de entrenamiento y seguimiento de cada ejercicio.",
    stack: "Next.js · NestJS · PostgreSQL",
    link: "",
    git: "https://github.com/frangabriel13/fitness-app",
  },
  {
    title: "Eternal Restful",
    category: "Sistemas",
    image: eternal,
    description:
      "Sitio bilingüe para una funeraria de Estados Unidos, con dashboard de gestión de clientes para administradores y empleados.",
    stack: "React · Node.js · PostgreSQL",
    link: "",
    git: "https://github.com/frangabriel13/restful",
  },
];

const CATEGORIES = ["Todos", "Empresa propia", "Sistemas", "E-commerce", "Académico"];
const PAGE_SIZE = 6;
const GITHUB_URL = "https://github.com/frangabriel13/";

const externalIcon = (size = 14) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter((p) => filter === "Todos" || p.category === filter);
  const shown = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hidden = filtered.length - PAGE_SIZE;

  const countFor = (cat) =>
    cat === "Todos" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;

  // Los filtros aparecen solo cuando hay más proyectos que los que entran en
  // la grilla y al menos dos categorías con proyectos
  const categories = CATEGORIES.filter((cat) => countFor(cat) > 0);
  const showFilters = PROJECTS.length > PAGE_SIZE && categories.length > 2;

  const pickFilter = (cat) => {
    setFilter(cat);
    setShowAll(false);
  };

  return (
    <section className={s.container} id="projects">
      <div className={s.inner}>
        <header className={s.header}>
          <h2 className={s.title}>Proyectos</h2>
          <p className={s.intro}>
            Sistemas web y mobile: desde el diseño hasta el servidor.
          </p>
        </header>

        {/* Proyecto destacado */}
        <article className={s.featured}>
          <div className={s.featuredMedia}>
            <span className={s.featuredBlock} aria-hidden="true" />
            <div className={s.featuredFrame}>
              <img src={FEATURED.image} alt={`Captura de ${FEATURED.title}`} />
            </div>
            <span className={s.featuredTag}>
              {FEATURED.redesign ? "Rediseño en desarrollo" : "Proyecto destacado"}
            </span>
          </div>

          <div className={s.featuredBody}>
            <h3 className={s.featuredTitle}>
              <span className={s.highlight}>{FEATURED.title}</span>
            </h3>
            <p className={s.featuredText}>{FEATURED.description}</p>
            <ul className={s.tags}>
              {FEATURED.stack.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className={s.btns}>
              <a href={FEATURED.link} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
                Ver sitio {externalIcon()}
              </a>
              <a href={FEATURED.git} target="_blank" rel="noopener noreferrer" className={s.btnSecondary}>
                GitHub
              </a>
            </div>
            {FEATURED.redesign && (
              <p className={s.featuredNote}>El sitio publicado muestra la versión actual.</p>
            )}
          </div>
        </article>

        {/* Filtros + grilla */}
        <div className={s.listing}>
          {showFilters && (
            <div className={s.filters} role="group" aria-label="Filtrar proyectos">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${s.pill} ${filter === cat ? s.pillActive : ""}`}
                  aria-pressed={filter === cat}
                  onClick={() => pickFilter(cat)}
                >
                  {cat} ({countFor(cat)})
                </button>
              ))}
            </div>
          )}

          <div className={s.grid}>
            {shown.map((p) => (
              <article key={p.title} className={s.card}>
                <div className={s.cardImage}>
                  <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" />
                </div>
                <span className={s.cardCategory}>{p.category}</span>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardText}>{p.description}</p>
                {p.stack && <span className={s.cardStack}>{p.stack}</span>}
                <div className={s.cardLinks}>
                  {p.link ? (
                    <>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className={s.cardLink}>
                        Ver sitio {externalIcon(13)}
                      </a>
                      {p.git && (
                        <a href={p.git} target="_blank" rel="noopener noreferrer" className={s.cardGit}>
                          GitHub
                        </a>
                      )}
                    </>
                  ) : (
                    p.git && (
                      <a href={p.git} target="_blank" rel="noopener noreferrer" className={s.cardLink}>
                        Ver código {externalIcon(13)}
                      </a>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className={s.moreRow}>
            {hidden > 0 && (
              <button
                type="button"
                className={s.moreBtn}
                aria-expanded={showAll}
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? "Ver menos" : `Ver más proyectos (${hidden})`}
              </button>
            )}
            {/* Cuando ya se ve todo, invita a seguir en GitHub */}
            {(hidden <= 0 || showAll) && (
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={s.moreBtn}>
                Ver más proyectos en GitHub {externalIcon()}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
