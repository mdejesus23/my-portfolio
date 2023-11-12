import technicalDoc from "../assets/proj-tech-doc.jpg";
import ecommerce from "../assets/proj-ecommerce.jpg";
import foodApp from "../assets/proj-food-app.jpg";

// tech stack used on the project
import HtmlIcon from "../assets/icons8-html5.svg";
import CssIcon from "../assets/icons8-css3.svg";
import JsIcon from "../assets/icons8-javascript.svg";
import ReactIcon from "../assets/icons8-react.svg";
import SassIcon from "../assets/icons8-sass.svg";
// import GitIcon from "../assets/icons8-git.svg";
// import NodeIcon from "../assets/icons8-node.svg";
// import MongoIcon from "../assets/mongodb-icon.svg";

const Projects = [
  {
    id: "p1",
    name: "Food Ordering App",
    imgSrc: foodApp,
    link: "https://food-app.melnerdz.com",
    description: `This is a food ordering app built with React.js and styled using SASS. Experience the convenience of adding items to your cart, placing orders, and seamlessly sending client details and order items to our database. The dynamic menu is rendered in real-time using the Fetch API, ensuring the latest options are always at your fingertips. Enjoy a modern and efficient food ordering experience with our cutting-edge technology.`,
    sourceCode: "https://github.com/mdejesus23/food-app",
    techStack: [
      { id: "r1", tech: "ReactJs", techImg: ReactIcon },
      { id: "s1", tech: "SASS", techImg: SassIcon },
      { id: "h1", tech: "HTML", techImg: HtmlIcon },
    ],
  },
  {
    id: "p2",
    name: "Ecommerce",
    imgSrc: ecommerce,
    link: "https://shop.melnerdz.com",
    description: `This is a sample eCommerce website! Explore, add to cart, and manage your items effortlessly with the power of HTML, Sass, and JavaScript. Enjoy a seamless shopping experience with real-time data fetching and dynamic rendering.`,
    sourceCode: "https://github.com/mdejesus23/ecommerce-sample",
    techStack: [
      { id: "js1", tech: "Javascript", techImg: JsIcon },
      { id: "s2", tech: "SASS", techImg: SassIcon },
      { id: "h2", tech: "HTML", techImg: HtmlIcon },
    ],
  },
  {
    id: "p4",
    name: "Tech Documentation",
    imgSrc: technicalDoc,
    link: "https://documentation.melnerdz.com",
    description: `This is HTML and CSS technical documentation! This comprehensive resource is a conversion of our handy cheat sheet PDF into a user-friendly website. Access it on any device and explore quick references for tags, elements, selectors, and styling techniques. Boost your coding productivity and build stunning web pages with ease.`,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
    techStack: [
      { id: "js2", tech: "Javascript", techImg: JsIcon },
      { id: "css1", tech: "CSS", techImg: CssIcon },
      { id: "h3", tech: "HTML", techImg: HtmlIcon },
    ],
  },
];

export default Projects;
