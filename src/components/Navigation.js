import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  const toggleId = props.toggleNav ? classes.show : classes.hide;

  return (
    <nav className={toggleId}>
      <ul className={classes.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Skills"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
