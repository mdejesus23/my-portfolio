import React from "react";
import classes from "./animated.module.scss";

import Html from "../../../assets/icons8-html5.svg";
import Css from "../../../assets/icons8-css3.svg";
import Js from "../../../assets/icons8-javascript.svg";

// import classes from "./Card.module.scss";

const AnimatedIcon = () => {
  return (
    <div className={classes.animatedIcon}>
      <div className={classes.techIcon}>
        <img src={Html} alt="html icon" />
      </div>
      <div className={classes.techIcon}>
        <img src={Css} alt="html icon" />
      </div>
      <div className={classes.techIcon}>
        <img src={Js} alt="html icon" />
      </div>
    </div>
  );
};

export default AnimatedIcon;
