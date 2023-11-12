import technicalDoc from "../assets/proj-tech-doc.jpg";
import ecommerce from "../assets/proj-ecommerce.jpg";
import foodApp from "../assets/proj-food-app.jpg";
import prepApp from "../assets/prep.jpg";

// tech stack used on the project
import HtmlIcon from "../assets/icons8-html5.svg";
import CssIcon from "../assets/icons8-css3.svg";
import JsIcon from "../assets/icons8-javascript.svg";
import ReactIcon from "../assets/icons8-react.svg";
import SassIcon from "../assets/icons8-sass.svg";
// import GitIcon from "../assets/icons8-git.svg";
import NodeIcon from "../assets/icons8-node.svg";
import MongoIcon from "../assets/mongodb-icon.svg";

const Projects = [
  {
    id: "p-01",
    name: "Preparation App",
    imgSrc: prepApp,
    link: "https://preparation-app.onrender.com/",
    description: `
    I have developed a comprehensive preparation app for our church organization. This full-stack web application is built using Node.js, with Express serving as the backend framework, MongoDB for data storage, EJS templates for rendering HTML documents in response to client requests, and CSS for styling. Key functionalities include user signup and login features, where I've incorporated Express-session to store session data in the database and utilize sessionId in the browser's cookie. Additionally, I've implemented Content Security Policy (CSP) using the Node Helmet package and included CSRF protection to enhance the overall security of the website, and many more..`,
    sourceCode: "https://github.com/mdejesus23/preparation-app",
    techStack: [
      { id: "n1", tech: "NodeJs", techImg: NodeIcon },
      { id: "m1", tech: "MongoDB", techImg: MongoIcon },
      { id: "js101", tech: "Javascript", techImg: JsIcon },

      { id: "css101", tech: "CSS", techImg: CssIcon },
      { id: "h101", tech: "HTML", techImg: HtmlIcon },
    ],
  },
  {
    id: "p1",
    name: "Food Ordering App",
    imgSrc: foodApp,
    link: "https://food-app.melnerdz.com",
    description: `I have developed a Food Ordering App using React.js, incorporating essential concepts such as useState for state management, useReducer, useCallback, and other key React hooks. Additionally, I utilized the Fetch API to send GET requests to a Firebase server and interact with a real-time database. The app is styled using Sass, providing a visually appealing interface. Users can add items to their cart and place orders, triggering a POST request to Firebase for seamless order processing.`,
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
    description: `I have developed an E-commerce website using technologies such as HTML, Sass, and JavaScript. To retrieve product data dynamically, I utilize the Fetch API to send a GET request to Firebase and seamlessly render the information on the client side. Additionally, I have implemented local storage to effectively store and manage cart data. While the application doesn't support POST requests, it serves as a comprehensive showcase of my proficiency in user interface design and responsive web development.`,
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
    description: `This is an HTML and CSS technical documentation, a comprehensive resource converted from our handy cheat sheet PDF into a user-friendly website. Accessible on any device, it provides quick references for tags, elements, selectors, and styling techniques. Elevate your coding productivity and effortlessly create stunning web pages. I have utilized grid and flexbox to showcase my capabilities in building web pages and UI from scratch.`,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
    techStack: [
      { id: "js2", tech: "Javascript", techImg: JsIcon },
      { id: "css1", tech: "CSS", techImg: CssIcon },
      { id: "h3", tech: "HTML", techImg: HtmlIcon },
    ],
  },
];

export default Projects;
