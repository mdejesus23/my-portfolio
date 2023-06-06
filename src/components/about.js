import classes from "./about.module.scss";
import profilePic2 from "../assets/melnard.jpg";
import Button from "./UI/Button/Button";

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Hardware-tech", "Freelancer", "Comedian", "=) Joke!"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 500,
  });

  return (
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
              A junior front-end developer with an insatiable thirst for
              knowledge and a deep passion for creating remarkable web
              experiences.
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
                href="https://drive.google.com/file/d/11Q_fqLTA7T291m9srtTAIYHtO3_BOK33/view?usp=sharing"
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
          <div className={classes.clip}>
            <img src={profilePic2} alt="profile" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
