import SkillsList from "../helpers/SkillsList";
import Card from "../components/UI/Card/Card";

import { motion } from "framer-motion";
import classes from "./SkillsList.module.scss";

const Skills = () => {
  const mySkillsList = SkillsList.map((skill) => {
    return (
      <motion.li
        key={skill.id}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px #cccc00",
          boxShadow: "0px 0px 8px #1b1b32",
        }}
      >
        <Card className="skill-card">
          <h2>{skill.tech}</h2>
          <img src={skill.image} alt={skill.altText} />
        </Card>
      </motion.li>
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
