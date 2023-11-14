import classes from "./about.module.scss";
import profilePic2 from "../assets/profile-pic.jpg";
import Button from "./UI/Button/Button";
import Skills from "./SkillsList";
// import AnimatedIcon from "./UI/Animation/AnimatedIcon";

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const [text] = useTypewriter({
    words: ["Developer 💻", "Hardware-tech ⚙", "Freelancer"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 500,
  });

  return (
    <>
      <div className={classes.home}>
        <motion.div
          className={classes.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={classes.gridItem1}>
            <h2>
              Hi, My Name is <span>Melnard</span>
            </h2>
            <h3>
              I'm a <span className={classes.typewriter}>{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h3>
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
        </motion.div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default About;
