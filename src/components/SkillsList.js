import { useState } from "react";

import SkillsList from "../helpers/SkillsList";
import Card from "../components/UI/Card/Card";
import classes from "./SkillsList.module.scss";

const Skills = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    console.log(selectedId);
  }

  const mySkillsList = SkillsList.map((skill) => {
    return (
      <li onClick={() => handleClick(skill.id)} key={skill.id}>
        <Card>
          <img src={skill.image} alt={skill.altText} />
        </Card>
      </li>
    );
  });

  return (
    <div
      className={classes.skillContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h1>Tech Stack</h1>
      <div className={classes.skillsList}>
        <ul>{mySkillsList}</ul>
      </div>
    </div>
  );
};

export default Skills;
