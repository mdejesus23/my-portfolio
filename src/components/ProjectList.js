import classes from "./ProjectList.module.scss";
import Projects from "../helpers/ProjectList";
import ProjectItem from "./ProjectItem";
import Button from "../components/UI/Button/Button";

import { motion } from "framer-motion";

const ProjectList = () => {
  return (
    <motion.section
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
        {Projects.map((proj) => {
          const {
            id,
            imgSrc,
            link,
            sourceCode,
            name,
            description: desc,
            techStack,
          } = proj;
          return (
            <ProjectItem
              key={id}
              id={id}
              imgSrc={imgSrc}
              link={link}
              sourceCode={sourceCode}
              name={name}
              desc={desc}
              techStack={techStack}
            >
              <div className={classes.projectDetails}>
                <div className={classes.imageContainer}>
                  <img src={imgSrc} alt={name} />
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
              </div>
            </ProjectItem>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default ProjectList;
