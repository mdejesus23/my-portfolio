import classes from "./ProjectList.module.scss";
import Projects from "../helpers/ProjectList";
import ProjectItem from "./ProjectItem";
import Button from "../components/UI/Button/Button";

import { motion } from "framer-motion";
import { useState } from "react";

const ProjectList = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <div className={classes.heading}>
        <h1>My Projects</h1>
        <p>
          Welcome to my portfolio's project showcase! Explore a curated list of
          projects I've built from scratch, featuring a robust tech stack: HTML,
          CSS, JavaScript, Node.js, Express.js, MongoDB, EJS, and React.js. One
          highlight is the recently deployed <em>Preparation App</em>, currently
          utilized in our church organization. Witness the power of responsive
          web design and the seamless fusion of technology in this full-stack
          project!
        </p>
      </div>
      <section className={classes.container}>
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
              videoDemo,
            } = proj;
            return (
              <ProjectItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                key={id}
                id={id}
                imgSrc={imgSrc}
                link={link}
                sourceCode={sourceCode}
                name={name}
                desc={desc}
                techStack={techStack}
                videoDemo={videoDemo}
              >
                <div className={classes.projectDetails}>
                  {/* <div className={classes.imageContainer}>
                  <img src={imgSrc} alt={name} />
                  </div> */}
                  <div className={classes.descContainer}>
                    <p className={classes.descText}>{desc}</p>
                  </div>
                  <div className={classes.control}>
                    <a href={sourceCode} target="_blank" rel="noreferrer">
                      <Button>Code</Button>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer">
                      <Button>Live</Button>
                    </a>
                    {videoDemo ? (
                      <a href={videoDemo} target="_blank" rel="noreferrer">
                        <Button>Demo</Button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </ProjectItem>
            );
          })}
        </motion.ul>
      </section>
    </>
  );
};

export default ProjectList;
