import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  const stylesClasses = `${classes.card} ${props.className}`;
  return <div className={stylesClasses}>{props.children}</div>;
};

export default Card;
