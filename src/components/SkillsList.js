import SkillsList from "../helpers/SkillsList";
import Card from "../components/UI/Card/Card";

import { motion } from "framer-motion";
import classes from "./SkillsList.module.scss";
import { useState } from "react";

const Skills = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    console.log(selectedId);
  }

  const mySkillsList = SkillsList.map((skill) => {
    return (
      <li onClick={() => handleClick(skill.id)} key={skill.id}>
        <Card className={skill.id === selectedId ? "skill-card" : ""}>
          <h2>{skill.tech}</h2>

          {skill.id === selectedId ? (
            <p>{skill.description}</p>
          ) : (
            <img src={skill.image} alt={skill.altText} />
          )}
        </Card>
      </li>
    );
  });

  return (
    <motion.div
      className={classes.skillContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h1>Tech Stack</h1>
      <motion.div
        className={classes.skillsList}
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 60 }}
      >
        <ul>{mySkillsList}</ul>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
