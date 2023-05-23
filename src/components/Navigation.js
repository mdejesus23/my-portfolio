import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  const toggleClass = props.toggleNav ? classes.show : classes.hide;

  return (
    <motion.nav
      className={toggleClass}
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <ul className={classes.links}>
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "yellow",
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "yellow",
          }}
        >
          <NavLink
            to="Skills"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Skills
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "yellow",
          }}
        >
          <NavLink
            to="Projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Project
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "yellow",
          }}
        >
          <NavLink
            to="Contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navigation;
