import { useEffect, useRef } from "react";
import s from "./Skills.module.css";
import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { FaCss3, FaNodeJs, FaReact, FaBootstrap, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress, SiSequelize, SiPostgresql, SiRedux, SiTailwindcss, SiNginx, SiExpo, SiNestjs, SiVite, SiMongodb, SiSocketdotio, SiJest, SiPostman, SiTrello, SiJira } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandPrisma } from "react-icons/tb";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { DiDjango } from "react-icons/di";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { Icon: AiOutlineHtml5,    name: "HTML5"        },
      { Icon: FaCss3,            name: "CSS3"         },
      { Icon: IoLogoJavascript,  name: "JavaScript"   },
      { Icon: SiTypescript,      name: "TypeScript"   },
      { Icon: FaReact,           name: "React"        },
      { Icon: SiRedux,           name: "Redux"        },
      { Icon: FaReact,           name: "React Native" },
      { Icon: SiExpo,            name: "Expo"         },
      { Icon: RiNextjsLine,      name: "Next.js"      },
      { Icon: FaBootstrap,       name: "Bootstrap"    },
      { Icon: SiTailwindcss,     name: "Tailwind"     },
      { Icon: SiVite,            name: "Vite"         },
    ],
  },
  {
    id: "backend",
    label: "Backend & Base de Datos",
    items: [
      { Icon: FaNodeJs,          name: "Node.js"      },
      { Icon: SiExpress,         name: "Express"      },
      { Icon: SiNestjs,          name: "NestJS"       },
      { Icon: DiDjango,          name: "Django"       },
      { Icon: AiOutlinePython,   name: "Python"       },
      { Icon: SiSequelize,       name: "Sequelize"    },
      { Icon: TbBrandPrisma,     name: "Prisma"       },
      { Icon: SiPostgresql,      name: "PostgreSQL"   },
      { Icon: GrMysql,           name: "MySQL"        },
      { Icon: SiMongodb,         name: "MongoDB"      },
      { Icon: GrGraphQl,         name: "GraphQL"      },
      { Icon: SiSocketdotio,     name: "Socket.io"    },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Herramientas",
    items: [
      { Icon: FaDocker,   name: "Docker"   },
      { Icon: FaAws,      name: "AWS"      },
      { Icon: SiNginx,    name: "Nginx"    },
      { Icon: FaGitAlt,   name: "Git"      },
      { Icon: SiJest,     name: "Jest"     },
      { Icon: SiPostman,  name: "Postman"  },
      { Icon: SiTrello,   name: "Trello"   },
      { Icon: SiJira,     name: "Jira"     },
    ],
  },
];

const Skills = () => {
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(s.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={s.container} id="skills">
      <div className={s.inner} ref={innerRef}>

        <div className={s.sectionHeader}>
          <h2 className={s.title}>Skills</h2>
          <span className={s.titleBar} aria-hidden="true" />
        </div>

        {CATEGORIES.map((cat, ci) => (
          <div
            key={cat.id}
            className={s.category}
            style={{ "--cat-delay": `${ci * 0.12}s` }}
          >
            <div className={s.categoryHeader}>
              <h3 className={s.categoryTitle}>{cat.label}</h3>
              <span className={s.categoryBadge} aria-label={`${cat.items.length} tecnologías`}>
                {cat.items.length}
              </span>
            </div>

            <div className={s.grid} role="list">
              {cat.items.map(({ Icon, name }, i) => (
                <div
                  key={name}
                  className={s.skill}
                  role="listitem"
                  style={{ "--skill-delay": `${ci * 0.12 + i * 0.035}s` }}
                >
                  <Icon className={s.icon} aria-hidden="true" />
                  <span className={s.skillName}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
