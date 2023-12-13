import classes from "./about.module.scss";
import profilePic2 from "../assets/profile-pic.jpg";
import Button from "./UI/Button/Button";
import Skills from "./SkillsList";
// import AnimatedIcon from "./UI/Animation/AnimatedIcon";

// import { useTypewriter, Cursor } from "react-simple-typewriter";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.grid}>
          <div className={classes.gridItem1}>
            <h2>
              Hi, My Name is <span>Melnard</span>
            </h2>

            <div className={classes.prompt}>
              <p>
                A junior Full Stack Web Developer with a passion for creating
                seamless digital experiences. Specializing in Node.js, MongoDB,
                React.js, and the essentials (JavaScript, HTML, CSS), I bring a
                blend of backend efficiency and frontend elegance to every
                project. Let's build something extraordinary! 💻🌐
              </p>
              <div className={classes.icons}>
                <a
                  href="https://github.com/mdejesus23"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/melnard-de-jesus-279132278/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://drive.google.com/file/d/1L-h-4ATTCMBDc-Rg5yZEoUe48sYjuFj8/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Download CV</Button>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.gridItem2}>
            {/* <AnimatedIcon /> */}
            <div className={classes.clip}>
              <img src={profilePic2} alt="profile" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default About;
