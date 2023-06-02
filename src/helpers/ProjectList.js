import tributePage from "../assets/proj-tribute.jpg";
import technicalDoc from "../assets/proj-tech-doc.jpg";
import ecommerce from "../assets/proj-ecommerce.jpg";

const Projects = [
  {
    id: "p3",
    name: "Ecommerce",
    imgSrc: ecommerce,
    link: "https://mdejesus23.github.io/ecommerce-sample/index.html",
    description: `
Introducing my latest web development project: an eCommerce website built using HTML, CSS, and JavaScript. This dynamic website allows users to browse and shop for various items, with the ability to add items to the cart and delete them.`,
    sourceCode: "https://github.com/mdejesus23/ecommerce-sample",
  },
  {
    id: "p1",
    name: "Tribute Page",
    imgSrc: tributePage,
    link: "https://mdejesus23.github.io/carmen-tribute/",
    description:
      "Introducing my personal web development project: a tribute page with a quote randomizer. Created using HTML, CSS, and JavaScript, this project combines design and interactivity to pay tribute to remarkable individuals and provide inspiring quotes.",
    sourceCode: "https://github.com/mdejesus23/carmen-tribute",
  },
  {
    id: "p2",
    name: "Tech Documentation",
    imgSrc: technicalDoc,
    link: "https://mdejesus23.github.io/technical-doc/",
    description: `Introducing my web development project: a tech documentation single page website providing useful examples and documentation for HTML and CSS. This project is designed to help users familiarize themselves with these technologies and improve their coding skills.
    Explore this repository to gain a deeper understanding of HTML and CSS, and apply the examples to your own projects
    `,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
  },
];

export default Projects;
