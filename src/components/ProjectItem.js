import classes from "./ProjectItem.module.scss";
import Projects from "../helpers/ProjectList";

import { motion } from "framer-motion";
import Button from "./UI/Button/Button";
import Card from "../components/UI/Card/Card";

const ProjectItem = () => {
  const ProjectList = Projects.map((proj) => {
    const { id, imgSrc, link, sourceCode, name } = proj;
    return (
      <Card className={classes.card}>
        <li key={id} className={classes.projectContainer}>
          <div className={classes.imageContainer}>
            <h2>{name}</h2>
            <img src={imgSrc} alt={name} />
          </div>
          {/* <div className={classes.descContainer}>
        <p>{desc}</p>
        </div> */}
          <div className={classes.control}>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              <Button>Code</Button>
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <Button>Demo</Button>
            </a>
          </div>
        </li>
      </Card>
    );
  });

  return (
    <motion.div
      className={classes.container}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.3 }}
    >
      <h1>My Projects</h1>
      <p>
        Welcome to my portfolio's Project Section! Here, you'll find a
        collection of responsive websites created using HTML, CSS, JavaScript,
        and Sass. These simple yet visually appealing websites adapt perfectly
        to any screen size, ensuring a seamless user experience across all
        devices. Explore the projects and witness the power of responsive web
        design in action!
      </p>
      <motion.ul
        className={classes.flex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {ProjectList}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectItem;
