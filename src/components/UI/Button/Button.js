import React from "react";

import { motion } from "framer-motion";

import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <motion.button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px #cccc00",
        boxShadow: "0px 0px 8px #cccc00",
      }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
