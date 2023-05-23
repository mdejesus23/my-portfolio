import classes from "./ProjectItem.module.scss";

import Button from "./UI/Button/Button";
import Card from "../components/UI/Card/Card";

const ProjectItem = ({ id, name, imgSrc, link, sourceCode }) => {
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
          <Button>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              Code
            </a>
          </Button>
          <Button>
            <a href={link} target="_blank" rel="noreferrer">
              Demo
            </a>
          </Button>
        </div>
      </li>
    </Card>
  );
};

export default ProjectItem;
