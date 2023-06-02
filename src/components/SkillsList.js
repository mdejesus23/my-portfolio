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
        <Card>
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
      <h1>My Skills</h1>
      <p>
        I am a front-end developer skilled in HTML, CSS, JavaScript, React.js,
        Sass, and Git. With expertise in creating engaging web experiences, I
        build responsive interfaces including this website using HTML, CSS, and
        JavaScript. Leveraging React.js, I develop dynamic user interfaces for
        seamless interactions and efficient data management. I utilize Sass to
        streamline styling, and Git for effective version control and
        collaboration. Dedicated to delivering exceptional user experiences, I
        stay updated with the latest trends to create visually stunning
        websites.
      </p>
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
