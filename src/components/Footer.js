import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes.socialMedia}>
        <a
          href="https://www.facebook.com/dejesusmelnard"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/melnard23/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/MelDejesus23"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </div> */}
      <p>&copy; Copyright {new Date().getFullYear()} melnerdz.com </p>
    </footer>
  );
};

export default Footer;
