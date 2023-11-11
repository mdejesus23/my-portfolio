import HtmlIcon from "../assets/icons8-html5.svg";
import CssIcon from "../assets/icons8-css3.svg";
import JsIcon from "../assets/icons8-javascript.svg";
import ReactIcon from "../assets/icons8-react.svg";
import SassIcon from "../assets/icons8-sass.svg";
import GitIcon from "../assets/icons8-git.svg";
import NodeIcon from "../assets/icons8-node.svg";
import MongoIcon from "../assets/mongodb-icon.svg";

// dont procastinate or be perfectionist.. it will delay you some time..

const SkillsList = [
  {
    id: "tech-0.1",
    tech: "NodeJs",
    image: NodeIcon,
    altText: "node icon",
    description:
      "Node.js is a server-side JavaScript runtime that allows developers to build scalable and fast web applications.",
  },
  {
    id: "tech-0.2",
    tech: "MongoDB",
    image: MongoIcon,
    altText: "mongodb icon",
    description: `
    MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's designed for scalability and flexibility, making it well-suited for handling large amounts of unstructured data.`,
  },
  {
    id: "tech-1",
    tech: "Html5",
    image: HtmlIcon,
    altText: "html",
    description: `HTML is the language used to create and structure content on the web using tags like headings, paragraphs, and images.`,
  },
  {
    id: "tech-2",
    tech: "Css3",
    image: CssIcon,
    altText: "css",
    description: `CSS styles web page elements, controlling their appearance and layout by defining colors, fonts, spacing, and positioning.`,
  },
  {
    id: "tech-3",
    tech: "Javascript",
    image: JsIcon,
    altText: "javascript",
    description: `JavaScript is a programming language used to make web pages interactive. It runs in web browsers, enabling developers to create dynamic content, handle events, and build responsive user interfaces.`,
  },
  {
    id: "tech-4",
    tech: "React.js",
    image: ReactIcon,
    altText: "javascript",
    description: `React.js is a JavaScript library for building interactive user interfaces efficiently.`,
  },
  {
    id: "tech-5",
    tech: "Sass",
    image: SassIcon,
    altText: "sass",
    description: `SCSS is an enhanced version of CSS with features like variables and nesting for more maintainable stylesheets in web development.`,
  },
  {
    id: "tech-6",
    tech: "Git",
    image: GitIcon,
    altText: "git",
    description: `Git is a version control system for tracking changes in software development, facilitating collaboration among multiple developers.`,
  },
];

export default SkillsList;
