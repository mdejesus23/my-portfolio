import tributePage from "../assets/proj-tribute.jpg";
import technicalDoc from "../assets/proj-tech-doc.jpg";
import ecommerce from "../assets/proj-ecommerce.jpg";

const Projects = [
  {
    id: "p3",
    name: "Ecommerce",
    imgSrc: ecommerce,
    link: "https://shop.melnerdz.com",
    description: `This is a sample eCommerce website! Explore, add to cart, and manage your items effortlessly with the power of HTML, Sass, and JavaScript. Enjoy a seamless shopping experience with real-time data fetching and dynamic rendering.`,
    sourceCode: "https://github.com/mdejesus23/ecommerce-sample",
  },
  {
    id: "p1",
    name: "Tribute Page",
    imgSrc: tributePage,
    link: "https://tribute.melnerdz.com",
    description:
      "Introducing my personal web development project: a tribute page with a quote randomizer. Created using HTML, CSS, and JavaScript, this project combines design and interactivity to pay tribute to remarkable individuals and provide inspiring quotes.",
    sourceCode: "https://github.com/mdejesus23/carmen-tribute",
  },
  {
    id: "p2",
    name: "Tech Documentation",
    imgSrc: technicalDoc,
    link: "https://documentation.melnerdz.com",
    description: `This is HTML and CSS technical documentation! This comprehensive resource is a conversion of our handy cheat sheet PDF into a user-friendly website. Access it on any device and explore quick references for tags, elements, selectors, and styling techniques. Boost your coding productivity and build stunning web pages with ease.`,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
  },
];

export default Projects;
