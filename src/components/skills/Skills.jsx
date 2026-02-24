import s from "./Skills.module.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";
import { SiSocketdotio } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiTrello } from "react-icons/si";
import { SiJira } from "react-icons/si";

const Skills = () => {
  return (
    <div className={s.container} id="skills">
      <h2 className={s.title}>Skills</h2>

      {/* Frontend */}
      <div className={s.categorySection}>
        <h3 className={s.categoryTitle}>Frontend</h3>
        <div className={s.skills}>
          <div className={s.skill}>
            <AiOutlineHtml5 className={s.icon} />
            <p>HTML5</p>
          </div>
          <div className={s.skill}>
            <FaCss3 className={s.icon} />
            <p>CSS3</p>
          </div>
          <div className={s.skill}>
            <IoLogoJavascript className={s.icon} />
            <p>JavaScript</p>
          </div>
          <div className={s.skill}>
            <SiTypescript className={s.icon} />
            <p>TypeScript</p>
          </div>
          <div className={s.skill}>
            <FaWordpressSimple className={s.icon} />
            <p>WordPress</p>
          </div>
          <div className={s.skill}>
            <FaReact className={s.icon} />
            <p>React</p>
          </div>
          <div className={s.skill}>
            <SiRedux className={s.icon} />
            <p>Redux</p>
          </div>
          <div className={s.skill}>
            <FaReact className={s.icon} />
            <p>React Native</p>
          </div>
          <div className={s.skill}>
            <SiExpo className={s.icon} />
            <p>Expo</p>
          </div>
          <div className={s.skill}>
            <RiNextjsLine className={s.icon} />
            <p>Next.js</p>
          </div>
          <div className={s.skill}>
            <FaBootstrap className={s.icon} />
            <p>Bootstrap</p>
          </div>
          <div className={s.skill}>
            <SiTailwindcss className={s.icon} />
            <p>Tailwind</p>
          </div>
          <div className={s.skill}>
            <SiVite className={s.icon} />
            <p>Vite</p>
          </div>
        </div>
      </div>

      {/* Backend & Base de Datos */}
      <div className={s.categorySection}>
        <h3 className={s.categoryTitle}>Backend & Base de Datos</h3>
        <div className={s.skills}>
          <div className={s.skill}>
            <FaNodeJs className={s.icon} />
            <p>Node.js</p>
          </div>
          <div className={s.skill}>
            <SiExpress className={s.icon} />
            <p>Express</p>
          </div>
          <div className={s.skill}>
            <SiNestjs className={s.icon} />
            <p>NestJS</p>
          </div>
          <div className={s.skill}>
            <DiDjango className={s.icon} />
            <p>Django</p>
          </div>
          <div className={s.skill}>
            <SiSequelize className={s.icon} />
            <p>Sequelize</p>
          </div>
          <div className={s.skill}>
            <SiPostgresql className={s.icon} />
            <p>PostgreSQL</p>
          </div>
          <div className={s.skill}>
            <GrMysql className={s.icon} />
            <p>MySQL</p>
          </div>
          <div className={s.skill}>
            <SiMongodb className={s.icon} />
            <p>MongoDB</p>
          </div>
          <div className={s.skill}>
            <TbBrandPrisma className={s.icon} />
            <p>Prisma</p>
          </div>
          <div className={s.skill}>
            <GrGraphQl className={s.icon} />
            <p>GraphQL</p>
          </div>
          <div className={s.skill}>
            <SiSocketdotio className={s.icon} />
            <p>Socket.io</p>
          </div>
          <div className={s.skill}>
            <AiOutlinePython className={s.icon} />
            <p>Python</p>
          </div>
        </div>
      </div>

      {/* DevOps & Herramientas */}
      <div className={s.categorySection}>
        <h3 className={s.categoryTitle}>DevOps & Herramientas</h3>
        <div className={s.skills}>
          <div className={s.skill}>
            <FaDocker className={s.icon} />
            <p>Docker</p>
          </div>
          <div className={s.skill}>
            <FaAws className={s.icon} />
            <p>AWS</p>
          </div>
          <div className={s.skill}>
            <SiNginx className={s.icon} />
            <p>Nginx</p>
          </div>
          <div className={s.skill}>
            <FaGitAlt className={s.icon} />
            <p>Git</p>
          </div>
          <div className={s.skill}>
            <SiJest className={s.icon} />
            <p>Jest</p>
          </div>
          <div className={s.skill}>
            <SiPostman className={s.icon} />
            <p>Postman</p>
          </div>
          <div className={s.skill}>
            <SiTrello className={s.icon} />
            <p>Trello</p>
          </div>
          <div className={s.skill}>
            <SiJira className={s.icon} />
            <p>Jira</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Skills;