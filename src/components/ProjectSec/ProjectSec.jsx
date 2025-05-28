import React, { useState } from "react";
import styles from "./ProjectSec.module.css";
import HeroImage from "../../assets/myImgs/1.jpg";
import Mini from "../../assets/projectImg/mimi-e.png"
import Ecommerce from "../../assets/projectImg/e-commerce.png";
import Ksa from "../../assets/projectImg/ksa.png";
import Portfolio from "../../assets/projectImg/portf.png";



const projects = [
  {
    name: "mini E-Commerce App",
    description:
      "This is a fully functional mini e-commerce web application built using HTML5, CSS3, and vanilla JavaScript. The project demonstrates core front-end development skills, including dynamic content rendering, responsive design, and client-side state management using localStorage.",
    features: [
      "Dynamic product listing",
      "Responsive design",
      "Cart management with localStorage",
      "Clean UI with vanilla JS, HTML5, CSS3",
    ],
    tech: ["JS", "HTML5", "CSS3"],
    img: Mini,
    github: "https://github.com/Ashraf-khaled-w/mini-e-commerce",
    vercel: "",
  },
  {
    name: "E-commerce with React",
    description:
      "This is a modern and scalable e-commerce web application built with React and Tailwind CSS. It showcases my ability to structure and develop a professional, component-based front-end architecture while managing state and routing effectively.",
    features: [
      "Dynamic product listing rendered through reusable React components",
      "Cart management with add/remove functionality",
      "React Router for smooth page navigation",
      "Tailwind CSS for fast, responsive, and clean UI design",
      "State management using useState and useEffect hooks",
      "Modular file structure for maintainability and scalability",
      "Designed with user experience and performance in mind",
    ],
    tech: ["React", "Tailwind CSS", "React Router", "Vercel"],
    img: Ecommerce,
    github: "https://github.com/Ashraf-khaled-w/e-commerce-react",
    vercel: "https://e-commerce-react-iota-seven.vercel.app/",
  },
  {
    name: "KSA Affiliate Offers Website",
    description:
      "This is a lightweight and responsive affiliate landing page application built with React and Tailwind CSS, designed to showcase affiliate offers targeted specifically for users in Saudi Arabia (KSA). The project focuses on simplicity, clean UI, and fast performance to maximize user engagement and conversions.",
    features: [
      "Built with React and component-based architecture",
      "Responsive design using Tailwind CSS",
      "Interactive and reusable offer cards with external affiliate links",
      "Clean layout optimized for mobile and desktop devices",
      "Simple routing and state handling for efficient rendering",
      "Focused on fast loading speed and clarity for marketing purposes",
    ],
    tech: ["React", "Tailwind CSS"],
    img: Ksa,
    github: "https://github.com/Ashraf-khaled-w/ksa-afflite",
    vercel: "https://ksa-afflite.vercel.app/",
  },
  {
    name: "Personal Portfolio – First Edition",
    description:
      "This is my first personal portfolio website, built using HTML5, CSS3, and vanilla JavaScript, with a focus on simplicity and clean design. The site serves as a central place to introduce myself, showcase my projects, and provide visitors with easy access to my work and contact information.",
    features: [
      "Fully responsive layout for desktop and mobile",
      "Simple and minimal design to highlight content",
      "Smooth scroll navigation between sections",
      "Dedicated sections for About, Projects, and Contact",
      "Built with clean, semantic HTML and custom CSS",
      "Deployed and structured for future scalability",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: Portfolio,
    github: "https://github.com/Ashraf-khaled-w/portfolio",
    vercel: "",
  },
  {
    name: "More Projects Coming Soon",
    description:
      "I'm always working on new and exciting web projects! Stay tuned for more updates and portfolio additions.",
    features: [
      "Innovative ideas in progress",
      "Modern web technologies",
      "Continuous learning and improvement",
      "More open-source contributions",
      "Stay tuned for updates!",
    ],
    tech: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vercel" ,"GitHub", "JavaScript", "and more"],
    img: HeroImage, 
    github: "",
    vercel: "",
  },
];

function ProjectSec() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const nextProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((current + 1) % projects.length);
      setFade(false);
    }, 300);
  };

  const prevProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((current - 1 + projects.length) % projects.length);
      setFade(false);
    }, 300);
  };

  const { name, description, features, tech, img, github, vercel } = projects[current];

  return (
    <div className={styles.centerWrapper}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.slideshow}>
        <div className={`${styles.projectCard} ${fade ? styles.fade : ""}`}>
          <div className={styles.imgWrapper}>
            <img src={img} alt={name} className={styles.projectImg} />
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
          {features && (
            <ul className={styles.featureList}>
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
          <div className={styles.techStack}>
            {tech.map((t, idx) => (
              <span key={idx} className={styles.techItem}>
                {t}
              </span>
            ))}
          </div>
          <div className={styles.links}>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={vercel} target="_blank" rel="noopener noreferrer">
              Vercel
            </a>
          </div>
        </div>
        <div className={styles.controls}>
          <button onClick={prevProject}>Previous</button>
          <span>
            {current + 1} / {projects.length}
          </span>
          <button onClick={nextProject}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSec;
