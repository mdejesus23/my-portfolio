import Projects from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import classes from "./Project.module.scss";

const ProjectsPage = () => {
  const ProjectList = Projects.map((proj) => {
    return (
      <ProjectItem
        id={proj.id}
        name={proj.name}
        imgSrc={proj.imgSrc}
        link={proj.link}
        desc={proj.description}
        sourceCode={proj.sourceCode}
      />
    );
  });

  return (
    <>
      <h1>My Projects</h1>
      <motion.ul
        className={classes.flex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        // initial={{ y: -800 }}
        // animate={{ y: 0 }}
        // transition={{ delay: 0.1, type: "spring", stiffness: 60 }}
      >
        {ProjectList}
      </motion.ul>
    </>
  );
};

export default ProjectsPage;
