import classes from "./ProjectItem.module.scss";
import Projects from "../helpers/ProjectList";

import { motion } from "framer-motion";
import Button from "./UI/Button/Button";
import Card from "../components/UI/Card/Card";

const ProjectItem = () => {
  const ProjectList = Projects.map((proj) => {
    const { id, imgSrc, link, sourceCode, name, description: desc } = proj;
    return (
      <Card className={classes.card}>
        <li key={id} className={classes.projectContainer}>
          <div className={classes.imageContainer}>
            <img src={imgSrc} alt={name} />
            <h2>{name}</h2>
          </div>
          <div className={classes.descContainer}>
            <p className={classes.descText}>{desc}</p>
          </div>
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
        Welcome to my Portfolio's Project Section! Explore these responsive
        websites crafted with HTML, CSS, and JavaScript. Leveraging Node.js,
        Express.js, MongoDB, AWS S3, and EJS, these projects showcase the
        seamless fusion of a robust tech stack, ensuring adaptability across all
        devices. Dive in and witness the power of responsive web design!
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
