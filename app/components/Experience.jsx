import { SiTailwindcss } from "react-icons/si"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { FaPython } from "react-icons/fa";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import React from "react";

const Experience = () => {
  const frontendSkills = [
    {
      name: "HTML",
      level: "Experienced",
      icon: <AiFillHtml5 />,
      class: "fa-brands fa-html5",
    },
    {
      name: "CSS",
      level: "Experienced",
      icon: <IoLogoCss3 />,
      class: "fa-brands fa-css3",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: <FaJsSquare />,
      class: "fa-brands fa-js",
    },
    {
      name: "React",
      level: "Intermediate",
      icon: <FaReact />,
      class: "fa-brands fa-react",
    },
    {
      name: "NextJS",
      level: "Intermediate",
      icon: <TbBrandNextjs />,
      class: "fa-brands fa-react",
    },
    {
      name: "TailwindCSS",
      level: "Intermediate",
      icon: <SiTailwindcss />,
      class: "fa-brands fa-react",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      icon: <FaBootstrap />,
      class: "fa-brands fa-bootstrap",
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <AiFillGithub />,
      class: "fa-solid fa-code-branch",
    },
  ];

  const otherSkills = [
    {
      name: "Photoshop",
      level: "Intermediate",
      icon: <SiAdobephotoshop />,
      class: "fa-regular fa-image",
    },
    {
      name: "Illustrator",
      level: "Intermediate",
      icon: <SiAdobeillustrator />,
      class: "fa-solid fa-bezier-curve",
    },
    {
      name: "Excel",
      level: "Experienced",
      icon: <SiMicrosoftexcel />,
      class: "fa-solid fa-table",
    },
    {
      name: "Word",
      level: "Experienced",
      icon: <BsFillFileEarmarkWordFill />,
      class: "fa-regular fa-file-word",
    },
    {
      name: "PowerPoint",
      level: "Intermediate",
      icon: <SiMicrosoftpowerpoint />,
      class: "fa-solid fa-file-powerpoint",
    },
    {
      name: "Python",
      level: "Intermediate",
      icon: <FaPython />,
      class: "fa-brands fa-python",
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <article
        key={index}
        data-aos={`zoom-in-${index % 2 === 0 ? "right" : "left"}`}
      >
        <i className={skill.class}>{skill.icon}</i>
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </div>
      </article>
    ));

  return (
    <section id="experience" style={{ overflow: "hidden" }}>
      <p className="section__text__p1" data-aos="flip-left">
        Explore My
      </p>
      <h1 className="title" data-aos="flip-right">
        Experience
      </h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container" data-aos="zoom-in-right">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {renderSkills(frontendSkills)}
            </div>
          </div>
          <div className="details-container" data-aos="zoom-in-left">
            <h2 className="experience-sub-title">Other Skills</h2>
            <div className="article-container">{renderSkills(otherSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
