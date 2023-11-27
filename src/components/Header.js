import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Navigation from "./Navigation";
import classes from "./Header.module.scss";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowNavLinks(false);
  }, [location]);

  const menuButtonHandler = () => {
    setShowNavLinks((prev) => !prev);
  };

  return (
    <header>
      <h1>MDJ</h1>
      <Navigation toggleNav={showNavLinks} />
      <div className={classes.menuButtonContainer}>
        <button className={classes.menuButton} onClick={menuButtonHandler}>
          {showNavLinks ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
