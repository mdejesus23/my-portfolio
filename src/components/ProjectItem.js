import React from "react";
import classes from "./ProjectItem.module.scss";
// import Button from "../components/UI/Button/Button";

function ProjectItem({ id, name, techStack }) {
  console.log(techStack);
  return (
    <li id={id} className={classes.projectContainer}>
      <h2>{name}</h2>
      <div className={classes.container}>
        {techStack.map((tech, ind) => {
          return (
            <div className={classes.techCont}>
              <img src={tech.techImg} alt={`${tech.tech} icons`} />
              <p>{tech.tech}</p>
            </div>
          );
        })}
      </div>

      {/* <div className={classes.projectDetails}>
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
      </div> */}
    </li>
  );
}

export default ProjectItem;
