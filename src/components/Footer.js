import classes from "./Footer.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p>&copy; Copyright {currentYear}</p>
    </footer>
  );
};

export default Footer;
