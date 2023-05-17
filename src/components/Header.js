import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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

  console.log(showNavLinks);

  return (
    <header>
      <Navigation toggleNav={showNavLinks} />
      <div className={classes.menuButtonContainer}>
        <button className={classes.menuButton} onClick={menuButtonHandler}>
          <MenuOutlinedIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
