import s from "./Resumen.module.css";
import cv from "../../assets/fMansillaCV.pdf";

// Fechas vacías ("") no se muestran: completalas cuando las tengas
const EDUCATION = [
  {
    title: "Ingeniería Informática",
    place: "Universidad Nacional de La Matanza (UNLaM)",
    dates: "2026 — En curso",
  },
];

const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    place: "Fabricante Directo — único desarrollador de la plataforma B2B web y mobile (Android e iOS). Hoy, mantenimiento.",
    dates: "Noviembre 2023 — Actualidad",
  },
  {
    title: "Full Stack Developer freelance",
    place: "Proyectos web para clientes nacionales e internacionales",
    dates: "2023 — Actualidad",
  },
];

const SKILLS = [
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "React Native", "Expo", "Next.js", "Bootstrap", "Tailwind", "Vite"],
  },
  {
    label: "Backend y datos",
    items: ["Node.js", "Express", "NestJS", "Django", "Python", "Sequelize", "Prisma", "PostgreSQL", "MySQL", "MongoDB", "GraphQL", "Socket.io"],
  },
  {
    label: "DevOps y herramientas",
    items: ["Docker", "AWS", "Nginx", "Git", "Jest", "Postman", "Trello", "Jira"],
  },
];

const renderEntry = (entry) => (
  <div key={entry.title} className={s.entry}>
    <span className={s.entryTitle}>{entry.title}</span>
    <span className={s.entryPlace}>{entry.place}</span>
    {entry.dates && <span className={s.entryDates}>{entry.dates}</span>}
  </div>
);

const Resumen = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Franco_Mansilla_CV.pdf";
    link.click();
  };

  return (
    <section className={s.container} id="resumen">
      <div className={s.inner}>
        <header className={s.header}>
          <h2 className={s.title}>Resumen</h2>
          <p className={s.intro}>
            Empecé programando de forma autodidacta, desarrollando proyectos para clientes nacionales e internacionales. En paralelo, me encargué de todo el desarrollo de un sistema B2B web y mobile para Android e iOS, que hoy mantengo. Actualmente curso Ingeniería Informática en la UNLaM.
          </p>
        </header>

        <div className={s.block}>
          <h3 className={s.blockTitle}>
            <span className={s.highlight}>Educación</span>
          </h3>
          {EDUCATION.map(renderEntry)}
        </div>

        <div className={s.block}>
          <h3 className={s.blockTitle}>
            <span className={s.highlight}>Experiencia</span>
          </h3>
          {EXPERIENCE.map(renderEntry)}
        </div>

        <div className={`${s.block} ${s.blockWide}`}>
          <h3 className={s.blockTitle}>
            <span className={s.highlight}>Skills y herramientas</span>
          </h3>
          <div className={s.skills}>
            {SKILLS.map((group) => (
              <div key={group.label} className={s.skillGroup}>
                <span className={s.skillLabel}>{group.label}</span>
                <ul className={s.skillList}>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={s.cv}>
          <span className={s.cvText}>Descargá mi currículum completo en PDF.</span>
          <button className={s.cvBtn} onClick={handleDownloadCV}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v12M6 10l6 6 6-6M5 20h14" />
            </svg>
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resumen;
