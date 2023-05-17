import classes from "./Home.module.scss";
import profilePic from "../assets/profile-pic.jpg";
import Button from "../components/UI/Button/Button";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.grid}>
        <div className={classes.gridItem1}>
          <h2>
            Hi, My Name is <span>Melnard</span>
          </h2>
          <div className={classes.prompt}>
            <p>
              As a junior front-end developer, I specialize in HTML, CSS,
              JavaScript, React.js, Sass, and Git. My portfolio showcases my
              passion for creating clean and intuitive web interfaces. Let's
              bring ideas to life together!
            </p>
            <div className={classes.icons}>
              <GitHubIcon />
              <LinkedInIcon />
              <Button>Download CV</Button>
            </div>
          </div>
        </div>
        <div className={classes.gridItem2}>
          <div className={classes.clip}>
            <img src={profilePic} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
