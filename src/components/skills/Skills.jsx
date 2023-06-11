import React from "react";
import s from "./Skills.module.css";

const Skills = () => {
  const skills = ["JavaScript", "TypeScript", "WordPress", "HTML", "CSS", "Node.js", 
    "Express", "Sequelize", "PostgreSQL", "MongoDB", "Mongoose", "MySQL", "React", 
    "React Native", "Redux", "Bootstrap", "Tailwind"];
  
  return (
    <div className={s.container} id="skills">
      <h2 className={s.title}>Skills</h2>
      <div className={s.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={s.skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;