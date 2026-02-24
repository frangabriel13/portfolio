import React from "react";
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

const Skills = () => {
  const skills = ["JavaScript", "TypeScript", "WordPress", "HTML", "CSS", "Node.js", 
    "Express", "Sequelize", "PostgreSQL", "MongoDB", "Mongoose", "MySQL", "React", 
    "React Native", "Redux", "Bootstrap", "Tailwind"];
  
  return (
    <div className={s.container} id="skills">
      <h2 className={s.title}>Skills</h2>
      {/* <div className={s.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={s.skill}>{skill}</span>
        ))}
      </div> */}
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
          <FaNodeJs className={s.icon} />
          <p>NodeJs</p>
        </div>
        <div className={s.skill}>
          <SiExpress className={s.icon} />
          <p>Express</p>
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
          <SiNestjs className={s.icon} />
          <p>NestJS</p>
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
      </div>
    </div>
  );
}


export default Skills;