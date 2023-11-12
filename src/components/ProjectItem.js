import React from "react";
import classes from "./ProjectItem.module.scss";
// import Button from "../components/UI/Button/Button";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProjectItem({ id, name, techStack, children, curOpen, onOpen }) {
  const isOpen = id === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : id);
  };

  return (
    <li
      key={id}
      id={id}
      className={`${classes.projectContainer} ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <h2>{name}</h2>
      <div className={classes.container}>
        {techStack.map((tech, ind) => {
          return (
            <div key={ind} className={classes.techCont}>
              <img src={tech.techImg} alt={`${tech.tech} icons`} />
              <p>{tech.tech}</p>
            </div>
          );
        })}
      </div>
      {!isOpen ? (
        <>
          <p>more...</p>
          <p className={classes.arrow}>{<KeyboardArrowDownIcon />}</p>
        </>
      ) : (
        ""
      )}

      {isOpen ? children : null}
      {isOpen ? (
        <>
          <p>less...</p>
          <p className={classes.arrow}>{<KeyboardArrowUpIcon />}</p>
        </>
      ) : (
        ""
      )}
    </li>
  );
}

export default ProjectItem;
